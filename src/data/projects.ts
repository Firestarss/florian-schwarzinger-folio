export interface Project {
  id: string;
  title: string;
  description: string; // Short description
  image: string; // Hero image
  tags: string[];
  
  // Main story content (markdown) - the heart of the page
  content: string;
  
  // Optional elements
  techStack?: string[];
  gallery?: { src: string; alt: string; }[];
  videoUrl?: string;
  challenges?: string;
  keyFeatures?: string;
  lessonsLearned?: string;
}
export const projects: Project[] = [
  {
    id: "rubiks-cube-robot",
    title: "Rubik's Cube Robot",
    description: "An autonomous robotic system capable of solving a standard 3x3 Rubik's Cube in under 10 seconds using computer vision and advanced solving algorithms.",
    image: "/images/projects/rubiks-cube-robot/hero.jpg",
    tags: ["Computer Vision", "Robotics", "OpenCV", "Python", "ROS", "Machine Learning"],
    content: `# Rubik's Cube Robot - Markdown Feature Showcase

This project description demonstrates **every markdown feature** supported by react-markdown.

![Rubik's Cube](/images/projects/rubiks-cube-robot/hero.jpg)

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

## Images

Here's an example of embedded images in the project:

![Robot Gripper Close-up](/images/projects/rubiks-cube-robot/gripper.jpg)

*The custom-designed gripper mechanism with servo motors*

![Color Detection](/images/projects/rubiks-cube-robot/color-detection.jpg)

*Computer vision system detecting cube face colors*

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
    techStack: [
      "Python",
      "OpenCV",
      "ROS (Robot Operating System)",
      "Arduino",
      "Raspberry Pi",
      "NumPy",
      "Kociemba Algorithm",
      "Computer Vision",
      "Servo Control",
      "Image Processing"
    ],
    gallery: [
      {
        src: "/images/projects/rubiks-cube-robot/assembly.jpg",
        alt: "Robot mechanical assembly with servo motors"
      },
      {
        src: "/images/projects/rubiks-cube-robot/vision-system.jpg",
        alt: "Computer vision color detection system"
      },
      {
        src: "/images/projects/rubiks-cube-robot/solved-cube.jpg",
        alt: "Solved Rubik's Cube"
      },
      {
        src: "/images/projects/rubiks-cube-robot/electronics.jpg",
        alt: "Control electronics and wiring"
      }
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
- Optimize for one-handed solving to compete in speed-solving competitions`
  },
  {
    id: "autonomous-nav",
    title: "Autonomous Navigation System",
    description: "A robust navigation system for industrial robots, featuring SLAM algorithms and dynamic obstacle avoidance for warehouse environments.",
    image: "/images/projects/autonomous-navigation/hero.jpg",
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
    techStack: ["ROS", "Python", "C++", "LiDAR", "OpenCV", "TensorFlow"],
    gallery: [
      { src: "/images/projects/autonomous-navigation/visualization.jpg", alt: "Navigation system visualization" },
      { src: "/images/projects/autonomous-navigation/sensors.jpg", alt: "Circuit board and sensors" },
      { src: "/images/projects/autonomous-navigation/dashboard.jpg", alt: "System monitoring dashboard" },
      { src: "/images/projects/autonomous-navigation/code.jpg", alt: "Code implementation" }
    ],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ"
  },
  {
    id: "arm-control",
    title: "Precision Robotic Arm Controller",
    description: "High-precision control system for a 6-DOF robotic arm used in sensitive material handling and assembly tasks.",
    image: "/images/projects/robotic-arm/hero.jpg",
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
    techStack: ["C++", "Real-Time Linux", "CAD", "Simulink", "Force Sensors"],
    gallery: [
      { src: "/images/projects/robotic-arm/control-interface.jpg", alt: "Control interface" },
      { src: "/images/projects/robotic-arm/system-code.jpg", alt: "System code" }
    ]
  },
  {
    id: "drone-swarm",
    title: "Multi-Drone Coordination System",
    description: "Software framework enabling autonomous coordination of drone swarms for environmental monitoring and mapping applications.",
    image: "/images/projects/drone-coordination/hero.jpg",
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
    techStack: ["Python", "ROS", "OpenCV", "ArduPilot", "NetworkX"],
    videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    gallery: [
      { src: "/images/projects/drone-coordination/field-testing.jpg", alt: "Field testing setup" },
      { src: "/images/projects/drone-coordination/control-station.jpg", alt: "Control station" },
      { src: "/images/projects/drone-coordination/swarm-data.jpg", alt: "Swarm coordination data visualization" }
    ]
  },
  {
    id: "vision-system",
    title: "Advanced Machine Vision System",
    description: "Computer vision system for real-time object detection, classification and quality control in manufacturing settings.",
    image: "/images/projects/machine-vision/hero.jpg",
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
    techStack: ["Python", "PyTorch", "OpenCV", "CUDA", "Docker"],
    gallery: [
      { src: "/images/projects/machine-vision/defect-detection.jpg", alt: "Real-time defect detection in action" },
      { src: "/images/projects/machine-vision/processing-pipeline.jpg", alt: "Vision processing pipeline" }
    ]
  },
  {
    id: "exoskeleton",
    title: "Assistive Exoskeleton Design",
    description: "Lightweight exoskeleton with adaptive control systems to assist with rehabilitation and mobility for patients with limited motor functions.",
    image: "/images/projects/exoskeleton/hero.jpg",
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
    techStack: ["SolidWorks", "Arduino", "EMG Sensors", "Embedded C", "MATLAB"],
    gallery: [
      { src: "/images/projects/exoskeleton/prototype.jpg", alt: "Exoskeleton prototype assembly" },
      { src: "/images/projects/exoskeleton/testing.jpg", alt: "User testing session" },
      { src: "/images/projects/exoskeleton/biomechanics.jpg", alt: "Biomechanics analysis" }
    ]
  },
  {
    id: "teleoperation",
    title: "Haptic Teleoperation Interface",
    description: "A teleoperation system with haptic feedback enabling precise remote control of robotic systems in hazardous environments.",
    image: "/images/projects/haptic-interface/hero.jpg",
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
    techStack: ["ROS", "C++", "UDP", "Haptic Devices", "Real-Time Systems"],
    gallery: [
      { src: "/images/projects/haptic-interface/operator-setup.jpg", alt: "Operator control station with haptic device" },
      { src: "/images/projects/haptic-interface/force-feedback.jpg", alt: "Force feedback mechanism close-up" }
    ]
  }
];
