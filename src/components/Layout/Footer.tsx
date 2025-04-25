
import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative z-10 bg-navy-dark/50 backdrop-blur-sm border-t border-slate/10 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-light text-sm order-2 md:order-1">
           All Rights Reserved M.H
          </p>
          
          <div className="flex space-x-6 order-1 md:order-2">
            <a 
              href="https://github.com/Hemdan1994" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/mohamedhemdan/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate hover:text-highlight transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:mohamedhemdan415@gmail.com" 
              className="text-slate hover:text-highlight transition-colors duration-300"
              aria-label="Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
          
          <p className="text-slate-light text-sm order-3">
            © {new Date().getFullYear()} M.H
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
