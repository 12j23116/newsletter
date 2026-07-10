"""
Generate 20 unique TechNanoAI brand logo icons.
10 with backgrounds, 10 with transparent backgrounds.
Output: D:/Ai Agent/new Brand/All Images/Logo/
"""

from __future__ import annotations

import math
import os
from pathlib import Path

from PIL import Image, ImageDraw, ImageFilter

OUTPUT_DIR = Path(r"D:\Ai Agent\new Brand\All Images\Logo")
SIZE = 1024
CENTER = SIZE // 2

# Brand palette
BLUE = (59, 130, 246)
CYAN = (6, 182, 212)
PURPLE = (139, 92, 246)
PINK = (236, 72, 153)
GREEN = (16, 185, 129)
ORANGE = (245, 158, 11)
WHITE = (240, 240, 245)
DARK = (10, 10, 15)
DARK2 = (18, 18, 26)
DARK3 = (26, 26, 46)


def lerp(a: float, b: float, t: float) -> float:
    return a + (b - a) * t


def lerp_color(c1: tuple[int, int, int], c2: tuple[int, int, int], t: float) -> tuple[int, int, int]:
    return (
        int(lerp(c1[0], c2[0], t)),
        int(lerp(c1[1], c2[1], t)),
        int(lerp(c1[2], c2[2], t)),
    )


def radial_gradient_bg(
    size: int,
    inner: tuple[int, int, int],
    outer: tuple[int, int, int],
    center: tuple[float, float] | None = None,
) -> Image.Image:
    img = Image.new("RGB", (size, size))
    cx, cy = center or (size / 2, size / 2)
    max_r = math.hypot(size, size) / 2
    px = img.load()
    for y in range(size):
        for x in range(size):
            d = math.hypot(x - cx, y - cy) / max_r
            t = min(1.0, d)
            px[x, y] = lerp_color(inner, outer, t)
    return img


def linear_gradient_bg(
    size: int,
    c1: tuple[int, int, int],
    c2: tuple[int, int, int],
    angle_deg: float = 135,
) -> Image.Image:
    img = Image.new("RGB", (size, size))
    px = img.load()
    rad = math.radians(angle_deg)
    cos_a, sin_a = math.cos(rad), math.sin(rad)
    for y in range(size):
        for x in range(size):
            nx = (x / size - 0.5) * cos_a + (y / size - 0.5) * sin_a + 0.5
            t = max(0.0, min(1.0, nx))
            px[x, y] = lerp_color(c1, c2, t)
    return img


def mesh_gradient_bg(size: int) -> Image.Image:
    base = Image.new("RGB", (size, size), DARK)
    overlays = [
        (BLUE, 0.15, (size * 0.2, size * 0.2)),
        (PURPLE, 0.15, (size * 0.8, size * 0.2)),
        (CYAN, 0.1, (size * 0.2, size * 0.8)),
        (PINK, 0.1, (size * 0.8, size * 0.8)),
    ]
    for color, alpha, (cx, cy) in overlays:
        layer = radial_gradient_bg(size, color, (0, 0, 0), (cx, cy))
        mask = Image.new("L", (size, size), 0)
        mpx = mask.load()
        max_r = size * 0.55
        for y in range(size):
            for x in range(size):
                d = math.hypot(x - cx, y - cy) / max_r
                mpx[x, y] = int(max(0, (1 - d) ** 2) * 255 * alpha * 6)
        base = Image.composite(layer, base, mask)
    return base


def new_canvas(transparent: bool) -> Image.Image:
    mode = "RGBA" if transparent else "RGB"
    fill = (0, 0, 0, 0) if transparent else DARK
    return Image.new(mode, (SIZE, SIZE), fill)


def add_glow(img: Image.Image, color: tuple[int, int, int], radius: int = 12) -> Image.Image:
    glow = Image.new("RGBA", img.size, (0, 0, 0, 0))
    glow.paste(img)
    glow = glow.filter(ImageFilter.GaussianBlur(radius))
    tint = Image.new("RGBA", img.size, (*color, 80))
    glow = Image.composite(tint, Image.new("RGBA", img.size, (0, 0, 0, 0)), glow.split()[3])
    result = Image.alpha_composite(glow, img.convert("RGBA"))
    return result


def hex_points(cx: float, cy: float, r: float, rotation: float = 0) -> list[tuple[float, float]]:
    pts = []
    for i in range(6):
        ang = rotation + math.pi / 6 + i * math.pi / 3
        pts.append((cx + r * math.cos(ang), cy + r * math.sin(ang)))
    return pts


def draw_hex(draw: ImageDraw.ImageDraw, cx: float, cy: float, r: float, fill, outline=None, width=2, rot=0):
    draw.polygon(hex_points(cx, cy, r, rot), fill=fill, outline=outline, width=width)


def draw_neural_network(draw: ImageDraw.ImageDraw, cx: float, cy: float, scale: float, colors: list):
    nodes = [
        (0, -0.35), (-0.3, -0.1), (0.3, -0.1),
        (-0.45, 0.2), (0, 0.15), (0.45, 0.2),
        (-0.2, 0.4), (0.2, 0.4),
    ]
    edges = [
        (0, 1), (0, 2), (1, 3), (1, 4), (2, 4), (2, 5),
        (3, 6), (4, 6), (4, 7), (5, 7),
    ]
    pts = [(cx + x * SIZE * scale, cy + y * SIZE * scale) for x, y in nodes]
    for i, j in edges:
        draw.line([pts[i], pts[j]], fill=(*colors[0][:3], 120) if len(colors[0]) == 4 else colors[0], width=4)
    for i, (x, y) in enumerate(pts):
        r = 18 if i == 0 else 14
        c = colors[i % len(colors)]
        draw.ellipse([x - r, y - r, x + r, y + r], fill=c, outline=WHITE, width=2)


def draw_atom_orbit(draw: ImageDraw.ImageDraw, cx: float, cy: float, r: float, color, rot=0):
    for i in range(3):
        angle = rot + i * math.pi / 3
        bbox = [
            cx - r * math.cos(angle) - r * 0.9,
            cy - r * math.sin(angle) - r * 0.35,
            cx + r * math.cos(angle) + r * 0.9,
            cy + r * math.sin(angle) + r * 0.35,
        ]
        draw.ellipse(bbox, outline=color, width=4)
    draw.ellipse([cx - 16, cy - 16, cx + 16, cy + 16], fill=color)
    draw.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=WHITE)


def draw_circuit_paths(draw: ImageDraw.ImageDraw, cx: float, cy: float, scale: float, color):
    s = SIZE * scale
    paths = [
        [(cx - s * 0.4, cy), (cx - s * 0.15, cy), (cx - s * 0.15, cy - s * 0.25), (cx + s * 0.1, cy - s * 0.25)],
        [(cx + s * 0.4, cy), (cx + s * 0.15, cy), (cx + s * 0.15, cy + s * 0.25), (cx - s * 0.1, cy + s * 0.25)],
        [(cx, cy - s * 0.35), (cx, cy - s * 0.1)],
        [(cx, cy + s * 0.35), (cx, cy + s * 0.1)],
    ]
    for path in paths:
        draw.line(path, fill=color, width=5, joint="curve")
    for path in paths:
        for pt in [path[0], path[-1]]:
            draw.ellipse([pt[0] - 10, pt[1] - 10, pt[0] + 10, pt[1] + 10], fill=color)
    draw.rectangle([cx - 28, cy - 28, cx + 28, cy + 28], fill=DARK2, outline=color, width=4)
    draw.text((cx - 18, cy - 22), "TN", fill=WHITE)


def draw_nano_dots(draw: ImageDraw.ImageDraw, cx: float, cy: float, count: int, radius: float, colors):
    for i in range(count):
        ang = i * 2 * math.pi / count + 0.3
        dist = radius * (0.5 + 0.5 * math.sin(i * 1.7))
        x = cx + dist * math.cos(ang)
        y = cy + dist * math.sin(ang)
        r = 6 + (i % 4) * 3
        draw.ellipse([x - r, y - r, x + r, y + r], fill=colors[i % len(colors)])


def draw_spiral_data(draw: ImageDraw.ImageDraw, cx: float, cy: float, color, turns=3):
    pts = []
    for t in range(200):
        theta = t / 200 * turns * 2 * math.pi
        r = 30 + t * 1.8
        pts.append((cx + r * math.cos(theta), cy + r * math.sin(theta)))
    for i in range(len(pts) - 1):
        alpha = int(255 * (i / len(pts)))
        draw.line([pts[i], pts[i + 1]], fill=(*color, alpha), width=6)


def draw_quantum_rings(draw: ImageDraw.ImageDraw, cx: float, cy: float, r: float):
    for i, (c, w) in enumerate([(CYAN, 5), (PURPLE, 4), (PINK, 3)]):
        offset = i * 22
        draw.ellipse([cx - r + offset, cy - r + offset, cx + r - offset, cy + r - offset], outline=c, width=w)
    draw.ellipse([cx - 12, cy - 12, cx + 12, cy + 12], fill=WHITE)
    draw.ellipse([cx - 6, cy - 6, cx + 6, cy + 6], fill=CYAN)


def draw_chip_core(draw: ImageDraw.ImageDraw, cx: float, cy: float, size: float, color):
    half = size / 2
    draw.rounded_rectangle([cx - half, cy - half, cx + half, cy + half], radius=20, fill=DARK2, outline=color, width=5)
    inner = size * 0.35
    draw.rectangle([cx - inner, cy - inner, cx + inner, cy + inner], fill=color)
    pin_len = size * 0.18
    for i in range(6):
        offset = -half + (i + 0.5) * (size / 6)
        draw.rectangle([cx + offset - 4, cy - half - pin_len, cx + offset + 4, cy - half], fill=color)
        draw.rectangle([cx + offset - 4, cy + half, cx + offset + 4, cy + half + pin_len], fill=color)
        draw.rectangle([cx - half - pin_len, cy + offset - 4, cx - half, cy + offset + 4], fill=color)
        draw.rectangle([cx + half, cy + offset - 4, cx + half + pin_len, cy + offset + 4], fill=color)


def draw_dna_helix(draw: ImageDraw.ImageDraw, cx: float, cy: float, height: float, c1, c2):
    steps = 40
    for i in range(steps):
        t = i / steps
        y = cy - height / 2 + t * height
        x1 = cx + 60 * math.sin(t * 4 * math.pi)
        x2 = cx - 60 * math.sin(t * 4 * math.pi)
        r = 8
        draw.ellipse([x1 - r, y - r, x1 + r, y + r], fill=c1)
        draw.ellipse([x2 - r, y - r, x2 + r, y + r], fill=c2)
        if i % 4 == 0:
            draw.line([(x1, y), (x2, y)], fill=(*WHITE[:3], 100), width=2)


def draw_lightning_nano(draw: ImageDraw.ImageDraw, cx: float, cy: float, scale: float, color):
    s = SIZE * scale
    bolt = [
        (cx + s * 0.05, cy - s * 0.35),
        (cx - s * 0.12, cy - s * 0.02),
        (cx + s * 0.02, cy - s * 0.02),
        (cx - s * 0.08, cy + s * 0.38),
        (cx + s * 0.15, cy + s * 0.05),
        (cx + s * 0.0, cy + s * 0.05),
        (cx + s * 0.12, cy - s * 0.35),
    ]
    draw.polygon(bolt, fill=color)
    for i in range(8):
        ang = i * math.pi / 4
        dist = s * 0.42
        x = cx + dist * math.cos(ang)
        y = cy + dist * math.sin(ang)
        draw.ellipse([x - 5, y - 5, x + 5, y + 5], fill=CYAN if i % 2 else PURPLE)


def draw_t_monogram(draw: ImageDraw.ImageDraw, cx: float, cy: float, size: float, color):
    w = size * 0.7
    h = size * 0.15
    stem_w = size * 0.22
    draw.rounded_rectangle([cx - w / 2, cy - size * 0.45, cx + w / 2, cy - size * 0.45 + h], radius=8, fill=color)
    draw.rounded_rectangle([cx - stem_w / 2, cy - size * 0.45, cx + stem_w / 2, cy + size * 0.4], radius=8, fill=color)
    draw.ellipse([cx + w * 0.25, cy + size * 0.1, cx + w * 0.25 + 30, cy + size * 0.1 + 30], fill=CYAN)


def draw_nano_grid(draw: ImageDraw.ImageDraw, cx: float, cy: float, cell: float, color):
    rows, cols = 5, 5
    start_x = cx - (cols - 1) * cell / 2
    start_y = cy - (rows - 1) * cell / 2
    for row in range(rows):
        for col in range(cols):
            x = start_x + col * cell
            y = start_y + row * cell
            if (row + col) % 2 == 0:
                draw_hex(draw, x, y, cell * 0.38, fill=(*color, 180) if isinstance(color, tuple) and len(color) == 3 else color, outline=CYAN, width=2)


def draw_orbital_rings(draw: ImageDraw.ImageDraw, cx: float, cy: float, r: float):
    colors = [BLUE, CYAN, PURPLE]
    for i, c in enumerate(colors):
        w = 6 - i
        rr = r - i * 30
        draw.ellipse([cx - rr, cy - rr * 0.4, cx + rr, cy + rr * 0.4], outline=c, width=w)
    draw.ellipse([cx - 20, cy - 20, cx + 20, cy + 20], fill=PINK, outline=WHITE, width=3)


def draw_shield_nano(draw: ImageDraw.ImageDraw, cx: float, cy: float, size: float, color):
    top = cy - size * 0.45
    shield = [
        (cx, top),
        (cx + size * 0.45, top + size * 0.25),
        (cx + size * 0.4, cy + size * 0.35),
        (cx, cy + size * 0.5),
        (cx - size * 0.4, cy + size * 0.35),
        (cx - size * 0.45, top + size * 0.25),
    ]
    draw.polygon(shield, fill=(*color, 40), outline=color, width=5)
    draw_hex(draw, cx, cy, size * 0.15, fill=CYAN, outline=WHITE, width=2)
    for i in range(6):
        ang = i * math.pi / 3
        x = cx + size * 0.28 * math.cos(ang)
        y = cy + size * 0.15 + size * 0.22 * math.sin(ang)
        draw.ellipse([x - 6, y - 6, x + 6, y + 6], fill=PURPLE)


def draw_infinity_ai(draw: ImageDraw.ImageDraw, cx: float, cy: float, size: float, color):
    steps = 100
    pts = []
    for i in range(steps + 1):
        t = i / steps * 2 * math.pi
        denom = 1 + math.sin(t) ** 2
        x = cx + size * math.cos(t) / denom
        y = cy + size * math.sin(t) * math.cos(t) / denom
        pts.append((x, y))
    for i in range(len(pts) - 1):
        draw.line([pts[i], pts[i + 1]], fill=color, width=8)
    draw.ellipse([cx - 14, cy - 14, cx + 14, cy + 14], fill=WHITE)
    draw.ellipse([cx - 7, cy - 7, cx + 7, cy + 7], fill=PINK)


def draw_prism_refract(draw: ImageDraw.ImageDraw, cx: float, cy: float, size: float):
    tri = [
        (cx, cy - size * 0.4),
        (cx - size * 0.38, cy + size * 0.3),
        (cx + size * 0.38, cy + size * 0.3),
    ]
    draw.polygon(tri, fill=(*CYAN, 60), outline=WHITE, width=4)
    beams = [
        ([(cx - size * 0.7, cy - size * 0.05), (cx - size * 0.38, cy + size * 0.05)], WHITE),
        ([(cx - size * 0.35, cy + size * 0.05), (cx + size * 0.5, cy - size * 0.2)], BLUE),
        ([(cx - size * 0.35, cy + size * 0.05), (cx + size * 0.45, cy + size * 0.15)], PURPLE),
        ([(cx - size * 0.35, cy + size * 0.05), (cx + size * 0.35, cy + size * 0.35)], PINK),
    ]
    for path, c in beams:
        draw.line(path, fill=c, width=5)


def draw_waveform_brain(draw: ImageDraw.ImageDraw, cx: float, cy: float, size: float, color):
    draw.ellipse([cx - size, cy - size * 0.8, cx + size, cy + size * 0.8], fill=(*color, 30), outline=color, width=4)
    wave_pts = []
    for i in range(80):
        t = i / 79
        x = cx - size * 0.7 + t * size * 1.4
        y = cy + 40 * math.sin(t * 6 * math.pi) * math.sin(t * math.pi)
        wave_pts.append((x, y))
    for i in range(len(wave_pts) - 1):
        draw.line([wave_pts[i], wave_pts[i + 1]], fill=CYAN, width=5)


def draw_cube_isometric(draw: ImageDraw.ImageDraw, cx: float, cy: float, size: float):
    h = size * 0.5
    w = size * 0.45
    top = [(cx, cy - h), (cx + w, cy - h * 0.5), (cx, cy), (cx - w, cy - h * 0.5)]
    right = [(cx + w, cy - h * 0.5), (cx + w, cy + h * 0.5), (cx, cy + h), (cx, cy)]
    left = [(cx - w, cy - h * 0.5), (cx, cy), (cx, cy + h), (cx - w, cy + h * 0.5)]
    draw.polygon(left, fill=(59, 130, 246, 120), outline=BLUE, width=3)
    draw.polygon(right, fill=(139, 92, 246, 120), outline=PURPLE, width=3)
    draw.polygon(top, fill=(6, 182, 212, 140), outline=CYAN, width=3)
    draw.ellipse([cx - 8, cy - 8, cx + 8, cy + 8], fill=WHITE)


def apply_rounded_bg(img: Image.Image, radius: int, bg_color) -> Image.Image:
    mask = Image.new("L", img.size, 0)
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle([0, 0, SIZE, SIZE], radius=radius, fill=255)
    if img.mode != "RGBA":
        img = img.convert("RGBA")
    bg = Image.new("RGBA", img.size, (*bg_color, 255))
    result = Image.new("RGBA", img.size, (0, 0, 0, 0))
    result.paste(bg, mask=mask)
    result.paste(img, mask=mask)
    return result


# ── Logo generators ──────────────────────────────────────────

def logo_01_neural_pulse(transparent: bool) -> Image.Image:
    if transparent:
        img = new_canvas(True)
    else:
        img = mesh_gradient_bg(SIZE).convert("RGBA")
    draw = ImageDraw.Draw(img)
    draw_neural_network(draw, CENTER, CENTER, 0.55, [BLUE, CYAN, PURPLE, PINK, GREEN, CYAN, BLUE, PURPLE])
    return img if transparent else apply_rounded_bg(img, 180, DARK)


def logo_02_hex_nano_lattice(transparent: bool) -> Image.Image:
    if transparent:
        img = new_canvas(True)
    else:
        img = linear_gradient_bg(SIZE, DARK3, DARK).convert("RGBA")
    draw = ImageDraw.Draw(img)
    for ring, (r, c) in enumerate([(200, BLUE), (140, CYAN), (80, PURPLE)]):
        draw_hex(draw, CENTER, CENTER, r, fill=None, outline=c, width=5 - ring)
    draw_nano_grid(draw, CENTER, CENTER, 55, BLUE)
    draw.ellipse([CENTER - 22, CENTER - 22, CENTER + 22, CENTER + 22], fill=WHITE)
    return img if transparent else apply_rounded_bg(img, 200, DARK2)


def logo_03_quantum_atom(transparent: bool) -> Image.Image:
    if transparent:
        img = new_canvas(True)
    else:
        img = radial_gradient_bg(SIZE, (20, 30, 60), DARK).convert("RGBA")
    draw = ImageDraw.Draw(img)
    draw_atom_orbit(draw, CENTER, CENTER, 220, CYAN, rot=0.4)
    draw_atom_orbit(draw, CENTER, CENTER, 160, PURPLE, rot=-0.2)
    return img if transparent else apply_rounded_bg(img, 160, (15, 20, 40))


def logo_04_circuit_monogram(transparent: bool) -> Image.Image:
    if transparent:
        img = new_canvas(True)
    else:
        img = linear_gradient_bg(SIZE, (20, 25, 45), (10, 10, 20)).convert("RGBA")
    draw = ImageDraw.Draw(img)
    draw_circuit_paths(draw, CENTER, CENTER, 0.5, CYAN)
    return img if transparent else apply_rounded_bg(img, 180, DARK)


def logo_05_particle_constellation(transparent: bool) -> Image.Image:
    if transparent:
        img = new_canvas(True)
    else:
        img = radial_gradient_bg(SIZE, PURPLE, DARK, (SIZE * 0.35, SIZE * 0.35)).convert("RGBA")
    draw = ImageDraw.Draw(img)
    draw_nano_dots(draw, CENTER, CENTER, 24, 280, [CYAN, BLUE, PINK, WHITE, GREEN])
    draw.ellipse([CENTER - 30, CENTER - 30, CENTER + 30, CENTER + 30], fill=BLUE, outline=WHITE, width=3)
    return img if transparent else apply_rounded_bg(img, 220, DARK)


def logo_06_ai_chip_fusion(transparent: bool) -> Image.Image:
    if transparent:
        img = new_canvas(True)
    else:
        img = linear_gradient_bg(SIZE, BLUE, PURPLE, 45).convert("RGBA")
    draw = ImageDraw.Draw(img)
    draw_chip_core(draw, CENTER, CENTER, 280, WHITE if not transparent else CYAN)
    draw_neural_network(draw, CENTER, CENTER, 0.25, [PINK, CYAN, BLUE])
    return img if transparent else apply_rounded_bg(img, 190, (30, 40, 80))


def logo_07_molecular_bond(transparent: bool) -> Image.Image:
    if transparent:
        img = new_canvas(True)
    else:
        img = mesh_gradient_bg(SIZE).convert("RGBA")
    draw = ImageDraw.Draw(img)
    atoms = [(CENTER - 120, CENTER - 80), (CENTER + 130, CENTER - 60), (CENTER - 90, CENTER + 100), (CENTER + 110, CENTER + 90), (CENTER, CENTER)]
    colors = [BLUE, CYAN, PURPLE, PINK, WHITE]
    pairs = [(0, 4), (1, 4), (2, 4), (3, 4), (0, 2), (1, 3)]
    for i, j in pairs:
        draw.line([atoms[i], atoms[j]], fill=(*CYAN, 150), width=4)
    for (x, y), c in zip(atoms, colors):
        draw.ellipse([x - 28, y - 28, x + 28, y + 28], fill=c, outline=WHITE, width=2)
    return img if transparent else apply_rounded_bg(img, 200, DARK)


def logo_08_data_spiral(transparent: bool) -> Image.Image:
    if transparent:
        img = new_canvas(True)
    else:
        img = radial_gradient_bg(SIZE, (10, 40, 50), DARK).convert("RGBA")
    draw = ImageDraw.Draw(img)
    draw_spiral_data(draw, CENTER, CENTER, CYAN, turns=2.5)
    draw.ellipse([CENTER - 18, CENTER - 18, CENTER + 18, CENTER + 18], fill=PURPLE, outline=WHITE, width=2)
    return img if transparent else apply_rounded_bg(img, 170, (8, 25, 35))


def logo_09_shield_nano(transparent: bool) -> Image.Image:
    if transparent:
        img = new_canvas(True)
    else:
        img = linear_gradient_bg(SIZE, (15, 25, 50), (25, 15, 45)).convert("RGBA")
    draw = ImageDraw.Draw(img)
    draw_shield_nano(draw, CENTER, CENTER, 400, BLUE)
    return img if transparent else apply_rounded_bg(img, 210, DARK2)


def logo_10_cube_matrix(transparent: bool) -> Image.Image:
    if transparent:
        img = new_canvas(True)
    else:
        img = linear_gradient_bg(SIZE, DARK, (30, 20, 50), 225).convert("RGBA")
    draw = ImageDraw.Draw(img)
    draw_cube_isometric(draw, CENTER, CENTER - 30, 320)
    for ox, oy in [(-100, 80), (100, 80), (0, 130)]:
        draw_cube_isometric(draw, CENTER + ox, CENTER + oy, 100)
    return img if transparent else apply_rounded_bg(img, 185, DARK)


def logo_11_minimal_hex_mark(transparent: bool) -> Image.Image:
    img = new_canvas(True)
    draw = ImageDraw.Draw(img)
    draw_hex(draw, CENTER, CENTER, 280, fill=None, outline=BLUE, width=12)
    draw_hex(draw, CENTER, CENTER, 180, fill=(*CYAN, 80), outline=CYAN, width=6)
    draw.ellipse([CENTER - 40, CENTER - 40, CENTER + 40, CENTER + 40], fill=PURPLE)
    return img


def logo_12_orbital_symbol(transparent: bool) -> Image.Image:
    img = new_canvas(True)
    draw = ImageDraw.Draw(img)
    draw_orbital_rings(draw, CENTER, CENTER, 300)
    return img


def logo_13_synapse_node(transparent: bool) -> Image.Image:
    img = new_canvas(True)
    draw = ImageDraw.Draw(img)
    draw_neural_network(draw, CENTER, CENTER, 0.6, [PURPLE, BLUE, CYAN, PINK, GREEN, ORANGE, BLUE, CYAN])
    return img


def logo_14_circuit_glyph(transparent: bool) -> Image.Image:
    img = new_canvas(True)
    draw = ImageDraw.Draw(img)
    draw_circuit_paths(draw, CENTER, CENTER, 0.55, BLUE)
    return img


def logo_15_dot_orbit(transparent: bool) -> Image.Image:
    img = new_canvas(True)
    draw = ImageDraw.Draw(img)
    draw.ellipse([CENTER - 250, CENTER - 250, CENTER + 250, CENTER + 250], outline=(*BLUE, 100), width=3)
    draw_nano_dots(draw, CENTER, CENTER, 16, 250, [CYAN, PURPLE, PINK, BLUE])
    draw.ellipse([CENTER - 35, CENTER - 35, CENTER + 35, CENTER + 35], fill=BLUE, outline=WHITE, width=4)
    return img


def logo_16_quantum_entangle(transparent: bool) -> Image.Image:
    img = new_canvas(True)
    draw = ImageDraw.Draw(img)
    draw_quantum_rings(draw, CENTER - 100, CENTER, 120)
    draw_quantum_rings(draw, CENTER + 100, CENTER, 120)
    draw.line([(CENTER - 40, CENTER), (CENTER + 40, CENTER)], fill=PINK, width=6)
    return img


def logo_17_chip_glyph(transparent: bool) -> Image.Image:
    img = new_canvas(True)
    draw = ImageDraw.Draw(img)
    draw_chip_core(draw, CENTER, CENTER, 340, PURPLE)
    return img


def logo_18_dna_nano(transparent: bool) -> Image.Image:
    img = new_canvas(True)
    draw = ImageDraw.Draw(img)
    draw_dna_helix(draw, CENTER, CENTER, 500, CYAN, PURPLE)
    draw_hex(draw, CENTER, CENTER - 200, 40, fill=PINK, outline=WHITE, width=2)
    draw_hex(draw, CENTER, CENTER + 200, 40, fill=BLUE, outline=WHITE, width=2)
    return img


def logo_19_lightning_nano(transparent: bool) -> Image.Image:
    img = new_canvas(True)
    draw = ImageDraw.Draw(img)
    draw_lightning_nano(draw, CENTER, CENTER, 0.55, BLUE)
    return add_glow(img, BLUE, 8)


def logo_20_t_prism_monogram(transparent: bool) -> Image.Image:
    img = new_canvas(True)
    draw = ImageDraw.Draw(img)
    draw_prism_refract(draw, CENTER, CENTER + 40, 280)
    draw_t_monogram(draw, CENTER, CENTER - 60, 200, WHITE)
    return img


WITH_BG = [
    ("01-neural-pulse-bg", logo_01_neural_pulse),
    ("02-hex-nano-lattice-bg", logo_02_hex_nano_lattice),
    ("03-quantum-atom-bg", logo_03_quantum_atom),
    ("04-circuit-monogram-bg", logo_04_circuit_monogram),
    ("05-particle-constellation-bg", logo_05_particle_constellation),
    ("06-ai-chip-fusion-bg", logo_06_ai_chip_fusion),
    ("07-molecular-bond-bg", logo_07_molecular_bond),
    ("08-data-spiral-bg", logo_08_data_spiral),
    ("09-shield-nano-bg", logo_09_shield_nano),
    ("10-cube-matrix-bg", logo_10_cube_matrix),
]

NO_BG = [
    ("11-minimal-hex-mark", logo_11_minimal_hex_mark),
    ("12-orbital-symbol", logo_12_orbital_symbol),
    ("13-synapse-node", logo_13_synapse_node),
    ("14-circuit-glyph", logo_14_circuit_glyph),
    ("15-dot-orbit", logo_15_dot_orbit),
    ("16-quantum-entangle", logo_16_quantum_entangle),
    ("17-chip-glyph", logo_17_chip_glyph),
    ("18-dna-nano", logo_18_dna_nano),
    ("19-lightning-nano", logo_19_lightning_nano),
    ("20-t-prism-monogram", logo_20_t_prism_monogram),
]


def main():
    OUTPUT_DIR.mkdir(parents=True, exist_ok=True)
    generated = []

    for name, fn in WITH_BG:
        path = OUTPUT_DIR / f"technanoai-logo-{name}.png"
        img = fn(transparent=False)
        img.save(path, "PNG", optimize=True)
        generated.append(path.name)
        print(f"Created: {path.name}")

    for name, fn in NO_BG:
        path = OUTPUT_DIR / f"technanoai-logo-{name}.png"
        img = fn(transparent=True)
        img.save(path, "PNG", optimize=True)
        generated.append(path.name)
        print(f"Created: {path.name}")

    print(f"\nDone — {len(generated)} logos saved to {OUTPUT_DIR}")


if __name__ == "__main__":
    main()