# 🌐 DistroLink — Tri-State Delivery & Distribution

**DistroLink** streamlines delivery and distribution across New York, New Jersey, and Connecticut using smart technology to improve efficiency, visibility, and cost control.

This repository contains the complete static website for DistroLink, optimized for **GitHub Pages** hosting — no ongoing cost required.

---

## 🚀 Overview
This site is built as a **single-page scrolling layout** with clear, modern styling.  
It showcases DistroLink’s mission, services, and technology, and includes a **pickup request form** and contact details for direct inquiries.

### ✅ Features
- Smooth scroll navigation with sticky header offset
- Modern responsive layout — mobile-friendly
- Local image hosting (offline-capable)
- "Request a Pickup" form with email fallback
- Contact section with phone, email, and service area
- No external dependencies — pure HTML, CSS, and JS
- Deploy-ready for GitHub Pages

---

## 📂 Repository structure
```
/
├── index.html
├── styles.css
├── script.js
├── README.md
└── /assets/
    ├── hero.jpg
    ├── about.jpg
    ├── tech.jpg
    ├── logo-full.png
    └── logo-icon.png
```

---

## 🧠 How to deploy on GitHub Pages
1. Upload all files (including `/assets/`) to your repository root.  
2. Go to **Settings → Pages** and set:
   - Source: `Deploy from branch`
   - Branch: `main` → `/ (root)`
3. Save and open: `https://YOURUSERNAME.github.io/`

---

## 🧾 Forms setup (optional)
### Using Formspree
1. Sign up at [formspree.io](https://formspree.io)
2. Create a new form endpoint.
3. In `script.js`, replace the placeholder:
```js
const FORMSPREE_PICKUP = 'https://formspree.io/f/your_pickup_endpoint';
```
If left blank, the form will open a mailto link to `contact@mydistrolink.com`.

---

## 🧰 Customization
Replace `/assets/` images:
| File | Recommended Size | Description |
|------|------------------|-------------|
| hero.jpg | 1600×900 | Homepage banner |
| about.jpg | 1600×900 | About section |
| tech.jpg | 1600×900 | Technology section |
| logo-full.png | ~800×240 | Logo with text |
| logo-icon.png | ~256×256 | Favicon/social |

---

## ⚙️ Development Notes
- Semantic HTML5, no frameworks
- Works offline once cached
- Fully responsive and lightweight

---

## 📜 License
© 2025 DistroLink — All rights reserved.  
You may freely use or modify for DistroLink’s business website.

---

## 💬 Support
**Email:** [contact@mydistrolink.com](mailto:contact@mydistrolink.com)  
**Phone:** [516-304-0391](tel:+15163040391)

Version **V5 — November 2025**  
Includes: Button fix, pickup time field, enlarged contact section, verified local images.
