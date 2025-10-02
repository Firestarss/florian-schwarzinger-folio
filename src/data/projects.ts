export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  
  // Professional project details
  techStack?: string[];
  duration?: string;
  role?: string;
  teamSize?: number;
  
  // Content sections with markdown support
  sections?: {
    type: 'overview' | 'technical' | 'results' | 'gallery' | 'video';
    title?: string;
    content?: string; // Markdown content for text sections
    images?: { src: string; alt: string; }[]; // For gallery sections
    videoUrl?: string; // For video sections
  }[];
  
  // Outcomes and metrics
  outcomes?: string[];
}
export const projects: Project[] = [
  {
    id: "autonomous-nav",
    title: "Autonomous Navigation System",
    description: "A robust navigation system for industrial robots, featuring SLAM algorithms and dynamic obstacle avoidance for warehouse environments.",
    image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc",
    tags: ["Robotics", "Computer Vision", "AI/ML"],
    techStack: ["ROS", "Python", "C++", "LiDAR", "OpenCV", "TensorFlow"],
    duration: "8 months",
    role: "Lead Navigation Engineer",
    teamSize: 4,
    outcomes: [
      "Achieved 99.7% obstacle avoidance success rate",
      "Reduced navigation planning time by 60%",
      "Successfully deployed in 3 warehouse facilities"
    ],
    sections: [
      {
        type: 'overview',
        title: 'Project Overview',
        content: `This autonomous navigation system represents a significant advancement in industrial robotics applications. By implementing cutting-edge **Simultaneous Localization and Mapping (SLAM)** algorithms, we created a solution that allows robots to navigate complex warehouse environments with minimal human intervention.

The system utilizes a combination of *LiDAR sensors*, *computer vision*, and *inertial measurement units* to create and maintain an accurate map of its surroundings in real-time. This multi-sensor fusion approach ensures robust performance even in challenging conditions like poor lighting or dynamic environments with moving obstacles.`
      },
      {
        type: 'technical',
        title: 'Technical Implementation',
        content: `## Architecture

The navigation stack is built on the **ROS (Robot Operating System)** framework and consists of several key modules:

- **Perception Layer**: Processes raw sensor data from LiDAR and cameras
- **Localization Module**: Implements particle filter-based Monte Carlo localization
- **Mapping System**: Maintains both local and global occupancy grid maps
- **Path Planning**: A* algorithm with dynamic replanning capabilities
- **Motion Control**: PID-based trajectory following with predictive collision avoidance

## Key Innovations

One of the most innovative aspects is the **predictive trajectory planning** module, which anticipates the movement of dynamic obstacles using Kalman filtering. This allows for smoother navigation in busy environments where humans and other robots are present.

The system architecture is highly modular, allowing for:
- Easy integration with different robot platforms
- Swappable algorithm implementations
- Real-time parameter tuning without recompilation`
      },
      {
        type: 'results',
        title: 'Results & Impact',
        content: `## Performance Metrics

- **Navigation Accuracy**: ±5cm positioning error
- **Processing Speed**: 30Hz update rate
- **Battery Efficiency**: 8-hour continuous operation
- **Safety Record**: Zero collision incidents in testing phase

## Real-World Deployment

Successfully deployed across three major warehouse facilities, resulting in 40% improvement in logistics efficiency and significant reduction in manual material transport.`
      },
      {
        type: 'gallery',
        title: 'Project Gallery',
        images: [
          { src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7", alt: "Navigation system visualization" },
          { src: "https://images.unsplash.com/photo-1518770660439-4636190af475", alt: "Circuit board and sensors" },
          { src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158", alt: "System monitoring dashboard" },
          { src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085", alt: "Code implementation" }
        ]
      },
      {
        type: 'video',
        title: 'Demo Video',
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      }
    ]
  },
  {
    id: "arm-control",
    title: "Precision Robotic Arm Controller",
    description: "High-precision control system for a 6-DOF robotic arm used in sensitive material handling and assembly tasks.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e",
    tags: ["Robotics", "Control Systems", "Mechatronics"],
    techStack: ["C++", "Real-Time Linux", "CAD", "Simulink", "Force Sensors"],
    duration: "6 months",
    role: "Control Systems Engineer",
    teamSize: 3,
    outcomes: [
      "Achieved 10 micron positioning accuracy",
      "Reduced assembly time by 35%",
      "Implemented adaptive force control"
    ],
    sections: [
      {
        type: 'overview',
        title: 'Project Overview',
        content: `This precision control system was designed for applications requiring extremely fine motor control, such as semiconductor manufacturing and medical device assembly. By combining advanced feedback mechanisms with predictive modeling, we achieved positioning accuracy within **10 microns**.

The **closed-loop control system** incorporates both *force feedback* and *visual servoing* to maintain precision even when handling objects with varying weights and properties. This dual-feedback approach allows the system to adapt dynamically to changing conditions during operation.`
      },
      {
        type: 'technical',
        title: 'Technical Details',
        content: `## Control Architecture

Implemented a hierarchical control system with:
- High-frequency inner loop (1kHz) for motor control
- Medium-frequency outer loop (100Hz) for trajectory tracking
- Low-frequency planning layer (10Hz) for task coordination

## Sensor Integration

- 6-axis force/torque sensor at end-effector
- High-resolution optical encoders (0.01° resolution)
- Vision system for visual servoing (60 FPS)`
      },
      {
        type: 'gallery',
        title: 'Implementation',
        images: [
          { src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b", alt: "Control interface" },
          { src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6", alt: "System code" }
        ]
      }
    ]
  },
  {
    id: "drone-swarm",
    title: "Multi-Drone Coordination System",
    description: "Software framework enabling autonomous coordination of drone swarms for environmental monitoring and mapping applications.",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    tags: ["Robotics", "Distributed Systems", "AI/ML"],
    techStack: ["Python", "ROS", "OpenCV", "ArduPilot", "NetworkX"],
    duration: "10 months",
    role: "Swarm Algorithms Developer",
    teamSize: 5,
    outcomes: [
      "Coordinated swarms of up to 12 drones simultaneously",
      "99.2% communication reliability",
      "Reduced mapping time by 75% compared to single-drone"
    ],
    sections: [
      {
        type: 'overview',
        title: 'Project Overview',
        content: `This coordination system allows multiple autonomous drones to work together as a unified swarm, sharing information and making collective decisions. Applications include large-scale environmental monitoring, search and rescue operations, and rapid 3D mapping of complex environments.

The system utilizes a **distributed consensus algorithm** that enables the swarm to continue functioning effectively even if some drones fail or lose communication. This resilience is critical for real-world deployments where reliability cannot be compromised.`
      },
      {
        type: 'technical',
        title: 'Technical Implementation',
        content: `## Swarm Intelligence

Implemented a decentralized coordination framework based on:
- Consensus-based task allocation
- Distributed formation control
- Cooperative path planning

## Communication Architecture

Mesh network topology with redundant communication paths ensures robustness against individual node failures.`
      },
      {
        type: 'video',
        title: 'Field Test Demo',
        videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
      },
      {
        type: 'gallery',
        title: 'Field Testing',
        images: [
          { src: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952", alt: "Field testing setup" },
          { src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1", alt: "Control station" }
        ]
      }
    ]
  },
  {
    id: "vision-system",
    title: "Advanced Machine Vision System",
    description: "Computer vision system for real-time object detection, classification and quality control in manufacturing settings.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    tags: ["Computer Vision", "AI/ML", "Manufacturing"],
    techStack: ["Python", "PyTorch", "OpenCV", "CUDA", "Docker"],
    duration: "7 months",
    role: "Computer Vision Engineer",
    teamSize: 3,
    outcomes: [
      "98.9% defect detection accuracy",
      "120 items/minute inspection speed",
      "Reduced false positives by 80%"
    ],
    sections: [
      {
        type: 'overview',
        title: 'Project Overview',
        content: `This machine vision system combines classical computer vision techniques with modern deep learning approaches to deliver highly accurate object detection and quality control for manufacturing lines. The system can identify defects as small as **0.1mm** while operating at production speeds of up to **120 items per minute**.

One of the key innovations is the ability to **continuously learn and adapt** to new defect patterns without requiring extensive retraining. This self-improving capability significantly reduces maintenance overhead and improves long-term performance.`
      },
      {
        type: 'technical',
        title: 'Technical Architecture',
        content: `## Deep Learning Pipeline

- Custom CNN architecture optimized for defect detection
- Real-time inference using TensorRT optimization
- Online learning module for adaptive improvement

## Performance Optimizations

Implemented edge computing architecture with:
- GPU-accelerated image processing (CUDA)
- Multi-threaded inspection pipeline
- Zero-copy image transfers

## Quality Metrics

The system achieved industry-leading performance:
- Precision: 98.9%
- Recall: 97.8%
- F1 Score: 98.3%`
      },
      {
        type: 'gallery',
        title: 'System Implementation',
        images: [
          { src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d", alt: "Development environment" },
          { src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5", alt: "System code" }
        ]
      }
    ]
  },
  {
    id: "exoskeleton",
    title: "Assistive Exoskeleton Design",
    description: "Lightweight exoskeleton with adaptive control systems to assist with rehabilitation and mobility for patients with limited motor functions.",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
    tags: ["Mechatronics", "Biomedical", "Hardware"],
    techStack: ["SolidWorks", "Arduino", "EMG Sensors", "Embedded C", "MATLAB"],
    duration: "12 months",
    role: "Mechanical Design & Control",
    teamSize: 6,
    outcomes: [
      "Reduced user fatigue by 60%",
      "Total weight under 8kg",
      "8-hour battery life achieved"
    ],
    sections: [
      {
        type: 'overview',
        title: 'Project Overview',
        content: `This assistive exoskeleton was designed to provide rehabilitation support while being comfortable enough for all-day wear. The system intelligently adapts to the user's movements, providing just the right amount of assistance without restricting natural motion patterns.

The design incorporates **lightweight composite materials** and a novel actuator arrangement to minimize weight while maximizing support capability. The control system uses *EMG sensors* to detect the user's intended movements and provides anticipatory assistance, creating a more natural and intuitive experience.`
      },
      {
        type: 'technical',
        title: 'Design & Implementation',
        content: `## Mechanical Design

- Carbon fiber composite frame
- Custom-designed brushless actuators
- Ergonomic joint placement for natural movement

## Control System

Adaptive assist-as-needed control algorithm:
- Real-time EMG signal processing
- Intent prediction using machine learning
- Smooth torque modulation for natural feel`
      }
    ]
  },
  {
    id: "teleoperation",
    title: "Haptic Teleoperation Interface",
    description: "A teleoperation system with haptic feedback enabling precise remote control of robotic systems in hazardous environments.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    tags: ["Robotics", "HCI", "Control Systems"],
    techStack: ["ROS", "C++", "UDP", "Haptic Devices", "Real-Time Systems"],
    duration: "9 months",
    role: "Teleoperation Systems Engineer",
    teamSize: 4,
    outcomes: [
      "Reduced task completion time by 45%",
      "Sub-100ms latency achieved",
      "Improved operator precision by 70%"
    ],
    sections: [
      {
        type: 'overview',
        title: 'Project Overview',
        content: `This teleoperation system bridges the gap between human operators and robots working in hazardous environments. By providing intuitive haptic feedback, operators can feel what the robot touches, greatly improving manipulation precision and reducing task completion time.

The haptic feedback system utilizes a **bilateral control architecture** that transmits force information in both directions, creating a truly immersive control experience. This allows operators to feel subtle differences in material properties and surface textures, critical for complex manipulation tasks.`
      },
      {
        type: 'technical',
        title: 'Technical Design',
        content: `## Control Architecture

Bilateral teleoperation with:
- Force feedback master device
- 6-DOF slave manipulator
- Time-delay compensation algorithms

## Network Layer

Optimized UDP communication protocol with:
- Packet loss recovery
- Latency prediction and compensation
- Guaranteed <100ms round-trip time`
      }
    ]
  }
];
