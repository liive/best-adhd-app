import { App } from '../types/app';

export function generateSchemaId(app: App): string {
  return `app-${app.name.toLowerCase().replace(/\s+/g, '-')}`;
}

export function updateSchemaVersion(): string {
  return new Date().toISOString();
}

export function sortAppsByRating(apps: App[]): App[] {
  return [...apps].sort((a, b) => b.rating - a.rating);
}