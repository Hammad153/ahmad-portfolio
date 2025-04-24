
import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Moon, Sun } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { toast } = useToast();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
      toast({
        title: "Light mode activated",
        duration: 1500,
      });
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
      toast({
        title: "Dark mode activated",
        duration: 1500,
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm border-b shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#" className="text-xl font-display font-bold text-primary">Portfolio</a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-foreground/80 hover:text-primary hover:underline transition-colors">About</a>
            <a href="#projects" className="text-foreground/80 hover:text-primary hover:underline transition-colors">Projects</a>
            <a href="#skills" className="text-foreground/80 hover:text-primary hover:underline transition-colors">Skills</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary hover:underline transition-colors">Contact</a>
            <a href="#certifications" className="text-foreground/80 hover:text-primary hover:underline transition-colors">Certification</a>
            
            <div className="flex items-center space-x-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={toggleTheme} 
                className="ml-2"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </Button>
            </div>
          </div>
          
          {/* Mobile Navigation Button */}
          <div className="md:hidden flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleTheme} 
              className="mr-2"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </Button>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={toggleMenu}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-sm border-b shadow-sm">
          <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors" onClick={toggleMenu}>About</a>
            <a href="#projects" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors" onClick={toggleMenu}>Projects</a>
            <a href="#skills" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors" onClick={toggleMenu}>Skills</a>
            <a href="#contact" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors" onClick={toggleMenu}>Contact</a>
            <a href="#certifications" className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:bg-accent hover:text-accent-foreground transition-colors" onClick={toggleMenu}>Certification</a>
            
            <div className="flex items-center space-x-4 px-3 py-2">
              <a href="https://github.com/Hammad153" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/ismail-hammad-bb73152b9" target="_blank" rel="noopener noreferrer" className="text-foreground/80 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
