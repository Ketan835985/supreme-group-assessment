"use client";

import { useState, useEffect, useRef } from 'react';
import Header from "@/_components/Header";
import Footer from '@/_components/Footer';
import ContactSection from '@/_components/ContactUs';
import HeroSection from '@/_components/HeroSection';
import NonwovenPresentation from '@/_components/VehicleSource';

export default function Home() {
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const [showHeader, setShowHeader] = useState<boolean>(true);
  const headerRef = useRef<HTMLElement>(null);
  const scrollTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const headerHeight = headerRef.current?.offsetHeight || 0;
    
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';
      
      // Clear any existing timeout
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }

      // Only trigger if scrolled more than 5px to prevent jitter
      if (Math.abs(currentScrollY - lastScrollY) > 5) {
        if (scrollDirection === 'down' && currentScrollY > headerHeight) {
          setShowHeader(false);
        } else if (scrollDirection === 'up' || currentScrollY <= headerHeight) {
          setShowHeader(true);
        }
      }

      // Small delay before updating lastScrollY to smooth the detection
      scrollTimeout.current = setTimeout(() => {
        setLastScrollY(currentScrollY);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
    };
  }, [lastScrollY]);

  return (
    <div className="relative">
      {/* Enhanced header with smoother transitions */}
      <header 
        ref={headerRef}
        className={`
          fixed top-0 w-full z-50 
          bg-white/95 backdrop-blur-sm shadow-sm
          transition-all duration-500 ease-[cubic-bezier(0.4,0,0.2,1)]
          border-b border-gray-200
          ${showHeader ? 
            'translate-y-0 opacity-100' : 
            '-translate-y-full opacity-0 shadow-none'
          }
        `}
      >
        <Header />
      </header>
      <HeroSection/>
      <NonwovenPresentation/>
      
      {/* <main className="pt-16">
        <PerformanceBanner />
        <div className="h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-8 flex items-center justify-center">
          <p className="text-lg text-gray-600">Scroll down to see header hide smoothly</p>
        </div>
        <div className="h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-8 flex items-center justify-center">
          <p className="text-lg text-gray-600">Scroll up to see header reappear</p>
        </div>
      </main> */}
      <ContactSection/>
      <Footer/>
    </div>
  );
}