# Portfolio Content Customization Checklist

This comprehensive guide covers everything you need to personalize your portfolio site and maintain it going forward. Use this as your reference for customizing content, managing projects, and deploying your site.

---

## 🚨 Critical Items (Must Do Before Launch)

### 1. Resume PDF
**File**: `public/resume-florian-schwarzinger.pdf`
- Replace with your own resume PDF
- Keep the filename or update references in `src/pages/Resume.tsx`

### 2. Contact Form
**File**: `src/components/ContactForm.tsx` (line 88)
```tsx
const response = await fetch("https://formspree.io/f/YOUR_FORM_ID_HERE", {
```
- Sign up at [Formspree.io](https://formspree.io) (free tier available)
- Create a form and get your form ID
- Replace `YOUR_FORM_ID_HERE` with your actual Formspree form ID
- **Test the form after deployment!** (Forms won't work on localhost with Formspree)

### 3. Google Analytics
**File**: `index.html` (lines 61, 66)
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_GA_ID"></script>
...
gtag('config', 'YOUR_GA_ID');
```
- Create a Google Analytics 4 property at [analytics.google.com](https://analytics.google.com)
- Get your Measurement ID (format: G-XXXXXXXXXX)
- Replace both instances of `YOUR_GA_ID` with your actual ID
- **Optional**: Remove the entire analytics script block (lines 60-67) if you don't want analytics

### 4. Domain & URLs
**Files**: `index.html` (lines 10, 21, 22, 23, 30, 40, 41)
- Replace all instances of `https://yourdomain.com/` with your actual domain
- Update canonical URL (line 10)
- Update Open Graph URLs (lines 21-23)
- Update Twitter Card image (line 30)
- Update structured data URLs (lines 40-41)
- **Note**: If using Lovable hosting, your domain will be `yoursite.lovable.app`

### 5. Social Media Handles
**File**: `index.html` (lines 31, 43-44)
```html
<meta name="twitter:creator" content="@yourtwitterhandle" />
```
- Replace `@yourtwitterhandle` with your Twitter/X handle (or remove the line if you don't have one)
- Update GitHub URL in structured data (line 43): `https://github.com/YOUR_USERNAME`
- Update LinkedIn URL in structured data (line 44): `https://www.linkedin.com/in/YOUR_PROFILE/`

### 6. Profile Images
**Files**: 
- `public/images/profile/avatar.jpg` - Your professional headshot (square, 400x400px+)
- `public/images/profile/about-hero.jpg` - Background image for About page (landscape, 1920x1080px+)

Replace these with your own high-quality images.

---

## 📝 High Priority Content

### About Page
**File**: `src/pages/About.tsx`

**Lines 18-48**: Hero Section
```tsx
<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
  Florian Schwarzinger
</h1>
<p className="text-xl md:text-2xl text-primary mb-4">Robotics Engineer</p>
<p className="text-lg text-muted-foreground max-w-2xl">
  [Your professional summary - keep it concise and impactful]
</p>
```

**Lines 61-70**: About Me Text
- Replace with your own story and background
- Explain what drives your passion for your field
- Mention your specializations and unique interests
- Add personal touches (hobbies, interests beyond work)

**Lines 84-148**: Skills & Expertise
Update these skill categories with your own:
- **Technical Skills** (lines 90-106) - Your core technical competencies
- **Programming Languages** (lines 112-121) - Languages you're proficient in
- **Tools & Platforms** (lines 127-143) - Software, frameworks, tools you use

### Contact Page
**File**: `src/pages/Contact.tsx`

**Lines 17-20**: Introduction Text
```tsx
<p className="text-lg text-muted-foreground mb-6">
  I'm always interested in hearing about new projects and opportunities...
</p>
```
Customize this to reflect your availability and interests.

**Lines 31-57**: Social Links
Update with your own social media profiles:
```tsx
{ icon: Github, label: "GitHub", href: "https://github.com/YOUR_USERNAME" },
{ icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/YOUR_PROFILE/" },
{ icon: Mail, label: "Email", href: "mailto:your.email@example.com" },
```

### Home Page (Index)
**File**: `src/pages/Index.tsx`

**Lines 18-29**: Hero Section
```tsx
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4">
  Florian Schwarzinger
</h1>
<p className="text-xl md:text-2xl text-primary mb-4">Robotics Engineer</p>
<p className="text-lg text-muted-foreground max-w-2xl">
  [Your compelling tagline/elevator pitch]
</p>
```

**Lines 48-82**: About Section
- Update introduction text (lines 52-58)
- Customize focus areas (lines 64-74)
- Make it engaging and showcase your expertise

---

## 🎯 Project Management

### Adding/Editing Projects
**File**: `src/data/projects.ts`

Each project follows this structure:
```typescript
{
  id: "unique-slug",              // Used in URL: /projects/unique-slug
  title: "Project Title",
  description: "Brief description shown on project cards (keep under 200 chars)",
  image: "/images/projects/folder-name/hero.jpg",
  tags: ["Tag1", "Tag2", "Tag3"],
  year: "2024",
  technologies: ["React", "Node.js", "PostgreSQL"],
  
  // Optional fields
  github: "https://github.com/username/repo",
  demo: "https://demo-link.com",
  videoUrl: "https://youtube.com/watch?v=...",
  
  gallery: [
    { url: "/images/projects/folder-name/image1.jpg", alt: "Descriptive alt text" },
    { url: "/images/projects/folder-name/image2.jpg", alt: "Descriptive alt text" }
  ],
  
  content: {
    description: "## Overview\n\nDetailed project description with markdown...",
    challenges: "## Technical Challenges\n\nProblems you solved...",
    features: "## Key Features\n\n- Feature 1\n- Feature 2\n- Feature 3",
    lessonsLearned: "## What I Learned\n\nInsights and takeaways..."
  }
}
```

### Project Images Structure
```
public/images/projects/
├── project-folder-name/
│   ├── hero.jpg          # Main project image (shown on cards and detail page)
│   ├── screenshot1.jpg   # Gallery images
│   ├── screenshot2.jpg
│   ├── diagram.png
│   └── demo.jpg
```

**Image Guidelines**:
- Use descriptive, lowercase folder names (use hyphens for spaces)
- **Hero images**: 1920x1080px or 1600x900px (16:9 ratio recommended)
- **Gallery images**: 1200x800px or larger
- **Format**: JPG for photos, PNG for screenshots/diagrams with text
- **Optimization**: Compress images before uploading (use [TinyPNG](https://tinypng.com/) or [Squoosh](https://squoosh.app/))
- **Alt text**: Always include descriptive alt text for accessibility

### Markdown Content Features
The `content` fields support rich markdown:
- **Headings**: `## Heading`, `### Subheading`
- **Bold/Italic**: `**bold**`, `*italic*`
- **Lists**: `- Unordered item` or `1. Ordered item`
- **Links**: `[Link text](https://url.com)`
- **Code blocks**: 
  ````markdown
  ```javascript
  const example = "code here";
  ```
  ````
- **Inline code**: `` `code` ``
- **Images**: `![Alt text](/path/to/image.jpg)`
- **Tables**: Standard markdown tables (use GitHub Flavored Markdown)

**Using Images in Markdown**:
```markdown
![Dashboard Interface](/images/projects/my-project/screenshot.jpg)

# You can also use HTML for more control:
<img src="/images/projects/my-project/diagram.png" alt="Architecture diagram" width="600" />
```

---

## 🔍 Search & Filtering

### Project Search
**File**: `src/pages/Projects.tsx` (lines 15-32)

The search functionality:
- Searches through project **titles**, **descriptions**, and **tags**
- Works in combination with tag filters
- Case-insensitive for better user experience
- Real-time filtering (no submit button needed)

**How to customize**:
- To search additional fields, modify the filter logic
- To change search behavior, update the `filteredProjects` calculation

### Tag Filtering
Tags are automatically extracted from all projects and displayed as filter buttons. Users can:
- Click "All" to show everything
- Click a specific tag to filter by that tag
- Use search simultaneously with tag filters

---

## 🎨 Design Customization

### Color Scheme
**File**: `src/index.css` (lines 8-65)

The site uses a semantic color system built with CSS variables. To change the color scheme:

```css
:root {
  /* Light mode colors */
  --background: 222.2 84% 4.9%;           /* Page background */
  --foreground: 210 40% 98%;              /* Main text color */
  --primary: 217.2 91.2% 59.8%;           /* Accent/brand color */
  --secondary: 217.2 32.6% 17.5%;         /* Secondary elements */
  --muted: 217.2 32.6% 17.5%;             /* Subtle backgrounds */
  --accent: 217.2 32.6% 17.5%;            /* Accent backgrounds */
  --border: 217.2 32.6% 17.5%;            /* Border color */
  /* ... more colors */
}
```

**Color Format**: HSL (Hue Saturation Lightness)
- Format: `HUE SATURATION% LIGHTNESS%`
- Example: `217.2 91.2% 59.8%` = Blue
- Use [HSL Color Picker](https://hslpicker.com/) to find values
- **Important**: Keep the format exactly as shown (no `hsl()` wrapper)

**To create your own color scheme**:
1. Pick your primary brand color
2. Use a tool like [Coolors](https://coolors.co/) or [Paletton](https://paletton.com/) to generate complementary colors
3. Update the HSL values in index.css
4. The site will automatically adapt to your new colors!

### Typography
**File**: `src/index.css` (lines 71-79)

```css
body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, ...;
}
```

**To change fonts**:
1. Choose fonts from [Google Fonts](https://fonts.google.com/)
2. Add the Google Fonts link to `index.html` `<head>`:
   ```html
   <link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
   ```
3. Update the `font-family` in `src/index.css`
4. (Optional) Update `tailwind.config.ts` for more control

---

## 🔧 Technical Maintenance

### Adding New Pages
1. **Create page component** in `src/pages/NewPage.tsx`:
   ```tsx
   const NewPage = () => {
     return (
       <div className="min-h-screen pt-20">
         <div className="container mx-auto px-4">
           <h1>New Page</h1>
           {/* Your content */}
         </div>
       </div>
     );
   };
   export default NewPage;
   ```

2. **Add route** in `src/App.tsx`:
   ```tsx
   <Route path="/new-page" element={<NewPage />} />
   ```

3. **Update navigation** in `src/components/Header.tsx`:
   ```tsx
   { name: 'New Page', to: '/new-page' }
   ```

### SEO for New Pages
Add page-specific meta tags:
```tsx
import { useEffect } from 'react';

const NewPage = () => {
  useEffect(() => {
    // Update page title
    document.title = "Page Title | Your Name";
    
    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Page description here (max 160 chars)');
    }
  }, []);
  
  return <div>{/* ... */}</div>;
};
```

### 404 Page Customization
**File**: `src/pages/NotFound.tsx`

The 404 page includes:
- Animated robot emoji (🤖)
- Random robotics-themed quotes
- Navigation buttons

**To customize quotes** (lines 8-15):
```typescript
const robotQuotes = [
  "Your custom quote here!",
  "Another funny error message",
  "404: Humor not found... just kidding! 😄"
];
```

Make them personal and showcase your personality!

---

## 🚀 Deployment

### Pre-Launch Checklist
Use this before going live:

**Content:**
- [ ] All personal content replaced (name, bio, tagline)
- [ ] Resume PDF uploaded and linked correctly
- [ ] All project data customized
- [ ] Project images uploaded and displaying correctly
- [ ] Profile images replaced
- [ ] About page fully customized
- [ ] Contact page social links updated

**Technical:**
- [ ] Contact form tested and working
- [ ] Formspree form ID configured
- [ ] Analytics ID added (or analytics removed if not using)
- [ ] Domain URLs updated in `index.html`
- [ ] All social media links working
- [ ] All project GitHub/demo links working
- [ ] Mobile responsiveness verified
- [ ] All images optimized (<500KB each)

**SEO & Performance:**
- [ ] Lighthouse audit run (aim for 90+ on all scores)
- [ ] Meta tags customized for all pages
- [ ] Structured data (JSON-LD) updated
- [ ] Canonical URLs set correctly
- [ ] Social media preview images tested
- [ ] No broken links or images

### Deployment Options

#### Option 1: Lovable Hosting (Easiest)
1. Click the **"Publish"** button in the top-right of Lovable
2. Your site will be live at `yoursite.lovable.app`
3. To add a custom domain:
   - Go to Project Settings → Domains
   - Follow the instructions to connect your domain
   - **Note**: Requires a paid Lovable plan

#### Option 2: GitHub Pages (Free)
1. Click **GitHub** button in Lovable and connect your account
2. Push your code to the repository
3. In GitHub repository settings:
   - Go to Settings → Pages
   - Select source: Deploy from branch
   - Select branch: `main` and folder: `/root`
   - Click Save
4. Your site will be live at `yourusername.github.io/repo-name`

#### Option 3: Other Hosting (Netlify, Vercel, etc.)
1. Connect GitHub in Lovable to sync your code
2. In your hosting provider (Netlify/Vercel):
   - Connect your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Deploy!

### Client-Side Routing for Static Hosts
**Files**: `public/404.html`, `index.html`, `src/main.tsx`

These files work together to handle React Router on static hosts:
- `404.html` → Redirects 404s to index.html
- `index.html` → Script restores the correct URL
- `src/main.tsx` → BrowserRouter handles navigation

**⚠️ Important**: Don't modify these files unless you're changing hosting platforms or understand the SPA routing workaround.

---

## 🛠️ Development Guide

### Running Locally
If you want to develop locally (after connecting to GitHub):

```bash
# Clone your repository
git clone https://github.com/yourusername/your-repo.git
cd your-repo

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Project Structure
```
src/
├── components/          # Reusable components
│   ├── ui/             # shadcn UI components (don't edit directly)
│   ├── Header.tsx      # Site header/navigation
│   ├── Footer.tsx      # Site footer
│   ├── ProjectCard.tsx # Project card component
│   └── ...             # Other custom components
├── pages/              # Page components (correspond to routes)
│   ├── Index.tsx       # Home page
│   ├── About.tsx       # About page
│   ├── Projects.tsx    # Projects listing
│   ├── ProjectDetail.tsx  # Individual project pages
│   ├── Contact.tsx     # Contact page
│   └── NotFound.tsx    # 404 page
├── data/               # Data files
│   └── projects.ts     # Project data
├── lib/                # Utility functions
│   ├── utils.ts        # General utilities
│   └── images.ts       # Image path utilities
├── hooks/              # Custom React hooks
└── App.tsx             # Main app component & routing
```

### Component Best Practices
```tsx
// ✅ Good: Focused, reusable component
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-muted/5 border border-border rounded-lg">
      <img src={project.image} alt={project.title} />
      <h3>{project.title}</h3>
      <p>{project.description}</p>
    </div>
  );
};

// ❌ Avoid: Components doing too much
const ProjectsPageWithEverythingIncluded = () => {
  // 500 lines of code...
};
```

### Styling Guidelines
- **Use design tokens**: `text-primary`, `bg-background`, `border-border`
- **Avoid hardcoded colors**: Don't use `text-blue-500`, `bg-gray-800`
- **Responsive design**: Use `md:` and `lg:` prefixes for breakpoints
- **Semantic HTML**: Use proper tags (`<header>`, `<main>`, `<article>`)
- **Accessibility**: Include `alt` text, aria labels, proper heading hierarchy

---

## 📚 Additional Resources

### Design & Images
- **[Unsplash](https://unsplash.com/)**: Free high-quality stock photos
- **[Pexels](https://www.pexels.com/)**: Free stock photos and videos
- **[TinyPNG](https://tinypng.com/)**: Compress PNG/JPG without quality loss
- **[Squoosh](https://squoosh.app/)**: Google's advanced image compression tool
- **[Coolors](https://coolors.co/)**: Generate color palettes

### SEO & Analytics
- **[Google Search Console](https://search.google.com/search-console)**: Monitor search performance
- **[Google Analytics](https://analytics.google.com/)**: Track site traffic
- **[Lighthouse](https://developers.google.com/web/tools/lighthouse)**: Audit performance/SEO (built into Chrome DevTools - F12)
- **[Schema Markup Validator](https://validator.schema.org/)**: Test structured data

### Development Tools
- **[React Router Docs](https://reactrouter.com/)**: Routing documentation
- **[Tailwind CSS Docs](https://tailwindcss.com/)**: Styling documentation
- **[shadcn/ui](https://ui.shadcn.com/)**: Component library documentation
- **[MDN Web Docs](https://developer.mozilla.org/)**: Web development reference

### Markdown
- **[StackEdit](https://stackedit.io/)**: Online markdown editor
- **[Typora](https://typora.io/)**: Desktop markdown editor
- **[Markdown Guide](https://www.markdownguide.org/)**: Comprehensive markdown reference

---

## 🆘 Troubleshooting

### Images Not Loading
**Symptoms**: Broken image icons, 404 errors in console

**Solutions**:
1. Check file path matches exactly (paths are case-sensitive!)
2. Ensure images are in the `public/` directory
3. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
4. Open browser console (F12) and check for 404 errors
5. Verify image file extensions match exactly (.jpg vs .jpeg)

### Contact Form Not Working
**Symptoms**: Form submits but no email received

**Solutions**:
1. Verify Formspree form ID is correct in `ContactForm.tsx`
2. Check your Formspree dashboard for submissions
3. **Important**: Forms don't work on localhost - deploy first!
4. Check browser console for errors
5. Ensure email is confirmed in Formspree account

### Routing Issues After Deployment
**Symptoms**: Direct URLs to pages return 404

**Solutions**:
1. Ensure `public/404.html` exists and hasn't been modified
2. Check your hosting platform's SPA configuration
3. Verify the redirect script in `index.html` is intact (lines 70-81)
4. For GitHub Pages: Ensure repository is public or you have GitHub Pro
5. Clear browser cache and try again

### Build Failures
**Symptoms**: Site won't build, deployment fails

**Solutions**:
1. Run `npm install` to ensure all dependencies are installed
2. Check terminal for TypeScript errors
3. Verify all imports are correct (check file paths)
4. Look for missing closing tags, brackets, or parentheses
5. Check for unused variables (TypeScript is strict!)

### Styling Not Applying
**Symptoms**: Components look broken or unstyled

**Solutions**:
1. Ensure Tailwind classes are spelled correctly
2. Check that `index.css` is imported in `main.tsx`
3. Verify custom CSS variables are defined in `index.css`
4. Clear browser cache
5. Check browser console for CSS errors

### Search Not Working
**Symptoms**: Search bar doesn't filter projects

**Solutions**:
1. Check that project data includes `title`, `description`, and `tags`
2. Verify no JavaScript errors in console
3. Ensure all projects are in the correct format
4. Try searching for text you know exists in a project

---

## 💡 Pro Tips

1. **Start Small**: Replace content gradually. Test each change before moving on.

2. **Image Optimization**: Large images slow down your site. Always compress before uploading!

3. **Mobile First**: Always test on mobile devices. Most visitors will view on phones.

4. **Consistent Branding**: Use the same profile photo, color scheme, and tone everywhere.

5. **Keep It Updated**: Regularly add new projects and update your skills.

6. **Analytics Insights**: Check your analytics monthly to see which projects resonate most.

7. **SEO Takes Time**: It may take 2-4 weeks for Google to index your site after launch.

8. **Backup**: Connect to GitHub for automatic backups of your code.

9. **Fast Loading**: Keep total page size under 3MB. Optimize everything!

10. **Personal Touch**: Add personality! The 404 page has humor - carry that throughout.

---

## 🎯 Quick Start Guide

**If you're in a hurry, do these in order:**

1. ✅ Replace resume PDF
2. ✅ Update contact form Formspree ID
3. ✅ Replace profile images
4. ✅ Update About page (name, bio, skills)
5. ✅ Update social links
6. ✅ Edit or remove placeholder projects
7. ✅ Test contact form
8. ✅ Deploy!

**After launch:**
- Add your actual projects
- Get analytics running
- Share on LinkedIn/Twitter
- Monitor for any bugs

---

## 📞 Need Help?

If you get stuck:

1. **Check browser console** (F12 → Console tab) for error messages
2. **Google the error** - Include "React" or "Tailwind" in your search
3. **Search Stack Overflow** - Most common issues are answered there
4. **Check documentation**: 
   - [React Docs](https://react.dev/)
   - [Tailwind Docs](https://tailwindcss.com/)
   - [Lovable Docs](https://docs.lovable.dev/)
5. **Test in incognito** - Rules out cache/extension issues

---

## ✨ Final Thoughts

You have a solid, professional portfolio foundation! The key now is to:

1. **Add YOUR story** - Your unique projects and experiences
2. **Keep it updated** - Add new work as you complete it
3. **Show personality** - Let your passion shine through
4. **Stay consistent** - Update all sections when you make changes

**Remember**: A good portfolio is never truly "done" - it evolves with your career!

Good luck, and happy customizing! 🚀

---

**Last Updated**: 2025
**Version**: 2.0 (Final comprehensive version)