
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-background border-b border-border py-4 sticky top-0 z-10">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-foreground transition-colors hover:text-primary">
          Florian<span className="text-primary">.</span>
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-muted/50"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop navigation */}
        <nav className="hidden md:flex space-x-8">
          <NavLink 
            to="/" 
            className={({isActive}) => 
              `hover:text-primary transition-colors ${isActive ? "text-primary font-medium" : "text-foreground"}`
            }
            end
          >
            About
          </NavLink>
          <NavLink 
            to="/projects" 
            className={({isActive}) => 
              `hover:text-primary transition-colors ${isActive ? "text-primary font-medium" : "text-foreground"}`
            }
          >
            Projects
          </NavLink>
          <NavLink 
            to="/resume" 
            className={({isActive}) => 
              `hover:text-primary transition-colors ${isActive ? "text-primary font-medium" : "text-foreground"}`
            }
          >
            Resume
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({isActive}) => 
              `hover:text-primary transition-colors ${isActive ? "text-primary font-medium" : "text-foreground"}`
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
                `block py-2 px-4 hover:bg-muted/50 rounded-md transition-colors ${isActive ? "text-primary font-medium" : "text-foreground"}`
              }
              end
            >
              About
            </NavLink>
            <NavLink 
              to="/projects" 
              onClick={closeMenu}
              className={({isActive}) => 
                `block py-2 px-4 hover:bg-muted/50 rounded-md transition-colors ${isActive ? "text-primary font-medium" : "text-foreground"}`
              }
            >
              Projects
            </NavLink>
            <NavLink 
              to="/resume" 
              onClick={closeMenu}
              className={({isActive}) => 
                `block py-2 px-4 hover:bg-muted/50 rounded-md transition-colors ${isActive ? "text-primary font-medium" : "text-foreground"}`
              }
            >
              Resume
            </NavLink>
            <NavLink 
              to="/contact" 
              onClick={closeMenu}
              className={({isActive}) => 
                `block py-2 px-4 hover:bg-muted/50 rounded-md transition-colors ${isActive ? "text-primary font-medium" : "text-foreground"}`
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
