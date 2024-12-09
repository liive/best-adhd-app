import React from 'react';

interface RankBadgeProps {
  rank: number;
}

export function RankBadge({ rank }: RankBadgeProps) {
  return (
    <div className="absolute -left-4 top-1/2 -translate-y-1/2 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg">
      <span className="text-lg font-bold">{rank}</span>
    </div>
  );
}