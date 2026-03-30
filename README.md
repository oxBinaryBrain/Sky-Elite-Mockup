# SkyElite — Premium Private Jet Landing Page

A modern, responsive landing page for a luxury private aviation service. Built with React, TypeScript, and Tailwind CSS.

![React](https://img.shields.io/badge/React-19-blue?logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4-38BDF8?logo=tailwindcss&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)

---

## Live Preview

```bash
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Features

| Section | Description |
|---------|-------------|
| **Hero** | Full-screen video background with autoplay, muted, looping. Dark overlay with headline and CTA buttons |
| **Navigation** | Fixed navbar that transitions from transparent to white on scroll. Mobile hamburger menu |
| **Story** | Brand narrative with statistics (500+ aircraft, 50K+ flights, 98% satisfaction) |
| **Rates** | Three-tier pricing cards — Light, Midsize, and Heavy Jets with feature lists |
| **Benefits** | Four feature cards with icons plus a dark stats bar |
| **FAQ** | Accordion-style frequently asked questions with expand/collapse |
| **Footer** | Four-column layout with brand, links, services, and contact information |

---

## Tech Stack

- **React 19** — UI library
- **TypeScript** — Type safety
- **Vite** — Build tool and dev server
- **Tailwind CSS** — Utility-first CSS framework
- **Lucide React** — Icon library

---

## Project Structure

```
src/
├── components/
│   ├── Navigation.tsx    # Sticky navbar with scroll detection
│   ├── Hero.tsx          # Video hero with CTA
│   ├── Story.tsx         # About section with stats
│   ├── Rates.tsx         # Pricing tier cards
│   ├── Benefits.tsx      # Feature grid + stats bar
│   ├── FAQ.tsx           # Accordion FAQ
│   └── Footer.tsx        # Site footer
├── App.tsx               # Main layout composition
├── main.tsx              # Entry point
└── index.css             # Tailwind directives + Inter font
```

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/oxBinaryBrain/Sky-Elite-Mockup.git

# Navigate to project
cd Sky-Elite-Mockup

# Install dependencies
npm install

# Start dev server
npm run dev
```

### Build for Production

```bash
npm run build
```

Output is generated in the `dist/` directory.

---

## Design System

| Token | Value |
|-------|-------|
| Primary color | `#202A36` |
| Font family | Inter (Google Fonts) |
| Border radius | Full (buttons), 1rem (cards) |
| Max width | `7xl` (80rem) |
| Breakpoints | `md` (768px), `lg` (1024px) |

---

## License

This project is for demonstration purposes.
