# Hero Apps

## Description

**Hero Apps** is a dynamic, fully responsive single-page application (SPA) built with React and Vite, mimicking a cutting-edge app marketplace. Dive in to discover, search, install, and manage apps—all in one fluid, interactive experience.

It delivers an effortless way to browse and handle apps via a polished, user-centric interface. Whether uncovering fresh discoveries or tweaking your installed lineup, the SPA architecture keeps everything lightning-fast and engaging. Prioritizing speed and aesthetics, it packs in smart features like instant search filters, localStorage-backed installation tracking, and live UI refreshes—for a buttery-smooth ride across every device.

---

## Technologies

### Frontend Core
- **React 19** – Modular UI powerhouse  
- **React Router 7** – Fluid client-side navigation  
- **Vite 7** – Ultra-swift bundler and dev server  
- **Axios** – Robust API interactions  
- **Recharts** – Vivid, interactive visualizations  

### Design & Styling
- **Tailwind CSS 4** – Atomic CSS utilities  
- **DaisyUI 5** – Tailwind-ready component suite  

### Tools & DevOps
- **React Toastify** – Sleek notification system  
- **ESLint 9** – Rigorous code quality checks  
- **@vitejs/plugin-react** – Optimized React-Vite synergy  

---

## Features

- 🧱 **Intuitive Layout** — Includes a Header, Navbar (Home, Apps, Installation), and custom Footer  
- 🔍 **Live Search & Filter** — Instantly filter apps by name, case-insensitive  
- ⬇️ **Install / ❌ Uninstall Apps** — Persistent using `localStorage`  
- 📊 **App Analytics** — Interactive rating charts powered by Recharts  
- 💬 **Toast Notifications** — Feedback for every install/uninstall action  
- ⚙️ **Sorting by Downloads** — High-Low or Low-High sorting logic  
- 🚧 **Custom Error Page** — Graceful 404 fallback and route-safe reloads  
- 🔄 **Loading Animations** — Smooth transitions and search loading states  
- 📱 **Fully Responsive** — Works perfectly on mobile, tablet, and desktop  
- 🚀 **Deployed Build Ready** — Optimized for Vercel, Netlify, or Cloudflare  

---

## Scripts

| Command | Description |
|----------|-------------|
| `npm run dev` | Start the development server |
| `npm run build` | Build the production app |
| `npm run preview` | Preview the production build |
| `npm run lint` | Run ESLint for code analysis |

---

## Setup & Usage

```bash
# 1️⃣ Install dependencies
npm install

# 2️⃣ Run in development mode
npm run dev

# 3️⃣ Build for production
npm run build

# 4️⃣ Preview production build
npm run preview
