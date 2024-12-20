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
    { to: '/comparison', label: 'App Comparison' }
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