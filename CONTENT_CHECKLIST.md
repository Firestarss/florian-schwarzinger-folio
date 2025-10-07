# Content Personalization Checklist

This guide outlines what placeholder content needs to be replaced with your personal information before deployment.

---

## Critical Items (Must Replace Before Deployment)

### 1. Resume PDF
- **File**: `public/resume-florian-schwarzinger.pdf`
- **Action**: Replace with your own resume PDF
- **Reference**: Update filename in `src/pages/Resume.tsx` if you change the filename

### 2. Contact Form Endpoint
- **File**: `src/components/ContactForm.tsx`
- **Action**: Replace the Formspree form ID with your own
- **Find**: Look for the `action` attribute in the form element
- **Get your ID**: Sign up at [Formspree.io](https://formspree.io) and create a new form

---

## High Priority Content to Personalize

### Project Data (`src/data/projects.ts`)

This file contains all project information displayed throughout the portfolio. Each project has:

#### Basic Project Fields
- `id`: Unique identifier (used in URLs)
- `title`: Project name
- `description`: Brief overview for project cards
- `image`: Main project image using `getProjectImage(projectId, 'hero.jpg')`
- `tags`: Array of technology/category tags displayed as chips
- `content`: Detailed project description (supports markdown)
- `techStack`: (Optional) Array of technologies used, displayed as badges
- `gallery`: (Optional) Array of additional project images
- `videoUrl`: (Optional) Demo video URL
- `challenges`: (Optional) Challenges faced (supports markdown)
- `keyFeatures`: (Optional) Array of key features
- `lessonsLearned`: (Optional) Array of lessons learned

#### Managing Project Images

**Image Storage Structure:**
```
public/images/projects/
  └── [project-id]/
      ├── hero.jpg          (main image)
      ├── image-1.jpg       (additional images)
      ├── image-2.jpg
      └── ...
```

**Using Images in Project Data:**

1. **For the image field:**
   ```typescript
   image: getProjectImage('your-project-id', 'hero.jpg')
   ```

2. **In markdown content:**
   ```markdown
   ![Description](/images/projects/your-project-id/image-name.jpg)
   ```

**Adding/Removing Projects:**
- Add new projects to the `projects` array following the existing structure
- Remove unwanted projects by deleting them from the array
- Create corresponding image folders in `public/images/projects/` for new projects

### About Page (`src/pages/About.tsx`)

#### Images to Replace
1. **Hero Background**: Update `getProfileImage('about-hero.jpg')`
   - Location: Hero section background
   - Recommended: High-quality landscape/workspace image
   
2. **Profile Image**: Update `getProfileImage('avatar.jpg')`
   - Location: Avatar in hero section
   - Recommended: Professional headshot

#### Content to Update
- **Bio Text**: Replace the introductory paragraphs with your story
- **Skills Section**: Update the skills arrays (Frontend, Backend, Embedded Systems, Tools)
- **Education**: Modify the education entries with your academic background
- **Experience**: Update with your work experience and achievements

### Contact Page (`src/pages/Contact.tsx`)

- **Profile Image**: Ensure consistency with the About page avatar
- **Introductory Text**: Customize the welcome message and description

---

## Image Management System

### Overview
This project uses a centralized image management system located in `src/lib/images.ts` with utility functions that work with both local and external images.

### Utility Functions

#### `getImageUrl(path: string)`
**Purpose**: Resolves any image path (local or external)

**Usage:**
```typescript
// Local images
getImageUrl('/images/profile/avatar.jpg')
// Returns: '/images/profile/avatar.jpg' (with proper base URL)

// External URLs
getImageUrl('https://example.com/image.jpg')
// Returns: 'https://example.com/image.jpg' (unchanged)
```

#### `getProjectImage(projectId: string, imageName: string)`
**Purpose**: Generate paths for project-specific images

**Usage:**
```typescript
// Local project image
getProjectImage('rubiks-cube-robot', 'hero.jpg')
// Returns: '/images/projects/rubiks-cube-robot/hero.jpg'

// External image (pass full URL as imageName)
getProjectImage('my-project', 'https://example.com/hero.jpg')
// Returns: 'https://example.com/hero.jpg'
```

#### `getProfileImage(imageName: string)`
**Purpose**: Generate paths for profile images

**Usage:**
```typescript
// Local profile image
getProfileImage('avatar.jpg')
// Returns: '/images/profile/avatar.jpg'

// External image
getProfileImage('https://example.com/avatar.jpg')
// Returns: 'https://example.com/avatar.jpg'
```

### Folder Structure
```
public/images/
  ├── profile/              # Profile-related images
  │   ├── avatar.jpg
  │   └── about-hero.jpg
  │
  └── projects/             # Project images organized by project ID
      ├── project-id-1/
      │   ├── hero.jpg
      │   └── other-images.jpg
      └── project-id-2/
          └── hero.jpg
```

### Using External URLs

**All image utilities support external URLs automatically:**

1. **In Project Data:**
   ```typescript
   {
     image: getProjectImage('my-project', 'https://cdn.example.com/hero.jpg'),
     // or
     image: 'https://cdn.example.com/hero.jpg', // Direct URL also works
   }
   ```

2. **In Markdown Content:**
   ```markdown
   ![External Image](https://cdn.example.com/image.jpg)
   ```

3. **In Components:**
   ```tsx
   <img src={getImageUrl('https://cdn.example.com/image.jpg')} />
   ```

**The system automatically detects URLs starting with `http://` or `https://` and returns them unchanged, while local paths get processed with the base URL.**

---

## Markdown Content Guidelines

### Supported in Project Descriptions

All project content fields (`content`, `challenges`) support markdown with these features:

- **Headers**: `## Header`, `### Subheader`
- **Bold/Italic**: `**bold**`, `*italic*`
- **Lists**: Unordered (`-`) and ordered (`1.`)
- **Links**: `[text](url)`
- **Code blocks**: ` ```language ` 
- **Inline code**: `` `code` ``
- **Images**: `![alt text](path)` or `<img src="path" />`
- **Tables**: GitHub Flavored Markdown tables

### Using Images in Markdown

**Local Images:**
```markdown
![Robot Assembly](/images/projects/rubiks-cube-robot/assembly.jpg)
```

**External Images:**
```markdown
![External Resource](https://example.com/image.jpg)
```

**HTML Image Tags:**
```markdown
<img src="/images/projects/my-project/demo.jpg" alt="Demo" />
```

**Image Processing**: The `MarkdownRenderer` component automatically processes all image paths (both markdown syntax and HTML tags) through the `getImageUrl()` utility, so both local and external images work seamlessly.

---

## GitHub Pages Deployment

### 404 Handling

This project includes special configuration for GitHub Pages to handle client-side routing properly:

- **`public/404.html`**: Redirects 404 errors to index.html while preserving the URL
- **`index.html`**: Contains script to restore the original URL after redirect
- **`src/main.tsx`**: Processes redirected URLs on app initialization

These files work together to ensure that direct navigation to routes (like `/projects/my-project`) works correctly on GitHub Pages. **Do not modify these files** unless you understand the GitHub Pages SPA routing workaround.

---

## Quick Start Checklist

- [ ] Replace resume PDF in `public/` folder
- [ ] Update Formspree form ID in `ContactForm.tsx`
- [ ] Replace profile images (avatar, about-hero)
- [ ] Update About page bio, skills, education, and experience
- [ ] Customize projects in `src/data/projects.ts` or remove/add as needed
- [ ] Add your project images to `public/images/projects/[project-id]/` folders
- [ ] Add optional `techStack` arrays to projects you want to display technologies
- [ ] Update contact page introductory text
- [ ] Test all links (GitHub, external project links)
- [ ] Verify all images display correctly
- [ ] Verify contact form works with your Formspree account
- [ ] Test routing on GitHub Pages after deployment

---

## Tips

- **Image Quality**: Use high-resolution images (1920px+ width for hero images)
- **Image Format**: WebP or JPEG for photos, PNG for graphics with transparency
- **External Images**: Ensure external URLs are reliable and won't break (consider hosting important images locally)
- **Consistency**: Keep a consistent visual style across all project images
- **Alt Text**: Always provide descriptive alt text for accessibility
- **Testing**: Preview each page after making changes to ensure everything displays correctly
- **Tech Stack Badges**: Add a `techStack` array to projects where you want to highlight specific technologies used
