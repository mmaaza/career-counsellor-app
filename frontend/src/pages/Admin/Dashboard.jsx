import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useCounsellorMode } from '../../contexts/CounsellorModeContext';

const Dashboard = () => {
  const { disableCounsellorMode } = useCounsellorMode();
  const navigate = useNavigate();
  const location = useLocation();
  const [stats] = useState({
    todaySessions: 8,
    weekSessions: 23,
    pendingBookings: 12,
    totalClients: 156,
    revenue: 15240,
    activeClients: 45
  });

  const adminPages = [
    {
      name: 'Dashboard',
      path: '/admin/dashboard',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
      ),
      description: 'Overview & Analytics'
    },
    {
      name: 'Bookings',
      path: '/admin/bookings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      description: 'Manage Appointments'
    },
    {
      name: 'Students',
      path: '/admin/students',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      ),
      description: 'Client Management'
    },
    {
      name: 'Schedule',
      path: '/admin/schedule',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      description: 'Calendar & Availability'
    },
    {
      name: 'Payments',
      path: '/admin/payments',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ),
      description: 'Financial Reports'
    },
    {
      name: 'Settings',
      path: '/admin/settings',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      description: 'Account & Preferences'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      type: 'booking',
      message: 'New booking from Emily Chen for Career Counseling',
      time: '10 minutes ago',
      icon: '📅'
    },
    {
      id: 2,
      type: 'payment',
      message: 'Payment received - $150 from Michael Rodriguez',
      time: '25 minutes ago',
      icon: '💰'
    },
    {
      id: 3,
      type: 'message',
      message: 'New message from Sarah Johnson about rescheduling',
      time: '1 hour ago',
      icon: '💬'
    },
    {
      id: 4,
      type: 'review',
      message: 'New 5-star review from David Park',
      time: '2 hours ago',
      icon: '⭐'
    }
  ];

  const upcomingSessions = [
    {
      id: 1,
      client: 'Emily Chen',
      service: 'Career Counseling',
      time: '10:00 AM',
      duration: '60 min',
      status: 'confirmed'
    },
    {
      id: 2,
      client: 'Michael Rodriguez',
      service: 'Interview Prep',
      time: '2:30 PM',
      duration: '90 min',
      status: 'confirmed'
    },
    {
      id: 3,
      client: 'Sarah Johnson',
      service: 'Resume Review',
      time: '4:00 PM',
      duration: '45 min',
      status: 'pending'
    }
  ];

  const handleLogout = () => {
    disableCounsellorMode();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <Link
                to="/"
                className="text-gray-600 hover:text-blue-600 text-sm font-medium"
              >
                View Public Site
              </Link>
              <button
                onClick={handleLogout}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Pills */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            {adminPages.map((page) => (
              <Link
                key={page.path}
                to={page.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  location.pathname === page.path
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                {page.icon}
                <span>{page.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Today's Sessions</p>
                <p className="text-3xl font-bold text-blue-600">{stats.todaySessions}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📅</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">This Week</p>
                <p className="text-3xl font-bold text-green-600">{stats.weekSessions}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Pending Bookings</p>
                <p className="text-3xl font-bold text-orange-600">{stats.pendingBookings}</p>
              </div>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">⏳</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                <p className="text-3xl font-bold text-purple-600">${stats.revenue.toLocaleString()}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">💰</span>
              </div>
            </div>
          </div>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Quick Actions */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {adminPages.slice(1).map((page) => (
                  <Link
                    key={page.path}
                    to={page.path}
                    className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                  >
                    <div className="text-blue-600 group-hover:text-blue-700 mr-3">
                      {page.icon}
                    </div>
                    <div>
                      <p className="font-medium text-gray-900 group-hover:text-blue-700">
                        {page.name}
                      </p>
                      <p className="text-sm text-gray-500">{page.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-4">
                {recentActivities.map((activity) => (
                  <div key={activity.id} className="flex items-start space-x-3">
                    <span className="text-lg">{activity.icon}</span>
                    <div className="flex-1">
                      <p className="text-sm text-gray-900">{activity.message}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Today's Schedule */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Today's Schedule</h3>
                <Link
                  to="/admin/schedule"
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  View Full Calendar →
                </Link>
              </div>

              <div className="space-y-4">
                {upcomingSessions.map((session) => (
                  <div
                    key={session.id}
                    className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-lg">👤</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{session.client}</h4>
                        <p className="text-sm text-gray-600">{session.service}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium text-gray-900">{session.time}</p>
                      <p className="text-sm text-gray-600">{session.duration}</p>
                    </div>
                    <div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${
                          session.status === 'confirmed'
                            ? 'bg-green-100 text-green-800'
                            : 'bg-yellow-100 text-yellow-800'
                        }`}
                      >
                        {session.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {upcomingSessions.length === 0 && (
                <div className="text-center py-8">
                  <span className="text-4xl mb-4 block">📅</span>
                  <p className="text-gray-500">No sessions scheduled for today</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
