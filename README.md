# DevSphere — The Developer Identity Platform
> **"One identity. Every skill. Real opportunities."**

DevSphere is an open-standard developer platform that unifies engineering identity, verifiable skill proof, algorithmic practice, project portfolios, and career opportunities. Built on the core principle of **Proof over Claims**, DevSphere bridges the gap between what developers claim on static resumes and what their code actually demonstrates.

---

## 📌 Milestone 01 Status: Frontend Foundation & Landing Page

Milestone 01 delivers the foundational frontend architecture, modern dark-first design system, responsive navigation, core module showcase, progressive journey timeline, and interactive proof demonstration mockup.

### Core Modules Represented
1. **DevID:** Cryptographically linked, unified developer identity and profile.
2. **CodeArena:** Algorithmic coding practice, DSA challenges, and execution benchmarks.
3. **CodeHub:** Curated project showcases with repository commit authorship analysis.
4. **DevConnect:** Signal-rich technical networking and architectural discussions.
5. **TeamUp:** Finding hackathon teammates and project co-founders based on complementary skills.
6. **OpportunityHub:** Inbound recruiter discovery powered by verified code evidence.
7. **DevScore:** Multi-dimensional skill analytics across problem solving, Git cadence, and architecture.
8. **DevAI:** Context-aware code reviews, complexity analysis, and skill path suggestions.

---

## 🛠️ Technology Stack

| Technology | Purpose | Version |
| :--- | :--- | :--- |
| **React** | Component-based UI library | `v19.x` |
| **TypeScript** | Static typing and compile-time correctness | `v5.8+` |
| **Vite** | Modern, lightning-fast build tool and dev server | `v8.x` |
| **Tailwind CSS** | Utility-first styling framework (v3.4 architecture) | `v3.4.17` |
| **Lucide React** | Accessible, tree-shakeable SVG icon set | `v1.x` |
| **PostCSS & Autoprefixer** | CSS processing and vendor prefix automation | Standard LTS |

---

## 📂 Project Structure

```text
DevSphere/
├── public/
├── src/
│   ├── assets/              # Static branding and graphics
│   ├── components/          # Reusable UI components
│   │   ├── Navbar.tsx       # Responsive header with mobile drawer & focus states
│   │   ├── Hero.tsx         # Value proposition & interactive mockup preview
│   │   ├── FeatureCard.tsx  # Reusable module showcase card
│   │   ├── Features.tsx     # 8-module responsive ecosystem grid
│   │   ├── HowItWorks.tsx   # 4-step progressive timeline
│   │   ├── Differentiation.tsx # "Proof over Claims" comparison section
│   │   ├── CallToAction.tsx # Conversion section with action hooks
│   │   ├── Footer.tsx       # Structured links, legal placeholders, copyright
│   │   └── Modal.tsx        # Accessible dialog for milestone interactivity
│   ├── data/                # Centralized content and navigation definitions
│   │   ├── features.ts      # 8 modules, 4 steps, and comparison points
│   │   └── navigation.ts    # Nav links and footer hierarchy
│   ├── pages/
│   │   └── Home.tsx         # Primary landing page assembly
│   ├── types/
│   │   └── index.ts         # Central TypeScript interfaces
│   ├── App.tsx              # Root component
│   ├── main.tsx             # React DOM entry point
│   └── index.css            # Tailwind directives & accessibility styles
├── index.html               # HTML5 template with Inter & JetBrains Mono fonts
├── package.json             # Project metadata, dependencies & scripts
├── tailwind.config.js       # Custom dark theme, colors & glow utilities
├── postcss.config.js        # PostCSS configuration
├── tsconfig.json            # Root TypeScript compiler options
├── README.md                # Project documentation
├── WEEK_01_LEARNING_NOTES.md # CS student technical guide & concept handbook
└── WEEK_01_COMPLETION_REPORT.md # Audit, test results & Week 2 roadmap
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: `v18.0.0` or later (tested on `v24.19.0`)
- **npm**: `v9.0.0` or later (tested on `v11.17.0`)

### Installation & Local Setup

1. **Clone or navigate to the repository:**
   ```bash
   cd DevSphere
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

3. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:5173`.

4. **Run static code analysis (Linter):**
   ```bash
   npm run lint
   ```

5. **Execute TypeScript verification and build for production:**
   ```bash
   npm run build
   ```

6. **Preview the production build locally:**
   ```bash
   npm run preview
   ```

---

## ♿ Accessibility & Responsiveness Highlights

- **Semantic HTML5:** Strict utilization of `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, and `<footer>`.
- **Keyboard Navigation:** Full tab order support with visible focus rings (`:focus-visible`).
- **Screen Reader Support:** Accessible modal with `role="dialog"`, `aria-modal="true"`, `aria-labelledby`, and `aria-describedby`. Mobile navigation toggles use `aria-expanded` and `aria-label`.
- **Reduced Motion Support:** Respects user operating system preferences (`prefers-reduced-motion: reduce`) by disabling unnecessary transitions.
- **Responsive Layout:** Tested across viewport widths:
  - **Mobile:** 375px (Compact single-column cards, collapsible drawer)
  - **Tablet:** 768px (2-column grids, optimized spacing)
  - **Desktop:** 1280px+ (Full 4-column ecosystem layout, widescreen dashboard mockup)

---

## ⚖️ Milestone Boundaries

- **Week 1 Scope:** Frontend foundation, design system, static architecture, accessible landing page, and developer mockup.
- **Intentionally Postponed to Week 2+:** Backend APIs, database models, user authentication (OAuth), and interactive execution environments.
