import { motion } from "framer-motion";
import { fadeInAnimation } from "@/lib/utils";
import { Link } from "react-router-dom";
import { getProfileImage } from "@/lib/files";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <motion.main
      initial="initial"
      animate="animate"
      exit="exit"
      variants={fadeInAnimation}
      transition={fadeInAnimation.transition}
      className="max-w-4xl mx-auto"
    >
      <section className="mb-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Florian Schwarzinger
            </h1>
            <h2 className="text-xl md:text-2xl text-primary mb-6">
              Robotics Engineer
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Specializing in autonomous systems and advanced robotic interfaces with 8+ years of experience
              designing and implementing cutting-edge solutions for industrial and research applications.
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="hero" size="lg" className="text-base">
                <Link to="/projects">
                  View Projects
                </Link>
              </Button>

              <Button asChild variant="hero-outline" size="lg" className="text-base">
                <Link to="/contact">
                  Get in Touch
                </Link>
              </Button>
            </div>
          </div>
          <div className="relative h-64 md:h-80 bg-muted rounded-lg overflow-hidden shadow-[0_0_0_1px_hsl(40_100%_70%/0.12),0_4px_18px_-3px_hsl(20_100%_50%/0.18)]">
            <img 
              src={getProfileImage("about-hero.jpg")}
              alt="Robotics engineering workspace with advanced robotic systems and equipment" 
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">About Me</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          I'm a Robotics Engineer passionate about building intelligent systems that bridge the gap between mechanical
          function and software-driven autonomy. With a background in both engineering and applied research, I specialize
          in designing, programming, and integrating advanced robotic platforms for real-world applications.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          I'm a Robotics Engineer and Olin College of Engineering graduate passionate about building intelligent systems
          that bridge mechanical design and software-driven autonomy. I thrive when working across the full electro-mechanical
          stack of a robot—especially during the early-stage prototyping and design phase. With a history of developing mobile robotic systems, I have a deep interest in subsea and underwater robotics, where complexity and creativity go hand in hand.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          During my free time, you can usually find me spinning fire, playing video games with friends, training in
          Brazilian Jiu-Jitsu, or working behind the scenes in technical theater.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Technical Skills</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Robot Operating System (ROS/ROS2)
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Computer Vision & Sensor Fusion
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Machine Learning for Robotics
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                CAD/CAM Software
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Embedded Systems Programming
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Programming</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Python & C++
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                MATLAB & Simulink
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Control Systems Design
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Real-time Operating Systems
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Path Planning Algorithms
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3 text-foreground">Tools & Platforms</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Git & Version Control
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Docker & Containerization
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Linux & Ubuntu Systems
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Gazebo & RViz Simulation
              </li>
              <li className="flex items-center">
                <span className="h-2 w-2 rounded-full bg-primary mr-2"></span>
                Hardware Prototyping
              </li>
            </ul>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

export default About;
