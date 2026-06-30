const fs = require('fs');
const path = require('path');

const ROOT = __dirname;

function walk(dir, acc = []) {
  for (const f of fs.readdirSync(dir)) {
    const p = path.join(dir, f);
    if (fs.statSync(p).isDirectory() && !f.startsWith('.') && f !== 'node_modules') {
      walk(p, acc);
    } else if (/\.(html|css|js)$/.test(f) && !f.endsWith('fix-paths.js') && !f.endsWith('analyze-paths.js')) {
      acc.push(p);
    }
  }
  return acc;
}

function fixContent(filePath, content) {
  let updated = content;

  // Fix broken nested double quotes in inline background-image styles
  updated = updated.replace(/url\("\.\//g, "url('./");
  updated = updated.replace(/\.jpg"\)/g, ".jpg')");
  updated = updated.replace(/\.png"\)/g, ".png')");
  updated = updated.replace(/\.webp"\)/g, ".webp')");
  updated = updated.replace(/\.svg"\)/g, ".svg')");

  const relPrefixes = ['templates', 'invitations', 'vintage', 'classic', 'svg', '_next'];

  // Absolute asset paths in strings -> relative (GitHub Pages project sites)
  for (const prefix of relPrefixes) {
    const re = new RegExp(`"/${prefix}/`, 'g');
    updated = updated.replace(re, `"./${prefix}/`);
    const re2 = new RegExp(`'/${prefix}/`, 'g');
    updated = updated.replace(re2, `'./${prefix}/`);
  }

  // CSS font URLs: /_next/static/media/... -> ../media/... (from css folder)
  if (filePath.includes(`${path.sep}_next${path.sep}static${path.sep}css${path.sep}`)) {
    updated = updated.replace(/url\(\/_next\/static\/media\//g, 'url(../media/');
  }

  return updated;
}

let changed = 0;
for (const filePath of walk(ROOT)) {
  const original = fs.readFileSync(filePath, 'utf8');
  const fixed = fixContent(filePath, original);
  if (fixed !== original) {
    fs.writeFileSync(filePath, fixed, 'utf8');
    changed++;
    console.log('Fixed:', path.relative(ROOT, filePath));
  }
}
console.log(`Done. ${changed} file(s) updated.`);
