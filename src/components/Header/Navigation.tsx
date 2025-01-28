import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

export function Navigation() {
  const [isWomenMenuOpen, setIsWomenMenuOpen] = useState(false);

  const links = [
    { to: '/', label: 'Home' },
    { to: '/adhd-symptoms-and-apps', label: 'Symptoms & Apps' },
    { to: '/medical-analysis', label: 'Medical Analysis' },
    { to: '/expert-insights', label: 'Expert Insights' },
    { to: '/testimonials', label: 'User Stories' },
    { to: '/research', label: 'Research' },
    { to: '/comparison', label: 'App Comparison' },
    { to: '/adhd-test', label: 'ADHD Test' }
  ];

  const womenSubMenu = [
    { to: '/blog/adhd-women-symptoms', label: 'ADHD in Women' },
    { to: '/blog/add-adhd-women', label: 'ADD & ADHD' },
    { to: '/blog/inattentive-adhd-women', label: 'Inattentive ADHD' },
    { to: '/blog/adhd-women-life-stages', label: 'ADHD Life Stages' },
    { to: '/blog/add-women', label: 'ADD in Women' },
    { to: '/blog/high-functioning-adhd', label: 'High-Functioning ADHD' },
    { to: '/blog/social-energy-management', label: 'Managing Social Energy' },
    { to: '/blog/adhd-overwhelm', label: 'Managing Overwhelm' }
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
        <li className="relative">
          <button
            onClick={() => setIsWomenMenuOpen(!isWomenMenuOpen)}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            ADHD in Women
            <ChevronDown className="w-4 h-4" />
          </button>
          {isWomenMenuOpen && (
            <div className="absolute z-50 mt-2 py-2 w-64 bg-white rounded-lg shadow-lg border border-gray-100">
              {womenSubMenu.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  onClick={() => setIsWomenMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </li>
      </ul>
    </nav>
  );
}