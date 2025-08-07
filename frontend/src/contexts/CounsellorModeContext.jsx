import { createContext, useContext, useState, useEffect } from 'react';
import apiService from '../services/api';

const CounsellorModeContext = createContext();

export const useCounsellorMode = () => {
  const context = useContext(CounsellorModeContext);
  if (!context) {
    throw new Error('useCounsellorMode must be used within a CounsellorModeProvider');
  }
  return context;
};

export const CounsellorModeProvider = ({ children }) => {
  const [isCounsellorMode, setIsCounsellorMode] = useState(false);
  const [isInitialized, setIsInitialized] = useState(false);

  // Initialize counsellor mode based on JWT token
  useEffect(() => {
    const isAuthenticated = apiService.isAuthenticated();
    setIsCounsellorMode(isAuthenticated);
    setIsInitialized(true);
  }, []);

  const enableCounsellorMode = () => {
    setIsCounsellorMode(true);
  };

  const disableCounsellorMode = () => {
    setIsCounsellorMode(false);
    apiService.logout(); // This will remove the JWT token
  };

  const value = {
    isCounsellorMode,
    isInitialized,
    enableCounsellorMode,
    disableCounsellorMode
  };

  return (
    <CounsellorModeContext.Provider value={value}>
      {children}
    </CounsellorModeContext.Provider>
  );
};
