import React from 'react';

export function FaceLine() {
  return (
    <svg
      className="w-full h-full"
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="animate-draw"
        d="M80,140 Q100,150 120,140"
        stroke="#000"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
      <path
        className="animate-draw"
        d="M60,80 Q100,120 140,80"
        stroke="#000"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        style={{ animationDelay: '0.5s' }}
      />
    </svg>
  );
}