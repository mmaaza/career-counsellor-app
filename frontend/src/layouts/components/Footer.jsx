const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">CC</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">Career Counsellor</span>
            </div>
            <p className="text-gray-600 text-sm">
              Empowering individuals to discover their ideal career path through 
              personalized guidance and assessments.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/assessment" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Career Assessment
                </a>
              </li>
              <li>
                <a href="/recommendations" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Job Recommendations
                </a>
              </li>
              <li>
                <a href="/profile" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Profile
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/help" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Career Counsellor. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="/terms" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/privacy" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
