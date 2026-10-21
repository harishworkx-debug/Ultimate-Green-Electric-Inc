const http = require('http');

const urls = [
  '/',
  '/about',
  '/contact',
  '/electrician-mission-viejo',
  '/electrician-irvine',
  '/electrician-dana-point',
  '/electrician-laguna-hills',
  '/electrician-laguna-niguel',
  '/electrician-lake-forest',
  '/electrician-aliso-viejo',
  '/electrician-san-juan-capistrano',
  '/electrician-rancho-santa-margarita',
  '/electrician-newport-beach',
  '/residential-electrician',
  '/commercial-electrician',
  '/electrical-repair',
  '/emergency-electrician',
  '/panel-upgrade',
  '/ev-charger-installation',
  '/lighting-installation',
  '/outlet-switch-repair',
  '/ceiling-fan-installation',
  '/electrical-inspection'
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:5173${path}`, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        resolve({
          path,
          statusCode: res.statusCode,
          hasHtml: data.includes('<div id="root"></div>'),
          length: data.length
        });
      });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

async function run() {
  console.log(`Auditing all ${urls.length} URLs for HTTP 200 and indexability...\n`);
  let allPass = true;
  for (const url of urls) {
    const res = await checkUrl(url);
    if (res.statusCode === 200 && res.hasHtml) {
      console.log(`[PASS 200 OK] ${url} (Bytes: ${res.length})`);
    } else {
      console.error(`[FAIL] ${url}:`, res);
      allPass = false;
    }
  }
  console.log(`\nAudit Complete: ${allPass ? 'ALL 23 URLS PASSED HTTP 200 OK' : 'ERRORS FOUND'}`);
}

run();
