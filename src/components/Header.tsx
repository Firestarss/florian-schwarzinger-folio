
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Terminal } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);
  
  const openTerminal = () => {
    window.dispatchEvent(new CustomEvent('open-terminal'));
  };

  return (
    <header className="bg-background border-b border-border py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button
            onClick={openTerminal}
            className="p-2 rounded-md hover:bg-muted/50 hover:text-primary transition-colors"
            aria-label="Open terminal"
            title="Open Terminal (Ctrl+`)"
          >
            <Terminal size={20} />
          </button>
          <Link to="/" className="text-2xl font-bold text-foreground transition-colors hover:text-primary">
            Florian<span className="text-primary">.</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-muted/50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8 items-center">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `text-base font-semibold hover:text-primary transition-colors ${isActive ? "text-primary" : "text-foreground"}`
            }
            end
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({isActive}) => 
              `text-base font-semibold hover:text-primary transition-colors ${isActive ? "text-primary" : "text-foreground"}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/resume" 
            className={({isActive}) => 
              `text-base font-semibold hover:text-primary transition-colors ${isActive ? "text-primary" : "text-foreground"}`
            }
          >
            Resume
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `text-base font-semibold hover:text-primary transition-colors ${isActive ? "text-primary" : "text-foreground"}`
            }
          >
            Contact
          </NavLink>
        </nav>
      </div>

      {/* Mobile navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-background border-t border-border animate-fade-in">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <NavLink 
              to="/" 
              onClick={closeMenu}
              className={({isActive}) => 
                `block py-2 px-4 text-base font-semibold hover:bg-muted/50 rounded-md transition-colors ${isActive ? "text-primary" : "text-foreground"}`
              }
              end
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              onClick={closeMenu}
              className={({isActive}) => 
                `block py-2 px-4 text-base font-semibold hover:bg-muted/50 rounded-md transition-colors ${isActive ? "text-primary" : "text-foreground"}`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/resume" 
              onClick={closeMenu}
              className={({isActive}) => 
                `block py-2 px-4 text-base font-semibold hover:bg-muted/50 rounded-md transition-colors ${isActive ? "text-primary" : "text-foreground"}`
              }
            >
              Resume
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={closeMenu}
              className={({isActive}) => 
                `block py-2 px-4 text-base font-semibold hover:bg-muted/50 rounded-md transition-colors ${isActive ? "text-primary" : "text-foreground"}`
              }
            >
              Contact
            </NavLink>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
