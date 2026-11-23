#!/usr/bin/env node
// Resizes/compresses images in public/ so new uploads don't ship multi-MB files.
// Usage:
//   npm run optimize-images            (scans every .png/.jpg/.jpeg in public/)
//   npm run optimize-images -- public/foo.png public/bar.png   (specific files)
import sharp from "sharp";
import fs from "fs";
import path from "path";

const PUBLIC_DIR = path.resolve(process.cwd(), "public");
const MAX_WIDTH = 1000;
const SKIP_UNDER_BYTES = 150 * 1024; // already small enough, don't re-encode (avoids repeated quality loss)

const args = process.argv.slice(2);
const files = args.length > 0
    ? args
    : fs.readdirSync(PUBLIC_DIR).filter((f) => /\.(png|jpe?g)$/i.test(f)).map((f) => path.join(PUBLIC_DIR, f));

for (const name of files) {
    const file = path.isAbsolute(name) ? name : path.resolve(process.cwd(), name);
    if (!fs.existsSync(file)) {
        console.warn(`skip (not found): ${file}`);
        continue;
    }
    const before = fs.statSync(file).size;
    if (before < SKIP_UNDER_BYTES) {
        console.log(`skip (already ${(before / 1024).toFixed(0)}KB): ${path.basename(file)}`);
        continue;
    }
    const buf = fs.readFileSync(file);
    const ext = path.extname(file).toLowerCase();
    let pipeline = sharp(buf).resize({ width: MAX_WIDTH, withoutEnlargement: true });
    pipeline = ext === ".png"
        ? pipeline.png({ quality: 80, palette: true })
        : pipeline.jpeg({ quality: 78, mozjpeg: true });

    const out = await pipeline.toBuffer();
    fs.writeFileSync(file, out);
    const after = fs.statSync(file).size;
    console.log(`${path.basename(file)}: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}
