# 🌱 Ganga Agri Genetics — Official Web Platform

[![Continuous Integration](https://github.com/gangaagrigenetics/gangaagrigenetics/actions/workflows/ci.yml/badge.svg)](https://github.com/gangaagrigenetics/gangaagrigenetics/actions/workflows/ci.yml)
[![CodeQL Advanced](https://github.com/gangaagrigenetics/gangaagrigenetics/actions/workflows/codeql.yml/badge.svg)](https://github.com/gangaagrigenetics/gangaagrigenetics/actions/workflows/codeql.yml)
[![Tests Passed](https://img.shields.io/badge/tests-42%2F42%20passed-success?style=flat&logo=node.js)](tests/test-runner.html)
[![Bilingual](https://img.shields.io/badge/language-English%20%7C%20%E0%B0%A4%E0%B1%86%E0%B0%B2%E0%B1%81%E0%B0%97%E0%B1%81-emerald)](i18n.js)
[![PWA Ready](https://img.shields.io/badge/PWA-offline%20ready-blue)](sw.js)
[![Rating](https://img.shields.io/badge/Google%20Rating-%E2%AD%90%205.0%20Verified-gold)](https://maps.app.goo.gl/3w8yK2mEa7YwGq4y8)

> **Premier High-Yielding Hybrid Seed Breeding, Processing & Agricultural Genetics Enterprise**  
> 📍 **Main Hub:** Shetpalle, Nizamabad District, Telangana 503218, India  
> 📞 **Helpline / WhatsApp:** `+91 70131 35345` | **Email:** `gangaagrigenetics@gmail.com`  
> 🌐 **Live Website:** [https://gangaagrigenetics.github.io/gangaagrigenetics](https://gangaagrigenetics.github.io/gangaagrigenetics)

---

## 🌟 Overview

**Ganga Agri Genetics** is a leading agricultural genetics enterprise based in Telangana, specializing in certified hybrid seed production, research trials, germination viability testing, and farmer advisory services across South India.

This repository contains the production web platform engineered with modern HTML5, Vanilla CSS, and native JavaScript. It is designed to be mobile-first, blazing fast, 100% offline-capable as a Progressive Web App (PWA), and fully localized in both **English** and **Telugu (తెలుగు)**.

---

## ✨ Core Features & Platform Modules

### 1. 🌾 Telangana Govt ₹500/Quintal Bonus Scheme Hub
- Dedicated section (`#tg-bonus`) breaking down Telangana Government fine-grain (*Sannalu*) MSP bonus criteria:
  - Grain length `< 6.0 mm` & width `< 2.0 mm`
  - Moisture content `< 17%`
  - Certified biometric registration on the Telangana AEO procurement portal
- Features **7 Government-Bonus Eligible Varieties**:
  - `Ganga BPT-5204 (Samba Mahsuri)`
  - `Ganga Telangana Sona (RNR-15048)`
  - `Ganga Supreme Gold-99`
  - `Ganga KNM-118`
  - `Ganga HMT Sona`
  - `Ganga Chintu-1010`
  - `Ganga Jai Sriram`

### 2. 🧮 Interactive Seed Rate & Financial Yield Calculator
- Dynamic farm calculator configured for Telangana soil types (Red Loam, Black Cotton, Sandy Clay).
- Computes exact seed bag requirements, expected crop yields, and **estimated ₹500/Qtl bonus earnings** for bonus paddy varieties.
- Instant pre-filled WhatsApp calculation export for direct ordering.

### 3. 🔍 Filterable Hybrid Seed Catalog & Comparison Engine
- 13 high-yielding certified hybrid varieties categorized into:
  - **Telangana ₹500 Bonus Sannalu** (7 fine paddy varieties)
  - **Cereals & Millets** (Hybrid Maize, Jowar, Bajra)
  - **Soybean & Oilseeds** (Ganga Shakti-335 Soybean, Ganga Gold Mustard)
- **Side-by-Side Comparison Engine:** Compare any two varieties across 8 agronomic parameters (Duration, Yield, Germination %, Grain Type, Resistance, Sowing Season, Seed Rate, and Govt Bonus Eligibility) inside an accessible native `<dialog>`.

### 4. 📸 Field & Research Photo Gallery Carousel
- Responsive single-card carousel slider highlighting R&D trials, germination labs, farmer field meets, and bumper harvests across Telangana.
- Clean one-line captions in English & Telugu with slide indicators, touch/swipe gestures, and 4s autoplay.
- Built-in full-screen **Lightbox Zoom Modal** (`#galleryLightboxModal`) with keyboard navigation (`ArrowLeft`, `ArrowRight`, `Escape`).

### 5. 🌐 100% Centralized Bilingual Localization (`i18n.js`)
- Instant one-click language toggle (`EN` ⇄ `తెలుగు`) preserving user preference via `localStorage`.
- All Telugu translation strings, seed characteristics, calculator labels, and gallery captions are 100% centralized in `i18n.js`, ensuring zero hardcoded regional strings in business logic scripts.

### 6. 🕒 Real-Time Store Operating Hours Engine
- Live Indian Standard Time (IST) schedule check:
  - **Monday – Saturday:** 8:00 AM – 7:30 PM (`STORE OPEN NOW` with green pulse indicator)
  - **Sunday:** 8:30 AM – 1:30 PM
- Automatically updates top announcement bar and store location contact section.

### 7. 📲 Progressive Web App (PWA) & Offline Reliability
- Offline service worker (`sw.js`) with cache-first static asset caching.
- Custom branded `404.html` error fallback.
- `manifest.json` configured for full standalone mobile home-screen installation.

---

## 📁 Repository Structure

```
gangaagrigenetics/
├── .github/
│   └── workflows/
│       ├── ci.yml              # GitHub Actions CI matrix (Node 18.x, 20.x, 22.x)
│       └── codeql.yml          # GitHub CodeQL Advanced Security scanning
├── assets/
│   ├── images/                 # Optimized web images (Paddy, Maize, Soybean, Gallery)
│   └── icons/                  # PWA app icons (192x192, 512x512)
├── tests/
│   ├── suite.test.js           # Automated test suite (42 tests across 8 suites)
│   └── test-runner.html        # Interactive in-browser visual test runner dashboard
├── 404.html                    # Custom branded 404 offline/error page
├── app.js                      # Core interactive application logic & UI controllers
├── i18n.js                     # Centralized English & Telugu localization dictionary
├── index.html                  # Semantic HTML5 web application with Schema.org JSON-LD
├── manifest.json               # Progressive Web App manifest
├── robots.txt                  # Search crawler directives
├── SECURITY.md                 # Security policy & vulnerability reporting guidelines
├── sitemap.xml                 # XML sitemap for search engines
├── style.css                   # Responsive design system & custom CSS properties
└── sw.js                       # Service worker for offline caching & PWA support
```

---

## 🧪 Automated Testing & Quality Assurance

The platform includes a comprehensive test suite covering **42 unit and integration tests across 8 suites**:

| Suite | Category | Tests | Status |
| :--- | :--- | :---: | :---: |
| **Suite 1** | Telangana Govt ₹500 Bonus Varieties & Seed Catalog | 5 | ✅ 5/5 Passed |
| **Suite 2** | Interactive Calculator & ₹500 Bonus Financial Engine | 4 | ✅ 4/4 Passed |
| **Suite 3** | Contact Number (7013135345) & Social Links Integrity | 3 | ✅ 3/3 Passed |
| **Suite 4** | DOM Components, Carousel & Newsletter Verification | 9 | ✅ 9/9 Passed |
| **Suite 5** | PWA, Service Worker & CSS Styling | 3 | ✅ 3/3 Passed |
| **Suite 6** | Production Readiness & SEO Quality | 5 | ✅ 5/5 Passed |
| **Suite 7** | Bilingual English & Telugu Localization Integrity | 7 | ✅ 7/7 Passed |
| **Suite 8** | Referenced Images & Static Assets Integrity | 6 | ✅ 6/6 Passed |
| **TOTAL** | **Full Platform Verification** | **42** | **100% Passed** |

### Running Tests Locally:

```bash
# Run automated node test suite
node --test tests/suite.test.js
```

### Visual In-Browser Test Dashboard:
Open `tests/test-runner.html` in your browser to inspect test execution timings and live assertion logs interactively.

---

## 💻 Local Development Setup

To preview and develop locally:

```bash
# Option 1: Using Python
python -m http.server 8080

# Option 2: Using Node.js
npx serve .

# Option 3: VS Code Live Server
# Right click index.html -> "Open with Live Server"
```

Open `http://localhost:8080` in your web browser.

---

## 🔒 Security & Vulnerability Reporting

Please review our [SECURITY.md](SECURITY.md) for details on supported versions and responsible vulnerability disclosure channels.

---

## 📄 License & Attribution

&copy; 2026 **Ganga Agri Genetics**. All rights reserved.  
*Empowering farmers with high-yielding genetics and scientific agronomy across Telangana and India.*
