# Content Replacement Checklist

This document lists all placeholder content that needs to be replaced with your actual content before deploying your portfolio.

---

## 🔴 Critical Items (Must Replace)

### 1. Resume PDF
**File:** `public/resume-florian-schwarzinger.pdf`
- Replace this entire file with your own resume PDF
- Keep the same filename or update the link in the Resume page

### 2. Contact Form Endpoint
**File:** `src/components/ContactForm.tsx`
**Line:** 91
```typescript
const response = await fetch('https://formspree.io/f/mzzrookl', {
```
- Replace `mzzrookl` with your own Formspree form ID
- Sign up at [formspree.io](https://formspree.io) to get your form ID
- Or integrate with a different form service

---

## 🟡 High Priority Items (Content to Personalize)

### 3. Project Data
**File:** `src/data/projects.ts`

All 7 projects need your actual content. For each project, update:

#### Required Fields:
- **`title`** - Your project name
- **`description`** - Brief 1-2 sentence summary
- **`image`** - Main project image URL (currently placeholder Unsplash images)
- **`tags`** - Relevant technology/category tags
- **`content`** - Full markdown description of the project

#### Optional But Recommended:
- **`techStack`** - Array of technologies used
- **`gallery`** - Array of additional image URLs
- **`videoUrl`** - YouTube video ID (if you have a demo video)
- **`challenges`** - Array of challenges faced during the project
- **`keyFeatures`** - Array of key features/accomplishments
- **`lessonsLearned`** - Array of takeaways from the project

**Current Projects to Replace:**
1. Rubik's Cube Robot (lines ~20-100)
2. Autonomous Navigation System (lines ~101-200)
3. Precision Robotic Arm Controller (lines ~201-300)
4. Multi-Drone Coordination System (lines ~301-400)
5. Advanced Machine Vision System (lines ~401-500)
6. Assistive Exoskeleton Design (lines ~501-550)
7. Haptic Teleoperation Interface (lines ~551-584)

### 4. About Page Content
**File:** `src/pages/About.tsx`

#### Profile Image (Line 47)
```typescript
<img
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
```
- Replace with your actual profile photo URL
- Recommended: Use a professional headshot (512x512px or larger)

#### Bio Text (Lines 57-70)
```typescript
<p className="text-lg mb-4">
  Hi! I'm Florian Schwarzinger, a robotics engineer...
</p>
```
- Update with your actual bio
- Currently contains placeholder text about robotics engineering

#### Skills Section (Lines 76-150)
- Update the skills listed to match your actual expertise
- Categories include: Programming Languages, Robotics Frameworks, Control Systems, etc.
- **Note:** There's a duplicate skills section (lines 135-150) that should probably be removed or differentiated

### 5. Contact Page
**File:** `src/pages/Contact.tsx`

#### Avatar Image (Line 75)
```typescript
<img
  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
```
- Replace with your actual profile photo (same as About page)

---

## ✅ Already Configured (No Action Needed)

These items have already been updated:
- ✅ Footer email and links
- ✅ LinkedIn URL
- ✅ GitHub URL
- ✅ Navigation styling
- ✅ Random project link functionality

---

## 📝 Content Creation Tips

### For Project Content (Markdown)
The `content` field in each project supports full markdown syntax:

```markdown
## Overview
Describe your project here...

## Technical Implementation
- Point 1
- Point 2

## Results
What did you achieve?
```

### For Images
- **Main Image:** Should be 16:9 aspect ratio, minimum 1200x675px
- **Gallery Images:** Can be various sizes but keep consistent within a project
- **Profile Photo:** Square format works best, 512x512px minimum

### For Video URLs
If you have a YouTube demo video:
```typescript
videoUrl: "dQw4w9WgXcQ" // Replace with your actual YouTube video ID
```
The video ID is the part after `watch?v=` in the YouTube URL.

---

## 🔍 Quick Find & Replace

Search for these strings to find remaining placeholders:
- `unsplash.com` - All placeholder images
- `dQw4w9WgXcQ` - Placeholder YouTube video ID
- `formspree.io/f/mzzrookl` - Contact form endpoint

---

## ✨ Quality Checklist

Before going live, verify:
- [ ] All 7 projects have your actual content
- [ ] All images are replaced (no Unsplash URLs)
- [ ] Resume PDF is your own
- [ ] Contact form works with your Formspree account
- [ ] About page bio is accurate
- [ ] Profile photos are consistent across pages
- [ ] All links work and point to your profiles
- [ ] Skills section reflects your actual expertise
- [ ] No duplicate or placeholder text remains

---

## 📚 Technical Notes

### Project Structure
Projects are stored as an array in `src/data/projects.ts`. The order in the array determines the display order on the Projects page.

### Adding New Projects
To add more projects, simply add new objects to the `projects` array following the same structure.

### Removing Projects
Delete the project object from the array or comment it out. The site will automatically adjust.

---

**Questions?** Review the code comments in each file for additional guidance, or check the main README.md for development instructions.
