import React from 'react';

interface FeatureListProps {
  title: string;
  items: string[];
  type: 'pros' | 'cons' | 'features';
}

export function FeatureList({ title, items, type }: FeatureListProps) {
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
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">{title}</h4>
      <ul className="space-y-1.5">
        {items.map((item, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center gap-2">
            <span className={`w-2 h-2 ${getColorClass()} rounded-full flex-shrink-0`}></span>
            <span className="leading-tight">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}