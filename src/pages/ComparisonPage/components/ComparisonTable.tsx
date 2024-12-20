import React from 'react';
import type { App } from '../../../types/app';
import { Star } from 'lucide-react';

interface ComparisonTableProps {
  apps: App[];
}

export function ComparisonTable({ apps }: ComparisonTableProps) {
  return (
    <section>
      <h2 className="text-2xl font-bold mb-6">Side-by-Side Comparison</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">App Name</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Rating</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Price</th>
              <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Best For</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {apps.map((app, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <img 
                      src={app.imageUrl} 
                      alt={app.name}
                      className="w-10 h-10 rounded-lg object-cover"
                    />
                    <span className="font-medium text-gray-900">{app.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span>{app.rating}</span>
                  </div>
                </td>
                <td className="px-6 py-4 text-gray-500">{app.price}</td>
                <td className="px-6 py-4 text-gray-500">{app.pros[0]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}