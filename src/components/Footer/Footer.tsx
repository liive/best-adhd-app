import React from 'react';
import { getFormattedDate } from '../../utils/dateUtils';

export function Footer() {
  const { month, year } = getFormattedDate();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">About Our Reviews</h3>
            <p className="text-sm text-gray-600">
              Our recommendations are based on extensive research, user feedback, and expert consultation. We regularly update our reviews to reflect the latest app features and user experiences.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Disclaimer</h3>
            <p className="text-sm text-gray-600">
              App effectiveness may vary by individual. These tools should complement, not replace, professional medical advice and treatment plans.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Updates</h3>
            <p className="text-sm text-gray-600">
              Last updated: January 2025. Prices and features may vary. We recommend checking the app stores for the most current information.
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-500">
            © {currentYear} BestADHDApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}