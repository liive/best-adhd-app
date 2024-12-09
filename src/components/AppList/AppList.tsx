import React from 'react';
import { AppCard } from '../AppCard/AppCard';
import type { App } from '../../types/app';

interface AppListProps {
  apps: App[];
}

export function AppList({ apps }: AppListProps) {
  const sortedApps = [...apps].sort((a, b) => b.rating - a.rating);

  return (
    <div className="relative space-y-6">
      {sortedApps.slice(0, 10).map((app, index) => (
        <div key={index} className="relative pl-6">
          <AppCard app={app} rank={10 - index} />
        </div>
      ))}
    </div>
  );
}