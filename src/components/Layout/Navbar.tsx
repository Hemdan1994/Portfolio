
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  // Close menu when a link is clicked
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen && 
        mobileMenuRef.current && 
        !mobileMenuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <header 
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        scrolled ? 'bg-navy/90 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-highlight text-xl font-bold">
          Portfolio
        </Link>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-white hover:text-highlight"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} color="#FFFFFF" /> : <Menu size={24} color="#FFFFFF" />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navItems.map((item, index) => (
            <Link 
              key={item.name} 
              to={item.path}
              className="nav-link animated-underline"
            >
              <span className="text-highlight mr-1">{`0${index + 1}.`}</span>
              {item.name}
            </Link>
          ))}
          <a 
            href="/resume.pdf" 
            className="btn btn-primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>

        {/* Mobile Navigation - with fixed solid background */}
        <div 
          ref={mobileMenuRef}
          className={cn(
            'fixed inset-y-0 right-0 transform w-3/4 p-10 transition-transform duration-300 ease-in-out md:hidden z-50',
            'bg-[#0a192f] shadow-2xl border-l border-navy-light/20',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full justify-center space-y-8">
            {/* Close button with prominent styling */}
            <button 
              className="absolute top-6 right-6 bg-highlight text-navy hover:bg-highlight/80 p-3 rounded-full flex items-center justify-center shadow-lg"
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            {navItems.map((item, index) => (
              <Link 
                key={item.name} 
                to={item.path}
                className="text-xl font-medium text-white hover:text-highlight"
                onClick={closeMenu}
              >
                <span className="text-highlight mr-2">{`0${index + 1}.`}</span>
                {item.name}
              </Link>
            ))}
            <a 
              href="/resume.pdf" 
              className="btn btn-primary text-center mt-6"
              target="_blank" 
              rel="noopener noreferrer"
              onClick={closeMenu}
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
