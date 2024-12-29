import { Review } from '../../../types/review';

export function generateReviewSchema(review: Review) {
  return {
    "@type": "Review",
    "author": {
      "@type": "Person",
      "name": review.author.name,
      "jobTitle": review.author.role,
      "image": review.author.image,
      "sameAs": review.author.url // Optional: social profile or personal website
    },
    "reviewBody": review.reviewBody,
    "datePublished": review.datePublished,
    "dateModified": review.dateModified || review.datePublished,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating.toFixed(1),
      "bestRating": "5",
      "worstRating": "1"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BestADHDApp",
      "url": "https://bestadhdapp.com"
    },
    "itemReviewed": {
      "@type": "SoftwareApplication",
      "name": review.appName,
      "applicationCategory": "Productivity",
      "applicationSubCategory": "ADHD Management"
    }
  };
}