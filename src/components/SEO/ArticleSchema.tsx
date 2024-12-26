import React from 'react';

interface ArticleSchemaProps {
  title: string;
  description: string;
  datePublished: string;
  dateModified: string;
  authors: Array<{
    name: string;
    title: string;
    bio: string;
  }>;
  citations: Array<{
    title: string;
    authors: string[];
    journal: string;
    year: number;
    doi?: string;
  }>;
}

export function ArticleSchema({ 
  title, 
  description, 
  datePublished,
  dateModified,
  authors,
  citations 
}: ArticleSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": "https://images.unsplash.com/photo-1512486130939-2c4f79935e4f",
    "datePublished": datePublished,
    "dateModified": dateModified,
    "keywords": [
      "best apps for adhd",
      "adhd app",
      "adhd apps",
      "apps for adhd",
      "best apps for adhd adults",
      "best apps adhd",
      "app for adhd",
      "best adhd apps",
      "app adhd",
      "best app adhd",
      "best adhd app",
      "best adhd apps for adults",
      "best app for adhd",
      "best adhd apps 2024"
    ],
    "author": authors.map(author => ({
      "@type": "Person",
      "name": author.name,
      "jobTitle": author.title,
      "description": author.bio
    })),
    "publisher": {
      "@type": "Organization",
      "name": "BestADHDApp",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bestadhdapp.com/logo.png"
      }
    },
    "citation": citations.map(citation => ({
      "@type": "ScholarlyArticle",
      "headline": citation.title,
      "author": citation.authors.map(author => ({
        "@type": "Person",
        "name": author
      })),
      "publisher": citation.journal,
      "datePublished": citation.year.toString(),
      "sameAs": citation.doi ? `https://doi.org/${citation.doi}` : undefined
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}