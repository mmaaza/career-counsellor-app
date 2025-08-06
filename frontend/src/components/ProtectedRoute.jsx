import { Navigate } from 'react-router-dom';
import { useCounsellorMode } from '../contexts/CounsellorModeContext';

const ProtectedRoute = ({ children }) => {
  const { isCounsellorMode, isInitialized } = useCounsellorMode();

  // Show loading while checking mode
  if (!isInitialized) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  // Redirect to home if not in counsellor mode
  if (!isCounsellorMode) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
