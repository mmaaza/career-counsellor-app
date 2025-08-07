import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const Payments = () => {
  const [dateRange, setDateRange] = useState('this_month');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Mock payment data
  const payments = [
    {
      id: 1,
      client: 'Emily Chen',
      service: 'Career Counseling',
      amount: 150,
      status: 'completed',
      method: 'Credit Card',
      date: '2024-08-05',
      transactionId: 'TXN-2024-001',
      sessionDate: '2024-08-07'
    },
    {
      id: 2,
      client: 'Michael Rodriguez',
      service: 'Interview Coaching',
      amount: 200,
      status: 'completed',
      method: 'PayPal',
      date: '2024-08-04',
      transactionId: 'TXN-2024-002',
      sessionDate: '2024-08-06'
    },
    {
      id: 3,
      client: 'Sarah Johnson',
      service: 'Resume Review',
      amount: 75,
      status: 'pending',
      method: 'Bank Transfer',
      date: '2024-08-03',
      transactionId: 'TXN-2024-003',
      sessionDate: '2024-08-08'
    },
    {
      id: 4,
      client: 'David Park',
      service: 'Career Assessment',
      amount: 120,
      status: 'failed',
      method: 'Credit Card',
      date: '2024-08-02',
      transactionId: 'TXN-2024-004',
      sessionDate: '2024-08-09'
    },
    {
      id: 5,
      client: 'Lisa Wang',
      service: 'Career Counseling Package',
      amount: 450,
      status: 'completed',
      method: 'Credit Card',
      date: '2024-08-01',
      transactionId: 'TXN-2024-005',
      sessionDate: '2024-08-10'
    }
  ];

  const stats = {
    totalRevenue: 15240,
    thisMonth: 3250,
    pendingPayments: 450,
    completedPayments: 2800,
    averageSessionValue: 142
  };

  const filteredPayments = payments.filter(payment => {
    const matchesStatus = selectedStatus === 'all' || payment.status === selectedStatus;
    return matchesStatus;
  });

  const getStatusBadge = (status) => {
    const statusStyles = {
      completed: 'bg-green-100 text-green-800',
      pending: 'bg-yellow-100 text-yellow-800',
      failed: 'bg-red-100 text-red-800',
      refunded: 'bg-gray-100 text-gray-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  return (
    <AdminLayout title="Payment Management">
      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-6">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Total Revenue</p>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(stats.totalRevenue)}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">💰</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">This Month</p>
              <p className="text-2xl font-bold text-blue-600">{formatCurrency(stats.thisMonth)}</p>
            </div>
            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📊</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Pending</p>
              <p className="text-2xl font-bold text-yellow-600">{formatCurrency(stats.pendingPayments)}</p>
            </div>
            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">⏳</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Completed</p>
              <p className="text-2xl font-bold text-green-600">{formatCurrency(stats.completedPayments)}</p>
            </div>
            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">✅</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Avg. Session</p>
              <p className="text-2xl font-bold text-purple-600">{formatCurrency(stats.averageSessionValue)}</p>
            </div>
            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
              <span className="text-2xl">📈</span>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Payments & Transactions</h2>
            <p className="text-gray-600">Track and manage all payment activities</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Export Report
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Process Refund
            </button>
          </div>
        </div>

        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
          >
            <option value="today">Today</option>
            <option value="this_week">This Week</option>
            <option value="this_month">This Month</option>
            <option value="last_month">Last Month</option>
            <option value="this_year">This Year</option>
            <option value="custom">Custom Range</option>
          </select>
          
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
            <option value="failed">Failed</option>
            <option value="refunded">Refunded</option>
          </select>

          <input
            type="text"
            placeholder="Search by client name or transaction ID..."
            className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Payments Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Transaction
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Client & Service
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Amount
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Payment Method
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Date
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPayments.map((payment) => (
                <tr key={payment.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{payment.transactionId}</div>
                      <div className="text-xs text-gray-500">
                        Session: {new Date(payment.sessionDate).toLocaleDateString()}
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div>
                      <div className="text-sm font-medium text-gray-900">{payment.client}</div>
                      <div className="text-sm text-gray-500">{payment.service}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">
                      {formatCurrency(payment.amount)}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="text-sm text-gray-900">{payment.method}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(payment.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(payment.date).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    {payment.status === 'completed' && (
                      <button className="text-red-600 hover:text-red-900">Refund</button>
                    )}
                    {payment.status === 'failed' && (
                      <button className="text-green-600 hover:text-green-900">Retry</button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredPayments.length === 0 && (
          <div className="text-center py-8">
            <span className="text-4xl mb-4 block">💳</span>
            <p className="text-gray-500">No payments found matching your criteria</p>
          </div>
        )}
      </div>

      {/* Payment Summary */}
      <div className="mt-6 bg-white rounded-xl shadow-sm p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Summary</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center p-4 bg-green-50 rounded-lg">
            <div className="text-2xl font-bold text-green-600">
              {filteredPayments.filter(p => p.status === 'completed').length}
            </div>
            <div className="text-sm text-gray-600">Completed Payments</div>
          </div>
          <div className="text-center p-4 bg-yellow-50 rounded-lg">
            <div className="text-2xl font-bold text-yellow-600">
              {filteredPayments.filter(p => p.status === 'pending').length}
            </div>
            <div className="text-sm text-gray-600">Pending Payments</div>
          </div>
          <div className="text-center p-4 bg-red-50 rounded-lg">
            <div className="text-2xl font-bold text-red-600">
              {filteredPayments.filter(p => p.status === 'failed').length}
            </div>
            <div className="text-sm text-gray-600">Failed Payments</div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Payments;
