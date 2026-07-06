// GGJからエクスポートした画像を public/img/source/ に置いて実行:
//   npm run images
// public/img/source/ の各画像を最大幅1400pxにリサイズ・WebP化して public/img/ に出力します。
const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const SRC_DIR = path.join(__dirname, '..', 'public', 'img', 'source');
const OUT_DIR = path.join(__dirname, '..', 'public', 'img');
const MAX_WIDTH = 1400;

async function main() {
  if (!fs.existsSync(SRC_DIR)) {
    console.error(`ソースフォルダが見つかりません: ${SRC_DIR}`);
    console.error('public/img/source/ に元画像 (solution.png / module1.png / module2.png / rr.png / result1.png / result2.png / result3.png) を置いてください。');
    process.exit(1);
  }

  const files = fs.readdirSync(SRC_DIR).filter(f => /\.(png|jpe?g)$/i.test(f));
  if (files.length === 0) {
    console.error(`${SRC_DIR} に画像がありません。`);
    process.exit(1);
  }

  for (const file of files) {
    const base = path.parse(file).name;
    const outPath = path.join(OUT_DIR, `${base}.webp`);
    await sharp(path.join(SRC_DIR, file))
      .resize({ width: MAX_WIDTH, withoutEnlargement: true })
      .webp({ quality: 82 })
      .toFile(outPath);
    console.log(`${file} -> img/${base}.webp`);
  }
}

main();
