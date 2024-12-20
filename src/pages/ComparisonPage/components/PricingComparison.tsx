import React from 'react';
import type { App } from '../../../types/app';

interface PricingComparisonProps {
  apps: App[];
}

export function PricingComparison({ apps }: PricingComparisonProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {apps.map((app, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-gray-900">{app.name}</h3>
              <span className="text-blue-600 font-medium">{app.price}</span>
            </div>
            <ul className="space-y-2">
              {app.pros.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}