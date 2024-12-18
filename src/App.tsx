import React from 'react';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { AppList } from './components/AppList/AppList';
import { Newsletter } from './components/Newsletter/Newsletter';
import { apps } from './data/apps';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <Newsletter />
        <AppList apps={apps} />
      </main>
      <Footer />
    </div>
  );
}

export default App;