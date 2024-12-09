import React from 'react';
import { FeatureItem } from './FeatureItem';

interface FeatureListProps {
  title: string;
  items: string[];
  type: 'pros' | 'cons' | 'features';
}

export function FeatureList({ title, items, type }: FeatureListProps) {
  return (
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-gray-700 mb-2">{title}</h4>
      <ul className="space-y-1.5">
        {items.map((item, index) => (
          <FeatureItem key={index} item={item} type={type} />
        ))}
      </ul>
    </div>
  );
}