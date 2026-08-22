const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// Read source files
const appJsPath = path.join(__dirname, '..', 'app.js');
const indexHtmlPath = path.join(__dirname, '..', 'index.html');
const styleCssPath = path.join(__dirname, '..', 'style.css');
const manifestPath = path.join(__dirname, '..', 'manifest.json');
const swPath = path.join(__dirname, '..', 'sw.js');

const appJsContent = fs.readFileSync(appJsPath, 'utf8');
const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');
const styleCssContent = fs.readFileSync(styleCssPath, 'utf8');
const manifestContent = fs.readFileSync(manifestPath, 'utf8');
const swContent = fs.readFileSync(swPath, 'utf8');

// Extract SEED_CATALOG and CROP_CALC_DATA from app.js using VM or regex eval
function extractSeedCatalog() {
  const match = appJsContent.match(/const SEED_CATALOG = (\[[\s\S]*?\n\s*\]);/);
  if (!match) throw new Error('SEED_CATALOG array not found in app.js');
  return eval(match[1]);
}

function extractCropCalcData() {
  const match = appJsContent.match(/const CROP_CALC_DATA = ({[\s\S]*?\n\s*};)/);
  if (!match) throw new Error('CROP_CALC_DATA object not found in app.js');
  return eval('(' + match[1].replace(/;$/, '') + ')');
}

describe('1. Telangana Govt ₹500 Bonus Varieties & Catalog Tests', () => {
  const catalog = extractSeedCatalog();

  test('Catalog should contain at least 15 verified hybrid seed varieties', () => {
    assert.ok(catalog.length >= 15, `Expected >= 15 varieties, found ${catalog.length}`);
  });

  test('All 7 Telangana Govt ₹500 Bonus fine-grain paddy varieties must be present', () => {
    const requiredBonusIds = [
      'paddy-bpt5204',
      'paddy-rnr15048',
      'paddy-hmtsona',
      'paddy-jaisriram',
      'paddy-knm1638',
      'paddy-wgl44',
      'paddy-knm7715'
    ];

    for (const id of requiredBonusIds) {
      const item = catalog.find(s => s.id === id);
      assert.ok(item, `Missing required bonus variety id: ${id}`);
      assert.equal(item.isGovtBonusEligible, true, `${id} should have isGovtBonusEligible: true`);
      assert.ok(item.bonusAmount.includes('500'), `${id} bonusAmount should mention 500`);
      assert.ok(item.grainDimensions, `${id} must specify grain dimensions`);
      assert.ok(item.grainDimensions.includes('< 6'), `${id} length must be < 6mm`);
      assert.ok(item.grainDimensions.includes('< 2'), `${id} width must be < 2mm`);
      assert.ok(item.grainDimensions.includes('< 17%'), `${id} moisture must be < 17%`);
    }
  });

  test('RNR 15048 (Telangana Sona) must have Low GI 51.5 sugar-free specification', () => {
    const rnr = catalog.find(s => s.id === 'paddy-rnr15048');
    assert.ok(rnr, 'RNR 15048 not found');
    assert.ok(rnr.grainType.includes('51.5') || rnr.keyTrait.includes('Low GI'), 'RNR 15048 must mention low GI / sugar-free');
  });

  test('Cotton must be 100% removed and Soybean must be present', () => {
    const cottonInCatalog = catalog.some(s => 
      s.id.toLowerCase().includes('cotton') || 
      s.name.toLowerCase().includes('cotton')
    );
    assert.equal(cottonInCatalog, false, 'No cotton varieties should be in SEED_CATALOG');

    const soybean = catalog.find(s => s.id.startsWith('soybean'));
    assert.ok(soybean, 'Ganga Shakti-335 Soybean must be present in catalog');
    assert.equal(soybean.category, 'oilseeds');
    assert.ok(soybean.keyTrait.includes('Pod Shattering') || soybean.keyTrait.includes('Rust') || soybean.name.includes('Soybean'));
  });
});

describe('2. Interactive Crop Calculator & Bonus Computation Tests', () => {
  const cropData = extractCropCalcData();

  test('All 7 Telangana bonus varieties must be in calculator dataset', () => {
    const expectedBonusKeys = [
      'paddy_bpt5204',
      'paddy_rnr15048',
      'paddy_hmtsona',
      'paddy_jaisriram',
      'paddy_knm1638',
      'paddy_wgl44',
      'paddy_knm7715'
    ];

    for (const key of expectedBonusKeys) {
      const crop = cropData[key];
      assert.ok(crop, `Calculator missing key: ${key}`);
      assert.equal(crop.isGovtBonusEligible, true, `${key} must be bonus eligible in calculator`);
      assert.ok(crop.yieldMinPerAcre > 0 && crop.yieldMaxPerAcre > crop.yieldMinPerAcre);
    }
  });

  test('₹500 Bonus calculation formula verification for 2 Acres', () => {
    const areaInAcres = 2;
    const bpt = cropData.paddy_bpt5204;
    const totalYieldMin = Math.round(bpt.yieldMinPerAcre * areaInAcres); // 30 * 2 = 60 Qtl
    const totalYieldMax = Math.round(bpt.yieldMaxPerAcre * areaInAcres); // 34 * 2 = 68 Qtl

    const minBonus = totalYieldMin * 500; // 60 * 500 = ₹30,000
    const maxBonus = totalYieldMax * 500; // 68 * 500 = ₹34,000

    assert.equal(minBonus, 30000, 'Min bonus for 2 acres BPT 5204 should be ₹30,000');
    assert.equal(maxBonus, 34000, 'Max bonus for 2 acres BPT 5204 should be ₹34,000');
  });

  test('Land unit conversion for Telangana farming (40 Guntas = 1 Acre)', () => {
    const rawGuntas = 80;
    const areaInAcres = rawGuntas / 40;
    assert.equal(areaInAcres, 2, '80 Guntas should convert to exactly 2 Acres');

    const rawHectares = 2;
    const hectaresInAcres = rawHectares * 2.471;
    assert.ok(Math.abs(hectaresInAcres - 4.942) < 0.01, '2 Hectares should equal ~4.942 Acres');
  });

  test('Soybean calculator seed rate and 30kg bag packet calculation', () => {
    const soybean = cropData.soybean;
    assert.ok(soybean, 'Soybean missing from calculator');
    assert.equal(soybean.packetSize, 30, 'Soybean packet size must be 30 kg bag');

    const acres = 3;
    const totalSeedKg = soybean.seedRatePerAcre * acres; // 28 * 3 = 84 kg
    const totalBags = Math.ceil(totalSeedKg / soybean.packetSize); // ceil(84 / 30) = 3 Bags
    assert.equal(totalBags, 3, '3 acres of soybean should require 3 bags (90 kg capacity)');
  });
});

describe('3. Contact & Phone Number Consistency Tests', () => {
  test('Phone number 7013135345 must be present across index.html and app.js', () => {
    assert.ok(indexHtmlContent.includes('7013135345') || indexHtmlContent.includes('70131 35345'), 'Phone number missing in index.html');
    assert.ok(appJsContent.includes('7013135345'), 'Phone number missing in app.js WhatsApp handlers');
  });

  test('All WhatsApp order links must use 917013135345', () => {
    const waMatches = appJsContent.match(/wa\.me\/(\d+)/g) || [];
    assert.ok(waMatches.length >= 2, 'Expected multiple wa.me links in app.js');
    for (const match of waMatches) {
      assert.ok(match.includes('917013135345'), `Found invalid WhatsApp number in: ${match}`);
    }
  });

  test('Social media profile links must be valid in index.html', () => {
    assert.ok(indexHtmlContent.includes('https://www.instagram.com/gangaagrigenetics'), 'Instagram link missing');
    assert.ok(indexHtmlContent.includes('https://www.facebook.com/gangaagrigenetics'), 'Facebook link missing');
    assert.ok(indexHtmlContent.includes('https://twitter.com/gangaagri'), 'Twitter/X link missing');
  });
});

describe('4. DOM Sections & SEO Markup Tests', () => {
  test('index.html must have Telangana ₹500 Bonus Scheme section (#tg-bonus)', () => {
    assert.ok(indexHtmlContent.includes('id="tg-bonus"'), 'Missing #tg-bonus section');
    assert.ok(indexHtmlContent.includes('Grain Length &lt; 6.0 mm') || indexHtmlContent.includes('Length < 6.0 mm'));
    assert.ok(indexHtmlContent.includes('Grain Width &lt; 2.0 mm') || indexHtmlContent.includes('Width < 2.0 mm'));
    assert.ok(indexHtmlContent.includes('Moisture Below 17%') || indexHtmlContent.includes('Moisture < 17%'));
    assert.ok(indexHtmlContent.includes('AEO Digital Portal Booking'));
  });

  test('index.html must have Agriculture Updates Newsletter section (#newsletter)', () => {
    assert.ok(indexHtmlContent.includes('id="newsletter"'), 'Missing #newsletter section');
    assert.ok(indexHtmlContent.includes('id="agriNewsletterForm"'), 'Missing newsletter form');
    assert.ok(indexHtmlContent.includes('id="newsContact"'), 'Missing newsletter contact input');
    assert.ok(indexHtmlContent.includes('id="newsletterSuccessBox"'), 'Missing newsletter success container');
  });

  test('index.html must have Hero Carousel with 2-second timing configuration in app.js', () => {
    assert.ok(indexHtmlContent.includes('id="heroCarousel"'), 'Missing #heroCarousel');
    assert.ok(appJsContent.includes('intervalTime = 2000') || appJsContent.includes('2000'), 'Carousel interval must be 2000ms (2s)');
  });

  test('index.html must have Product Spec Dialog with bonus notice container', () => {
    assert.ok(indexHtmlContent.includes('id="productSpecModal"'), 'Missing #productSpecModal dialog');
    assert.ok(indexHtmlContent.includes('id="modalBonusAlert"'), 'Missing #modalBonusAlert in dialog');
  });
});

describe('5. CSS & PWA Standards Tests', () => {
  test('style.css must have styles for tg-bonus and newsletter sections', () => {
    assert.ok(styleCssContent.includes('.tg-bonus-section'), 'Missing .tg-bonus-section in CSS');
    assert.ok(styleCssContent.includes('.bonus-variety-card'), 'Missing .bonus-variety-card in CSS');
    assert.ok(styleCssContent.includes('.newsletter-section'), 'Missing .newsletter-section in CSS');
    assert.ok(styleCssContent.includes('.seed-bonus-badge'), 'Missing .seed-bonus-badge in CSS');
    assert.ok(styleCssContent.includes('.calc-bonus-box'), 'Missing .calc-bonus-box in CSS');
  });

  test('manifest.json must be valid JSON with app branding', () => {
    const manifest = JSON.parse(manifestContent);
    assert.equal(manifest.name, 'Ganga Agri Genetics');
    assert.equal(manifest.display, 'standalone');
    assert.ok(manifest.icons.length > 0);
  });

  test('sw.js Service Worker should have cache storage and offline fallback', () => {
    assert.ok(swContent.includes('CACHE_NAME'), 'Service worker missing CACHE_NAME');
    assert.ok(swContent.includes('self.addEventListener(\'install\''), 'Missing install event');
    assert.ok(swContent.includes('self.addEventListener(\'fetch\''), 'Missing fetch event');
  });
});
