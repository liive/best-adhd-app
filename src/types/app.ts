export interface App {
  name: string;
  description: string;
  rating: number;
  price: string;
  features?: string[];  // Make features optional
  pros: string[];
  cons: string[];
  imageUrl: string;
  appStoreUrl: string;
}