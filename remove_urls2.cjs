const fs = require('fs');
const path = require('path');

const sitemapPath = path.join(__dirname, 'public', 'sitemap.xml');
let content = fs.readFileSync(sitemapPath, 'utf8');

// Match all <url>...</url> blocks
const urlBlockRegex = /<url>[\s\S]*?<\/url>/g;

const newContent = content.replace(urlBlockRegex, (match) => {
  // Extract the loc part
  const locMatch = match.match(/<loc>(.*?)<\/loc>/);
  if (!locMatch) return match;
  
  const url = locMatch[1];
  
  // Keep the homepage
  if (url === 'https://www.ultimategreenelectric.com/') return match;
  
  // Keep any /electrician-* URL
  if (url.includes('/electrician-')) return match;
  
  // We remove any URL that contains 'electrical-services-'
  if (url.includes('/electrical-services-')) return '';
  
  // For generic services, we want to keep ONLY the '-mission-viejo' permutations.
  // The service permutations look like /panel-upgrade-mission-viejo/, etc.
  // We want to remove all permutations that end with OTHER locations.
  const otherLocations = [
    'irvine', 'dana-point', 'laguna-hills', 'laguna-niguel', 
    'lake-forest', 'aliso-viejo', 'san-juan-capistrano', 
    'rancho-santa-margarita', 'newport-beach'
  ];
  
  for (const loc of otherLocations) {
    if (url.endsWith(`-${loc}/`)) {
      return ''; // Remove this one
    }
  }
  
  // If we get here, it's either a service with -mission-viejo, or something else valid.
  return match;
});

fs.writeFileSync(sitemapPath, newContent, 'utf8');
console.log('Sitemap cleaned successfully.');
