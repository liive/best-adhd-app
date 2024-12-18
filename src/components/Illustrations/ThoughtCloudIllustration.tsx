import React from 'react';
import { Brain, Lightbulb, Clock, Calendar, Target, Sparkles } from 'lucide-react';

export function ThoughtCloudIllustration() {
  return (
    <div className="relative w-full aspect-[16/9] bg-gradient-to-br from-indigo-50 to-purple-50 rounded-2xl overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 48 }).map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-indigo-200 rounded-full transform"
              style={{
                animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.1}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Person silhouette */}
      <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2">
        <div className="relative w-32 h-48">
          {/* Head */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gray-800 rounded-full" />
          {/* Body */}
          <div className="absolute top-14 left-1/2 transform -translate-x-1/2 w-20 h-32 bg-gray-800 rounded-t-full" />
        </div>
      </div>

      {/* Thought clouds */}
      <div className="absolute inset-0">
        {/* Main thought bubbles */}
        <div className="absolute top-4 left-1/4 transform -translate-x-1/2">
          <ThoughtBubble icon={Brain} color="text-indigo-500" delay={0} />
        </div>
        <div className="absolute top-8 right-1/4 transform translate-x-1/2">
          <ThoughtBubble icon={Lightbulb} color="text-yellow-500" delay={1} />
        </div>
        <div className="absolute top-16 left-1/3">
          <ThoughtBubble icon={Clock} color="text-purple-500" delay={2} />
        </div>
        <div className="absolute top-12 right-1/3">
          <ThoughtBubble icon={Calendar} color="text-blue-500" delay={1.5} />
        </div>
        <div className="absolute top-4 left-2/3">
          <ThoughtBubble icon={Target} color="text-red-500" delay={0.5} />
        </div>
        <div className="absolute top-20 right-1/2">
          <ThoughtBubble icon={Sparkles} color="text-green-500" delay={2.5} />
        </div>
      </div>

      {/* Connecting lines */}
      <div className="absolute inset-0">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#818CF8" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#C084FC" stopOpacity="0.2" />
            </linearGradient>
          </defs>
          <path
            d="M200,200 C150,150 300,100 250,50"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            className="animate-draw"
          />
        </svg>
      </div>
    </div>
  );
}

interface ThoughtBubbleProps {
  icon: React.ElementType;
  color: string;
  delay: number;
}

function ThoughtBubble({ icon: Icon, color, delay }: ThoughtBubbleProps) {
  return (
    <div
      className="bg-white rounded-full p-3 shadow-lg transform"
      style={{
        animation: `float 3s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      <Icon className={`w-6 h-6 ${color}`} />
    </div>
  );
}