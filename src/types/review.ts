export interface Review {
  id: string;
  author: {
    name: string;
    role?: string;
    image?: string;
    url?: string;  // Added for author's social/web presence
  };
  appName: string;
  rating: number;
  reviewBody: string;
  datePublished: string;
  dateModified?: string;  // Added for review updates
  verified: boolean;
  helpfulVotes?: number;  // Added for social proof
  platform?: string;      // Added for device/platform context
  version?: string;       // Added for app version context
}