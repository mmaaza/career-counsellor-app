import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CounsellorModeProvider } from './contexts/CounsellorModeContext';
import { DefaultLayout } from './layouts';
import Home from './pages/Public/Home';
import About from './pages/Public/About';
import Services from './pages/Public/Services';
import Booking from './pages/Public/Booking';
import BookingManagement from './pages/Admin/BookingManagement';
import Contact from './pages/Public/Contact';

// Support Pages
import HelpCenter from './pages/Support/HelpCenter';
import FAQ from './pages/Support/FAQ';
import RefundPolicy from './pages/Support/RefundPolicy';

// Service Pages
import CareerAssessments from './pages/Services/CareerAssessments';
import ResumeReview from './pages/Services/ResumeReview';
import InterviewCoaching from './pages/Services/InterviewCoaching';

// Component that handles routing
const AppContent = () => {
  return (
    <Routes>
      {/* Public Routes - Always accessible to visitors */}
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/booking" element={<Booking />} />
      <Route path="/contact" element={<Contact />} />
      
      {/* Admin Routes */}
      <Route path="/admin/bookings" element={<BookingManagement />} />
      
      {/* Support Pages */}
      <Route path="/help-center" element={<HelpCenter />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/refund-policy" element={<RefundPolicy />} />
      
      {/* Service Pages */}
      <Route path="/career-assessments" element={<CareerAssessments />} />
      <Route path="/resume-review" element={<ResumeReview />} />
      <Route path="/interview-coaching" element={<InterviewCoaching />} />
      
      {/* Catch-all redirect */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

function App() {
  return (
    <CounsellorModeProvider>
      <Router>
        <DefaultLayout>
          <AppContent />
        </DefaultLayout>
      </Router>
    </CounsellorModeProvider>
  );
}

export default App;
