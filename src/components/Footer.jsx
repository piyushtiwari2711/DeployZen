import React from "react";
import { Linkedin, Github, Mail, Instagram } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
import {SiX} from "react-icons/si";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-12 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <span className="text-2xl font-bold">DeployZen</span>
            </div>
            <p className="text-gray-300 text-lg mb-6 max-w-md">
              You dream it, we build it. Transforming ideas into powerful digital solutions that drive business growth.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/deployzen2711/"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="https://www.instagram.com/deployzen?igsh=azYxM2JlYjBkdjh0"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Instagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:web.deployzen@gmail.com"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
              >
                <Mail className="h-6 w-6" />
              </a>
               <a
                href="https://x.com/deployzen"
                className="text-gray-400 hover:text-green-400 transition-colors duration-300 transform hover:scale-110"
              >
                <SiX className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["services", "projects", "team", "contact"].map((section) => (
                <li key={section}>
                  <ScrollLink
                    to={section}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    spy={true}
                    className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors duration-300"
                  >
                    {section.charAt(0).toUpperCase() + section.slice(1)}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-3">
              <li className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors duration-300">Web Development</li>
              <li className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors duration-300">App Development</li>
              <li className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors duration-300">UI/UX Design</li>
              <li className="text-gray-300 hover:text-green-400 cursor-pointer transition-colors duration-300">Branding</li>
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
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-green-400 text-sm transition-colors duration-300"
              >
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
