import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navigation } from './Navigation';
import { HeaderTitle } from './HeaderTitle';
import { Illustration } from './Illustration';

export function Header() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div className="bg-white py-8 sm:py-16">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Navigation />
        {isHomePage && (
          <>
            <HeaderTitle />
            <Illustration />
          </>
        )}
      </header>
    </div>
  );
}