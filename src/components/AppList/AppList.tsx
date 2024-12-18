import React from 'react';
import { AppCard } from '../AppCard/AppCard';
import type { App } from '../../types/app';

interface AppListProps {
  apps: App[];
}

export function AppList({ apps }: AppListProps) {
  // Sort by rating in ascending order (lowest to highest)
  const sortedApps = [...apps].sort((a, b) => a.rating - b.rating);
  
  return (
    <div className="relative space-y-6">
      {sortedApps.map((app, index) => (
        <div key={index} className="relative pl-6">
          <AppCard 
            app={app} 
            rank={sortedApps.length - index} // This will make the highest rated app #1
          />
        </div>
      ))}
    </div>
  );
}