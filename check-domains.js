import dns from 'dns';
import https from 'https';
import fs from 'fs';

// Generate 100+ short domain names (≤6 letters) for tech brand
const domains = [
  // Tech-sounding short names
  'nexu', 'zync', 'qube', 'flux', 'node', 'core', 'base', 'link', 'sync', 'pulse',
  'spark', 'grid', 'mesh', 'wave', 'beam', 'ray', 'ion', 'arc', 'orb', 'zen',
  'vox', 'pix', 'hex', 'bin', 'bit', 'bot', 'net', 'web', 'app', 'dev',
  'tech', 'data', 'code', 'sys', 'ops', 'api', 'io', 'ai', 'ml', 'xr',
  'vr', 'ar', 'qc', 'bc', 'av', 'nv', 'pv', 'kv', 'jv', 'sv',
  // Creative combinations
  'nxt', 'prv', 'fut', 'pas', 'now', 'neo', 'nov', 'nvo', 'nva', 'nxe',
  'qtx', 'qnx', 'qfx', 'qvx', 'qix', 'qox', 'qux', 'qax', 'qex', 'qix',
  'ztx', 'znx', 'zfx', 'zvx', 'zix', 'zox', 'zux', 'zax', 'zex', 'zix',
  'xtx', 'xnx', 'xfx', 'xvx', 'xix', 'xox', 'xux', 'xax', 'xex', 'xix',
  'vtx', 'vnx', 'vfx', 'vvx', 'vix', 'vox', 'vux', 'vax', 'vex', 'vix',
  // Brandable short names
  'kore', 'synk', 'flx', 'nod', 'bse', 'lnk', 'pls', 'sprk', 'grd', 'msh',
  'wve', 'bem', 'ry', 'on', 'rc', 'rb', 'zn', 'voxe', 'pixe', 'hexe',
  'bine', 'bite', 'bote', 'nete', 'webe', 'appe', 'deve', 'teche', 'date', 'code',
  'syse', 'opse', 'apie', 'aie', 'mle', 'xre', 'vre', 'are', 'qce', 'bce',
  'ave', 'nve', 'pve', 'kve', 'jve', 'sve', 'nxta', 'prva', 'futa', 'pasa',
  // More creative options
  'axio', 'exio', 'ixio', 'oxio', 'uxio', 'axea', 'exea', 'ixea', 'oxea', 'uxea',
  'axia', 'exia', 'ixia', 'oxia', 'uxia', 'axeo', 'exeo', 'ixeo', 'oxeo', 'uxeo',
  'axiu', 'exiu', 'ixiu', 'oxiu', 'uxiu', 'axie', 'exie', 'ixie', 'oxie', 'uxie',
  'qrio', 'qrao', 'qroo', 'qruo', 'qrae', 'qree', 'qrie', 'qroe', 'qrue', 'qrie',
  'zrio', 'zrao', 'zroo', 'zruo', 'zrae', 'zree', 'zrie', 'zroe', 'zrue', 'zrie',
  // Additional brandable names
  'mova', 'nova', 'sova', 'tova', 'vova', 'wova', 'xova', 'yova', 'zova', 'aova',
  'movi', 'novi', 'sovi', 'tovi', 'vovi', 'wovi', 'xovi', 'yovi', 'zovi', 'aovi',
  'movo', 'novo', 'sovo', 'tovo', 'vovo', 'wovo', 'xovo', 'yovo', 'zovo', 'aovo',
  'movu', 'novu', 'sovu', 'tovu', 'vovu', 'wovu', 'xovu', 'yovu', 'zovu', 'aovu',
  'move', 'nove', 'sove', 'tove', 'vove', 'wove', 'xove', 'yove', 'zove', 'aove'
];

async function checkDomainAvailability(domain) {
  const fullDomain = `${domain}.com`;
  
  try {
    // Try to resolve the domain
    await dns.resolve(fullDomain);
    return { domain: fullDomain, available: false };
  } catch (error) {
    // If DNS resolution fails, domain might be available
    // Do a more thorough check using whois or HTTP
    return await checkWithHTTP(fullDomain);
  }
}

async function checkWithHTTP(domain) {
  return new Promise((resolve) => {
    const options = {
      hostname: domain,
      port: 443,
      path: '/',
      method: 'HEAD',
      timeout: 3000
    };

    const req = https.request(options, (res) => {
      resolve({ domain, available: false });
    });

    req.on('error', () => {
      // HTTP request failed, domain might be available
      resolve({ domain, available: true });
    });

    req.on('timeout', () => {
      req.destroy();
      resolve({ domain, available: true });
    });

    req.end();
  });
}

async function main() {
  console.log('Checking domain availability for', domains.length, 'domains...\n');
  
  const results = [];
  let checked = 0;
  
  for (const domain of domains) {
    const result = await checkDomainAvailability(domain);
    results.push(result);
    checked++;
    
    if (checked % 10 === 0) {
      console.log(`Checked ${checked}/${domains.length} domains...`);
    }
  }
  
  console.log('\n=== AVAILABLE DOMAINS ===\n');
  const available = results.filter(r => r.available);
  
  if (available.length === 0) {
    console.log('No available domains found.');
  } else {
    available.forEach(r => console.log(r.domain));
  }
  
  console.log(`\nTotal available: ${available.length}/${domains.length}`);
  
  // Save results to file
  fs.writeFileSync('domain-results.json', JSON.stringify(results, null, 2));
  console.log('\nResults saved to domain-results.json');
}

main().catch(console.error);
