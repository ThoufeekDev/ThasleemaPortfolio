# Thasleema N — Premium Professional Portfolio

An elegant, animated, corporate-style portfolio website built for **Thasleema N**, presenting her background in **Front Office Operations, Business Support Coordination, Administration, Customer Relationship Management, and Team Supervision**.

---

## ✨ Features & Visual Highlights

- **Dynamic Animations**:
  - **Framer Motion** scroll-driven entrance reveals on all sections.
  - **3D Parallax Tilt Card** in the Hero section with realistic cursor physics.
  - **Top Reading Scroll Progress Bar** tracking page scroll.
  - **Active Navigation Pill** that glides smoothly across nav items using Framer Motion springs.
  - **Ambient Floating Mesh Blobs & Cursor Glow** in the background.
  - **Particle Confetti Burst** when copying contact information or downloading the CV.
  - **Collapsible Animated Mobile Drawer** for mobile viewports.
- **Editorial & Corporate Design System**:
  - **Color Palette**: Warm Ivory (`#FAF7F2`), Deep Navy (`#0B111E`, `#111927`), Sophisticated Emerald (`#047857`, `#10B981`), and Sand Beige secondary surfaces.
  - **Typography**: Google Fonts pairing with *DM Sans* for headlines and *Plus Jakarta Sans* for clean, modern readability.
  - Clean card structures, subtle borders, and zero generic stock photo distractions.
- **Complete Resume Fidelity**:
  - **Experience**: Derrick Jones Management (Front Office & Business Support) & Cafe Bangalore (Manager).
  - **Skills**: Structured into *Administration & Operations*, *Customer & Business Support*, and *Management & Reporting* (without arbitrary percentages).
  - **Education**: Bachelor of Business Administration (BBA) — Annamalai University.
  - **Languages**: Malayalam (Native), English (Fluent), Hindi (B2), Tamil (Fluent).
  - **Contact**: Direct `mailto:bythasleeman@gmail.com` and `tel:+919946903376` links, copy-to-clipboard buttons, and a client-validated email inquiry composer.

---

## 🚀 How to Run the Project Locally

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Start the Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173/` (or the active port displayed in your terminal).

3. **Build for Production**:
   ```bash
   npm run build
   ```

4. **Preview Production Bundle**:
   ```bash
   npm run preview
   ```

---

## 📄 Resume PDF Setup

Place your official resume PDF file inside the `public/` directory with the exact name:

```
public/Thasleema-Resume.pdf
```

The "Download Resume" buttons and dialog will automatically serve this file directly to recruiters.

---

## 📁 Project Structure

```
thasleema-portfolio/
├── public/
│   ├── favicon.svg               # Vector brand monogram icon
│   └── Thasleema-Resume.pdf      # (Place resume PDF here)
├── src/
│   ├── components/
│   │   ├── AboutSection.tsx      # About Me & 4 Strength Cards
│   │   ├── BackgroundEffects.tsx # Floating ambient mesh blobs & mouse spotlight
│   │   ├── ContactSection.tsx    # Direct contact cards, copy actions, inquiry composer
│   │   ├── EducationSection.tsx  # BBA degree presentation
│   │   ├── ExperienceSection.tsx # Timeline & experience cards
│   │   ├── Footer.tsx            # Corporate footer with back-to-top button
│   │   ├── HeroSection.tsx       # Typography hero & 3D tilt executive card
│   │   ├── LanguagesSection.tsx  # Multilingual capability cards
│   │   ├── Navbar.tsx            # Sticky header, active spring pill & mobile menu
│   │   ├── ResumeModal.tsx       # Modal with download triggers & recruiter instructions
│   │   ├── SkillsSection.tsx     # Categorized skill cards
│   │   └── Toast.tsx             # Animated status notification popup
│   ├── data/
│   │   └── portfolioData.ts      # Single source of truth for resume data
│   ├── types/
│   │   └── index.ts              # Clean TypeScript interfaces
│   ├── App.tsx                   # Main App layout component
│   ├── index.css                 # Design system styles & animations
│   └── main.tsx                  # React DOM root entry
├── index.html                    # SEO metadata & Google Fonts
├── package.json
├── tailwind.config.js
└── vite.config.ts
```
