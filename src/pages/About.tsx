
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
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
              <a 
                href="/contact" 
                className="px-5 py-2.5 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                Get in Touch
              </a>
              <a 
                href="/projects" 
                className="px-5 py-2.5 border border-border rounded-md hover:bg-muted/50 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
          <div className="relative h-64 md:h-80 bg-muted rounded-lg overflow-hidden shadow-lg">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-background/10"></div>
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e" 
              alt="Robot Engineering" 
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">About Me</h2>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          I'm a passionate Robotics Engineer with a focus on autonomous navigation systems and human-robot interaction. 
          With a background in mechanical engineering and computer science, I bridge the gap between hardware and software 
          to create intelligent robotic systems that solve real-world problems.
        </p>
        <p className="text-muted-foreground mb-4 leading-relaxed">
          My work spans from industrial automation to research-oriented projects exploring the frontiers of 
          machine learning in robotics. I believe in creating systems that are not only technically impressive 
          but also intuitive and accessible for end-users.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          When I'm not building robots, you can find me hiking in the mountains, participating in robotics 
          competitions, or mentoring the next generation of engineers through STEM education programs.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6 inline-block border-b-2 border-primary pb-2">Skills & Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
        </div>
      </section>
    </motion.div>
  );
};

export default About;
