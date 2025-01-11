import React from 'react';
import { Link } from 'react-router-dom';

export function TableOfContents() {
  const sections = [
    {
      title: "Top ADHD Apps for 2024",
      subsections: [
        "Best Overall Apps",
        "Time Management Tools",
        "Focus & Concentration Apps",
        "Organization Apps"
      ]
    },
    {
      title: "Expert Reviews & Research",
      subsections: [
        "Clinical Studies",
        "User Success Stories",
        "Expert Recommendations"
      ]
    },
    {
      title: "Comparison & Features",
      subsections: [
        "Price Comparison",
        "Feature Matrix",
        "Integration Capabilities"
      ]
    }
  ];

  return (
    <nav className="bg-gray-50 p-6 rounded-lg mb-8">
      <h2 className="text-xl font-bold mb-4">Table of Contents</h2>
      <div className="space-y-4">
        {sections.map((section, index) => (
          <div key={index}>
            <h3 className="font-medium text-gray-900 mb-2">{section.title}</h3>
            <ul className="space-y-2 pl-4">
              {section.subsections.map((subsection, subIndex) => (
                <li key={subIndex}>
                  <Link 
                    to={`#${subsection.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-blue-600 hover:text-blue-800 text-sm"
                  >
                    {subsection}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </nav>
  );
}