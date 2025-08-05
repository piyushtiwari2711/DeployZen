import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsOpen(false); // Close mobile menu after clicking
  };

  // Track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'why-choose-us', 'portfolio', 'team', 'contact'];
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: 'home', text: 'Home' },
    { to: 'about', text: 'About' },
    { to: 'why-choose-us', text: 'Why Choose Us' },
    { to: 'portfolio', text: 'Portfolio' },
    { to: 'team', text: 'Team' },
    { to: 'contact', text: 'Contact' },
  ];

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <button 
            onClick={() => scrollToSection('home')} 
            className="hover:text-cyan-400 transition-colors duration-300"
          >
            DeployZen
          </button>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <button
                onClick={() => scrollToSection(link.to)}
                className={`relative group text-lg transition-colors duration-300 ${
                  activeSection === link.to 
                    ? 'text-cyan-400' 
                    : 'text-white hover:text-cyan-400'
                }`}
              >
                {link.text}
                <span className={`absolute bottom-[-2px] left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                  activeSection === link.to 
                    ? 'w-full' 
                    : 'w-0 group-hover:w-full'
                }`}></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Menu" className="text-white focus:outline-none">
            {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <ul className={`md:hidden bg-gray-900 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96' : 'max-h-0'} overflow-hidden`}>
        {navLinks.map((link) => (
          <li key={link.to} className="border-t border-gray-700">
            <button 
              onClick={() => scrollToSection(link.to)} 
              className={`block w-full text-center py-4 transition-colors duration-300 ${
                activeSection === link.to 
                  ? 'bg-gray-800 text-cyan-400' 
                  : 'hover:bg-gray-800 text-white'
              }`}
            >
              {link.text}
            </button>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header
