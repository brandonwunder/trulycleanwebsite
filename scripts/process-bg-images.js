const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourcePath = path.join(__dirname, '../public/images/source-original.jpg');
const outputDir = path.join(__dirname, '../public/images');

async function processImages() {
  console.log('📸 Processing background images...\n');

  try {
    // Load source image
    const source = sharp(sourcePath);
    const metadata = await source.metadata();
    console.log(`✅ Source loaded: ${metadata.width}x${metadata.height}px\n`);

    // Desktop version (2560x1440px)
    console.log('🖥️  Processing desktop images...');
    await source
      .clone()
      .resize(2560, 1440, { fit: 'cover', position: 'right' })
      .modulate({
        saturation: 0.65,  // Desaturate 35%
        brightness: 0.92   // Reduce brightness slightly
      })
      .blur(1)  // 1px blur
      .webp({ quality: 85, effort: 6 })
      .toFile(path.join(outputDir, 'bg-cleaner.webp'));
    console.log('  ✅ bg-cleaner.webp created');

    await source
      .clone()
      .resize(2560, 1440, { fit: 'cover', position: 'right' })
      .modulate({
        saturation: 0.65,
        brightness: 0.92
      })
      .blur(1)
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(path.join(outputDir, 'bg-cleaner.jpg'));
    console.log('  ✅ bg-cleaner.jpg created\n');

    // Mobile version (1080x1920px portrait)
    console.log('📱 Processing mobile images...');
    await source
      .clone()
      .resize(1080, 1920, { fit: 'cover', position: 'centre' })
      .modulate({
        saturation: 0.65,
        brightness: 0.92
      })
      .blur(1)
      .webp({ quality: 82, effort: 6 })
      .toFile(path.join(outputDir, 'bg-cleaner-mobile.webp'));
    console.log('  ✅ bg-cleaner-mobile.webp created');

    await source
      .clone()
      .resize(1080, 1920, { fit: 'cover', position: 'centre' })
      .modulate({
        saturation: 0.65,
        brightness: 0.92
      })
      .blur(1)
      .jpeg({ quality: 82, mozjpeg: true })
      .toFile(path.join(outputDir, 'bg-cleaner-mobile.jpg'));
    console.log('  ✅ bg-cleaner-mobile.jpg created\n');

    // Check file sizes
    console.log('📊 File sizes:');
    const files = [
      'bg-cleaner.webp',
      'bg-cleaner.jpg',
      'bg-cleaner-mobile.webp',
      'bg-cleaner-mobile.jpg'
    ];

    files.forEach(file => {
      const filePath = path.join(outputDir, file);
      const stats = fs.statSync(filePath);
      const sizeKB = (stats.size / 1024).toFixed(2);
      const target = file.includes('mobile')
        ? (file.endsWith('.webp') ? '150KB' : '180KB')
        : (file.endsWith('.webp') ? '250KB' : '300KB');
      console.log(`  ${file}: ${sizeKB}KB (target: <${target})`);
    });

    // Clean up source file
    fs.unlinkSync(sourcePath);
    console.log('\n✅ Processing complete! Source file removed.');

  } catch (error) {
    console.error('❌ Error processing images:', error);
    process.exit(1);
  }
}

processImages();
