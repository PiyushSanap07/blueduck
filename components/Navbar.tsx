import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, UtensilsCrossed } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // STRICT Styling: 
  // - Default: Transparent on dark background
  // - Scrolled: Dark Glass
  // - Open: Dark Glass
  // NEVER use bg-white
  const navClasses = isScrolled || isOpen
    ? 'bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-white/10 py-3'
    : 'bg-transparent py-6';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${navClasses}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group relative z-50" onClick={() => setIsOpen(false)}>
            <div className={`p-2 rounded-full transition-colors duration-300 ${isScrolled || isOpen ? 'bg-accent' : 'bg-white/10 backdrop-blur-sm group-hover:bg-accent'}`}>
                <UtensilsCrossed className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl md:text-2xl font-bold tracking-wider leading-none text-white drop-shadow-sm">
                THE BLUE DUCK
              </span>
              <span className="text-[10px] tracking-[0.2em] uppercase font-light text-slate-300">
                Kitchen & Bar
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm font-medium transition-all duration-300 relative group py-2 ${
                  isActive(link.path) 
                    ? 'text-accent' 
                    : 'text-white hover:text-accent'
                }`}
              >
                {link.name}
                <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-accent transform origin-left transition-transform duration-300 ${isActive(link.path) ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}></span>
              </Link>
            ))}
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-accent hover:bg-gold text-white px-5 py-2.5 rounded-sm font-bold text-sm transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-accent/50 hover:-translate-y-0.5"
            >
              <Phone size={16} />
              <span>Book Table</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center z-50">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none text-white hover:text-accent transition-colors duration-300"
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6 flex items-center justify-center">
                 <span className={`absolute transform transition-all duration-300 ${isOpen ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'}`}>
                    <Menu size={28} />
                 </span>
                 <span className={`absolute transform transition-all duration-300 ${isOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'}`}>
                    <X size={28} />
                 </span>
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-slate-950/98 backdrop-blur-xl z-40 md:hidden transition-all duration-500 ease-in-out flex flex-col justify-center items-center ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
        }`}
      >
        <div className="space-y-8 flex flex-col items-center w-full px-8">
          {navLinks.map((link, idx) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              style={{ transitionDelay: `${isOpen ? idx * 100 : 0}ms` }}
              className={`text-4xl font-serif font-bold transition-all duration-500 transform ${
                isActive(link.path)
                  ? 'text-accent scale-110'
                  : 'text-white hover:text-accent'
              } ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
            >
              {link.name}
            </Link>
          ))}
          
          <div className={`pt-8 w-full flex flex-col gap-4 transition-all duration-700 delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
             <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="w-full text-center bg-accent hover:bg-gold text-white px-6 py-4 rounded-sm font-bold text-lg shadow-xl transition-colors"
            >
              Call for Reservations
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;