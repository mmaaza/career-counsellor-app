import { useState, useEffect } from 'react';
import AdminLayout from '../../layouts/AdminLayout';
import apiService from '../../services/api';

const Bookings = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalBookings: 0
  });

  // Fetch bookings from the backend
  useEffect(() => {
    fetchBookings();
  }, [activeTab, filterStatus]);

  const fetchBookings = async (page = 1) => {
    try {
      setLoading(true);
      setError('');
      
      const queryParams = new URLSearchParams({
        page: page.toString(),
        limit: '20'
      });
      
      if (filterStatus !== 'all') {
        queryParams.append('status', filterStatus);
      }
      
      const response = await apiService.getAllBookings(`?${queryParams}`);
      
      if (response.success) {
        setBookings(response.data || []);
        setPagination(response.pagination || {
          currentPage: 1,
          totalPages: 1,
          totalBookings: 0
        });
      } else {
        throw new Error(response.message || 'Failed to fetch bookings');
      }
    } catch (err) {
      console.error('Error fetching bookings:', err);
      setError(err.message || 'Failed to load bookings');
      setBookings([]);
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'all', label: 'All Bookings', count: pagination.totalBookings },
    { id: 'today', label: 'Today', count: bookings.filter(b => {
      const today = new Date().toISOString().split('T')[0];
      const bookingDate = new Date(b.appointmentDate).toISOString().split('T')[0];
      return bookingDate === today;
    }).length },
    { id: 'upcoming', label: 'Upcoming', count: bookings.filter(b => b.status === 'confirmed').length },
    { id: 'pending', label: 'Pending', count: bookings.filter(b => b.status === 'pending').length },
    { id: 'completed', label: 'Completed', count: bookings.filter(b => b.status === 'completed').length }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'completed':
        return 'bg-blue-100 text-blue-800';
      case 'no-show':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (status) => {
    switch (status) {
      case 'paid':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'refunded':
        return 'bg-red-100 text-red-800';
      case 'failed':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const filteredBookings = bookings.filter(booking => {
    const matchesSearch = booking.clientName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.clientEmail?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         booking.service?.toLowerCase().includes(searchTerm.toLowerCase());
    
    let matchesTab = true;
    if (activeTab === 'today') {
      const today = new Date().toISOString().split('T')[0];
      const bookingDate = new Date(booking.appointmentDate).toISOString().split('T')[0];
      matchesTab = bookingDate === today;
    } else if (activeTab === 'upcoming') {
      matchesTab = booking.status === 'confirmed';
    } else if (activeTab === 'pending') {
      matchesTab = booking.status === 'pending';
    } else if (activeTab === 'completed') {
      matchesTab = booking.status === 'completed';
    }
    
    return matchesSearch && matchesTab;
  });

  const handleStatusChange = async (bookingId, newStatus) => {
    try {
      setError('');
      const response = await apiService.updateBookingStatus(bookingId, newStatus);
      
      if (response.success) {
        // Update local state
        setBookings(prev => prev.map(booking => 
          booking._id === bookingId 
            ? { ...booking, status: newStatus }
            : booking
        ));
      } else {
        throw new Error(response.message || 'Failed to update booking status');
      }
    } catch (err) {
      console.error('Error updating booking status:', err);
      setError(err.message || 'Failed to update booking status');
    }
  };

  const handleSendReminder = async (bookingId) => {
    try {
      setError('');
      // Note: You'll need to add this endpoint to your backend
      const response = await apiService.makeRequest(`/bookings/${bookingId}/send-reminder`, {
        method: 'POST'
      });
      
      if (response.success) {
        alert('Reminder sent successfully!');
      } else {
        throw new Error(response.message || 'Failed to send reminder');
      }
    } catch (err) {
      console.error('Error sending reminder:', err);
      setError(err.message || 'Failed to send reminder');
    }
  };

  const handleAcceptBooking = async (bookingId) => {
    await handleStatusChange(bookingId, 'confirmed');
  };

  const handleRejectBooking = async (bookingId) => {
    await handleStatusChange(bookingId, 'cancelled');
  };

  const handleReschedule = (bookingId) => {
    // Open reschedule modal - implement this feature later
    alert('Reschedule feature coming soon!');
  };

  const handleViewDetails = (bookingId) => {
    // Open details modal - implement this feature later
    alert('View details feature coming soon!');
  };

  const handleMarkCompleted = async (bookingId) => {
    await handleStatusChange(bookingId, 'completed');
  };

  const handleRefund = async (bookingId) => {
    try {
      setError('');
      // Note: You'll need to add this endpoint to your backend
      const response = await apiService.makeRequest(`/bookings/${bookingId}/refund`, {
        method: 'POST'
      });
      
      if (response.success) {
        alert('Refund processed successfully!');
        fetchBookings(); // Refresh data
      } else {
        throw new Error(response.message || 'Failed to process refund');
      }
    } catch (err) {
      console.error('Error processing refund:', err);
      setError(err.message || 'Failed to process refund');
    }
  };

  const formatDate = (dateString) => {
    try {
      return new Date(dateString).toLocaleDateString();
    } catch {
      return dateString;
    }
  };

  const formatTime = (timeString) => {
    try {
      return new Date(timeString).toLocaleTimeString('en-US', { 
        hour: 'numeric', 
        minute: '2-digit',
        hour12: true 
      });
    } catch {
      return timeString;
    }
  };

  return (
    <AdminLayout title="Booking Management">
      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex">
            <span className="text-red-400 text-xl mr-3">⚠️</span>
            <div>
              <h3 className="text-sm font-medium text-red-800">Error</h3>
              <p className="text-sm text-red-700 mt-1">{error}</p>
            </div>
          </div>
        </div>
      )}

      {/* Loading State */}
      {loading ? (
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <>
          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-lg border border-gray-200 mb-6">
          <nav className="flex space-x-1 p-4">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-50'
                }`}
              >
                {tab.label}
                <span className={`ml-2 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                  activeTab === tab.id
                    ? 'bg-white bg-opacity-20 text-white'
                    : 'bg-gray-100 text-gray-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter & Search</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Search Bookings
              </label>
              <input
                type="text"
                placeholder="Search by name, email, or service..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Filter by Status
              </label>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
              >
                <option value="all">All Statuses</option>
                <option value="confirmed">Confirmed</option>
                <option value="pending">Pending</option>
                <option value="cancelled">Cancelled</option>
                <option value="completed">Completed</option>
                <option value="no-show">No Show</option>
              </select>
            </div>

            <div className="flex items-end">
              <button className="w-full bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl">
                Export CSV
              </button>
            </div>
          </div>
        </div>

        {/* Bookings List */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
          <div className="px-6 py-4 bg-gray-50 border-b border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900">Booking Details</h3>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Client
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Service
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date & Time
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Payment
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {filteredBookings.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {booking.client}
                        </div>
                        <div className="text-sm text-gray-500">{booking.email}</div>
                        <div className="text-sm text-gray-500">{booking.phone}</div>
                        {booking.notes && (
                          <div className="text-xs text-gray-400 mt-1 max-w-xs truncate" title={booking.notes}>
                            📝 {booking.notes}
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{booking.service}</div>
                      <div className="text-sm text-gray-500">{booking.duration}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900 font-medium">{booking.date}</div>
                      <div className="text-sm text-gray-500">{booking.time}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-xs font-semibold rounded-full ${getPaymentStatusColor(booking.paymentStatus)}`}>
                        {booking.paymentStatus}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      ${booking.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <div className="flex items-center justify-end space-x-2">
                        {/* Quick Actions based on status */}
                        {booking.status === 'pending' && (
                          <>
                            <button
                              onClick={() => handleAcceptBooking(booking.id)}
                              className="text-green-600 hover:text-green-700 text-xs px-3 py-1 border border-green-300 rounded-lg hover:bg-green-50 transition-colors duration-200"
                              title="Accept Booking"
                            >
                              Accept
                            </button>
                            <button
                              onClick={() => handleRejectBooking(booking.id)}
                              className="text-red-600 hover:text-red-700 text-xs px-3 py-1 border border-red-300 rounded-lg hover:bg-red-50 transition-colors duration-200"
                              title="Reject Booking"
                            >
                              Reject
                            </button>
                          </>
                        )}
                        
                        {booking.status === 'confirmed' && (
                          <>
                            <button
                              onClick={() => handleMarkCompleted(booking.id)}
                              className="text-blue-600 hover:text-blue-700 text-xs px-3 py-1 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                              title="Mark as Completed"
                            >
                              Complete
                            </button>
                            <button
                              onClick={() => handleReschedule(booking.id)}
                              className="text-orange-600 hover:text-orange-700 text-xs px-3 py-1 border border-orange-300 rounded-lg hover:bg-orange-50 transition-colors duration-200"
                              title="Reschedule"
                            >
                              Reschedule
                            </button>
                          </>
                        )}

                        {(booking.status === 'confirmed' || booking.status === 'pending') && (
                          <button
                            onClick={() => handleSendReminder(booking.id)}
                            className="text-blue-600 hover:text-blue-700 text-xs px-3 py-1 border border-blue-300 rounded-lg hover:bg-blue-50 transition-colors duration-200"
                            title="Send Reminder"
                          >
                            Remind
                          </button>
                        )}

                        {booking.status === 'cancelled' && booking.paymentStatus === 'paid' && (
                          <button
                            onClick={() => handleRefund(booking.id)}
                            className="text-purple-600 hover:text-purple-700 text-xs px-3 py-1 border border-purple-300 rounded-lg hover:bg-purple-50 transition-colors duration-200"
                            title="Process Refund"
                          >
                            Refund
                          </button>
                        )}

                        {/* Universal Actions */}
                        <button
                          onClick={() => handleViewDetails(booking.id)}
                          className="text-gray-600 hover:text-gray-900 text-xs px-3 py-1 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                          title="View Details"
                        >
                          Details
                        </button>

                        {/* Status Dropdown */}
                        <select
                          onChange={(e) => handleStatusChange(booking.id, e.target.value)}
                          value={booking.status}
                          className="text-xs border border-gray-300 rounded-lg px-2 py-1 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white"
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="completed">Completed</option>
                          <option value="cancelled">Cancelled</option>
                          <option value="no-show">No Show</option>
                        </select>

                        {/* More Options Menu */}
                        <div className="relative">
                          <button 
                            className="text-gray-600 hover:text-gray-900 p-1 rounded transition-colors duration-200"
                            title="More Options"
                          >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zM12 13a1 1 0 110-2 1 1 0 010 2zM12 20a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {filteredBookings.length === 0 && (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <p className="text-gray-500 text-lg">No bookings found matching your criteria</p>
              <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters</p>
            </div>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-5 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">✓</span>
              </div>
              <p className="text-3xl font-bold text-blue-600 mb-1">
                {filteredBookings.filter(b => b.status === 'confirmed').length}
              </p>
              <p className="text-sm text-gray-600 font-medium">Confirmed</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">⏳</span>
              </div>
              <p className="text-3xl font-bold text-yellow-600 mb-1">
                {filteredBookings.filter(b => b.status === 'pending').length}
              </p>
              <p className="text-sm text-gray-600 font-medium">Pending</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">✅</span>
              </div>
              <p className="text-3xl font-bold text-green-600 mb-1">
                {filteredBookings.filter(b => b.status === 'completed').length}
              </p>
              <p className="text-sm text-gray-600 font-medium">Completed</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">💰</span>
              </div>
              <p className="text-3xl font-bold text-green-600 mb-1">
                ${filteredBookings.filter(b => b.paymentStatus === 'paid').reduce((sum, b) => sum + b.amount, 0)}
              </p>
              <p className="text-sm text-gray-600 font-medium">Revenue</p>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-xl">📊</span>
              </div>
              <p className="text-3xl font-bold text-purple-600 mb-1">
                ${Math.round(filteredBookings.reduce((sum, b) => sum + (b.amount || 0), 0) / filteredBookings.length) || 0}
              </p>
              <p className="text-sm text-gray-600 font-medium">Avg. Value</p>
            </div>
          </div>
        </div>
        </>
      )}
    </AdminLayout>
  );
};

export default Bookings;
