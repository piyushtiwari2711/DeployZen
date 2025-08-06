import React from 'react';
import { Zap, Github, Twitter, Linkedin, Mail,Code,Instagram } from 'lucide-react'; // or from wherever you're importing

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-slate-900 text-white py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="bg-green-500 p-2 rounded-lg">
                <Code className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold">DeployZen</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              You dream it, we build it. Transforming ideas into powerful digital solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="mailto:hello@deployzen.com" className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110">
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button onClick={() => scrollToSection('services')} className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Services
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Projects
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('team')} className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-green-400 transition-colors duration-300">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">Web Development</li>
              <li className="text-gray-300">App Development</li>
              <li className="text-gray-300">UI/UX Design</li>
              <li className="text-gray-300">Branding</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} DeployZen. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


