import { useState } from 'react';
import AdminLayout from '../../layouts/AdminLayout';

const Settings = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [profileData, setProfileData] = useState({
    name: 'Dr. Sarah Mitchell',
    email: 'sarah.mitchell@careercounsellor.com',
    phone: '+1 (555) 123-4567',
    bio: 'Experienced career counsellor with over 10 years of helping professionals achieve their career goals.',
    location: 'New York, NY',
    timezone: 'America/New_York'
  });

  const [businessSettings, setBusinessSettings] = useState({
    businessName: 'Career Guidance Pro',
    businessEmail: 'contact@careerguidancepro.com',
    businessPhone: '+1 (555) 987-6543',
    address: '123 Professional Ave, New York, NY 10001',
    website: 'www.careerguidancepro.com',
    taxId: '12-3456789'
  });

  const [availabilitySettings, setAvailabilitySettings] = useState({
    timezone: 'America/New_York',
    workingDays: ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'],
    workingHours: {
      start: '09:00',
      end: '17:00'
    },
    sessionDuration: 60,
    bufferTime: 15,
    advanceBooking: 7,
    cancellationPolicy: 24
  });

  const [notificationSettings, setNotificationSettings] = useState({
    newBookings: true,
    bookingReminders: true,
    cancellations: true,
    payments: true,
    reviews: false,
    marketing: false,
    emailNotifications: true,
    smsNotifications: false
  });

  const tabs = [
    { id: 'profile', name: 'Profile', icon: '👤' },
    { id: 'business', name: 'Business', icon: '🏢' },
    { id: 'availability', name: 'Availability', icon: '📅' },
    { id: 'notifications', name: 'Notifications', icon: '🔔' },
    { id: 'security', name: 'Security', icon: '🔒' },
    { id: 'billing', name: 'Billing', icon: '💳' }
  ];

  const handleSaveProfile = () => {
    // Handle save profile logic
    alert('Profile updated successfully!');
  };

  const handleSaveBusiness = () => {
    // Handle save business logic
    alert('Business settings updated successfully!');
  };

  const handleSaveAvailability = () => {
    // Handle save availability logic
    alert('Availability settings updated successfully!');
  };

  const handleSaveNotifications = () => {
    // Handle save notifications logic
    alert('Notification preferences updated successfully!');
  };

  return (
    <AdminLayout title="Settings">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Settings</h3>
            <nav className="space-y-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-100 text-blue-700'
                      : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="font-medium">{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6">
            {/* Profile Settings */}
            {activeTab === 'profile' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Profile Settings</h2>
                <div className="space-y-6">
                  <div className="flex items-center space-x-6">
                    <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center">
                      <span className="text-2xl">👤</span>
                    </div>
                    <div>
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                        Change Photo
                      </button>
                      <p className="text-sm text-gray-500 mt-1">JPG, PNG or GIF. Max size 2MB.</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                      <input
                        type="text"
                        value={profileData.name}
                        onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                      <input
                        type="email"
                        value={profileData.email}
                        onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                      <input
                        type="tel"
                        value={profileData.phone}
                        onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                      <input
                        type="text"
                        value={profileData.location}
                        onChange={(e) => setProfileData({...profileData, location: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Bio</label>
                    <textarea
                      rows={4}
                      value={profileData.bio}
                      onChange={(e) => setProfileData({...profileData, bio: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Tell your clients about your experience and expertise..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveProfile}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Business Settings */}
            {activeTab === 'business' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Business Settings</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Name</label>
                      <input
                        type="text"
                        value={businessSettings.businessName}
                        onChange={(e) => setBusinessSettings({...businessSettings, businessName: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Email</label>
                      <input
                        type="email"
                        value={businessSettings.businessEmail}
                        onChange={(e) => setBusinessSettings({...businessSettings, businessEmail: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Business Phone</label>
                      <input
                        type="tel"
                        value={businessSettings.businessPhone}
                        onChange={(e) => setBusinessSettings({...businessSettings, businessPhone: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Website</label>
                      <input
                        type="url"
                        value={businessSettings.website}
                        onChange={(e) => setBusinessSettings({...businessSettings, website: e.target.value})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Business Address</label>
                    <input
                      type="text"
                      value={businessSettings.address}
                      onChange={(e) => setBusinessSettings({...businessSettings, address: e.target.value})}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveBusiness}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Availability Settings */}
            {activeTab === 'availability' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Availability Settings</h2>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Default Session Duration</label>
                      <select
                        value={availabilitySettings.sessionDuration}
                        onChange={(e) => setAvailabilitySettings({...availabilitySettings, sessionDuration: parseInt(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value={30}>30 minutes</option>
                        <option value={45}>45 minutes</option>
                        <option value={60}>60 minutes</option>
                        <option value={90}>90 minutes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Buffer Time</label>
                      <select
                        value={availabilitySettings.bufferTime}
                        onChange={(e) => setAvailabilitySettings({...availabilitySettings, bufferTime: parseInt(e.target.value)})}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      >
                        <option value={0}>No buffer</option>
                        <option value={15}>15 minutes</option>
                        <option value={30}>30 minutes</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Start Time</label>
                      <input
                        type="time"
                        value={availabilitySettings.workingHours.start}
                        onChange={(e) => setAvailabilitySettings({
                          ...availabilitySettings,
                          workingHours: {...availabilitySettings.workingHours, start: e.target.value}
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">End Time</label>
                      <input
                        type="time"
                        value={availabilitySettings.workingHours.end}
                        onChange={(e) => setAvailabilitySettings({
                          ...availabilitySettings,
                          workingHours: {...availabilitySettings.workingHours, end: e.target.value}
                        })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">Working Days</label>
                    <div className="grid grid-cols-4 md:grid-cols-7 gap-2">
                      {['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'].map((day) => (
                        <label key={day} className="flex items-center space-x-2">
                          <input
                            type="checkbox"
                            checked={availabilitySettings.workingDays.includes(day)}
                            onChange={(e) => {
                              if (e.target.checked) {
                                setAvailabilitySettings({
                                  ...availabilitySettings,
                                  workingDays: [...availabilitySettings.workingDays, day]
                                });
                              } else {
                                setAvailabilitySettings({
                                  ...availabilitySettings,
                                  workingDays: availabilitySettings.workingDays.filter(d => d !== day)
                                });
                              }
                            }}
                            className="rounded text-blue-600 focus:ring-blue-500"
                          />
                          <span className="text-sm text-gray-700 capitalize">{day.slice(0, 3)}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveAvailability}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Notifications Settings */}
            {activeTab === 'notifications' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Notification Preferences</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Email Notifications</h3>
                    <div className="space-y-3">
                      {Object.entries(notificationSettings).filter(([key]) => key !== 'emailNotifications' && key !== 'smsNotifications').map(([key, value]) => (
                        <label key={key} className="flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium text-gray-700 capitalize">
                              {key.replace(/([A-Z])/g, ' $1').trim()}
                            </span>
                            <p className="text-xs text-gray-500">
                              {key === 'newBookings' && 'Get notified when new bookings are made'}
                              {key === 'bookingReminders' && 'Receive reminders before sessions'}
                              {key === 'cancellations' && 'Get notified about booking cancellations'}
                              {key === 'payments' && 'Receive payment confirmations and updates'}
                              {key === 'reviews' && 'Get notified about new reviews'}
                              {key === 'marketing' && 'Receive marketing and promotional emails'}
                            </p>
                          </div>
                          <input
                            type="checkbox"
                            checked={value}
                            onChange={(e) => setNotificationSettings({
                              ...notificationSettings,
                              [key]: e.target.checked
                            })}
                            className="rounded text-blue-600 focus:ring-blue-500"
                          />
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <button
                      onClick={handleSaveNotifications}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Security Settings */}
            {activeTab === 'security' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Security Settings</h2>
                <div className="space-y-6">
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <div className="flex">
                      <span className="text-yellow-400 text-xl mr-3">⚠️</span>
                      <div>
                        <h3 className="text-sm font-medium text-yellow-800">Security features coming soon</h3>
                        <p className="text-sm text-yellow-700 mt-1">
                          Two-factor authentication, password management, and session security will be available in the next update.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Billing Settings */}
            {activeTab === 'billing' && (
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-6">Billing Settings</h2>
                <div className="space-y-6">
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <div className="flex">
                      <span className="text-blue-400 text-xl mr-3">💳</span>
                      <div>
                        <h3 className="text-sm font-medium text-blue-800">Payment processing integration</h3>
                        <p className="text-sm text-blue-700 mt-1">
                          Stripe and PayPal integration for automated billing and payment processing will be available soon.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default Settings;
