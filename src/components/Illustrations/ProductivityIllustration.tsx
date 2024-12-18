import React from 'react';

export function ProductivityIllustration() {
  return (
    <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 grid grid-cols-6 gap-4">
          {Array.from({ length: 24 }).map((_, i) => (
            <div
              key={i}
              className="w-full h-full border border-gray-200 rounded-lg transform rotate-45"
            ></div>
          ))}
        </div>
      </div>

      {/* Main shapes */}
      <div className="absolute inset-0 flex items-center justify-center">
        {/* Central focus circle */}
        <div className="relative w-48 h-48">
          <div className="absolute inset-0 bg-indigo-100 rounded-full animate-pulse"></div>
          <div className="absolute inset-4 bg-white rounded-full"></div>
          <div className="absolute inset-8 bg-indigo-50 rounded-full animate-spin-slow"></div>
        </div>

        {/* Orbiting elements */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-8 h-8 bg-purple-200 rounded-full transform"
            style={{
              left: `${50 + 35 * Math.cos((i * Math.PI * 2) / 6)}%`,
              top: `${50 + 35 * Math.sin((i * Math.PI * 2) / 6)}%`,
            }}
          ></div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-4 -bottom-4 w-24 h-24 bg-indigo-100 rounded-full opacity-20 blur-xl"></div>
      <div className="absolute -right-4 -top-4 w-32 h-32 bg-purple-100 rounded-full opacity-20 blur-xl"></div>
    </div>
  );
}