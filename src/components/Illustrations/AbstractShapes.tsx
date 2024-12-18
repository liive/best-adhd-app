import React from 'react';

export function AbstractShapes() {
  return (
    <div className="relative w-full h-full">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50"></div>
      
      {/* Animated shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating circles */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply animate-float opacity-60"></div>
        <div className="absolute top-1/3 right-1/3 w-40 h-40 bg-purple-200 rounded-full mix-blend-multiply animate-float-delay opacity-60"></div>
        <div className="absolute bottom-1/4 right-1/4 w-36 h-36 bg-pink-200 rounded-full mix-blend-multiply animate-float opacity-60"></div>
        
        {/* Abstract lines */}
        <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
        <div className="absolute top-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-200 to-transparent"></div>
        
        {/* Dots pattern */}
        <div className="absolute inset-0 grid grid-cols-12 gap-4 opacity-20">
          {Array.from({ length: 48 }).map((_, i) => (
            <div key={i} className="w-1 h-1 bg-gray-400 rounded-full"></div>
          ))}
        </div>
      </div>
    </div>
  );
}