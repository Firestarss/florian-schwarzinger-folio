
import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-8 border-t border-border bg-background/90">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            © {currentYear} Florian Schwarzinger. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a 
              href="https://github.com/Firestarss" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="p-2 text-muted-foreground hover:text-primary rounded-full hover:bg-muted/50 transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://www.linkedin.com/in/fschwarzinger" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 text-muted-foreground hover:text-primary rounded-full hover:bg-muted/50 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="mailto:florianmschwarzinger@gmail.com" 
              aria-label="Email"
              className="p-2 text-muted-foreground hover:text-primary rounded-full hover:bg-muted/50 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

