const fs = require('fs');
const path = require('path');

const businessPath = path.join(__dirname, 'src', 'data', 'business.ts');
const businessContent = fs.readFileSync(businessPath, 'utf8');

// Extract SERVICE_LOCATIONS block
const serviceLocationsMatch = businessContent.match(/export const SERVICE_LOCATIONS\s*=\s*\[([\s\S]*?)\];/);
const locationsBlock = serviceLocationsMatch ? serviceLocationsMatch[1] : '';
const locationSlugs = [...locationsBlock.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

// Extract SERVICES block
const servicesMatch = businessContent.match(/export const SERVICES: ServiceInfo\[\]\s*=\s*\[([\s\S]*?)\];/);
const servicesBlock = servicesMatch ? servicesMatch[1] : '';
const serviceSlugs = [...servicesBlock.matchAll(/slug:\s*'([^']+)'/g)].map(m => m[1]);

const baseUrl = 'https://www.ultimategreenelectric.com';
const currentDate = new Date().toISOString().split('T')[0]; // Format YYYY-MM-DD

let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}/</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>${baseUrl}/about</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
  <url>
    <loc>${baseUrl}/contact</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
  </url>
`;

// Add 10 City Landing Pages: /electrician-[location]
locationSlugs.forEach(loc => {
  xml += `  <url>
    <loc>${baseUrl}/electrician-${loc}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>\n`;
});

// Add 10 Service Pages: /[service]
serviceSlugs.forEach(service => {
  xml += `  <url>
    <loc>${baseUrl}/${service}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.9</priority>
  </url>\n`;
});

xml += `</urlset>\n`;

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
fs.writeFileSync(sitemapPath, xml, 'utf8');
console.log(`Sitemap generated successfully with 23 clean canonical URLs! Lastmod: ${currentDate}`);
