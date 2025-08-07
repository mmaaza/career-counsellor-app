import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCounsellorMode } from '../../contexts/CounsellorModeContext';
import apiService from '../../services/api';

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { enableCounsellorMode } = useCounsellorMode();
  const navigate = useNavigate();

  // Check if already authenticated
  useEffect(() => {
    if (apiService.isAuthenticated()) {
      enableCounsellorMode();
      navigate('/admin/dashboard');
    }
  }, [enableCounsellorMode, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await apiService.login(credentials);
      
      if (response.success) {
        // Store JWT token
        apiService.setToken(response.data.token);
        
        // Enable counsellor mode
        enableCounsellorMode();
        
        // Redirect to admin dashboard
        navigate('/admin/dashboard');
      } else {
        setError(response.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login error:', error);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value
    });
    setError(''); // Clear error when user types
  };

  const handleBackToHome = () => {
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        {/* Header */}
        <div className="text-center">
          <div className="w-20 h-20 bg-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 shadow-lg">
            <span className="text-white text-2xl">🔐</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Admin Access
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Enter your credentials to access the counsellor dashboard and manage your practice
          </p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={credentials.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="admin@careercounsellor.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-semibold text-gray-700 mb-3">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={credentials.password}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Enter your password"
              />
            </div>

            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center mr-3">
                    <span className="text-red-600">⚠️</span>
                  </div>
                  <div>
                    <p className="text-red-800 font-semibold">Login Failed</p>
                    <p className="text-red-700">{error}</p>
                  </div>
                </div>
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              {isLoading ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent inline-block mr-3"></div>
                  Signing In...
                </>
              ) : (
                'Access Dashboard'
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600">💡</span>
              </div>
              <h4 className="font-semibold text-gray-900">Demo Credentials</h4>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Email:</span>
                <span className="text-sm font-medium text-gray-900">admin@careercounsellor.com</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Password:</span>
                <span className="text-sm font-medium text-gray-900">counsellor2025</span>
              </div>
            </div>
            <div className="mt-4 p-3 bg-blue-50 rounded-lg">
              <p className="text-xs text-blue-700">
                <strong>Note:</strong> You'll need to create an admin account in the database first using the register endpoint, or seed the database with admin credentials.
              </p>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 text-xl">📊</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Analytics</h3>
            <p className="text-sm text-gray-600">Track your practice metrics</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-600 text-xl">📅</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Bookings</h3>
            <p className="text-sm text-gray-600">Manage appointments</p>
          </div>

          <div className="bg-white rounded-xl p-6 text-center shadow-lg">
            <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-yellow-600 text-xl">👥</span>
            </div>
            <h3 className="font-semibold text-gray-900 mb-2">Clients</h3>
            <p className="text-sm text-gray-600">View client progress</p>
          </div>
        </div>

        {/* Back to Home */}
        <div className="text-center">
          <button
            onClick={handleBackToHome}
            className="text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
          >
            ← Back to Home
          </button>
        </div>

        {/* Security Notice */}
        <div className="bg-white rounded-xl p-6 shadow-lg">
          <div className="flex items-start">
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-blue-600 text-sm">🔒</span>
            </div>
            <div>
              <h4 className="font-semibold text-gray-900 mb-2">Secure Access</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your admin session is protected with industry-standard security measures. 
                Always log out when finished and never share your credentials.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
