import React from 'react';

export function HeaderTitle() {
  return (
    <>
      <div className="flex items-center justify-center gap-2">
        <a href="#" className="text-indigo-600 hover:text-indigo-700 font-semibold">
          Best ADHD Apps
        </a>
        <span className="text-gray-500">Essential Guide</span>
      </div>
      
      <h1 className="mt-8 sm:mt-16 text-4xl sm:text-5xl lg:text-[64px] font-bold text-gray-900 leading-tight tracking-tight mx-auto">
        Top 10 ADHD Apps for Better Focus & Organization
      </h1>
      
      <div className="mt-6 sm:mt-8 text-gray-600">
        <span className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm sm:text-base">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          Continuously updated with latest features
        </span>
      </div>
    </>
  );
}