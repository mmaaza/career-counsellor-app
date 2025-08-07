import { useState, useEffect } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');

  // Mock data for demonstration
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setStudents([
        {
          id: 1,
          name: 'Emily Chen',
          email: 'emily.chen@email.com',
          phone: '+1 (555) 123-4567',
          joinDate: '2024-01-15',
          status: 'active',
          totalSessions: 8,
          lastSession: '2024-08-05',
          programs: ['Career Counseling', 'Resume Review']
        },
        {
          id: 2,
          name: 'Michael Rodriguez',
          email: 'michael.r@email.com',
          phone: '+1 (555) 234-5678',
          joinDate: '2024-02-20',
          status: 'active',
          totalSessions: 12,
          lastSession: '2024-08-06',
          programs: ['Interview Coaching', 'Career Counseling']
        },
        {
          id: 3,
          name: 'Sarah Johnson',
          email: 'sarah.j@email.com',
          phone: '+1 (555) 345-6789',
          joinDate: '2023-11-08',
          status: 'inactive',
          totalSessions: 25,
          lastSession: '2024-07-15',
          programs: ['Career Counseling', 'Resume Review', 'Interview Coaching']
        },
        {
          id: 4,
          name: 'David Park',
          email: 'david.park@email.com',
          phone: '+1 (555) 456-7890',
          joinDate: '2024-03-10',
          status: 'active',
          totalSessions: 5,
          lastSession: '2024-08-04',
          programs: ['Resume Review']
        }
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = selectedStatus === 'all' || student.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status) => {
    const statusStyles = {
      active: 'bg-green-100 text-green-800',
      inactive: 'bg-gray-100 text-gray-800',
      pending: 'bg-yellow-100 text-yellow-800'
    };
    
    return (
      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  if (loading) {
    return (
      <AdminLayout title="Student Management">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
        </div>
      </AdminLayout>
    );
  }

  return (
    <AdminLayout title="Student Management">
      {/* Header with search and filters */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Students</h2>
            <p className="text-gray-600">Manage your client relationships</p>
          </div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Add New Student
          </button>
        </div>

        {/* Search and Filter Controls */}
        <div className="mt-6 flex flex-col sm:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              placeholder="Search students by name or email..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
          >
            <option value="all">All Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="pending">Pending</option>
          </select>
        </div>
      </div>

      {/* Students List */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Student
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Contact
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Sessions
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Programs
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Last Session
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredStudents.map((student) => (
                <tr key={student.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-medium text-blue-600">
                          {student.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{student.name}</div>
                        <div className="text-sm text-gray-500">Joined {new Date(student.joinDate).toLocaleDateString()}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{student.email}</div>
                    <div className="text-sm text-gray-500">{student.phone}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {getStatusBadge(student.status)}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {student.totalSessions}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {student.programs.slice(0, 2).map((program, index) => (
                        <span key={index} className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {program}
                        </span>
                      ))}
                      {student.programs.length > 2 && (
                        <span className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                          +{student.programs.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {new Date(student.lastSession).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-blue-600 hover:text-blue-900 mr-3">View</button>
                    <button className="text-green-600 hover:text-green-900 mr-3">Edit</button>
                    <button className="text-red-600 hover:text-red-900">Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredStudents.length === 0 && (
          <div className="text-center py-8">
            <span className="text-4xl mb-4 block">👥</span>
            <p className="text-gray-500">No students found matching your criteria</p>
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default Students;
