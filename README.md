# Shubham Sonale — Portfolio & Velora Intelligence

Personal research writer and analyst portfolio for Shubham Sonale, alongside **Velora** — an independent intelligence publication exploring advancements in artificial intelligence, technology architecture, and cognitive agents.

🔗 **Live Site:** [https://shubhamsonale2004-ux.github.io/Velora/](https://shubhamsonale2004-ux.github.io/Velora/)

---

## Architecture & Tech Stack

- **Framework:** [React 19](https://react.dev/) + [Vite](https://vite.dev/)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography:** Fraunces (Editorial Serif) & Work Sans (Body)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Deployment:** [GitHub Pages](https://pages.github.com/) via GitHub Actions (`.github/workflows/static.yml`)

---

## Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the live site.

3. **Build for production:**
   ```bash
   npm run build
   ```
   The production-optimized static files are compiled into the `dist/` directory with relative asset paths.

4. **Preview production build locally:**
   ```bash
   npm run preview
   ```

---

## GitHub Pages Deployment

This project uses an automated GitHub Actions workflow (`.github/workflows/static.yml`) that builds the Vite application and deploys the `dist/` folder on every push to `main`.

### Enabling GitHub Actions Deployment

If the live site shows a blank page or 404, ensure GitHub Pages is configured to use **GitHub Actions**:

1. Go to your repository settings: **Settings > Pages**
2. Under **Build and deployment > Source**, select:
   👉 **GitHub Actions** *(instead of "Deploy from a branch")*
3. Push a commit or go to **Actions** and manually trigger **Deploy to GitHub Pages**.
4. GitHub Pages will build the static bundle and deploy it to `https://shubhamsonale2004-ux.github.io/Velora/`.

---

## License & Credits

Designed and maintained by Shubham Sonale. All rights reserved.
