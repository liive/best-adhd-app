import React from 'react';
import { Download } from 'lucide-react';
import { FeatureList } from '../FeatureList/FeatureList';
import { RankBadge } from '../RankBadge/RankBadge';
import type { App } from '../../types/app';

interface AppCardProps {
  app: App;
  rank: number;
}

export function AppCard({ app, rank }: AppCardProps) {
  const { name, description, price, pros, cons, imageUrl, appStoreUrl } = app;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="flex flex-col sm:flex-row">
        {/* App Icon Section */}
        <div className="w-full sm:w-1/4 p-6 flex items-center justify-center">
          <div className="relative w-24 h-24 sm:w-32 sm:h-32">
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-full h-full object-cover rounded-[22%] shadow-lg"
            />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="w-full sm:w-3/4 p-4 sm:p-6 relative">
          <RankBadge rank={rank} />
          
          <div className="mb-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-500 mt-1">Productivity</p>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full whitespace-nowrap">
                  {price}
                </span>
              </div>
            </div>
            <p className="mt-3 text-gray-600 text-sm sm:text-base">{description}</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div>
              <FeatureList title="Pros" items={pros} type="pros" />
            </div>
            <div>
              <FeatureList title="Cons" items={cons} type="cons" />
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-[#0066CC] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors w-full text-sm sm:text-base font-medium"
              >
                <Download className="w-4 h-4" />
                <span>View in App Store</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}