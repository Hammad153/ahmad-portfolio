
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {

  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-accent py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-2xl font-display font-bold text-primary">Portfolio</a>
            <p className="text-foreground/70 mt-2 max-w-md"
            >
              Crafting exceptional digital experiences with clean, efficient and maintainable code.
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="https://github.com/Hammad153" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Github size={20} />
              </a>
              <a href="https://linkedin.com/in/ismail-hammad-bb73152b9" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="https://x.com/Ismailhamm27362" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-primary transition-colors">
                <Twitter size={20} />
              </a>
              <a href="mailto:hammadismail1546@gmail.com" className="text-foreground/70 hover:text-primary transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-sm text-foreground/50"
            >
              © {currentYear} Ismail Hammad. All rights reserved.
            </p>
          </div>
        </div>
        
        <div className="border-t border-border/50 mt-8 pt-8 text-center">
          <p className="text-sm text-foreground/50" 
          >
            Designed and built with ❤️ using React, TypeScript, and Tailwind CSS by Hammad
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
