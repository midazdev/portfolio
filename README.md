# ⚡ Modern Developer Portfolio & System Architecture Showcase

An interactive, high-performance developer portfolio website designed to showcase engineering mastery, clean architecture, and modern fullstack competencies (**Next.js**, **Python & FastAPI**, **Astro**, **Tailwind CSS**, and **Distributed Systems**) while guaranteeing **100% IP safety (Zero NDA / confidential business leak)**.

---

## 🌟 Key Features

- 🖥️ **Interactive In-Browser CLI Terminal**: Visitors can query system capabilities (`skills`, `projects`, `fastapi`, `nextjs`, `astro`, `contact`, etc.) with history and autocomplete.
- 🏗️ **Interactive System Architecture Explorer**: Visual topology navigator (Edge CDN $\to$ API Gateway $\to$ Microservices $\to$ Redis Cache $\to$ PostgreSQL $\to$ Async Workers) with inspectable throughput & resilience metrics.
- 💻 **Idiomatic Code Playground**: Real production-grade snippets across Python FastAPI (Async + Dependency Injection), Next.js 15 (Server Actions + Zod), and Astro (Islands Architecture).
- 📊 **Sanitized Case Studies**: Demonstrates problem-solving and architectural impact using sanitized, production-proven system design blueprints.
- 🎨 **Modern Cyber-Minimalist Theme**: Polished dark mode, glassmorphism cards, responsive layout, and fluid typography with Tailwind CSS.
- ⚙️ **Centralized Configuration**: All personal info, projects, and skills are typed and configured in `src/data/portfolioData.ts`.
- 🚀 **1-Click Deployment**: Preconfigured for automated deployment to **GitHub Pages** (via GitHub Actions) or **Vercel / Cloudflare Pages**.

---

## 🛠️ Tech Stack

- **Framework**: [React](https://react.dev/) + [Vite](https://vitejs.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **CI/CD**: GitHub Actions (`.github/workflows/deploy.yml`)

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Local Development Server
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 3. Build for Production
```bash
npm run build
```
The compiled static assets will be in the `dist/` directory ready for deployment.

---

## ⚙️ Customization Guide

You can customize the portfolio contents without touching UI code:
1. Open `src/data/portfolioData.ts`.
2. Update `profile` (Name, Role, Bio, Social Links, Email).
3. Update `caseStudies` (Add or modify sanitized architectural projects).
4. Update `skillCategories` (Customize tech stacks and proficiency levels).
5. Update `architectureTopology` or `codeSnippets` as desired.

---

## 🌐 Deploy to GitHub Pages (Automated)

1. Push this repository to your GitHub account (`https://github.com/midazdev/portfolio`).
2. In your GitHub repository, go to **Settings** $\to$ **Pages**.
3. Under **Build and deployment** $\to$ **Source**, select **GitHub Actions**.
4. Push any commit to `main` branch — GitHub Actions will automatically build and deploy your site!

---

## 📄 License
MIT License. Free to use and customize.
