import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import https from 'https';

const downloadImage = (url, filepath) => {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      if (res.statusCode !== 200) {
        reject(new Error(`Failed to download image. Status Code: ${res.statusCode}`));
        return;
      }
      const fileStream = fs.createWriteStream(filepath);
      res.pipe(fileStream);
      fileStream.on('finish', () => {
        fileStream.close();
        resolve();
      });
      fileStream.on('error', (err) => {
        fs.unlink(filepath, () => reject(err));
      });
    }).on('error', reject);
  });
};

(async () => {
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36');
  
  console.log('Navigating to Restaurant Guru...');
  try {
    await page.goto('https://restaurantguru.it/Antica-Grotta-Lanuvio', { waitUntil: 'domcontentloaded', timeout: 30000 });
  } catch (e) {
    console.log('Goto error (non-fatal):', e.message);
  }

  // Wait a bit for images to load
  await new Promise(r => setTimeout(r, 5000));

  console.log('Extracting images...');
  const images = await page.evaluate(() => {
    const imgs = Array.from(document.querySelectorAll('img'));
    return imgs
      .map(img => img.src || img.getAttribute('data-src') || img.getAttribute('data-original'))
      .filter(src => src && typeof src === 'string' && src.startsWith('http'))
      .filter(src => !src.includes('avatar') && !src.includes('icon') && !src.includes('logo'));
  });

  const uniqueImages = [...new Set(images)].slice(0, 8);
  console.log(`Found ${uniqueImages.length} images to download.`);

  const galleryDir = path.join(process.cwd(), 'public', 'gallery');
  if (!fs.existsSync(galleryDir)) {
    fs.mkdirSync(galleryDir, { recursive: true });
  }

  let index = 1;
  for (const imgUrl of uniqueImages) {
    try {
      console.log(`Downloading ${imgUrl}...`);
      const ext = '.jpg'; // enforce extension or parse it
      const filePath = path.join(galleryDir, `foto_${index}${ext}`);
      await downloadImage(imgUrl, filePath);
      index++;
    } catch (e) {
      console.log(`Failed to download ${imgUrl}: ${e.message}`);
    }
  }

  await browser.close();
  console.log('Done downloading images.');
})();
