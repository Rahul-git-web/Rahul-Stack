import React from "react";
import { ArrowUpRight } from "lucide-react";
import RahulImg from "../assets/Rahul.jpeg";

const Middle = () => {
  return (
    <section id="home">
    <div className="relative flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Glow Effects */}
      <div
        className="absolute top-[-150px] left-[-150px] w-[400px] h-[400px] bg-purple-600 rounded-full blur-[150px] opacity-30 animate-pulse
"
      ></div>
      <div className="absolute bottom-[-150px] right-[-150px] w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[150px] opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between w-full max-w-6xl gap-12">
        {/* Left Section */}
        <div className="order-2 md:order-1 text-center md:text-left">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 inline-block text-amber-400 transition-all duration-500 hover:scale-105">Hi, I'm Rahul</h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-6 transition-all duration-300 hover:scale-90">
            Full Stack Developer
          </p>

          <p className="text-gray-400 max-w-lg mb-6">
            As technology evolves with AI and automation, I constantly upgrade
            my skills to stay relevant and build future-ready applications.
          </p>

          <button className="group px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg transition-all duration-300 hover:scale-100 flex items-center justify-center md:justify-start gap-2 shadow-lg hover:shadow-purple-500/50 mx-auto md:mx-0">
            Explore More
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </button>
        </div>

        {/* Right Section */}
        <div className="order-1 md:order-2 mt-10 md:mt-0">
          <div className="relative">
            {/* Glow layer */}
            <div className="absolute inset-0 bg-purple-500 rounded-full blur-2xl opacity-60 animate-pulse"></div>

            {/* Image */}
            <img
              className="relative w-64 h-64 object-cover rounded-full border-4 border-purple-500/30"
              src={RahulImg}
              alt="Rahul"
            />
          </div>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Middle;
