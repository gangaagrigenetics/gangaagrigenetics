/**
 * GANGA AGRI GENETICS - OFFICIAL APPLICATION JAVASCRIPT
 * Hybrid Seed Catalog, Interactive Acreage Calculator, Store Status,
 * Variety Comparison & Offline PWA Engine
 *
 * NOTE: All localization dictionaries (English/Telugu) and Telugu translations
 * are maintained in i18n.js. This file contains pure application logic.
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // Helper to access central localization data & helpers from i18n.js
  const getI18n = () => (typeof window !== 'undefined' && window.GANGA_I18N) ? window.GANGA_I18N : (typeof GANGA_I18N !== 'undefined' ? GANGA_I18N : null);

  function getCropData(item, lang) {
    const i18n = getI18n();
    return i18n && typeof i18n.getCrop === 'function' ? i18n.getCrop(item, lang) : item;
  }

  function getCalcData(cropKey, baseCrop, lang) {
    const i18n = getI18n();
    return i18n && typeof i18n.getCalcCrop === 'function' ? i18n.getCalcCrop(cropKey, baseCrop, lang) : baseCrop;
  }

  // -------------------------------------------------------------------------
  // 1. DATA: CERTIFIED HYBRID SEEDS DATASET (English Master)
  // -------------------------------------------------------------------------
  const SEED_CATALOG = [
    {
      id: 'paddy-gold99',
      name: 'Ganga Supreme Gold-99 Hybrid Paddy',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-PD-99',
      duration: '125 - 130 Days',
      yieldPotential: '32 - 36 Qtl / Acre',
      germination: '98% Min',
      seedRate: '5 - 6 kg / Acre',
      season: 'Kharif & Rabi',
      grainType: 'Medium Slender, Non-Sticky & High Milling Recovery',
      keyTrait: 'High Resistance to Bacterial Leaf Blight (BLB) & Blast',
      soilSuitability: 'Well-suited for Black Cotton and Clay Loam soils',
      tagline: 'Maximum Tillering & Top Market Price Hybrid Paddy',
      description: 'Ganga Supreme Gold-99 is an elite medium-duration paddy hybrid engineered for high tillering (30-35 tillers/hill) and synchronized flowering. Resistant to lodging due to sturdy culms.',
      sowingGuide: 'Nursery sowing: 5 kg seeds per acre. Transplant 21-25 days old seedlings at 20cm x 15cm spacing. Recommended balanced NPK application (120:60:40 kg/ha).'
    },
    {
      id: 'paddy-bpt5204',
      name: 'Ganga BPT 5204 (Samba Masuri)',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-BPT-52',
      isGovtBonusEligible: true,
      bonusAmount: '₹500 / Qtl Bonus Eligible',
      grainDimensions: 'Length < 6.0mm (5.3mm), Width < 2.0mm (1.8mm), Moisture < 17%',
      duration: '135 - 140 Days',
      yieldPotential: '30 - 34 Qtl / Acre',
      germination: '96% Min',
      seedRate: '6 - 7 kg / Acre',
      season: 'Kharif & Rabi',
      grainType: 'Super Fine Sona Masoori Table Quality',
      keyTrait: 'Telangana Govt ₹500/Qtl Bonus | High Shelling % & Zero Chalkiness',
      soilSuitability: 'Alluvial, Heavy Clay & Black Cotton Soils',
      tagline: 'Telangana ₹500/Qtl Bonus Eligible | Benchmark Premium Table Rice',
      description: 'BPT 5204 (Samba Masuri) is the benchmark fine-grain variety officially approved by the Telangana Government for the ₹500 per quintal procurement bonus. Meets all criteria (length <6mm, width <2mm, moisture <17%).',
      sowingGuide: 'Nursery sowing: 6 kg seeds/acre. Maintain shallow water (2-3cm) during tillering. Register with local AEO on the digital portal for bonus eligibility.'
    },
    {
      id: 'paddy-rnr15048',
      name: 'Ganga Telangana Sona (RNR 15048)',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-RNR-15',
      isGovtBonusEligible: true,
      bonusAmount: '₹500 / Qtl Bonus Eligible',
      grainDimensions: 'Length < 6.0mm (5.2mm), Width < 2.0mm (1.7mm), Moisture < 17%',
      duration: '120 - 125 Days (Short Duration)',
      yieldPotential: '30 - 35 Qtl / Acre',
      germination: '97% Min',
      seedRate: '6 - 7 kg / Acre',
      season: 'Kharif & Rabi',
      grainType: 'Super Fine Slender Grain with Low Glycemic Index (GI 51.5)',
      keyTrait: 'Telangana Govt ₹500 Bonus | Low GI Sugar-Free Rice & Blast Resistant',
      soilSuitability: 'Suitable for All Telangana Soil Types',
      tagline: '₹500 Govt Bonus + Fast 120-Day Maturity + Low GI Rice',
      description: 'RNR 15048 (Telangana Sona) is PJTSAU developed champion short-duration (120-125 days) fine paddy eligible for the ₹500/Qtl bonus. Low GI (51.5) diabetic-friendly rice with exceptional blast resistance.',
      sowingGuide: '20-25 day seedling transplantation at 15cm x 15cm spacing. Early harvest saves water and qualifies for the state ₹500 bonus.'
    },
    {
      id: 'paddy-hmtsona',
      name: 'Ganga HMT Sona Super Fine Sannalu',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-HMT-08',
      isGovtBonusEligible: true,
      bonusAmount: '₹500 / Qtl Bonus Eligible',
      grainDimensions: 'Length < 6.0mm (5.4mm), Width < 2.0mm (1.85mm), Moisture < 17%',
      duration: '130 - 135 Days',
      yieldPotential: '28 - 32 Qtl / Acre',
      germination: '96% Min',
      seedRate: '6 - 7 kg / Acre',
      season: 'Kharif & Rabi',
      grainType: 'Aromatic Pearly White Fine Grain with >70% Head Rice Recovery',
      keyTrait: 'Telangana Govt ₹500 Bonus | Scented Sannalu with High Milling Shelling',
      soilSuitability: 'Fertile Clay Loam & Red Sandy Soils',
      tagline: 'Telangana ₹500/Qtl Bonus | Fragrant Fine Rice Favorite',
      description: 'HMT Sona is officially recognized under the Telangana ₹500/Qtl bonus scheme. Celebrated for high head rice recovery, appealing scent, non-sticky cooking texture, and high market value.',
      sowingGuide: 'Transplant at 20cm x 15cm spacing. Recommended balanced potash application at panicle initiation for heavy ear-head filling.'
    },
    {
      id: 'paddy-jaisriram',
      name: 'Ganga Jai Sriram Premium Sannalu',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-JSR-01',
      isGovtBonusEligible: true,
      bonusAmount: '₹500 / Qtl Bonus Eligible',
      grainDimensions: 'Length < 6.0mm (5.5mm), Width < 2.0mm (1.8mm), Moisture < 17%',
      duration: '135 - 140 Days',
      yieldPotential: '26 - 30 Qtl / Acre',
      germination: '95% Min',
      seedRate: '6 - 7 kg / Acre',
      season: 'Kharif & Rabi',
      grainType: 'Elite Scented Slender Table Rice, Supreme Consumer Demand',
      keyTrait: 'Telangana Govt ₹500 Bonus | Top Market Rate & Non-Lodging Habit',
      soilSuitability: 'Medium to Heavy Black & Alluvial Soils',
      tagline: 'Telangana ₹500/Qtl Bonus | Premium Open Market & Govt Incentive',
      description: 'Jai Sriram is the golden standard for fine rice across Telangana. Approved for the ₹500/Qtl bonus, giving farmers both peak market prices from millers and government bonus rewards.',
      sowingGuide: 'Maintain optimal plant density (33 hills/sq.m). Apply zinc sulphate at basal stage for robust tillering.'
    },
    {
      id: 'paddy-knm1638',
      name: 'Ganga Kunaram Sannalu (KNM 1638)',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-KNM-16',
      isGovtBonusEligible: true,
      bonusAmount: '₹500 / Qtl Bonus Eligible',
      grainDimensions: 'Length < 6.0mm (5.4mm), Width < 2.0mm (1.8mm), Moisture < 17%',
      duration: '125 - 130 Days',
      yieldPotential: '32 - 36 Qtl / Acre',
      germination: '97% Min',
      seedRate: '6 - 7 kg / Acre',
      season: 'Kharif & Rabi',
      grainType: 'Medium Slender Non-Chalky Sannalu',
      keyTrait: 'Telangana Govt ₹500 Bonus | BLB & Brown Planthopper (BPH) Resistant',
      soilSuitability: 'Deep Black & Clay Soils of Northern Telangana',
      tagline: 'Telangana ₹500/Qtl Bonus | Bumper 36 Qtl Yield + Disease Resistance',
      description: 'KNM 1638 (Kunaram Sannalu) from the Kunaram Agricultural Research Station is an elite high-yielding fine variety qualified for the ₹500 bonus. Exceptional tolerance to BLB and BPH pests.',
      sowingGuide: 'Transplant 21-day seedlings. High response to integrated nutrient management with excellent straw strength.'
    },
    {
      id: 'paddy-wgl44',
      name: 'Ganga Siddhi (WGL 44 / Warangal-44)',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-WGL-44',
      isGovtBonusEligible: true,
      bonusAmount: '₹500 / Qtl Bonus Eligible',
      grainDimensions: 'Length < 6.0mm (5.3mm), Width < 2.0mm (1.75mm), Moisture < 17%',
      duration: '130 - 135 Days',
      yieldPotential: '30 - 35 Qtl / Acre',
      germination: '96% Min',
      seedRate: '6 - 7 kg / Acre',
      season: 'Kharif & Rabi',
      grainType: 'Short Slender Fine Grain with Heavy Panicle Grain Weight',
      keyTrait: 'Telangana Govt ₹500 Bonus | Gall Midge (Biotype-1) & Blast Resistant',
      soilSuitability: 'Red Sandy Loams & Black Cotton Soils',
      tagline: 'Telangana ₹500/Qtl Bonus | Proven Gall Midge Resistant Sannalu',
      description: 'WGL 44 (Siddhi) is a celebrated fine variety from Warangal RRS, approved for the ₹500 bonus. Features sturdy lodging-resistant culms, heavy grain bearing per panicle, and Gall Midge resistance.',
      sowingGuide: '20cm x 15cm spacing. Recommended split nitrogen application (basal, tillering, panicle initiation) for maximum grain filling.'
    },
    {
      id: 'paddy-knm7715',
      name: 'Ganga Kunaram 7715 (KNM 7715)',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-KNM-77',
      isGovtBonusEligible: true,
      bonusAmount: '₹500 / Qtl Bonus Eligible',
      grainDimensions: 'Length < 6.0mm (5.2mm), Width < 2.0mm (1.8mm), Moisture < 17%',
      duration: '120 - 125 Days (Fast Maturity)',
      yieldPotential: '30 - 34 Qtl / Acre',
      germination: '96% Min',
      seedRate: '6 - 7 kg / Acre',
      season: 'Kharif & Rabi (Both Seasons)',
      grainType: 'Fine Slender Lustrous Grains with High Test Weight',
      keyTrait: 'Telangana Govt ₹500 Bonus | Early Maturity & Cold Weather Resilience',
      soilSuitability: 'Alluvial & Medium Loamy Soils',
      tagline: 'Telangana ₹500/Qtl Bonus | Early 120-Day Sannalu for Both Seasons',
      description: 'KNM 7715 is an approved fine-grain paddy variety qualifying for the ₹500/Qtl bonus. Offers rapid 120-day maturity and cold tolerance, making it ideal for both Kharif and Rabi sowings.',
      sowingGuide: 'Direct seeding or nursery transplanting. Excellent choice for crop rotation before winter pulses and oilseeds.'
    },
    {
      id: 'maize-surya',
      name: 'Ganga Surya Mahabali Hybrid Maize',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-MZ-88',
      duration: '110 - 118 Days',
      yieldPotential: '38 - 45 Qtl / Acre',
      germination: '98% Min',
      seedRate: '7 - 8 kg / Acre',
      season: 'Kharif, Rabi & Spring',
      grainType: 'Bold Orange-Yellow Flint Grains',
      keyTrait: 'Fall Armyworm (FAW) & Turcicum Leaf Blight Tolerant',
      soilSuitability: 'Well-drained Fertile Loams & Black Soils',
      tagline: 'Heavy Cob Girth with Deep Grain Depth',
      description: 'A champion single-cross yellow corn hybrid with tight husk cover extending to the cob tip, protecting against rain damage and ear rots. High test weight.',
      sowingGuide: 'Sow at 60cm row spacing and 20cm plant spacing at 4-5cm depth. Ensure adequate moisture during tasseling and silking stages.'
    },
    {
      id: 'jowar-mahaveer',
      name: 'Ganga Mahaveer Hybrid White Jowar (Sorghum)',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-JW-09',
      duration: '105 - 112 Days',
      yieldPotential: '22 - 28 Qtl Grain + 6-8 Ton Fodder / Acre',
      germination: '95% Min',
      seedRate: '3.5 - 4 kg / Acre',
      season: 'Kharif & Rabi',
      grainType: 'Pearly White Bold Grains & Sweet Juicy Stalks',
      keyTrait: 'Drought Hardy, Grain Mold & Shoot Fly Tolerant',
      soilSuitability: 'Medium to Heavy Black & Red Soils',
      tagline: 'Dual Purpose Champion: High Grain Yield + Sweet Fodder',
      description: 'Ganga Mahaveer is an outstanding high-yielding dual-purpose sorghum hybrid bred for South Indian climates. Produces massive semi-compact ear heads with high flour recovery and palatable green fodder.',
      sowingGuide: 'Sow at 45cm x 15cm spacing. Seed treatment with Thiamethoxam 30 FS (10 ml/kg) ensures complete shoot fly protection.'
    },
    {
      id: 'bajra-tejasvi',
      name: 'Ganga Tejasvi Hybrid Bajra (Pearl Millet)',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-BJ-06',
      duration: '85 - 90 Days (Super Fast Maturity)',
      yieldPotential: '16 - 22 Qtl / Acre',
      germination: '95% Min',
      seedRate: '1.5 - 2 kg / Acre',
      season: 'Kharif & Summer',
      grainType: 'Dense Grey-Brown Bold Grains with High Biofortified Iron',
      keyTrait: 'Downy Mildew & Rust Immune with 6-8 Productive Tillers',
      soilSuitability: 'Light Sandy Loams, Red Soils & Dryland Tracts',
      tagline: 'Ultra-Fast Duration with Thick 28-32cm Compact Candle Spikes',
      description: 'Exceptional climate-resilient pearl millet hybrid with strong tillering capacity, synchronous maturity, and stay-green stalks. Highly remunerative in low-rainfall and summer cultivation.',
      sowingGuide: 'Direct drilling at 45cm x 10-12cm spacing at shallow depth (2-3cm). First weeding at 20 days.'
    },
    {
      id: 'soybean-shakti',
      name: 'Ganga Shakti-335 High-Yield Soybean',
      category: 'oilseeds',
      categoryLabel: 'Oilseed & Pulse',
      varietyCode: 'GAG-SB-33',
      duration: '90 - 98 Days',
      yieldPotential: '12 - 16 Qtl / Acre',
      germination: '92% Min',
      seedRate: '25 - 30 kg / Acre (1 Bag - 30 kg)',
      season: 'Kharif (Monsoon)',
      grainType: 'Bold Tawny Golden-Yellow Grains with 20% Oil & 40% Protein',
      keyTrait: 'Yellow Mosaic Virus (YMV), Rust & Pod Shattering Resistant',
      soilSuitability: 'Deep Black Soils & Fertile Loams',
      tagline: 'Heavy Pod Clustering with Anti-Shattering Resilience',
      description: 'Ganga Shakti-335 is a premium high-yielding soybean variety specially bred for Telangana Kharif seasons. High branching, 3-4 seeded bold pods, superior nodulation, and excellent resistance to pod shattering.',
      sowingGuide: 'Treat seeds with Bradyrhizobium and Trichoderma. Sow on ridges or flat beds at 45cm x 5cm spacing at 3-4cm depth. Ensure adequate drainage.'
    },
    {
      id: 'mustard-gold',
      name: 'Ganga Gold Super Hybrid Mustard',
      category: 'oilseeds',
      categoryLabel: 'Oilseed Crop',
      varietyCode: 'GAG-MS-01',
      duration: '105 - 115 Days',
      yieldPotential: '10 - 14 Qtl / Acre',
      germination: '96% Min',
      seedRate: '1.5 - 2 kg / Acre',
      season: 'Rabi (Winter)',
      grainType: 'Bold Brownish Grains with 42% Oil Content',
      keyTrait: 'White Rust & Alternaria Blight Resistant',
      soilSuitability: 'Loamy to Heavy Soils',
      tagline: 'High Oil Recovery & Cold-Tolerance',
      description: 'Specially developed for South and Central India Rabi sowing. High branching from base with 40-45 siliquae per branch.',
      sowingGuide: 'Sow in mid-October to early November. Row spacing: 30cm x 10cm.'
    }
  ];

  // -------------------------------------------------------------------------
  // 2. BILINGUAL LOCALIZATION STATE & EVENT HANDLERS
  // -------------------------------------------------------------------------
  let currentLang = localStorage.getItem('ganga_lang') || 'en';

  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ganga_lang', lang);
    const i18n = getI18n();
    const t = (i18n && i18n.ui && i18n.ui[lang]) ? i18n.ui[lang] : {};

    const langLabel = document.getElementById('langLabel');
    if (langLabel && t.langLabel) langLabel.textContent = t.langLabel;

    // Translate specific elements by id
    const elMap = {
      'heroBadgeText': t.heroBadge,
      'heroDescText': t.heroDesc,
      'heroCtaExploreText': t.heroCtaExplore,
      'heroCtaCalcText': t.heroCtaCalc,
      'heroCtaDirectionsText': t.heroCtaDirections,
      'calcHeadingText': t.calcHeading,
      'calcSubText': t.calcSub,
      'recalcBtnText': t.calcBtnRecalc,
      'printCalcBtnText': t.calcBtnPrint,
      'catalogHeadingText': t.catalogHeading,
      'catalogSubText': t.catalogSub,
      'compareBtnLabel': t.compareBtnText,
      'compareModalHeading': t.compareModalHeading,
      'compareModalSubtitle': t.compareModalSubtitle,
      'compareLabelA': t.compareLabelA,
      'compareLabelB': t.compareLabelB
    };

    for (const [id, text] of Object.entries(elMap)) {
      const el = document.getElementById(id);
      if (el && text) el.textContent = text;
    }

    const searchInput = document.getElementById('seedSearchInput');
    if (searchInput && t.catalogSearchPlaceholder) {
      searchInput.placeholder = t.catalogSearchPlaceholder;
    }

    updateCalculatorDropdownLabels();
    renderProducts();
    computeCalculator();
    checkStoreOpenStatus();
    if (compareModal && (compareModal.open || compareModal.hasAttribute('open'))) {
      populateComparisonDropdowns();
      renderComparisonTable();
    }
  }

  function updateCalculatorDropdownLabels() {
    const isTe = (currentLang === 'te');
    const i18n = getI18n();
    const cropSelect = document.getElementById('calcCropSelect');
    const areaUnitSelect = document.getElementById('calcAreaUnit');
    const soilSelect = document.getElementById('calcSoilType');
    const seasonSelect = document.getElementById('calcSeason');

    if (cropSelect && typeof CROP_CALC_DATA !== 'undefined') {
      const selectedCrop = cropSelect.value;
      Array.from(cropSelect.options).forEach(opt => {
        const cropData = CROP_CALC_DATA[opt.value];
        if (cropData) {
          const locCrop = getCalcData(opt.value, cropData, currentLang);
          opt.textContent = locCrop.name;
        }
      });
      cropSelect.value = selectedCrop;
    }

    if (areaUnitSelect && i18n && i18n.dropdowns && i18n.dropdowns.areaUnits) {
      const selectedUnit = areaUnitSelect.value;
      Array.from(areaUnitSelect.options).forEach(opt => {
        const entry = i18n.dropdowns.areaUnits[opt.value];
        if (entry) opt.textContent = isTe ? entry.te : entry.en;
      });
      areaUnitSelect.value = selectedUnit;
    }

    if (soilSelect && i18n && i18n.dropdowns && i18n.dropdowns.soilTypes) {
      const selectedSoil = soilSelect.value;
      Array.from(soilSelect.options).forEach(opt => {
        const entry = i18n.dropdowns.soilTypes[opt.value];
        if (entry) opt.textContent = isTe ? entry.te : entry.en;
      });
      soilSelect.value = selectedSoil;
    }

    if (seasonSelect && i18n && i18n.dropdowns && i18n.dropdowns.seasons) {
      const selectedSeason = seasonSelect.value;
      Array.from(seasonSelect.options).forEach(opt => {
        const entry = i18n.dropdowns.seasons[opt.value];
        if (entry) opt.textContent = isTe ? entry.te : entry.en;
      });
      seasonSelect.value = selectedSeason;
    }
  }

  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function () {
      const nextLang = currentLang === 'en' ? 'te' : 'en';
      updateLanguage(nextLang);
      const i18n = getI18n();
      const toastMsg = (i18n && i18n.ui && i18n.ui[nextLang]) ? i18n.ui[nextLang].toastLangSwitched : 'Language updated';
      showToast(toastMsg, 'info');
    });
  }

  // -------------------------------------------------------------------------
  // 3. RENDER PRODUCTS CATALOG WITH SEARCH & FILTER
  // -------------------------------------------------------------------------
  const productsGrid = document.getElementById('productsGrid');
  const filterPills = document.querySelectorAll('.filter-pill');
  const searchInput = document.getElementById('seedSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const countAll = document.getElementById('count-all');

  let currentCategory = 'all';
  let currentSearchQuery = '';

  if (countAll) {
    countAll.textContent = SEED_CATALOG.length;
  }

  function renderProducts() {
    if (!productsGrid) return;
    const i18n = getI18n();
    const t = (i18n && i18n.ui && i18n.ui[currentLang]) ? i18n.ui[currentLang] : {};

    const filtered = SEED_CATALOG.filter(item => {
      const matchesCategory = (
        currentCategory === 'all' || 
        item.category === currentCategory || 
        (currentCategory === 'bonus_sannalu' && item.isGovtBonusEligible)
      );
      const query = currentSearchQuery.toLowerCase().trim();
      const loc = getCropData(item, currentLang);
      const matchesSearch = !query || 
        item.name.toLowerCase().includes(query) ||
        loc.name.toLowerCase().includes(query) ||
        item.varietyCode.toLowerCase().includes(query) ||
        item.keyTrait.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div class="no-results-box" style="grid-column: 1 / -1; text-align: center; padding: 48px 20px;">
          <i class="fa-solid fa-seedling" style="font-size: 3rem; color: #94a3b8; margin-bottom: 16px;"></i>
          <h3>No Hybrid Seeds Found</h3>
          <p>No seeds matched "${currentSearchQuery}". Try clearing filters or searching for "Paddy", "Maize", or "Bonus".</p>
          <button type="button" class="btn btn--secondary" onclick="document.getElementById('clearSearchBtn').click()">
            <i class="fa-solid fa-arrows-rotate"></i> Reset Filters
          </button>
        </div>
      `;
      return;
    }

    productsGrid.innerHTML = filtered.map(baseItem => {
      const item = getCropData(baseItem, currentLang);
      const isBonus = item.isGovtBonusEligible;
      const cardCategoryClass = `cat-${item.category}`;

      return `
        <div class="seed-card product-card ${cardCategoryClass} ${isBonus ? 'bonus-highlight-card' : ''}" data-category="${item.category}" data-id="${item.id}">
          <div class="seed-card-header">
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span class="seed-type-badge">${item.categoryLabel}</span>
              ${isBonus ? `
                <span class="badge badge--success seed-bonus-badge" style="font-size: 0.72rem; padding: 2px 6px;">
                  <i class="fa-solid fa-award"></i> ${item.bonusAmount || '₹500 TG Bonus'}
                </span>
              ` : ''}
            </div>
            <h3 class="product-title" title="${item.name}">${item.name}</h3>
            <div class="seed-variety-code">${item.varietyCode}</div>
          </div>

          <div class="seed-card-body">
            <div class="seed-features-list">
              <div class="seed-feature-row">
                <span><i class="fa-regular fa-clock"></i> ${t.duration || 'Maturity'}:</span>
                <strong>${item.duration}</strong>
              </div>
              <div class="seed-feature-row">
                <span><i class="fa-solid fa-chart-line"></i> ${t.yieldPotential || 'Yield Potential'}:</span>
                <strong style="color: #047857;">${item.yieldPotential}</strong>
              </div>
              <div class="seed-feature-row">
                <span><i class="fa-solid fa-seedling"></i> ${t.germination || 'Germination'}:</span>
                <strong>${item.germination}</strong>
              </div>
              <div class="seed-feature-row">
                <span><i class="fa-regular fa-calendar"></i> ${t.season || 'Best Season'}:</span>
                <strong>${item.season}</strong>
              </div>
            </div>

            <div class="seed-trait-tag" title="${item.keyTrait}">
              <i class="fa-solid fa-shield-halved" style="color: #047857; flex-shrink: 0;"></i>
              <span style="overflow: hidden; text-overflow: ellipsis; white-space: normal; display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; line-height: 1.35;">${item.keyTrait}</span>
            </div>

            <div class="seed-card-footer product-card-actions">
              <button type="button" class="btn btn--outline-primary btn--sm view-specs-btn view-spec-btn" data-seed-id="${item.id}" aria-label="View specifications for ${item.name}">
                <i class="fa-solid fa-circle-info"></i> <span>${t.viewSpecs || 'View Specs'}</span>
              </button>
              <a href="https://wa.me/917013135345?text=${encodeURIComponent('Hello Ganga Agri Genetics, I would like to order: ' + baseItem.name + ' (' + item.varietyCode + ')')}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm" aria-label="Order ${item.name} on WhatsApp">
                <i class="fa-brands fa-whatsapp"></i> <span>${t.orderViaWhatsApp || 'Order'}</span>
              </a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    // Attach View Specs button click listeners
    const viewButtons = productsGrid.querySelectorAll('.view-specs-btn');
    viewButtons.forEach(btn => {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        const seedId = this.getAttribute('data-seed-id');
        openProductModal(seedId);
      });
    });
  }

  // Filter Pill Click Handlers
  filterPills.forEach(pill => {
    pill.addEventListener('click', function () {
      filterPills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.getAttribute('data-category');
      renderProducts();
    });
  });

  // Search Input Handler
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      currentSearchQuery = this.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = currentSearchQuery ? 'block' : 'none';
      }
      renderProducts();
    });
  }

  // Clear Search Button
  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', function () {
      if (searchInput) {
        searchInput.value = '';
        currentSearchQuery = '';
        this.style.display = 'none';
        renderProducts();
        searchInput.focus();
      }
    });
  }

  // Bonus Scheme Hub Variety Card Trigger Handlers
  document.querySelectorAll('.bonus-variety-card, .bonus-spec-btn').forEach(card => {
    card.addEventListener('click', function (e) {
      e.preventDefault();
      const seedId = this.getAttribute('data-seed-id');
      if (seedId) {
        openProductModal(seedId);
      }
    });
  });

  // -------------------------------------------------------------------------
  // 4. PRODUCT SPECIFICATION MODAL (<dialog id="productSpecModal">)
  // -------------------------------------------------------------------------
  const productModal = document.getElementById('productSpecModal') || document.getElementById('productModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const modalCloseFooterBtn = document.getElementById('closeModalFooterBtn') || document.getElementById('modalCloseFooterBtn');

  function openProductModal(seedId) {
    const baseItem = SEED_CATALOG.find(s => s.id === seedId);
    const targetModal = document.getElementById('productSpecModal') || document.getElementById('productModal') || productModal;
    if (!baseItem || !targetModal) return;
    const item = getCropData(baseItem, currentLang);
    const isBonus = item.isGovtBonusEligible;

    // Populate modal fields supporting multiple ID aliases
    const modalProductTitle = document.getElementById('modalTitle') || document.getElementById('modalProductTitle');
    const modalTagline = document.getElementById('modalTagline');
    const modalVarietyBadge = document.getElementById('modalCategory') || document.getElementById('modalVarietyBadge');
    const modalDuration = document.getElementById('modalDuration');
    const modalYield = document.getElementById('modalYield');
    const modalGermination = document.getElementById('modalGermination');
    const modalSeedRate = document.getElementById('modalSeedRate');
    const modalSeason = document.getElementById('modalSeason');
    const modalGrainType = document.getElementById('modalGrain') || document.getElementById('modalGrainType');
    const modalDescription = document.getElementById('modalDescription');
    const modalSowingGuide = document.getElementById('modalSowingGuide');
    const bonusContainer = document.getElementById('modalBonusAlert') || document.getElementById('modalBonusContainer');
    const modalWhatsAppBtn = document.getElementById('modalWhatsAppOrderBtn') || document.getElementById('modalWhatsAppBtn');
    const modalCompareVarietyBtn = document.getElementById('modalCompareVarietyBtn');

    if (modalProductTitle) modalProductTitle.textContent = item.name;
    if (modalTagline) modalTagline.textContent = item.tagline || '';
    if (modalVarietyBadge) modalVarietyBadge.textContent = `${item.varietyCode} • ${item.categoryLabel}`;
    if (modalDuration) modalDuration.textContent = item.duration;
    if (modalYield) modalYield.textContent = item.yieldPotential;
    if (modalGermination) modalGermination.textContent = item.germination;
    if (modalSeedRate) modalSeedRate.textContent = item.seedRate;
    if (modalSeason) modalSeason.textContent = item.season;
    if (modalGrainType) modalGrainType.textContent = item.grainType;
    if (modalDescription) modalDescription.textContent = item.description;
    if (modalSowingGuide) modalSowingGuide.textContent = item.sowingGuide;

    // Government Bonus Notice Container
    if (bonusContainer) {
      if (isBonus) {
        bonusContainer.innerHTML = `
          <div class="modal-bonus-banner">
            <div class="bonus-banner-head">
              <i class="fa-solid fa-award"></i>
              <strong>${item.bonusAmount || 'Telangana Govt ₹500 / Qtl Bonus Eligible'}</strong>
            </div>
            <p>This variety officially qualifies for the Government of Telangana ₹500/Quintal procurement incentive over MSP. Grain standard: ${item.grainDimensions || 'Length <6mm, Width <2mm, Moisture <17%'}.</p>
          </div>
        `;
        bonusContainer.style.display = 'block';
      } else {
        bonusContainer.innerHTML = '';
        bonusContainer.style.display = 'none';
      }
    }

    if (modalWhatsAppBtn) {
      const msg = `Hello Ganga Agri Genetics, I am interested in ordering: ${baseItem.name} (${item.varietyCode}). Please share price and availability.`;
      modalWhatsAppBtn.href = `https://wa.me/917013135345?text=${encodeURIComponent(msg)}`;
    }

    if (modalCompareVarietyBtn) {
      modalCompareVarietyBtn.onclick = function () {
        closeModal();
        openCompareModal(baseItem.id);
      };
    }

    // Open modal safely
    document.body.classList.add('modal-open');
    if (typeof targetModal.showModal === 'function') {
      try {
        if (!targetModal.open) {
          targetModal.showModal();
        }
      } catch (err) {
        targetModal.setAttribute('open', '');
      }
    } else {
      targetModal.setAttribute('open', '');
    }
    targetModal.scrollTop = 0;
  }

  function updateModalOpenState() {
    const prodModal = document.getElementById('productSpecModal') || document.getElementById('productModal');
    const compModal = document.getElementById('compareModal');
    const isProdOpen = prodModal && (prodModal.open || prodModal.hasAttribute('open'));
    const isCompOpen = compModal && (compModal.open || compModal.hasAttribute('open'));
    if (isProdOpen || isCompOpen) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
  }

  function closeModal() {
    const targetModal = document.getElementById('productSpecModal') || document.getElementById('productModal');
    if (targetModal) {
      if (typeof targetModal.close === 'function') {
        try {
          targetModal.close();
        } catch (e) {
          targetModal.removeAttribute('open');
        }
      } else {
        targetModal.removeAttribute('open');
      }
    }
    updateModalOpenState();
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (modalCloseFooterBtn) modalCloseFooterBtn.addEventListener('click', closeModal);

  if (productModal) {
    productModal.addEventListener('close', updateModalOpenState);
    productModal.addEventListener('cancel', updateModalOpenState);
    productModal.addEventListener('click', function (e) {
      if (e.target === productModal) {
        closeModal();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 5. INTERACTIVE SEED REQUIREMENT & YIELD ESTIMATOR
  // -------------------------------------------------------------------------
  const calcCropSelect = document.getElementById('calcCropSelect');
  const calcLandArea = document.getElementById('calcLandArea');
  const calcAreaUnit = document.getElementById('calcAreaUnit');
  const calcSoilType = document.getElementById('calcSoilType');
  const calcSeason = document.getElementById('calcSeason');
  const recalcBtn = document.getElementById('recalcBtn');
  const printCalcBtn = document.getElementById('printCalcBtn');
  const calcOrderWhatsAppBtn = document.getElementById('calcOrderWhatsAppBtn');

  const calcCropBadge = document.getElementById('calcCropBadge');
  const resultSeedRate = document.getElementById('resultSeedRate');
  const resultSeedPkt = document.getElementById('resultSeedPkt');
  const resultYield = document.getElementById('resultYield');
  const resultYieldPerAcre = document.getElementById('resultYieldPerAcre');
  const resultSpacing = document.getElementById('resultSpacing');
  const resultDuration = document.getElementById('resultDuration');
  const calcExpertAdvice = document.getElementById('calcExpertAdvice');

  const CROP_CALC_DATA = {
    paddy_bpt5204: {
      name: 'BPT 5204 Samba Masuri (₹500 TG Bonus)',
      isGovtBonusEligible: true,
      seedRatePerAcre: 6.5,
      seedUnit: 'kg',
      packetSize: 3,
      yieldMinPerAcre: 30,
      yieldMaxPerAcre: 34,
      spacing: '20 cm × 15 cm',
      duration: '135 - 140 Days',
      advice: 'Eligible for Telangana Govt ₹500/Qtl bonus! Maintain moisture <17% before PPC delivery and register sowing with local AEO.'
    },
    paddy_rnr15048: {
      name: 'RNR 15048 Telangana Sona (₹500 TG Bonus)',
      isGovtBonusEligible: true,
      seedRatePerAcre: 6.5,
      seedUnit: 'kg',
      packetSize: 3,
      yieldMinPerAcre: 30,
      yieldMaxPerAcre: 35,
      spacing: '15 cm × 15 cm',
      duration: '120 - 125 Days',
      advice: 'Eligible for Telangana Govt ₹500/Qtl bonus! Low GI diabetic-friendly rice, short duration saves 2-3 irrigations.'
    },
    paddy_hmtsona: {
      name: 'HMT Sona Super Fine (₹500 TG Bonus)',
      isGovtBonusEligible: true,
      seedRatePerAcre: 6.5,
      seedUnit: 'kg',
      packetSize: 3,
      yieldMinPerAcre: 28,
      yieldMaxPerAcre: 32,
      spacing: '20 cm × 15 cm',
      duration: '130 - 135 Days',
      advice: 'Eligible for Telangana Govt ₹500/Qtl bonus! Fragrant table quality with high head rice recovery (>70%).'
    },
    paddy_jaisriram: {
      name: 'Jai Sriram Sannalu (₹500 TG Bonus)',
      isGovtBonusEligible: true,
      seedRatePerAcre: 6.5,
      seedUnit: 'kg',
      packetSize: 3,
      yieldMinPerAcre: 26,
      yieldMaxPerAcre: 30,
      spacing: '20 cm × 15 cm',
      duration: '135 - 140 Days',
      advice: 'Eligible for Telangana Govt ₹500/Qtl bonus! Highest open-market premium rice + government bonus incentive.'
    },
    paddy_knm1638: {
      name: 'KNM 1638 Kunaram Sannalu (₹500 TG Bonus)',
      isGovtBonusEligible: true,
      seedRatePerAcre: 6.5,
      seedUnit: 'kg',
      packetSize: 3,
      yieldMinPerAcre: 32,
      yieldMaxPerAcre: 36,
      spacing: '20 cm × 15 cm',
      duration: '125 - 130 Days',
      advice: 'Eligible for Telangana Govt ₹500/Qtl bonus! Superior resistance to Bacterial Leaf Blight (BLB) and BPH.'
    },
    paddy_wgl44: {
      name: 'WGL 44 Siddhi Warangal (₹500 TG Bonus)',
      isGovtBonusEligible: true,
      seedRatePerAcre: 6.5,
      seedUnit: 'kg',
      packetSize: 3,
      yieldMinPerAcre: 30,
      yieldMaxPerAcre: 35,
      spacing: '20 cm × 15 cm',
      duration: '130 - 135 Days',
      advice: 'Eligible for Telangana Govt ₹500/Qtl bonus! Heavy panicle grain weight with Gall Midge Biotype-1 resistance.'
    },
    paddy_knm7715: {
      name: 'KNM 7715 Kunaram (₹500 TG Bonus)',
      isGovtBonusEligible: true,
      seedRatePerAcre: 6.5,
      seedUnit: 'kg',
      packetSize: 3,
      yieldMinPerAcre: 30,
      yieldMaxPerAcre: 34,
      spacing: '20 cm × 15 cm',
      duration: '120 - 125 Days',
      advice: 'Eligible for Telangana Govt ₹500/Qtl bonus! Early 120-day maturity with excellent cold tolerance for both Kharif and Rabi.'
    },
    paddy: {
      name: 'Ganga Gold-99 Hybrid Paddy',
      isGovtBonusEligible: false,
      seedRatePerAcre: 5.5,
      seedUnit: 'kg',
      packetSize: 3,
      yieldMinPerAcre: 32,
      yieldMaxPerAcre: 36,
      spacing: '20 cm × 15 cm',
      duration: '125 - 130 Days',
      advice: 'High-tillering champion hybrid paddy (30-35 tillers/hill) with exceptional BLB resistance.'
    },
    maize: {
      name: 'Hybrid Maize / Corn',
      seedRatePerAcre: 7.5,
      seedUnit: 'kg',
      packetSize: 4,
      yieldMinPerAcre: 36,
      yieldMaxPerAcre: 44,
      spacing: '60 cm × 20 cm',
      duration: '110 - 120 Days',
      advice: 'Dibble single seed at 4-5cm depth into moist soil. Apply Coragen or Emamectin benzoate at 15-20 days after germination against Fall Armyworm.'
    },
    jowar: {
      name: 'Hybrid Jowar / White Sorghum',
      seedRatePerAcre: 3.5,
      seedUnit: 'kg',
      packetSize: 3,
      yieldMinPerAcre: 22,
      yieldMaxPerAcre: 28,
      spacing: '45 cm × 15 cm',
      duration: '105 - 115 Days',
      advice: 'Ideal for drought-prone red & black soils. Dual purpose crop for grain and sweet fodder. Seed treatment with Thiamethoxam prevents shoot fly in early growth.'
    },
    bajra: {
      name: 'Hybrid Bajra / Pearl Millet',
      seedRatePerAcre: 1.8,
      seedUnit: 'kg',
      packetSize: 1.5,
      yieldMinPerAcre: 16,
      yieldMaxPerAcre: 22,
      spacing: '45 cm × 12 cm',
      duration: '85 - 95 Days',
      advice: 'Ultra-fast maturity and drought-hardy. High iron & zinc nutrition. Sowing in shallow moist soil (2-3 cm) guarantees fast germination within 4 days.'
    },
    soybean: {
      name: 'High-Yield Soybean',
      seedRatePerAcre: 28,
      seedUnit: 'kg (30 kg Bag)',
      packetSize: 30,
      yieldMinPerAcre: 12,
      yieldMaxPerAcre: 16,
      spacing: '45 cm × 5-7 cm',
      duration: '90 - 98 Days',
      advice: 'Treat seeds with Rhizobium & Carbendazim before sowing. Sowing on 45cm ridges ensures superior field drainage and maximum pod setting. High resistance to pod shattering.'
    },
    mustard: {
      name: 'Hybrid Mustard / Oilseed',
      seedRatePerAcre: 1.8,
      seedUnit: 'kg',
      packetSize: 1,
      yieldMinPerAcre: 10,
      yieldMaxPerAcre: 13,
      spacing: '30 cm × 10 cm',
      duration: '105 - 115 Days',
      advice: 'Best for winter (Rabi) sowing in October-November. First irrigation at 30 days during branching is critical.'
    },
    redgram: {
      name: 'Hybrid Redgram / Toor',
      seedRatePerAcre: 3.5,
      seedUnit: 'kg',
      packetSize: 2,
      yieldMinPerAcre: 10,
      yieldMaxPerAcre: 14,
      spacing: '120 cm × 30 cm',
      duration: '145 - 160 Days',
      advice: 'Treat seeds with Rhizobium culture. Performs exceptionally well in red loamy soils with minimal water requirements.'
    }
  };

  function computeCalculator() {
    if (!calcCropSelect || !calcLandArea) return;
    const isTe = (currentLang === 'te');
    const i18n = getI18n();
    const u = (i18n && i18n.units && i18n.units[currentLang]) ? i18n.units[currentLang] : {
      grams: 'Grams',
      kg: 'kg',
      quintals: 'Quintals',
      qtlPerAcre: 'Qtl / Acre',
      approxPackets: 'approx. {count} Packet(s) / Bags'
    };
    const bannerT = (i18n && i18n.bonusBanner && i18n.bonusBanner[currentLang]) ? i18n.bonusBanner[currentLang] : {
      header: 'Telangana Govt ₹500/Qtl Sannalu Bonus Extra Income',
      subBadge: 'Extra Cash Incentive',
      note: 'This variety qualifies for ₹500/Qtl extra bonus over MSP. Ensure moisture is under 17% and register crop details with your local AEO.'
    };

    const cropKey = calcCropSelect.value;
    const rawArea = parseFloat(calcLandArea.value) || 1;
    const unit = calcAreaUnit ? calcAreaUnit.value : 'acres';
    const baseCropData = CROP_CALC_DATA[cropKey] || CROP_CALC_DATA.paddy;
    const cropData = getCalcData(cropKey, baseCropData, currentLang);

    // Convert area to Acres
    let areaInAcres = rawArea;
    if (unit === 'guntas') {
      areaInAcres = rawArea / 40; // 40 guntas = 1 acre in Telangana
    } else if (unit === 'hectares') {
      areaInAcres = rawArea * 2.471;
    }

    const totalSeedKg = (cropData.seedRatePerAcre * areaInAcres);
    const totalBags = Math.ceil(totalSeedKg / (cropData.packetSize || 1));
    const totalYieldMin = Math.round(cropData.yieldMinPerAcre * areaInAcres);
    const totalYieldMax = Math.round(cropData.yieldMaxPerAcre * areaInAcres);

    // Update DOM
    if (calcCropBadge) {
      calcCropBadge.textContent = cropData.name;
    }

    if (resultSeedRate) {
      if (totalSeedKg < 1) {
        resultSeedRate.textContent = `${Math.round(totalSeedKg * 1000)} ${u.grams}`;
      } else {
        resultSeedRate.textContent = `${totalSeedKg.toFixed(1)} ${u.kg}`;
      }
    }

    if (resultSeedPkt) {
      resultSeedPkt.textContent = u.approxPackets.replace('{count}', totalBags);
    }

    if (resultYield) {
      resultYield.textContent = `${totalYieldMin} - ${totalYieldMax} ${u.quintals}`;
    }

    if (resultYieldPerAcre) {
      resultYieldPerAcre.textContent = `(${cropData.yieldMinPerAcre} - ${cropData.yieldMaxPerAcre} ${u.qtlPerAcre})`;
    }

    if (resultSpacing) {
      resultSpacing.textContent = cropData.spacing;
    }

    if (resultDuration) {
      resultDuration.textContent = cropData.duration;
    }

    if (calcExpertAdvice) {
      calcExpertAdvice.textContent = cropData.advice;
    }

    // Update Telangana Govt ₹500 Bonus Highlight Banner
    const calcBonusBanner = document.getElementById('calcBonusBanner');
    if (calcBonusBanner) {
      if (cropData.isGovtBonusEligible) {
        const minBonus = totalYieldMin * 500;
        const maxBonus = totalYieldMax * 500;
        calcBonusBanner.innerHTML = `
          <div class="calc-bonus-box">
            <div class="bonus-box-header">
              <i class="fa-solid fa-award"></i>
              <strong>${bannerT.header}</strong>
            </div>
            <div class="bonus-box-amount">
              + ₹${minBonus.toLocaleString('en-IN')} - ₹${maxBonus.toLocaleString('en-IN')}
              <span class="bonus-sub-badge">${bannerT.subBadge}</span>
            </div>
            <p class="bonus-box-note">
              <i class="fa-solid fa-circle-check"></i> ${bannerT.note}
            </p>
          </div>
        `;
        calcBonusBanner.style.display = 'block';
      } else {
        calcBonusBanner.style.display = 'none';
      }
    }

    // Update WhatsApp Order Button
    if (calcOrderWhatsAppBtn) {
      const msg = `Hello Ganga Agri Genetics, I calculated seed requirements for ${baseCropData.name} on ${rawArea} ${unit} (Approx ${resultSeedRate ? resultSeedRate.textContent : ''}, ${totalBags} Packets). Please provide quotation and availability.`;
      calcOrderWhatsAppBtn.onclick = () => {
        window.open(`https://wa.me/917013135345?text=${encodeURIComponent(msg)}`, '_blank');
      };
    }
  }

  if (calcCropSelect) calcCropSelect.addEventListener('change', computeCalculator);
  if (calcLandArea) calcLandArea.addEventListener('input', computeCalculator);
  if (calcAreaUnit) calcAreaUnit.addEventListener('change', computeCalculator);
  if (calcSoilType) calcSoilType.addEventListener('change', computeCalculator);
  if (calcSeason) calcSeason.addEventListener('change', computeCalculator);
  if (recalcBtn) recalcBtn.addEventListener('click', computeCalculator);

  if (printCalcBtn) {
    printCalcBtn.addEventListener('click', function () {
      window.print();
    });
  }

  computeCalculator();

  // -------------------------------------------------------------------------
  // 6. SEED VARIETY COMPARISON ENGINE (<dialog id="compareModal">)
  // -------------------------------------------------------------------------
  const compareModal = document.getElementById('compareModal');
  const openCompareModalBtn = document.getElementById('openCompareModalBtn');
  const closeCompareModalBtn = document.getElementById('closeCompareModalBtn');
  const closeCompareFooterBtn = document.getElementById('closeCompareFooterBtn');
  const compareCropA = document.getElementById('compareCropA');
  const compareCropB = document.getElementById('compareCropB');
  const comparisonTableBody = document.getElementById('comparisonTableBody');

  function openCompareModal(cropAId, cropBId) {
    const targetModal = document.getElementById('compareModal') || compareModal;
    if (!targetModal) return;
    populateComparisonDropdowns(cropAId, cropBId);
    renderComparisonTable();

    document.body.classList.add('modal-open');
    if (typeof targetModal.showModal === 'function') {
      try {
        if (!targetModal.open) {
          targetModal.showModal();
        }
      } catch (err) {
        targetModal.setAttribute('open', '');
      }
    } else {
      targetModal.setAttribute('open', '');
    }
    targetModal.scrollTop = 0;
  }

  function closeCompareModal() {
    const targetModal = document.getElementById('compareModal') || compareModal;
    if (targetModal) {
      if (typeof targetModal.close === 'function') {
        try {
          targetModal.close();
        } catch (e) {
          targetModal.removeAttribute('open');
        }
      } else {
        targetModal.removeAttribute('open');
      }
    }
    updateModalOpenState();
  }

  // Expose globally on window for inline handlers & external triggers
  window.openCompareModal = openCompareModal;
  window.closeCompareModal = closeCompareModal;
  window.openProductModal = openProductModal;
  window.closeModal = closeModal;

  function populateComparisonDropdowns(cropAId, cropBId) {
    const selA = document.getElementById('compareCropA') || compareCropA;
    const selB = document.getElementById('compareCropB') || compareCropB;
    if (!selA || !selB) return;
    const isTe = (currentLang === 'te');
    const i18n = getI18n();
    const optg = (i18n && i18n.dropdowns && i18n.dropdowns.compareOptgroups) ? i18n.dropdowns.compareOptgroups : {};

    let valA = cropAId || selA.value || 'paddy-rnr15048';
    let valB = cropBId || selB.value || 'paddy-bpt5204';

    if (valA === valB && SEED_CATALOG.length > 1) {
      const other = SEED_CATALOG.find(s => s.id !== valA);
      if (other) valB = other.id;
    }

    function buildGroupedOptionsHtml(selectedVal) {
      const bonusPaddy = SEED_CATALOG.filter(s => s.isGovtBonusEligible);
      const otherCereals = SEED_CATALOG.filter(s => !s.isGovtBonusEligible && s.category === 'cereals');
      const oilseeds = SEED_CATALOG.filter(s => s.category === 'oilseeds');
      const vegetables = SEED_CATALOG.filter(s => s.category === 'vegetables');

      let html = '';

      if (bonusPaddy.length > 0) {
        const lbl = optg.bonusPaddy ? (isTe ? optg.bonusPaddy.te : optg.bonusPaddy.en) : '⭐ Bonus Fine Paddy';
        html += `<optgroup label="${lbl}">`;
        bonusPaddy.forEach(s => {
          const loc = getCropData(s, currentLang);
          html += `<option value="${s.id}" ${s.id === selectedVal ? 'selected' : ''}>${loc.name} (${s.varietyCode})</option>`;
        });
        html += `</optgroup>`;
      }

      if (otherCereals.length > 0) {
        const lbl = optg.cereals ? (isTe ? optg.cereals.te : optg.cereals.en) : '🌾 Cereals & Millets';
        html += `<optgroup label="${lbl}">`;
        otherCereals.forEach(s => {
          const loc = getCropData(s, currentLang);
          html += `<option value="${s.id}" ${s.id === selectedVal ? 'selected' : ''}>${loc.name} (${s.varietyCode})</option>`;
        });
        html += `</optgroup>`;
      }

      if (oilseeds.length > 0) {
        const lbl = optg.oilseeds ? (isTe ? optg.oilseeds.te : optg.oilseeds.en) : '🌱 Oilseeds & Pulses';
        html += `<optgroup label="${lbl}">`;
        oilseeds.forEach(s => {
          const loc = getCropData(s, currentLang);
          html += `<option value="${s.id}" ${s.id === selectedVal ? 'selected' : ''}>${loc.name} (${s.varietyCode})</option>`;
        });
        html += `</optgroup>`;
      }

      return html;
    }

    selA.innerHTML = buildGroupedOptionsHtml(valA);
    selB.innerHTML = buildGroupedOptionsHtml(valB);

    selA.value = valA;
    selB.value = valB;
  }

  function renderComparisonTable() {
    const tableBody = document.getElementById('comparisonTableBody') || comparisonTableBody;
    const selA = document.getElementById('compareCropA') || compareCropA;
    const selB = document.getElementById('compareCropB') || compareCropB;
    if (!tableBody || !selA || !selB) return;
    const i18n = getI18n();
    const c = (i18n && i18n.comparison && i18n.comparison[currentLang]) ? i18n.comparison[currentLang] : {
      featureHeader: 'Feature / Parameter',
      tgBonusScheme: 'TG ₹500 Bonus Scheme',
      cropDuration: 'Crop Duration',
      yieldPotential: 'Yield Potential',
      germination: 'Germination Purity',
      seedRate: 'Recommended Seed Rate',
      suitableSeason: 'Suitable Season',
      grainQuality: 'Grain / Fruit Quality',
      grainDimensions: 'Grain Dimensions',
      diseaseResistance: 'Key Disease Resistance',
      soilSuitability: 'Soil Suitability',
      quickOrder: 'Quick WhatsApp Order',
      bonusEligibleBadge: '₹500/Qtl TG Bonus',
      standardMarketBadge: 'Standard Market',
      orderBtn: 'Order'
    };

    const baseA = SEED_CATALOG.find(s => s.id === selA.value) || SEED_CATALOG[0];
    const baseB = SEED_CATALOG.find(s => s.id === selB.value) || (SEED_CATALOG[1] || SEED_CATALOG[0]);
    const cropA = getCropData(baseA, currentLang);
    const cropB = getCropData(baseB, currentLang);

    const colAHeader = document.getElementById('compareColAHeader');
    const colBHeader = document.getElementById('compareColBHeader');
    const colParamHeader = document.getElementById('compareColParamHeader');

    if (colParamHeader) {
      colParamHeader.textContent = c.featureHeader;
    }
    if (colAHeader) {
      colAHeader.innerHTML = `
        <div style="font-size: 0.95rem; color: #047857; font-weight: 700;">${cropA.name}</div>
        <span class="compare-col-badge">${cropA.varietyCode} • ${cropA.categoryLabel}</span>
      `;
    }
    if (colBHeader) {
      colBHeader.innerHTML = `
        <div style="font-size: 0.95rem; color: #047857; font-weight: 700;">${cropB.name}</div>
        <span class="compare-col-badge">${cropB.varietyCode} • ${cropB.categoryLabel}</span>
      `;
    }

    const bonusBadgeA = cropA.isGovtBonusEligible
      ? `<span class="badge badge--success" style="background:#ecfdf5; color:#065f46; border:1px solid #10b981; padding:3px 8px; border-radius:4px; font-weight:700;"><i class="fa-solid fa-award"></i> ${c.bonusEligibleBadge}</span>`
      : `<span class="badge" style="background:#f1f5f9; color:#64748b; padding:3px 8px; border-radius:4px;">${c.standardMarketBadge}</span>`;

    const bonusBadgeB = cropB.isGovtBonusEligible
      ? `<span class="badge badge--success" style="background:#ecfdf5; color:#065f46; border:1px solid #10b981; padding:3px 8px; border-radius:4px; font-weight:700;"><i class="fa-solid fa-award"></i> ${c.bonusEligibleBadge}</span>`
      : `<span class="badge" style="background:#f1f5f9; color:#64748b; padding:3px 8px; border-radius:4px;">${c.standardMarketBadge}</span>`;

    const waLinkA = `https://wa.me/917013135345?text=${encodeURIComponent('Hello Ganga Agri Genetics, I would like to order: ' + baseA.name + ' (' + baseA.varietyCode + ')')}`;
    const waLinkB = `https://wa.me/917013135345?text=${encodeURIComponent('Hello Ganga Agri Genetics, I would like to order: ' + baseB.name + ' (' + baseB.varietyCode + ')')}`;

    tableBody.innerHTML = `
      <tr>
        <td class="param-name"><strong>${c.tgBonusScheme}</strong></td>
        <td class="crop-col">${bonusBadgeA}</td>
        <td class="crop-col">${bonusBadgeB}</td>
      </tr>
      <tr>
        <td class="param-name"><strong>${c.cropDuration}</strong></td>
        <td class="crop-col"><strong style="color: #047857;">${cropA.duration}</strong></td>
        <td class="crop-col"><strong style="color: #047857;">${cropB.duration}</strong></td>
      </tr>
      <tr>
        <td class="param-name"><strong>${c.yieldPotential}</strong></td>
        <td class="crop-col"><strong style="color: #d97706;">${cropA.yieldPotential}</strong></td>
        <td class="crop-col"><strong style="color: #d97706;">${cropB.yieldPotential}</strong></td>
      </tr>
      <tr>
        <td class="param-name"><strong>${c.germination}</strong></td>
        <td class="crop-col">${cropA.germination}</td>
        <td class="crop-col">${cropB.germination}</td>
      </tr>
      <tr>
        <td class="param-name"><strong>${c.seedRate}</strong></td>
        <td class="crop-col">${cropA.seedRate}</td>
        <td class="crop-col">${cropB.seedRate}</td>
      </tr>
      <tr>
        <td class="param-name"><strong>${c.suitableSeason}</strong></td>
        <td class="crop-col">${cropA.season}</td>
        <td class="crop-col">${cropB.season}</td>
      </tr>
      <tr>
        <td class="param-name"><strong>${c.grainQuality}</strong></td>
        <td class="crop-col">${cropA.grainType}</td>
        <td class="crop-col">${cropB.grainType}</td>
      </tr>
      ${(cropA.grainDimensions || cropB.grainDimensions) ? `
        <tr>
          <td class="param-name"><strong>${c.grainDimensions}</strong></td>
          <td class="crop-col" style="font-size: 0.82rem;">${cropA.grainDimensions || '-'}</td>
          <td class="crop-col" style="font-size: 0.82rem;">${cropB.grainDimensions || '-'}</td>
        </tr>
      ` : ''}
      <tr>
        <td class="param-name"><strong>${c.diseaseResistance}</strong></td>
        <td class="crop-col"><span class="badge badge--success" style="background:#ecfdf5; color:#047857; padding:4px 8px; border-radius:4px; display:inline-block; font-size:0.82rem;">${cropA.keyTrait}</span></td>
        <td class="crop-col"><span class="badge badge--success" style="background:#ecfdf5; color:#047857; padding:4px 8px; border-radius:4px; display:inline-block; font-size:0.82rem;">${cropB.keyTrait}</span></td>
      </tr>
      <tr>
        <td class="param-name"><strong>${c.soilSuitability}</strong></td>
        <td class="crop-col" style="font-size: 0.85rem;">${cropA.soilSuitability}</td>
        <td class="crop-col" style="font-size: 0.85rem;">${cropB.soilSuitability}</td>
      </tr>
      <tr>
        <td class="param-name"><strong>${c.quickOrder}</strong></td>
        <td class="crop-col">
          <a href="${waLinkA}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm" style="width: 100%; text-align: center; justify-content: center;">
            <i class="fa-brands fa-whatsapp"></i> ${c.orderBtn} ${cropA.varietyCode}
          </a>
        </td>
        <td class="crop-col">
          <a href="${waLinkB}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm" style="width: 100%; text-align: center; justify-content: center;">
            <i class="fa-brands fa-whatsapp"></i> ${c.orderBtn} ${cropB.varietyCode}
          </a>
        </td>
      </tr>
    `;
  }

  // Bind click on openCompareModalBtn
  if (openCompareModalBtn) {
    openCompareModalBtn.addEventListener('click', function (e) {
      e.preventDefault();
      openCompareModal();
    });
  }

  // Document-level delegated click listener for any compare button trigger
  document.addEventListener('click', function (e) {
    const btn = e.target.closest('#openCompareModalBtn, [data-action="open-compare"]');
    if (btn) {
      e.preventDefault();
      openCompareModal();
    }
  });

  if (closeCompareModalBtn) {
    closeCompareModalBtn.addEventListener('click', closeCompareModal);
  }

  if (closeCompareFooterBtn) {
    closeCompareFooterBtn.addEventListener('click', closeCompareModal);
  }

  if (compareCropA) {
    compareCropA.addEventListener('change', renderComparisonTable);
    compareCropA.addEventListener('input', renderComparisonTable);
  }
  if (compareCropB) {
    compareCropB.addEventListener('change', renderComparisonTable);
    compareCropB.addEventListener('input', renderComparisonTable);
  }

  if (compareModal) {
    compareModal.addEventListener('close', updateModalOpenState);
    compareModal.addEventListener('cancel', updateModalOpenState);

    compareModal.addEventListener('click', function (e) {
      if (e.target === compareModal) {
        closeCompareModal();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 7. REAL-TIME STORE OPEN/CLOSED STATUS ENGINE
  // -------------------------------------------------------------------------
  function checkStoreOpenStatus() {
    const storeStatusLive = document.getElementById('storeStatusLive');
    const hoursLiveBadge = document.getElementById('hoursLiveBadge');
    const i18n = getI18n();
    const t = (i18n && i18n.ui && i18n.ui[currentLang]) ? i18n.ui[currentLang] : {};

    const now = new Date();
    // Indian Standard Time (IST is UTC +5:30)
    const istOffset = 5.5 * 60 * 60 * 1000;
    const istDate = new Date(now.getTime() + (now.getTimezoneOffset() * 60000) + istOffset);
    const day = istDate.getDay(); // 0 = Sun, 1 = Mon, ... 6 = Sat
    const hour = istDate.getHours();
    const minute = istDate.getMinutes();
    const currentTimeMinutes = hour * 60 + minute;

    let isOpen = false;
    let closingTime = '8:00 PM';

    if (day === 0) { // Sunday: 8:00 AM – 2:00 PM
      isOpen = (currentTimeMinutes >= 8 * 60 && currentTimeMinutes < 14 * 60);
      closingTime = '2:00 PM';
    } else { // Monday - Saturday: 8:00 AM – 8:00 PM
      isOpen = (currentTimeMinutes >= 8 * 60 && currentTimeMinutes < 20 * 60);
      closingTime = '8:00 PM';
    }

    if (storeStatusLive) {
      if (isOpen) {
        const text = (t.storeOpen || 'STORE OPEN NOW (Closes {time})').replace('{time}', closingTime);
        storeStatusLive.innerHTML = `
          <span class="status-indicator online"></span>
          <strong class="status-text" style="color: #6ee7b7;">${text}</strong>
        `;
        if (hoursLiveBadge) {
          hoursLiveBadge.className = 'hours-badge open';
          hoursLiveBadge.textContent = t.badgeOpen || 'OPEN NOW';
        }
      } else {
        const text = t.storeClosed || 'STORE CLOSED (Opens 8:00 AM)';
        storeStatusLive.innerHTML = `
          <span class="status-indicator offline"></span>
          <strong class="status-text" style="color: #fde68a;">${text}</strong>
        `;
        if (hoursLiveBadge) {
          hoursLiveBadge.className = 'hours-badge closed';
          hoursLiveBadge.textContent = t.badgeClosed || 'CLOSED NOW';
        }
      }
    }
  }

  checkStoreOpenStatus();
  setInterval(checkStoreOpenStatus, 60000); // Check every minute

  // -------------------------------------------------------------------------
  // 8. COPY ADDRESS TO CLIPBOARD
  // -------------------------------------------------------------------------
  const copyAddressBtn = document.getElementById('copyAddressBtn');
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', function () {
      const addressText = 'Ganga Agri Genetics, Shetpalle, Nizamabad / Armoor Road, Telangana 503218 (Plus Code: VCJF+5X7 Shetpalle)';
      const i18n = getI18n();
      const t = (i18n && i18n.ui && i18n.ui[currentLang]) ? i18n.ui[currentLang] : {};
      const successMsg = t.toastAddressCopied || 'Store Address copied to clipboard!';

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addressText).then(() => {
          showToast(successMsg, 'success');
        }).catch(() => {
          fallbackCopyText(addressText, successMsg);
        });
      } else {
        fallbackCopyText(addressText, successMsg);
      }
    });
  }

  function fallbackCopyText(text, successMsg) {
    const tempInput = document.createElement('textarea');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(successMsg, 'success');
    } catch (e) {
      showToast('Address: ' + text, 'info');
    }
    document.body.removeChild(tempInput);
  }

  // -------------------------------------------------------------------------
  // 9. BOOKING FORM & DIRECT WHATSAPP / TELEPHONE ACTIONS
  // -------------------------------------------------------------------------
  const seedBookingForm = document.getElementById('seedBookingForm');
  const bookViaWhatsAppBtn = document.getElementById('bookViaWhatsAppBtn');

  if (seedBookingForm) {
    seedBookingForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const i18n = getI18n();
      const t = (i18n && i18n.ui && i18n.ui[currentLang]) ? i18n.ui[currentLang] : {};

      const name = document.getElementById('farmerName')?.value.trim() || '';
      const phone = document.getElementById('farmerPhone')?.value.trim() || '';
      const village = document.getElementById('farmerVillage')?.value.trim() || '';
      const crop = document.getElementById('cropInterest')?.value || '';
      const acreage = document.getElementById('farmerAcreage')?.value.trim() || '';
      const reason = document.getElementById('inquiryReason')?.value || '';

      if (!name || !phone || !village || !crop) {
        showToast(t.toastFillRequired || 'Please fill all required fields (*)', 'error');
        return;
      }

      const msg = `*Ganga Agri Genetics - Seed Booking Inquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Village / Mandal:* ${village}\n*Crop Required:* ${crop}\n*Acreage / Quantity:* ${acreage || 'Not specified'}\n*Purpose:* ${reason}\n\n_Sent via Ganga Agri Genetics Web Application_`;
      window.open(`https://wa.me/917013135345?text=${encodeURIComponent(msg)}`, '_blank');
      showToast(t.toastNewsletterSuccess || 'Inquiry submitted successfully!', 'success');
      seedBookingForm.reset();
    });
  }

  if (bookViaWhatsAppBtn) {
    bookViaWhatsAppBtn.addEventListener('click', function () {
      const i18n = getI18n();
      const t = (i18n && i18n.ui && i18n.ui[currentLang]) ? i18n.ui[currentLang] : {};

      const name = document.getElementById('farmerName')?.value.trim() || '';
      const phone = document.getElementById('farmerPhone')?.value.trim() || '';
      const village = document.getElementById('farmerVillage')?.value.trim() || '';
      const crop = document.getElementById('cropInterest')?.value || '';
      const acreage = document.getElementById('farmerAcreage')?.value.trim() || '';
      const reason = document.getElementById('inquiryReason')?.value || '';

      if (!name || !phone || !village) {
        showToast(t.toastFillBookingDetails || 'Please fill Name, Phone, Village and Crop Variety to send WhatsApp message', 'error');
        return;
      }

      const msg = `*Ganga Agri Genetics - Quick WhatsApp Seed Booking*\n\n*Farmer Name:* ${name}\n*Phone:* ${phone}\n*Village / District:* ${village}\n*Crop Needed:* ${crop}\n*Acreage / Bags:* ${acreage || 'Immediate purchase'}\n*Inquiry Type:* ${reason}`;
      window.open(`https://wa.me/917013135345?text=${encodeURIComponent(msg)}`, '_blank');
    });
  }

  // -------------------------------------------------------------------------
  // 10. TOAST NOTIFICATION SYSTEM
  // -------------------------------------------------------------------------
  const toastContainer = document.getElementById('toastNotification');

  function showToast(message, type = 'info') {
    if (!toastContainer) return;
    const toast = document.createElement('div');
    toast.className = `toast-item toast--${type}`;

    const iconMap = {
      'success': 'fa-circle-check',
      'error': 'fa-circle-exclamation',
      'info': 'fa-circle-info'
    };
    const iconClass = iconMap[type] || 'fa-bell';

    toast.innerHTML = `
      <i class="fa-solid ${iconClass}"></i>
      <span>${message}</span>
    `;

    toastContainer.appendChild(toast);
    setTimeout(() => {
      toast.classList.add('show');
    }, 10);

    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => {
        if (typeof toast.remove === 'function') {
          toast.remove();
        } else if (toastContainer.contains && toastContainer.contains(toast)) {
          toastContainer.removeChild(toast);
        }
      }, 300);
    }, 3500);
  }

  // -------------------------------------------------------------------------
  // 11. NAVBAR SCROLL EFFECT & MOBILE MENU
  // -------------------------------------------------------------------------
  const mainNav = document.getElementById('mainHeader') || document.getElementById('mainNav');
  const mobileToggle = document.getElementById('navToggle') || document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', function () {
    if (mainNav) {
      if (window.scrollY > 40) {
        mainNav.classList.add('scrolled');
      } else {
        mainNav.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      mobileToggle.classList.toggle('active');
      navMenu.classList.toggle('active');
    });
  }

  // Close mobile menu on nav link click
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        if (mobileToggle) {
          mobileToggle.classList.remove('active');
          mobileToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  // -------------------------------------------------------------------------
  // 12. SMOOTH SCROLL FOR INTERNAL ANCHORS
  // -------------------------------------------------------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href === '#' || href === '#!') return;
      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        const headerOffset = 75;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // -------------------------------------------------------------------------
  // 13. INTERSECTION OBSERVER FOR ACTIVE NAV HIGHLIGHTING
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const activeId = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${activeId}`) {
              link.classList.add('active');
            } else {
              link.classList.remove('active');
            }
          });
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(section => observer.observe(section));
  }

  // -------------------------------------------------------------------------
  // 14. HERO SLIDESHOW CAROUSEL ENGINE
  // -------------------------------------------------------------------------
  function initHeroCarousel() {
    const carousel = document.getElementById('heroCarousel') || document.querySelector('.hero-carousel');
    const track = document.getElementById('heroTrack');
    const prevBtn = document.getElementById('heroPrevBtn') || document.getElementById('carouselPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn') || document.getElementById('carouselNextBtn');
    const indicatorsContainer = document.getElementById('heroIndicators') || document.getElementById('carouselIndicators');

    if (!carousel || !track) return;

    const slides = Array.from(track.querySelectorAll('.hero-slide'));
    const totalSlides = slides.length;
    if (totalSlides <= 1) return;

    let currentSlide = 0;
    let autoplayTimer = null;
    const AUTOPLAY_INTERVAL = 2000;

    // Attach existing or generated indicator clicks
    const existingDots = indicatorsContainer ? Array.from(indicatorsContainer.querySelectorAll('.indicator-dot, .carousel-indicator')) : [];
    if (existingDots.length === totalSlides) {
      existingDots.forEach((dot, idx) => {
        dot.addEventListener('click', () => {
          goToSlide(idx);
          resetAutoplay();
        });
      });
    } else if (indicatorsContainer) {
      indicatorsContainer.innerHTML = '';
      slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `indicator-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('type', 'button');
        dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
        dot.addEventListener('click', () => {
          goToSlide(idx);
          resetAutoplay();
        });
        indicatorsContainer.appendChild(dot);
      });
    }

    function updateSlidePosition() {
      track.style.transform = `translateX(-${currentSlide * 100}%)`;
      slides.forEach((slide, idx) => {
        slide.classList.toggle('active', idx === currentSlide);
      });

      const currentDots = indicatorsContainer ? indicatorsContainer.querySelectorAll('.indicator-dot, .carousel-indicator') : [];
      currentDots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === currentSlide);
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      updateSlidePosition();
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      updateSlidePosition();
    }

    function goToSlide(index) {
      if (index >= 0 && index < totalSlides) {
        currentSlide = index;
        updateSlidePosition();
      }
    }

    function startAutoplay() {
      stopAutoplay();
      autoplayTimer = setInterval(nextSlide, AUTOPLAY_INTERVAL);
    }

    function stopAutoplay() {
      if (autoplayTimer) {
        clearInterval(autoplayTimer);
        autoplayTimer = null;
      }
    }

    function resetAutoplay() {
      stopAutoplay();
      startAutoplay();
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        nextSlide();
        resetAutoplay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        prevSlide();
        resetAutoplay();
      });
    }

    carousel.addEventListener('mouseenter', stopAutoplay);
    carousel.addEventListener('mouseleave', startAutoplay);
    carousel.addEventListener('focusin', stopAutoplay);
    carousel.addEventListener('focusout', startAutoplay);

    // Touch swipe gestures
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;

    carousel.addEventListener('touchstart', (e) => {
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
      touchEndX = touchStartX;
      touchEndY = touchStartY;
      stopAutoplay();
    }, { passive: true });

    carousel.addEventListener('touchmove', (e) => {
      touchEndX = e.touches[0].clientX;
      touchEndY = e.touches[0].clientY;
    }, { passive: true });

    carousel.addEventListener('touchend', () => {
      const diffX = touchStartX - touchEndX;
      const diffY = touchStartY - touchEndY;
      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 35) {
        if (diffX > 0) {
          nextSlide();
        } else {
          prevSlide();
        }
      }
      startAutoplay();
    }, { passive: true });

    updateSlidePosition();
    startAutoplay();
  }

  // -------------------------------------------------------------------------
  // 15. AGRICULTURE UPDATES NEWSLETTER SUBSCRIPTION ENGINE
  // -------------------------------------------------------------------------
  const newsletterForm = document.getElementById('agriNewsletterForm') || document.getElementById('newsletterForm');
  const newsletterSuccessMsg = document.getElementById('newsletterSuccessBox') || document.getElementById('newsletterSuccessMsg');
  const newsResetBtn = document.getElementById('newsResetBtn');

  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const input = document.getElementById('newsContact') || document.getElementById('newsletterContact');
      const val = input ? input.value.trim() : '';
      const i18n = getI18n();
      const t = (i18n && i18n.ui && i18n.ui[currentLang]) ? i18n.ui[currentLang] : {};

      if (!val || val.length < 5) {
        showToast(t.toastEnterEmailOrPhone || 'Please enter your email address or WhatsApp number', 'error');
        if (input) input.focus();
        return;
      }

      // Save to localStorage for demo persistence
      try {
        const subscribers = JSON.parse(localStorage.getItem('ganga_subscribers') || '[]');
        if (!subscribers.includes(val)) {
          subscribers.push(val);
          localStorage.setItem('ganga_subscribers', JSON.stringify(subscribers));
        }
      } catch (err) {}

      newsletterForm.style.display = 'none';
      if (newsletterSuccessMsg) {
        newsletterSuccessMsg.style.display = 'block';
      }

      const successToast = t.toastNewsletterSuccess || 'Successfully subscribed to Ganga Agri Genetics Updates!';
      showToast(successToast, 'success');
    });
  }

  if (newsResetBtn && newsletterForm && newsletterSuccessMsg) {
    newsResetBtn.addEventListener('click', function () {
      newsletterSuccessMsg.style.display = 'none';
      newsletterForm.reset();
      newsletterForm.style.display = 'block';
    });
  }

  // -------------------------------------------------------------------------
  // 16. SERVICE WORKER PWA REGISTRATION
  // -------------------------------------------------------------------------
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('Ganga Agri Genetics Service Worker registered:', reg.scope);
        })
        .catch((err) => {
          console.warn('Service Worker registration skipped or failed:', err);
        });
    });
  }

  // -------------------------------------------------------------------------
  // 17. INITIALIZE APPLICATION
  // -------------------------------------------------------------------------
  renderProducts();
  updateLanguage(currentLang);
  initHeroCarousel();

  console.log('Ganga Agri Genetics web application initialized successfully.');
});