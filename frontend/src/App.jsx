import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { CounsellorModeProvider } from './contexts/CounsellorModeContext';
import { DefaultLayout, AdminLayout } from './layouts';
import ProtectedAdminRoute from './components/ProtectedAdminRoute';
import Home from './pages/Public/Home';
import About from './pages/Public/About';
import Services from './pages/Public/Services';
import Booking from './pages/Public/Booking';
import Bookings from './pages/Admin/Bookings';
import AdminDashboard from './pages/Admin/Dashboard';
import AdminStudents from './pages/Admin/Students';
import AdminSchedule from './pages/Admin/Schedule';
import AdminPayments from './pages/Admin/Payments';
import AdminSettings from './pages/Admin/Settings';
import AdminLogin from './pages/Admin/Login';
import Contact from './pages/Public/Contact';

// Support Pages
import HelpCenter from './pages/Support/HelpCenter';
import FAQ from './pages/Support/FAQ';
import RefundPolicy from './pages/Support/RefundPolicy';

// Service Pages
import CareerAssessments from './pages/Services/CareerAssessments';
import ResumeReview from './pages/Services/ResumeReview';
import InterviewCoaching from './pages/Services/InterviewCoaching';

function App() {
  return (
    <CounsellorModeProvider>
      <Router>
        <Routes>
          {/* Public Routes - Wrapped with DefaultLayout */}
          <Route path="/" element={<DefaultLayout><Home /></DefaultLayout>} />
          <Route path="/about" element={<DefaultLayout><About /></DefaultLayout>} />
          <Route path="/services" element={<DefaultLayout><Services /></DefaultLayout>} />
          <Route path="/booking" element={<DefaultLayout><Booking /></DefaultLayout>} />
          <Route path="/contact" element={<DefaultLayout><Contact /></DefaultLayout>} />
          
          {/* Support Pages */}
          <Route path="/help-center" element={<DefaultLayout><HelpCenter /></DefaultLayout>} />
          <Route path="/faq" element={<DefaultLayout><FAQ /></DefaultLayout>} />
          <Route path="/refund-policy" element={<DefaultLayout><RefundPolicy /></DefaultLayout>} />
          
          {/* Service Pages */}
          <Route path="/career-assessments" element={<DefaultLayout><CareerAssessments /></DefaultLayout>} />
          <Route path="/resume-review" element={<DefaultLayout><ResumeReview /></DefaultLayout>} />
          <Route path="/interview-coaching" element={<DefaultLayout><InterviewCoaching /></DefaultLayout>} />
          
          {/* Admin Login - No layout needed */}
          <Route path="/admin/login" element={<AdminLogin />} />
          
          {/* Admin Routes - Wrapped with AdminLayout */}
          <Route 
            path="/admin/dashboard" 
            element={
              <ProtectedAdminRoute>
                <AdminDashboard />
              </ProtectedAdminRoute>
            } 
          />
          <Route 
            path="/admin/bookings" 
            element={
              <ProtectedAdminRoute>
                <Bookings />
              </ProtectedAdminRoute>
            } 
          />
          <Route 
            path="/admin/students" 
            element={
              <ProtectedAdminRoute>
                <AdminStudents />
              </ProtectedAdminRoute>
            } 
          />
          <Route 
            path="/admin/schedule" 
            element={
              <ProtectedAdminRoute>
                <AdminSchedule />
              </ProtectedAdminRoute>
            } 
          />
          <Route 
            path="/admin/payments" 
            element={
              <ProtectedAdminRoute>
                <AdminPayments />
              </ProtectedAdminRoute>
            } 
          />
          <Route 
            path="/admin/settings" 
            element={
              <ProtectedAdminRoute>
                <AdminSettings />
              </ProtectedAdminRoute>
            } 
          />
          
          {/* Catch-all redirect */}
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </CounsellorModeProvider>
  );
}

export default App;
