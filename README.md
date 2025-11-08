Perfect — here’s a complete README.md you can use directly in your GitHub repository for your DistroLink website.
It’s polished, professional, and ready for public or internal use.


---

# 🌐 DistroLink — Tri-State Delivery & Distribution

**DistroLink** streamlines delivery and distribution across New York, New Jersey, and Connecticut using smart technology to improve efficiency, visibility, and cost control.

This repository contains the complete static website for DistroLink, optimized for **GitHub Pages** hosting — no ongoing cost required.

---

## 🚀 Overview

This site is built as a **single-page scrolling layout** with clear, modern styling.  
It showcases DistroLink’s mission, services, and technology, and includes a **pickup request form** and contact details for direct inquiries.

### ✅ Features
- **Smooth scroll navigation** with sticky header offset (no hidden sections)
- **Modern responsive layout** — mobile-friendly and lightweight
- **Local image hosting** — works entirely offline, no external CDNs
- **"Request a Pickup" form** with email fallback
- **Contact section** with phone, email, and service area
- **No external dependencies** — pure HTML, CSS, and JavaScript
- **Deploy-ready for GitHub Pages**

---

## 📂 Repository structure

/ ├── index.html           # Main page ├── styles.css           # Layout and design ├── script.js            # Smooth scroll & form handling ├── README.md            # This file └── /assets/             # Local images and branding ├── hero.jpg ├── about.jpg ├── tech.jpg ├── logo-full.png └── logo-icon.png

---

## 🧠 How to deploy on GitHub Pages

1. **Upload everything** (the files and `/assets/` folder) to your GitHub repository root.  
   Make sure `index.html` is at the top level — not inside another folder.

2. Go to your repo’s  
   **Settings → Pages → Build and Deployment** section.

3. Set:
   - **Source:** `Deploy from branch`  
   - **Branch:** `main` → `/ (root)`

4. Click **Save**.  
   After a few seconds, your live site will be available at:

https://YOURUSERNAME.github.io/

---

## 🧾 Forms setup (optional)

Two forms are supported:
- **Pickup Request Form** → `#pickup`
- (Optional) **Contact Form** — currently removed, but code remains modular.

### Using Formspree (recommended)
1. Go to [https://formspree.io](https://formspree.io) and create a free account.  
2. Add new endpoints — one for pickup requests.
3. In `script.js`, replace the placeholders:

```js
const FORMSPREE_PICKUP = 'https://formspree.io/f/your_pickup_endpoint';

If no Formspree endpoint is configured, the form will fall back to an email link using mailto:contact@mydistrolink.com.


---

🧰 Customization

🔹 Change images

Replace the default images inside /assets/ with your own:

File	Recommended Size	Description

hero.jpg	1600×900	Homepage banner
about.jpg	1600×900	About section
tech.jpg	1600×900	Technology section
logo-full.png	~800×240	Logo with text
logo-icon.png	~256×256	Favicon and app icon


Keep the filenames the same to avoid updating paths.

🔹 Edit contact info

In index.html, find the Reach us directly section:

<li><strong>Email:</strong> <a href="mailto:contact@mydistrolink.com">contact@mydistrolink.com</a></li>
<li><strong>Phone:</strong> <a href="tel:+15163040391">516-304-0391</a></li>

Replace with your preferred contact info.

🔹 Adjust styling

Edit styles.css — colors and layout are controlled by easy-to-change variables:

:root {
  --primary: #15c0d4;
  --primary-strong: #00a8c1;
  --bg: #0b1220;
  --text: #e6edf6;
}


---

⚙️ Development Notes

Built with semantic HTML5 for accessibility.

No frameworks (React, Vue, etc.) — easy to maintain.

Compatible with all modern browsers.

Works entirely offline once loaded (no dependencies).



---

📜 Licensing & Attribution

© 2025 DistroLink — All rights reserved.

You may freely use or modify this template for DistroLink’s business website.
Please retain brand references and contact information unless repurposing for internal use.


---

💬 Support

For site updates or troubleshooting, contact:

Email: contact@mydistrolink.com
Phone: 516-304-0391


---

🏁 Status

Version: V5 — November 2025
Includes:
✅ Fixed buttons, ✅ Pickup time field, ✅ Enlarged contact section, ✅ Local images verified.

---

Would you like me to package this README into your project ZIP (`V5`) so it’s automatically included when you upload to GitHub?# 🌐 DistroLink — Tri-State Delivery & Distribution

**DistroLink** streamlines delivery and distribution across New York, New Jersey, and Connecticut using smart technology to improve efficiency, visibility, and cost control.

This repository contains the complete static website for DistroLink, optimized for **GitHub Pages** hosting — no ongoing cost required.

---

## 🚀 Overview

This site is built as a **single-page scrolling layout** with clear, modern styling.  
It showcases DistroLink’s mission, services, and technology, and includes a **pickup request form** and contact details for direct inquiries.

### ✅ Features
- **Smooth scroll navigation** with sticky header offset (no hidden sections)
- **Modern responsive layout** — mobile-friendly and lightweight
- **Local image hosting** — works entirely offline, no external CDNs
- **"Request a Pickup" form** with email fallback
- **Contact section** with phone, email, and service area
- **No external dependencies** — pure HTML, CSS, and JavaScript
- **Deploy-ready for GitHub Pages**

---

## 📂 Repository structure# DistroLink — V5 (Buttons, Pickup time field, Contact layout, Images)
- Buttons now use anchors **and** JS scrolling with a larger header offset — fixes "not working" behavior behind a sticky header.
- Pickup form replaces Start/End with a single **Time** field.
- Removed the Contact form; enlarged **Reach us directly** block.
- Local images guaranteed in `/assets/` and paths wired in CSS/HTML.
