import React from 'react';
import { Lightbulb, MessageCircle, Calendar, Target, Sparkles } from 'lucide-react';

export function ThoughtElements() {
  const elements = [
    { Icon: Lightbulb, color: '#FFB347', delay: 0 },
    { Icon: MessageCircle, color: '#FFA07A', delay: 0.2 },
    { Icon: Calendar, color: '#FFD700', delay: 0.4 },
    { Icon: Target, color: '#FF8C69', delay: 0.6 },
    { Icon: Sparkles, color: '#FFA500', delay: 0.8 },
  ];

  return (
    <div className="absolute inset-0">
      <svg className="w-full h-full" viewBox="0 0 200 200">
        <path
          className="animate-draw"
          d="M100,50 C120,40 140,60 130,80 C150,70 160,90 140,100"
          stroke="#FFB347"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
      </svg>
      
      {elements.map(({ Icon, color, delay }, index) => (
        <div
          key={index}
          className="absolute transform"
          style={{
            left: `${20 + (index * 15)}%`,
            top: `${30 + (Math.sin(index) * 20)}%`,
            animation: 'float 3s ease-in-out infinite',
            animationDelay: `${delay}s`
          }}
        >
          <Icon
            size={24}
            style={{ color }}
            className="transform -rotate-12"
          />
        </div>
      ))}
    </div>
  );
}