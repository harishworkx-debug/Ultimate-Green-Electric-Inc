const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
let content = fs.readFileSync(sitemapPath, 'utf8');

// Regex to match the <url> block containing 'electrical-services-'
const regex = /\s*<url>\s*<loc>[^<]*\/electrical-services-[^<]*<\/loc>\s*<changefreq>[^<]*<\/changefreq>\s*<priority>[^<]*<\/priority>\s*<\/url>/g;

content = content.replace(regex, '');

fs.writeFileSync(sitemapPath, content, 'utf8');
console.log('Removed electrical-services URLs from sitemap.xml');
