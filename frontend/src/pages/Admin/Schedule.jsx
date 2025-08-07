import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const Schedule = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState('week'); // 'day', 'week', 'month'

  // Mock schedule data
  const appointments = [
    {
      id: 1,
      title: 'Career Counseling - Emily Chen',
      start: '2024-08-07T10:00:00',
      end: '2024-08-07T11:00:00',
      type: 'counseling',
      status: 'confirmed'
    },
    {
      id: 2,
      title: 'Interview Prep - Michael Rodriguez',
      start: '2024-08-07T14:30:00',
      end: '2024-08-07T16:00:00',
      type: 'interview',
      status: 'confirmed'
    },
    {
      id: 3,
      title: 'Resume Review - Sarah Johnson',
      start: '2024-08-07T16:00:00',
      end: '2024-08-07T16:45:00',
      type: 'resume',
      status: 'pending'
    },
    {
      id: 4,
      title: 'Career Assessment - David Park',
      start: '2024-08-08T09:00:00',
      end: '2024-08-08T10:30:00',
      type: 'assessment',
      status: 'confirmed'
    }
  ];

  const timeSlots = [
    '08:00', '09:00', '10:00', '11:00', '12:00', '13:00', 
    '14:00', '15:00', '16:00', '17:00', '18:00'
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  
  const getWeekDates = () => {
    const startOfWeek = new Date(currentDate);
    const day = startOfWeek.getDay();
    const diff = startOfWeek.getDate() - day + (day === 0 ? -6 : 1);
    startOfWeek.setDate(diff);
    
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });
  };

  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getAppointmentColor = (type) => {
    const colors = {
      counseling: 'bg-blue-500',
      interview: 'bg-green-500',
      resume: 'bg-purple-500',
      assessment: 'bg-orange-500'
    };
    return colors[type] || 'bg-gray-500';
  };

  const getTodaysAppointments = () => {
    const today = new Date().toDateString();
    return appointments.filter(apt => 
      new Date(apt.start).toDateString() === today
    );
  };

  const navigateWeek = (direction) => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + (direction * 7));
    setCurrentDate(newDate);
  };

  return (
    <AdminLayout title="Schedule Management">
      {/* Header Controls */}
      <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold text-gray-900">Schedule</h2>
            <p className="text-gray-600">Manage your appointments and availability</p>
          </div>
          <div className="flex items-center gap-3">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              New Appointment
            </button>
            <button className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
              Set Availability
            </button>
          </div>
        </div>

        {/* View Controls */}
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-2">
            <button
              onClick={() => navigateWeek(-1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h3 className="text-lg font-medium text-gray-900">
              {currentDate.toLocaleDateString('en-US', { 
                month: 'long', 
                year: 'numeric' 
              })}
            </h3>
            <button
              onClick={() => navigateWeek(1)}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          <div className="flex bg-gray-100 rounded-lg p-1">
            {['day', 'week', 'month'].map((viewType) => (
              <button
                key={viewType}
                onClick={() => setView(viewType)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  view === viewType
                    ? 'bg-white text-blue-600 shadow-sm'
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {viewType.charAt(0).toUpperCase() + viewType.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Main Calendar */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            {/* Week View */}
            {view === 'week' && (
              <div className="overflow-x-auto">
                <div className="min-w-full">
                  {/* Header with days */}
                  <div className="grid grid-cols-8 border-b border-gray-200">
                    <div className="p-4 border-r border-gray-200"></div>
                    {getWeekDates().map((date, index) => (
                      <div key={index} className="p-4 text-center border-r border-gray-200 last:border-r-0">
                        <div className="text-sm font-medium text-gray-900">
                          {weekDays[index]}
                        </div>
                        <div className="text-sm text-gray-600">
                          {formatDate(date)}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Time slots */}
                  {timeSlots.map((time) => (
                    <div key={time} className="grid grid-cols-8 border-b border-gray-200 last:border-b-0">
                      <div className="p-4 border-r border-gray-200 text-sm text-gray-500 font-medium">
                        {time}
                      </div>
                      {getWeekDates().map((date, dayIndex) => (
                        <div key={dayIndex} className="p-2 border-r border-gray-200 last:border-r-0 min-h-[60px] relative">
                          {appointments
                            .filter(apt => {
                              const aptDate = new Date(apt.start);
                              const aptTime = aptDate.getHours().toString().padStart(2, '0') + ':00';
                              return aptDate.toDateString() === date.toDateString() && aptTime === time;
                            })
                            .map(apt => (
                              <div
                                key={apt.id}
                                className={`absolute inset-x-1 top-1 p-1 rounded text-xs text-white ${getAppointmentColor(apt.type)}`}
                              >
                                <div className="font-medium truncate">
                                  {apt.title.split(' - ')[1]}
                                </div>
                                <div className="opacity-90 truncate">
                                  {apt.title.split(' - ')[0]}
                                </div>
                              </div>
                            ))
                          }
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Day/Month views placeholder */}
            {(view === 'day' || view === 'month') && (
              <div className="p-8 text-center">
                <span className="text-4xl mb-4 block">🚧</span>
                <p className="text-gray-500">{view.charAt(0).toUpperCase() + view.slice(1)} view coming soon</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          {/* Today's Appointments */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Today's Appointments</h3>
            <div className="space-y-3">
              {getTodaysAppointments().map((apt) => (
                <div key={apt.id} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-3 h-3 rounded-full mt-1 ${getAppointmentColor(apt.type)}`}></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {apt.title.split(' - ')[1]}
                    </p>
                    <p className="text-xs text-gray-600">
                      {new Date(apt.start).toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true 
                      })}
                    </p>
                    <p className="text-xs text-gray-500">
                      {apt.title.split(' - ')[0]}
                    </p>
                  </div>
                </div>
              ))}
              {getTodaysAppointments().length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">
                  No appointments today
                </p>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">This Week</h3>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Total Sessions</span>
                <span className="text-sm font-medium text-gray-900">12</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Confirmed</span>
                <span className="text-sm font-medium text-green-600">10</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Pending</span>
                <span className="text-sm font-medium text-yellow-600">2</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Available Slots</span>
                <span className="text-sm font-medium text-blue-600">8</span>
              </div>
            </div>
          </div>

          {/* Legend */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Session Types</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Career Counseling</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Interview Prep</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Resume Review</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="text-sm text-gray-700">Career Assessment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Schedule;
