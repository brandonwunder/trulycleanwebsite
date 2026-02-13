#!/usr/bin/env node

/**
 * Logo Generation Script
 * Generates all required logo variants from the source logo file
 *
 * Usage: node scripts/generate-logos.js
 */

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const SOURCE_LOGO = path.join(__dirname, '../public/images/logo/logo-source.png');
const OUTPUT_DIR = path.join(__dirname, '../public/images/logo');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Generate icon-only variants by cropping the shield from the full logo
 * The shield appears to be roughly in the left portion of the image
 */
async function generateIconVariants() {
  console.log('📦 Generating icon-only variants...');

  // Get source image metadata
  const metadata = await sharp(SOURCE_LOGO).metadata();
  console.log(`   Source image: ${metadata.width}x${metadata.height}`);

  // The icon (shield) is approximately the left 30% of the image
  // For a 1536x1024 image, that's roughly the left 460px
  const iconWidth = Math.floor(metadata.width * 0.3);
  const iconHeight = metadata.height;

  const sizes = [16, 32, 40, 48, 64, 256, 512];

  for (const size of sizes) {
    const outputPath = path.join(OUTPUT_DIR, `logo-icon-${size}.png`);

    try {
      await sharp(SOURCE_LOGO)
        .extract({ left: 0, top: 0, width: iconWidth, height: iconHeight })
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // transparent
        })
        .png({ quality: 95, adaptiveFiltering: true })
        .toFile(outputPath);

      console.log(`   ✓ logo-icon-${size}.png (${size}x${size})`);
    } catch (err) {
      console.error(`   ✗ Failed to generate logo-icon-${size}.png:`, err.message);
    }
  }
}

/**
 * Generate full logo variants (icon + text)
 */
async function generateFullLogoVariants() {
  console.log('📦 Generating full logo variants...');

  const variants = [
    { width: 200, height: 60, name: '200x60' },
    { width: 300, height: 90, name: '300x90' },
    { width: 400, height: 120, name: '400x120' }
  ];

  for (const variant of variants) {
    const outputPath = path.join(OUTPUT_DIR, `logo-full-${variant.name}.png`);

    try {
      await sharp(SOURCE_LOGO)
        .resize(variant.width, variant.height, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // transparent
        })
        .png({ quality: 95, adaptiveFiltering: true })
        .toFile(outputPath);

      console.log(`   ✓ logo-full-${variant.name}.png`);
    } catch (err) {
      console.error(`   ✗ Failed to generate logo-full-${variant.name}.png:`, err.message);
    }
  }
}

/**
 * Generate square logo variants for social media
 */
async function generateSquareVariants() {
  console.log('📦 Generating square logo variants...');

  const sizes = [256, 512, 1024];

  for (const size of sizes) {
    const outputPath = path.join(OUTPUT_DIR, `logo-square-${size}.png`);

    try {
      await sharp(SOURCE_LOGO)
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 } // transparent
        })
        .png({ quality: 95, adaptiveFiltering: true })
        .toFile(outputPath);

      console.log(`   ✓ logo-square-${size}.png`);
    } catch (err) {
      console.error(`   ✗ Failed to generate logo-square-${size}.png:`, err.message);
    }
  }
}

/**
 * Generate favicon variants
 */
async function generateFavicons() {
  console.log('📦 Generating favicon variants...');

  // Extract icon-only portion for favicons
  const metadata = await sharp(SOURCE_LOGO).metadata();
  const iconWidth = Math.floor(metadata.width * 0.3);
  const iconHeight = metadata.height;

  const sizes = [16, 32, 180]; // favicon, favicon-2x, apple-touch-icon
  const names = {
    16: 'favicon-16.png',
    32: 'favicon-32.png',
    180: 'apple-touch-icon.png'
  };

  for (const size of sizes) {
    const outputPath = path.join(OUTPUT_DIR, names[size]);

    try {
      await sharp(SOURCE_LOGO)
        .extract({ left: 0, top: 0, width: iconWidth, height: iconHeight })
        .resize(size, size, {
          fit: 'contain',
          background: { r: 255, g: 255, b: 255, alpha: 0 }
        })
        .png({ quality: 95, adaptiveFiltering: true })
        .toFile(outputPath);

      console.log(`   ✓ ${names[size]}`);
    } catch (err) {
      console.error(`   ✗ Failed to generate ${names[size]}:`, err.message);
    }
  }
}

/**
 * Generate favicon.ico (multi-size)
 */
async function generateFaviconIco() {
  console.log('📦 Generating favicon.ico...');

  const metadata = await sharp(SOURCE_LOGO).metadata();
  const iconWidth = Math.floor(metadata.width * 0.3);
  const iconHeight = metadata.height;

  try {
    // Create a 32x32 icon for favicon.ico
    await sharp(SOURCE_LOGO)
      .extract({ left: 0, top: 0, width: iconWidth, height: iconHeight })
      .resize(32, 32, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 0 }
      })
      .png({ quality: 95 })
      .toFile(path.join(OUTPUT_DIR, 'favicon.png'));

    console.log('   ✓ favicon.ico (generated as PNG, browsers auto-detect)');
  } catch (err) {
    console.error('   ✗ Failed to generate favicon.ico:', err.message);
  }
}

/**
 * Main function
 */
async function main() {
  console.log('\n🎨 TrulyClean Logo Generation Script\n');
  console.log(`Source: ${SOURCE_LOGO}`);
  console.log(`Output: ${OUTPUT_DIR}\n`);

  try {
    // Verify source file exists
    if (!fs.existsSync(SOURCE_LOGO)) {
      throw new Error(`Source logo not found: ${SOURCE_LOGO}`);
    }

    await generateIconVariants();
    await generateFullLogoVariants();
    await generateSquareVariants();
    await generateFavicons();
    await generateFaviconIco();

    console.log('\n✅ Logo generation completed successfully!\n');
    console.log('📊 Generated files:');

    const files = fs.readdirSync(OUTPUT_DIR);
    files.forEach(file => {
      const filePath = path.join(OUTPUT_DIR, file);
      const stats = fs.statSync(filePath);
      const size = (stats.size / 1024).toFixed(1);
      console.log(`   ${file} (${size} KB)`);
    });

  } catch (err) {
    console.error('\n❌ Error generating logos:', err.message);
    process.exit(1);
  }
}

// Run the script
main();
