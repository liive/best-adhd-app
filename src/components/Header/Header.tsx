import React from 'react';

export function Header() {
  return (
    <div className="bg-white py-16">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">
            Best apps
          </a>
          <span className="text-gray-500">Comprehensive Guide</span>
        </div>
        
        <h1 className="mt-16 text-[64px] font-bold text-gray-900 leading-tight tracking-tight mx-auto">
          The best productivity apps in 2025
        </h1>
        
        <div className="mt-8 text-gray-600">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Regularly updated with latest features and pricing
          </span>
        </div>

        <div className="mt-12 relative aspect-[2/1] max-w-4xl mx-auto overflow-hidden rounded-xl">
          <img 
            src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f" 
            alt="Productivity workspace with laptop and apps"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
        </div>
      </header>
    </div>
  );
}