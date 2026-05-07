# Portfolio Setup Guide

## Step-by-Step Customization

### 1. Update Your Personal Information

Open `src/data/portfolio.ts` and update:

#### Change Your Name
```typescript
// In Hero component (src/components/Hero.tsx)
<h1 className="text-6xl md:text-8xl font-bold mb-6 font-mono tracking-wider">
  Your Name Here  {/* Change this */}
</h1>
```

#### Update About Section
Replace the `aboutText` in `src/data/portfolio.ts`:
```typescript
export const aboutText = "I am a software engineer with 5+ years of experience...";
```

#### Update Skills
Modify the `skills` array:
```typescript
export const skills: Skill[] = [
  {
    category: "Frontend",
    items: ["React", "Vue", "TypeScript", "Tailwind CSS", "etc..."]
  },
  // Add or modify more categories
];
```

#### Update Projects
Modify the `projects` array:
```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project Name",
    date: "January 1, 2025",
    description: "Your project description...",
    tags: ["React", "TypeScript", "Design"],
    link: "https://your-project-link.com" // Optional
  },
  // Add more projects
];
```

### 2. Update Header

Edit `src/components/Header.tsx`:

```typescript
// Change the site name
<h1 className="text-2xl font-bold font-mono text-white">YourName.me</h1>
```

### 3. Add Your Photo

1. Save your professional photo as `profile.jpg` in `src/assets/`
2. Update `src/components/About.tsx`:

```typescript
import profileImg from '../assets/profile.jpg';

// In the About component JSX:
<img 
  src={profileImg} 
  alt="Your Name" 
  className="w-full h-full object-cover rounded-lg" 
/>
```

### 4. Update Footer

Edit `src/components/Footer.tsx`:

```typescript
// Add your actual links
<a href="https://github.com/yourprofile" target="_blank" rel="noopener noreferrer">
  GitHub
</a>

<a href="mailto:your.email@example.com">Email</a>

<a href="tel:+1234567890">Phone</a>
```

### 5. Add Social Media Links

The `SocialLinks` component is available but not currently used. To add it:

```typescript
// In Hero.tsx or About.tsx, add:
import { SocialLinks } from './SocialLinks';

// Then in JSX:
<SocialLinks />
```

Then update the URLs in `src/components/SocialLinks.tsx`:

```typescript
const socials = [
  { name: "GitHub", icon: "GH", url: "https://github.com/yourprofile" },
  { name: "LinkedIn", icon: "LI", url: "https://linkedin.com/in/yourprofile" },
  // etc...
];
```

### 6. Customize Colors

Edit `src/index.css` or `tailwind.config.js` to change the color scheme:

```typescript
// tailwind.config.js
theme: {
  extend: {
    colors: {
      primary: '#your-color',
      secondary: '#your-color',
    }
  }
}
```

### 7. Update Meta Tags

Edit `index.html`:

```html
<meta name="description" content="Your professional portfolio description" />
<meta name="keywords" content="developer, portfolio, react, your-keywords" />
<title>Your Name - Full Stack Developer Portfolio</title>
```

### 8. Deploy Your Portfolio

#### Option A: Vercel (Recommended)

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

#### Option B: Netlify

```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod --dir=dist
```

#### Option C: GitHub Pages

1. Update `vite.config.ts`:
```typescript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',
})
```

2. Build and deploy:
```bash
npm run build
# Push dist/ folder to gh-pages branch
```

### 9. Project Links

Add links to live projects in your projects data:

```typescript
export const projects: Project[] = [
  {
    id: "1",
    title: "Your Project",
    date: "Date",
    description: "Description",
    tags: ["Tags"],
    link: "https://your-live-project.com" // Add this
  },
];
```

### 10. CV Download

To enable CV download:

1. Place your CV PDF in `public/cv.pdf`
2. Update the button in `src/components/About.tsx`:

```typescript
<a 
  href="/cv.pdf" 
  download 
  className="mt-8 px-6 py-3 border border-white rounded-lg text-white hover:bg-white hover:text-black transition-colors duration-300 font-mono"
>
  Download CV ↓
</a>
```

## Tips & Best Practices

- **Keep it concise**: Use 2-3 lines max per project description
- **Update regularly**: Keep your portfolio current with recent projects
- **Use real links**: Make sure all project links are working
- **Optimize images**: Compress images before adding them (use TinyPNG or similar)
- **Mobile first**: Always test on mobile devices
- **Fast loading**: Keep file sizes small for better performance

## Troubleshooting

### Styles not applying?
- Clear browser cache (Ctrl+Shift+Delete)
- Restart dev server
- Check Tailwind config

### Images not showing?
- Verify file path is correct
- Check file extensions (.jpg, .png, .webp)
- Use forward slashes in paths

### Links not working?
- Make sure URLs start with `https://`
- Use `target="_blank"` for external links
- Test all links before deploying

## Next Steps

1. ✅ Update personal information
2. ✅ Add your photo
3. ✅ Update projects
4. ✅ Add social links
5. ✅ Deploy to your hosting
6. ✅ Share with the world!

---

Need more help? Check the main README.md or the React/Tailwind documentation.
