/**
 * GANGA AGRI GENETICS - OFFICIAL APPLICATION JAVASCRIPT
 * Hybrid Seed Catalog, Interactive Acreage Calculator, Store Status,
 * Bilingual (EN/TE) Localization, Variety Comparison & Offline PWA
 */

document.addEventListener('DOMContentLoaded', function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. DATA: CERTIFIED HYBRID SEEDS DATASET
  // -------------------------------------------------------------------------
  const SEED_CATALOG = [
    {
      id: 'paddy-gold99',
      name: 'Ganga Supreme Gold-99 Hybrid Paddy',
      teluguName: 'గంగ సుప్రీం గోల్డ్-99 హైబ్రిడ్ వరి',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-PD-99',
      duration: '125 - 130 Days',
      durationTe: '125 - 130 రోజులు',
      yieldPotential: '32 - 36 Qtl / Acre',
      yieldPotentialTe: '32 - 36 క్వింటాళ్లు / ఎకరానికి',
      germination: '98% Min',
      seedRate: '5 - 6 kg / Acre',
      seedRateTe: '5 - 6 కిలోలు / ఎకరానికి',
      season: 'Kharif & Rabi (వానాకాలం & యాసంగి)',
      grainType: 'Medium Slender, Non-Sticky & High Milling Recovery',
      grainTypeTe: 'మధ్యస్థ సన్నపు గింజ, ఎక్కువ రికవరీ',
      keyTrait: 'High Resistance to Bacterial Leaf Blight (BLB) & Blast',
      keyTraitTe: 'బాక్టీరియల్ ఆకు ఎండు తెగులు (BLB) మరియు అగ్గి తెగులు నిరోధకత',
      soilSuitability: 'Well-suited for Black Cotton and Clay Loam soils',
      tagline: 'Maximum Tillering & Top Market Price Hybrid Paddy',
      description: 'Ganga Supreme Gold-99 is an elite medium-duration paddy hybrid engineered for high tillering (30-35 tillers/hill) and synchronized flowering. Resistant to lodging due to sturdy culms.',
      sowingGuide: 'Nursery sowing: 5 kg seeds per acre. Transplant 21-25 days old seedlings at 20cm x 15cm spacing. Recommended balanced NPK application (120:60:40 kg/ha).'
    },
    {
      id: 'paddy-bpt5204',
      name: 'Ganga BPT Super Fine Hybrid Rice',
      teluguName: 'గంగ బి.పి.టి సూపర్ ఫైన్ రైస్',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-BPT-52',
      duration: '135 - 140 Days',
      durationTe: '135 - 140 రోజులు',
      yieldPotential: '30 - 34 Qtl / Acre',
      yieldPotentialTe: '30 - 34 క్వింటాళ్లు / ఎకరానికి',
      germination: '96% Min',
      seedRate: '6 - 7 kg / Acre',
      seedRateTe: '6 - 7 కిలోలు / ఎకరానికి',
      season: 'Kharif & Rabi',
      grainType: 'Super Fine Sona Masoori Table Quality',
      grainTypeTe: 'సూపర్ ఫైన్ సోనా మసూరి నాణ్యత',
      keyTrait: 'High Shelling % & Zero Chalky Grain',
      keyTraitTe: 'ఎక్కువ మిల్లింగ్ రికవరీ, నూకలు లేని గింజ',
      soilSuitability: 'Alluvial and Red Sandy Loam Soils',
      tagline: 'Premium Consumer Table Rice with Bumper Yield',
      description: 'Specially bred to deliver authentic Sona Masoori cooking quality with modern hybrid disease resilience and 25% higher yield than traditional BPT varieties.',
      sowingGuide: 'Maintain shallow water (2-3cm) during vegetative phase. Apply zinc sulphate (25 kg/ha) at basal stage to prevent khaira disease.'
    },
    {
      id: 'maize-surya',
      name: 'Ganga Surya Mahabali Hybrid Maize',
      teluguName: 'గంగ సూర్య మహాబలి హైబ్రిడ్ మొక్కజొన్న',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-MZ-88',
      duration: '110 - 118 Days',
      durationTe: '110 - 118 రోజులు',
      yieldPotential: '38 - 45 Qtl / Acre',
      yieldPotentialTe: '38 - 45 క్వింటాళ్లు / ఎకరానికి',
      germination: '98% Min',
      seedRate: '7 - 8 kg / Acre',
      seedRateTe: '7 - 8 కిలోలు / ఎకరానికి',
      season: 'Kharif, Rabi & Spring',
      grainType: 'Bold Orange-Yellow Flint Grains',
      grainTypeTe: 'ముదురు నారింజ-పసుపు లావు గింజలు',
      keyTrait: 'Fall Armyworm (FAW) & Turcicum Leaf Blight Tolerant',
      keyTraitTe: 'కత్తెర పురుగు (Fall Armyworm) మరియు ఆకు మచ్చ తెగులు తట్టుకునే రకం',
      soilSuitability: 'Well-drained Fertile Loams & Black Soils',
      tagline: 'Heavy Cob Girth with Deep Grain Depth',
      description: 'A champion single-cross yellow corn hybrid with tight husk cover extending to the cob tip, protecting against rain damage and ear rots. High test weight.',
      sowingGuide: 'Sow at 60cm row spacing and 20cm plant spacing at 4-5cm depth. Ensure adequate moisture during tasseling and silking stages.'
    },
    {
      id: 'jowar-mahaveer',
      name: 'Ganga Mahaveer Hybrid White Jowar (Sorghum)',
      teluguName: 'గంగ మహావీర్ హైబ్రిడ్ తెల్ల జొన్నలు',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-JW-09',
      duration: '105 - 112 Days',
      durationTe: '105 - 112 రోజులు',
      yieldPotential: '22 - 28 Qtl Grain + 6-8 Ton Fodder / Acre',
      yieldPotentialTe: '22 - 28 క్వింటాళ్ల గింజలు + 6-8 టన్నుల మేత / ఎకరానికి',
      germination: '95% Min',
      seedRate: '3.5 - 4 kg / Acre',
      seedRateTe: '3.5 - 4 కిలోలు / ఎకరానికి',
      season: 'Kharif & Rabi (వానాకాలం & యాసంగి)',
      grainType: 'Pearly White Bold Grains & Sweet Juicy Stalks',
      grainTypeTe: 'ముత్యపు తెలుపు లావు గింజలు, తియ్యని పశుగ్రాసం',
      keyTrait: 'Drought Hardy, Grain Mold & Shoot Fly Tolerant',
      keyTraitTe: 'కరువును తట్టుకునే రకం, కాండం ఈగ మరియు బూజు తెగులు నిరోధకత',
      soilSuitability: 'Medium to Heavy Black & Red Soils',
      tagline: 'Dual Purpose Champion: High Grain Yield + Sweet Fodder',
      description: 'Ganga Mahaveer is an outstanding high-yielding dual-purpose sorghum hybrid bred for South Indian climates. Produces massive semi-compact ear heads with high flour recovery and palatable green fodder.',
      sowingGuide: 'Sow at 45cm x 15cm spacing. Seed treatment with Thiamethoxam 30 FS (10 ml/kg) ensures complete shoot fly protection.'
    },
    {
      id: 'bajra-tejasvi',
      name: 'Ganga Tejasvi Hybrid Bajra (Pearl Millet)',
      teluguName: 'గంగ తేజస్వి హైబ్రిడ్ సజ్జలు',
      category: 'cereals',
      categoryLabel: 'Cereal Crop',
      varietyCode: 'GAG-BJ-06',
      duration: '85 - 90 Days (Super Fast Maturity)',
      durationTe: '85 - 90 రోజులు (అతి తక్కువ కాలపరిమితి)',
      yieldPotential: '16 - 22 Qtl / Acre',
      yieldPotentialTe: '16 - 22 క్వింటాళ్లు / ఎకరానికి',
      germination: '95% Min',
      seedRate: '1.5 - 2 kg / Acre',
      seedRateTe: '1.5 - 2 కిలోలు / ఎకరానికి',
      season: 'Kharif & Summer (వేసవి & వానాకాలం)',
      grainType: 'Dense Grey-Brown Bold Grains with High Biofortified Iron',
      grainTypeTe: 'లావు గింజలు, సహజ ఐరన్ & జింక్ పోషకాలు',
      keyTrait: 'Downy Mildew & Rust Immune with 6-8 Productive Tillers',
      keyTraitTe: 'డౌనీ మిల్డ్యూ (వెర్రి తెగులు) మరియు తుప్పు తెగులు నిరోధకత',
      soilSuitability: 'Light Sandy Loams, Red Soils & Dryland Tracts',
      tagline: 'Ultra-Fast Duration with Thick 28-32cm Compact Candle Spikes',
      description: 'Exceptional climate-resilient pearl millet hybrid with strong tillering capacity, synchronous maturity, and stay-green stalks. Highly remunerative in low-rainfall and summer cultivation.',
      sowingGuide: 'Direct drilling at 45cm x 10-12cm spacing at shallow depth (2-3cm). First weeding at 20 days.'
    },
    {
      id: 'soybean-shakti',
      name: 'Ganga Shakti-335 High-Yield Soybean',
      teluguName: 'గంగ శక్తి-335 అధిక దిగుబడి సోయాబీన్',
      category: 'oilseeds',
      categoryLabel: 'Oilseed & Pulse',
      varietyCode: 'GAG-SB-33',
      duration: '90 - 98 Days',
      durationTe: '90 - 98 రోజులు',
      yieldPotential: '12 - 16 Qtl / Acre',
      yieldPotentialTe: '12 - 16 క్వింటాళ్లు / ఎకరానికి',
      germination: '92% Min',
      seedRate: '25 - 30 kg / Acre (1 Bag - 30 kg)',
      seedRateTe: '25 - 30 కిలోలు / ఎకరానికి (1 బస్తా)',
      season: 'Kharif (Monsoon / వానాకాలం)',
      grainType: 'Bold Tawny Golden-Yellow Grains with 20% Oil & 40% Protein',
      grainTypeTe: 'బంగారు పసుపు లావు గింజలు, 20% నూనె & 40% ప్రోటీన్',
      keyTrait: 'Yellow Mosaic Virus (YMV), Rust & Pod Shattering Resistant',
      keyTraitTe: 'పల్లాకు తెగులు (YMV), తుప్పు మరియు కాయ పగులుడు నిరోధకత',
      soilSuitability: 'Deep Black Soils & Fertile Loams',
      tagline: 'Heavy Pod Clustering with Anti-Shattering Resilience',
      description: 'Ganga Shakti-335 is a premium high-yielding soybean variety specially bred for Telangana Kharif seasons. High branching, 3-4 seeded bold pods, superior nodulation, and excellent resistance to pod shattering.',
      sowingGuide: 'Treat seeds with Bradyrhizobium and Trichoderma. Sow on ridges or flat beds at 45cm x 5cm spacing at 3-4cm depth. Ensure adequate drainage.'
    },
    {
      id: 'chilli-teja',
      name: 'Ganga Teja Super Hot F1 Chilli',
      teluguName: 'గంగ తేజ సూపర్ హాట్ F1 మిరప',
      category: 'vegetables',
      categoryLabel: 'Vegetable Seed',
      varietyCode: 'GAG-CH-11',
      duration: '150 - 160 Days (Continuous Picking)',
      durationTe: '150 - 160 రోజులు (నిరంతర కోతలు)',
      yieldPotential: '28 - 35 Qtl Dry / Acre',
      yieldPotentialTe: '28 - 35 క్వింటాళ్లు ఎండు మిర్చి / ఎకరానికి',
      germination: '92% Min',
      seedRate: '80 - 100g / Acre',
      seedRateTe: '80 - 100 గ్రాములు / ఎకరానికి',
      season: 'Kharif & Rabi',
      grainType: 'Glossy Deep Red, 8 - 10cm Length',
      grainTypeTe: 'మెరుసే ఎరుపు రంగు, 8-10 సెం.మీ పొడవు, అధిక కారం',
      keyTrait: 'High Scoville Pungency & Murda Complex (Thrips) Tolerant',
      keyTraitTe: 'అధిక ఘాటు, తామర పురుగులు (నల్లి) తట్టుకునే రకం',
      soilSuitability: 'Red Loam & Well Drained Black Soil',
      tagline: 'High Export Quality Capsaicin & Color Value',
      description: 'Ideal for both dry red chilli processing and fresh green market. Vigorous erect plant habit with heavy cluster bearing capacity.',
      sowingGuide: 'Raise nursery under 50% shade net. Transplant 30-35 day seedlings. Spacing: 75cm x 45cm on raised beds with drip fertigation.'
    },
    {
      id: 'tomato-lalita',
      name: 'Ganga Lalita High-Yield Tomato F1',
      teluguName: 'గంగ లలిత హైబ్రిడ్ టమాట',
      category: 'vegetables',
      categoryLabel: 'Vegetable Seed',
      varietyCode: 'GAG-TM-07',
      duration: '120 - 130 Days',
      durationTe: '120 - 130 రోజులు',
      yieldPotential: '35 - 45 Tons / Acre',
      yieldPotentialTe: '35 - 45 టన్నులు / ఎకరానికి',
      germination: '95% Min',
      seedRate: '50 - 60g / Acre',
      seedRateTe: '50 - 60 గ్రాములు / ఎకరానికి',
      season: 'Year Round (All Seasons)',
      grainType: 'Square-Round Firm Red Fruits (90 - 100g)',
      grainTypeTe: 'గట్టి ఎర్రటి కాయలు (90-100 గ్రాములు), రవాణాకు అనుకూలం',
      keyTrait: 'TLCV (Tomato Leaf Curl Virus) & Early Blight Resistant',
      keyTraitTe: 'ఆకుముడత వైరస్ (TLCV) మరియు ముందస్తు మచ్చ తెగులు నిరోధకత',
      soilSuitability: 'Rich Organic Sandy Loams & Black Soils',
      tagline: 'Excellent Shelf Life (12+ Days) for Long Distance Transit',
      description: 'Determinate to semi-determinate vigorous hybrid. Produces uniform, deep-red firm fruits with high lycopene and superior TSS for market premium.',
      sowingGuide: 'Transplant on raised beds with silver-black mulch. Staking recommended for higher Grade-A fruit yields.'
    },
    {
      id: 'okra-radhika',
      name: 'Ganga Radhika Hybrid Okra / Bhindi',
      teluguName: 'గంగ రాధిక హైబ్రిడ్ బెండ',
      category: 'vegetables',
      categoryLabel: 'Vegetable Seed',
      varietyCode: 'GAG-OK-05',
      duration: '90 - 105 Days (First pick in 42 days)',
      durationTe: '90 - 105 రోజులు (42 రోజుల్లో మొదటి కోత)',
      yieldPotential: '8 - 11 Tons / Acre',
      yieldPotentialTe: '8 - 11 టన్నులు / ఎకరానికి',
      germination: '95% Min',
      seedRate: '2 - 2.5 kg / Acre',
      seedRateTe: '2 - 2.5 కిలోలు / ఎకరానికి',
      season: 'Kharif & Summer',
      grainType: '5-Ridged Dark Green, Tender & Slender',
      grainTypeTe: '5 పలకల ముదురు ఆకుపచ్చ లేత కాయలు',
      keyTrait: 'Yellow Vein Mosaic Virus (YVMV) & ELCV Immune',
      keyTraitTe: 'పల్లాకు తెగులు (YVMV) మరియు ఈనె ముడత వైరస్ నిరోధకత',
      soilSuitability: 'All Types of Cultivable Soils',
      tagline: 'Short Internodes & Heavy Continuous Picking',
      description: 'Prolific yielder with attractive glossy dark green tender pods. Highly preferred by vegetable traders for superior market fetching value.',
      sowingGuide: 'Direct seed dibbling at 45cm x 30cm spacing. Irrigate every 5-6 days during summer.'
    },
    {
      id: 'mustard-gold',
      name: 'Ganga Gold Super Hybrid Mustard',
      teluguName: 'గంగ గోల్డ్ హైబ్రిడ్ ఆవాలు',
      category: 'oilseeds',
      categoryLabel: 'Oilseed Crop',
      varietyCode: 'GAG-MS-01',
      duration: '105 - 115 Days',
      durationTe: '105 - 115 రోజులు',
      yieldPotential: '10 - 14 Qtl / Acre',
      yieldPotentialTe: '10 - 14 క్వింటాళ్లు / ఎకరానికి',
      germination: '96% Min',
      seedRate: '1.5 - 2 kg / Acre',
      seedRateTe: '1.5 - 2 కిలోలు / ఎకరానికి',
      season: 'Rabi (Winter)',
      grainType: 'Bold Brownish Grains with 42% Oil Content',
      grainTypeTe: 'లావు గింజలు, 42% నూనె శాతం',
      keyTrait: 'White Rust & Alternaria Blight Resistant',
      keyTraitTe: 'తెల్ల తుప్పు మరియు ఆల్టర్నేరియా తెగులు తట్టుకునే రకం',
      soilSuitability: 'Loamy to Heavy Soils',
      tagline: 'High Oil Recovery & Cold-Tolerance',
      description: 'Specially developed for South and Central India Rabi sowing. High branching from base with 40-45 siliquae per branch.',
      sowingGuide: 'Sow in mid-October to early November. Row spacing: 30cm x 10cm.'
    }
  ];

  // -------------------------------------------------------------------------
  // 2. BILINGUAL LOCALIZATION ENGINE (EN & TE)
  // -------------------------------------------------------------------------
  let currentLang = localStorage.getItem('ganga_lang') || 'en';

  const I18N = {
    en: {
      langLabel: 'తెలుగు',
      storeStatusChecking: 'Checking Hours...',
      storeOpen: 'STORE OPEN NOW (Closes {time})',
      storeClosed: 'STORE CLOSED (Opens 8:00 AM)',
      navHome: 'Home',
      navProducts: 'Hybrid Seeds',
      navCalc: 'Yield Calculator',
      navAbout: 'R&D & About',
      navServices: 'Services',
      navCalendar: 'Crop Calendar',
      navReviews: 'Reviews (5.0★)',
      navLocation: 'Store Location',
      navBookSeeds: 'Book Seeds',
      heroBadge: 'Certified Telangana Agricultural Seed Enterprise',
      heroTitlePrefix: 'High-Yielding',
      heroTitleHighlight: 'Hybrid Seeds',
      heroTitleSuffix: '& Agricultural Genetics',
      heroDesc: 'Engineered for maximum vigor, superior germination, and climate resilience. Ganga Agri Genetics delivers trusted hybrid paddy, maize, jowar, bajra, soybean, and vegetable seeds directly to farmers across Telangana and South India.',
      heroCtaExplore: 'Explore Seed Catalog',
      heroCtaCalc: 'Seed & Yield Calculator',
      heroCtaDirections: 'Get Directions (Shetpalle)',
      calcHeading: 'Interactive Seed Rate & Yield Calculator',
      calcSub: 'Calculate exact seed quantity needed for your land, recommended row spacing, and estimated harvest yield potential for Telangana farming conditions.',
      calcBtnRecalc: 'Recalculate Recommendation',
      calcBtnPrint: 'Print / Save Agronomy Card',
      calcBtnOrder: 'Order This Seed Quantity via WhatsApp',
      catalogHeading: 'Our Premium Hybrid Seeds Catalog',
      catalogSub: 'Scientifically bred for exceptional vigor, disease tolerance, high milling recovery, and maximum market value.',
      catalogSearchPlaceholder: 'Search by crop, variety name, or trait (e.g. BLB, Mahabali, Paddy)...',
      compareBtnText: 'Compare Varieties',
      orderViaWhatsApp: 'Order',
      viewSpecs: 'View Specs'
    },
    te: {
      langLabel: 'English',
      storeStatusChecking: 'సమయం తనిఖీ చేస్తోంది...',
      storeOpen: 'దుకాణం తెరిచి ఉంది ({time} వరకు)',
      storeClosed: 'దుకాణం మూసివేయబడింది (ఉదయం 8:00 కి తెరుస్తారు)',
      navHome: 'హోమ్',
      navProducts: 'హైబ్రిడ్ విత్తనాలు',
      navCalc: 'దిగుబడి కాలిక్యులేటర్',
      navAbout: 'పరిశోధన & వివరాలు',
      navServices: 'సేవలు',
      navCalendar: 'పంటల క్యాలెండర్',
      navReviews: 'రైతుల సమీక్షలు (5.0★)',
      navLocation: 'దుకాణం చిరునామా',
      navBookSeeds: 'విత్తనాలు బుక్ చేయండి',
      heroBadge: 'తెలంగాణ ధ్రువీకృత వ్యవసాయ విత్తన సంస్థ',
      heroTitlePrefix: 'అధిక దిగుబడినిచ్చే',
      heroTitleHighlight: 'హైబ్రిడ్ విత్తనాలు',
      heroTitleSuffix: '& వ్యవసాయ జెనెటిక్స్',
      heroDesc: 'అధిక మొలక శాతం, అత్యధిక దిగుబడి, మరియు తెగుళ్లను తట్టుకునే శక్తి కలిగిన గంగ అగ్రి జెనెటిక్స్ హైబ్రిడ్ వరి, మొక్కజొన్న, జొన్నలు, సజ్జలు, సోయాబీన్, మరియు కూరగాయల విత్తనాలు తెలంగాణ రైతులకు నేరుగా లభించును.',
      heroCtaExplore: 'విత్తనాల వివరాలు చూడండి',
      heroCtaCalc: 'దిగుబడి కాలిక్యులేటర్',
      heroCtaDirections: 'రూట్ మ్యాప్ (షెట్పల్లె)',
      calcHeading: 'స్మార్ట్ విత్తన మోతాదు & దిగుబడి కాలిక్యులేటర్',
      calcSub: 'మీ పొలానికి కావలసిన ఖచ్చితమైన విత్తన పరిమాణం, మొక్కల మధ్య దూరం మరియు ఆశించిన దిగుబడిని తెలంగాణ నేలల ప్రకారం సులభంగా లెక్కించండి.',
      calcBtnRecalc: 'మరలా లెక్కించండి',
      calcBtnPrint: 'వివరాలు ప్రింట్ / సేవ్ చేయండి',
      calcBtnOrder: 'వాట్సాప్ ద్వారా విత్తనాలు ఆర్డర్ చేయండి',
      catalogHeading: 'మా ప్రామాణిక హైబ్రిడ్ విత్తనాల కేటలాగ్',
      catalogSub: 'శాస్త్రీయంగా అభివృద్ధి చేసిన మేలు రకపు హైబ్రిడ్ విత్తనాలు - అధిక దిగుబడి, వ్యాధి నిరోధకత మరియు అధిక మార్కెట్ ధర.',
      catalogSearchPlaceholder: 'పంట పేరు, రకం లేదా తెగులు పేరుతో శోధించండి (ఉదా: వరి, మహాబలి, BLB)...',
      compareBtnText: 'విత్తన రకాలను పోల్చండి',
      orderViaWhatsApp: 'ఆర్డర్ చేయండి',
      viewSpecs: 'వివరాలు'
    }
  };

  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('ganga_lang', lang);
    const t = I18N[lang];

    const langLabel = document.getElementById('langLabel');
    if (langLabel) langLabel.textContent = t.langLabel;

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
      'compareBtnLabel': t.compareBtnText
    };

    for (const [id, text] of Object.entries(elMap)) {
      const el = document.getElementById(id);
      if (el) el.textContent = text;
    }

    const searchInput = document.getElementById('seedSearchInput');
    if (searchInput) {
      searchInput.placeholder = t.catalogSearchPlaceholder;
    }

    renderProducts();
    computeCalculator();
    checkStoreOpenStatus();
  }

  const langToggleBtn = document.getElementById('langToggleBtn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', function () {
      const nextLang = currentLang === 'en' ? 'te' : 'en';
      updateLanguage(nextLang);
      showToast(nextLang === 'te' ? 'భాష తెలుగులోకి మార్చబడింది' : 'Language switched to English', 'info');
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
    const isTe = (currentLang === 'te');

    const filtered = SEED_CATALOG.filter(item => {
      const matchesCategory = (currentCategory === 'all' || item.category === currentCategory);
      const query = currentSearchQuery.toLowerCase().trim();
      const matchesSearch = !query || 
        item.name.toLowerCase().includes(query) ||
        item.teluguName.toLowerCase().includes(query) ||
        item.varietyCode.toLowerCase().includes(query) ||
        item.keyTrait.toLowerCase().includes(query) ||
        item.categoryLabel.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });

    if (filtered.length === 0) {
      productsGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #ffffff; border-radius: 16px; border: 1px dashed #cbd5e1;">
          <div style="font-size: 2.5rem; color: #94a3b8; margin-bottom: 12px;"><i class="fa-solid fa-seedling"></i></div>
          <h3 style="font-size: 1.3rem; color: #0f172a; margin-bottom: 6px;">${isTe ? 'ఎటువంటి విత్తనాలు కనుగొనబడలేదు' : 'No Matching Hybrid Seeds Found'}</h3>
          <p style="color: #64748b; margin-bottom: 16px;">${isTe ? 'దయచేసి వేరొక పేరుతో శోధించండి లేదా "అన్ని విత్తనాలు" ఎంచుకోండి.' : 'Try adjusting your search terms or select "All Seeds".'}</p>
          <button type="button" class="btn btn--secondary btn--sm" id="resetCatalogBtn">${isTe ? 'ఫిల్టర్లు రీసెట్ చేయండి' : 'Reset Filters'}</button>
        </div>
      `;
      const resetBtn = document.getElementById('resetCatalogBtn');
      if (resetBtn) {
        resetBtn.addEventListener('click', () => {
          currentCategory = 'all';
          currentSearchQuery = '';
          if (searchInput) searchInput.value = '';
          if (clearSearchBtn) clearSearchBtn.style.display = 'none';
          filterPills.forEach(p => p.classList.toggle('active', p.dataset.category === 'all'));
          renderProducts();
        });
      }
      return;
    }

    productsGrid.innerHTML = filtered.map(item => `
      <article class="seed-card" data-id="${item.id}">
        <div class="seed-card-header">
          <span class="seed-type-badge">${item.categoryLabel}</span>
          <div style="display: flex; justify-content: space-between; align-items: baseline; margin-top: 4px;">
            <h3>${isTe ? item.teluguName : item.name}</h3>
          </div>
          <span class="seed-variety-code">${item.varietyCode}</span>
        </div>

        <div class="seed-card-body">
          <div class="seed-features-list">
            <div class="seed-feature-row">
              <span><i class="fa-solid fa-clock"></i> ${isTe ? 'పంట కాలం:' : 'Maturity:'}</span>
              <strong>${isTe && item.durationTe ? item.durationTe : item.duration}</strong>
            </div>
            <div class="seed-feature-row">
              <span><i class="fa-solid fa-chart-line"></i> ${isTe ? 'దిగుబడి సామర్థ్యం:' : 'Yield Potential:'}</span>
              <strong style="color: #047857;">${isTe && item.yieldPotentialTe ? item.yieldPotentialTe : item.yieldPotential}</strong>
            </div>
            <div class="seed-feature-row">
              <span><i class="fa-solid fa-seedling"></i> ${isTe ? 'మొలక శాతం:' : 'Germination:'}</span>
              <strong>${item.germination}</strong>
            </div>
            <div class="seed-feature-row">
              <span><i class="fa-solid fa-calendar-day"></i> ${isTe ? 'అనువైన కాలం:' : 'Best Season:'}</span>
              <strong>${item.season.split('(')[0]}</strong>
            </div>
          </div>

          <div class="seed-trait-tag" title="${item.keyTrait}">
            <i class="fa-solid fa-shield-halved" style="color: #059669;"></i>
            <span>${isTe && item.keyTraitTe ? item.keyTraitTe : item.keyTrait}</span>
          </div>

          <div class="seed-card-footer">
            <button type="button" class="btn btn--outline btn--sm view-spec-btn" data-id="${item.id}">
              <i class="fa-solid fa-circle-info"></i> ${isTe ? 'వివరాలు' : 'View Specs'}
            </button>
            <a href="https://wa.me/917013135345?text=${encodeURIComponent('Hello Ganga Agri Genetics, I would like to inquire/order ' + item.name + ' (' + item.varietyCode + ')')}" target="_blank" rel="noopener noreferrer" class="btn btn--whatsapp btn--sm">
              <i class="fa-brands fa-whatsapp"></i> ${isTe ? 'ఆర్డర్' : 'Order'}
            </a>
          </div>
        </div>
      </article>
    `).join('');

    // Attach spec modal triggers
    document.querySelectorAll('.view-spec-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const seedId = btn.getAttribute('data-id');
        openProductModal(seedId);
      });
    });
  }

  // Category filters
  filterPills.forEach(pill => {
    pill.addEventListener('click', function () {
      filterPills.forEach(p => p.classList.remove('active'));
      this.classList.add('active');
      currentCategory = this.getAttribute('data-category');
      renderProducts();
    });
  });

  // Real-time search
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      currentSearchQuery = this.value;
      if (clearSearchBtn) {
        clearSearchBtn.style.display = this.value ? 'block' : 'none';
      }
      renderProducts();
    });
  }

  if (clearSearchBtn && searchInput) {
    clearSearchBtn.addEventListener('click', function () {
      searchInput.value = '';
      currentSearchQuery = '';
      this.style.display = 'none';
      renderProducts();
      searchInput.focus();
    });
  }

  renderProducts();

  // -------------------------------------------------------------------------
  // 4. PRODUCT SPECIFICATIONS MODAL (<dialog>)
  // -------------------------------------------------------------------------
  const modal = document.getElementById('productSpecModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const closeModalFooterBtn = document.getElementById('closeModalFooterBtn');

  function openProductModal(seedId) {
    const seed = SEED_CATALOG.find(s => s.id === seedId);
    if (!seed || !modal) return;
    const isTe = (currentLang === 'te');

    document.getElementById('modalCategory').textContent = seed.categoryLabel;
    document.getElementById('modalTitle').textContent = isTe ? seed.teluguName : seed.name;
    document.getElementById('modalTagline').textContent = seed.tagline;
    document.getElementById('modalDuration').textContent = isTe && seed.durationTe ? seed.durationTe : seed.duration;
    document.getElementById('modalYield').textContent = isTe && seed.yieldPotentialTe ? seed.yieldPotentialTe : seed.yieldPotential;
    document.getElementById('modalGermination').textContent = seed.germination;
    document.getElementById('modalSeason').textContent = seed.season;
    document.getElementById('modalSeedRate').textContent = isTe && seed.seedRateTe ? seed.seedRateTe : seed.seedRate;
    document.getElementById('modalGrain').textContent = isTe && seed.grainTypeTe ? seed.grainTypeTe : seed.grainType;
    document.getElementById('modalDescription').textContent = seed.description + ' Key trait: ' + (isTe && seed.keyTraitTe ? seed.keyTraitTe : seed.keyTrait) + '. ' + seed.soilSuitability + '.';
    document.getElementById('modalSowingGuide').textContent = seed.sowingGuide;

    const whatsappBtn = document.getElementById('modalWhatsAppOrderBtn');
    if (whatsappBtn) {
      whatsappBtn.href = `https://wa.me/917013135345?text=${encodeURIComponent('Hello Ganga Agri Genetics, I would like to order: ' + seed.name + ' (' + seed.varietyCode + ')')}`;
    }

    modal.showModal();
  }

  function closeModal() {
    if (modal && modal.open) {
      modal.close();
    }
  }

  if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
  if (closeModalFooterBtn) closeModalFooterBtn.addEventListener('click', closeModal);

  if (modal) {
    modal.addEventListener('click', function (e) {
      const rect = modal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        closeModal();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 5. INTERACTIVE SEED RATE & CROP YIELD CALCULATOR
  // -------------------------------------------------------------------------
  const calcCropSelect = document.getElementById('calcCropSelect');
  const calcLandArea = document.getElementById('calcLandArea');
  const calcAreaUnit = document.getElementById('calcAreaUnit');
  const calcSoilType = document.getElementById('calcSoilType');
  const calcSeason = document.getElementById('calcSeason');
  const recalcBtn = document.getElementById('recalcBtn');
  const printCalcBtn = document.getElementById('printCalcBtn');
  const calcOrderWhatsAppBtn = document.getElementById('calcOrderWhatsAppBtn');

  // Result displays
  const calcCropBadge = document.getElementById('calcCropBadge');
  const resultSeedRate = document.getElementById('resultSeedRate');
  const resultSeedPkt = document.getElementById('resultSeedPkt');
  const resultYield = document.getElementById('resultYield');
  const resultYieldPerAcre = document.getElementById('resultYieldPerAcre');
  const resultSpacing = document.getElementById('resultSpacing');
  const resultDuration = document.getElementById('resultDuration');
  const calcExpertAdvice = document.getElementById('calcExpertAdvice');

  const CROP_CALC_DATA = {
    paddy: {
      name: 'Hybrid Paddy (వరి)',
      seedRatePerAcre: 5.5, // kg
      seedUnit: 'kg',
      packetSize: 3, // kg per bag
      yieldMinPerAcre: 28, // quintals
      yieldMaxPerAcre: 34,
      spacing: '20 cm × 15 cm',
      duration: '125 - 135 Days',
      advice: 'Treat seeds with Pseudomonas fluorescens (10g/kg). Maintain 2-3 cm shallow water during tillering stage. Exceptional resistance to Bacterial Leaf Blight (BLB).'
    },
    maize: {
      name: 'Hybrid Maize (మొక్కజొన్న)',
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
      name: 'Hybrid Jowar / Sorghum (జొన్నలు)',
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
      name: 'Hybrid Bajra / Pearl Millet (సజ్జలు)',
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
      name: 'High-Yield Soybean (సోయాబీన్)',
      seedRatePerAcre: 28,
      seedUnit: 'kg (30 kg Bag)',
      packetSize: 30,
      yieldMinPerAcre: 12,
      yieldMaxPerAcre: 16,
      spacing: '45 cm × 5-7 cm',
      duration: '90 - 98 Days',
      advice: 'Treat seeds with Rhizobium & Carbendazim before sowing. Sowing on 45cm ridges ensures superior field drainage and maximum pod setting. High resistance to pod shattering.'
    },
    chilli: {
      name: 'Hybrid Chilli (మిరప)',
      seedRatePerAcre: 0.1, // 100g
      seedUnit: 'kg (100 Grams)',
      packetSize: 0.05,
      yieldMinPerAcre: 26,
      yieldMaxPerAcre: 34,
      spacing: '75 cm × 45 cm',
      duration: '150 - 165 Days',
      advice: 'Transplant 30-day sturdy seedlings onto raised beds with drip irrigation. Apply neem oil 10,000 ppm periodically against thrips & mites.'
    },
    tomato: {
      name: 'Hybrid Tomato F1 (టమాట)',
      seedRatePerAcre: 0.06, // 60g
      seedUnit: 'kg (60 Grams)',
      packetSize: 0.02,
      yieldMinPerAcre: 350, // in quintals (35 tons)
      yieldMaxPerAcre: 450,
      spacing: '90 cm × 45 cm',
      duration: '120 - 130 Days',
      advice: 'Support vines with trellising/bamboo stakes for disease-free high grade fruits. Apply calcium nitrate during fruit setting to prevent Blossom End Rot.'
    },
    okra: {
      name: 'Hybrid Okra / Bhindi (బెండ)',
      seedRatePerAcre: 2.2,
      seedUnit: 'kg',
      packetSize: 1,
      yieldMinPerAcre: 75,
      yieldMaxPerAcre: 95,
      spacing: '45 cm × 30 cm',
      duration: '90 - 100 Days',
      advice: 'Soak seeds in warm water for 6 hours prior to sowing to accelerate germination. High field resistance to Yellow Vein Mosaic Virus (YVMV).'
    },
    mustard: {
      name: 'Hybrid Mustard (ఆవాలు)',
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
      name: 'Hybrid Redgram / Toor (కంది)',
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

    const cropKey = calcCropSelect.value;
    const rawArea = parseFloat(calcLandArea.value) || 1;
    const unit = calcAreaUnit ? calcAreaUnit.value : 'acres';
    const cropData = CROP_CALC_DATA[cropKey] || CROP_CALC_DATA.paddy;

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
    if (calcCropBadge) calcCropBadge.textContent = cropData.name;

    if (resultSeedRate) {
      if (totalSeedKg < 1) {
        resultSeedRate.textContent = `${Math.round(totalSeedKg * 1000)} Grams`;
      } else {
        resultSeedRate.textContent = `${totalSeedKg.toFixed(1)} kg`;
      }
    }

    if (resultSeedPkt) {
      resultSeedPkt.textContent = `approx. ${totalBags} Packet(s) / Bags`;
    }

    if (resultYield) {
      resultYield.textContent = `${totalYieldMin} - ${totalYieldMax} Quintals`;
    }

    if (resultYieldPerAcre) {
      resultYieldPerAcre.textContent = `(${cropData.yieldMinPerAcre} - ${cropData.yieldMaxPerAcre} Qtl / Acre)`;
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

    // Update WhatsApp Order Button
    if (calcOrderWhatsAppBtn) {
      const msg = `Hello Ganga Agri Genetics, I calculated seed requirements for ${cropData.name} on ${rawArea} ${unit} (Approx ${resultSeedRate ? resultSeedRate.textContent : ''}, ${totalBags} Packets). Please provide quotation and availability.`;
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

  function populateComparisonDropdowns() {
    if (!compareCropA || !compareCropB) return;

    const optionsHtml = SEED_CATALOG.map((s, idx) => `
      <option value="${s.id}" ${idx === 0 ? 'selected' : ''}>${s.name} (${s.varietyCode})</option>
    `).join('');

    const optionsHtmlB = SEED_CATALOG.map((s, idx) => `
      <option value="${s.id}" ${idx === 1 ? 'selected' : ''}>${s.name} (${s.varietyCode})</option>
    `).join('');

    compareCropA.innerHTML = optionsHtml;
    compareCropB.innerHTML = optionsHtmlB;
  }

  function renderComparisonTable() {
    if (!comparisonTableBody || !compareCropA || !compareCropB) return;

    const cropA = SEED_CATALOG.find(s => s.id === compareCropA.value) || SEED_CATALOG[0];
    const cropB = SEED_CATALOG.find(s => s.id === compareCropB.value) || SEED_CATALOG[1];

    comparisonTableBody.innerHTML = `
      <tr>
        <td><strong>Category</strong></td>
        <td>${cropA.categoryLabel}</td>
        <td>${cropB.categoryLabel}</td>
      </tr>
      <tr>
        <td><strong>Crop Duration</strong></td>
        <td><strong style="color: #047857;">${cropA.duration}</strong></td>
        <td><strong style="color: #047857;">${cropB.duration}</strong></td>
      </tr>
      <tr>
        <td><strong>Yield Potential</strong></td>
        <td><strong style="color: #d97706;">${cropA.yieldPotential}</strong></td>
        <td><strong style="color: #d97706;">${cropB.yieldPotential}</strong></td>
      </tr>
      <tr>
        <td><strong>Germination Purity</strong></td>
        <td>${cropA.germination}</td>
        <td>${cropB.germination}</td>
      </tr>
      <tr>
        <td><strong>Recommended Seed Rate</strong></td>
        <td>${cropA.seedRate}</td>
        <td>${cropB.seedRate}</td>
      </tr>
      <tr>
        <td><strong>Suitable Season</strong></td>
        <td>${cropA.season}</td>
        <td>${cropB.season}</td>
      </tr>
      <tr>
        <td><strong>Grain / Fruit Quality</strong></td>
        <td>${cropA.grainType}</td>
        <td>${cropB.grainType}</td>
      </tr>
      <tr>
        <td><strong>Key Disease Resistance</strong></td>
        <td><span class="badge badge--success">${cropA.keyTrait}</span></td>
        <td><span class="badge badge--success">${cropB.keyTrait}</span></td>
      </tr>
      <tr>
        <td><strong>Soil Suitability</strong></td>
        <td>${cropA.soilSuitability}</td>
        <td>${cropB.soilSuitability}</td>
      </tr>
    `;
  }

  if (openCompareModalBtn && compareModal) {
    openCompareModalBtn.addEventListener('click', () => {
      populateComparisonDropdowns();
      renderComparisonTable();
      compareModal.showModal();
    });
  }

  if (closeCompareModalBtn && compareModal) {
    closeCompareModalBtn.addEventListener('click', () => compareModal.close());
  }

  if (closeCompareFooterBtn && compareModal) {
    closeCompareFooterBtn.addEventListener('click', () => compareModal.close());
  }

  if (compareCropA) compareCropA.addEventListener('change', renderComparisonTable);
  if (compareCropB) compareCropB.addEventListener('change', renderComparisonTable);

  if (compareModal) {
    compareModal.addEventListener('click', function (e) {
      const rect = compareModal.getBoundingClientRect();
      const isInDialog = (
        rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
        rect.left <= e.clientX && e.clientX <= rect.left + rect.width
      );
      if (!isInDialog) {
        compareModal.close();
      }
    });
  }

  // -------------------------------------------------------------------------
  // 7. LIVE STORE OPERATING HOURS STATUS (IST / TELANGANA)
  // -------------------------------------------------------------------------
  function checkStoreOpenStatus() {
    const liveStoreStatus = document.getElementById('liveStoreStatus');
    const hoursLiveBadge = document.getElementById('hoursLiveBadge');
    const isTe = (currentLang === 'te');

    try {
      // Calculate current IST (UTC+5:30)
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const istTime = new Date(utc + (3600000 * 5.5));

      const day = istTime.getDay(); // 0 = Sunday, 1 = Monday ... 6 = Saturday
      const hours = istTime.getHours();
      const minutes = istTime.getMinutes();
      const currentTimeDecimal = hours + (minutes / 60);

      let isOpen = false;
      let closingTime = '';

      if (day === 0) {
        // Sunday: 8:30 AM to 1:30 PM (8.5 to 13.5)
        isOpen = (currentTimeDecimal >= 8.5 && currentTimeDecimal < 13.5);
        closingTime = '1:30 PM';
      } else {
        // Monday - Saturday: 8:00 AM to 7:30 PM (8.0 to 19.5)
        isOpen = (currentTimeDecimal >= 8.0 && currentTimeDecimal < 19.5);
        closingTime = '7:30 PM';
      }

      if (isOpen) {
        if (liveStoreStatus) {
          liveStoreStatus.innerHTML = `
            <span class="status-dot pulse"></span>
            <strong class="status-text" style="color: #6ee7b7;">${isTe ? `దుకాణం తెరిచి ఉంది (${closingTime} వరకు)` : `STORE OPEN NOW (Closes ${closingTime})`}</strong>
          `;
        }
        if (hoursLiveBadge) {
          hoursLiveBadge.textContent = isTe ? 'తెరిచి ఉంది' : 'OPEN NOW';
          hoursLiveBadge.style.background = '#dcfce7';
          hoursLiveBadge.style.color = '#166534';
        }
      } else {
        if (liveStoreStatus) {
          liveStoreStatus.innerHTML = `
            <span class="status-dot" style="background-color: #fbbf24;"></span>
            <strong class="status-text" style="color: #fde68a;">${isTe ? 'దుకాణం మూసివేయబడింది (ఉదయం 8:00 కి తెరుస్తారు)' : 'STORE CLOSED (Opens 8:00 AM)'}</strong>
          `;
        }
        if (hoursLiveBadge) {
          hoursLiveBadge.textContent = isTe ? 'మూసివేయబడింది' : 'CLOSED NOW';
          hoursLiveBadge.style.background = '#fee2e2';
          hoursLiveBadge.style.color = '#991b1b';
        }
      }
    } catch (err) {
      console.warn('Could not calculate IST store status:', err);
    }
  }

  checkStoreOpenStatus();
  setInterval(checkStoreOpenStatus, 60000);

  // -------------------------------------------------------------------------
  // 8. COPY STORE ADDRESS TO CLIPBOARD
  // -------------------------------------------------------------------------
  const copyAddressBtn = document.getElementById('copyAddressBtn');
  if (copyAddressBtn) {
    copyAddressBtn.addEventListener('click', function () {
      const addressText = 'Ganga Agri Genetics, VCJF+5X7, Shetpalle, Telangana 503218, India. Phone: +91-7013135345';
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(addressText).then(() => {
          showToast(currentLang === 'te' ? 'దుకాణం చిరునామా కాపీ చేయబడింది!' : 'Store Address copied to clipboard!', 'success');
        }).catch(() => {
          showToast('Address: VCJF+5X7, Shetpalle, Telangana 503218', 'info');
        });
      } else {
        showToast('Address: VCJF+5X7, Shetpalle, Telangana 503218', 'info');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 9. SEED BOOKING & INQUIRY FORM SUBMISSION
  // -------------------------------------------------------------------------
  const seedInquiryForm = document.getElementById('seedInquiryForm');
  const submitViaWhatsAppBtn = document.getElementById('submitViaWhatsAppBtn');

  function getFormData() {
    const name = document.getElementById('farmerName')?.value.trim() || '';
    const phone = document.getElementById('farmerPhone')?.value.trim() || '';
    const village = document.getElementById('farmerVillage')?.value.trim() || '';
    const crop = document.getElementById('cropInterest')?.value || '';
    const acreage = document.getElementById('farmerAcreage')?.value.trim() || 'N/A';
    const reason = document.getElementById('inquiryReason')?.value || '';
    const message = document.getElementById('farmerMessage')?.value.trim() || 'None';

    return { name, phone, village, crop, acreage, reason, message };
  }

  if (seedInquiryForm) {
    seedInquiryForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const data = getFormData();

      if (!data.name || !data.phone || !data.village || !data.crop) {
        showToast(currentLang === 'te' ? 'దయచేసి అవసరమైన అన్ని వివరాలు నింపండి (*)' : 'Please fill all required fields (*)', 'error');
        return;
      }

      showToast(`Thank you ${data.name}! Your seed inquiry for ${data.crop} has been registered. Our agronomist will contact you at ${data.phone}.`, 'success');
      seedInquiryForm.reset();
    });
  }

  if (submitViaWhatsAppBtn) {
    submitViaWhatsAppBtn.addEventListener('click', function () {
      const data = getFormData();

      if (!data.name || !data.phone || !data.village || !data.crop) {
        showToast(currentLang === 'te' ? 'దయచేసి పేరు, ఫోన్, ఊరు మరియు పంట రకం వివరాలు నింపండి' : 'Please fill Name, Phone, Village and Crop Variety to send WhatsApp message', 'error');
        return;
      }

      const text = `*New Seed Inquiry - Ganga Agri Genetics*\n` +
        `👤 *Name:* ${data.name}\n` +
        `📞 *Phone:* ${data.phone}\n` +
        `📍 *Village / Location:* ${data.village}\n` +
        `🌾 *Crop Variety:* ${data.crop}\n` +
        `📏 *Acreage / Quantity:* ${data.acreage}\n` +
        `🎯 *Purpose:* ${data.reason}\n` +
        `📝 *Notes:* ${data.message}`;

      window.open(`https://wa.me/917013135345?text=${encodeURIComponent(text)}`, '_blank');
      showToast('Opening WhatsApp with your inquiry...', 'success');
    });
  }

  // -------------------------------------------------------------------------
  // 10. TOAST NOTIFICATION UTILITY
  // -------------------------------------------------------------------------
  function showToast(message, type = 'success') {
    const container = document.getElementById('toastNotification');
    if (!container) return;

    const toast = document.createElement('div');
    toast.className = `toast toast--${type}`;
    const icon = type === 'success' ? 'fa-circle-check' : (type === 'error' ? 'fa-circle-exclamation' : 'fa-circle-info');
    toast.innerHTML = `<i class="fa-solid ${icon}"></i> <span>${message}</span>`;

    container.appendChild(toast);

    setTimeout(() => {
      if (toast.parentNode) {
        toast.parentNode.removeChild(toast);
      }
    }, 3200);
  }

  // -------------------------------------------------------------------------
  // 11. RESPONSIVE MOBILE NAVIGATION & SCROLL MANAGEMENT
  // -------------------------------------------------------------------------
  const navToggle = document.getElementById('navToggle');
  const navMenu = document.getElementById('navMenu');
  const navLinks = document.querySelectorAll('.nav-link');
  const mainHeader = document.getElementById('mainHeader');
  const backToTopBtn = document.getElementById('backToTopBtn');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', function (e) {
      e.stopPropagation();
      const isActive = navMenu.classList.toggle('active');
      navToggle.setAttribute('aria-expanded', isActive ? 'true' : 'false');
    });

    // Close on navigation link click
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth <= 768) {
          navMenu.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      });
    });

    // Close when clicking outside
    document.addEventListener('click', function (e) {
      if (window.innerWidth <= 768 && navMenu.classList.contains('active')) {
        if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
          navMenu.classList.remove('active');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  }

  // Scroll Header Shadow & Back to Top visibility
  window.addEventListener('scroll', function () {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;

    if (mainHeader) {
      if (scrollY > 40) {
        mainHeader.classList.add('sticky-scrolled');
      } else {
        mainHeader.classList.remove('sticky-scrolled');
      }
    }

    if (backToTopBtn) {
      if (scrollY > 350) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    }
  }, { passive: true });

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Active section scroll spy via IntersectionObserver
  const sections = document.querySelectorAll('section[id], footer[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else if (href && href.startsWith('#')) {
            link.classList.remove('active');
          }
        });
      }
    });
  }, { rootMargin: '-20% 0px -70% 0px' });

  sections.forEach(sec => observer.observe(sec));

  // Update copyright year
  const copyrightYear = document.getElementById('copyrightYear');
  if (copyrightYear) {
    copyrightYear.textContent = new Date().getFullYear();
  }

  // -------------------------------------------------------------------------
  // 11. HERO CAROUSEL / SLIDER CONTROLLER
  // -------------------------------------------------------------------------
  function initHeroCarousel() {
    const track = document.getElementById('heroTrack');
    const slides = document.querySelectorAll('.hero-slide');
    const prevBtn = document.getElementById('heroPrevBtn');
    const nextBtn = document.getElementById('heroNextBtn');
    const indicatorDots = document.querySelectorAll('.indicator-dot');
    const carouselContainer = document.getElementById('heroCarousel');

    if (!track || slides.length === 0) return;

    let currentIndex = 0;
    let autoPlayTimer = null;
    const totalSlides = slides.length;
    const intervalTime = 6000;

    function goToSlide(index) {
      if (index < 0) {
        currentIndex = totalSlides - 1;
      } else if (index >= totalSlides) {
        currentIndex = 0;
      } else {
        currentIndex = index;
      }

      track.style.transform = `translateX(-${currentIndex * 100}%)`;

      slides.forEach((slide, i) => {
        if (i === currentIndex) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });

      indicatorDots.forEach((dot, i) => {
        if (i === currentIndex) {
          dot.classList.add('active');
        } else {
          dot.classList.remove('active');
        }
      });
    }

    function nextSlide() {
      goToSlide(currentIndex + 1);
    }

    function prevSlide() {
      goToSlide(currentIndex - 1);
    }

    function startAutoPlay() {
      stopAutoPlay();
      autoPlayTimer = setInterval(nextSlide, intervalTime);
    }

    function stopAutoPlay() {
      if (autoPlayTimer) {
        clearInterval(autoPlayTimer);
        autoPlayTimer = null;
      }
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', () => {
        nextSlide();
        startAutoPlay();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', () => {
        prevSlide();
        startAutoPlay();
      });
    }

    indicatorDots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const slideIndex = parseInt(dot.getAttribute('data-slide-to'), 10);
        if (!isNaN(slideIndex)) {
          goToSlide(slideIndex);
          startAutoPlay();
        }
      });
    });

    if (carouselContainer) {
      carouselContainer.addEventListener('mouseenter', stopAutoPlay);
      carouselContainer.addEventListener('mouseleave', startAutoPlay);

      // Touch swipe gestures on mobile
      let touchStartX = 0;
      let touchEndX = 0;

      carouselContainer.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
        stopAutoPlay();
      }, { passive: true });

      carouselContainer.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        const diffX = touchEndX - touchStartX;
        if (diffX > 45) {
          prevSlide();
        } else if (diffX < -45) {
          nextSlide();
        }
        startAutoPlay();
      }, { passive: true });
    }

    // Keyboard navigation (ArrowLeft / ArrowRight)
    document.addEventListener('keydown', (e) => {
      const heroSection = document.getElementById('hero');
      if (!heroSection) return;
      const rect = heroSection.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;
      if (inView) {
        if (e.key === 'ArrowLeft') {
          prevSlide();
          startAutoPlay();
        } else if (e.key === 'ArrowRight') {
          nextSlide();
          startAutoPlay();
        }
      }
    });

    // Start auto-play
    startAutoPlay();
  }

  initHeroCarousel();

  // -------------------------------------------------------------------------
  // 12. PWA SERVICE WORKER REGISTRATION (OFFLINE SUPPORT)
  // -------------------------------------------------------------------------
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then((reg) => {
          console.log('Ganga Agri Genetics ServiceWorker registered with scope:', reg.scope);
        })
        .catch((err) => {
          console.log('ServiceWorker registration skipped or failed:', err);
        });
    });
  }

  console.log('Ganga Agri Genetics web application initialized successfully.');
});