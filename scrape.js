import fs from 'fs';
import path from 'path';
import https from 'https';
import http from 'http';

const url = 'https://restaurantguru.it/Antica-Grotta-Lanuvio';

const fetchHtml = () => new Promise((resolve, reject) => {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => resolve(data));
  }).on('error', reject);
});

const downloadImage = (imgUrl, filepath) => new Promise((resolve, reject) => {
  const client = imgUrl.startsWith('https') ? https : http;
  client.get(imgUrl, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    if (res.statusCode !== 200) {
      reject(new Error(`Failed to download ${imgUrl}`));
      return;
    }
    const file = fs.createWriteStream(filepath);
    res.pipe(file);
    file.on('finish', () => {
      file.close(resolve);
    });
  }).on('error', reject);
});

async function main() {
  try {
    console.log('Fetching HTML...');
    const html = await fetchHtml();
    
    // Naive regex to find some image urls from the page (assuming they use img tags or data-src)
    const imgRegex = /https:\/\/[^"'\s]+\.(?:jpg|jpeg|png|webp)/ig;
    const matches = [...html.matchAll(imgRegex)];
    
    let images = matches.map(m => m[0]).filter(u => u.includes('restaurantguru') || u.includes('sluurpy') || u.includes('fbcdn'));
    images = [...new Set(images)]; // Unique
    
    // filter for dish/interior photos
    images = images.filter(u => !u.includes('logo') && !u.includes('icon') && !u.includes('avatar'));
    
    const galleryDir = path.join(process.cwd(), 'public', 'gallery');
    if (!fs.existsSync(galleryDir)) {
      fs.mkdirSync(galleryDir, { recursive: true });
    }

    console.log(`Found ${images.length} potential images.`);
    
    let count = 1;
    for (const imgUrl of images.slice(0, 6)) {
      console.log('Downloading', imgUrl);
      const ext = path.extname(imgUrl).split('?')[0] || '.jpg';
      const filename = `foto${count}${ext}`;
      await downloadImage(imgUrl, path.join(galleryDir, filename));
      count++;
    }
    console.log('Done!');
  } catch (e) {
    console.error(e);
  }
}

main();
