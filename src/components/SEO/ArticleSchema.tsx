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
      "best apps for adhd organization",
      "best apps for adhd reddit",
      "best apps for adhd students",
      "best apps for adhd college students",
      "best apps for adhd management",
      "best apps for adhd kids",
      "best apps for adhd adults",
      "best apps for adhd adults free",
      "best apps for adhd adults uk",
      "best apps for adhd adults reddit",
      "best apps for adhd adults 2023",
      "best apps for adhd adults 2024",
      "best game apps for adhd adults",
      "best productivity apps for adhd adults",
      "best game apps for adhd adults reddit",
      "best android apps for adhd adults",
      "apps for adhd adults",
      "good adhd apps",
      "best apps for adults with adhd",
      "good apps for adults with adhd",
      "apps to help adults with adhd",
      "best planner app for adhd free",
      "best planner",
      "adhd apps",
      "adhd app",
      "adhd app reddit",
      "adhd reddit",
      "adhd youtube",
      "adhd for women",
      "adhd in women",
      "women and adhd",
      "women adhd symptoms",
      "signs and symptoms of adhd in women",
      "adhd apps for adults",
      "planner for adhd",
      "best planner app for adhd free reddit",
      "best planner app for adhd free iphone",
      "best calendar app for adhd free",
      "best planner app for adhd free for adults",
      "best free daily planner app for adhd",
      "planner app for adhd",
      "planning apps for adhd",
      "is there an app for adhd"
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