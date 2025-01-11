import { AppCard } from '../AppCard/AppCard';
import type { App } from '../../types/app';

interface AppListProps {
  apps: App[];
  isLink?: boolean; // Make isLink optional with a default value
}

export function AppList({ apps, isLink = false }: AppListProps) {
  // Sort by rating in ascending order (lowest to highest)
  const sortedApps = [...apps].sort((a, b) => a.rating - b.rating);
  
  return (
    <div className="relative space-y-6">
      {sortedApps.map((app, index) => (
        <div key={index} className="relative pl-6">
          <AppCard 
            app={app} 
            rank={sortedApps.length - index}
            isLink={isLink}
          />
        </div>
      ))}
    </div>
  );
}