import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About", href: "#about" },
    { name: "Products", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8">
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            className="text-gray-700 dark:text-gray-200 hover:text-emerald-500 transition font-medium"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-gray-800 dark:text-gray-200"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </button>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 md:hidden shadow-md">
          <ul className="flex flex-col space-y-4 py-6 px-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block text-gray-800 dark:text-gray-200 hover:text-emerald-500 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#contact"
                className="block text-center bg-emerald-500 text-white px-5 py-2 rounded-full hover:bg-emerald-600 transition"
                onClick={() => setIsOpen(false)}
              >
                Shop Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default Navigation;