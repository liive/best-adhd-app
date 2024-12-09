import React from 'react';

interface FeatureItemProps {
  item: string;
  type: 'pros' | 'cons' | 'features';
}

export function FeatureItem({ item, type }: FeatureItemProps) {
  const getColorClass = () => {
    switch (type) {
      case 'pros':
        return 'bg-green-500';
      case 'cons':
        return 'bg-red-500';
      default:
        return 'bg-blue-500';
    }
  };

  return (
    <li className="text-sm text-gray-600 flex items-center gap-2">
      <span className={`w-2 h-2 ${getColorClass()} rounded-full flex-shrink-0`}></span>
      <span className="leading-tight">{item}</span>
    </li>
  );
}