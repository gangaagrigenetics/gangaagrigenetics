const { test, describe } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

// Read source files
const appJsPath = path.join(__dirname, '..', 'app.js');
const i18nJsPath = path.join(__dirname, '..', 'i18n.js');
const indexHtmlPath = path.join(__dirname, '..', 'index.html');
const styleCssPath = path.join(__dirname, '..', 'style.css');
const manifestPath = path.join(__dirname, '..', 'manifest.json');
const swPath = path.join(__dirname, '..', 'sw.js');

const appJsContent = fs.readFileSync(appJsPath, 'utf8');
const i18nJsContent = fs.readFileSync(i18nJsPath, 'utf8');
const indexHtmlContent = fs.readFileSync(indexHtmlPath, 'utf8');
const styleCssContent = fs.readFileSync(styleCssPath, 'utf8');
const manifestContent = fs.readFileSync(manifestPath, 'utf8');
const swContent = fs.readFileSync(swPath, 'utf8');

// Load GANGA_I18N
function extractI18n() {
  const sandbox = {};
  const fn = new Function('window', 'global', i18nJsContent);
  fn(sandbox, sandbox);
  return sandbox.GANGA_I18N;
}

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

describe('1. Certified Hybrid Seed Varieties & Telangana Govt ₹500 Bonus Scheme Tests', () => {
  const catalog = extractSeedCatalog();
  const cropData = extractCropCalcData();

  test('Catalog should contain 13 verified hybrid seed varieties across Cereals & Oilseeds', () => {
    assert.equal(catalog.length, 13, `Expected 13 varieties, found ${catalog.length}`);
    const expectedIds = [
      'paddy-gold99', 'paddy-bpt5204', 'paddy-rnr15048', 'paddy-hmtsona',
      'paddy-jaisriram', 'paddy-knm1638', 'paddy-wgl44', 'paddy-knm7715',
      'maize-surya', 'jowar-mahaveer', 'bajra-tejasvi', 'soybean-shakti',
      'mustard-gold'
    ];
    for (const id of expectedIds) {
      const item = catalog.find(s => s.id === id);
      assert.ok(item, `Missing expected variety id: ${id}`);
    }
  });

  test('Vegetables must be 100% completely removed from SEED_CATALOG and CROP_CALC_DATA', () => {
    const vegetableIds = ['chilli', 'tomato', 'okra', 'bhindi', 'brinjal', 'cabbage'];
    for (const item of catalog) {
      assert.notEqual(item.category, 'vegetables', `Item ${item.id} has category 'vegetables'`);
      for (const veg of vegetableIds) {
        assert.ok(!item.id.toLowerCase().includes(veg), `Catalog item ${item.id} contains vegetable keyword: ${veg}`);
        assert.ok(!item.name.toLowerCase().includes(veg), `Catalog item ${item.name} contains vegetable keyword: ${veg}`);
      }
    }

    for (const key of Object.keys(cropData)) {
      for (const veg of vegetableIds) {
        assert.ok(!key.toLowerCase().includes(veg), `Calculator contains vegetable key: ${key}`);
      }
    }
  });

  test('All 7 Telangana Govt ₹500 Bonus fine-grain paddy varieties must have strict procurement parameters', () => {
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

describe('4. DOM Sections & Interactive Component Tests', () => {
  test('index.html must have Telangana ₹500 Bonus Scheme section (#tg-bonus)', () => {
    assert.ok(indexHtmlContent.includes('id="tg-bonus"'), 'Missing #tg-bonus section');
    assert.ok(indexHtmlContent.includes('Grain Length &lt; 6.0 mm') || indexHtmlContent.includes('Length < 6.0 mm'));
    assert.ok(indexHtmlContent.includes('Grain Width &lt; 2.0 mm') || indexHtmlContent.includes('Width < 2.0 mm'));
    assert.ok(indexHtmlContent.includes('Moisture Below 17%') || indexHtmlContent.includes('Moisture < 17%'));
    assert.ok(indexHtmlContent.includes('AEO Digital Portal Booking'));
  });

  test('index.html must have Agriculture Updates Newsletter section (#newsletter)', () => {
    assert.ok(indexHtmlContent.includes('id="newsletter"'), 'Missing #newsletter section');
    assert.ok(indexHtmlContent.includes('id="agriNewsletterForm"') || indexHtmlContent.includes('id="newsletterForm"'), 'Missing newsletter form');
    assert.ok(indexHtmlContent.includes('id="newsContact"') || indexHtmlContent.includes('id="newsletterContact"'), 'Missing newsletter contact input');
    assert.ok(indexHtmlContent.includes('id="newsletterSuccessBox"') || indexHtmlContent.includes('id="newsletterSuccessMsg"'), 'Missing newsletter success container');
  });

  test('index.html must have Hero Carousel with 2-second timing configuration in app.js', () => {
    assert.ok(indexHtmlContent.includes('id="heroCarousel"'), 'Missing #heroCarousel');
    assert.ok(appJsContent.includes('2000'), 'Carousel interval must be 2000ms (2s)');
  });

  test('index.html and app.js must have Product Spec Dialog with bonus notice support', () => {
    assert.ok(indexHtmlContent.includes('id="productSpecModal"') || indexHtmlContent.includes('id="productModal"'), 'Missing product spec dialog');
    assert.ok(indexHtmlContent.includes('id="modalBonusAlert"') || indexHtmlContent.includes('id="modalBonusContainer"'), 'Missing bonus alert container in dialog');
    assert.ok(appJsContent.includes('openProductModal'), 'Missing openProductModal function in app.js');
  });

  test('style.css and app.js must lock background scroll and enable modal overflow scrolling', () => {
    assert.ok(styleCssContent.includes('modal-open') || styleCssContent.includes('has(dialog[open])'), 'Missing modal scroll lock CSS');
    assert.ok(styleCssContent.includes('overflow-y: auto'), 'Missing modal overflow-y: auto');
    assert.ok(appJsContent.includes('modal-open'), 'Missing modal-open class management in app.js');
  });

  test('index.html and app.js must provide full Variety Comparison Engine with dialog triggers and table', () => {
    assert.ok(indexHtmlContent.includes('id="compareModal"'), 'Missing #compareModal');
    assert.ok(indexHtmlContent.includes('id="openCompareModalBtn"'), 'Missing #openCompareModalBtn');
    assert.ok(indexHtmlContent.includes('id="compareCropA"'), 'Missing #compareCropA select');
    assert.ok(indexHtmlContent.includes('id="compareCropB"'), 'Missing #compareCropB select');
    assert.ok(indexHtmlContent.includes('id="comparisonTableBody"'), 'Missing #comparisonTableBody');
    assert.ok(indexHtmlContent.includes('id="modalCompareVarietyBtn"'), 'Missing #modalCompareVarietyBtn');
    assert.ok(appJsContent.includes('openCompareModal'), 'Missing openCompareModal function in app.js');
    assert.ok(appJsContent.includes('populateComparisonDropdowns'), 'Missing populateComparisonDropdowns function in app.js');
    assert.ok(appJsContent.includes('renderComparisonTable'), 'Missing renderComparisonTable function in app.js');
    assert.ok(appJsContent.includes('e.target === compareModal'), 'Backdrop click must check e.target === compareModal to prevent closing on select change');
  });

  test('Comparison logic should correctly map all 13 catalog varieties across parameters', () => {
    const catalog = extractSeedCatalog();
    assert.equal(catalog.length, 13, 'Should have 13 varieties');
    
    // Verify each variety has complete comparison data
    for (const crop of catalog) {
      assert.ok(crop.varietyCode, `${crop.name} must have varietyCode`);
      assert.ok(crop.duration, `${crop.name} must have duration`);
      assert.ok(crop.yieldPotential, `${crop.name} must have yieldPotential`);
      assert.ok(crop.germination, `${crop.name} must have germination`);
      assert.ok(crop.seedRate, `${crop.name} must have seedRate`);
      assert.ok(crop.season, `${crop.name} must have season`);
      assert.ok(crop.grainType, `${crop.name} must have grainType`);
      assert.ok(crop.keyTrait, `${crop.name} must have keyTrait`);
      assert.ok(crop.soilSuitability, `${crop.name} must have soilSuitability`);
    }
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

describe('6. Production Readiness & SEO Quality Tests', () => {
  const notFoundPath = path.join(__dirname, '..', '404.html');

  test('index.html must use absolute https URLs for og:image and twitter:image', () => {
    assert.ok(
      indexHtmlContent.includes('<meta property="og:image" content="https://gangaagrigenetics.github.io/gangaagrigenetics/assets/images/logo.png">'),
      'og:image must be an absolute URL'
    );
    assert.ok(
      indexHtmlContent.includes('<meta property="twitter:image" content="https://gangaagrigenetics.github.io/gangaagrigenetics/assets/images/logo.png">'),
      'twitter:image must be an absolute URL'
    );
  });

  test('index.html and style.css must support accessible skip-link and focus-visible outlines', () => {
    assert.ok(indexHtmlContent.includes('class="skip-link"'), 'index.html must have skip-link');
    assert.ok(styleCssContent.includes('.skip-link'), 'style.css must have .skip-link styling');
    assert.ok(styleCssContent.includes(':focus-visible'), 'style.css must have :focus-visible styling');
  });

  test('404.html custom error page must exist and be valid', () => {
    assert.ok(fs.existsSync(notFoundPath), '404.html must exist');
    const notFoundContent = fs.readFileSync(notFoundPath, 'utf8');
    assert.ok(notFoundContent.includes('404'), '404.html must contain 404 badge');
    assert.ok(notFoundContent.includes('Page Not Found'), '404.html must contain title');
    assert.ok(notFoundContent.includes('index.html'), '404.html must link back to home');
  });

  test('manifest.json must include standard 192x192 and 512x512 PWA icons', () => {
    const manifest = JSON.parse(manifestContent);
    const has192 = manifest.icons.some(i => i.sizes === '192x192');
    const has512 = manifest.icons.some(i => i.sizes === '512x512');
    assert.ok(has192, 'manifest.json missing 192x192 icon');
    assert.ok(has512, 'manifest.json missing 512x512 icon');
  });

  test('sw.js must cache 404.html', () => {
    assert.ok(swContent.includes('./404.html'), 'sw.js must cache ./404.html');
  });
});

describe('7. Bilingual English & Telugu Localization Integrity Tests', () => {
  const teluguRegex = /[\u0C00-\u0C7F]/;

  test('app.js must contain ZERO Telugu characters (all Telugu localized in i18n.js)', () => {
    const matches = appJsContent.match(teluguRegex);
    assert.ok(
      !matches,
      `app.js must not contain any Telugu characters. Found unexpected character: ${matches ? matches[0] : ''}`
    );
  });

  test('All 13 SEED_CATALOG varieties in app.js must have pure English strings with zero Telugu characters', () => {
    const catalog = extractSeedCatalog();
    assert.equal(catalog.length, 13, 'Should have 13 varieties');
    const englishFields = ['name', 'categoryLabel', 'duration', 'yieldPotential', 'seedRate', 'season', 'grainType', 'keyTrait', 'soilSuitability', 'tagline', 'description', 'sowingGuide'];
    
    for (const crop of catalog) {
      for (const field of englishFields) {
        if (crop[field]) {
          assert.ok(
            !teluguRegex.test(crop[field]),
            `Variety ${crop.id} has unexpected Telugu in English field '${field}': "${crop[field]}"`
          );
        }
      }
    }
  });

  test('i18n.js (GANGA_I18N.catalog) must provide complete Telugu translations for all 13 catalog varieties', () => {
    const catalog = extractSeedCatalog();
    const i18n = extractI18n();
    assert.ok(i18n && i18n.catalog, 'Missing GANGA_I18N.catalog in i18n.js');
    const teluguFields = ['name', 'duration', 'yieldPotential', 'seedRate', 'season', 'grainType', 'keyTrait', 'soilSuitability'];

    for (const crop of catalog) {
      const teData = i18n.catalog[crop.id];
      assert.ok(teData, `i18n.js missing Telugu translation object for variety ${crop.id}`);
      for (const field of teluguFields) {
        assert.ok(
          teData[field] && teluguRegex.test(teData[field]),
          `Variety ${crop.id} in i18n.js is missing Telugu property '${field}'`
        );
      }
    }
  });

  test('i18n.js (GANGA_I18N.calculator) must provide complete Telugu translations for all calculator crops', () => {
    const calcData = extractCropCalcData();
    const i18n = extractI18n();
    assert.ok(i18n && i18n.calculator, 'Missing GANGA_I18N.calculator in i18n.js');

    for (const [key, crop] of Object.entries(calcData)) {
      assert.ok(!teluguRegex.test(crop.name), `Crop ${key} in app.js has Telugu in English name: "${crop.name}"`);
      assert.ok(!teluguRegex.test(crop.advice), `Crop ${key} in app.js has Telugu in English advice: "${crop.advice}"`);
      
      const teData = i18n.calculator[key];
      assert.ok(teData, `i18n.js missing calculator Telugu translation for '${key}'`);
      assert.ok(teData.name && teluguRegex.test(teData.name), `Crop ${key} in i18n.js is missing name`);
      assert.ok(teData.duration && teluguRegex.test(teData.duration), `Crop ${key} in i18n.js is missing duration`);
      assert.ok(teData.advice && teluguRegex.test(teData.advice), `Crop ${key} in i18n.js is missing advice`);
    }
  });

  test('i18n.js UI dictionaries (en & te) must be 100% synchronized with matching translation keys', () => {
    const i18n = extractI18n();
    assert.ok(i18n && i18n.ui, 'Missing GANGA_I18N.ui in i18n.js');
    const enKeys = Object.keys(i18n.ui.en);
    const teKeys = Object.keys(i18n.ui.te);

    assert.deepStrictEqual(enKeys.sort(), teKeys.sort(), 'i18n.js English and Telugu UI key sets must match exactly');
    for (const [key, val] of Object.entries(i18n.ui.en)) {
      if (key !== 'langLabel') {
        assert.ok(!teluguRegex.test(val), `i18n.ui.en['${key}'] contains unexpected Telugu: "${val}"`);
      }
    }
    for (const [key, val] of Object.entries(i18n.ui.te)) {
      if (key !== 'langLabel') {
        assert.ok(teluguRegex.test(val), `i18n.ui.te['${key}'] should contain Telugu translation: "${val}"`);
      }
    }
  });

  test('index.html and sw.js must include and cache i18n.js', () => {
    assert.ok(indexHtmlContent.includes('src="i18n.js'), 'index.html must load i18n.js script');
    assert.ok(swContent.includes('./i18n.js'), 'sw.js must cache ./i18n.js');
  });
});

describe('8. Referenced Images & Static Assets Integrity Tests', () => {
  const rootDir = path.join(__dirname, '..');

  test('All image files referenced in index.html must exist on disk and be non-empty', () => {
    const imgRegex = /(?:src|href|content)=["']([^"']+\.(?:png|jpg|jpeg|svg|webp|ico))["']|url\(['"]?([^'"\)]+\.(?:png|jpg|jpeg|svg|webp|ico))['"]?\)/gi;
    let match;
    const foundImages = new Set();
    while ((match = imgRegex.exec(indexHtmlContent)) !== null) {
      const imgPath = match[1] || match[2];
      if (imgPath && !imgPath.startsWith('http') && !imgPath.startsWith('//')) {
        foundImages.add(imgPath.replace(/^\.\//, ''));
      } else if (imgPath && imgPath.includes('gangaagrigenetics.github.io/gangaagrigenetics/')) {
        const rel = imgPath.split('gangaagrigenetics.github.io/gangaagrigenetics/')[1];
        if (rel) foundImages.add(rel);
      }
    }

    assert.ok(foundImages.size > 0, 'Should find image references in index.html');
    for (const relPath of foundImages) {
      const fullPath = path.join(rootDir, relPath);
      assert.ok(fs.existsSync(fullPath), `Image referenced in index.html does not exist on disk: ${relPath}`);
      const stats = fs.statSync(fullPath);
      assert.ok(stats.size > 0, `Image referenced in index.html is empty: ${relPath}`);
    }
  });

  test('All image files referenced in 404.html must exist on disk and be non-empty', () => {
    const imgRegex = /(?:src|href|content)=["']([^"']+\.(?:png|jpg|jpeg|svg|webp|ico))["']|url\(['"]?([^'"\)]+\.(?:png|jpg|jpeg|svg|webp|ico))['"]?\)/gi;
    const notFoundContent = fs.readFileSync(path.join(rootDir, '404.html'), 'utf8');
    let match;
    const foundImages = new Set();
    while ((match = imgRegex.exec(notFoundContent)) !== null) {
      const imgPath = match[1] || match[2];
      if (imgPath && !imgPath.startsWith('http') && !imgPath.startsWith('//')) {
        foundImages.add(imgPath.replace(/^\.\//, ''));
      }
    }

    assert.ok(foundImages.size > 0, 'Should find image references in 404.html');
    for (const relPath of foundImages) {
      const fullPath = path.join(rootDir, relPath);
      assert.ok(fs.existsSync(fullPath), `Image referenced in 404.html does not exist on disk: ${relPath}`);
      const stats = fs.statSync(fullPath);
      assert.ok(stats.size > 0, `Image referenced in 404.html is empty: ${relPath}`);
    }
  });

  test('All icons referenced in manifest.json must exist on disk and be non-empty', () => {
    const manifest = JSON.parse(manifestContent);
    assert.ok(manifest.icons && manifest.icons.length > 0, 'manifest.json must declare icons');
    for (const icon of manifest.icons) {
      const relPath = icon.src.replace(/^\.\//, '');
      const fullPath = path.join(rootDir, relPath);
      assert.ok(fs.existsSync(fullPath), `Icon referenced in manifest.json does not exist: ${icon.src}`);
      const stats = fs.statSync(fullPath);
      assert.ok(stats.size > 0, `Icon file is empty: ${icon.src}`);
    }
  });

  test('All image assets cached in sw.js (ASSETS_TO_CACHE) must exist on disk and be non-empty', () => {
    const imgMatches = swContent.match(/['"](\.\/assets\/images\/[^'"]+)['"]/g) || [];
    assert.ok(imgMatches.length > 0, 'sw.js should cache image assets');
    for (const raw of imgMatches) {
      const cleanPath = raw.replace(/['"]/g, '').replace(/^\.\//, '');
      const fullPath = path.join(rootDir, cleanPath);
      assert.ok(fs.existsSync(fullPath), `Asset cached in sw.js does not exist on disk: ${cleanPath}`);
      const stats = fs.statSync(fullPath);
      assert.ok(stats.size > 0, `Cached asset file is empty: ${cleanPath}`);
    }
  });

  test('All core images in assets/images directory must exist on disk and be non-empty', () => {
    const imagesDir = path.join(rootDir, 'assets', 'images');
    assert.ok(fs.existsSync(imagesDir), 'assets/images directory must exist');
    const files = fs.readdirSync(imagesDir);
    assert.ok(files.length >= 7, `Expected at least 7 image assets, found ${files.length}`);
    
    for (const file of files) {
      const filePath = path.join(imagesDir, file);
      const stats = fs.statSync(filePath);
      assert.ok(stats.size > 100, `Image ${file} is unexpectedly small or empty (${stats.size} bytes)`);
    }
  });

  test('All images referenced in style.css or app.js must exist on disk', () => {
    const combined = styleCssContent + '\n' + appJsContent;
    const imgRegex = /['"]?(assets\/images\/[^'"\)\s]+\.(?:png|jpg|jpeg|svg|webp|ico))['"]?/gi;
    let match;
    const foundImages = new Set();
    while ((match = imgRegex.exec(combined)) !== null) {
      foundImages.add(match[1]);
    }
    for (const relPath of foundImages) {
      const fullPath = path.join(rootDir, relPath);
      assert.ok(fs.existsSync(fullPath), `Asset referenced in CSS/JS does not exist: ${relPath}`);
      const stats = fs.statSync(fullPath);
      assert.ok(stats.size > 0, `Asset file is empty: ${relPath}`);
    }
  });
});

