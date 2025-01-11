import React from 'react';

export function BackgroundCircles() {
  return (
    <div className="absolute inset-0 bg-[#FFF5EE]">
      {Array.from({ length: 9 }).map((_, i) => {
        const duration = 3 + Math.random() * 2;
        const animationName = `float-${i}`;

        return (
          <div
            key={i}
            className="absolute rounded-full bg-[#FFE4B5] opacity-40 blur-lg"
            style={{
              width: `${100 + Math.random() * 200}px`,
              height: `${100 + Math.random() * 200}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              transform: 'translate(-50%, -50%)',
              animation: `${animationName} ${duration}s ease-in-out infinite`,
              '--delay': `${i * 0.5}s`
            } as React.CSSProperties}
          />
        );
      })}

      <style>
        {Array.from({ length: 9 }).map((_, i) => `
          @keyframes float-${i} {
            0%, 100% { transform: translate(-50%, -50%) translateY(0); }
            50% { transform: translate(-50%, -50%) translateY(-20px); }
          }
        `).join('\n')}
      </style>
    </div>
  );
}