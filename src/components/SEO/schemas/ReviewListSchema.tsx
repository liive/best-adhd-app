import { Review } from '../../../types/review';

export function generateReviewListSchema(reviews: Review[]) {
  return {
    "@type": "ItemList",
    "itemListElement": reviews.map((review, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": review.author.name,
          "jobTitle": review.author.role,
          "image": review.author.image
        },
        "reviewBody": review.reviewBody,
        "datePublished": review.datePublished,
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": review.rating,
          "bestRating": "5",
          "worstRating": "1"
        },
        "itemReviewed": {
          "@type": "SoftwareApplication",
          "name": review.appName
        }
      }
    }))
  };
}