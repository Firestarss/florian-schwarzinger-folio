# Content Replacement Checklist

This document provides a comprehensive guide to replacing all placeholder content with your actual content before deploying your portfolio. The project now uses a centralized image management system for easier maintenance.

---

## 🔴 Critical Items (Must Replace)

### 1. Resume PDF
**File:** `public/resume-florian-schwarzinger.pdf`
**Action Required:**
- Replace this entire file with your own resume PDF
- **Option A:** Keep the same filename `resume-florian-schwarzinger.pdf`
- **Option B:** Rename to your own name and update the reference in:
  - **File:** `src/pages/Resume.tsx`
  - **Line:** Look for the `<object>` tag with `data` attribute pointing to the PDF

### 2. Contact Form Endpoint
**File:** `src/components/ContactForm.tsx`
**Line:** 91
```typescript
const response = await fetch('https://formspree.io/f/mzzrookl', {
```
**Action Required:**
- Replace `mzzrookl` with your own Formspree form ID
- Get your form ID by:
  1. Sign up at [formspree.io](https://formspree.io)
  2. Create a new form
  3. Copy your form ID (the part after `/f/`)
- **Alternative:** Integrate with a different form service (requires modifying the entire submit handler)

---

## 🟡 High Priority Items (Content to Personalize)

### 3. Project Data - Complete Overhaul Required
**File:** `src/data/projects.ts`

The project now uses a centralized image management system. All images are managed through utility functions in `src/lib/images.ts`.

#### Understanding the New Image System:
- **Local images** in `public/` folder: Use relative paths like `/images/projects/...`
- **External images**: Use full URLs like `https://...`
- The system automatically handles path resolution

#### For Each Project (7 Total):

**Project 1: Rubik's Cube Robot** (Lines ~22-103)
- **Line 23:** `id` - Keep as URL-friendly slug (e.g., "rubiks-cube-robot")
- **Line 24:** `title` - Your project name
- **Line 25:** `description` - Brief 1-2 sentence summary
- **Line 26:** `image` - Main hero image path
  - Current: `getProjectImage('rubiks-cube-robot', 'hero.jpg')`
  - To change: Replace `'rubiks-cube-robot'` with your project folder name, `'hero.jpg'` with your image filename
  - Image should be placed in: `public/images/projects/{your-project-id}/{your-image-name}`
- **Lines 27-37:** `tags` - Technology/category tags (array of strings)
- **Lines 38-50:** `content` - Full markdown description
  - Supports headers (##), lists, bold, italic
  - Image syntax in markdown: `![alt text](/images/projects/{project-id}/{image-name})`
  - Images in markdown are automatically processed by MarkdownRenderer
- **Lines 51-62:** `techStack` - Array of technology objects
  - Format: `{ name: "Technology Name", icon: "Icon Name from lucide-react" }`
- **Lines 63-90:** `gallery` - Array of gallery image objects
  - Format: `{ src: getProjectImage('project-id', 'image-name.jpg'), alt: "Description" }`
  - Place images in: `public/images/projects/{project-id}/`
- **Line 91:** `videoUrl` - YouTube video ID only (not full URL)
  - Current: `'dQw4w9WgXcQ'` (placeholder)
  - Extract from YouTube URL: `https://youtube.com/watch?v={THIS_PART}`
- **Lines 92-96:** `challenges` - Array of challenge strings
- **Lines 97-101:** `keyFeatures` - Array of feature strings
- **Line 102:** `lessonsLearned` - Array of lesson strings

**Project 2: Autonomous Navigation System** (Lines ~105-208)
- Same structure as Project 1
- Update all fields following the same pattern

**Project 3: Precision Robotic Arm Controller** (Lines ~210-313)
- Same structure as Project 1
- Update all fields following the same pattern

**Project 4: Multi-Drone Coordination System** (Lines ~315-418)
- Same structure as Project 1
- Update all fields following the same pattern

**Project 5: Advanced Machine Vision System** (Lines ~420-506)
- Same structure as Project 1
- Update all fields following the same pattern

**Project 6: Assistive Exoskeleton Design** (Lines ~508-578)
- Same structure as Project 1
- Update all fields following the same pattern

**Project 7: Haptic Teleoperation Interface** (Lines ~580-596)
- Same structure as Project 1
- Update all fields following the same pattern

#### Adding Your Own Projects:
1. Copy an existing project object structure
2. Create a new folder: `public/images/projects/{your-project-id}/`
3. Add your images to that folder
4. Update all fields with your content
5. Use `getProjectImage('your-project-id', 'image-name.jpg')` for images

#### Removing Placeholder Projects:
- Simply delete or comment out the entire project object
- The site will automatically adjust

---

### 4. About Page Content
**File:** `src/pages/About.tsx`

#### Hero Background Image (Line 47)
```typescript
style={{
  backgroundImage: `url(${getProfileImage('about-hero.jpg')})`,
```
**Action Required:**
- Replace `public/images/profile/about-hero.jpg` with your own hero image
- **Recommended dimensions:** 1920x600px or larger, 16:9 aspect ratio
- **Alternative:** Keep filename and replace the file content
- **To use different filename:** Change `'about-hero.jpg'` to your filename in the code

#### Main Profile Image (Line 62)
```typescript
<img
  src={getProfileImage('avatar.jpg')}
```
**Action Required:**
- Replace `public/images/profile/avatar.jpg` with your profile photo
- **Recommended dimensions:** 512x512px or larger, square aspect ratio
- **Format:** Professional headshot with good lighting
- **Alternative:** Keep filename and replace the file content

#### Bio Text Section (Lines 72-85)
```typescript
<p className="text-lg text-muted-foreground mb-6">
  Hi! I'm Florian Schwarzinger, a robotics engineer...
</p>
```
**Action Required:**
- Replace the entire bio text with your own story
- Keep the HTML structure (`<p>` tags with same classes)
- Current placeholder covers: background, expertise, interests
- **Tip:** Aim for 3-4 paragraphs, 150-250 words total

#### Skills Section - Programming Languages (Lines 91-105)
```typescript
<div className="space-y-3">
  <SkillItem icon={Code} name="Python" />
  <SkillItem icon={Code} name="C++" />
  ...
</div>
```
**Action Required:**
- Replace each `<SkillItem>` with your actual skills
- Keep the `icon={Code}` for programming languages
- Add or remove items as needed
- Skills are displayed with icon and name only

#### Skills Section - Robotics Frameworks (Lines 109-122)
**Action Required:**
- Update framework names to match your experience
- Keep the `icon={Cpu}` for frameworks
- Examples: ROS, ROS2, Gazebo, etc.

#### Skills Section - Control Systems (Lines 126-139)
**Action Required:**
- Update control system tools/methods
- Keep the `icon={Settings}` for control systems
- Examples: PID Control, MPC, State Space, etc.

#### Skills Section - CAD & Design (Lines 143-155)
**Action Required:**
- Update CAD software and design tools
- Keep the `icon={Box}` for CAD tools
- Examples: SolidWorks, Fusion 360, AutoCAD, etc.

#### Skills Section - Additional Tools (Lines 159-176)
**Action Required:**
- Update additional tools and technologies
- Keep the `icon={Wrench}` for tools
- Examples: Git, Docker, Linux, etc.

#### Education Section (Lines 182-206)
```typescript
<div className="space-y-6">
  <div>
    <h3 className="font-semibold">Master of Science in Robotics Engineering</h3>
    <p className="text-muted-foreground">University Name • 2020-2022</p>
    ...
  </div>
</div>
```
**Action Required:**
- Replace degree names, institutions, years, and descriptions
- Add or remove education entries as needed
- Keep the HTML structure for consistency

#### Experience Section (Lines 212-236)
```typescript
<div className="space-y-6">
  <div>
    <h3 className="font-semibold">Robotics Engineer</h3>
    <p className="text-muted-foreground">Company Name • 2022-Present</p>
    ...
  </div>
</div>
```
**Action Required:**
- Replace job titles, companies, dates, and descriptions
- Add or remove experience entries as needed
- Use bullet points (`<li>`) for responsibilities

---

### 5. Contact Page
**File:** `src/pages/Contact.tsx`

#### Avatar Image (Line 75)
```typescript
<img
  src={getProfileImage('avatar.jpg')}
```
**Action Required:**
- Should match the same avatar from About page
- Uses the same `public/images/profile/avatar.jpg` file
- Will automatically update when you replace the About page avatar

#### Contact Information (Lines 82-85)
```typescript
<p className="text-muted-foreground">
  Feel free to reach out for collaborations, questions, or just to connect!
</p>
```
**Action Required:**
- Customize the intro text if desired
- Keep it brief and welcoming

---

## 🎨 Image Management System (New)

### Understanding the Image Utilities
**File:** `src/lib/images.ts`

The project uses three utility functions:

#### 1. `getImageUrl(path: string)` (Lines 18-27)
- Handles both local and external images
- Local images: Prepends `BASE_URL` from Vite config
- External images (https://): Returns as-is
- **You typically won't call this directly**

#### 2. `getProjectImage(projectId: string, imageName: string)` (Lines 41-43)
- Used for project images
- Constructs path: `/images/projects/{projectId}/{imageName}`
- Usage: `getProjectImage('my-project', 'hero.jpg')`

#### 3. `getProfileImage(imageName: string)` (Lines 55-57)
- Used for profile images
- Constructs path: `/images/profile/{imageName}`
- Usage: `getProfileImage('avatar.jpg')`

### Image Folder Structure
```
public/
├── images/
│   ├── profile/
│   │   ├── about-hero.jpg     ← Replace with your hero image
│   │   └── avatar.jpg          ← Replace with your profile photo
│   └── projects/
│       ├── rubiks-cube-robot/  ← Replace entire folder or create new ones
│       │   ├── hero.jpg
│       │   ├── assembly.jpg
│       │   └── ...
│       ├── autonomous-navigation/
│       │   └── ...
│       └── [your-project-name]/  ← Create folders for your projects
│           ├── hero.jpg          ← Main project image
│           ├── image1.jpg        ← Gallery images
│           └── ...
```

### How to Add Your Own Project Images:
1. Create folder: `public/images/projects/{your-project-id}/`
2. Add your images to that folder
3. In `src/data/projects.ts`, use: `getProjectImage('your-project-id', 'image-name.jpg')`
4. For markdown images within project content: Use relative paths like `/images/projects/your-project-id/image-name.jpg`

---

## 🔍 Markdown Content Guidelines

### Using Images in Markdown (Project Content)
**Component:** `src/components/MarkdownRenderer.tsx`

The MarkdownRenderer automatically processes image paths. In your project's `content` field:

```markdown
## Project Overview
![Description of image](/images/projects/project-id/image.jpg)

More text here...

![Another image](/images/projects/project-id/diagram.png)
```

**Important:**
- Use relative paths starting with `/images/`
- The renderer automatically handles path resolution
- External images work too: `![External](https://example.com/image.jpg)`

### Markdown Syntax Support
The project uses `react-markdown` with `remark-gfm` plugin:

- **Headers:** `## Header`, `### Subheader`
- **Bold:** `**bold text**`
- **Italic:** `*italic text*`
- **Lists:** 
  - Unordered: `- item`
  - Ordered: `1. item`
- **Links:** `[text](url)`
- **Images:** `![alt](path)`
- **Code:** `` `inline code` `` or ` ```language ` for blocks
- **Task lists:** `- [ ] unchecked` or `- [x] checked`
- **Tables:** Full GFM table support

---

## ✅ Already Configured (No Action Needed)

These items have been properly configured:
- ✅ Footer email and social links
- ✅ LinkedIn URL
- ✅ GitHub URL  
- ✅ Navigation styling and behavior
- ✅ Random project link functionality
- ✅ Responsive design system
- ✅ Dark mode support
- ✅ Image path management system
- ✅ Markdown rendering with auto-image processing
- ✅ SEO meta tags structure
- ✅ Routing configuration

---

## 🚀 Pre-Launch Quality Checklist

Before deploying your portfolio, verify:

### Content
- [ ] All 7 projects replaced with your actual projects (or removed if not needed)
- [ ] All project images replaced (no placeholder Unsplash URLs)
- [ ] All project videos updated (no placeholder YouTube IDs)
- [ ] Resume PDF replaced with your own
- [ ] Contact form connected to your Formspree account
- [ ] About page bio reflects your actual background
- [ ] Profile photos consistent across About and Contact pages
- [ ] Skills section matches your actual expertise
- [ ] Education section is accurate and up-to-date
- [ ] Experience section is complete

### Images
- [ ] Hero image (`about-hero.jpg`) replaced
- [ ] Avatar image (`avatar.jpg`) replaced
- [ ] All project hero images replaced
- [ ] All project gallery images replaced
- [ ] All images properly sized and optimized
- [ ] All images have descriptive alt text

### Functionality
- [ ] Contact form successfully sends emails
- [ ] All navigation links work correctly
- [ ] All project detail pages load properly
- [ ] Resume PDF opens correctly
- [ ] Random project link functions
- [ ] Responsive design works on mobile
- [ ] Dark mode toggles correctly

### SEO & Performance
- [ ] Page titles are descriptive
- [ ] Meta descriptions are unique per page
- [ ] All images have alt attributes
- [ ] Links have descriptive text
- [ ] No broken links or 404 errors

---

## 🔧 Advanced Customization

### Adding More Projects
1. In `src/data/projects.ts`, copy an existing project object
2. Update the `id` (must be URL-friendly: lowercase, hyphens)
3. Create matching folder: `public/images/projects/{new-id}/`
4. Add your images to the folder
5. Update all project fields
6. The new project appears automatically on the Projects page

### Removing Projects
- Simply delete or comment out the project object in `src/data/projects.ts`
- The array order determines display order on the Projects page

### Changing Color Scheme
- **File:** `src/index.css` (Lines 1-80+)
- Edit CSS variables in `:root` and `.dark` sections
- Colors use HSL format: `hsl(hue saturation% lightness%)`

### Customizing Skills Icons
- Icons use `lucide-react` library
- Browse available icons: [lucide.dev](https://lucide.dev)
- Import new icons in `src/pages/About.tsx`
- Replace in `SkillItem` components: `icon={NewIcon}`

---

## 📚 Technical Reference

### File Organization
```
src/
├── components/
│   ├── MarkdownRenderer.tsx      ← Auto-processes markdown images
│   ├── ContactForm.tsx            ← Update Formspree ID here
│   └── ...
├── data/
│   └── projects.ts                ← All project data (main file to edit)
├── lib/
│   └── images.ts                  ← Image utility functions
├── pages/
│   ├── About.tsx                  ← Personal bio and skills
│   ├── Contact.tsx                ← Contact form and info
│   ├── Projects.tsx               ← Project listing page
│   ├── ProjectDetail.tsx          ← Individual project pages
│   └── Resume.tsx                 ← PDF resume viewer
└── index.css                      ← Global styles and theme
```

### Image Size Recommendations
- **Hero images (projects):** 1200x675px minimum (16:9 ratio)
- **Gallery images:** 800x600px minimum (4:3 ratio)
- **Profile avatar:** 512x512px minimum (1:1 ratio)
- **About hero background:** 1920x600px minimum (panoramic)
- **Format:** JPG for photos, PNG for graphics, WebP for best compression

### Tech Stack Icons Reference
Common icons available in `lucide-react`:
- `Code`, `Terminal`, `GitBranch`, `Database`, `Server`
- `Cpu`, `HardDrive`, `Smartphone`, `Monitor`, `Cloud`
- `Wrench`, `Settings`, `Tool`, `Box`, `Package`
- Browse all: [lucide.dev/icons](https://lucide.dev/icons)

---

## 🆘 Troubleshooting

### Images Not Showing
1. Verify image file exists in correct folder
2. Check path spelling and case sensitivity
3. Ensure using correct utility function
4. Check browser console for 404 errors

### Contact Form Not Working
1. Verify Formspree ID is correct
2. Check Formspree dashboard for form status
3. Ensure email validation is working
4. Check browser console for errors

### Project Pages 404 Error
1. Verify project `id` matches URL slug
2. Ensure `id` is URL-friendly (lowercase, hyphens)
3. Check routing in `src/App.tsx`

### Videos Not Embedding
1. Verify YouTube video ID (not full URL)
2. Ensure video is public or unlisted
3. Check `videoUrl` field has correct format

---

## 📞 Need Help?

If you encounter issues:
1. Check the browser console for errors
2. Verify file paths and folder structure
3. Review this checklist for missed steps
4. Check main `README.md` for development setup
5. Ensure all dependencies are installed (`npm install`)

---

**Last Updated:** Post-centralized image management system implementation

**Version:** 2.0 - Comprehensive detailed edition