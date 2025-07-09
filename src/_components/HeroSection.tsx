import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-600 min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/media/automotive.224e7418884105595114.mp4" // Replace with actual video path
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Background overlay for better text readability */}
      <div className="absolute inset-0 bg-[#00000099] bg-opacity-60"></div>

      {/* Content container */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        {/* Subtitle */}
        <p className="text-lg md:text-xl font-light mb-8 tracking-wide opacity-90">
          Performance in motion
        </p>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
          <span className="block">Soft Trims and NVH Solutions</span>
          <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 opacity-90">
            for seamless rides
          </span>
        </h1>

        {/* Optional CTA button */}
        {/*
        <div className="mt-12">
          <button className="bg-white text-gray-800 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors duration-200">
            Learn More
          </button>
        </div>
        */}
      </div>

      {/* Decorative gradient at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-30"></div>
    </section>
  );
};

export default HeroSection;
