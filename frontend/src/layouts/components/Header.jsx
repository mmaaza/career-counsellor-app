import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { useCounsellorMode } from '../../contexts/CounsellorModeContext';

const Header = () => {
  const { isCounsellorMode, disableCounsellorMode } = useCounsellorMode();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Function to determine if a link is active
  const isActiveLink = (path) => {
    if (path === '/' && location.pathname === '/') return true;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    return false;
  };

  // Function to get link classes based on active state
  const getLinkClasses = (path, isMobile = false) => {
    const baseClasses = isMobile 
      ? "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 block"
      : "px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 relative";
    
    if (isActiveLink(path)) {
      return `${baseClasses} text-blue-600 font-semibold`;
    }
    return `${baseClasses} text-gray-700 hover:text-gray-900 hover:bg-gray-50`;
  };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center group-hover:bg-gray-800 transition-colors duration-200">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-semibold text-gray-900">
                  Career Counsellor
                </span>
                {isCounsellorMode && (
                  <span className="text-xs text-gray-600 font-medium">
                    Admin Panel
                  </span>
                )}
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            <Link 
              to="/" 
              className={getLinkClasses('/')}
            >
              <span>Home</span>
              {isActiveLink('/') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full active-tab-indicator"></div>
              )}
            </Link>
            <Link 
              to="/about" 
              className={getLinkClasses('/about')}
            >
              <span>About</span>
              {isActiveLink('/about') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full active-tab-indicator"></div>
              )}
            </Link>
            <Link 
              to="/services" 
              className={getLinkClasses('/services')}
            >
              <span>Services</span>
              {isActiveLink('/services') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full active-tab-indicator"></div>
              )}
            </Link>
            <Link 
              to="/contact" 
              className={getLinkClasses('/contact')}
            >
              <span>Contact</span>
              {isActiveLink('/contact') && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600 rounded-full active-tab-indicator"></div>
              )}
            </Link>
            
            {isCounsellorMode && (
              <button
                onClick={disableCounsellorMode}
                className="ml-2 text-red-600 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
              >
                Exit Admin
              </button>
            )}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900 hover:bg-gray-50 p-2 rounded-md transition-all duration-200"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4 animate-slideDown">
            <div className="flex flex-col space-y-2">
              <Link 
                to="/" 
                className={getLinkClasses('/', true)}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>Home</span>
                  {isActiveLink('/') && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  )}
                </div>
              </Link>
              <Link 
                to="/about" 
                className={getLinkClasses('/about', true)}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>About</span>
                  {isActiveLink('/about') && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  )}
                </div>
              </Link>
              <Link 
                to="/services" 
                className={getLinkClasses('/services', true)}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>Services</span>
                  {isActiveLink('/services') && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  )}
                </div>
              </Link>
              <Link 
                to="/contact" 
                className={getLinkClasses('/contact', true)}
                onClick={() => setMobileMenuOpen(false)}
              >
                <div className="flex items-center justify-between">
                  <span>Contact</span>
                  {isActiveLink('/contact') && (
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                  )}
                </div>
              </Link>
              
              {isCounsellorMode && (
                <button
                  onClick={() => {
                    disableCounsellorMode();
                    setMobileMenuOpen(false);
                  }}
                  className="text-left text-red-600 hover:text-red-700 hover:bg-red-50 px-4 py-2 rounded-md text-sm font-medium transition-all duration-200"
                >
                  Exit Admin
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
