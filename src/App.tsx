import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { AppReviewPage } from './pages/AppReviewPage/AppReviewPage';
import { SymptomsPage } from './pages/SymptomsPage/SymptomsPage';
import { ExpertInsightsPage } from './pages/ExpertInsightsPage';
import { ResearchPage } from './pages/ResearchPage';
import { ComparisonPage } from './pages/ComparisonPage/ComparisonPage';
import { MedicalAnalysisPage } from './pages/MedicalAnalysis/MedicalAnalysisPage';
import { TestimonialsPage } from './pages/TestimonialsPage/TestimonialsPage';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app-reviews/:appName" element={<AppReviewPage />} />
        <Route path="/adhd-symptoms-and-apps" element={<SymptomsPage />} />
        <Route path="/expert-insights" element={<ExpertInsightsPage />} />
        <Route path="/research" element={<ResearchPage />} />
        <Route path="/comparison" element={<ComparisonPage />} />
        <Route path="/medical-analysis" element={<MedicalAnalysisPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;