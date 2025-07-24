import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative bg-gray-600 min-h-screen flex items-center justify-center overflow-hidden manrope-600">
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

        <p className="sg-translate font-light pt-2 pb-3  text-lg  xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug"> Driven by performance
        </p>

        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-light leading-tight mb-6">
          <span className="block font-semibold">Soft Trims and <span className='text-[#00BFFF]'>NVH Solutions</span></span>
          <span className="block text-3xl md:text-4xl lg:text-5xl mt-2 opacity-90">
            for seamless rides
          </span>     </h1>

      </div>





      {/* Decorative gradient at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent opacity-30"></div>
    </section>
  );
};



/* 
<div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <span className="sg-translate font-light pt-2 pb-3  text-lg  xl:text-xl 2xl:text-[1.375rem] text-white block leading-snug">
          Driven by performance
        </span>
        <h2 className="sg-translate text-white font-light leading-tight pb-2 ">
          <span className="font-semibold">
            Soft trims and <span className="text-blue">NVH solutions</span>
          </span>
          <br className="hidden md:block" /> for seamless rides
        </h2>
      </div> */
export default HeroSection;
