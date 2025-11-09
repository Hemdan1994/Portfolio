import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import ThemeSwitcher from '../ThemeSwitcher';
import { useTheme } from '../../contexts/ThemeContext';
import Resume from '../../../Mohamed-Hemdan-CV.pdf'


const navItems = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Skills', path: '/skills' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Experience', path: '/experience' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' }
];
const Logo = new URL('../../../src/favico.png', import.meta.url).href;
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
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
    <>
    <header 
        className={cn(
          'fixed top-0 w-full z-40 transition-all duration-300',
          scrolled ? 'bg-navy/90 backdrop-blur-sm shadow-lg py-3' : 'bg-transparent py-5'
        )}
      >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="text-highlight text-xl font-bold">
          <img 
          src={Logo} 
          alt="Profile" 
          className='mx-100% h-12'
        />
        </Link>

        <button 
          className={`md:hidden ${theme === 'dark' ? 'text-white' : 'text-navy'} hover:text-highlight`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <nav className="hidden md:flex items-center space-x-8">
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
          <ThemeSwitcher />
          <a 
            href= {Resume} 
            className="btn btn-primary"
            target="_blank" 
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </nav>

        <div 
          ref={mobileMenuRef}
          className={cn(
            'fixed inset-y-0 right-0 transform w-3/4 p-10 transition-transform duration-300 ease-in-out md:hidden z-50',
            theme === 'dark'
              ? 'bg-[#0a192f] shadow-2xl border-l border-navy-light/20'
              : 'bg-white shadow-2xl border-l border-gray-200',
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          )}
        >
          <div className="flex flex-col h-full justify-center space-y-8">
            <button 
              className={`absolute top-6 right-6 ${theme === 'dark' ? 'bg-highlight text-navy' : 'bg-navy text-white'} hover:opacity-80 p-3 rounded-full flex items-center justify-center shadow-lg`}
              onClick={closeMenu}
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
            
            {navItems.map((item, index) => (
              <Link 
                key={item.name} 
                to={item.path}
                className={`text-xl font-medium ${theme === 'dark' ? 'text-white hover:text-highlight' : 'text-navy hover:text-highlight'}`}
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
            <div className="flex justify-center mt-6">
              <ThemeSwitcher />
            </div>
          </div>
        </div>
      </div>
    </header>

    {isMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Overlay */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMenu}
            aria-hidden="true"
          />
          
          {/* Mobile menu content */}
          <div 
            ref={mobileMenuRef}
            className="fixed inset-y-0 right-0 w-3/4 p-10 bg-navy shadow-xl border-l border-navy-light/20 flex flex-col justify-center transform transition-all duration-300 ease-in-out"
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
              <div className="flex justify-center mt-6">
              <ThemeSwitcher />
            </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
