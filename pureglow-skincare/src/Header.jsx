import React from "react";
import Navigation from "./Navigation";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm z-50">
      <div className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo / Name */}
          <a
            href="#"
            className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
          >
            Pure<span className="text-emerald-500">Glow</span>
          </a>

          {/* Navigation Menu */}
          <Navigation />

          {/* CTA Button */}
          <a
            href="#contact"
            className="hidden md:inline-block bg-emerald-500 text-white px-5 py-2 rounded-full hover:bg-emerald-600 transition"
          >
            Shop Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;