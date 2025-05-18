
export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  // Additional fields for project detail page
  detailedDescription?: string;
  videoUrl?: string;
  // Gallery images
  galleryImages?: {
    src: string;
    alt?: string;
  }[];
}

export const projects: Project[] = [
  {
    id: "autonomous-nav",
    title: "Autonomous Navigation System",
    description: "A robust navigation system for industrial robots, featuring SLAM algorithms and dynamic obstacle avoidance for warehouse environments.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    tags: ["ROS"],
    detailedDescription: "This autonomous navigation system represents a significant advancement in industrial robotics applications. By implementing cutting-edge **Simultaneous Localization and Mapping (SLAM)** algorithms, we've created a solution that allows robots to navigate complex warehouse environments with minimal human intervention.\n\n{image:https://images.unsplash.com/photo-1501854140801-50d01698950b:right:40%:Bird's eye view of green mountains}\n\nThe system utilizes a combination of *LiDAR*, *computer vision*, and *inertial sensors* to create and maintain an accurate map of its surroundings in real-time. This multi-sensor approach ensures robust performance even in challenging conditions like poor lighting or dynamic environments with moving obstacles.\n\n{image:https://images.unsplash.com/photo-1472396961693-142e6e269027:left:35%:Brown deer beside trees and mountain}\n\nOne of the most innovative aspects of this project is the **predictive trajectory planning** module, which anticipates the movement of dynamic obstacles and adjusts paths accordingly. This allows for smoother navigation in busy environments like warehouses where humans and other robots may be present.\n\nThe system architecture is designed to be highly modular, allowing for easy integration with different robot platforms. This modularity also extends to the algorithm implementations, making it straightforward to swap out specific components as new techniques become available.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
        alt: "Colorful software code on a computer monitor"
      },
      {
        src: "https://images.unsplash.com/photo-1518770660439-4636190af475",
        alt: "Circuit board macro photography"
      },
      {
        src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
        alt: "Woman using laptop with data visualization"
      },
      {
        src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
        alt: "MacBook with code on screen"
      }
    ]
  },
  {
    id: "arm-control",
    title: "Precision Robotic Arm Controller",
    description: "High-precision control system for a 6-DOF robotic arm used in sensitive material handling and assembly tasks.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["CAD"],
    detailedDescription: "This precision control system was designed for applications requiring extremely fine motor control, such as semiconductor manufacturing and medical device assembly. By combining advanced feedback mechanisms with predictive modeling, we achieved positioning accuracy within 10 microns.\n\n{image:https://images.unsplash.com/photo-1466442929976-97f336a657be:right:45%:Beautiful architectural photography}\n\nThe **closed-loop control system** incorporates both *force feedback* and *visual servoing* to maintain precision even when handling objects with varying weights and properties. This dual-feedback approach allows the system to adapt dynamically to changing conditions during operation.",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
        alt: "Gray laptop computer with code"
      },
      {
        src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
        alt: "Monitor showing programming code"
      }
    ]
  },
  {
    id: "drone-swarm",
    title: "Multi-Drone Coordination System",
    description: "Software framework enabling autonomous coordination of drone swarms for environmental monitoring and mapping applications.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["CAD"],
    detailedDescription: "This coordination system allows multiple autonomous drones to work together as a unified swarm, sharing information and making collective decisions. Applications include large-scale environmental monitoring, search and rescue operations, and rapid 3D mapping of complex environments.\n\n{image:https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07:left:40%:Orange flowers in close-up}\n\nThe system utilizes a **distributed consensus algorithm** that enables the swarm to continue functioning effectively even if some drones fail or lose communication. This resilience is critical for real-world deployments where reliability cannot be compromised.",
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
        alt: "Person working with equipment"
      },
      {
        src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
        alt: "Laptop with dark screen"
      }
    ]
  },
  {
    id: "vision-system",
    title: "Advanced Machine Vision System",
    description: "Computer vision system for real-time object detection, classification and quality control in manufacturing settings.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["CAD"],
    detailedDescription: "This machine vision system combines classical computer vision techniques with modern deep learning approaches to deliver highly accurate object detection and quality control for manufacturing lines. The system can identify defects as small as 0.1mm while operating at production speeds of up to 120 items per minute.\n\n{image:https://images.unsplash.com/photo-1482938289607-e9573fc25ebb:right:45%:River between mountains}\n\nOne of the key innovations in this system is its ability to **continuously learn and adapt** to new defect patterns without requiring extensive retraining. This self-improving capability significantly reduces maintenance overhead and improves long-term performance.",
    galleryImages: [
      {
        src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
        alt: "Person using MacBook Pro"
      },
      {
        src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
        alt: "Matrix-style code screen"
      }
    ]
  },
  {
    id: "exoskeleton",
    title: "Assistive Exoskeleton Design",
    description: "Lightweight exoskeleton with adaptive control systems to assist with rehabilitation and mobility for patients with limited motor functions.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["CAD"],
    detailedDescription: "This assistive exoskeleton was designed to provide rehabilitation support while being comfortable enough for all-day wear. The system intelligently adapts to the user's movements, providing just the right amount of assistance without restricting natural motion patterns.\n\n{image:https://images.unsplash.com/photo-1433086966358-54859d0ed716:left:40%:Gray bridge and waterfalls}\n\nThe design incorporates **lightweight composite materials** and a novel actuator arrangement to minimize weight while maximizing support capability. The control system uses *EMG sensors* to detect the user's intended movements and provides anticipatory assistance, creating a more natural and intuitive experience."
  },
  {
    id: "teleoperation",
    title: "Haptic Teleoperation Interface",
    description: "A teleoperation system with haptic feedback enabling precise remote control of robotic systems in hazardous environments.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["CAD"],
    detailedDescription: "This teleoperation system bridges the gap between human operators and robots working in hazardous environments. By providing intuitive haptic feedback, operators can feel what the robot touches, greatly improving manipulation precision and reducing task completion time.\n\n{image:https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9:right:40%:Photo of pine trees}\n\nThe haptic feedback system utilizes a **bilateral control architecture** that transmits force information in both directions, creating a truly immersive control experience. This allows operators to feel subtle differences in material properties and surface textures, critical for complex manipulation tasks."
  }
];
