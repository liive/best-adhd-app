import { useState, useEffect } from 'react';
import type { Review } from '../types/review';

export function useReviews(appName: string | undefined) {
  const [reviews, setReviews] = useState<Review[]>([]);

  useEffect(() => {
    if (!appName) return;

    // In a real app, this would fetch reviews from an API
    // For now, we'll return mock data
    setReviews([
      {
        id: '1',
        author: {
          name: 'Sarah Johnson',
          role: 'Software Developer',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330'
        },
        appName: appName,
        rating: 5,
        reviewBody: 'This app has transformed how I manage my ADHD symptoms.',
        datePublished: '2024-03-19',
        verified: true
      },
      // Add more mock reviews as needed
    ]);
  }, [appName]);

  return { reviews };
}