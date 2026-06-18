import fs from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = path.resolve(import.meta.dirname, '..');
const publicImages = path.join(root, 'public', 'images');
const sourceImages = path.join(root, 'src', 'assets', 'originals');
const blogOriginal = path.join(publicImages, 'blog-original');
const blogOptimized = path.join(publicImages, 'blog');

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function fileSize(file) {
  return (await fs.stat(file)).size;
}

async function webp(input, output, options = {}) {
  await ensureDir(path.dirname(output));
  let pipeline = sharp(input).rotate();
  if (options.width || options.height) {
    pipeline = pipeline.resize({
      width: options.width,
      height: options.height,
      fit: options.fit || 'inside',
      withoutEnlargement: true,
    });
  }
  await pipeline.webp({ quality: options.quality ?? 78, effort: 5 }).toFile(output);
}

async function jpeg(input, output, options = {}) {
  await ensureDir(path.dirname(output));
  let pipeline = sharp(input).rotate();
  if (options.width || options.height) {
    pipeline = pipeline.resize({
      width: options.width,
      height: options.height,
      fit: options.fit || 'inside',
      withoutEnlargement: true,
    });
  }
  await pipeline.jpeg({ quality: options.quality ?? 82, mozjpeg: true }).toFile(output);
}

async function png(input, output, options = {}) {
  await ensureDir(path.dirname(output));
  let pipeline = sharp(input).rotate();
  if (options.width || options.height) {
    pipeline = pipeline.resize({
      width: options.width,
      height: options.height,
      fit: options.fit || 'inside',
      withoutEnlargement: true,
    });
  }
  await pipeline.png({ compressionLevel: 9, adaptiveFiltering: true }).toFile(output);
}

async function optimizeFixedAssets() {
  const jobs = [
    ['bg1.jpg', 'bg1-1920.webp', webp, { width: 1920, quality: 76 }],
    ['bg1.jpg', 'bg1-900.webp', webp, { width: 900, quality: 72 }],
    ['cu.jpg', 'cu-900.webp', webp, { width: 900, quality: 78 }],
    ['cu.jpg', 'cu-540.webp', webp, { width: 540, quality: 76 }],
    ['cu.jpg', 'cu-900.jpg', jpeg, { width: 900, quality: 82 }],
    ['cu.jpg', 'cu-540.jpg', jpeg, { width: 540, quality: 80 }],
    ['about-atmosphere.jpg', 'about-atmosphere-720.webp', webp, { width: 720, quality: 78 }],
    ['about-atmosphere.jpg', 'about-atmosphere-720.jpg', jpeg, { width: 720, quality: 82 }],
    ['wechat_qr.png', 'wechat_qr-720.png', png, { width: 720 }],
  ];

  for (const [source, target, transform, options] of jobs) {
    const input = path.join(sourceImages, source);
    const output = path.join(publicImages, target);
    await transform(input, output, options);
    console.log(`${source} -> ${target}: ${kb(await fileSize(input))} -> ${kb(await fileSize(output))}`);
  }
}

async function optimizeBlogImages() {
  await ensureDir(blogOptimized);
  let files = [];
  try {
    files = await fs.readdir(blogOriginal);
  } catch {
    return;
  }

  for (const file of files.filter((name) => /\.(jpe?g|png)$/i.test(name))) {
    const input = path.join(blogOriginal, file);
    const output = path.join(blogOptimized, file.replace(/\.(jpe?g|png)$/i, '.webp'));
    await webp(input, output, { width: 1280, quality: 78 });
    console.log(`${file} -> blog/${path.basename(output)}: ${kb(await fileSize(input))} -> ${kb(await fileSize(output))}`);
  }
}

await optimizeFixedAssets();
await optimizeBlogImages();
