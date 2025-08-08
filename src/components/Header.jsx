import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const navLinks = [
  { to: "home", text: "Home" },
  { to: "about", text: "About" },
  { to: "services", text: "Services" },
  { to: "projects", text: "Projects" },
  { to: "team", text: "Team" },
  { to: "contact", text: "Contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <a href="/" className="hover:text-cyan-400 transition-colors duration-300">
            DeployZen
          </a>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <li key={link.to}>
              <ScrollLink
                to={link.to}
                smooth={true}
                duration={500}
                offset={-80}
                spy={true}
                onSetActive={() => setActive(link.to)} // Update active state
                className="relative group text-lg cursor-pointer transition-colors duration-300"
              >
                <span
                  className={
                    active === link.to
                      ? "text-cyan-400"
                      : "text-white group-hover:text-cyan-400"
                  }
                >
                  {link.text}
                </span>
                <span
                  className={`absolute bottom-[-2px] left-0 h-0.5 bg-cyan-400 transition-all duration-300 ${
                    active === link.to
                      ? "w-full"
                      : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </ScrollLink>
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
      <ul
        className={`md:hidden bg-gray-900 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96" : "max-h-0"
        } overflow-hidden`}
      >
        {navLinks.map((link) => (
          <li key={link.to} className="border-t border-gray-700">
            <ScrollLink
              to={link.to}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              onSetActive={() => setActive(link.to)}
              className={`block w-full text-center py-4 cursor-pointer transition-colors duration-300 ${
                active === link.to
                  ? "bg-gray-800 text-cyan-400"
                  : "hover:bg-gray-800 text-white"
              }`}
              onClick={closeMenu}
            >
              {link.text}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </header>
  );
};

export default Header;
