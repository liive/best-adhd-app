import React from 'react';
import { Link } from 'react-router-dom';

export function Navigation() {
  const links = [
    { to: '/', label: 'Home' },
    { to: '/adhd-symptoms-and-apps', label: 'Symptoms & Apps' },
    { to: '/medical-analysis', label: 'Medical Analysis' },
    { to: '/expert-insights', label: 'Expert Insights' },
    { to: '/testimonials', label: 'User Stories' },
    { to: '/research', label: 'Research' },
    { to: '/comparison', label: 'App Comparison' },
    { to: '/adhd-test', label: 'ADHD Test' },
    { to: '/blog/adhd-women-symptoms', label: 'ADHD in Women' },
    { to: '/blog/add-adhd-women', label: 'ADD & ADHD' },
    { to: '/blog/inattentive-adhd-women', label: 'Inattentive ADHD' },
    { to: '/blog/adhd-women-life-stages', label: 'ADHD Life Stages' },
    { to: '/blog/add-women', label: 'ADD in Women' },
    { to: '/blog/high-functioning-adhd', label: 'High-Functioning ADHD' }
  ];

  return (
    <nav className="mb-8">
      <ul className="flex flex-wrap justify-center gap-6 text-sm">
        {links.map((link) => (
          <li key={link.to}>
            <Link 
              to={link.to} 
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}