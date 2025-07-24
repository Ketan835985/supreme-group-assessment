"use client";

import Header from "@/_components/Header";
import Footer from '@/_components/Footer';
import ContactSection from '@/_components/ContactUs';
import HeroSection from '@/_components/HeroSection';
import NonwovenPresentation from '@/_components/VehicleSource';

export default function Home() {


 

  return (
    <div className="relative">
      {/* Enhanced header with smoother transitions */}
      <header 
        className={`
          fixed top-0 w-full z-50 
          bg-white/95 backdrop-blur-sm shadow-sm
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          border-b border-gray-200
          ${
            '-translate-y-full opacity-0 shadow-none'
          }
        `}
      >
        <Header />
      </header>
      <HeroSection/>
      <NonwovenPresentation/>
      <ContactSection/>
      <Footer/>
    </div>
  );
}