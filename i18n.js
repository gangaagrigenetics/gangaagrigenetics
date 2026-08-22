/**
 * GANGA AGRI GENETICS - CENTRAL LOCALIZATION DATA & ENGINE (i18n.js)
 * Master bilingual dictionary for English (EN) and Telugu (TE).
 * All UI labels, catalog metadata, calculator advice, units, dropdowns,
 * bonus templates, and system notifications are centralized in this single file.
 */
(function (global) {
  'use strict';

  const GANGA_I18N = {
    // 1. GENERAL UI DICTIONARIES
    ui: {
      en: {
        langLabel: 'తెలుగు',
        storeStatusChecking: 'Checking Hours...',
        storeOpen: 'STORE OPEN NOW (Closes {time})',
        storeClosed: 'STORE CLOSED (Opens 8:00 AM)',
        badgeOpen: 'OPEN NOW',
        badgeClosed: 'CLOSED NOW',
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
        heroDesc: 'Engineered for maximum vigor, superior germination, and climate resilience. Ganga Agri Genetics delivers trusted hybrid paddy, maize, jowar, bajra, soybean, and oilseed varieties directly to farmers across Telangana and South India.',
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
        compareModalHeading: 'Compare Seed Varieties',
        compareModalSubtitle: 'Select any two seed varieties to evaluate crop duration, yield potential, germination, and disease resistance traits.',
        compareLabelA: 'Select Variety 1:',
        compareLabelB: 'Select Variety 2:',
        orderViaWhatsApp: 'Order',
        viewSpecs: 'View Specs',
        toastLangSwitched: 'Language switched to English',
        toastAddressCopied: 'Store Address copied to clipboard!',
        toastFillRequired: 'Please fill all required fields (*)',
        toastFillBookingDetails: 'Please fill Name, Phone, Village and Crop Variety to send WhatsApp message',
        toastEnterEmailOrPhone: 'Please enter your email address or WhatsApp number',
        toastNewsletterSuccess: 'Successfully subscribed to Ganga Agri Genetics Updates!'
      },
      te: {
        langLabel: 'English',
        storeStatusChecking: 'సమయం తనిఖీ చేస్తోంది...',
        storeOpen: 'దుకాణం తెరిచి ఉంది ({time} వరకు)',
        storeClosed: 'దుకాణం మూసివేయబడింది (ఉదయం 8:00 కి తెరుస్తారు)',
        badgeOpen: 'తెరిచి ఉంది',
        badgeClosed: 'మూసివేయబడింది',
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
        heroDesc: 'అధిక మొలక శాతం, అత్యధిక దిగుబడి, మరియు తెగుళ్లను తట్టుకునే శక్తి కలిగిన గంగ అగ్రి జెనెటిక్స్ హైబ్రిడ్ వరి, మొక్కజొన్న, జొన్నలు, సజ్జలు, సోయాబీన్, మరియు నూనెగింజల విత్తనాలు తెలంగాణ రైతులకు నేరుగా లభించును.',
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
        compareModalHeading: 'విత్తన రకాలను పోల్చండి (Side-by-Side Comparison)',
        compareModalSubtitle: 'పంట కాలం, దిగుబడి సామర్థ్యం, మొలక శాతం మరియు తెగుళ్ల నిరోధకతను సరిపోల్చండి.',
        compareLabelA: 'రకం 1 ఎంచుకోండి:',
        compareLabelB: 'రకం 2 ఎంచుకోండి:',
        orderViaWhatsApp: 'ఆర్డర్ చేయండి',
        viewSpecs: 'వివరాలు',
        toastLangSwitched: 'భాష తెలుగులోకి మార్చబడింది',
        toastAddressCopied: 'దుకాణం చిరునామా కాపీ చేయబడింది!',
        toastFillRequired: 'దయచేసి అవసరమైన అన్ని వివరాలు నింపండి (*)',
        toastFillBookingDetails: 'దయచేసి పేరు, ఫోన్, ఊరు మరియు పంట రకం వివరాలు నింపండి',
        toastEnterEmailOrPhone: 'దయచేసి మీ ఇమెయిల్ లేదా వాట్సాప్ నంబర్ నమోదు చేయండి',
        toastNewsletterSuccess: 'గంగ అగ్రి జెనెటిక్స్ వ్యవసాయ అలర్ట్స్ సబ్‌స్క్రిప్షన్ విజయవంతమైంది!'
      }
    },

    // 2. SEED VARIETIES TELUGU DATA (Indexed by variety ID)
    catalog: {
      'paddy-gold99': {
        name: 'గంగ సుప్రీం గోల్డ్-99 హైబ్రిడ్ వరి',
        duration: '125 - 130 రోజులు',
        yieldPotential: '32 - 36 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '5 - 6 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & యాసంగి',
        grainType: 'మధ్యస్థ సన్నపు గింజ, ఎక్కువ రికవరీ',
        keyTrait: 'బాక్టీరియల్ ఆకు ఎండు తెగులు (BLB) మరియు అగ్గి తెగులు నిరోధకత',
        soilSuitability: 'నల్ల రేగడి మరియు బంకమట్టి నేలలకు అనుకూలం'
      },
      'paddy-bpt5204': {
        name: 'గంగ బి.పి.టి 5204 (సాంబ మసూరి)',
        bonusAmount: 'తెలంగాణ ₹500 బోనస్ రకం',
        grainDimensions: 'పొడవు: 5.3 మి.మీ (<6 మి.మీ), వెడల్పు: 1.8 మి.మీ (<2 మి.మీ), తేమ: <17%',
        duration: '135 - 140 రోజులు',
        yieldPotential: '30 - 34 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '6 - 7 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & యాసంగి',
        grainType: 'సూపర్ ఫైన్ సోనా మసూరి నాణ్యత (సన్న వడ్లు)',
        keyTrait: 'తెలంగాణ ప్రభుత్వ ₹500 బోనస్ | ఎక్కువ మిల్లింగ్ రికవరీ, నూకలు లేని గింజ',
        soilSuitability: 'వరి పండే అన్ని రకాల నల్ల రేగడి మరియు ఒండ్రు నేలలు'
      },
      'paddy-rnr15048': {
        name: 'గంగ తెలంగాణ సోనా (RNR 15048)',
        bonusAmount: 'తెలంగాణ ₹500 బోనస్ రకం',
        grainDimensions: 'పొడవు: 5.2 మి.మీ, వెడల్పు: 1.7 మి.మీ, తక్కువ గ్లైసెమిక్ ఇండెక్స్ (GI 51.5)',
        duration: '120 - 125 రోజులు (స్వల్పకాలిక రకం)',
        yieldPotential: '30 - 35 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '6 - 7 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & యాసంగి',
        grainType: 'షుగర్ పేషెంట్లకు అనువైన తక్కువ GI (51.5) సన్న బియ్యం',
        keyTrait: 'తెలంగాణ ప్రభుత్వ ₹500 బోనస్ | లో-గ్లైసెమిక్ ఇండెక్స్ & అగ్గి తెగులు నిరోధకత',
        soilSuitability: 'తెలంగాణలోని అన్ని రకాల సాగు నేలలకు అనుకూలం'
      },
      'paddy-hmtsona': {
        name: 'గంగ హెచ్.ఎం.టి సోనా సూపర్ ఫైన్ సన్నాలు',
        bonusAmount: 'తెలంగాణ ₹500 బోనస్ రకం',
        grainDimensions: 'పొడవు: 5.4 మి.మీ (<6 మి.మీ), వెడల్పు: 1.85 మి.మీ (<2 మి.మీ), తేమ: <17%',
        duration: '130 - 135 రోజులు',
        yieldPotential: '28 - 32 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '6 - 7 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & యాసంగి',
        grainType: 'సువాసన గల ముత్యపు తెలుపు సన్న గింజ, 70% కంటే ఎక్కువ రికవరీ',
        keyTrait: 'తెలంగాణ ప్రభుత్వ ₹500 బోనస్ | సువాసన గల గింజ & అధిక మిల్లింగ్ రికవరీ',
        soilSuitability: 'సారవంతమైన బంకమట్టి మరియు ఎర్ర ఇసుక నేలలు'
      },
      'paddy-jaisriram': {
        name: 'గంగ జై శ్రీరామ్ ప్రీమియం సన్నాలు',
        bonusAmount: 'తెలంగాణ ₹500 బోనస్ రకం',
        grainDimensions: 'పొడవు: 5.5 మి.మీ (<6 మి.మీ), వెడల్పు: 1.8 మి.మీ (<2 మి.మీ), తేమ: <17%',
        duration: '135 - 140 రోజులు',
        yieldPotential: '26 - 30 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '6 - 7 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & యాసంగి',
        grainType: 'అత్యుత్తమ సువాసన గల సన్న గింజ, అత్యధిక వినియోగదారుల ఆదరణ',
        keyTrait: 'తెలంగాణ ప్రభుత్వ ₹500 బోనస్ | అత్యధిక బహిరంగ మార్కెట్ ధర, పడిపోని పైరు',
        soilSuitability: 'మధ్యస్థ నుంచి బరువైన నల్ల రేగడి మరియు ఒండ్రు నేలలు'
      },
      'paddy-knm1638': {
        name: 'గంగ కూనారం సన్నాలు (KNM 1638)',
        bonusAmount: 'తెలంగాణ ₹500 బోనస్ రకం',
        grainDimensions: 'పొడవు: 5.4 మి.మీ (<6 మి.మీ), వెడల్పు: 1.8 మి.మీ (<2 మి.మీ), తేమ: <17%',
        duration: '125 - 130 రోజులు',
        yieldPotential: '32 - 36 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '6 - 7 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & యాసంగి',
        grainType: 'మధ్యస్థ సన్నపు గింజ, నూకలు లేని తెల్లని బియ్యం',
        keyTrait: 'తెలంగాణ ప్రభుత్వ ₹500 బోనస్ | బాక్టీరియల్ ఆకు ఎండు (BLB) & సుడిదోమ (BPH) నిరోధకత',
        soilSuitability: 'ఉత్తర తెలంగాణలోని లోతైన నల్ల రేగడి మరియు బంకమట్టి నేలలు'
      },
      'paddy-wgl44': {
        name: 'గంగ సిద్ధి (WGL 44 / వరంగల్-44)',
        bonusAmount: 'తెలంగాణ ₹500 బోనస్ రకం',
        grainDimensions: 'పొడవు: 5.3 మి.మీ (<6 మి.మీ), వెడల్పు: 1.75 మి.మీ (<2 మి.మీ), తేమ: <17%',
        duration: '130 - 135 రోజులు',
        yieldPotential: '30 - 35 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '6 - 7 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & యాసంగి',
        grainType: 'పొట్టి సన్నపు గింజ, బరువైన కంకి మరియు ఎక్కువ రికవరీ',
        keyTrait: 'తెలంగాణ ప్రభుత్వ ₹500 బోనస్ | ఉల్లికోడు (Gall Midge) మరియు అగ్గి తెగులు తట్టుకునే రకం',
        soilSuitability: 'ఎర్ర ఇసుక మరియు నల్ల రేగడి నేలలు'
      },
      'paddy-knm7715': {
        name: 'గంగ కూనారం 7715 (KNM 7715)',
        bonusAmount: 'తెలంగాణ ₹500 బోనస్ రకం',
        grainDimensions: 'పొడవు: 5.2 మి.మీ (<6 మి.మీ), వెడల్పు: 1.8 మి.మీ (<2 మి.మీ), తేమ: <17%',
        duration: '120 - 125 రోజులు (త్వరిత కోత)',
        yieldPotential: '30 - 34 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '6 - 7 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & యాసంగి (రెండు కాలాలు)',
        grainType: 'మెరుసే సన్నపు గింజ, అధిక బరువు మరియు నాణ్యత',
        keyTrait: 'తెలంగాణ ప్రభుత్వ ₹500 బోనస్ | చలిని తట్టుకునే శక్తి, యాసంగి & వానాకాలం అనువైనది',
        soilSuitability: 'ఒండ్రు మరియు మధ్యస్థ నేలలు'
      },
      'maize-surya': {
        name: 'గంగ సూర్య మహాబలి హైబ్రిడ్ మొక్కజొన్న',
        duration: '110 - 118 రోజులు',
        yieldPotential: '38 - 45 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '7 - 8 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం, యాసంగి & వసంత కాలం',
        grainType: 'ముదురు నారింజ-పసుపు లావు గింజలు',
        keyTrait: 'కత్తెర పురుగు (Fall Armyworm) మరియు ఆకు మచ్చ తెగులు తట్టుకునే రకం',
        soilSuitability: 'నీరు నిలవని సారవంతమైన నల్ల రేగడి నేలలు'
      },
      'jowar-mahaveer': {
        name: 'గంగ మహావీర్ హైబ్రిడ్ తెల్ల జొన్నలు',
        duration: '105 - 112 రోజులు',
        yieldPotential: '22 - 28 క్వింటాళ్ల గింజలు + 6-8 టన్నుల మేత / ఎకరానికి',
        seedRate: '3.5 - 4 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & యాసంగి',
        grainType: 'ముత్యపు తెలుపు లావు గింజలు, తియ్యని పశుగ్రాసం',
        keyTrait: 'కరువును తట్టుకునే రకం, కాండం ఈగ మరియు బూజు తెగులు నిరోధకత',
        soilSuitability: 'మధ్యస్థ నుంచి బరువైన నల్ల రేగడి మరియు ఎర్ర నేలలు'
      },
      'bajra-tejasvi': {
        name: 'గంగ తేజస్వి హైబ్రిడ్ సజ్జలు',
        duration: '85 - 90 రోజులు (అతి తక్కువ కాలపరిమితి)',
        yieldPotential: '16 - 22 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '1.5 - 2 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & వేసవి',
        grainType: 'లావు గింజలు, సహజ ఐరన్ & జింక్ పోషకాలు',
        keyTrait: 'డౌనీ మిల్డ్యూ (వెర్రి తెగులు) మరియు తుప్పు తెగులు నిరోధకత',
        soilSuitability: 'తేలికపాటి ఇసుక నేలలు, ఎర్ర నేలలు మరియు మెట్ట ప్రాంతాలు'
      },
      'soybean-shakti': {
        name: 'గంగ శక్తి-335 అధిక దిగుబడి సోయాబీన్',
        duration: '90 - 98 రోజులు',
        yieldPotential: '12 - 16 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '25 - 30 కిలోలు / ఎకరానికి (1 బస్తా)',
        season: 'వానాకాలం (ఖరీఫ్)',
        grainType: 'బంగారు పసుపు లావు గింజలు, 20% నూనె & 40% ప్రోటీన్',
        keyTrait: 'పల్లాకు తెగులు (YMV), తుప్పు మరియు కాయ పగులుడు నిరోధకత',
        soilSuitability: 'లోతైన నల్ల రేగడి మరియు సారవంతమైన నేలలు'
      },
      'mustard-gold': {
        name: 'గంగ గోల్డ్ హైబ్రిడ్ ఆవాలు',
        duration: '105 - 115 రోజులు',
        yieldPotential: '10 - 14 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '1.5 - 2 కిలోలు / ఎకరానికి',
        season: 'యాసంగి (శీతాకాలం)',
        grainType: 'లావు గింజలు, 42% నూనె శాతం',
        keyTrait: 'తెల్ల తుప్పు మరియు ఆల్టర్నేరియా తెగులు తట్టుకునే రకం',
        soilSuitability: 'మధ్యస్థ మరియు బరువైన నేలలు'
      }
    },

    // 3. CALCULATOR CROPS TELUGU DATA (Indexed by crop key)
    calculator: {
      paddy_bpt5204: {
        name: 'బి.పి.టి 5204 సాంబ మసూరి (తెలంగాణ ₹500 బోనస్)',
        duration: '135 - 140 రోజులు',
        advice: 'తెలంగాణ ప్రభుత్వ ₹500/క్వింటాల్ బోనస్ అర్హత రకం! ధాన్యం తేమ 17% కంటే తక్కువ ఉండేలా చూసి, స్థానిక AEO వద్ద నమోదు చేసుకోండి.'
      },
      paddy_rnr15048: {
        name: 'RNR 15048 తెలంగాణ సోనా (తెలంగాణ ₹500 బోనస్)',
        duration: '120 - 125 రోజులు',
        advice: 'తెలంగాణ ప్రభుత్వ ₹500/క్వింటాల్ బోనస్ రకం! షుగర్ పేషెంట్లకు అనువైన తక్కువ GI బియ్యం, 120 రోజుల్లో కోతకు వస్తుంది.'
      },
      paddy_hmtsona: {
        name: 'హెచ్.ఎం.టి సోనా సూపర్ ఫైన్ సన్నాలు (తెలంగాణ ₹500 బోనస్)',
        duration: '130 - 135 రోజులు',
        advice: 'తెలంగాణ ప్రభుత్వ ₹500/క్వింటాల్ బోనస్ రకం! సువాసన గల సన్న బియ్యం, 70% కంటే ఎక్కువ మిల్లింగ్ రికవరీ.'
      },
      paddy_jaisriram: {
        name: 'జై శ్రీరామ్ ప్రీమియం సన్నాలు (తెలంగాణ ₹500 బోనస్)',
        duration: '135 - 140 రోజులు',
        advice: 'తెలంగాణ ప్రభుత్వ ₹500/క్వింటాల్ బోనస్ రకం! మార్కెట్లో అత్యధిక ధర లభించే ప్రీమియం సన్న వరి రకం.'
      },
      paddy_knm1638: {
        name: 'కూనారం 1638 సన్నాలు (తెలంగాణ ₹500 బోనస్)',
        duration: '125 - 130 రోజులు',
        advice: 'తెలంగాణ ప్రభుత్వ ₹500/క్వింటాల్ బోనస్ రకం! బాక్టీరియల్ ఆకు ఎండు (BLB) మరియు సుడిదోమను తట్టుకునే రకం.'
      },
      paddy_wgl44: {
        name: 'వరంగల్ 44 సిద్ధి సన్నాలు (తెలంగాణ ₹500 బోనస్)',
        duration: '130 - 135 రోజులు',
        advice: 'తెలంగాణ ప్రభుత్వ ₹500/క్వింటాల్ బోనస్ రకం! బరువైన కంకి, ఉల్లికోడు తెగులును తట్టుకునే ప్రసిద్ధ రకం.'
      },
      paddy_knm7715: {
        name: 'కూనారం 7715 సన్నాలు (తెలంగాణ ₹500 బోనస్)',
        duration: '120 - 125 రోజులు',
        advice: 'తెలంగాణ ప్రభుత్వ ₹500/క్వింటాల్ బోనస్ రకం! 120 రోజుల స్వల్పకాలిక రకం, చలిని తట్టుకుంటుంది (వానాకాలం & యాసంగి).'
      },
      paddy: {
        name: 'గంగ సుప్రీం గోల్డ్-99 హైబ్రిడ్ వరి',
        duration: '125 - 130 రోజులు',
        advice: 'ఎక్కువ పిలకలు (30-35) వేసే హైబ్రిడ్ వరి రకం, అగ్గి తెగులు మరియు BLB నిరోధకత.'
      },
      maize: {
        name: 'గంగ సూర్య మహాబలి హైబ్రిడ్ మొక్కజొన్న',
        duration: '110 - 120 రోజులు',
        advice: '4-5 సెం.మీ లోతులో తడి నేలలో విత్తుకోవాలి. మొలకెత్తిన 15-20 రోజులకు కత్తెర పురుగు నివారణకు కోరాజెన్ పిచికారీ చేయాలి.'
      },
      jowar: {
        name: 'గంగ మహావీర్ హైబ్రిడ్ తెల్ల జొన్నలు',
        duration: '105 - 115 రోజులు',
        advice: 'కరువును తట్టుకునే రకం. అధిక గింజ దిగుబడితో పాటు తీపి పశుగ్రాసం లభిస్తుంది. కాండం ఈగ నివారణకు విత్తన శుద్ధి అవసరం.'
      },
      bajra: {
        name: 'గంగ తేజస్వి హైబ్రిడ్ సజ్జలు',
        duration: '85 - 95 రోజులు',
        advice: '85-90 రోజుల్లో త్వరిత కోతకు వచ్చే మేలు రకం. సహజ ఐరన్, జింక్ పోషకాలు పుష్కలం. తేలికపాటి నేలలకు అనుకూలం.'
      },
      soybean: {
        name: 'గంగ శక్తి-335 అధిక దిగుబడి సోయాబీన్',
        duration: '90 - 98 రోజులు',
        advice: 'రైజోబియం మరియు ట్రైకోడెర్మాలతో విత్తన శుద్ధి చేయాలి. 45 సెం.మీ బోదెలపై విత్తుకుంటే నీరు నిలవకుండా కాయలు బాగా కాస్తాయి.'
      },
      mustard: {
        name: 'గంగ గోల్డ్ హైబ్రిడ్ ఆవాలు',
        duration: '105 - 115 రోజులు',
        advice: 'అక్టోబర్-నవంబర్ శీతాకాలంలో విత్తుకోవడానికి అనువైనది. కొమ్మలు తొడిగే దశలో (30 రోజులకు) మొదటి తడి తప్పనిసరి.'
      },
      redgram: {
        name: 'గంగ ప్రగతి హైబ్రిడ్ కంది',
        duration: '145 - 160 రోజులు',
        advice: 'రైజోబియంతో విత్తన శుద్ధి చేయాలి. తక్కువ నీటితో ఎర్ర నేలల్లో అత్యధిక దిగుబడిని ఇస్తుంది.'
      }
    },

    // 4. UNITS AND FORMATTING DICTIONARY
    units: {
      en: {
        grams: 'Grams',
        kg: 'kg',
        quintals: 'Quintals',
        qtlPerAcre: 'Qtl / Acre',
        approxPackets: 'approx. {count} Packet(s) / Bags'
      },
      te: {
        grams: 'గ్రాములు',
        kg: 'కిలోలు',
        quintals: 'క్వింటాళ్లు',
        qtlPerAcre: 'క్వింటాళ్లు / ఎకరానికి',
        approxPackets: 'సుమారు {count} ప్యాకెట్లు / బస్తాలు'
      }
    },

    // 5. DROPDOWN OPTIONS LABELS
    dropdowns: {
      areaUnits: {
        acres: { en: 'Acres', te: 'ఎకరాలు (Acres)' },
        guntas: { en: 'Guntas (40 Guntas = 1 Acre)', te: 'గుంటలు (40 గుంటలు = 1 ఎకరం)' },
        hectares: { en: 'Hectares', te: 'హెక్టార్లు (Hectares)' }
      },
      soilTypes: {
        black_cotton: { en: 'Black Cotton Soil', te: 'నల్లరేగడి నేల (Black Cotton Soil)' },
        red_loam: { en: 'Red Sandy Loam', te: 'ఎర్ర నేల (Red Sandy Loam)' },
        alluvial: { en: 'Clay / Alluvial Soil', te: 'వరి ఒండ్రు నేల (Clay / Alluvial Soil)' }
      },
      seasons: {
        kharif: { en: 'Kharif (Monsoon)', te: 'వానాకాలం (Kharif / Monsoon)' },
        rabi: { en: 'Rabi (Winter)', te: 'యాసంగి (Rabi / Winter)' },
        summer: { en: 'Summer / Zaid', te: 'వేసవి (Summer / Zaid)' }
      },
      compareOptgroups: {
        bonusPaddy: {
          en: '⭐ Telangana ₹500/Qtl Bonus Fine Paddy',
          te: '⭐ తెలంగాణ ₹500 బోనస్ వరి రకాలు (Bonus Fine Paddy)'
        },
        cereals: {
          en: '🌾 Hybrid Paddy, Maize & Cereals',
          te: '🌾 హైబ్రిడ్ వరి, మొక్కజొన్న & జొన్నలు (Cereals & Millets)'
        },
        oilseeds: {
          en: '🌱 Soybean & Oilseeds',
          te: '🌱 సోయాబీన్ & నూనెగింజలు (Soybean & Oilseeds)'
        }
      }
    },

    // 6. COMPARISON TABLE PARAMETERS & BADGES
    comparison: {
      en: {
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
      },
      te: {
        featureHeader: 'లక్షణాలు / వివరాలు',
        tgBonusScheme: 'ప్రభుత్వ బోనస్',
        cropDuration: 'పంట కాలం',
        yieldPotential: 'దిగుబడి సామర్థ్యం',
        germination: 'మొలక శాతం',
        seedRate: 'విత్తన మోతాదు',
        suitableSeason: 'అనువైన కాలం',
        grainQuality: 'గింజ నాణ్యత',
        grainDimensions: 'ధాన్యపు కొలతలు',
        diseaseResistance: 'తెగుళ్ల నిరోధకత',
        soilSuitability: 'నేల రకాలు',
        quickOrder: 'ఆర్డర్ / కొనుగోలు',
        bonusEligibleBadge: '₹500 బోనస్ అర్హత',
        standardMarketBadge: 'సాధారణ మార్కెట్',
        orderBtn: 'ఆర్డర్'
      }
    },

    // 7. TELANGANA ₹500 BONUS BANNER TEMPLATES
    bonusBanner: {
      en: {
        header: 'Telangana Govt ₹500/Qtl Sannalu Bonus Extra Income',
        subBadge: 'Extra Cash Incentive',
        note: 'This variety qualifies for ₹500/Qtl extra bonus over MSP. Ensure moisture is under 17% and register crop details with your local AEO.'
      },
      te: {
        header: 'తెలంగాణ ప్రభుత్వ ₹500/క్వింటాల్ బోనస్ అంచనా',
        subBadge: 'అదనపు నగదు ప్రోత్సాహకం',
        note: 'ఈ రకానికి ప్రభుత్వం క్వింటాలుకు ₹500 అదనపు బోనస్ ఇస్తుంది (ధాన్యం తేమ <17%, పొడవు <6mm, వెడల్పు <2mm). స్థానిక AEO ద్వారా డిజిటల్ పోర్టల్‌లో నమోదు చేసుకోండి.'
      }
    }
  };

  // Localized crop lookup helper
  GANGA_I18N.getCrop = function (item, lang) {
    if (!item) return item;
    if (lang === 'te' && GANGA_I18N.catalog[item.id]) {
      const teData = GANGA_I18N.catalog[item.id];
      return {
        ...item,
        name: teData.name || item.name,
        teluguName: teData.name || item.name,
        duration: teData.duration || item.duration,
        yieldPotential: teData.yieldPotential || item.yieldPotential,
        seedRate: teData.seedRate || item.seedRate,
        season: teData.season || item.season,
        grainType: teData.grainType || item.grainType,
        keyTrait: teData.keyTrait || item.keyTrait,
        soilSuitability: teData.soilSuitability || item.soilSuitability,
        bonusAmount: teData.bonusAmount || item.bonusAmount,
        grainDimensions: teData.grainDimensions || item.grainDimensions
      };
    }
    return item;
  };

  // Localized calculator crop lookup helper
  GANGA_I18N.getCalcCrop = function (cropKey, baseData, lang) {
    if (!baseData) return baseData;
    if (lang === 'te' && GANGA_I18N.calculator[cropKey]) {
      const teData = GANGA_I18N.calculator[cropKey];
      return {
        ...baseData,
        name: teData.name || baseData.name,
        duration: teData.duration || baseData.duration,
        advice: teData.advice || baseData.advice
      };
    }
    return baseData;
  };

  // Expose globally
  global.GANGA_I18N = GANGA_I18N;
  global.I18N = GANGA_I18N.ui; // Backwards compatibility for I18N.en / I18N.te
})(typeof window !== 'undefined' ? window : global);
