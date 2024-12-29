import { Download } from 'lucide-react';
import { FeatureList } from './FeatureList';
import type { App } from '../types/app';

interface AppCardProps {
  app: App;
  rank: number;
}

export function AppCard({ app, rank }: AppCardProps) {
  const { name, description, rating, price, pros, cons, imageUrl, appStoreUrl } = app;

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all hover:shadow-xl hover:-translate-y-1">
      {/* Rest of the component remains the same */}
    </div>
  );
}