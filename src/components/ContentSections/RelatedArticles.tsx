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
    '/blog/adhd-women-symptoms': [
      {
        title: 'ADD and ADHD in Women',
        path: '/blog/add-adhd-women',
        description: 'Understanding the differences between ADD and ADHD presentations in women'
      },
      {
        title: 'Inattentive ADHD in Women',
        path: '/blog/inattentive-adhd-women',
        description: 'Deep dive into the predominantly inattentive type of ADHD'
      },
      {
        title: 'ADHD Through Different Life Stages',
        path: '/blog/adhd-women-life-stages',
        description: 'How ADHD symptoms evolve throughout a woman\'s life'
      }
    ],
    '/blog/add-adhd-women': [
      {
        title: 'ADHD Symptoms in Women',
        path: '/blog/adhd-women-symptoms',
        description: 'Comprehensive guide to recognizing ADHD signs in women'
      },
      {
        title: 'High-Functioning ADHD',
        path: '/blog/high-functioning-adhd',
        description: 'Understanding high-functioning ADHD presentations'
      },
      {
        title: 'ADHD Through Life Stages',
        path: '/blog/adhd-women-life-stages',
        description: 'How ADHD manifests across different life phases'
      }
    ],
    '/blog/inattentive-adhd-women': [
      {
        title: 'ADHD Symptoms in Women',
        path: '/blog/adhd-women-symptoms',
        description: 'Complete guide to female ADHD symptoms'
      },
      {
        title: 'ADD in Women',
        path: '/blog/add-women',
        description: 'Understanding ADD presentation in women'
      },
      {
        title: 'High-Functioning ADHD',
        path: '/blog/high-functioning-adhd',
        description: 'Insights into high-functioning ADHD'
      }
    ],
    '/blog/adhd-women-life-stages': [
      {
        title: 'ADHD Symptoms in Women',
        path: '/blog/adhd-women-symptoms',
        description: 'Understanding core ADHD symptoms in women'
      },
      {
        title: 'High-Functioning ADHD',
        path: '/blog/high-functioning-adhd',
        description: 'Managing high-functioning ADHD across life stages'
      },
      {
        title: 'ADD & ADHD in Women',
        path: '/blog/add-adhd-women',
        description: 'Different ADHD presentations in women'
      }
    ],
    '/blog/add-women': [
      {
        title: 'Inattentive ADHD in Women',
        path: '/blog/inattentive-adhd-women',
        description: 'Deep dive into inattentive type ADHD'
      },
      {
        title: 'ADHD Through Life Stages',
        path: '/blog/adhd-women-life-stages',
        description: 'How ADD/ADHD evolves with age'
      },
      {
        title: 'High-Functioning ADHD',
        path: '/blog/high-functioning-adhd',
        description: 'Understanding high-functioning presentations'
      }
    ],
    '/blog/high-functioning-adhd': [
      {
        title: 'ADHD Symptoms in Women',
        path: '/blog/adhd-women-symptoms',
        description: 'Recognizing ADHD symptoms in women'
      },
      {
        title: 'Inattentive ADHD',
        path: '/blog/inattentive-adhd-women',
        description: 'Understanding inattentive ADHD presentation'
      },
      {
        title: 'ADHD Life Stages',
        path: '/blog/adhd-women-life-stages',
        description: 'Managing ADHD through different life phases'
      }
    ]
  };

  const relatedArticles = allArticles[currentPath] || [];

  if (relatedArticles.length === 0) return null;

  return (
    <section className="bg-white p-6 rounded-lg shadow-sm">
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