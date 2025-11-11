import React from "react";
import heroImg from "../../assets/images/hero-banner.jpg"; 

const Hero = () => {
  return (
    <section
      className="relative bg-gray-900 text-white"
      style={{
        backgroundImage: "url(${heroImg})",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
    
      <div className="absolute inset-0 bg-black/50"></div>


      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center flex flex-col items-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          Radiant Skin Starts with <span className="text-emerald-400">PureGlow</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-100 max-w-2xl mb-8">
          Discover nature-powered skincare designed to restore your glow, 
          hydrate deeply, and nurture your natural beauty — every day.
        </p>

        <a
          href="#products"
          className="inline-block bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-3 px-8 rounded-full transition duration-300"
        >
          Shop Now
        </a>

    
        <div className="grid grid-cols-3 gap-4 mt-16 bg-emerald-500/90 text-white rounded-xl py-6 px-8 w-full md:w-auto">
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">7+</span>
            <span className="text-sm">Years of Glow</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">10k+</span>
            <span className="text-sm">Happy Clients</span>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-3xl font-bold">260+</span>
            <span className="text-sm">Natural Formulas</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;