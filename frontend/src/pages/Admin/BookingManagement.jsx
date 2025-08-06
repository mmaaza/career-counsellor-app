import React, { useState, useEffect } from 'react';
import apiService from '../../services/api';

const BookingManagement = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [filters, setFilters] = useState({
    status: '',
    startDate: '',
    endDate: '',
    page: 1
  });
  const [pagination, setPagination] = useState({
    currentPage: 1,
    totalPages: 1,
    totalBookings: 0
  });

  useEffect(() => {
    fetchBookings();
  }, [filters]);

  const fetchBookings = async () => {
    try {
      setLoading(true);
      const response = await apiService.getBookings(filters);
      
      if (response.success) {
        setBookings(response.data);
        setPagination(response.pagination);
        setError('');
      } else {
        throw new Error(response.message || 'Failed to fetch bookings');
      }
    } catch (error) {
      console.error('Error fetching bookings:', error);
      setError(error.message || 'Failed to fetch bookings');
    } finally {
      setLoading(false);
    }
  };

  const updateBookingStatus = async (bookingId, newStatus) => {
    try {
      const response = await apiService.updateBookingStatus(bookingId, newStatus);
      
      if (response.success) {
        // Refresh bookings list
        fetchBookings();
      } else {
        throw new Error(response.message || 'Failed to update booking status');
      }
    } catch (error) {
      console.error('Error updating booking status:', error);
      setError(error.message || 'Failed to update booking status');
    }
  };

  const deleteBooking = async (bookingId) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      try {
        const response = await apiService.deleteBooking(bookingId);
        
        if (response.success) {
          fetchBookings();
        } else {
          throw new Error(response.message || 'Failed to delete booking');
        }
      } catch (error) {
        console.error('Error deleting booking:', error);
        setError(error.message || 'Failed to delete booking');
      }
    }
  };

  const getStatusColor = (status) => {
    const colors = {
      pending: 'bg-yellow-100 text-yellow-800',
      confirmed: 'bg-green-100 text-green-800',
      completed: 'bg-blue-100 text-blue-800',
      cancelled: 'bg-red-100 text-red-800',
      rescheduled: 'bg-purple-100 text-purple-800'
    };
    return colors[status] || 'bg-gray-100 text-gray-800';
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDateTime = (dateString) => {
    return new Date(dateString).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Booking Management</h1>
          <p className="text-gray-600 mt-2">Manage all customer bookings and appointments</p>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Filters</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Status
              </label>
              <select
                value={filters.status}
                onChange={(e) => setFilters({ ...filters, status: e.target.value, page: 1 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">All Statuses</option>
                <option value="pending">Pending</option>
                <option value="confirmed">Confirmed</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
                <option value="rescheduled">Rescheduled</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Start Date
              </label>
              <input
                type="date"
                value={filters.startDate}
                onChange={(e) => setFilters({ ...filters, startDate: e.target.value, page: 1 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                End Date
              </label>
              <input
                type="date"
                value={filters.endDate}
                onChange={(e) => setFilters({ ...filters, endDate: e.target.value, page: 1 })}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-end">
              <button
                onClick={() => {
                  setFilters({ status: '', startDate: '', endDate: '', page: 1 });
                }}
                className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
            <div className="flex">
              <div className="flex-shrink-0">
                <span className="text-red-400">⚠️</span>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">Error</h3>
                <div className="mt-2 text-sm text-red-700">{error}</div>
              </div>
            </div>
          </div>
        )}

        {/* Loading State */}
        {loading ? (
          <div className="bg-white rounded-lg shadow p-8 text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto mb-4"></div>
            <p className="text-gray-500">Loading bookings...</p>
          </div>
        ) : (
          <>
            {/* Bookings Table */}
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">
                  Bookings ({pagination.totalBookings})
                </h2>
              </div>

              {bookings.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-gray-500">No bookings found</p>
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Client
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Service
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Date & Time
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Price
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Created
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {bookings.map((booking) => (
                        <tr key={booking._id} className="hover:bg-gray-50">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {booking.clientInfo.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {booking.clientInfo.email}
                              </div>
                              <div className="text-sm text-gray-500">
                                {booking.clientInfo.phone}
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {booking.serviceName}
                            </div>
                            <div className="text-sm text-gray-500">
                              {booking.serviceDuration}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-medium text-gray-900">
                              {formatDate(booking.appointmentDate)}
                            </div>
                            <div className="text-sm text-gray-500">
                              {booking.appointmentTime}
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <select
                              value={booking.status}
                              onChange={(e) => updateBookingStatus(booking._id, e.target.value)}
                              className={`text-xs font-medium px-2 py-1 rounded-full border-0 ${getStatusColor(booking.status)}`}
                            >
                              <option value="pending">Pending</option>
                              <option value="confirmed">Confirmed</option>
                              <option value="completed">Completed</option>
                              <option value="cancelled">Cancelled</option>
                              <option value="rescheduled">Rescheduled</option>
                            </select>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            ${booking.servicePrice}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                            {formatDateTime(booking.createdAt)}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                            <button
                              onClick={() => deleteBooking(booking._id)}
                              className="text-red-600 hover:text-red-900 ml-4"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>

            {/* Pagination */}
            {pagination.totalPages > 1 && (
              <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-6 rounded-lg shadow">
                <div className="flex-1 flex justify-between sm:hidden">
                  <button
                    onClick={() => setFilters({ ...filters, page: pagination.currentPage - 1 })}
                    disabled={pagination.currentPage === 1}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Previous
                  </button>
                  <button
                    onClick={() => setFilters({ ...filters, page: pagination.currentPage + 1 })}
                    disabled={pagination.currentPage === pagination.totalPages}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 disabled:opacity-50"
                  >
                    Next
                  </button>
                </div>
                <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                  <div>
                    <p className="text-sm text-gray-700">
                      Showing{' '}
                      <span className="font-medium">
                        {(pagination.currentPage - 1) * 10 + 1}
                      </span>{' '}
                      to{' '}
                      <span className="font-medium">
                        {Math.min(pagination.currentPage * 10, pagination.totalBookings)}
                      </span>{' '}
                      of{' '}
                      <span className="font-medium">{pagination.totalBookings}</span> results
                    </p>
                  </div>
                  <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                      <button
                        onClick={() => setFilters({ ...filters, page: pagination.currentPage - 1 })}
                        disabled={pagination.currentPage === 1}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                      >
                        Previous
                      </button>
                      
                      {/* Page numbers */}
                      {[...Array(pagination.totalPages)].map((_, index) => {
                        const page = index + 1;
                        return (
                          <button
                            key={page}
                            onClick={() => setFilters({ ...filters, page })}
                            className={`relative inline-flex items-center px-4 py-2 border text-sm font-medium ${
                              page === pagination.currentPage
                                ? 'z-10 bg-blue-50 border-blue-500 text-blue-600'
                                : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50'
                            }`}
                          >
                            {page}
                          </button>
                        );
                      })}
                      
                      <button
                        onClick={() => setFilters({ ...filters, page: pagination.currentPage + 1 })}
                        disabled={pagination.currentPage === pagination.totalPages}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                      >
                        Next
                      </button>
                    </nav>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default BookingManagement;
