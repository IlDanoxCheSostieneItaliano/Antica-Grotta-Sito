import fs from 'fs';
import https from 'https';
import path from 'path';

const html = fs.readFileSync('google.html', 'utf8');
const regex = /(https:\/\/encrypted-tbn0\.gstatic\.com\/images\?q=tbn:[^&"'\s]+)/g;
const matches = [...html.matchAll(regex)];
let urls = matches.map(m => m[1]);
urls = [...new Set(urls)];

console.log(`Found ${urls.length} images on Google Images.`);

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
    }).on('error', reject);
  });
};

const galleryDir = path.join(process.cwd(), 'public', 'gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

(async () => {
  let count = 1;
  for (const url of urls.slice(0, 6)) { // Download first 6
    console.log(`Downloading ${url}...`);
    await downloadImage(url, path.join(galleryDir, `real_foto${count}.jpg`));
    count++;
  }
  console.log('Done!');
})();
