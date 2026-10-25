# Pruthwiraj Deshmukh Portfolio

A responsive marketing portfolio built with Next.js and TypeScript. The content is based on Pruthwiraj's CV and highlights customer research, commercial results, projects, education, and skills.

## Run locally

Requires Node.js 18 or newer and npm.

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The portfolio loads directly, without an introduction screen.

## Production build

```bash
npm run build
npm start
```

GitHub Actions builds a static export for GitHub Pages. The Pages base path is read from `GITHUB_REPOSITORY`, so the repository can be renamed without changing the site code.

## Update content

- Edit [data/portfolio.ts](data/portfolio.ts) for CV details, contact links, projects, and skills.
- Edit [app/page.tsx](app/page.tsx) for section layout and [app/globals.css](app/globals.css) for styling.
- Edit [app/layout.tsx](app/layout.tsx) for page metadata.

The source CV contains a birth date and street address; the public site uses only the Mumbai location.
