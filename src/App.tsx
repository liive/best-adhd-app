import { Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import { HomePage } from './pages/HomePage';
import { BestAppsPage } from './pages/BestAppsPage';
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
import { ADHDWomenSymptoms } from './pages/Blog/ADHDWomenSymptoms';
import { ADDAndADHDWomen } from './pages/Blog/ADDAndADHDWomen';
import { InattentiveADHDWomen } from './pages/Blog/InattentiveADHDWomen';
import { ADHDWomenLifeStages } from './pages/Blog/ADHDWomenLifeStages';
import { ADDWomen } from './pages/Blog/ADDWomen';
import { HighFunctioningADHD } from './pages/Blog/HighFunctioningADHD';
import { SocialEnergyManagement } from './pages/Blog/SocialEnergyManagement';
import { ADHDOverwhelm } from './pages/Blog/ADHDOverwhelm';
import { CulturalADHDImpact } from './pages/Blog/CulturalADHDImpact';
import { GenderDifferencesADHD } from './pages/Blog/GenderDifferencesADHD';
import { ADHDTestPage } from './pages/ADHDTest/ADHDTestPage';
import { ADHDMenstrualCycle } from './pages/Blog/ADHDMenstrualCycle';
import { SignsOfADHD } from './pages/Blog/SignsOfADHD';
import { ADHDFemaleSymptoms } from './pages/Blog/ADHDFemaleSymptoms';
import { ADHDWomenSigns } from './pages/Blog/ADHDWomenSigns';
import { ADHDWomenIdentification } from './pages/Blog/ADHDWomenIdentification';
import { ADHDWomenSignsSymptoms } from './pages/Blog/ADHDWomenSignsSymptoms';
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
        <Route path="/best-adhd-apps" element={<BestAppsPage />} />
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
        <Route path="/blog/adhd-women-symptoms" element={<ADHDWomenSymptoms />} />
        <Route path="/blog/add-adhd-women" element={<ADDAndADHDWomen />} />
        <Route path="/blog/inattentive-adhd-women" element={<InattentiveADHDWomen />} />
        <Route path="/blog/adhd-women-life-stages" element={<ADHDWomenLifeStages />} />
        <Route path="/blog/add-women" element={<ADDWomen />} />
        <Route path="/blog/high-functioning-adhd" element={<HighFunctioningADHD />} />
        <Route path="/blog/social-energy-management" element={<SocialEnergyManagement />} />
        <Route path="/blog/adhd-overwhelm" element={<ADHDOverwhelm />} />
        <Route path="/blog/cultural-adhd-impact" element={<CulturalADHDImpact />} />
        <Route path="/blog/gender-differences-adhd" element={<GenderDifferencesADHD />} />
        <Route path="/adhd-test" element={<ADHDTestPage />} />
        <Route path="/blog/adhd-menstrual-cycle" element={<ADHDMenstrualCycle />} />
        <Route path="/blog/signs-of-adhd" element={<SignsOfADHD />} />
        <Route path="/blog/adhd-female-symptoms" element={<ADHDFemaleSymptoms />} />
        <Route path="/blog/adhd-women-signs" element={<ADHDWomenSigns />} />
        <Route path="/blog/adhd-women-identification" element={<ADHDWomenIdentification />} />
        <Route path="/blog/adhd-women-signs-symptoms" element={<ADHDWomenSignsSymptoms />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;