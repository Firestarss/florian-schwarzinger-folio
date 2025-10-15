import { getImageUrl, getProjectImage } from "@/lib/files";

export interface Project {
  id: string;
  title: string;
  description: string; // Short description
  image: string; // Hero image
  tags: string[];

  // Main story content (markdown) - the heart of the page
  content: string;

  // Optional elements
  gallery?: { src: string; alt: string }[];
  videoUrl?: string;
  files?: { name: string; url: string; size?: string; type?: string }[];
  challenges?: string;
  keyFeatures?: string;
  lessonsLearned?: string;
  techStack?: string[]; // Optional array of technologies used

  // Visibility controls
  showInProjects?: boolean; // If false, hidden from Projects page (defaults to true)
  showInTerminal?: boolean; // If false, hidden from terminal sub-projects (defaults to true)
  showInRandomCommand?: boolean; // If false, excluded from terminal random command. Defaults to showInTerminal value if undefined
  showInRandomButton?: boolean; // If false, excluded from random button on projects page. Defaults to showInProjects value if undefined
}
export const projects: Project[] = [
  {
    id: "terminal-secret",
    title: "The Hidden Project",
    description:
      "A secret experimental project exploring advanced AI-driven motion planning. Only accessible via the terminal interface.",
    image: getProjectImage("autonomous-navigation", "visualization.jpg"),
    tags: ["AI/ML", "Motion Planning", "Experimental"],
    showInProjects: false,
    showInTerminal: true,
    showInRandomCommand: false,
    showInRandomButton: true,
    content: `# The Hidden Project

Congratulations! You found the secret project accessible only through the terminal.

## What is this?

This is an experimental project exploring advanced AI-driven motion planning algorithms. The work here is cutting-edge and still under active research, which is why it's kept hidden from the main projects page.

## Key Research Areas

- **Neural Motion Planning**: Using deep learning to predict optimal robot trajectories
- **Real-time Adaptation**: Systems that adapt to unexpected obstacles using reinforcement learning
- **Multi-Agent Coordination**: Algorithms for coordinating multiple robots in shared spaces

## Why Terminal-Only?

This project represents experimental work that's not ready for public showcase but is documented here for reference and testing purposes. The terminal interface provides a more technical, developer-focused way to access this content.

> *"The best way to predict the future is to invent it."* - Alan Kay

Stay curious, and keep exploring!`,
  },
  {
    id: "wip-exoskeleton-v2",
    title: "Advanced Exoskeleton System v2",
    description:
      "Next-generation powered exoskeleton with enhanced force feedback and adaptive control. Currently in development.",
    image: getProjectImage("exoskeleton", "hero.jpg"),
    tags: ["Robotics", "Biomechanics", "Control Systems", "WIP"],
    showInProjects: false,
    showInTerminal: false,
    content: `# Advanced Exoskeleton System v2

**Status**: Work in Progress

This project is currently under development and not yet ready for public display. However, you can preview the content structure here.

## Overview

Building on the success of the original exoskeleton project, version 2 aims to incorporate:

- Advanced haptic feedback systems
- Machine learning-based gait prediction
- Lighter composite materials
- Extended battery life (8+ hours)
- Modular design for different use cases

## Current Development Phase

We're currently in the prototyping phase, testing various actuator configurations and control algorithms. Early results show promising improvements in both user comfort and system efficiency.

## Technical Challenges

- Reducing system weight while maintaining strength
- Improving power efficiency for longer operation times
- Creating more natural movement patterns
- Ensuring safety under all operating conditions

*This page is accessible only via direct URL for development and testing purposes.*`,
  },
  {
    id: "rubiks-cube-robot",
    title: "Rubik's Cube Robot",
    description:
      "An autonomous robotic system capable of solving a standard 3x3 Rubik's Cube in under 10 seconds using computer vision and advanced solving algorithms.",
    image: getProjectImage("rubiks-cube-robot", "hero.jpg"),
    tags: ["Computer Vision", "Robotics", "OpenCV", "Python", "ROS", "Machine Learning"],
    techStack: ["Python", "OpenCV", "ROS", "Arduino", "NumPy", "Kociemba Algorithm", "HSV Color Space"],
    content: `# Rubik's Cube Robot - Markdown Feature Showcase

This project description demonstrates **every markdown feature** supported by react-markdown, including advanced image layouts!

Next AI prompt: **"Add an "Additional Files" Section functionality to the sub-project pages is separate from the content section that we have been editing for this long. Allow this section to hold downloadable files that will likely not be photos. My idea here is if I have like CAD files or other misc. files, i can add them here for people to download and inspect themselves if they so choose. as always, let this section be optional but include an example of it in the rubiks cube robot page"**

## Single Image Example

Images in markdown are displayed at 70% width by default, centered on the page:

![Rubik's Cube Hero](/files/projects/rubiks-cube-robot/hero.jpg)

## Multiple Images Side-by-Side

You can place multiple images next to each other using a div with class "image-row":

<div class="image-row">
  <img src="/files/projects/rubiks-cube-robot/gripper.jpg" alt="Robot Gripper" />
  <img src="/files/projects/rubiks-cube-robot/color-detection.jpg" alt="Color Detection System" />
</div>

## HTML Image Rendering

You can also use HTML img tags directly in markdown for more control:

<div class="image-row">
  <img src="/files/projects/rubiks-cube-robot/assembly.jpg" alt="Robot Assembly" />
  <img src="/files/projects/rubiks-cube-robot/electronics.jpg" alt="Electronics Setup" />
</div>

## Image Grid Layout

For a grid of multiple images, use the "image-grid" class:

<div class="image-grid">
  <img src="/files/projects/rubiks-cube-robot/vision-system.jpg" alt="Vision System" />
  <img src="/files/projects/rubiks-cube-robot/gripper.jpg" alt="Gripper Close-up" />
  <img src="/files/projects/rubiks-cube-robot/solved-cube.jpg" alt="Solved Cube" />
</div>

## Mixed Aspect Ratio Grid

You can mix different aspect ratios in a grid for dynamic layouts:

<div class="image-grid">
  <img src="/files/projects/rubiks-cube-robot/grip-closeup.jpg" alt="Precise Gripper Mechanism" />
  <img src="/files/projects/rubiks-cube-robot/robot-portrait.jpg" alt="Full Robot Assembly" />
  <img src="/files/projects/rubiks-cube-robot/electronics.jpg" alt="Electronics and Wiring" />
</div>

## Wide Format Layouts

Ultra-wide and panoramic images work great for showcasing entire workstations:

<div class="image-grid">
  <img src="/files/projects/rubiks-cube-robot/workstation-wide.jpg" alt="Complete Workstation Setup" />
  <img src="/files/projects/rubiks-cube-robot/lab-ultrawide.jpg" alt="Laboratory Environment" />
</div>

---

# 🎨 Advanced HTML Image Styling Guide

This section demonstrates various HTML techniques for advanced image control beyond basic markdown. All width control is now manual - no default 70% sizing.

## Image Width Control Examples

### Full-Width (100%)
<img src="/files/projects/rubiks-cube-robot/hero.jpg" alt="Full width hero" style="width: 100%; height: auto; border-radius: 8px; margin: 2rem 0;" />

### 80% Width, Centered
<img src="/files/projects/rubiks-cube-robot/lab-ultrawide.jpg" alt="80% width" style="width: 80%; height: auto; display: block; margin: 2rem auto; border-radius: 8px;" />

### 70% Width, Centered (Classic)
<img src="/files/projects/rubiks-cube-robot/workstation-wide.jpg" alt="70% width" style="width: 70%; height: auto; display: block; margin: 2rem auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />

### 50% Width, Centered
<img src="/files/projects/rubiks-cube-robot/robot-portrait.jpg" alt="50% width" style="width: 50%; height: auto; display: block; margin: 2rem auto; border-radius: 8px;" />

### Fixed Pixel Width (400px)
<img src="/files/projects/rubiks-cube-robot/grip-closeup.jpg" alt="400px width" style="width: 400px; height: auto; display: block; margin: 2rem auto; border-radius: 8px;" />

## Centered Profile Images

<div style="display: flex; gap: 2rem; justify-content: center; align-items: center; margin: 2rem 0; flex-wrap: wrap;">
  <img src="/files/profile/avatar.jpg" alt="Profile Avatar" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />
  <img src="/files/profile/avatar.jpg" alt="Profile Avatar 2" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />
  <img src="/files/profile/avatar.jpg" alt="Profile Avatar 3" style="width: 100px; height: 100px; border-radius: 50%; object-fit: cover; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.3);" />
</div>

## Side-by-Side Comparison with Labels

<div style="display: flex; margin: 2rem 0; flex-wrap: wrap; justify-content: center;">
  <div style="flex: 1; min-width: 250px; max-width: 48%; text-align: center; margin: 0 1%;">
    <img src="/files/projects/rubiks-cube-robot/assembly.jpg" alt="Phase 1: Initial Assembly" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.2);" />
    <p style="margin-top: 0.5rem; font-weight: 600; color: #888;">Phase 1: Initial Assembly</p>
  </div>
  <div style="flex: 1; min-width: 250px; max-width: 48%; text-align: center; margin: 0 1%;">
    <img src="/files/projects/rubiks-cube-robot/electronics.jpg" alt="Phase 2: Electronics Integration" style="width: 100%; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.2);" />
    <p style="margin-top: 0.5rem; font-weight: 600; color: #888;">Phase 2: Electronics Integration</p>
  </div>
</div>

## Single Photo with Label

<div style="text-align: center; margin: 2rem 0;">
  <img src="/files/projects/rubiks-cube-robot/solved-cube.jpg" alt="Solved Rubik's Cube" style="width: 60%; display: block; margin-left: auto; margin-right: auto; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.2);" />
  <p style="margin-top: 0.5rem; font-weight: 600; color: #888;">Final Result: Perfectly Solved Cube</p>
</div>

## Circular Profile Images

<div style="display: flex; gap: 2rem; align-items: center; justify-content: center; margin: 2rem 0; flex-wrap: wrap;">
  <img src="/files/projects/rubiks-cube-robot/grip-closeup.jpg" alt="Detail 1" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 3px solid #555;" />
  <img src="/files/projects/rubiks-cube-robot/electronics.jpg" alt="Detail 2" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 3px solid #555;" />
  <img src="/files/projects/rubiks-cube-robot/vision-system.jpg" alt="Detail 3" style="width: 120px; height: 120px; border-radius: 50%; object-fit: cover; border: 3px solid #555;" />
</div>

## Image with Caption and Description Box

<div style="max-width: 600px; margin: 2rem auto; background: rgba(255,255,255,0.05); padding: 1.5rem; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
  <img src="/files/projects/rubiks-cube-robot/assembly.jpg" alt="Assembly Process" style="width: 100%; border-radius: 8px; margin-bottom: 1rem;" />
  <h4 style="margin: 0 0 0.5rem 0; color: #fff;">Assembly Process</h4>
  <p style="margin: 0; color: #aaa; font-size: 0.9rem;">The mechanical assembly required precise calibration of servo motors and careful alignment of the gripper mechanism to ensure smooth cube manipulation.</p>
</div>

## Floating Image with Text Wrap

<div style="margin: 2rem 0;">
  <img src="/files/projects/rubiks-cube-robot/robot-portrait.jpg" alt="Robot portrait" style="float: left; width: 250px; margin: 0 1.5rem 1rem 0; border-radius: 8px; box-shadow: 0 4px 12px rgba(0,0,0,0.3);" />
  <p>This advanced robotic system represents months of iterative design and testing. The vertical assembly allows for optimal camera positioning while maintaining a compact footprint. Each component was carefully selected to balance performance with power consumption.</p>
  <p>The modular design enables easy maintenance and upgrades. Future iterations could incorporate machine learning for adaptive solving strategies or support for larger cube variants.</p>
  <div style="clear: both;"></div>
</div>

## Asymmetric Grid Layout

<div style="display: grid; grid-template-columns: 2fr 1fr; gap: 1rem; margin: 2rem 0;">
  <img src="/files/projects/rubiks-cube-robot/workstation-wide.jpg" alt="Main workstation" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;" />
  <div style="display: flex; flex-direction: column; gap: 1rem;">
    <img src="/files/projects/rubiks-cube-robot/grip-closeup.jpg" alt="Detail 1" style="width: 100%; border-radius: 8px;" />
    <img src="/files/projects/rubiks-cube-robot/electronics.jpg" alt="Detail 2" style="width: 100%; border-radius: 8px;" />
  </div>
</div>

## Image Gallery with Hover Effect

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 2rem 0;">
  <img src="/files/projects/rubiks-cube-robot/gripper.jpg" alt="Component 1" style="width: 100%; border-radius: 8px; transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
  <img src="/files/projects/rubiks-cube-robot/vision-system.jpg" alt="Component 2" style="width: 100%; border-radius: 8px; transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
  <img src="/files/projects/rubiks-cube-robot/color-detection.jpg" alt="Component 3" style="width: 100%; border-radius: 8px; transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
  <img src="/files/projects/rubiks-cube-robot/solved-cube.jpg" alt="Component 4" style="width: 100%; border-radius: 8px; transition: transform 0.3s; cursor: pointer;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'" />
</div>

## Featured Image with Gradient Overlay

<div style="position: relative; max-width: 800px; margin: 2rem auto; border-radius: 12px; overflow: hidden;">
  <img src="/files/projects/rubiks-cube-robot/lab-ultrawide.jpg" alt="Laboratory setup" style="width: 100%; display: block;" />
  <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.8), transparent); padding: 2rem; color: white;">
    <h3 style="margin: 0 0 0.5rem 0;">Complete Laboratory Setup</h3>
    <p style="margin: 0; opacity: 0.9;">State-of-the-art development environment with testing infrastructure</p>
  </div>
</div>

## Split Screen Comparison

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 2rem auto; width: 80%;">
  <div style="position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
    <img src="/files/projects/rubiks-cube-robot/assembly.jpg" alt="Assembly phase" style="width: 100%; height: 300px; object-fit: cover;" />
    <div style="position: absolute; top: 1rem; left: 1rem; background: rgba(0,0,0,0.7); padding: 0.5rem 1rem; border-radius: 4px; color: white; font-weight: bold;">Phase 1</div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
    <img src="/files/projects/rubiks-cube-robot/solved-cube.jpg" alt="Completed phase" style="width: 100%; height: 300px; object-fit: cover;" />
    <div style="position: absolute; top: 1rem; left: 1rem; background: rgba(0,0,0,0.7); padding: 0.5rem 1rem; border-radius: 4px; color: white; font-weight: bold;">Phase 2</div>
  </div>
</div>

## Masonry-Style Layout

<div style="column-count: 3; column-gap: 1rem; margin: 2rem 0;">
  <img src="/files/projects/rubiks-cube-robot/grip-closeup.jpg" alt="Image 1" style="width: 100%; margin-bottom: 1rem; border-radius: 8px; display: block;" />
  <img src="/files/projects/rubiks-cube-robot/robot-portrait.jpg" alt="Image 2" style="width: 100%; margin-bottom: 1rem; border-radius: 8px; display: block;" />
  <img src="/files/projects/rubiks-cube-robot/electronics.jpg" alt="Image 3" style="width: 100%; margin-bottom: 1rem; border-radius: 8px; display: block;" />
  <img src="/files/projects/rubiks-cube-robot/vision-system.jpg" alt="Image 4" style="width: 100%; margin-bottom: 1rem; border-radius: 8px; display: block;" />
  <img src="/files/projects/rubiks-cube-robot/color-detection.jpg" alt="Image 5" style="width: 100%; margin-bottom: 1rem; border-radius: 8px; display: block;" />
</div>

## Image with Stats Overlay

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem; margin: 2rem 0;">
  <div style="position: relative; border-radius: 12px; overflow: hidden;">
    <img src="/files/projects/rubiks-cube-robot/workstation-wide.jpg" alt="Workstation metrics" style="width: 100%; display: block; filter: brightness(0.7);" />
    <div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white;">
      <div style="font-size: 3rem; font-weight: bold; margin-bottom: 0.5rem;">98%</div>
      <div style="font-size: 1.2rem; opacity: 0.9;">Success Rate</div>
    </div>
  </div>
  <div style="position: relative; border-radius: 12px; overflow: hidden;">
    <img src="/files/projects/rubiks-cube-robot/hero.jpg" alt="Speed metrics" style="width: 100%; display: block; filter: brightness(0.7);" />
    <div style="position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; color: white;">
      <div style="font-size: 3rem; font-weight: bold; margin-bottom: 0.5rem;">2.3s</div>
      <div style="font-size: 1.2rem; opacity: 0.9;">Average Solve</div>
    </div>
  </div>
</div>

## Bordered Feature Images

<div style="display: flex; gap: 1.5rem; margin: 2rem 0; flex-wrap: wrap; justify-content: center;">
  <div style="border: 3px solid #444; padding: 0.5rem; background: #1a1a1a; border-radius: 8px;">
    <img src="/files/projects/rubiks-cube-robot/gripper.jpg" alt="Featured 1" style="width: 200px; display: block; border-radius: 4px;" />
  </div>
  <div style="border: 3px solid #444; padding: 0.5rem; background: #1a1a1a; border-radius: 8px;">
    <img src="/files/projects/rubiks-cube-robot/electronics.jpg" alt="Featured 2" style="width: 200px; display: block; border-radius: 4px;" />
  </div>
  <div style="border: 3px solid #444; padding: 0.5rem; background: #1a1a1a; border-radius: 8px;">
    <img src="/files/projects/rubiks-cube-robot/vision-system.jpg" alt="Featured 3" style="width: 200px; display: block; border-radius: 4px;" />
  </div>
</div>

## Corner Badge Labels

<div style="display: flex; gap: 2rem; margin: 2rem 0; flex-wrap: wrap; justify-content: center;">
  <div style="position: relative; width: 280px;">
    <img src="/files/projects/rubiks-cube-robot/gripper.jpg" alt="Latest component" style="width: 100%; border-radius: 8px;" />
    <div style="position: absolute; top: -8px; right: -8px; background: linear-gradient(135deg, #ff6b35, #ff8c42); color: white; padding: 0.4rem 1rem; border-radius: 20px; font-weight: bold; font-size: 0.85rem; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">NEW</div>
  </div>
  <div style="position: relative; width: 280px;">
    <img src="/files/projects/rubiks-cube-robot/vision-system.jpg" alt="Featured system" style="width: 100%; border-radius: 8px;" />
    <div style="position: absolute; top: -8px; right: -8px; background: linear-gradient(135deg, #4facfe, #00f2fe); color: white; padding: 0.4rem 1rem; border-radius: 20px; font-weight: bold; font-size: 0.85rem; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">FEATURED</div>
  </div>
  <div style="position: relative; width: 280px;">
    <img src="/files/projects/rubiks-cube-robot/electronics.jpg" alt="Updated component" style="width: 100%; border-radius: 8px;" />
    <div style="position: absolute; top: -8px; right: -8px; background: linear-gradient(135deg, #43e97b, #38f9d7); color: #1a1a1a; padding: 0.4rem 1rem; border-radius: 20px; font-weight: bold; font-size: 0.85rem; box-shadow: 0 4px 8px rgba(0,0,0,0.3);">v2.0</div>
  </div>
</div>

## Top Banner with Icon Labels

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden;">
    <div style="background: linear-gradient(90deg, #667eea, #764ba2); color: white; padding: 0.6rem; text-align: center; font-weight: 600;">⚙️ Mechanical Design</div>
    <img src="/files/projects/rubiks-cube-robot/assembly.jpg" alt="Mechanical design" style="width: 100%; display: block;" />
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden;">
    <div style="background: linear-gradient(90deg, #f093fb, #f5576c); color: white; padding: 0.6rem; text-align: center; font-weight: 600;">🔌 Electronics</div>
    <img src="/files/projects/rubiks-cube-robot/electronics.jpg" alt="Electronics setup" style="width: 100%; display: block;" />
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden;">
    <div style="background: linear-gradient(90deg, #4facfe, #00f2fe); color: white; padding: 0.6rem; text-align: center; font-weight: 600;">👁️ Vision System</div>
    <img src="/files/projects/rubiks-cube-robot/vision-system.jpg" alt="Vision system" style="width: 100%; display: block;" />
  </div>
</div>

## Timeline Labels with Dates

<div style="display: flex; flex-direction: column; gap: 2rem; margin: 2rem 0; max-width: 700px; margin-left: auto; margin-right: auto;">
  <div style="display: flex; gap: 1.5rem; align-items: center;">
    <div style="min-width: 120px; text-align: right;">
      <div style="font-size: 1.1rem; font-weight: bold; color: #ff8c42;">Jan 2024</div>
      <div style="font-size: 0.85rem; color: #888;">Week 1-2</div>
    </div>
    <div style="flex: 1; position: relative;">
      <img src="/files/projects/rubiks-cube-robot/assembly.jpg" alt="Initial prototype" style="width: 100%; border-radius: 8px; border: 2px solid #333;" />
      <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); padding: 1rem; color: white;">
        <strong>Initial Prototype</strong>
      </div>
    </div>
  </div>
  <div style="display: flex; gap: 1.5rem; align-items: center;">
    <div style="min-width: 120px; text-align: right;">
      <div style="font-size: 1.1rem; font-weight: bold; color: #ff8c42;">Feb 2024</div>
      <div style="font-size: 0.85rem; color: #888;">Week 5-6</div>
    </div>
    <div style="flex: 1; position: relative;">
      <img src="/files/projects/rubiks-cube-robot/electronics.jpg" alt="Electronics integration" style="width: 100%; border-radius: 8px; border: 2px solid #333;" />
      <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); padding: 1rem; color: white;">
        <strong>Electronics Integration</strong>
      </div>
    </div>
  </div>
  <div style="display: flex; gap: 1.5rem; align-items: center;">
    <div style="min-width: 120px; text-align: right;">
      <div style="font-size: 1.1rem; font-weight: bold; color: #43e97b;">Mar 2024</div>
      <div style="font-size: 0.85rem; color: #888;">Week 9-10</div>
    </div>
    <div style="flex: 1; position: relative;">
      <img src="/files/projects/rubiks-cube-robot/solved-cube.jpg" alt="Final testing" style="width: 100%; border-radius: 8px; border: 2px solid #43e97b;" />
      <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); padding: 1rem; color: white;">
        <strong>✓ Complete & Tested</strong>
      </div>
    </div>
  </div>
</div>

## Ribbon-Style Labels

<div style="display: flex; gap: 2rem; margin: 2rem 0; flex-wrap: wrap; justify-content: center;">
  <div style="position: relative; width: 280px;">
    <img src="/files/projects/rubiks-cube-robot/grip-closeup.jpg" alt="Award winning design" style="width: 100%; border-radius: 8px;" />
    <div style="position: absolute; top: 15px; left: -10px; background: #ffd700; color: #1a1a1a; padding: 0.5rem 1.5rem 0.5rem 1rem; font-weight: bold; font-size: 0.9rem; box-shadow: 0 4px 8px rgba(0,0,0,0.3); clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%);">🏆 BEST DESIGN</div>
  </div>
  <div style="position: relative; width: 280px;">
    <img src="/files/projects/rubiks-cube-robot/robot-portrait.jpg" alt="Innovation award" style="width: 100%; border-radius: 8px;" />
    <div style="position: absolute; top: 15px; left: -10px; background: #c0c0c0; color: #1a1a1a; padding: 0.5rem 1.5rem 0.5rem 1rem; font-weight: bold; font-size: 0.9rem; box-shadow: 0 4px 8px rgba(0,0,0,0.3); clip-path: polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%);">⚡ INNOVATIVE</div>
  </div>
</div>

## Numbered Step Indicators

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden;">
    <img src="/files/projects/rubiks-cube-robot/assembly.jpg" alt="Step 1" style="width: 100%; display: block;" />
    <div style="position: absolute; top: 12px; left: 12px; width: 40px; height: 40px; background: #ff6b35; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.3rem; box-shadow: 0 4px 8px rgba(0,0,0,0.4);">1</div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.8); padding: 0.8rem; color: white; font-weight: 500;">Design & Assembly</div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden;">
    <img src="/files/projects/rubiks-cube-robot/electronics.jpg" alt="Step 2" style="width: 100%; display: block;" />
    <div style="position: absolute; top: 12px; left: 12px; width: 40px; height: 40px; background: #4facfe; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.3rem; box-shadow: 0 4px 8px rgba(0,0,0,0.4);">2</div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.8); padding: 0.8rem; color: white; font-weight: 500;">Wire & Program</div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden;">
    <img src="/files/projects/rubiks-cube-robot/vision-system.jpg" alt="Step 3" style="width: 100%; display: block;" />
    <div style="position: absolute; top: 12px; left: 12px; width: 40px; height: 40px; background: #a78bfa; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.3rem; box-shadow: 0 4px 8px rgba(0,0,0,0.4);">3</div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.8); padding: 0.8rem; color: white; font-weight: 500;">Calibrate Vision</div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden;">
    <img src="/files/projects/rubiks-cube-robot/solved-cube.jpg" alt="Step 4" style="width: 100%; display: block;" />
    <div style="position: absolute; top: 12px; left: 12px; width: 40px; height: 40px; background: #43e97b; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.3rem; box-shadow: 0 4px 8px rgba(0,0,0,0.4);">4</div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.8); padding: 0.8rem; color: white; font-weight: 500;">Test & Optimize</div>
  </div>
</div>

## Multi-Layer Text Overlays

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden;">
    <img src="/files/projects/rubiks-cube-robot/workstation-wide.jpg" alt="Development setup" style="width: 100%; display: block; height: 250px; object-fit: cover;" />
    <div style="position: absolute; top: 0; left: 0; right: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.7), transparent); padding: 1rem; color: white;">
      <div style="font-size: 0.8rem; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px;">Development</div>
    </div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); padding: 1.5rem; color: white;">
      <h4 style="margin: 0 0 0.3rem 0; font-size: 1.2rem;">Workstation Setup</h4>
      <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">Complete development environment</p>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden;">
    <img src="/files/projects/rubiks-cube-robot/lab-ultrawide.jpg" alt="Testing facility" style="width: 100%; display: block; height: 250px; object-fit: cover;" />
    <div style="position: absolute; top: 0; left: 0; right: 0; background: linear-gradient(to bottom, rgba(0,0,0,0.7), transparent); padding: 1rem; color: white;">
      <div style="font-size: 0.8rem; opacity: 0.9; text-transform: uppercase; letter-spacing: 1px;">Testing</div>
    </div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.9), transparent); padding: 1.5rem; color: white;">
      <h4 style="margin: 0 0 0.3rem 0; font-size: 1.2rem;">Testing Facility</h4>
      <p style="margin: 0; font-size: 0.9rem; opacity: 0.8;">Comprehensive validation space</p>
    </div>
  </div>
</div>

## All Label Styles Combined

Here are examples using the newly generated AI images with various labeling styles:

<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.5rem; margin: 2rem 0;">
  <div style="position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
    <img src="/files/projects/rubiks-cube-robot/servo-motors.jpg" alt="Servo motor array" style="width: 100%; display: block; height: 220px; object-fit: cover;" />
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.3)); padding: 1.2rem; color: white;">
      <h4 style="margin: 0 0 0.3rem 0;">Precision Servo Array</h4>
      <p style="margin: 0; font-size: 0.85rem; opacity: 0.85;">High-torque actuators for cube manipulation</p>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
    <img src="/files/projects/rubiks-cube-robot/testing-environment.jpg" alt="Testing lab" style="width: 100%; display: block; height: 220px; object-fit: cover;" />
    <div style="position: absolute; top: 12px; right: 12px; background: rgba(67, 233, 123, 0.95); color: #1a1a1a; padding: 0.4rem 0.9rem; border-radius: 6px; font-weight: bold; font-size: 0.8rem; box-shadow: 0 2px 8px rgba(67, 233, 123, 0.4);">ACTIVE</div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.3)); padding: 1.2rem; color: white;">
      <h4 style="margin: 0;">Testing Environment</h4>
    </div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
    <img src="/files/projects/rubiks-cube-robot/control-panel.jpg" alt="Control interface" style="width: 100%; display: block; height: 220px; object-fit: cover;" />
    <div style="position: absolute; top: 12px; left: 12px; width: 35px; height: 35px; background: #ff6b35; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 1.1rem; box-shadow: 0 3px 8px rgba(0,0,0,0.4);">⚡</div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: rgba(0,0,0,0.85); padding: 1rem; color: white; text-align: center; font-weight: 600;">Control Panel Interface</div>
  </div>
  <div style="position: relative; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.3);">
    <img src="/files/projects/rubiks-cube-robot/sensor-array.jpg" alt="Sensor systems" style="width: 100%; display: block; height: 220px; object-fit: cover;" />
    <div style="position: absolute; top: 15px; left: -8px; background: linear-gradient(135deg, #4facfe, #00f2fe); color: white; padding: 0.4rem 1.2rem 0.4rem 1rem; font-weight: bold; font-size: 0.85rem; box-shadow: 0 4px 8px rgba(0,0,0,0.3); clip-path: polygon(0 0, 100% 0, 95% 50%, 100% 100%, 0 100%);">VISION</div>
    <div style="position: absolute; bottom: 0; left: 0; right: 0; background: linear-gradient(to top, rgba(0,0,0,0.95), rgba(0,0,0,0.3)); padding: 1.2rem; color: white;">
      <h4 style="margin: 0;">Advanced Sensor Array</h4>
    </div>
  </div>
</div>

---

## Headers and Text Formatting

This section shows different **header levels** and *text formatting* options.

### Level 3 Header
#### Level 4 Header
##### Level 5 Header
###### Level 6 Header

You can make text **bold**, *italic*, or ***both bold and italic***. You can also use ~~strikethrough~~ text.

## Lists

### Unordered Lists

* First item with basic bullet
* Second item
  * Nested item 1
  * Nested item 2
    * Deeply nested item
* Third item

### Ordered Lists

1. First step in solving algorithm
2. Second step - color detection
3. Third step - move calculation
   1. Sub-step A
   2. Sub-step B
4. Fourth step - execution

### Task Lists

- [x] Design mechanical gripper
- [x] Implement computer vision
- [x] Integrate solving algorithm
- [ ] Optimize for speed
- [ ] Add voice announcements

## Code Examples

Here's an inline code example: \`solve_cube()\` is the main function.

### Python Code Block

\`\`\`python
def detect_cube_colors(image):
    """
    Detects colors on each face of the Rubik's Cube
    using OpenCV and HSV color space conversion
    """
    hsv = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)
    
    colors = {
        'red': [(0, 100, 100), (10, 255, 255)],
        'green': [(40, 100, 100), (80, 255, 255)],
        'blue': [(100, 100, 100), (130, 255, 255)]
    }
    
    detected_faces = []
    for color, (lower, upper) in colors.items():
        mask = cv2.inRange(hsv, lower, upper)
        detected_faces.append(color)
    
    return detected_faces
\`\`\`

### JavaScript Code Block

\`\`\`javascript
class RubiksCubeSolver {
  constructor() {
    this.moveHistory = [];
    this.solved = false;
  }
  
  async solveCube(cubeState) {
    const solution = await this.calculateOptimalSolution(cubeState);
    await this.executeMoves(solution);
    this.solved = true;
    return solution;
  }
}
\`\`\`

## Blockquotes

> The Rubik's Cube is a 3-D combination puzzle invented in 1974 by Hungarian sculptor and professor of architecture Ernő Rubik.

> **Note:** This robot uses the Kociemba algorithm for solving, which guarantees solutions in 20 moves or fewer.

> You can also have multi-paragraph quotes.
>
> Just like this one, which spans multiple lines and provides additional context about the solving strategy.

## Links

Here are some useful links:
- [Rubik's Cube Wikipedia](https://en.wikipedia.org/wiki/Rubik%27s_Cube)
- [Kociemba Algorithm Explanation](https://www.speedsolving.com)
- Visit [OpenCV Documentation](https://docs.opencv.org) for computer vision details

## More Image Examples

Single images are automatically sized to 70% width:

![Robot Assembly Process](/files/projects/rubiks-cube-robot/assembly.jpg)

*The robot assembly process showing mechanical components*

You can also create a comparison view with two images:

![Before Solving](/files/projects/rubiks-cube-robot/hero.jpg)
![After Solving](/files/projects/rubiks-cube-robot/solved-cube.jpg)

## Tables

### Algorithm Performance Comparison

| Algorithm | Avg Moves | Avg Time | Complexity |
|-----------|-----------|----------|------------|
| Kociemba | 18-20 | 0.1s | O(n²) |
| CFOP | 50-60 | 0.05s | O(n³) |
| Beginner | 100+ | 0.02s | O(n) |

### Hardware Specifications

| Component | Specification | Quantity |
|-----------|--------------|----------|
| Servo Motor | MG996R | 6 |
| Camera | Raspberry Pi Camera v2 | 1 |
| Microcontroller | Arduino Mega | 1 |
| Power Supply | 12V 5A | 1 |

## Horizontal Rules

The following sections are separated by horizontal rules:

---

### Section 1: Computer Vision

The vision system uses OpenCV to detect colors on all six faces of the cube.

***

### Section 2: Solving Algorithm

The Kociemba algorithm provides optimal solutions in minimal moves.

---

## Emphasis and Strong Emphasis

This is *emphasized text* and this is **strong text**. You can also use _underscores for emphasis_ and __double underscores for strong__.

## Escaping Characters

Sometimes you need to show markdown syntax literally: \\*not italic\\* and \\**not bold\\**.

## Technical Deep Dive

The robot operates in several phases:

1. **Scanning Phase**: The cube is rotated by servo motors while a camera captures images of each face
2. **Recognition Phase**: OpenCV processes images using HSV color space to identify each sticker's color
3. **Solving Phase**: The detected cube state is fed into the Kociemba two-phase algorithm
4. **Execution Phase**: The calculated solution moves are executed by coordinated servo movements

The entire process, from scrambled to solved, takes approximately 8-10 seconds, with the solving algorithm itself computing the solution in under 100 milliseconds.

### Performance Metrics

\`\`\`
Average solve time: 8.7 seconds
Success rate: 98.3%
Average moves: 19.2
Fastest solve: 6.1 seconds
\`\`\`

## Conclusion

This Rubik's Cube Robot project combines **mechanical engineering**, *computer vision*, and ***algorithmic problem-solving*** into one cohesive system. The integration of ROS for robot control, OpenCV for perception, and Python for high-level logic demonstrates a full-stack robotics application.

> "Any sufficiently advanced technology is indistinguishable from magic." - Arthur C. Clarke

The project continues to evolve with improvements in speed, accuracy, and reliability.`,
    gallery: [
      {
        src: getProjectImage("rubiks-cube-robot", "assembly.jpg"),
        alt: "Robot mechanical assembly with servo motors",
      },
      {
        src: getProjectImage("rubiks-cube-robot", "vision-system.jpg"),
        alt: "Computer vision color detection system",
      },
      {
        src: getProjectImage("rubiks-cube-robot", "solved-cube.jpg"),
        alt: "Solved Rubik's Cube",
      },
      {
        src: getProjectImage("rubiks-cube-robot", "electronics.jpg"),
        alt: "Control electronics and wiring",
      },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    challenges: `## Challenges & Solutions

### Challenge 1: Color Recognition Reliability

**Problem**: Initial color detection failed under varying lighting conditions, causing misidentification of colors.

**Solution**: Implemented adaptive thresholding and HSV color space conversion with dynamic range adjustment based on ambient light sensors. Also added calibration routines that run before each solve.

### Challenge 2: Mechanical Precision

**Problem**: Servo motors lacked the precision needed for consistent 90-degree rotations, leading to cube misalignment.

**Solution**: Upgraded to metal-gear servos (MG996R) and implemented closed-loop feedback using hall effect sensors to verify exact rotation angles.

### Challenge 3: Processing Speed

**Problem**: Initial implementation took 30+ seconds per solve due to inefficient image processing.

**Solution**: Optimized computer vision pipeline using NumPy vectorization and implemented multi-threading for parallel face analysis, reducing processing time by 70%.`,
    keyFeatures: `## Key Features

- **Sub-10 Second Solves**: Consistently solves cubes in under 10 seconds from scrambled state to completion
- **98%+ Success Rate**: Highly reliable with minimal failed attempts due to robust error detection
- **Optimal Solutions**: Uses Kociemba algorithm guaranteeing solutions in 20 moves or fewer
- **Real-time Visualization**: Live camera feed with overlay showing detected colors
- **Adaptive Lighting**: Automatically adjusts to different lighting conditions
- **Web Interface**: Control panel for monitoring solve progress and viewing statistics
- **Move History**: Records and displays all moves executed during solving
- **Multiple Solving Algorithms**: Supports Kociemba, CFOP, and beginner methods`,
    lessonsLearned: `## Lessons Learned

### Technical Insights

1. **Computer Vision is Hard**: What seems simple to human eyes (recognizing colors) requires extensive tuning, calibration, and error handling in software. Environmental factors like lighting and shadows have massive impacts on reliability.

2. **Hardware Matters**: The quality of servos, cameras, and mechanical components directly impacts performance. Investing in better hardware early saves debugging time later.

3. **Algorithm Selection**: While the Kociemba algorithm provides optimal solutions, simpler algorithms (like CFOP) can be faster to compute for real-time applications. The trade-off between move optimality and computation speed is important.

### Project Management

1. **Iterative Development**: Breaking the project into phases (mechanical → vision → solving → integration) made debugging much easier than trying to build everything at once.

2. **Testing Framework**: Creating a test suite with known cube configurations was invaluable for validating changes without needing physical hardware.

3. **Documentation**: Keeping detailed notes about calibration values, color thresholds, and mechanical adjustments saved countless hours when revisiting code months later.

### Future Improvements

- Implement machine learning for color detection instead of hard-coded thresholds
- Add voice commands for hands-free operation
- Create a mobile app for wireless control
- Optimize for one-handed solving to compete in speed-solving competitions`,
    files: [
      {
        name: "cube-solver-algorithm.py",
        url: "/resume-florian-schwarzinger.pdf",
      },
      {
        name: "robot-cad-model.sldprt",
        url: "/resume-florian-schwarzinger.pdf",
      },
      {
        name: "color-calibration-data.json",
        url: "/resume-florian-schwarzinger.pdf",
      },
      {
        name: "servo-control-firmware.ino",
        url: "/resume-florian-schwarzinger.pdf",
      },
      {
        name: "project-documentation.pdf",
        url: "/resume-florian-schwarzinger.pdf",
      },
      {
        name: "test-results.zip",
        url: "/resume-florian-schwarzinger.pdf",
      },
    ],
  },
  {
    id: "autonomous-nav",
    title: "Autonomous Navigation System",
    description:
      "A robust navigation system for industrial robots, featuring SLAM algorithms and dynamic obstacle avoidance for warehouse environments.",
    image: getProjectImage("autonomous-navigation", "hero.jpg"),
    tags: ["Robotics", "Computer Vision", "AI/ML"],
    content: `It started with a simple observation: warehouse robots were struggling to navigate dynamic environments. They'd stop at every unexpected obstacle, waiting for human intervention. I knew we could do better.

## The Challenge

The existing navigation systems relied on pre-mapped environments, which worked fine until someone moved a pallet or a forklift changed course. Real warehouses are messy, chaotic places where things are constantly moving. We needed a robot that could think on its feet.

## Building the Solution

I dove into **SLAM (Simultaneous Localization and Mapping)** algorithms, combining data from *LiDAR sensors*, *cameras*, and *inertial measurement units*. The goal was to create a system that could build and update its map in real-time while navigating through it.

The breakthrough came when we implemented a **predictive trajectory planning** module. Instead of just reacting to obstacles, the system could anticipate them. Using Kalman filtering, it would track moving objects and predict where they'd be in the next few seconds. This meant smoother, more natural navigation—the robot could flow around obstacles rather than constantly stopping and starting.

### The Architecture

Building on the **ROS framework**, we created a modular stack:

- A perception layer that fused sensor data
- Particle filter-based localization for pinpoint accuracy
- Dual mapping systems (local and global) for efficiency
- A* path planning with dynamic replanning
- PID-based motion control with collision prediction

The modularity was key. We designed it so you could swap out algorithms, integrate different hardware, or tune parameters on the fly. No recompilation needed.

## Real-World Testing

The first deployment was nerve-wracking. Watching the robot navigate a busy warehouse floor, weaving between forklifts and workers, adjusting its path in real-time—it was like seeing it come alive. We achieved ±5cm positioning accuracy with a 30Hz update rate, processing everything fast enough to react to sudden changes.

The system ran for 8 hours on a single charge and, most importantly, maintained a perfect safety record throughout testing. Zero collisions.

## The Impact

Today, this system operates in three major warehouse facilities. The improvement in logistics efficiency has been tangible—faster material transport, fewer bottlenecks, and robots that work alongside humans naturally rather than getting in their way.

Looking back, what started as frustration with rigid navigation systems turned into a flexible, intelligent solution that actually understands its environment. That's the beauty of robotics: taking real-world chaos and finding elegant ways to navigate through it.`,
    gallery: [
      { src: getProjectImage("autonomous-navigation", "visualization.jpg"), alt: "Navigation system visualization" },
      { src: getProjectImage("autonomous-navigation", "sensors.jpg"), alt: "Circuit board and sensors" },
      { src: getProjectImage("autonomous-navigation", "dashboard.jpg"), alt: "System monitoring dashboard" },
      { src: getProjectImage("autonomous-navigation", "code.jpg"), alt: "Code implementation" },
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    id: "arm-control",
    title: "Precision Robotic Arm Controller",
    description:
      "High-precision control system for a 6-DOF robotic arm used in sensitive material handling and assembly tasks.",
    image: getProjectImage("robotic-arm", "hero.jpg"),
    tags: ["Robotics", "Control Systems", "Mechatronics"],
    content: `When you're assembling semiconductor components or medical devices, "close enough" doesn't cut it. We're talking about precision measured in microns—that's millionths of a meter. One tremor, one miscalculation, and you've ruined an expensive part.

## The Problem

The challenge was creating a robotic arm that could match—or exceed—human precision while maintaining the consistency and speed that humans can't sustain. The arm needed to *feel* what it was touching and *see* what it was doing, all while processing this information fast enough to make real-time adjustments.

## Designing the Control System

I designed a hierarchical control architecture with three layers operating at different speeds:

- **Inner loop (1kHz)**: Lightning-fast motor control responding to the tiniest deviations
- **Outer loop (100Hz)**: Trajectory tracking ensuring smooth, accurate movements  
- **Planning layer (10Hz)**: High-level task coordination orchestrating the whole operation

The magic happened when we integrated dual feedback systems: a 6-axis force/torque sensor at the end-effector and a vision system running at 60 FPS. The arm could simultaneously *feel* the forces it was applying and *see* its position, creating a closed-loop system that adapted to variations in real-time.

## The Breakthrough

The breakthrough moment came during testing. We were handling components with varying weights and surface properties—something that would typically require manual recalibration. But the dual-feedback system adjusted automatically, maintaining positioning accuracy within **10 microns** regardless of what it was handling.

Using high-resolution optical encoders (0.01° resolution) and predictive modeling, the system could anticipate required adjustments before errors occurred. It wasn't just reactive; it was predictive.

## Real-World Performance

In production, the arm reduced assembly time by 35% while maintaining accuracy that human operators couldn't match over extended periods. The force feedback prevented damage to delicate components, and the visual servoing ensured perfect alignment every time.

What started as a challenge in precision engineering became a lesson in sensor fusion and adaptive control. Sometimes the best solutions come from combining different sensing modalities, letting the system perceive its environment the way humans do—through multiple senses working together.`,
    gallery: [
      { src: getProjectImage("robotic-arm", "control-interface.jpg"), alt: "Control interface" },
      { src: getProjectImage("robotic-arm", "system-code.jpg"), alt: "System code" },
    ],
  },
  {
    id: "drone-swarm",
    title: "Multi-Drone Coordination System",
    description:
      "Software framework enabling autonomous coordination of drone swarms for environmental monitoring and mapping applications.",
    image: getProjectImage("drone-coordination", "hero.jpg"),
    tags: ["Robotics", "Distributed Systems", "AI/ML"],
    content: `One drone can map an area. But twelve drones working together? That's when things get interesting.

## The Vision

I wanted to create something that behaved less like individual robots following commands and more like a flock of birds—autonomous units that could make collective decisions, adapt to changing conditions, and continue functioning even if some members failed.

The application was environmental monitoring and rapid 3D mapping of large areas. A single drone would take hours to cover what a coordinated swarm could map in minutes.

## The Challenge of Coordination

The hardest part wasn't getting the drones to fly—it was getting them to work together intelligently. They needed to:

- Divide tasks among themselves without central control
- Maintain formation while adapting to terrain
- Share information in real-time across a mesh network
- Continue functioning if some drones lost communication or failed

Traditional centralized control wouldn't work. If the central controller failed, the entire swarm would fail. We needed true distributed intelligence.

## Building Swarm Intelligence

I implemented a **decentralized consensus algorithm** where each drone was an equal participant in decision-making. Think of it like a committee where everyone votes, but the voting happens continuously and automatically.

The system used:
- **Consensus-based task allocation**: Drones negotiated among themselves who would cover which areas
- **Distributed formation control**: They maintained optimal spacing without a central coordinator
- **Cooperative path planning**: Routes were planned collectively, avoiding overlaps and maximizing coverage

The communication architecture was a mesh network with redundant paths. If one drone couldn't talk directly to another, the message would route through others. We achieved 99.2% communication reliability even in challenging RF environments.

## Watching It Come Together

The first successful field test was magical. Twelve drones launched simultaneously, spread out into formation, and began systematically mapping a forest area. When we intentionally killed communication to three drones, the swarm adapted instantly—the remaining drones redistributed the workload and filled the gaps.

We reduced mapping time by 75% compared to single-drone operations, but more importantly, we proved that true swarm intelligence was viable for real-world applications.

## Lessons in Emergence

What I learned from this project goes beyond robotics. When you design systems where individual agents follow simple rules but interact intelligently, complex behaviors emerge naturally. The swarm became more than the sum of its parts.

That's the beauty of distributed systems—resilience and intelligence arise from collaboration rather than central control.`,
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [
      { src: getProjectImage("drone-coordination", "field-testing.jpg"), alt: "Field testing setup" },
      { src: getProjectImage("drone-coordination", "control-station.jpg"), alt: "Control station" },
      { src: getProjectImage("drone-coordination", "swarm-data.jpg"), alt: "Swarm coordination data visualization" },
    ],
  },
  {
    id: "vision-system",
    title: "Advanced Machine Vision System",
    description:
      "Computer vision system for real-time object detection, classification and quality control in manufacturing settings.",
    image: getProjectImage("machine-vision", "hero.jpg"),
    tags: ["Computer Vision", "AI/ML", "Manufacturing"],
    content: `Quality control in manufacturing is tedious, repetitive work. Human inspectors get tired, miss defects, and can't keep up with modern production speeds. But what if a machine could see defects smaller than 0.1mm while inspecting 120 items per minute without ever getting tired?

## The Manufacturing Problem

Traditional automated inspection systems were rigid—they could only detect the defects they were explicitly programmed to find. When new defect patterns emerged, the entire system needed to be recalibrated and retrained, costing time and money.

I wanted to build something better: a vision system that could learn and adapt on its own.

## Combining Old and New

The solution combined classical computer vision techniques with modern deep learning. Classical methods handled the basics—edge detection, feature extraction, geometric analysis. But the neural network brought intelligence, learning to recognize subtle patterns that traditional algorithms would miss.

I designed a custom CNN architecture specifically optimized for defect detection. Using **PyTorch** and **TensorRT optimization**, we achieved real-time inference fast enough to keep up with production speeds. The key was GPU-accelerated image processing with CUDA, multi-threaded pipelines, and zero-copy transfers—every millisecond counted.

## The Self-Improving System

Here's where it got interesting: I added an online learning module. Instead of being frozen after training, the system continued learning from new examples. When inspectors flagged false positives or missed defects, the system incorporated that feedback automatically.

This meant the system got *better* over time without requiring expensive retraining cycles. It adapted to new defect patterns, changing materials, and evolving manufacturing processes.

## Performance in Production

The results exceeded expectations:
- **98.9% precision** with 97.8% recall
- Detecting defects as small as 0.1mm
- Processing 120 items per minute
- 80% reduction in false positives compared to the previous system

But the real win was operational. The system reduced inspection costs, caught defects earlier in production, and freed human inspectors to focus on complex cases requiring judgment.

## Edge Computing Architecture

Running this system required serious optimization. I implemented an edge computing architecture that processed everything locally, avoiding network latency. The entire pipeline—image capture, processing, inference, and decision—happened in real-time on dedicated hardware.

## Reflections

Building this system taught me that the best AI solutions aren't always the most complex. Sometimes it's about combining proven techniques with modern approaches, optimizing ruthlessly for performance, and designing systems that learn from their mistakes.

Quality control might seem mundane, but when you're catching defects that would cost thousands of dollars downstream, every fraction of a percent in accuracy matters.`,
    gallery: [
      { src: getProjectImage("machine-vision", "defect-detection.jpg"), alt: "Real-time defect detection in action" },
      { src: getProjectImage("machine-vision", "processing-pipeline.jpg"), alt: "Vision processing pipeline" },
    ],
  },
  {
    id: "exoskeleton",
    title: "Assistive Exoskeleton Design",
    description:
      "Lightweight exoskeleton with adaptive control systems to assist with rehabilitation and mobility for patients with limited motor functions.",
    image: getProjectImage("exoskeleton", "hero.jpg"),
    tags: ["Mechatronics", "Biomedical", "Hardware"],
    content: `Imagine losing the ability to lift your arm. Simple tasks—eating, dressing, reaching for things—become exhausting struggles. I wanted to build something that could give people that capability back without making them feel like they're wearing a machine.

## The Human Element

The challenge with assistive exoskeletons is finding the balance. Too much assistance and you're fighting the device. Too little and it's not helping. The device needs to *understand* what you're trying to do and provide exactly the right amount of support—no more, no less.

Most exoskeletons fail because they're heavy, rigid, and uncomfortable. People won't wear a device all day if it's exhausting to wear. So weight and comfort became just as important as functionality.

## Designing for Comfort and Function

I started with **carbon fiber composites**—strong enough to provide support but light enough to wear for hours. The entire frame came in under 8kg, which meant users could wear it through their daily routines without the device itself becoming a burden.

The actuator placement was critical. I designed custom brushless motors positioned ergonomically at key joints. They provided power where it was needed while maintaining natural ranges of motion. The device had to *move* like a human limb, not fight against it.

## Reading Intent

The real innovation was the control system. Using **EMG (electromyography) sensors**, the device could detect muscle activation patterns—essentially reading the user's intent before the movement happened. This meant the assistance was anticipatory rather than reactive.

I implemented an "assist-as-needed" algorithm that analyzed the user's muscle signals in real-time, predicted their intended movement, and provided smooth torque modulation to help complete the motion naturally. Machine learning helped the system adapt to each user's unique patterns over time.

The result was something that felt less like a machine and more like an extension of the user's own body.

## Real-World Impact

During testing, users reported 60% reduction in fatigue compared to performing tasks unassisted. The device ran for 8 hours on a single charge—long enough for a full day's activities. But the real measure of success was qualitative: people forgot they were wearing it.

One tester told me they felt "normal again." That's when I knew we'd gotten it right.

## Engineering Empathy

This project taught me that the best assistive technology is invisible. It's not about showcasing clever engineering—it's about giving people back their independence in a way that feels natural and dignified.

Sometimes the most meaningful engineering challenges aren't about pushing technical boundaries—they're about understanding human needs and building solutions that genuinely improve lives.`,
    gallery: [
      { src: getProjectImage("exoskeleton", "prototype.jpg"), alt: "Exoskeleton prototype assembly" },
      { src: getProjectImage("exoskeleton", "testing.jpg"), alt: "User testing session" },
      { src: getProjectImage("exoskeleton", "biomechanics.jpg"), alt: "Biomechanics analysis" },
    ],
  },
  {
    id: "teleoperation",
    title: "Haptic Teleoperation Interface",
    description:
      "A teleoperation system with haptic feedback enabling precise remote control of robotic systems in hazardous environments.",
    image: getProjectImage("haptic-interface", "hero.jpg"),
    tags: ["Robotics", "HCI", "Control Systems"],
    content: `Sending robots into dangerous environments is one thing. Controlling them precisely from a distance is another challenge entirely. The problem with traditional remote control is the disconnect—you're watching through a camera, guessing at forces, and struggling with tasks that would be trivial with your own hands.

## The Need for Touch

When humans manipulate objects, we rely heavily on tactile feedback. We feel resistance, texture, weight distribution. Remove that sense of touch and even simple tasks become frustratingly difficult.

I wanted to build a teleoperation system that brought that sense of touch back—allowing operators to *feel* what the robot felt, bridging the gap between the human operator and the remote manipulator.

## Bilateral Control Architecture

The solution was a **bilateral control system** that transmitted force information in both directions. The operator used a force-feedback master device—when they moved it, the remote robot moved correspondingly. But crucially, when the robot encountered resistance, the operator felt that resistance through the master device.

This created an immersive control experience. You could feel the difference between wood and metal, sense when you were about to drop something, detect if a component was binding during assembly. It was like having a 100-foot-long arm.

The technical challenge was the **time delay**. Network latency is inevitable, and even small delays can destabilize bilateral control systems. I implemented time-delay compensation algorithms that predicted and adjusted for latency, keeping the system stable and responsive.

## Optimizing for Real-Time Performance

The network layer was critical. I designed an optimized UDP protocol with packet loss recovery and latency prediction. We needed guaranteed sub-100ms round-trip time to maintain stable haptic feedback—any longer and the system would feel sluggish or unstable.

The architecture included:
- A force-feedback master device for the operator
- A 6-DOF slave manipulator in the field
- Real-time processing that maintained the haptic illusion

## Results in Hazardous Environments

In field tests, operators completed complex manipulation tasks 45% faster than with traditional camera-only control. Precision improved by 70%, and operators reported significantly less fatigue—they weren't fighting the interface anymore.

The system enabled robots to work in environments where humans couldn't safely go: radioactive areas, chemical spills, extreme temperatures. The operators could work comfortably from a safe distance while maintaining the dexterity needed for complex tasks.

## The Human-Robot Connection

What fascinated me most was watching operators use the system. After an initial learning period, they stopped thinking about the robot as a separate entity. The haptic feedback created such an immersive experience that they mentally "were" the robot—their sense of embodiment extended through the interface.

That's the goal of good teleoperation design: making the technology transparent so operators can focus on the task rather than the interface.

This project reinforced a principle I've carried into other work: when building human-machine interfaces, the best designs are the ones that feel natural enough to become invisible.`,
    gallery: [
      {
        src: getProjectImage("haptic-interface", "operator-setup.jpg"),
        alt: "Operator control station with haptic device",
      },
      { src: getProjectImage("haptic-interface", "force-feedback.jpg"), alt: "Force feedback mechanism close-up" },
    ],
  },
];
