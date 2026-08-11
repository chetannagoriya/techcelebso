from pathlib import Path
import math
import random
import subprocess
import wave
from array import array

from PIL import Image, ImageDraw, ImageEnhance, ImageFilter, ImageFont
import imageio_ffmpeg


ROOT = Path(__file__).resolve().parents[1]
SOURCES = [
    ROOT / "tmp" / "antellay-cinematic-master.png",
    ROOT / "tmp" / "antellay-ai-scene.png",
    ROOT / "tmp" / "antellay-gis-scene.png",
    ROOT / "tmp" / "antellay-cloud-scene.png",
]
SILENT = ROOT / "tmp" / "antellay-cinematic-promo-v3-silent.mp4"
AUDIO = ROOT / "tmp" / "antellay-future-soundtrack.wav"
OUTPUT = ROOT / "public" / "videos" / "antellay-cinematic-promo-v3-sound.mp4"
W, H, FPS, DURATION = 1920, 1080, 30, 15


def font(size, bold=False):
    name = "segoeuib.ttf" if bold else "segoeui.ttf"
    return ImageFont.truetype(str(Path("C:/Windows/Fonts") / name), size)


def ease(t):
    t = max(0.0, min(1.0, t))
    return t * t * (3 - 2 * t)


def opacity_between(t, start, hold, end):
    if t < start or t > end:
        return 0
    if t < start + 0.7:
        return int(255 * ease((t - start) / 0.7))
    if t > hold:
        return int(255 * (1 - ease((t - hold) / (end - hold))))
    return 255


def centered(draw, text, y, fnt, fill, spacing=0):
    if not spacing:
        box = draw.textbbox((0, 0), text, font=fnt)
        draw.text(((W - (box[2] - box[0])) / 2, y), text, font=fnt, fill=fill)
        return
    widths = [draw.textlength(c, font=fnt) for c in text]
    total = sum(widths) + spacing * (len(text) - 1)
    x = (W - total) / 2
    for c, width in zip(text, widths):
        draw.text((x, y), c, font=fnt, fill=fill)
        x += width + spacing


sources = [Image.open(path).convert("RGB") for path in SOURCES]
random.seed(17)
particles = [(random.random(), random.random(), random.uniform(1, 4), random.random()) for _ in range(80)]


def make_soundtrack():
    rate = 44100
    samples = array("h")
    notes = [55.0, 65.41, 73.42, 82.41]
    for i in range(rate * DURATION):
        t = i / rate
        section = min(3, int(t / 3.75))
        base = notes[section]
        fade = min(1.0, t / 1.2, (DURATION - t) / 1.0)
        pad = (math.sin(2 * math.pi * base * t) * .34 +
               math.sin(2 * math.pi * base * 1.5 * t) * .16 +
               math.sin(2 * math.pi * base * 2 * t) * .08)
        pulse_env = math.exp(-5.5 * ((t * 2) % 1))
        pulse = math.sin(2 * math.pi * (base / 2) * t) * pulse_env * .18
        shimmer = math.sin(2 * math.pi * (440 + 35 * math.sin(t * .7)) * t) * .025
        impact = 0.0
        for hit in (0.45, 4.0, 7.0, 10.0, 12.8):
            dt = t - hit
            if 0 <= dt < 1.2:
                impact += math.sin(2 * math.pi * (72 - 28 * dt) * dt) * math.exp(-4 * dt) * .42
        value = max(-1, min(1, (pad + pulse + shimmer + impact) * fade))
        left = int(value * 15000)
        right = int((value * .94 + shimmer) * 15000)
        samples.extend((left, right))
    with wave.open(str(AUDIO), "wb") as wav:
        wav.setnchannels(2)
        wav.setsampwidth(2)
        wav.setframerate(rate)
        wav.writeframes(samples.tobytes())


make_soundtrack()

ffmpeg = imageio_ffmpeg.get_ffmpeg_exe()
cmd = [
    ffmpeg, "-y", "-f", "rawvideo", "-vcodec", "rawvideo", "-pix_fmt", "rgb24",
    "-s", f"{W}x{H}", "-r", str(FPS), "-i", "-", "-an", "-vcodec", "libx264",
    "-preset", "medium", "-crf", "17", "-pix_fmt", "yuv420p", str(SILENT)
]

proc = subprocess.Popen(cmd, stdin=subprocess.PIPE)
try:
    for frame_no in range(FPS * DURATION):
        t = frame_no / FPS
        scene_points = [0, 3.7, 6.8, 9.8, 12.7, 15.1]
        scene_ids = [0, 1, 2, 3, 0]
        index = next(i for i in range(len(scene_points)-1) if scene_points[i] <= t < scene_points[i+1])
        scene_t = (t - scene_points[index]) / (scene_points[index+1] - scene_points[index])

        def camera(source, local_t, direction=1):
            zoom = 1.035 + 0.075 * ease(local_t)
            sw, sh = int(source.width / zoom), int(source.height / zoom)
            drift = int(direction * 45 * (local_t - .5))
            left = max(0, min(source.width - sw, (source.width - sw) // 2 + drift))
            top = max(0, int((source.height - sh) * .48))
            return source.crop((left, top, left + sw, top + sh)).resize((W, H), Image.Resampling.LANCZOS)

        bg = camera(sources[scene_ids[index]], scene_t, 1 if index % 2 == 0 else -1)
        transition = .22
        if scene_t > 1 - transition and index + 1 < len(scene_ids):
            mix = ease((scene_t - (1-transition)) / transition)
            nxt = camera(sources[scene_ids[index+1]], 0, -1 if index % 2 == 0 else 1)
            bg = Image.blend(bg, nxt, mix)
        bg = ImageEnhance.Brightness(bg).enhance(0.72 + 0.08 * math.sin(t * 0.45) ** 2)

        overlay = Image.new("RGBA", (W, H), (0, 0, 0, 0))
        d = ImageDraw.Draw(overlay)
        d.rectangle((0, 0, W, H), fill=(0, 8, 24, 50))

        for px, py, radius, phase in particles:
            x = int((px * W + t * (18 + radius * 4)) % W)
            y = int((py * H - t * (8 + radius * 2)) % H)
            alpha = int(40 + 100 * (0.5 + 0.5 * math.sin(t * 1.4 + phase * 8)))
            d.ellipse((x-radius, y-radius, x+radius, y+radius), fill=(70, 220, 255, alpha))

        # Opening brand reveal
        a = opacity_between(t, 0.4, 3.0, 3.8)
        if a:
            centered(d, "ANTELLAY", 350, font(110, True), (245, 252, 255, a), spacing=14)
            centered(d, "TECHNOLOGY FOR MEANINGFUL PROGRESS", 495, font(27), (90, 226, 255, a), spacing=5)
            d.rounded_rectangle((710, 575, 1210, 580), 3, fill=(20, 225, 255, int(a * .8)))

        # Capability montage, intentionally typography-led and cinematic
        scenes = [
            (4.0, 6.8, "ARTIFICIAL INTELLIGENCE", "Smarter systems. Human-centered outcomes."),
            (7.0, 9.8, "GIS & DATA INTELLIGENCE", "See patterns. Decide with confidence."),
            (10.0, 12.7, "CLOUD • ENGINEERING • SCALE", "From bold ideas to real-world impact."),
        ]
        for start, end, title, sub in scenes:
            a = opacity_between(t, start, end - 0.65, end)
            if a:
                centered(d, title, 405, font(55, True), (248, 253, 255, a), spacing=3)
                centered(d, sub, 500, font(30), (155, 230, 248, a))

        # End card
        a = opacity_between(t, 12.8, 14.6, 15.0)
        if a:
            centered(d, "ANTELLAY", 345, font(96, True), (255, 255, 255, a), spacing=12)
            centered(d, "Building Intelligence. Delivering Impact.", 475, font(38), (91, 232, 255, a))
            centered(d, "antellay.com", 595, font(27, True), (230, 246, 255, a), spacing=2)

        frame = Image.alpha_composite(bg.convert("RGBA"), overlay).convert("RGB")
        proc.stdin.write(frame.tobytes())
finally:
    if proc.stdin:
        proc.stdin.close()
    code = proc.wait()
    if code:
        raise SystemExit(code)

subprocess.run([
    ffmpeg, "-y", "-i", str(SILENT), "-i", str(AUDIO), "-c:v", "copy",
    "-c:a", "aac", "-b:a", "256k", "-shortest", "-movflags", "+faststart", str(OUTPUT)
], check=True)

print(OUTPUT)
