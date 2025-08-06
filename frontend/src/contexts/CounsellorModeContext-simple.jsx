import { createContext, useContext, useState, useEffect } from 'react';

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
  const [isInitialized, setIsInitialized] = useState(true); // Set to true to avoid blank screen

  // Simple initialization
  useEffect(() => {
    const savedMode = localStorage.getItem('counsellorMode');
    if (savedMode === 'true') {
      setIsCounsellorMode(true);
    }
    setIsInitialized(true);
  }, []);

  const enableCounsellorMode = () => {
    setIsCounsellorMode(true);
    localStorage.setItem('counsellorMode', 'true');
  };

  const disableCounsellorMode = () => {
    setIsCounsellorMode(false);
    localStorage.removeItem('counsellorMode');
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
