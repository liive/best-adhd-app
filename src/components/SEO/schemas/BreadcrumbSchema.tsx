export function generateBreadcrumbSchema() {
  return {
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bestadhdapp.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Best ADHD Apps 2024",
        "item": "https://bestadhdapp.com/best-adhd-apps-2024"
      }
    ]
  };
}