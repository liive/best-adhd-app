import { useEffect, useState } from 'react';
import { App } from '../types/app';
import { sortAppsByRating, updateSchemaVersion } from '../utils/schemaUtils';

export function useSchemaUpdates(apps: App[]) {
  const [sortedApps, setSortedApps] = useState<App[]>([]);
  const [schemaVersion, setSchemaVersion] = useState<string>('');

  useEffect(() => {
    // Sort apps and update schema version when apps change
    const sorted = sortAppsByRating(apps);
    setSortedApps(sorted);
    setSchemaVersion(updateSchemaVersion());
  }, [apps]);

  return { sortedApps, schemaVersion };
}