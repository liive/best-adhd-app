import React from 'react';
import { ThoughtElements } from './ThoughtElements';
import { FaceLine } from './FaceLine';
import { BackgroundCircles } from './BackgroundCircles';

export function MinimalistThoughtIllustration() {
  return (
    <div className="relative w-full max-w-2xl mx-auto aspect-[16/9] overflow-hidden">
      <BackgroundCircles />
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-full max-w-md">
          <FaceLine />
          <ThoughtElements />
        </div>
      </div>
    </div>
  );
}