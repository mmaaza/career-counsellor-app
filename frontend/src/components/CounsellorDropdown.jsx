import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCounsellorMode } from '../contexts/CounsellorModeContext';

const CounsellorDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { disableCounsellorMode } = useCounsellorMode();
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    disableCounsellorMode();
    setIsOpen(false);
  };

  const quickLinks = [
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      label: 'Dashboard',
      href: '/dashboard',
      description: 'Main admin panel'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Schedule',
      href: '/dashboard?tab=upcoming',
      description: 'View appointments'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      label: 'Clients',
      href: '/dashboard?tab=clients',
      description: 'Manage client records'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      label: 'Reports',
      href: '/dashboard?tab=analytics',
      description: 'Analytics & insights'
    },
    {
      icon: (
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      label: 'Settings',
      href: '/dashboard?tab=settings',
      description: 'Account & preferences'
    }
  ];

  return (
    <div className="relative" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center space-x-2"
      >
        <div className="w-4 h-4 bg-white bg-opacity-20 rounded-sm flex items-center justify-center">
          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
          </svg>
        </div>
        <span>Counsellor</span>
        <svg 
          className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        
        {/* Subtle glow effect */}
        <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-200"></div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
          {/* Admin Header */}
          <div className="px-4 py-3 border-b border-gray-100">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Dr. Sarah Johnson</p>
                <p className="text-xs text-gray-500">Career Counsellor</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="py-2">
            <div className="px-4 py-2">
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Quick Access</p>
            </div>
            
            {quickLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center px-4 py-3 hover:bg-gray-50 transition-colors group"
              >
                <div className="text-gray-400 group-hover:text-blue-600 mr-3">
                  {link.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600">
                    {link.label}
                  </p>
                  <p className="text-xs text-gray-500">{link.description}</p>
                </div>
              </Link>
            ))}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100 my-2"></div>

          {/* Admin Actions */}
          <div className="px-2 py-2">
            <Link
              to="/instructions"
              onClick={() => setIsOpen(false)}
              className="flex items-center w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-md transition-colors"
            >
              <svg className="w-4 h-4 mr-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Help & Instructions
            </Link>

            <button
              onClick={handleLogout}
              className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-md transition-colors"
            >
              <svg className="w-4 h-4 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CounsellorDropdown;
