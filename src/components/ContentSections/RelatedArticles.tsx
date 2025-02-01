import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

interface RelatedArticle {
  title: string;
  path: string;
  description: string;
}

interface RelatedArticlesProps {
  currentPath: string;
}

export function RelatedArticles({ currentPath }: RelatedArticlesProps) {
  const allArticles: Record<string, RelatedArticle[]> = {
    '/blog/signs-of-adhd': [
      {
        title: 'ADHD Symptoms in Women',
        path: '/blog/adhd-women-symptoms',
        description: 'Understanding how ADHD presents uniquely in women'
      },
      {
        title: 'Female ADHD Symptoms',
        path: '/blog/adhd-female-symptoms',
        description: 'Detailed guide to ADHD symptoms in females'
      },
      {
        title: 'Signs of ADHD in Women',
        path: '/blog/adhd-women-signs',
        description: 'Recognizing ADHD signs specific to women'
      }
    ],
    '/blog/adhd-women-symptoms': [
      {
        title: 'Signs of ADHD',
        path: '/blog/signs-of-adhd',
        description: 'Common signs and indicators of ADHD'
      },
      {
        title: 'Female ADHD Symptoms',
        path: '/blog/adhd-female-symptoms',
        description: 'Understanding symptoms specific to women'
      },
      {
        title: 'How to Identify ADHD',
        path: '/blog/adhd-women-identification',
        description: 'Guide to identifying ADHD in women'
      }
    ],
    '/blog/adhd-female-symptoms': [
      {
        title: 'Signs of ADHD in Women',
        path: '/blog/adhd-women-signs',
        description: 'Key signs of ADHD in women'
      },
      {
        title: 'ADHD Identification Guide',
        path: '/blog/adhd-women-identification',
        description: 'How to identify ADHD as a woman'
      },
      {
        title: 'Signs and Symptoms',
        path: '/blog/adhd-women-signs-symptoms',
        description: 'Comprehensive guide to ADHD signs and symptoms'
      }
    ],
    '/blog/adhd-women-signs': [
      {
        title: 'ADHD Symptoms in Women',
        path: '/blog/adhd-women-symptoms',
        description: 'Understanding female ADHD symptoms'
      },
      {
        title: 'Identifying ADHD',
        path: '/blog/adhd-women-identification',
        description: 'How to know if you have ADHD'
      },
      {
        title: 'Signs and Symptoms Guide',
        path: '/blog/adhd-women-signs-symptoms',
        description: 'Complete guide to ADHD signs and symptoms'
      }
    ],
    '/blog/adhd-women-identification': [
      {
        title: 'ADHD Signs in Women',
        path: '/blog/adhd-women-signs',
        description: 'Understanding ADHD signs in women'
      },
      {
        title: 'Female ADHD Symptoms',
        path: '/blog/adhd-female-symptoms',
        description: 'Common symptoms in women with ADHD'
      },
      {
        title: 'Signs and Symptoms',
        path: '/blog/adhd-women-signs-symptoms',
        description: 'Comprehensive symptoms guide'
      }
    ],
    '/blog/adhd-women-signs-symptoms': [
      {
        title: 'ADHD in Women',
        path: '/blog/adhd-women-symptoms',
        description: 'Understanding ADHD in women'
      },
      {
        title: 'Identifying ADHD',
        path: '/blog/adhd-women-identification',
        description: 'How to identify ADHD as a woman'
      },
      {
        title: 'Female ADHD Symptoms',
        path: '/blog/adhd-female-symptoms',
        description: 'Symptoms specific to women'
      }
    ]
  };

  const relatedArticles = allArticles[currentPath] || [];

  if (relatedArticles.length === 0) return null;

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm mt-12">
      <div className="flex items-center gap-2 mb-6">
        <BookOpen className="w-5 h-5 text-blue-600" />
        <h2 className="text-xl font-bold">Related Articles</h2>
      </div>
      
      <div className="grid gap-4">
        {relatedArticles.map((article, index) => (
          <Link
            key={index}
            to={article.path}
            className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <h3 className="font-medium text-gray-900 mb-1">{article.title}</h3>
            <p className="text-sm text-gray-600">{article.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}