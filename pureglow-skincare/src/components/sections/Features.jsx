import React from "react";
import cleanserImg from "../../assets/images/cleanser.jpg";
import serumImg from "../../assets/images/serum.jpg";
import moisturizerImg from "../../assets/images/moisturizer.jpg";
import oilImg from "../../assets/images/oil.jpg";

const features = [
  {
    id: 1,
    title: "Gentle Cleanser",
    image: cleanserImg,
  },
  {
    id: 2,
    title: "Hydrating Serum",
    image: serumImg,
  },
  {
    id: 3,
    title: "Nourishing Moisturizer",
    image: moisturizerImg,
  },
  {
    id: 4,
    title: "Radiance Face Oil",
    image: oilImg,
  },
];

const Features = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-12 text-gray-800">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          New in <span className="text-emerald-500">PureGlow Store</span>
        </h2>
        <p className="text-gray-600 mb-12">
          Explore our latest skincare essentials — crafted with nature’s finest ingredients for a healthy, radiant complexion.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {features.map((item) => (
            <div
              key={item.id}
              className="group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {item.title}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="#products"
            className="inline-block text-emerald-600 hover:text-emerald-500 font-semibold"
          >
            Check all products →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;