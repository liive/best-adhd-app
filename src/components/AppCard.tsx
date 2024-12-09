import React from 'react';
import { Download, Star } from 'lucide-react';
import { Rating } from './Rating';
import { FeatureList } from './FeatureList';
import { RankBadge } from './RankBadge';
import type { App } from '../types/app';

interface AppCardProps {
  app: App;
  rank: number;
}

export function AppCard({ app, rank }: AppCardProps) {
  const { name, description, rating, price, features, pros, cons, imageUrl, appStoreUrl } = app;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1">
      <div className="flex">
        <div className="w-1/3 relative">
          <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center gap-2 text-white">
              <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold">{rating}</span>
            </div>
          </div>
        </div>
        
        <div className="w-2/3 p-6 relative">
          <RankBadge rank={rank} />
          
          <div className="mb-4">
            <div className="flex justify-between items-start">
              <h3 className="text-xl font-bold text-gray-900">{name}</h3>
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                {price}
              </span>
            </div>
            <p className="mt-2 text-gray-600">{description}</p>
          </div>

          <div className="grid grid-cols-2 gap-6">
            <div>
              <FeatureList title="Key Features" items={features} type="features" />
              <FeatureList title="Pros" items={pros} type="pros" />
            </div>
            <div>
              <FeatureList title="Cons" items={cons} type="cons" />
              <a
                href={appStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full"
              >
                <Download className="w-4 h-4" />
                <span>Get App</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}