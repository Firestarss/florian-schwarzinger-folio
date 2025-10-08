import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Construction, Home, FolderOpen } from "lucide-react";

const NotFound = () => {
  const robotQuotes = [
    "Even robots take wrong turns sometimes...",
    "My pathfinding algorithm needs calibration.",
    "Error 404: Page escaped the workspace.",
    "This page is still in the prototype phase... of not existing.",
    "I've searched all my subroutines—this page isn't here.",
  ];

  const randomQuote = robotQuotes[Math.floor(Math.random() * robotQuotes.length)];

  return (
    <div className="min-h-[60vh] flex items-center justify-center px-4">
      <motion.div 
        className="text-center max-w-2xl"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          className="mb-8 flex justify-center"
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
        >
          <Construction size={80} className="text-primary" />
        </motion.div>
        
        <h1 className="text-7xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          404
        </h1>
        
        <p className="text-2xl md:text-3xl font-medium mb-3">
          Page Not Found
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 italic">
          "{randomQuote}"
        </p>
        
        <p className="text-muted-foreground mb-8">
          Looks like this page doesn't exist, got moved, or is still being prototyped. 
          Let's get you back on track.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="hero" size="lg">
            <Link to="/">
              <Home size={18} className="mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="hero-outline" size="lg">
            <Link to="/projects">
              <FolderOpen size={18} className="mr-2" />
              Browse Projects
            </Link>
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFound;
