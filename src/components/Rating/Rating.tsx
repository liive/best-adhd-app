import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number;
}

export function Rating({ value }: RatingProps) {
  return (
    <div className="flex items-center gap-1 bg-white/90 px-3 py-1 rounded-full">
      <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
      <span className="text-sm font-medium">{value}</span>
    </div>
  );
}