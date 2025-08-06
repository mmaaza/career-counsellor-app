import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-6 h-6 bg-blue-600 rounded flex items-center justify-center">
                <span className="text-white font-bold text-xs">CC</span>
              </div>
              <span className="text-lg font-semibold text-gray-900">Career Counsellor</span>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Empowering individuals to discover their ideal career path through 
              personalized guidance and expert assessments.
            </p>
            <div className="flex space-x-4">
              <a href="mailto:info@careercounsellor.com" className="text-gray-500 hover:text-blue-600 transition-colors">
                <span className="sr-only">Email</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </a>
              <a href="tel:+15551234567" className="text-gray-500 hover:text-blue-600 transition-colors">
                <span className="sr-only">Phone</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </a>
              <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

          {/* Professional Services */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Professional Services
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/career-assessments" 
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  Career Assessments
                </Link>
              </li>
              <li>
                <Link 
                  to="/resume-review" 
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  Resume Review
                </Link>
              </li>
              <li>
                <Link 
                  to="/interview-coaching" 
                  className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                >
                  Interview Coaching
                </Link>
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
                <Link to="/help-center" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/refund-policy" className="text-gray-600 hover:text-blue-600 text-sm transition-colors">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:flex-1">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-2">
                Stay Updated
              </h3>
              <p className="text-gray-600 text-sm mb-4 md:mb-0">
                Get career tips and updates delivered to your inbox.
              </p>
            </div>
            <div className="md:flex-1 md:max-w-md md:ml-8">
              <form className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 min-w-0 px-3 py-2 text-sm border border-gray-300 rounded-l-lg focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-r-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-8 border-t border-gray-200">
          <div className="md:flex md:items-center md:justify-between">
            <p className="text-gray-500 text-sm">
              © 2025 Career Counsellor. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                Terms
              </Link>
              <Link to="/privacy" className="text-gray-500 hover:text-blue-600 text-sm transition-colors">
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
