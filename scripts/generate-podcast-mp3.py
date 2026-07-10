"""
Podcast Script to MP3 Converter
Uses Microsoft Edge-TTS (free, neural voices) to generate realistic podcast audio.
Reads JSON/MD script files and produces multi-voice MP3 podcasts.
Uses ffmpeg directly (via imageio_ffmpeg) for audio concatenation.
"""

import os
import re
import json
import asyncio
import subprocess
import shutil
import edge_tts
from pathlib import Path
import imageio_ffmpeg

# ─── Configuration ───
CONTENT_DIR = r"D:\Ai Agent\new Brand\podcast\Content"
OUTPUT_DIR = r"D:\Ai Agent\new Brand\podcast\MP3"
TEMP_DIR = r"D:\Ai Agent\new Brand\podcast\temp"

# ffmpeg binary path
FFMPEG = imageio_ffmpeg.get_ffmpeg_exe()

# Voice assignments (Edge-TTS neural voices)
HOST_FEMALE_VOICES = [
    ("en-US-AriaNeural", "+0%", "+0Hz"),       # Dr. Sarah Chen
]
HOST_MALE_VOICES = [
    ("en-US-GuyNeural", "-2%", "-1Hz"),         # Marcus Webb
]

# Guest voice pools (rotated per episode for variety) - all confirmed available
GUEST_MALE_VOICES = [
    ("en-US-ChristopherNeural", "+0%", "+0Hz"),
    ("en-US-EricNeural", "+2%", "-2Hz"),
    ("en-US-RogerNeural", "-1%", "+1Hz"),
    ("en-GB-RyanNeural", "+0%", "-1Hz"),
    ("en-US-SteffanNeural", "+1%", "+0Hz"),
    ("en-GB-ThomasNeural", "-2%", "+0Hz"),
    ("en-US-BrianNeural", "+0%", "+1Hz"),
    ("en-CA-LiamNeural", "+0%", "-1Hz"),
]
GUEST_FEMALE_VOICES = [
    ("en-US-JennyNeural", "+1%", "+1Hz"),
    ("en-US-MichelleNeural", "-1%", "+0Hz"),
    ("en-US-EmmaNeural", "+0%", "-1Hz"),
    ("en-GB-SoniaNeural", "+0%", "+0Hz"),
    ("en-US-AvaNeural", "+0%", "+1Hz"),
    ("en-GB-LibbyNeural", "+1%", "-1Hz"),
    ("en-US-AnaNeural", "-1%", "+0Hz"),
    ("en-CA-ClaraNeural", "+0%", "+0Hz"),
]

# Known female guest first names
FEMALE_FIRST_NAMES = {
    "kaoutar", "katie", "rachel", "suzanne", "pamela", "bonnie", "julie",
    "linda", "daphne", "katalin", "bridget", "sama", "anna", "raquel",
    "aicha", "celia", "renee", "melanie", "tekedra",
}

# Pause durations (ms)
LINE_PAUSE = 350
SEGMENT_PAUSE = 1200
INTRO_SILENCE = 800
OUTRO_SILENCE = 1500


def is_female_guest(guest_name: str) -> bool:
    first_name = guest_name.split()[0].lower().replace("dr.", "").replace("dr ", "").strip()
    return first_name in FEMALE_FIRST_NAMES


def get_guest_voice(guest_name: str, episode_id: int):
    if is_female_guest(guest_name):
        pool = GUEST_FEMALE_VOICES
    else:
        pool = GUEST_MALE_VOICES
    return pool[episode_id % len(pool)]


def get_speaker_voice(speaker: str, guest_name: str, episode_id: int):
    speaker_lower = speaker.lower()
    if "sarah" in speaker_lower:
        return HOST_FEMALE_VOICES[0]
    elif "marcus" in speaker_lower:
        return HOST_MALE_VOICES[0]
    else:
        return get_guest_voice(guest_name, episode_id)


def clean_text(text: str) -> tuple:
    extra_pause = 0
    stage_dir_pattern = r'\*\(([^)]+)\)\*'
    stage_dirs = re.findall(stage_dir_pattern, text)
    for sd in stage_dirs:
        sd_lower = sd.lower()
        if "pause" in sd_lower or "silence" in sd_lower:
            extra_pause = max(extra_pause, 500)
        elif "laugh" in sd_lower:
            extra_pause = max(extra_pause, 200)
    text = re.sub(stage_dir_pattern, '', text)
    text = text.replace('**', '').replace('*', '').replace('_', '')
    text = text.replace('#', '').replace('---', '')
    text = re.sub(r'\s+', ' ', text).strip()
    return text, extra_pause


def parse_md_file(filepath: str):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    segments = []
    current_segment = "INTRO"
    current_lines = []

    segment_pattern = r'^##\s+\[?([^\]]+)\]?'
    speaker_pattern = r'^\*\*([^*:]+):\*\*\s*(.*)'

    for line in content.split('\n'):
        line = line.strip()
        seg_match = re.match(segment_pattern, line)
        if seg_match:
            if current_lines:
                segments.append({'segment': current_segment, 'lines': current_lines})
            current_segment = seg_match.group(1).strip()
            current_lines = []
            continue
        if line.startswith('**Show:**') or line.startswith('**Hosts:**') or line.startswith('**Guest:**') or line.startswith('**Duration:**') or line.startswith('**Date:**') or line.startswith('**Episode:**') or line.startswith('**Topic:**') or line.startswith('**Key Topics'):
            continue
        if line.startswith('#') and not line.startswith('##'):
            continue
        if line == '---' or line == '':
            continue
        if line.startswith('- ') or line.startswith('  '):
            continue
        sp_match = re.match(speaker_pattern, line)
        if sp_match:
            speaker = sp_match.group(1).strip()
            text = sp_match.group(2).strip()
            cleaned, extra_pause = clean_text(text)
            if cleaned:
                current_lines.append({
                    'speaker': speaker,
                    'text': cleaned,
                    'extra_pause': extra_pause
                })

    if current_lines:
        segments.append({'segment': current_segment, 'lines': current_lines})

    return segments


def parse_json_file(filepath: str):
    with open(filepath, 'r', encoding='utf-8') as f:
        data = json.load(f)

    segments = []
    for seg in data.get('script', []):
        lines = []
        for line in seg.get('lines', []):
            cleaned, extra_pause = clean_text(line.get('text', ''))
            if cleaned:
                lines.append({
                    'speaker': line.get('speaker', 'Unknown'),
                    'text': cleaned,
                    'extra_pause': extra_pause
                })
        if lines:
            segments.append({
                'segment': seg.get('segment', ''),
                'lines': lines
            })

    return segments


def get_guest_name(json_path: str) -> str:
    if not os.path.exists(json_path):
        return "Guest"
    with open(json_path, 'r', encoding='utf-8') as f:
        data = json.load(f)
    return data.get('guest', {}).get('name', 'Guest')


def generate_silence(duration_ms: int, output_path: str):
    duration_sec = duration_ms / 1000.0
    cmd = [
        FFMPEG, "-y", "-f", "lavfi",
        "-i", "anullsrc=r=24000:cl=mono",
        "-t", str(duration_sec),
        "-q:a", "9",
        output_path
    ]
    result = subprocess.run(cmd, capture_output=True, timeout=30)
    return os.path.exists(output_path) and os.path.getsize(output_path) > 100


async def generate_line_audio(text: str, voice: str, rate: str, pitch: str, output_path: str, max_retries: int = 5):
    # Split very long text into chunks to avoid "No audio received" errors
    MAX_CHUNK_LEN = 2000
    if len(text) > MAX_CHUNK_LEN:
        chunks = []
        sentences = text.split('. ')
        current = ''
        for s in sentences:
            if len(current) + len(s) + 2 > MAX_CHUNK_LEN:
                if current:
                    chunks.append(current)
                current = s
            else:
                current = current + '. ' + s if current else s
        if current:
            chunks.append(current)
        
        # Generate each chunk and concatenate
        chunk_files = []
        for ci, chunk in enumerate(chunks):
            chunk_file = output_path.replace('.mp3', f'_chunk{ci}.mp3')
            success = await generate_line_audio(chunk, voice, rate, pitch, chunk_file, max_retries)
            if success:
                chunk_files.append(chunk_file)
            await asyncio.sleep(0.3)
        
        if chunk_files:
            # Concatenate chunks
            list_file = output_path.replace('.mp3', '_chunks.txt')
            with open(list_file, 'w', encoding='utf-8') as f:
                for cf in chunk_files:
                    f.write(f"file '{cf.replace(chr(92), '/')}'\n")
            cmd = [FFMPEG, "-y", "-f", "concat", "-safe", "0", "-i", list_file, "-c", "copy", output_path]
            subprocess.run(cmd, capture_output=True, timeout=60)
            # Clean up chunks
            for cf in chunk_files:
                if os.path.exists(cf):
                    os.remove(cf)
            if os.path.exists(list_file):
                os.remove(list_file)
            return os.path.exists(output_path) and os.path.getsize(output_path) > 100
        return False
    
    for attempt in range(max_retries):
        try:
            communicate = edge_tts.Communicate(text, voice, rate=rate, pitch=pitch, volume="+0%")
            await communicate.save(output_path)
            if os.path.exists(output_path) and os.path.getsize(output_path) > 100:
                return True
            else:
                if attempt < max_retries - 1:
                    wait = 3 * (attempt + 1)
                    await asyncio.sleep(wait)
        except Exception as e:
            if attempt < max_retries - 1:
                wait = 3 * (attempt + 1)
                await asyncio.sleep(wait)
            else:
                print(f"      [ERROR] TTS failed after {max_retries} retries: {e}")
                return False
    return False


def concat_mp3_files(file_list_path: str, output_path: str):
    # Always re-encode for reliability (copy mode fails with different MP3 params)
    cmd = [
        FFMPEG, "-y",
        "-f", "concat",
        "-safe", "0",
        "-i", file_list_path,
        "-ar", "24000",
        "-ac", "1",
        "-b:a", "192k",
        output_path
    ]
    result = subprocess.run(cmd, capture_output=True, timeout=600)
    if result.returncode != 0:
        stderr = result.stderr.decode('utf-8', errors='replace')[-500:] if result.stderr else ''
        print(f"      [concat stderr] {stderr}")
    return result.returncode == 0


async def process_episode(content_dir: str, output_dir: str, temp_dir: str, basename: str):
    md_path = os.path.join(content_dir, basename + '.md')
    json_path = os.path.join(content_dir, basename + '.json')
    output_path = os.path.join(output_dir, basename + '.mp3')

    # Skip only if file exists AND is large enough (>= 50KB = real audio)
    if os.path.exists(output_path) and os.path.getsize(output_path) >= 50000:
        print(f"  [SKIP] {basename} (already exists, {os.path.getsize(output_path)//1024} KB)")
        return True
    # Delete bad/small existing file
    if os.path.exists(output_path) and os.path.getsize(output_path) < 50000:
        os.remove(output_path)
        print(f"  [REDO] {basename} (existing file too small, regenerating)")

    if os.path.exists(md_path):
        segments = parse_md_file(md_path)
        source = "MD"
    elif os.path.exists(json_path):
        segments = parse_json_file(json_path)
        source = "JSON"
    else:
        print(f"  [ERROR] No script file found for {basename}")
        return False

    if not segments:
        print(f"  [ERROR] No dialogue found in {basename}")
        return False

    guest_name = get_guest_name(json_path)
    episode_id = 0
    if os.path.exists(json_path):
        with open(json_path, 'r', encoding='utf-8') as f:
            data = json.load(f)
        episode_id = data.get('id', 0)

    total_lines = sum(len(seg['lines']) for seg in segments)
    print(f"  [PROCESS] {basename} ({source}, {len(segments)} segs, {total_lines} lines, guest: {guest_name})")

    ep_temp = os.path.join(temp_dir, basename)
    os.makedirs(ep_temp, exist_ok=True)

    # Pre-generate silence files
    silence_files = {}
    for dur in [LINE_PAUSE, SEGMENT_PAUSE, INTRO_SILENCE, OUTRO_SILENCE]:
        sfile = os.path.join(ep_temp, f"silence_{dur}.mp3")
        if not os.path.exists(sfile):
            generate_silence(dur, sfile)
        silence_files[dur] = sfile

    # Flatten all lines with their segment boundaries
    all_lines = []
    for seg_idx, segment in enumerate(segments):
        for line in segment['lines']:
            all_lines.append((seg_idx, line))

    concat_entries = []
    consecutive_line_failures = 0
    BATCH_SIZE = 5

    # Intro silence
    concat_entries.append(silence_files[INTRO_SILENCE])

    # Process lines in concurrent batches for speed
    for batch_start in range(0, len(all_lines), BATCH_SIZE):
        batch = all_lines[batch_start:batch_start + BATCH_SIZE]
        tasks = []
        for idx, (seg_idx, line) in enumerate(batch):
            line_idx = batch_start + idx
            voice, rate, pitch = get_speaker_voice(line['speaker'], guest_name, episode_id)
            temp_file = os.path.join(ep_temp, f"line_{line_idx:05d}.mp3")
            tasks.append(generate_line_audio(line['text'], voice, rate, pitch, temp_file))

        # Generate all lines in this batch concurrently
        results = await asyncio.gather(*tasks, return_exceptions=True)

        for idx, (seg_idx, line) in enumerate(batch):
            line_idx = batch_start + idx
            temp_file = os.path.join(ep_temp, f"line_{line_idx:05d}.mp3")
            result = results[idx]

            # Check if this is the first line of a new segment - add segment pause
            if line_idx > 0 and all_lines[line_idx - 1][0] != seg_idx:
                concat_entries.append(silence_files[SEGMENT_PAUSE])

            if result is True:
                concat_entries.append(temp_file)
                consecutive_line_failures = 0

                pause_dur = LINE_PAUSE + line.get('extra_pause', 0)
                if pause_dur not in silence_files:
                    sfile = os.path.join(ep_temp, f"silence_{pause_dur}.mp3")
                    if not os.path.exists(sfile):
                        generate_silence(pause_dur, sfile)
                    silence_files[pause_dur] = sfile
                concat_entries.append(silence_files[pause_dur])
            else:
                print(f"      [WARN] Skipping line {line_idx}")
                consecutive_line_failures += 1

                if consecutive_line_failures >= 5:
                    print(f"      [PAUSE] 5 consecutive failures, cooling down 20s...")
                    await asyncio.sleep(20)
                    consecutive_line_failures = 0

        done_count = min(batch_start + BATCH_SIZE, len(all_lines))
        if done_count % 10 == 0 or done_count == len(all_lines):
            print(f"      ... {done_count}/{total_lines} lines done")

        # Small delay between batches
        await asyncio.sleep(0.2)

    # Outro silence
    concat_entries.append(silence_files[OUTRO_SILENCE])

    # Write concat list
    list_path = os.path.join(ep_temp, "concat_list.txt")
    with open(list_path, 'w', encoding='utf-8') as f:
        for entry in concat_entries:
            entry_normalized = entry.replace("\\", "/")
            f.write(f"file '{entry_normalized}'\n")

    print(f"  [COMBINE] Concatenating {len(concat_entries)} segments...")

    success = concat_mp3_files(list_path, output_path)

    if success and os.path.exists(output_path):
        size_kb = os.path.getsize(output_path) // 1024
        print(f"  [DONE] {basename}.mp3 ({size_kb} KB)")
    else:
        print(f"  [ERROR] Failed to concatenate {basename}")
        return False

    # Clean up
    try:
        shutil.rmtree(ep_temp)
    except:
        pass

    return True


async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)
    os.makedirs(TEMP_DIR, exist_ok=True)

    json_files = sorted([f for f in os.listdir(CONTENT_DIR) if f.endswith('.json')])
    basenames = [f.replace('.json', '') for f in json_files]

    print("=" * 60)
    print("Podcast MP3 Generator (Edge-TTS + ffmpeg)")
    print(f"Found {len(basenames)} episodes to process")
    print(f"Output: {OUTPUT_DIR}")
    print(f"ffmpeg: {FFMPEG}")
    print("=" * 60 + "\n")

    success_count = 0
    fail_count = 0
    failed_episodes = []
    consecutive_failures = 0

    for i, basename in enumerate(basenames):
        print(f"\n[{i+1}/{len(basenames)}] {basename}")
        
        # Cooldown if we've had consecutive failures
        if consecutive_failures >= 3:
            cooldown = 60
            print(f"  [COOLDOWN] {consecutive_failures} consecutive failures, waiting {cooldown}s...")
            await asyncio.sleep(cooldown)
            consecutive_failures = 0
        
        try:
            result = await process_episode(CONTENT_DIR, OUTPUT_DIR, TEMP_DIR, basename)
            if result:
                # Check if output is actually good
                output_path = os.path.join(OUTPUT_DIR, basename + '.mp3')
                if os.path.exists(output_path) and os.path.getsize(output_path) >= 50000:
                    success_count += 1
                    consecutive_failures = 0
                else:
                    fail_count += 1
                    consecutive_failures += 1
                    failed_episodes.append(basename)
                    if os.path.exists(output_path):
                        os.remove(output_path)
            else:
                fail_count += 1
                consecutive_failures += 1
                failed_episodes.append(basename)
        except Exception as e:
            print(f"  [ERROR] Unexpected error: {e}")
            fail_count += 1
            consecutive_failures += 1
            failed_episodes.append(basename)
        
        # Delay between episodes to avoid rate limiting
        if i < len(basenames) - 1:
            wait_time = 2 if consecutive_failures == 0 else 10
            await asyncio.sleep(wait_time)

    try:
        shutil.rmtree(TEMP_DIR)
    except:
        pass

    print("\n" + "=" * 60)
    print(f"COMPLETE: {success_count} succeeded, {fail_count} failed")
    if failed_episodes:
        print(f"Failed: {', '.join(failed_episodes[:10])}{'...' if len(failed_episodes) > 10 else ''}")
    print(f"MP3 files: {OUTPUT_DIR}")
    print("=" * 60)


if __name__ == "__main__":
    asyncio.run(main())
