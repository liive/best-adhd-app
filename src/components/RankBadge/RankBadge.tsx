import React from 'react';

interface RankBadgeProps {
  rank: number;
}

export function RankBadge({ rank }: RankBadgeProps) {
  return (
    <div className="absolute -left-3 sm:-left-4 top-4 sm:top-1/2 sm:-translate-y-1/2 flex items-center justify-center">
      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform">
        <span className="text-lg font-bold">{rank}</span>
      </div>
      {/* Mobile indicator line */}
      <div className="absolute -right-3 top-1/2 -translate-y-1/2 w-3 h-0.5 bg-blue-500 sm:hidden"></div>
    </div>
  );
}