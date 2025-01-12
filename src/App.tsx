import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
import { OrganizationAppsPage } from './pages/OrganizationAppsPage';
import { TimeManagementAppsPage } from './pages/TimeManagementAppsPage';
import { AdultsAppsPage } from './pages/AdultsAppsPage';
import { Best2024AppsPage } from './pages/Best2024AppsPage';
import { useGoogleAnalytics } from './hooks/useGoogleAnalytics';

function App() {
  useGoogleAnalytics();

  return (
    <div className="min-h-screen bg-gray-100">
      <Helmet>
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://bestadhdapp.com" />
      </Helmet>
      
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
        <Route path="/best-adhd-organization-apps" element={<OrganizationAppsPage />} />
        <Route path="/best-adhd-time-management-apps" element={<TimeManagementAppsPage />} />
        <Route path="/adhd-apps-for-adults" element={<AdultsAppsPage />} />
        <Route path="/best-adhd-apps-2024" element={<Best2024AppsPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;