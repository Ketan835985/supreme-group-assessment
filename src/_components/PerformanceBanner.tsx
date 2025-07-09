import React from 'react';

export default function  PerformanceBanner () {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
          Performance in motion
        </h1>
        
        {/* Divider */}
        <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        
        {/* Subheading */}
        <h2 className="text-2xl md:text-3xl font-medium text-gray-700 mb-2">
          Soft Trims and NVH Solutions
        </h2>
        <p className="text-xl text-gray-600">
          for seamless rides
        </p>
      </div>
    </div>
  );
};
