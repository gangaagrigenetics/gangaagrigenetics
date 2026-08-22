/**
 * GANGA AGRI GENETICS - CENTRAL LOCALIZATION DATA & ENGINE (i18n.js)
 * Master bilingual dictionary for English (EN) and Telugu (TE).
 * All UI labels, catalog metadata, calculator advice, units, dropdowns,
 * bonus templates, about/services text, crop calendar, reviews, store info,
 * and system notifications are 100% centralized in this single file.
 */
(function (global) {
  'use strict';

  const GANGA_I18N = {
    // 1. MASTER UI DICTIONARIES
    ui: {
      en: {
        // Language Toggle & Status Bar
        langLabel: 'తెలుగు',
        storeStatusChecking: 'Checking Hours...',
        storeOpen: 'STORE OPEN NOW (Closes {time})',
        storeClosed: 'STORE CLOSED (Opens 8:00 AM)',
        badgeOpen: 'OPEN NOW',
        badgeClosed: 'CLOSED NOW',

        // Navigation
        navHome: 'Home',
        navBonus: '₹500 Bonus Scheme',
        navProducts: 'Hybrid Seeds',
        navCalc: 'Yield Calculator',
        navAbout: 'R&D & About',
        navServices: 'Services',
        navCalendar: 'Crop Calendar',
        navReviews: 'Reviews (5.0★)',
        navGallery: 'Photo Gallery',
        navLocation: 'Store Location',
        navBookSeeds: 'Book Seeds',

        // Hero Section
        heroBadge: 'Certified Telangana Agricultural Seed Enterprise',
        heroTitlePrefix: 'High-Yielding',
        heroTitleHighlight: 'Hybrid Seeds',
        heroTitleSuffix: '& Agricultural Genetics',
        heroDesc: 'Engineered for maximum vigor, superior germination, and climate resilience. Ganga Agri Genetics delivers trusted hybrid paddy, maize, jowar, bajra, soybean, and oilseed varieties directly to farmers across Telangana and South India.',
        heroCtaExplore: 'Explore Seed Catalog',
        heroCtaCalc: 'Seed & Yield Calculator',
        heroCtaDirections: 'Get Directions (Shetpalle)',

        // Telangana ₹500 Bonus Scheme Section (#tg-bonus)
        tgBonusBadge: '🏛️ Telangana Govt Policy',
        tgBonusHeading: 'Telangana ₹500/Quintal Bonus on Fine-Grain Paddy (Sannalu)',
        tgBonusSubtitle: 'Official government incentive scheme for 2024-2025 Kharif & Rabi procurement seasons.',
        tgBonusHeroTitle: 'Telangana Govt ₹500/Qtl Procurement Bonus',
        tgBonusHeroDesc: 'The Government of Telangana provides an additional bonus of ₹500 per quintal over the standard MSP for 33 notified fine rice varieties.',
        tgCriteriaTitle: 'Government Quality & Moisture Criteria for ₹500 Bonus:',
        tgCrit1Title: 'Grain Length < 6.0 mm',
        tgCrit1Desc: 'Strictly slender fine rice size',
        tgCrit2Title: 'Grain Width < 2.0 mm',
        tgCrit2Desc: 'Fine grain caliper standard',
        tgCrit3Title: 'Moisture Below 17%',
        tgCrit3Desc: 'Sun-dried procurement grade',
        tgCrit4Title: 'Biometric AEO Portal Registration',
        tgCrit4Desc: 'Verified farmer land passbook entry',
        tgBonusBtnExplore: 'Explore Telangana Bonus Seeds (7)',
        tgBonusBtnCalc: 'Calculate Your Bonus Revenue',

        // Yield & Seed Rate Calculator (#calculator)
        calcBadge: '🌾 Smart Farm Planning',
        calcHeading: 'Interactive Seed Rate & Yield Calculator',
        calcSub: 'Calculate exact seed quantity needed for your land, recommended row spacing, and estimated harvest yield potential for Telangana farming conditions.',
        calcCropLabel: 'Select Crop & Hybrid Variety:',
        calcAcreageLabel: 'Land Area in Acres:',
        calcSoilLabel: 'Soil Type:',
        calcSoilRed: 'Red Sandy / Loamy Soil (Chalka / Red Soils)',
        calcSoilBlack: 'Black Cotton Soil (Heavy Black Regur Soils)',
        calcSoilClay: 'Clay / Heavy Loam Soil (Alluvial Clay Soils)',
        calcSeasonLabel: 'Cropping Season:',
        calcSeasonKharif: 'Kharif / Monsoon Season (June - October)',
        calcSeasonRabi: 'Rabi / Winter Season (November - March)',
        calcSeasonSummer: 'Summer / Zaid Season (February - May)',
        calcBonusHeading: 'Telangana ₹500/Qtl Bonus Estimate',
        calcBonusNotice: 'Based on Telangana Govt fine paddy bonus policy over standard MSP.',
        calcAdviceTitle: 'Agronomic Guidance:',
        calcResultsHeading: 'Estimated Farming Recommendations',
        calcSeedNeededLabel: 'Total Seed Required:',
        calcYieldPotentialLabel: 'Estimated Harvest Yield:',
        calcSpacingLabel: 'Recommended Row Spacing:',
        calcBonusEstLabel: 'Govt Bonus Revenue Potential:',
        calcBtnRecalc: 'Recalculate Recommendation',
        calcBtnPrint: 'Print / Save Agronomy Card',
        calcBtnOrder: 'Order This Seed Quantity via WhatsApp',

        // Hybrid Seed Catalog (#products)
        catalogBadge: '🌱 Certified Seed Inventory',
        catalogHeading: 'Our Premium Hybrid Seeds Catalog',
        catalogSub: 'Scientifically bred for exceptional vigor, disease tolerance, high milling recovery, and maximum market value.',
        catalogFilterAll: 'All Seeds',
        catalogFilterBonus: 'Telangana ₹500 Bonus Sannalu (7)',
        catalogFilterCereals: 'Cereals & Millets',
        catalogFilterOilseeds: 'Soybean & Oilseeds',
        catalogSearchPlaceholder: 'Search by crop, variety name, or trait (e.g. BLB, Mahabali, Paddy)...',
        catalogCtaTitle: 'Looking for Bulk Seed Dealership or Custom Foundation Seeds?',
        catalogCtaDesc: 'We supply registered seed distributors, FPOs, agro-retailers, and large contract farms with certified hybrid lots.',
        catalogCtaBtn: 'Inquire for Wholesale / Dealership',
        compareBtnText: 'Compare Varieties',
        orderViaWhatsApp: 'Order via WhatsApp',
        viewSpecs: 'View Specs',

        // About Ganga Agri Genetics (#about)
        aboutBadge: '🌱 Genetics & Innovation',
        aboutHeading: 'Pioneering Agricultural Genetics for Modern Farmers',
        aboutLead: 'Headquartered in Shetpalle, Telangana (503218), Ganga Agri Genetics is committed to bridging cutting-edge agricultural genetic science with practical farm profitability.',
        aboutDesc: 'From our indigenous germplasm collection to multi-location field trials across diverse agro-climatic zones of Telangana, Andhra Pradesh, and Karnataka, our hybrids are engineered to withstand biotic stress (pests, blight, viruses) and abiotic stress (drought, heat, soil salinity).',
        aboutCard1Title: 'State-of-the-Art R&D',
        aboutCard1Desc: 'Advanced hybridization plots and genetic screening for high grain weight and pest resistance.',
        aboutCard2Title: '100% Certified Quality',
        aboutCard2Desc: 'Compliant with Indian Minimum Seed Certification Standards (IMSCS) & ISTA testing protocols.',
        aboutCard3Title: 'Direct Farmer Support',
        aboutCard3Desc: 'Dedicated agronomy advisory guiding farmers from land prep to harvest management.',
        aboutBtnCenter: 'Visit Our Shetpalle Center',
        aboutBtnCall: 'Contact R&D Team',
        aboutLabOverlay: 'Shetpalle R&D Seed Quality & Germination Testing Lab',
        aboutQualityTitle: 'Our 4-Stage Quality Guarantee',
        aboutQualitySub: 'Every packet of Ganga Agri Genetics seed undergoes rigorous verification:',
        aboutQ1Title: 'Genetic Purity Testing',
        aboutQ1Desc: 'Grow-out tests (GOT) verify 99%+ true-to-type hybrid genetic purity.',
        aboutQ2Title: 'Laboratory Germination Vigor',
        aboutQ2Desc: 'Climate-chamber testing guarantees a minimum of 90-98% germination rate.',
        aboutQ3Title: 'Precision Seed Conditioning & Treatment',
        aboutQ3Desc: 'Protective bio-fungicide treatment shields young seedlings during initial germination.',
        aboutQ4Title: 'Moisture & Hermetic Packaging',
        aboutQ4Desc: 'Triple-layer moisture-proof packaging keeps seed vigor fresh for extended seasons.',
        statGerminationLabel: 'Average Lab Germination Rate',
        statFarmersLabel: 'Farmers Served in South India',
        statRatingLabel: 'Google Customer Rating',
        statVarietiesLabel: 'Certified Hybrid Varieties',

        // Services Section (#services)
        servicesBadge: '⚙️ End-to-End Solutions',
        servicesHeading: 'Agricultural Services & Farmer Programs',
        servicesSubtitle: 'Supporting farmers, distributors, and agri-entrepreneurs through full-cycle crop services.',
        service1Title: 'Hybrid Seed Multiplication',
        service1Desc: 'Specialized contract farming and foundation seed multiplication under expert supervision with full traceability and purity controls.',
        service2Title: 'Processing & Treatment',
        service2Desc: 'Modern seed processing plant equipped with gravity separators, air-screen cleaners, and automatic polymer seed coating.',
        service3Title: 'Agronomy Advisory Helpline',
        service3Desc: 'Direct access to our certified agronomists for personalized fertilizer schedules, pest diagnostic guidance, and irrigation advice.',
        service4Title: 'Wholesale & Dealership',
        service4Desc: 'Authorized dealership network supplying PACs, FPOs, and certified agricultural input retailers with marketing collateral and credit terms.',
        servicesCtaTitle: 'Need Expert Agronomic Guidance for Your Farm?',
        servicesCtaDesc: 'Our agricultural scientists are available on phone and WhatsApp to diagnose crop diseases, recommend seed varieties, and review soil test reports.',
        servicesCtaBtn: 'Consult Our Agronomist on WhatsApp',

        // Crop Calendar Section (#calendar)
        calendarBadge: '📅 Seasonal Agronomy',
        calendarHeading: 'Seasonal Crop & Sowing Calendar',
        calendarSubtitle: 'Plan your sowing schedule according to Telangana and South India agro-climatic seasons for maximum yields.',
        kharifTag: 'Monsoon Season',
        kharifTitle: 'Kharif Season (Monsoon)',
        kharifMonths: 'June – October',
        kharifDesc: 'Primary sowing season synchronized with the South-West Monsoon. Best for high-yield grains and commercial cash crops.',
        kharifPaddyLabel: 'Hybrid Paddy (BPT-5204, Telangana Sona, Supreme Gold)',
        kharifMaizeLabel: 'Hybrid Maize (Ganga Surya Mahabali)',
        kharifSoybeanLabel: 'High-Yield Soybean (Ganga Shakti-335)',
        rabiTag: 'Winter Season',
        rabiTitle: 'Rabi Season (Winter / Yasangi)',
        rabiMonths: 'November – March',
        rabiDesc: 'Cool, dry winter cropping season utilizing post-monsoon residual soil moisture and assured borewell irrigation.',
        rabiPaddyLabel: 'Yasangi Paddy (Telangana Sona RNR-15048, KNM-118, KNM-7715)',
        rabiMaizeLabel: 'Rabi Hybrid Maize (High Cob Weight)',
        rabiMustardLabel: 'Ganga Gold Mustard (Short Duration)',
        summerTag: 'Summer Crop',
        summerTitle: 'Zaid / Summer Season',
        summerMonths: 'February – May',
        summerDesc: 'Short-duration cropping window best suited for early-maturing hybrid millets and summer sesame with irrigation.',
        summerBajraLabel: 'Hybrid Bajra / Pearl Millet (Ganga Tejasvi)',
        summerJowarLabel: 'Fodder & Grain Jowar (Ganga Mahaveer)',

        // Reviews Section (#reviews)
        reviewsBadge: '⭐ Verified Customer Feedback',
        reviewsHeading: 'Trusted by Farmers Across the Region',
        reviewsSubtitle: 'See why farmers and agro-dealers consistently rate Ganga Agri Genetics 5.0 out of 5 stars on Google.',
        revRatingLabel: 'Overall Customer Satisfaction',
        revVerifiedLabel: 'Verified Telangana Seed Store',
        rev1Text: 'Planted Ganga BPT-5204 fine paddy in 5 acres. The germination was 98% and every panicle had heavy grain filling. We got top market price plus the ₹500 Telangana government bonus!',
        rev1Author: '— Rajender Reddy',
        rev1Village: 'Farmer, Nizamabad District',
        rev2Text: 'Ganga Surya Maize gave us 42 quintals per acre in Yasangi season. Zero lodging and excellent cob weight. The agronomists at Shetpalle gave great nutrient advice.',
        rev2Author: '— M. Ramesh',
        rev2Village: 'Commercial Farmer, Kamareddy',
        rev3Text: 'Best seed store in Telangana. Genuine certified bags, accurate seed rates, and helpful staff. Ganga Shakti Soybean had very dense pod clusters with no shattering.',
        rev3Author: '— Srinivas Rao',
        rev3Village: 'Progressive Farmer, Jagtial',
        rev4Text: 'Cultivated KNM 1638 Kunaram Sannalu on 6 acres. Excellent resistance to Bacterial Leaf Blight and BPH with 35 quintals per acre yield and ₹500 government bonus incentive!',
        rev4Author: '— Venkatesh Goud',
        rev4Village: 'Progressive Farmer, Armoor',
        rev5Text: 'Purchased Ganga Hybrid Bajra and Maize seeds for summer cultivation. Fast germination within 3 days and drought-hardy growth with high fodder yield.',
        rev5Author: '— Mallikarjun Rao',
        rev5Village: 'Farmer, Balkonda Mandal',
        reviewsBtnGoogle: 'Read All Google Reviews',
        reviewsBtnWrite: 'Write a Review on Google',

        // Calculator Soil & Season Dynamic Advisories
        soilAdviceBlackCotton: '🌱 Soil Note: Black cotton soil has high moisture retention. Ensure proper furrow drainage to prevent root waterlogging.',
        soilAdviceRedLoam: '🌱 Soil Note: Red sandy loam provides excellent aeration. Apply frequent light irrigations and organic compost for optimal root vigor.',
        soilAdviceAlluvial: '🌱 Soil Note: Alluvial clay soil is rich in nutrients. Maintain puddled conditions for paddy or raised beds for maize & pulses.',
        seasonAdviceKharif: '☀️ Season Note: Kharif sowing (June–July) is optimal for main crop season. Monitor early for stem borer and blast during monsoons.',
        seasonAdviceRabi: '☀️ Season Note: Rabi / Yasangi sowing (Oct–Nov) benefits from high solar radiation. Ensure timely cold-water irrigation intervals.',
        seasonAdviceSummer: '☀️ Season Note: Summer / Zaid sowing (Feb–Mar) requires strict irrigation intervals (every 4–6 days) and drought-hardy hybrids.',

        // Photo Gallery Section (#gallery)
        galleryBadge: '📸 Field & Research Gallery',
        galleryHeading: 'Moments from Our Fields & Research Lab',
        gallerySub: 'Visual highlights of our hybrid seed trial plots, seed germination quality testing in Shetpalle, and flourishing harvests across Telangana.',
        galleryViewFull: 'View Photo',
        galleryClose: 'Close',

        // Store Location Section (#location)
        locationBadge: '📍 Retail Outlet & Seed Hub',
        locationHeading: 'Visit Our Agricultural Seed Store',
        locationSubtitle: 'Centrally located in Shetpalle, Telangana. Drop in for direct seed purchase, seed germination testing, or consultation.',
        locCardTitle: 'Shetpalle Outlet & Office',
        locAddressLabel: 'Address:',
        locAddressVal: 'VCJF+5X7, Shetpalle, Telangana 503218, India',
        locPhoneLabel: 'Phone Contact:',
        locEmailLabel: 'Email:',
        locHoursLabel: 'Operating Hours:',
        locHoursWeekdays: 'Mon – Sat: 8:00 AM – 7:30 PM',
        locHoursSunday: 'Sunday: 8:30 AM – 1:30 PM',
        locBtnDirections: 'Get Directions on Google Maps',
        locBtnCall: 'Call Store: +91 70131 35345',
        locMapBadge: 'Verified Google Maps Location (Plus Code: VCJF+5X7)',

        // Newsletter Section (#newsletter)
        newsBadge: '📢 Agriculture Updates',
        newsHeading: 'Stay Ahead with Telangana Agriculture Alerts & Schemes',
        newsSubtitle: 'Subscribe to get official notifications on the ₹500 fine-grain bonus scheme, weather forecasts, seed availability, and scientific agronomy tips.',
        newsPerk1: 'Telangana Govt ₹500/Quintal Sannalu Bonus updates',
        newsPerk2: 'Direct Seed Availability & Dealership Notifications',
        newsPerk3: 'Seasonal Sowing & Pest Diagnostic Bulletins',
        newsContactLabel: 'Email Address or WhatsApp Number <span class="req-star">*</span>',
        newsInputPlaceholder: 'Enter Email or WhatsApp Number (e.g. 98480xxxxx)',
        newsBtnSubscribe: 'Subscribe for Free Updates',
        newsSuccessTitle: 'Thank You for Subscribing!',
        newsSuccessDesc: 'You will now receive official Telangana agricultural scheme alerts, ₹500 bonus updates, and seed notifications from Ganga Agri Genetics.',
        newsBtnReset: 'Subscribe Another Number',

        // Booking & Contact Section (#contact)
        contactBadge: '📞 Get In Touch',
        contactHeading: 'Book Seeds or Send an Inquiry',
        contactSubtitle: 'Fill in your requirements below for instant WhatsApp order processing, seed availability status, or agronomic support.',
        contactNameLabel: 'Full Name / Farmer Name <span class="req-star">*</span>',
        contactNamePlaceholder: 'e.g. Rajender Reddy',
        contactPhoneLabel: 'Mobile Number (WhatsApp) <span class="req-star">*</span>',
        contactPhonePlaceholder: 'e.g. 98480 12345',
        contactVillageLabel: 'Village / Mandal / Town <span class="req-star">*</span>',
        contactVillagePlaceholder: 'e.g. Shetpalle, Nizamabad',
        contactCropLabel: 'Crop Variety of Interest <span class="req-star">*</span>',
        contactCropPlaceholder: '-- Choose Crop Variety --',
        contactAcreageLabel: 'Total Cultivation Area (Acres)',
        contactNotesLabel: 'Additional Inquiries / Sowing Plan',
        contactNotesPlaceholder: 'Tell us about your soil type, sowing month, or specific seed requirements...',
        contactBtnSubmit: 'Submit Inquiry',
        contactHelpText: 'Your inquiry will be formatted and opened directly in WhatsApp for instant assistance by our Shetpalle seed team.',
        errRequiredName: 'Please enter your full name',
        errRequiredPhone: 'Please enter a valid 10-digit mobile number',
        errRequiredVillage: 'Please enter your village, mandal, or town',
        errRequiredCrop: 'Please select a crop variety from the list',
        errRequiredNews: 'Please enter a valid email address or 10-digit mobile number',
        errFormSummary: 'Please correct the highlighted fields before submitting.',
        errValidLandArea: 'Please enter a valid land area greater than 0',

        // Footer Section
        footerBio: 'Ganga Agri Genetics is a premier agricultural seed breeding, production, and retail enterprise based in Shetpalle, Telangana. Committed to empowering farmers with high-yielding genetic hybrids.',
        footerVerified: 'Google Verified Agricultural Store (5.0★)',
        footerConnect: 'Connect with Us:',
        footerQuickLinks: 'Quick Links',
        footerSeedVarieties: 'Hybrid Seed Varieties',
        footerStoreOutlet: 'Store & Outlet',
        footerCopyright: '© 2026 Ganga Agri Genetics. All rights reserved. Dedicated to farmer prosperity across Telangana and India.',
        footerPrivacy: 'Privacy Policy',
        footerTerms: 'Terms of Service',
        footerSitemap: 'Sitemap',

        // Comparison Modal Dialog
        compareModalHeading: 'Compare Seed Varieties',
        compareModalSubtitle: 'Select any two seed varieties to evaluate crop duration, yield potential, germination, and disease resistance traits.',
        compareLabelA: 'Select Variety 1:',
        compareLabelB: 'Select Variety 2:',
        compareTableHeaderParam: 'Parameter',
        compareTableHeaderA: 'Variety 1',
        compareTableHeaderB: 'Variety 2',
        compareInquireBtn: 'Inquire for Seeds',
        compareCloseBtn: 'Close',

        // Product Spec Dialog
        specModalDurationLabel: 'Crop Duration:',
        specModalYieldLabel: 'Yield Potential:',
        specModalGerminationLabel: 'Lab Germination Rate:',
        specModalGrainLabel: 'Grain / Cob Type:',
        specModalResistanceLabel: 'Pest & Disease Resistance:',
        specModalSeasonLabel: 'Recommended Sowing Season:',
        specModalSoilLabel: 'Soil Suitability:',
        specModalSeedRateLabel: 'Seed Rate Per Acre:',
        specModalBonusAlert: 'Eligible for Telangana Govt ₹500/Qtl Bonus',
        specModalSowingTitle: 'Sowing & Cultivation Guide:',
        specModalOrderBtn: 'Order This Variety on WhatsApp',
        specModalCompareBtn: 'Compare Variety',
        specModalCloseBtn: 'Close',

        // Toast Messages
        toastLangSwitched: 'Language switched to English',
        toastAddressCopied: 'Store Address copied to clipboard!',
        toastFillRequired: 'Please fill all required fields (*)',
        toastFillBookingDetails: 'Please fill Name, Phone, Village and Crop Variety to send WhatsApp message',
        toastEnterEmailOrPhone: 'Please enter your email address or WhatsApp number',
        toastNewsletterSuccess: 'Successfully subscribed to Ganga Agri Genetics Updates!'
      },

      te: {
        // Language Toggle & Status Bar
        langLabel: 'English',
        storeStatusChecking: 'సమయం తనిఖీ చేస్తోంది...',
        storeOpen: 'దుకాణం తెరిచి ఉంది ({time} వరకు)',
        storeClosed: 'దుకాణం మూసివేయబడింది (ఉదయం 8:00 కి తెరుస్తారు)',
        badgeOpen: 'తెరిచి ఉంది',
        badgeClosed: 'మూసివేయబడింది',

        // Navigation
        navHome: 'హోమ్',
        navBonus: '₹500 బోనస్ పథకం',
        navProducts: 'హైబ్రిడ్ విత్తనాలు',
        navCalc: 'దిగుబడి కాలిక్యులేటర్',
        navAbout: 'పరిశోధన & వివరాలు',
        navServices: 'సేవలు',
        navCalendar: 'పంటల క్యాలెండర్',
        navReviews: 'రైతుల సమీక్షలు (5.0★)',
        navGallery: 'ఫోటో గ్యాలరీ',
        navLocation: 'దుకాణం చిరునామా',
        navBookSeeds: 'విత్తనాలు బుక్ చేయండి',

        // Hero Section
        heroBadge: 'తెలంగాణ ధ్రువీకృత వ్యవసాయ విత్తన సంస్థ',
        heroTitlePrefix: 'అధిక దిగుబడినిచ్చే',
        heroTitleHighlight: 'హైబ్రిడ్ విత్తనాలు',
        heroTitleSuffix: '& వ్యవసాయ జెనెటిక్స్',
        heroDesc: 'అధిక మొలక శాతం, అత్యధిక దిగుబడి, మరియు తెగుళ్లను తట్టుకునే శక్తి కలిగిన గంగ అగ్రి జెనెటిక్స్ హైబ్రిడ్ వరి, మొక్కజొన్న, జొన్నలు, సజ్జలు, సోయాబీన్, మరియు నూనెగింజల విత్తనాలు తెలంగాణ రైతులకు నేరుగా లభించును.',
        heroCtaExplore: 'విత్తనాల వివరాలు చూడండి',
        heroCtaCalc: 'దిగుబడి కాలిక్యులేటర్',
        heroCtaDirections: 'రూట్ మ్యాప్ (షెట్పల్లె)',

        // Telangana ₹500 Bonus Scheme Section (#tg-bonus)
        tgBonusBadge: '🏛️ తెలంగాణ ప్రభుత్వ విధానం',
        tgBonusHeading: 'సన్న వరి ధాన్యానికి క్వింటాలుకు ₹500 తెలంగాణ ప్రభుత్వ బోనస్',
        tgBonusSubtitle: '2024-2025 ఖరీఫ్ & రబీ సీజన్ల కోసం తెలంగాణ ప్రభుత్వ అధికారిక ప్రోత్సాహక పథకం.',
        tgBonusHeroTitle: 'తెలంగాణ ప్రభుత్వ ₹500/క్వింటాల్ సేకరణ బోనస్',
        tgBonusHeroDesc: 'తెలంగాణ ప్రభుత్వం 33 నోటిఫైడ్ సన్న రకాలకు సాధారణ మద్దతు ధర (MSP) కి అదనంగా క్వింటాలుకు ₹500 బోనస్ అందిస్తోంది.',
        tgCriteriaTitle: '₹500 బోనస్ కోసం ప్రభుత్వ నాణ్యత మరియు తేమ నిబంధనలు:',
        tgCrit1Title: 'గింజ పొడవు < 6.0 మి.మీ',
        tgCrit1Desc: 'సన్న బియ్యం పరిమాణ ప్రమాణం',
        tgCrit2Title: 'గింజ వెడల్పు < 2.0 మి.మీ',
        tgCrit2Desc: 'సన్నపు నాణ్యతా ప్రమాణం',
        tgCrit3Title: 'తేమ 17% కంటే తక్కువ',
        tgCrit3Desc: 'సేకరణకు సిద్ధంగా ఉన్న గ్రేడ్',
        tgCrit4Title: 'AEO పోర్టల్‌లో బయోమెట్రిక్ నమోదు',
        tgCrit4Desc: 'ధ్రువీకరించబడిన పట్టాదారు పాస్‌బుక్ నమోదు',
        tgBonusBtnExplore: 'తెలంగాణ బోనస్ విత్తనాలు చూడండి (7)',
        tgBonusBtnCalc: 'మీ బోనస్ ఆదాయాన్ని లెక్కించండి',

        // Yield & Seed Rate Calculator (#calculator)
        calcBadge: '🌾 స్మార్ట్ వ్యవసాయ ప్రణాళిక',
        calcHeading: 'స్మార్ట్ విత్తన మోతాదు & దిగుబడి కాలిక్యులేటర్',
        calcSub: 'మీ పొలానికి కావలసిన ఖచ్చితమైన విత్తన పరిమాణం, మొక్కల మధ్య దూరం మరియు ఆశించిన దిగుబడిని తెలంగాణ నేలల ప్రకారం సులభంగా లెక్కించండి.',
        calcCropLabel: 'పంట & హైబ్రిడ్ రకాన్ని ఎంచుకోండి:',
        calcAcreageLabel: 'సాగు భూమి (ఎకరాలలో):',
        calcSoilLabel: 'నేల రకం:',
        calcSoilRed: 'ఎర్ర నేలలు / చల్క నేలలు',
        calcSoilBlack: 'నల్ల రేగడి నేలలు',
        calcSoilClay: 'బంకమట్టి / ఒండ్రు నేలలు',
        calcSeasonLabel: 'పంట కాలం:',
        calcSeasonKharif: 'ఖరీఫ్ / వానాకాలం (జూన్ - అక్టోబర్)',
        calcSeasonRabi: 'రబీ / యాసంగి (నవంబర్ - మార్చి)',
        calcSeasonSummer: 'వేసవి / జైద్ (ఫిబ్రవరి - మే)',
        calcBonusHeading: 'తెలంగాణ ₹500/క్వింటాల్ బోనస్ అంచనా',
        calcBonusNotice: 'తెలంగాణ ప్రభుత్వ సన్న వరి ధాన్యపు బోనస్ నిబంధనల ప్రకారం లెక్కింపు.',
        calcAdviceTitle: 'శాస్త్రీయ సాగు సూచనలు:',
        calcResultsHeading: 'అంచనా వేసిన సాగు సిఫార్సులు',
        calcSeedNeededLabel: 'కావలసిన మొత్తం విత్తనాలు:',
        calcYieldPotentialLabel: 'ఆశించిన పంట దిగుబడి:',
        calcSpacingLabel: 'సిఫార్సు చేసిన వరుసల దూరం:',
        calcBonusEstLabel: 'ప్రభుత్వ బోనస్ ద్వారా అదనపు ఆదాయం:',
        calcBtnRecalc: 'మరలా లెక్కించండి',
        calcBtnPrint: 'వివరాలు ప్రింట్ / సేవ్ చేయండి',
        calcBtnOrder: 'వాట్సాప్ ద్వారా విత్తనాలు ఆర్డర్ చేయండి',

        // Hybrid Seed Catalog (#products)
        catalogBadge: '🌱 ధ్రువీకృత విత్తన జాబితా',
        catalogHeading: 'మా ప్రామాణిక హైబ్రిడ్ విత్తనాల కేటలాగ్',
        catalogSub: 'శాస్త్రీయంగా అభివృద్ధి చేసిన మేలు రకపు హైబ్రిడ్ విత్తనాలు - అధిక దిగుబడి, వ్యాధి నిరోధకత మరియు అధిక మార్కెట్ ధర.',
        catalogFilterAll: 'అన్ని విత్తనాలు',
        catalogFilterBonus: 'తెలంగాణ ₹500 బోనస్ సన్నాలు (7)',
        catalogFilterCereals: 'ధాన్యాలు & మిల్లెట్స్',
        catalogFilterOilseeds: 'సోయాబీన్ & నూనెగింజలు',
        catalogSearchPlaceholder: 'పంట పేరు, రకం లేదా తెగులు పేరుతో శోధించండి (ఉదా: వరి, మహాబలి, BLB)...',
        catalogCtaTitle: 'హోల్‌సేల్ డీలర్‌షిప్ లేదా ఫౌండేషన్ విత్తనాలు కావాలా?',
        catalogCtaDesc: 'మేము రిజిస్టర్డ్ డీలర్లు, FPOలు మరియు రైతు సంఘాలకు నేరుగా సర్టిఫైడ్ సీడ్ లాట్లను సరఫరా చేస్తాము.',
        catalogCtaBtn: 'హోల్‌సేల్ / డీలర్‌షిప్ వివరాల కోసం సంప్రదించండి',
        compareBtnText: 'విత్తన రకాలను పోల్చండి',
        orderViaWhatsApp: 'వాట్సాప్‌లో ఆర్డర్ చేయండి',
        viewSpecs: 'వివరాలు చూడండి',

        // About Ganga Agri Genetics (#about)
        aboutBadge: '🌱 పరిశోధన & ఆవిష్కరణ',
        aboutHeading: 'ఆధునిక రైతుల కోసం అత్యుత్తమ విత్తన సాంకేతికత',
        aboutLead: 'షెట్పల్లె (తెలంగాణ) కేంద్రంగా పనిచేస్తున్న గంగ అగ్రి జెనెటిక్స్, అత్యాధునిక జన్యు శాస్త్రాన్ని రైతు లాభదాయకతతో అనుసంధానించడానికి కట్టుబడి ఉంది.',
        aboutDesc: 'తెలంగాణ, ఆంధ్రప్రదేశ్ మరియు కర్ణాటక రాష్ట్రాల వివిధ వాతావరణ పరిస్థితులలో విస్తృతంగా క్షేత్ర పరిశోధనలు నిర్వహించి, పురుగులు, తెగుళ్లు మరియు వర్షాభావ పరిస్థితులను తట్టుకునే మేలు రకపు హైబ్రిడ్ విత్తనాలను రైతులకు అందిస్తున్నాము.',
        aboutCard1Title: 'అధునాతన పరిశోధనా ల్యాబ్',
        aboutCard1Desc: 'అధిక గింజ బరువు, గింజ నాణ్యత మరియు తెగుళ్ల నిరోధకత కోసం నిరంతర పరిశోధనలు.',
        aboutCard2Title: '100% ధ్రువీకృత నాణ్యత',
        aboutCard2Desc: 'భారతీయ విత్తన ధ్రువీకరణ ప్రమాణాలు (IMSCS) మరియు ISTA పరీక్షల ప్రకారం నాణ్యత.',
        aboutCard3Title: 'రైతులకు ప్రత్యక్ష సేవలు',
        aboutCard3Desc: 'విత్తన మోతాదు, ఎరువుల యాజమాన్యం మరియు పంట రక్షణపై శాస్త్రవేత్తల నిరంతర సలహాలు.',
        aboutBtnCenter: 'మా షెట్పల్లె కేంద్రాన్ని సందర్శించండి',
        aboutBtnCall: 'పరిశోధనా బృందాన్ని సంప్రదించండి',
        aboutLabOverlay: 'షెట్పల్లె R&D విత్తన నాణ్యత & మొలక శాతం పరీక్షా ల్యాబ్',
        aboutQualityTitle: 'మా 4-దశల నాణ్యతా హామీ',
        aboutQualitySub: 'గంగ అగ్రి జెనెటిక్స్ అందించే ప్రతి విత్తన ప్యాకెట్ కఠిన నాణ్యతా పరీక్షలకు లోనవుతుంది:',
        aboutQ1Title: 'జన్యు స్వచ్ఛత పరీక్షలు (GOT)',
        aboutQ1Desc: '99%+ జన్యు స్వచ్ఛతను నిర్ధారించే గ్రో-అవుట్ పరీక్షలు.',
        aboutQ2Title: 'ల్యాబ్ మొలక శాతం నిర్ధారణ',
        aboutQ2Desc: 'క్లైమేట్ ఛాంబర్లలో పరీక్షించి 90-98% ఖచ్చితమైన మొలక శాతం హామీ.',
        aboutQ3Title: 'శాస్త్రీయ విత్తన శుద్ధి & చికిత్స',
        aboutQ3Desc: 'మొలక దశలో చీడపీడల నుంచి రక్షించే బయో-శిలీంద్రనాశక శుద్ధి.',
        aboutQ4Title: 'తేమ రహిత సీల్డ్ ప్యాకింగ్',
        aboutQ4Desc: 'దీర్ఘకాలం విత్తన జీవశక్తిని కాపాడే నాణ్యమైన త్రివిధ ప్యాకింగ్.',
        statGerminationLabel: 'సగటు ల్యాబ్ మొలక శాతం',
        statFarmersLabel: 'సేవలు పొందిన దక్షిణ భారత రైతులు',
        statRatingLabel: 'గూగుల్ కస్టమర్ రేటింగ్',
        statVarietiesLabel: 'ధ్రువీకృత హైబ్రిడ్ విత్తన రకాలు',

        // Services Section (#services)
        servicesBadge: '⚙️ సమగ్ర వ్యవసాయ సేవలు',
        servicesHeading: 'రైతు సేవలు & వ్యవసాయ కార్యక్రమాలు',
        servicesSubtitle: 'రైతులు, డీలర్లు మరియు వ్యవసాయదారులకు సమగ్ర తోడ్పాటు.',
        service1Title: 'హైబ్రిడ్ విత్తన ఉత్పత్తి',
        service1Desc: 'నిపుణుల పర్యవేక్షణలో నాణ్యమైన ఫౌండేషన్ విత్తనోత్పత్తి, పూర్తి స్వచ్ఛత మరియు కాంట్రాక్ట్ సాగు విధానం.',
        service2Title: 'విత్తన శుద్ధి & ప్యాకింగ్',
        service2Desc: 'గ్రావిటీ సెపరేటర్లు, ఎయిర్ క్లీనర్లు మరియు పాలీమర్ సీడ్ కోటింగ్‌తో కూడిన ఆధునిక ప్రాసెసింగ్ ప్లాంట్.',
        service3Title: 'వ్యవసాయ సలహా కేంద్రం',
        service3Desc: 'ఎరువుల యాజమాన్యం, పురుగుల నివారణ మరియు నీటి పారుదలపై శాస్త్రవేత్తల ఉచిత ఫోన్ & వాట్సాప్ సలహాలు.',
        service4Title: 'హోల్‌సేల్ & డీలర్‌షిప్ నెట్‌వర్క్',
        service4Desc: 'సహకార సంఘాలు, FPOలు మరియు ఎరువుల దుకాణాలకు అధికారిక డీలర్‌షిప్ మరియు హోల్‌సేల్ విత్తన పంపిణీ.',
        servicesCtaTitle: 'మీ పంటకు నిపుణుల సలహా కావాలా?',
        servicesCtaDesc: 'పంట తెగుళ్ల నివారణ, విత్తన ఎంపిక మరియు నేల పరీక్షల సూచనల కోసం మా వ్యవసాయ శాస్త్రవేత్తలను నేరుగా సంప్రదించండి.',
        servicesCtaBtn: 'వాట్సాప్‌లో శాస్త్రవేత్తతో మాట్లాడండి',

        // Crop Calendar Section (#calendar)
        calendarBadge: '📅 పంటల కాలపట్టిక',
        calendarHeading: 'తెలంగాణ పంటల సాగు కాలపట్టిక',
        calendarSubtitle: 'అత్యధిక దిగుబడి కోసం తెలంగాణ వాతావరణానికి అనువైన విత్తే సమయాలు.',
        kharifTag: 'వానాకాలం',
        kharifTitle: 'ఖరీఫ్ (వానాకాలం) సీజన్',
        kharifMonths: 'జూన్ – అక్టోబర్',
        kharifDesc: 'నైరుతి రుతుపవనాలతో ప్రారంభమయ్యే ప్రధాన పంట కాలం. అధిక దిగుబడి ధాన్యాలు మరియు వాణిజ్య పంటలకు అనుకూలం.',
        kharifPaddyLabel: 'హైబ్రిడ్ వరి (BPT-5204, తెలంగాణ సోనా, సుప్రీం గోల్డ్)',
        kharifMaizeLabel: 'హైబ్రిడ్ మొక్కజొన్న (గంగ సూర్య మహాబలి)',
        kharifSoybeanLabel: 'అధిక దిగుబడి సోయాబీన్ (గంగ శక్తి-335)',
        rabiTag: 'యాసంగి (రబీ)',
        rabiTitle: 'రబీ / యాసంగి (శీతాకాలం)',
        rabiMonths: 'నవంబర్ – మార్చి',
        rabiDesc: 'చల్లని శీతాకాల పంట కాలం. బోరు బావుల కింద మరియు రక్షిత నీటితో సాగుకు అత్యంత అనుకూలం.',
        rabiPaddyLabel: 'యాసంగి వరి (తెలంగాణ సోనా RNR-15048, KNM-118, KNM-7715)',
        rabiMaizeLabel: 'యాసంగి హైబ్రిడ్ మొక్కజొన్న (అధిక కంకి బరువు)',
        rabiMustardLabel: 'గంగ గోల్డ్ ఆవాలు (స్వల్పకాలిక రకం)',
        summerTag: 'వేసవి కాలం',
        summerTitle: 'వేసవి / జైద్ సీజన్',
        summerMonths: 'ఫిబ్రవరి – మే',
        summerDesc: 'స్వల్పకాలిక సజ్జలు, నువ్వులు మరియు వేసవి పంటలకు అనువైన తక్కువ కాలపరిమితి సాగు సమయం.',
        summerBajraLabel: 'హైబ్రిడ్ సజ్జలు (గంగ తేజస్వి)',
        summerJowarLabel: 'పశుగ్రాసం & గింజ జొన్నలు (గంగ మహావీర్)',

        // Reviews Section (#reviews)
        reviewsBadge: '⭐ రైతుల నిజమైన సమీక్షలు',
        reviewsHeading: 'తెలంగాణ రైతుల అచంచల నమ్మకం',
        reviewsSubtitle: 'రైతులు గంగ అగ్రి జెనెటిక్స్‌కు గూగుల్‌లో 5.0 స్టార్ల రేటింగ్ ఎందుకు ఇస్తున్నారో చూడండి.',
        revRatingLabel: 'రైతుల సంతృప్తి స్థాయి',
        revVerifiedLabel: 'ధ్రువీకృత తెలంగాణ విత్తన కేంద్రం',
        rev1Text: '5 ఎకరాల్లో గంగ BPT-5204 సన్నాలు వేశాను. 98% మొలక శాతం వచ్చింది, కంకి బరువుగా నిండింది. మార్కెట్లో మంచి ధరతో పాటు ₹500 బోనస్ కూడా అందింది!',
        rev1Author: '— రాజేందర్ రెడ్డి',
        rev1Village: 'రైతు, నిజామాబాద్ జిల్లా',
        rev2Text: 'యాసంగిలో గంగ సూర్య మొక్కజొన్న ఎకరానికి 42 క్వింటాళ్ల దిగుబడి ఇచ్చింది. కంకి బరువు బాగుంది. షెట్పల్లె ల్యాబ్ వారి సలహాలు ఎంతో ఉపయోగపడ్డాయి.',
        rev2Author: '— ఎం. రమేష్',
        rev2Village: 'రైతు, కామారెడ్డి',
        rev3Text: 'తెలంగాణలో అత్యుత్తమ విత్తన సంస్థ. నాణ్యమైన సర్టిఫైడ్ బస్తాలు. గంగ శక్తి సోయాబీన్ పంటలో కాయలు గుత్తులుగా కాసి రాలకుండా మంచి దిగుబడి వచ్చింది.',
        rev3Author: '— శ్రీనివాస్ రావు',
        rev3Village: 'రైతు, జగిత్యాల',
        rev4Text: '6 ఎకరాల్లో KNM 1638 కునారం సన్నాలు సాగు చేశాను. ఎండ్ర తెగులు రాలేదు, ఎకరానికి 35 క్వింటాళ్ల దిగుబడితో పాటు ప్రభుత్వ ₹500 బోనస్ పొందాము!',
        rev4Author: '— వెంకటేష్ గౌడ్',
        rev4Village: 'రైతు, ఆర్మూర్',
        rev5Text: 'వేసవి సాగు కోసం గంగ హైబ్రిడ్ సజ్జ మరియు మొక్కజొన్న విత్తనాలు తీసుకున్నాను. 3 రోజుల్లోనే చక్కగా మొలకెత్తి, బెట్టను తట్టుకుని మంచి మేత మరియు గింజ దిగుబడినిచ్చింది.',
        rev5Author: '— మల్లికార్జున రావు',
        rev5Village: 'రైతు, బాల్కొండ మండలం',
        reviewsBtnGoogle: 'గూగుల్ సమీక్షలు అన్నీ చూడండి',
        reviewsBtnWrite: 'గూగుల్‌లో సమీక్ష రాయండి',

        // Calculator Soil & Season Dynamic Advisories
        soilAdviceBlackCotton: '🌱 నేల సూచన: నల్లరేగడి నేలల్లో తేమ నిల్వ సామర్థ్యం ఎక్కువ. వేరు కుళ్లు రాకుండా సాళ్ల ద్వారా నీటి పారుదల కల్పించండి.',
        soilAdviceRedLoam: '🌱 నేల సూచన: ఎర్ర చెలక నేలల్లో వేరు ఎదుగుదల బాగుంటుంది. తేలికపాటి తడులు మరియు సేంద్రీయ ఎరువులు వేయడం మంచిది.',
        soilAdviceAlluvial: '🌱 నేల సూచన: వరిమడి / ఒండ్రు నేలలు పోషకాలతో కూడి ఉంటాయి. వరి కోసం బురద మడి లేదా మొక్కజొన్న కోసం ఎత్తైన గట్లు అనుకూలం.',
        seasonAdviceKharif: '☀️ సీజన్ సూచన: ఖరీఫ్ సాగు (జూన్-జూలై) ప్రధాన పంట కాలం. తొలకరి వర్షాల్లో కాండం తొలిచే పురుగుపై నిఘా ఉంచండి.',
        seasonAdviceRabi: '☀️ సీజన్ సూచన: రబీ / యాసంగి (అక్టోబర్-నవంబర్) అధిక సూర్యరశ్మితో గింజ బరువు పెరుగుతుంది. చలి తీవ్రతను తట్టుకునేలా తడులు ఇవ్వండి.',
        seasonAdviceSummer: '☀️ సీజన్ సూచన: వేసవి / జాయెద్ (ఫిబ్రవరి-మార్చి) 4-6 రోజుల వ్యవధిలో తప్పనిసరిగా తడులు ఇవ్వాలి. ఎండను తట్టుకునే రకాలు మేలు.',

        // Photo Gallery Section (#gallery)
        galleryBadge: '📸 ఫోటో గ్యాలరీ',
        galleryHeading: 'మా పరిశోధనా క్షేత్రాలు & నాణ్యతా ల్యాబ్ దృశ్యాలు',
        gallerySub: 'షెట్పల్లె నాణ్యతా ల్యాబ్, తెలంగాణలోని హైబ్రిడ్ ప్రయోగాత్మక క్షేత్రాలు మరియు రైతుల అధిక దిగుబడి పంటల ప్రత్యక్ష చిత్రాలు.',
        galleryViewFull: 'ఫోటో చూడండి',
        galleryClose: 'మూసివేయి',

        // Store Location Section (#location)
        locationBadge: '📍 ప్రధాన విక్రయ కేంద్రం & ల్యాబ్',
        locationHeading: 'మా విత్తన కేంద్రాన్ని సందర్శించండి',
        locationSubtitle: 'షెట్పల్లె, తెలంగాణలో కలదు. విత్తనాల కొనుగోలు, మొలక పరీక్షలు మరియు సలహాల కోసం రండి.',
        locCardTitle: 'షెట్పల్లె ప్రధాన కార్యాలయం & విక్రయ కేంద్రం',
        locAddressLabel: 'చిరునామా:',
        locAddressVal: 'VCJF+5X7, షెట్పల్లె, తెలంగాణ 503218, భారతదేశం',
        locPhoneLabel: 'ఫోన్ నంబర్:',
        locEmailLabel: 'ఈమెయిల్:',
        locHoursLabel: 'పనివేళలు:',
        locHoursWeekdays: 'సోమ – శని: ఉదయం 8:00 – రాత్రి 7:30',
        locHoursSunday: 'ఆదివారం: ఉదయం 8:30 – మధ్యాహ్నం 1:30',
        locBtnDirections: 'గూగుల్ మ్యాప్స్‌లో దారి చూడండి',
        locBtnCall: 'ఫోన్ చేయండి: +91 70131 35345',
        locMapBadge: 'గూగుల్ మ్యాప్స్‌లో ధ్రువీకరించబడిన ప్రదేశం (Plus Code: VCJF+5X7)',

        // Newsletter Section (#newsletter)
        newsBadge: '📢 వ్యవసాయ సమాచారం',
        newsHeading: 'తెలంగాణ వ్యవసాయ పథకాలు & విత్తన సమాచారం పొందండి',
        newsSubtitle: '₹500 సన్నాల బోనస్ పథకం, వాతావరణ సూచనలు మరియు విత్తన లభ్యతపై ఎప్పటికప్పుడు తాజా సమాచారం పొందండి.',
        newsPerk1: 'తెలంగాణ ప్రభుత్వ ₹500/క్వింటాల్ సన్నాల బోనస్ అప్‌డేట్స్',
        newsPerk2: 'విత్తన నిల్వలు & డీలర్‌షిప్ వివరాలు',
        newsPerk3: 'విత్తే సమయాలు & పురుగుల నివారణ సూచనలు',
        newsContactLabel: 'ఈమెయిల్ లేదా వాట్సాప్ నంబర్ <span class="req-star">*</span>',
        newsInputPlaceholder: 'మీ ఈమెయిల్ లేదా వాట్సాప్ నంబర్ ఎంటర్ చేయండి',
        newsBtnSubscribe: 'ఉచితంగా నమోదు చేసుకోండి',
        newsSuccessTitle: 'నమోదు చేసుకున్నందుకు ధన్యవాదాలు!',
        newsSuccessDesc: 'మీరు ఇకపై తెలంగాణ వ్యవసాయ పథకాలు, ₹500 బోనస్ మరియు గంగ విత్తన సమాచారాన్ని పొందుతారు.',
        newsBtnReset: 'మరొక నంబర్ నమోదు చేయండి',

        // Booking & Contact Section (#contact)
        contactBadge: '📞 సంప్రదించండి',
        contactHeading: 'విత్తనాలు బుక్ చేసుకోండి లేదా వివరాలు అడగండి',
        contactSubtitle: 'తక్షణ వాట్సాప్ ఆర్డర్ ప్రాసెసింగ్, విత్తన లభ్యత లేదా వ్యవసాయ సలహాల కోసం క్రింది వివరాలను పూరించండి.',
        contactNameLabel: 'రైతు / పూర్తి పేరు <span class="req-star">*</span>',
        contactNamePlaceholder: 'ఉదా: రాజేందర్ రెడ్డి',
        contactPhoneLabel: 'మొబైల్ నంబర్ (వాట్సాప్) <span class="req-star">*</span>',
        contactPhonePlaceholder: 'ఉదా: 98480 12345',
        contactVillageLabel: 'గ్రామం / మండలం / జిల్లా <span class="req-star">*</span>',
        contactVillagePlaceholder: 'ఉదా: షెట్పల్లె, నిజామాబాద్',
        contactCropLabel: 'కావలసిన విత్తన రకం <span class="req-star">*</span>',
        contactCropPlaceholder: '-- పంట రకాన్ని ఎంచుకోండి --',
        contactAcreageLabel: 'సాగు భూమి (ఎకరాలలో)',
        contactNotesLabel: 'ఇతర వివరాలు / సాగు ప్రణాళిక',
        contactNotesPlaceholder: 'మీ నేల రకం, విత్తే సమయం లేదా ఇతర వివరాలు తెలపండి...',
        contactBtnSubmit: 'వివరాలు సమర్పించండి',
        contactHelpText: 'మీ వివరాలు వాట్సాప్‌లో సులభంగా ఫార్మాట్ చేయబడి మా షెట్పల్లె విత్తన బృందానికి చేరుతాయి.',
        errRequiredName: 'దయచేసి మీ పూర్తి పేరును నమోదు చేయండి',
        errRequiredPhone: 'దయచేసి సరైన 10 అంకెల మొబైల్ నంబర్‌ను నమోదు చేయండి',
        errRequiredVillage: 'దయచేసి మీ గ్రామం లేదా మండలం నమోదు చేయండి',
        errRequiredCrop: 'దయచేసి విత్తన రకాన్ని ఎంచుకోండి',
        errRequiredNews: 'దయచేసి సరైన ఈమెయిల్ లేదా 10 అంకెల మొబైల్ నంబర్‌ను నమోదు చేయండి',
        errFormSummary: 'దయచేసి ఎరుపు రంగులో సూచించిన వివరాలను సరిదిద్దండి.',
        errValidLandArea: 'దయచేసి 0 కంటే ఎక్కువ సాగు విస్తీర్ణం నమోదు చేయండి',

        // Footer Section
        footerBio: 'గంగ అగ్రి జెనెటిక్స్ షెట్పల్లె (తెలంగాణ) కేంద్రంగా పనిచేస్తున్న ప్రముఖ వ్యవసాయ విత్తనోత్పత్తి మరియు పరిశోధనా సంస్థ. నాణ్యమైన హైబ్రిడ్ విత్తనాలతో రైతు సంక్షేమానికి కట్టుబడి ఉన్నాము.',
        footerVerified: 'గూగుల్ ధ్రువీకృత వ్యవసాయ స్టోర్ (5.0★)',
        footerConnect: 'మమ్మల్ని అనుసరించండి:',
        footerQuickLinks: 'ముఖ్య లింకులు',
        footerSeedVarieties: 'హైబ్రిడ్ విత్తన రకాలు',
        footerStoreOutlet: 'విక్రయ కేంద్రం & సంప్రదింపులు',
        footerCopyright: '© 2026 గంగ అగ్రి జెనెటిక్స్. సర్వహక్కులు ప్రత్యేకించబడినవి. తెలంగాణ మరియు భారత రైతుల శ్రేయస్సు కొరకు.',
        footerPrivacy: 'గోప్యతా విధానం',
        footerTerms: 'నిబంధనలు & షరతులు',
        footerSitemap: 'సైట్‌మ్యాప్',

        // Comparison Modal Dialog
        compareModalHeading: 'విత్తన రకాలను పోల్చండి (Side-by-Side Comparison)',
        compareModalSubtitle: 'పంట కాలం, దిగుబడి సామర్థ్యం, మొలక శాతం మరియు తెగుళ్ల నిరోధకతను సరిపోల్చండి.',
        compareLabelA: 'రకం 1 ఎంచుకోండి:',
        compareLabelB: 'రకం 2 ఎంచుకోండి:',
        compareTableHeaderParam: 'లక్షణాలు',
        compareTableHeaderA: 'రకం 1',
        compareTableHeaderB: 'రకం 2',
        compareInquireBtn: 'విత్తనాల వివరాల కోసం అడగండి',
        compareCloseBtn: 'మూసివేయి',

        // Product Spec Dialog
        specModalDurationLabel: 'పంట కాలపరిమితి:',
        specModalYieldLabel: 'దిగుబడి సామర్థ్యం:',
        specModalGerminationLabel: 'ల్యాబ్ మొలక శాతం:',
        specModalGrainLabel: 'గింజ / కంకి రకం:',
        specModalResistanceLabel: 'రోగ నిరోధక శక్తి:',
        specModalSeasonLabel: 'అనువైన పంట కాలం:',
        specModalSoilLabel: 'అనువైన నేలలు:',
        specModalSeedRateLabel: 'ఎకరానికి విత్తన మోతాదు:',
        specModalBonusAlert: 'తెలంగాణ ప్రభుత్వ ₹500/క్వింటాల్ బోనస్ అర్హత గల రకం',
        specModalSowingTitle: 'విత్తే విధానం & యాజమాన్య పద్ధతులు:',
        specModalOrderBtn: 'ఈ విత్తనాలను వాట్సాప్‌లో ఆర్డర్ చేయండి',
        specModalCompareBtn: 'వేరొక రకంతో పోల్చండి',
        specModalCloseBtn: 'మూసివేయి',

        // Toast Messages
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
        grainType: 'అత్యధిక మార్కెట్ ధర పలికే ప్రీమియం సన్న వరి రకం',
        keyTrait: 'తెలంగాణ ప్రభుత్వ ₹500 బోనస్ | అద్భుతమైన మార్కెట్ డిమాండ్ & రుచికరమైన బియ్యం',
        soilSuitability: 'మంచి నీటి వసతి గల నల్ల రేగడి మరియు చల్క నేలలు'
      },
      'paddy-knm1638': {
        name: 'గంగ కూనారం 1638 సన్నాలు',
        bonusAmount: 'తెలంగాణ ₹500 బోనస్ రకం',
        grainDimensions: 'పొడవు: 5.2 మి.మీ (<6 మి.మీ), వెడల్పు: 1.75 మి.మీ (<2 మి.మీ), తేమ: <17%',
        duration: '125 - 130 రోజులు',
        yieldPotential: '32 - 36 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '6 - 7 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & యాసంగి',
        grainType: 'గట్టి సన్నపు గింజ, నాణ్యమైన వరి వంగడం',
        keyTrait: 'తెలంగాణ ప్రభుత్వ ₹500 బోనస్ | బాక్టీరియల్ ఆకు ఎండు (BLB) మరియు సుడిదోమ నిరోధకత',
        soilSuitability: 'వరి పండే అన్ని నేలలు'
      },
      'paddy-wgl44': {
        name: 'గంగ వరంగల్ 44 (సిద్ధి) సన్నాలు',
        bonusAmount: 'తెలంగాణ ₹500 బోనస్ రకం',
        grainDimensions: 'పొడవు: 5.3 మి.మీ (<6 మి.మీ), వెడల్పు: 1.8 మి.మీ (<2 మి.మీ), తేమ: <17%',
        duration: '130 - 135 రోజులు',
        yieldPotential: '30 - 35 క్వింటాళ్లు / ఎకరానికి',
        seedRate: '6 - 7 కిలోలు / ఎకరానికి',
        season: 'వానాకాలం & యాసంగి',
        grainType: 'బరువైన కంకి, ఆకర్షణీయమైన సన్నపు ధాన్యం',
        keyTrait: 'తెలంగాణ ప్రభుత్వ ₹500 బోనస్ | ఉల్లికోడు తెగులును తట్టుకునే ప్రసిద్ధ రకం',
        soilSuitability: 'మధ్యస్థ నుంచి లోతైన నల్ల రేగడి నేలలు'
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

    // 3. CALCULATOR CROPS TELUGU DATA (Indexed by crop key matching CROP_CALC_DATA)
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
        advice: 'అధిక పిలకలు మరియు ఎక్కువ మిల్లింగ్ రికవరీ ఇచ్చే నాణ్యమైన హైబ్రిడ్ రకం. నత్రజని ఎరువులను మూడు దఫాలుగా వేయండి.'
      },
      paddy_gold99: {
        name: 'గంగ సుప్రీం గోల్డ్-99 హైబ్రిడ్ వరి',
        duration: '125 - 130 రోజులు',
        advice: 'అధిక పిలకలు మరియు ఎక్కువ మిల్లింగ్ రికవరీ ఇచ్చే నాణ్యమైన హైబ్రిడ్ రకం. నత్రజని ఎరువులను మూడు దఫాలుగా వేయండి.'
      },
      maize: {
        name: 'గంగ సూర్య మహాబలి హైబ్రిడ్ మొక్కజొన్న',
        duration: '110 - 118 రోజులు',
        advice: 'మొక్కల మధ్య 60x20 సెం.మీ దూరం పాటించండి. కత్తెర పురుగు నివారణకు ప్రారంభ దశలోనే వేప నూనె లేదా సిఫార్సు చేసిన పురుగుమందులు పిచికారీ చేయండి.'
      },
      maize_surya: {
        name: 'గంగ సూర్య మహాబలి హైబ్రిడ్ మొక్కజొన్న',
        duration: '110 - 118 రోజులు',
        advice: 'మొక్కల మధ్య 60x20 సెం.మీ దూరం పాటించండి. కత్తెర పురుగు నివారణకు ప్రారంభ దశలోనే వేప నూనె లేదా సిఫార్సు చేసిన పురుగుమందులు పిచికారీ చేయండి.'
      },
      jowar: {
        name: 'గంగ మహావీర్ హైబ్రిడ్ తెల్ల జొన్నలు',
        duration: '105 - 112 రోజులు',
        advice: 'ఎకరానికి 3.5-4 కిలోల విత్తనం చాలు. కరువును తట్టుకుంటుంది, అధిక గింజ బరువుతో పాటు పోషక విలువలు గల పశుగ్రాసం లభిస్తుంది.'
      },
      jowar_mahaveer: {
        name: 'గంగ మహావీర్ హైబ్రిడ్ తెల్ల జొన్నలు',
        duration: '105 - 112 రోజులు',
        advice: 'ఎకరానికి 3.5-4 కిలోల విత్తనం చాలు. కరువును తట్టుకుంటుంది, అధిక గింజ బరువుతో పాటు పోషక విలువలు గల పశుగ్రాసం లభిస్తుంది.'
      },
      bajra: {
        name: 'గంగ తేజస్వి హైబ్రిడ్ సజ్జలు',
        duration: '85 - 90 రోజులు',
        advice: '85 రోజుల్లో కోతకు వచ్చే స్వల్పకాలిక రకం. తక్కువ నీటితో పండుతుంది, సహజ ఐరన్ మరియు జింక్ పోషకాలు పుష్కలంగా ఉంటాయి.'
      },
      bajra_tejasvi: {
        name: 'గంగ తేజస్వి హైబ్రిడ్ సజ్జలు',
        duration: '85 - 90 రోజులు',
        advice: '85 రోజుల్లో కోతకు వచ్చే స్వల్పకాలిక రకం. తక్కువ నీటితో పండుతుంది, సహజ ఐరన్ మరియు జింక్ పోషకాలు పుష్కలంగా ఉంటాయి.'
      },
      soybean: {
        name: 'గంగ శక్తి-335 అధిక దిగుబడి సోయాబీన్',
        duration: '90 - 98 రోజులు',
        advice: 'విత్తే ముందు రైజోబియం కల్చర్‌తో విత్తన శుద్ధి తప్పనిసరి. కాయ పగులుడు సమస్య ఉండదు, ఖరీఫ్ వానాకాలానికి అత్యంత అనుకూలం.'
      },
      soybean_shakti: {
        name: 'గంగ శక్తి-335 అధిక దిగుబడి సోయాబీన్',
        duration: '90 - 98 రోజులు',
        advice: 'విత్తే ముందు రైజోబియం కల్చర్‌తో విత్తన శుద్ధి తప్పనిసరి. కాయ పగులుడు సమస్య ఉండదు, ఖరీఫ్ వానాకాలానికి అత్యంత అనుకూలం.'
      },
      mustard: {
        name: 'గంగ గోల్డ్ హైబ్రిడ్ ఆవాలు',
        duration: '105 - 115 రోజులు',
        advice: 'యాసంగి శీతాకాల పంటగా అత్యంత అనుకూలం. తేలికపాటి తడులతో 42% నూనె శాతం గల లావు గింజలు లభిస్తాయి.'
      },
      mustard_gold: {
        name: 'గంగ గోల్డ్ హైబ్రిడ్ ఆవాలు',
        duration: '105 - 115 రోజులు',
        advice: 'యాసంగి శీతాకాల పంటగా అత్యంత అనుకూలం. తేలికపాటి తడులతో 42% నూనె శాతం గల లావు గింజలు లభిస్తాయి.'
      },
      redgram: {
        name: 'గంగ ఆశా అధిక దిగుబడి కంది విత్తనాలు',
        duration: '150 - 165 రోజులు',
        advice: 'ఎండు తెగులు మరియు వెర్రి తెగులును తట్టుకుంటుంది. అంతర పంటగా లేదా స్వతంత్ర పంటగా సాగుకు అనుకూలం.'
      }
    },

    // 4. PHOTO GALLERY CAROUSEL DATA
    gallery: [
      {
        id: 'gal-paddy',
        image: 'assets/images/gallery-paddy.jpg',
        category: {
          en: '🌾 Field Harvest',
          te: '🌾 వరి క్షేత్ర దిగుబడి'
        },
        title: {
          en: 'Bumper Paddy Harvest in Telangana',
          te: 'తెలంగాణలో బంగారు వరి పంట దిగుబడి'
        },
        location: {
          en: 'Shetpalle & Nizamabad District',
          te: 'షెట్పల్లె & నిజామాబాద్ జిల్లా'
        },
        description: {
          en: 'High-yielding BPT-5204 & Telangana Sona trial fields in Nizamabad.',
          te: 'వరి క్షేత్రంలో మేలు రకపు ధాన్యపు కంకుల సమృద్ధి.'
        }
      },
      {
        id: 'gal-lab',
        image: 'assets/images/gallery-lab.jpg',
        category: {
          en: '🔬 Quality Testing',
          te: '🔬 విత్తన నాణ్యతా పరీక్షలు'
        },
        title: {
          en: 'Advanced Seed Testing & Germination Lab',
          te: 'అధునాతన విత్తన మొలక & నాణ్యతా ల్యాబ్'
        },
        location: {
          en: 'R&D Center, Shetpalle',
          te: 'పరిశోధనా కేంద్రం, షెట్పల్లె'
        },
        description: {
          en: 'Daily 98%+ germination viability and moisture testing in Shetpalle.',
          te: 'ల్యాబ్‌లో ప్రతి బ్యాచ్‌పై 98%+ మొలక శాతం నాణ్యతా పరీక్షలు.'
        }
      },
      {
        id: 'gal-maize',
        image: 'assets/images/gallery-maize.jpg',
        category: {
          en: '🌽 Happy Farmers',
          te: '🌽 రైతుల సంతృప్తి'
        },
        title: {
          en: 'Ganga Surya Hybrid Maize Success',
          te: 'గంగ సూర్య మొక్కజొన్న రైతు విజయం'
        },
        location: {
          en: 'Commercial Maize Plot, Telangana',
          te: 'మొక్కజొన్న సాగు క్షేత్రం, తెలంగాణ'
        },
        description: {
          en: 'Farmer celebrating bumper cob weight with Ganga Surya Hybrid Maize.',
          te: 'గంగ సూర్య మొక్కజొన్నతో రైతు సాధించిన అధిక దిగుబడి.'
        }
      },
      {
        id: 'gal-warehouse',
        image: 'assets/images/gallery-warehouse.jpg',
        category: {
          en: '🏭 Processing & Storage',
          te: '🏭 విత్తన ప్రాసెసింగ్ & నిల్వ'
        },
        title: {
          en: 'Certified Seed Packaging & Logistics',
          te: 'ధ్రువీకృత విత్తన ప్యాకేజింగ్ & పంపిణీ'
        },
        location: {
          en: 'Main Logistics Hub, Shetpalle',
          te: 'ప్రధాన నిల్వ కేంద్రం, షెట్పల్లె'
        },
        description: {
          en: 'Certified seed bags packed and ready for distribution in Telangana.',
          te: 'రైతుల కోసం సిద్ధంగా ఉన్న నాణ్యమైన సీల్డ్ విత్తన బస్తాలు.'
        }
      },
      {
        id: 'gal-field-day',
        image: 'assets/images/gallery-field-day.jpg',
        category: {
          en: '🤝 Farmer Field Meets',
          te: '🤝 రైతు క్షేత్ర సదస్సులు'
        },
        title: {
          en: 'Telangana Sannalu Field Demonstration Day',
          te: 'తెలంగాణ సన్నాలు క్షేత్ర ప్రదర్శన సదస్సు'
        },
        location: {
          en: 'Demonstration Plot, Shetpalle Mandals',
          te: 'ప్రదర్శనా క్షేత్రం, షెట్పల్లె పరిసరాలు'
        },
        description: {
          en: 'Agronomists demonstrating Telangana Sannalu bonus traits to farmers.',
          te: 'రైతులకు ₹500 బోనస్ మరియు సన్నాల సాగుపై ప్రత్యక్ష అవగాహన.'
        }
      },
      {
        id: 'gal-soybean',
        image: 'assets/images/gallery-soybean.jpg',
        category: {
          en: '🌱 Oilseeds & Pulses',
          te: '🌱 సోయాబీన్ & నూనెగింజలు'
        },
        title: {
          en: 'High-Yield Shakti Soybean Trial Plot',
          te: 'గంగ శక్తి-335 సోయాబీన్ సాగు క్షేత్రం'
        },
        location: {
          en: 'Kharif Demonstration Field',
          te: 'ఖరీఫ్ ప్రదర్శనా క్షేత్రం'
        },
        description: {
          en: 'Prolific pod clustering and zero shattering in Ganga Shakti Soybean.',
          te: 'ఎక్కువ కాయలు, అధిక దిగుబడినిచ్చే గంగ శక్తి సోయాబీన్ పంట.'
        }
      }
    ]
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
  global.I18N = GANGA_I18N.ui; // Backwards compatibility
})(typeof window !== 'undefined' ? window : global);
