"""Generate 20 futuristic tech logos on dark backgrounds."""
from __future__ import annotations

import math
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

SIZE = 960
CENTER = SIZE // 2
FILL_RATIO = 0.92  # icon fills ~92% of canvas
DRAW_SCALE = 1.78   # draw larger before compositing
OUT_DIR = Path(__file__).parent / "Generated Logos"


def lerp_color(c1: tuple[int, int, int], c2: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    return tuple(int(a + (b - a) * t) for a, b in zip(c1, c2))


CYAN = (0, 240, 255)
BLUE = (0, 100, 220)
DEEP_BLUE = (0, 40, 120)
WHITE = (220, 245, 255)


def new_canvas() -> Image.Image:
    return Image.new("RGBA", (SIZE, SIZE), (0, 0, 0, 0))


def add_glow(layer: Image.Image, radius: int = 12, alpha: int = 180) -> Image.Image:
    glow = layer.copy()
    glow = glow.filter(ImageFilter.GaussianBlur(radius))
    glow_arr = np.array(glow)
    glow_arr[:, :, 3] = (glow_arr[:, :, 3].astype(float) * (alpha / 255)).astype(np.uint8)
    return Image.fromarray(glow_arr)


def gradient_line(draw: ImageDraw.ImageDraw, p1, p2, width: int, c1=CYAN, c2=BLUE):
    steps = max(int(math.hypot(p2[0] - p1[0], p2[1] - p1[1])), 1)
    for i in range(steps):
        t = i / max(steps - 1, 1)
        color = lerp_color(c1, c2, t) + (255,)
        x = p1[0] + (p2[0] - p1[0]) * t
        y = p1[1] + (p2[1] - p1[1]) * t
        draw.ellipse([x - width / 2, y - width / 2, x + width / 2, y + width / 2], fill=color)


def draw_ring(draw, cx, cy, r, width, start=0, end=360, color=CYAN, alpha=255):
    bbox = [cx - r, cy - r, cx + r, cy + r]
    draw.arc(bbox, start, end, fill=color + (alpha,), width=width)


def dark_background() -> Image.Image:
    """Dark navy gradient matching original logo style."""
    arr = np.zeros((SIZE, SIZE, 3), dtype=np.uint8)
    for y in range(SIZE):
        t = y / SIZE
        arr[y, :] = [int(4 + t * 6), int(8 + t * 12), int(22 + t * 18)]
    return Image.fromarray(arr, "RGB")


def upscale_layer(layer: Image.Image, factor: float) -> Image.Image:
    """Scale up logo layer so the icon fills more of the canvas."""
    bbox = layer.getbbox()
    if not bbox:
        return layer
    content = layer.crop(bbox)
    cw, ch = content.size
    nw, nh = int(cw * factor), int(ch * factor)
    scaled = content.resize((nw, nh), Image.LANCZOS)
    result = new_canvas()
    x = (SIZE - nw) // 2
    y = (SIZE - nh) // 2
    result.paste(scaled, (x, y), scaled)
    return result


def composite_glow(base: Image.Image, glow_radius: int = 10) -> Image.Image:
    base = upscale_layer(base, DRAW_SCALE)
    out = new_canvas()
    glow = add_glow(base, int(glow_radius * 1.4), 160)
    out = Image.alpha_composite(out, glow)
    out = Image.alpha_composite(out, base)
    return finalize(out)


def finalize(logo_rgba: Image.Image) -> Image.Image:
    """Place scaled-up logo on dark background, filling most of the frame."""
    bg = dark_background().convert("RGBA")
    bbox = logo_rgba.getbbox()
    if not bbox:
        return bg.convert("RGB")

    content = logo_rgba.crop(bbox)
    cw, ch = content.size
    target = int(SIZE * FILL_RATIO)
    ratio = target / max(cw, ch)
    nw, nh = int(cw * ratio), int(ch * ratio)
    content = content.resize((nw, nh), Image.LANCZOS)

    x = (SIZE - nw) // 2
    y = (SIZE - nh) // 2
    bg.paste(content, (x, y), content)
    return bg.convert("RGB")


# --- Logo designs ---

def logo_01_crossed_arrows():
    """Crossed arrows over radar rings."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    for i, r in enumerate([180, 140, 100, 60], 1):
        c = lerp_color(CYAN, BLUE, i / 4)
        draw_ring(draw, CENTER, CENTER, r, 6, color=c)
    for angle in [45, -45]:
        rad = math.radians(angle)
        length = 220
        x2 = CENTER + length * math.cos(rad)
        y2 = CENTER + length * math.sin(rad)
        x1 = CENTER - length * math.cos(rad)
        y1 = CENTER - length * math.sin(rad)
        gradient_line(draw, (x1, y1), (x2, y2), 28)
        # arrow tips
        for end_x, end_y, flip in [(x2, y2, 1), (x1, y1, -1)]:
            tip = [(end_x, end_y),
                   (end_x - 30 * flip * math.cos(rad) + 15 * math.sin(rad),
                    end_y - 30 * flip * math.sin(rad) - 15 * math.cos(rad)),
                   (end_x - 30 * flip * math.cos(rad) - 15 * math.sin(rad),
                    end_y - 30 * flip * math.sin(rad) + 15 * math.cos(rad))]
            draw.polygon(tip, fill=CYAN + (255,))
    return composite_glow(layer, 14)


def logo_02_orbital_ring():
    """Glowing ring with inner G-like swoosh."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    draw_ring(draw, CENTER, CENTER, 200, 22, color=CYAN)
    draw_ring(draw, CENTER, CENTER, 170, 4, color=BLUE, alpha=180)
    # inner swoosh
    bbox = [CENTER - 120, CENTER - 120, CENTER + 120, CENTER + 120]
    draw.arc(bbox, 200, 340, fill=WHITE + (255,), width=18)
    draw.polygon([
        (CENTER + 60, CENTER - 40),
        (CENTER + 110, CENTER - 10),
        (CENTER + 70, CENTER + 10),
    ], fill=CYAN + (255,))
    for a in range(0, 360, 30):
        rad = math.radians(a)
        x = CENTER + 230 * math.cos(rad)
        y = CENTER + 230 * math.sin(rad)
        draw.ellipse([x - 4, y - 4, x + 4, y + 4], fill=CYAN + (200,))
    return composite_glow(layer, 16)


def logo_03_letter_t():
    """Bold 3D-style T monogram."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    # top bar
    draw.rounded_rectangle([CENTER - 160, CENTER - 180, CENTER + 160, CENTER - 100],
                           radius=8, fill=CYAN + (255,))
    # stem
    draw.polygon([
        (CENTER - 50, CENTER - 100),
        (CENTER + 50, CENTER - 100),
        (CENTER + 35, CENTER + 180),
        (CENTER, CENTER + 220),
        (CENTER - 35, CENTER + 180),
    ], fill=BLUE + (255,))
    # highlight
    draw.line([(CENTER - 30, CENTER - 170), (CENTER + 30, CENTER - 170)], fill=WHITE + (200,), width=4)
    return composite_glow(layer, 12)


def logo_04_compass_star():
    """Four-point compass star with central orb."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    points = []
    for i in range(8):
        angle = math.radians(i * 45 - 90)
        r = 200 if i % 2 == 0 else 80
        points.append((CENTER + r * math.cos(angle), CENTER + r * math.sin(angle)))
    draw.polygon(points, fill=BLUE + (255,))
    draw.ellipse([CENTER - 40, CENTER - 40, CENTER + 40, CENTER + 40], fill=CYAN + (255,))
    draw.ellipse([CENTER - 25, CENTER - 25, CENTER + 25, CENTER + 25], fill=WHITE + (255,))
    draw_ring(draw, CENTER, CENTER, 130, 3, color=CYAN, alpha=150)
    return composite_glow(layer, 14)


def logo_05_hexagon_core():
    """Hexagonal tech emblem."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    for r, w in [(200, 8), (160, 4), (120, 3)]:
        pts = []
        for i in range(6):
            a = math.radians(60 * i - 30)
            pts.append((CENTER + r * math.cos(a), CENTER + r * math.sin(a)))
        draw.polygon(pts, outline=CYAN + (255,), width=w)
    inner = []
    for i in range(6):
        a = math.radians(60 * i - 30)
        inner.append((CENTER + 80 * math.cos(a), CENTER + 80 * math.sin(a)))
    draw.polygon(inner, fill=BLUE + (255,))
    draw.ellipse([CENTER - 20, CENTER - 20, CENTER + 20, CENTER + 20], fill=CYAN + (255,))
    return composite_glow(layer, 12)


def logo_06_diagonal_slash():
    """Circular HUD with diagonal slash."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    draw_ring(draw, CENTER, CENTER, 190, 10, color=CYAN)
    for i in range(0, 360, 15):
        if i % 30 == 0:
            rad = math.radians(i)
            x1 = CENTER + 150 * math.cos(rad)
            y1 = CENTER + 150 * math.sin(rad)
            x2 = CENTER + 190 * math.cos(rad)
            y2 = CENTER + 190 * math.sin(rad)
            draw.line([(x1, y1), (x2, y2)], fill=CYAN + (200,), width=3)
    draw.rounded_rectangle([CENTER - 180, CENTER - 25, CENTER + 180, CENTER + 25],
                           radius=4, fill=BLUE + (255,))
    draw.polygon([(CENTER + 160, CENTER - 60), (CENTER + 200, CENTER), (CENTER + 160, CENTER + 60)],
                 fill=CYAN + (255,))
    draw.ellipse([CENTER - 30, CENTER - 30, CENTER + 30, CENTER + 30], fill=WHITE + (255,))
    return composite_glow(layer, 14)


def logo_07_circuit_a():
    """Angular A with circuit nodes."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    draw.polygon([
        (CENTER, CENTER - 200),
        (CENTER + 180, CENTER + 180),
        (CENTER + 100, CENTER + 180),
        (CENTER, CENTER + 20),
        (CENTER - 100, CENTER + 180),
        (CENTER - 180, CENTER + 180),
    ], fill=BLUE + (255,))
    draw.rectangle([CENTER - 120, CENTER + 40, CENTER + 120, CENTER + 80], fill=CYAN + (255,))
    nodes = [(CENTER - 250, CENTER - 100), (CENTER + 250, CENTER - 80),
             (CENTER - 220, CENTER + 150), (CENTER + 230, CENTER + 120)]
    for nx, ny in nodes:
        draw.ellipse([nx - 8, ny - 8, nx + 8, ny + 8], fill=CYAN + (255,))
        draw.line([(nx, ny), (CENTER, CENTER)], fill=CYAN + (80,), width=2)
    return composite_glow(layer, 10)


def logo_08_gauge_arrow():
    """Gauge dial with directional arrow."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    draw_ring(draw, CENTER, CENTER, 200, 14, start=30, end=330, color=CYAN)
    draw_ring(draw, CENTER, CENTER, 160, 6, color=BLUE, alpha=180)
    for deg in range(30, 331, 30):
        rad = math.radians(deg)
        x1 = CENTER + 140 * math.cos(rad)
        y1 = CENTER + 140 * math.sin(rad)
        x2 = CENTER + 175 * math.cos(rad)
        y2 = CENTER + 175 * math.sin(rad)
        draw.line([(x1, y1), (x2, y2)], fill=CYAN + (200,), width=3)
    # arrow needle
    rad = math.radians(-40)
    tip = (CENTER + 170 * math.cos(rad), CENTER + 170 * math.sin(rad))
    draw.polygon([
        tip,
        (CENTER + 20 * math.cos(rad + 2.5), CENTER + 20 * math.sin(rad + 2.5)),
        (CENTER + 20 * math.cos(rad - 2.5), CENTER + 20 * math.sin(rad - 2.5)),
    ], fill=WHITE + (255,))
    draw.ellipse([CENTER - 25, CENTER - 25, CENTER + 25, CENTER + 25], fill=CYAN + (255,))
    return composite_glow(layer, 14)


def logo_09_shield_crest():
    """Shield with inner cross."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    draw.polygon([
        (CENTER, CENTER - 220),
        (CENTER + 180, CENTER - 80),
        (CENTER + 150, CENTER + 200),
        (CENTER, CENTER + 250),
        (CENTER - 150, CENTER + 200),
        (CENTER - 180, CENTER - 80),
    ], fill=BLUE + (255,), outline=CYAN + (255,), width=6)
    draw.rectangle([CENTER - 15, CENTER - 120, CENTER + 15, CENTER + 100], fill=CYAN + (255,))
    draw.rectangle([CENTER - 80, CENTER - 50, CENTER + 80, CENTER - 20], fill=CYAN + (255,))
    return composite_glow(layer, 12)


def logo_10_infinity_loop():
    """Infinity/loop tech symbol."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    for offset in [-80, 80]:
        draw.ellipse([CENTER + offset - 100, CENTER - 100, CENTER + offset + 100, CENTER + 100],
                     outline=CYAN + (255,), width=14)
    draw.ellipse([CENTER - 30, CENTER - 30, CENTER + 30, CENTER + 30], fill=WHITE + (255,))
    draw_ring(draw, CENTER, CENTER, 180, 3, color=BLUE, alpha=120)
    return composite_glow(layer, 14)


def logo_11_chevron_stack():
    """Stacked chevrons pointing up."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    for i, (size, color) in enumerate([(200, DEEP_BLUE), (150, BLUE), (100, CYAN)]):
        y_off = 60 + i * 30
        draw.polygon([
            (CENTER, CENTER - size // 2 + y_off),
            (CENTER + size // 2, CENTER + size // 4 + y_off),
            (CENTER - size // 2, CENTER + size // 4 + y_off),
        ], fill=color + (255,))
    return composite_glow(layer, 12)


def logo_12_orbit_dots():
    """Central core with orbiting dots."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    draw.ellipse([CENTER - 60, CENTER - 60, CENTER + 60, CENTER + 60], fill=CYAN + (255,))
    for r in [120, 180]:
        draw_ring(draw, CENTER, CENTER, r, 2, color=BLUE, alpha=150)
    for i in range(12):
        rad = math.radians(i * 30)
        r = 150 if i % 2 == 0 else 190
        x = CENTER + r * math.cos(rad)
        y = CENTER + r * math.sin(rad)
        sz = 12 if i % 3 == 0 else 7
        draw.ellipse([x - sz, y - sz, x + sz, y + sz], fill=CYAN + (255,))
    return composite_glow(layer, 16)


def logo_13_diamond_frame():
    """Diamond shape with inner circle."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    draw.polygon([
        (CENTER, CENTER - 220),
        (CENTER + 180, CENTER),
        (CENTER, CENTER + 220),
        (CENTER - 180, CENTER),
    ], outline=CYAN + (255,), width=12)
    draw.polygon([
        (CENTER, CENTER - 140),
        (CENTER + 110, CENTER),
        (CENTER, CENTER + 140),
        (CENTER - 110, CENTER),
    ], fill=BLUE + (200,))
    draw.ellipse([CENTER - 50, CENTER - 50, CENTER + 50, CENTER + 50], fill=CYAN + (255,))
    return composite_glow(layer, 12)


def logo_14_wave_pulse():
    """Pulse wave rings."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    for i, r in enumerate([60, 100, 140, 180, 220]):
        alpha = 255 - i * 40
        draw_ring(draw, CENTER, CENTER, r, 5, color=CYAN, alpha=alpha)
    draw.ellipse([CENTER - 35, CENTER - 35, CENTER + 35, CENTER + 35], fill=WHITE + (255,))
    return composite_glow(layer, 18)


def logo_15_triangle_grid():
    """Interlocking triangles."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    for dx, dy in [(0, -60), (-80, 60), (80, 60)]:
        cx, cy = CENTER + dx, CENTER + dy
        pts = [(cx, cy - 90), (cx + 78, cy + 45), (cx - 78, cy + 45)]
        draw.polygon(pts, outline=CYAN + (255,), width=6)
        draw.polygon([(cx, cy - 50), (cx + 43, cy + 25), (cx - 43, cy + 25)], fill=BLUE + (180,))
    draw.ellipse([CENTER - 20, CENTER - 20, CENTER + 20, CENTER + 20], fill=CYAN + (255,))
    return composite_glow(layer, 10)


def logo_16_lightning_bolt():
    """Stylized lightning in circle."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    draw_ring(draw, CENTER, CENTER, 200, 8, color=CYAN)
    draw.polygon([
        (CENTER + 20, CENTER - 180),
        (CENTER - 40, CENTER - 10),
        (CENTER + 10, CENTER - 10),
        (CENTER - 30, CENTER + 180),
        (CENTER + 50, CENTER + 10),
        (CENTER, CENTER + 10),
    ], fill=CYAN + (255,))
    return composite_glow(layer, 14)


def logo_17_double_ring():
    """Interlocking double rings."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    for ox in [-70, 70]:
        draw.ellipse([CENTER + ox - 100, CENTER - 100, CENTER + ox + 100, CENTER + 100],
                     outline=CYAN + (255,), width=16)
    draw.ellipse([CENTER - 25, CENTER - 25, CENTER + 25, CENTER + 25], fill=WHITE + (255,))
    return composite_glow(layer, 14)


def logo_18_spiral_arc():
    """Spiral arc segments."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    for i in range(5):
        r = 80 + i * 35
        start = i * 40
        c = lerp_color(CYAN, BLUE, i / 4)
        draw_ring(draw, CENTER, CENTER, r, 8, start=start, end=start + 200, color=c)
    draw.ellipse([CENTER - 30, CENTER - 30, CENTER + 30, CENTER + 30], fill=CYAN + (255,))
    return composite_glow(layer, 12)


def logo_19_cube_isometric():
    """Isometric 3D cube outline."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    s = 120
    top = [(CENTER, CENTER - s), (CENTER + s, CENTER - s // 2), (CENTER, CENTER), (CENTER - s, CENTER - s // 2)]
    left = [(CENTER - s, CENTER - s // 2), (CENTER, CENTER), (CENTER, CENTER + s), (CENTER - s, CENTER + s // 2)]
    right = [(CENTER, CENTER), (CENTER + s, CENTER - s // 2), (CENTER + s, CENTER + s // 2), (CENTER, CENTER + s)]
    draw.polygon(top, fill=CYAN + (255,))
    draw.polygon(left, fill=BLUE + (255,))
    draw.polygon(right, fill=DEEP_BLUE + (255,))
    return composite_glow(layer, 10)


def logo_20_phoenix_wings():
    """Abstract wing spread."""
    layer = new_canvas()
    draw = ImageDraw.Draw(layer)
    draw.polygon([
        (CENTER, CENTER + 80),
        (CENTER - 220, CENTER - 60),
        (CENTER - 80, CENTER - 40),
        (CENTER, CENTER - 200),
        (CENTER + 80, CENTER - 40),
        (CENTER + 220, CENTER - 60),
    ], fill=BLUE + (255,))
    draw.polygon([
        (CENTER, CENTER + 40),
        (CENTER - 60, CENTER - 20),
        (CENTER, CENTER - 120),
        (CENTER + 60, CENTER - 20),
    ], fill=CYAN + (255,))
    draw.ellipse([CENTER - 20, CENTER - 10, CENTER + 20, CENTER + 30], fill=WHITE + (255,))
    return composite_glow(layer, 14)


LOGOS = [
    ("logo_01_crossed_arrows", logo_01_crossed_arrows),
    ("logo_02_orbital_ring", logo_02_orbital_ring),
    ("logo_03_letter_t", logo_03_letter_t),
    ("logo_04_compass_star", logo_04_compass_star),
    ("logo_05_hexagon_core", logo_05_hexagon_core),
    ("logo_06_diagonal_slash", logo_06_diagonal_slash),
    ("logo_07_circuit_a", logo_07_circuit_a),
    ("logo_08_gauge_arrow", logo_08_gauge_arrow),
    ("logo_09_shield_crest", logo_09_shield_crest),
    ("logo_10_infinity_loop", logo_10_infinity_loop),
    ("logo_11_chevron_stack", logo_11_chevron_stack),
    ("logo_12_orbit_dots", logo_12_orbit_dots),
    ("logo_13_diamond_frame", logo_13_diamond_frame),
    ("logo_14_wave_pulse", logo_14_wave_pulse),
    ("logo_15_triangle_grid", logo_15_triangle_grid),
    ("logo_16_lightning_bolt", logo_16_lightning_bolt),
    ("logo_17_double_ring", logo_17_double_ring),
    ("logo_18_spiral_arc", logo_18_spiral_arc),
    ("logo_19_cube_isometric", logo_19_cube_isometric),
    ("logo_20_phoenix_wings", logo_20_phoenix_wings),
]


def main():
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    for name, fn in LOGOS:
        img = fn()
        path = OUT_DIR / f"{name}.png"
        img.save(path, "PNG")
        print(f"Created: {path.name}")
    print(f"\nDone! 20 logos saved to:\n{OUT_DIR}")


if __name__ == "__main__":
    main()