# Professional Portfolio Website

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite.

## Features

- **Modern Design**: Dark theme with smooth animations and transitions
- **Responsive Layout**: Works perfectly on desktop, tablet, and mobile devices
- **Smooth Navigation**: Scroll-based navigation with fixed header
- **Multiple Sections**: Hero, About, Skills, Projects, and Footer
- **Fast Performance**: Built with Vite for optimal build speed
- **TypeScript**: Full type safety with TypeScript
- **Tailwind CSS**: Utility-first CSS framework

## Getting Started

### Installation

```bash
npm install
# or
pnpm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
```

## Customization

### Update Your Information

Edit `src/data/portfolio.ts`:

```typescript
export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["Your Skills Here"]
  },
];

export const projects: Project[] = [
  {
    title: "Your Project",
    date: "Date",
    description: "Description",
    tags: ["Tags"],
  },
];

export const aboutText = "Your bio here...";
```

### Update Components

- **Header**: `src/components/Header.tsx`
- **Hero**: `src/components/Hero.tsx`
- **About**: `src/components/About.tsx`
- **Skills**: `src/components/Skills.tsx`
- **Projects**: `src/components/Projects.tsx`
- **Footer**: `src/components/Footer.tsx`

### Add Your Photo

Place your image in `src/assets/` and update the About component:

```typescript
import yourPhoto from '../assets/your-photo.jpg';
```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Projects.tsx
│   └── Footer.tsx
├── data/
│   └── portfolio.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Deployment

### Vercel
1. Push to GitHub
2. Import repository in Vercel
3. Deploy

### Netlify
1. Connect your GitHub repository
2. Deploy

### GitHub Pages
Update `vite.config.ts` and run `npm run build`

## Technologies

- React 19
- TypeScript
- Tailwind CSS 4
- Vite
- ESLint

## License

Free to use and modify for your personal portfolio.

import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
