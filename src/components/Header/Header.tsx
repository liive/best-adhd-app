import React from 'react';
import { Navigation } from './Navigation';
import { HeaderTitle } from './HeaderTitle';
import { Illustration } from './Illustration';

export function Header() {
  return (
    <div className="bg-white py-8 sm:py-16">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <Navigation />
        <HeaderTitle />
        <Illustration />
      </header>
    </div>
  );
}