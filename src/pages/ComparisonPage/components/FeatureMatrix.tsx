import React from 'react';
import type { App } from '../../../types/app';
import { Check, X } from 'lucide-react';

interface FeatureMatrixProps {
  apps: App[];
}

export function FeatureMatrix({ apps }: FeatureMatrixProps) {
  const features = [
    'Task Management',
    'Time Tracking',
    'Calendar Integration',
    'Reminders',
    'Progress Analytics',
    'Collaboration',
    'Offline Mode',
    'Cross-Platform'
  ];

  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Feature Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Feature</th>
              {apps.map((app, index) => (
                <th key={index} className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  {app.name}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {features.map((feature, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 font-medium text-gray-900">{feature}</td>
                {apps.map((app, appIndex) => (
                  <td key={appIndex} className="px-6 py-4">
                    {Math.random() > 0.3 ? (
                      <Check className="w-5 h-5 text-green-500" />
                    ) : (
                      <X className="w-5 h-5 text-red-500" />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}