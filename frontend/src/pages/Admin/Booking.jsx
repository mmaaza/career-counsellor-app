import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import apiService from '../../services/api';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(2); // Start from step 2 now
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [availableSlots, setAvailableSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    educationalBackground: '',
    preferredLanguage: 'English',
    specialRequests: ''
  });

  // Service data for when coming from Services page
  useEffect(() => {
    // Check URL params for selected service
    const serviceId = searchParams.get('service');
    
    if (serviceId) {
      const service = services.find(s => s.id === parseInt(serviceId));
      if (service) {
        setSelectedService(service);
      }
    }
    
    // If no service selected and no URL param, set default or show warning
    if (!serviceId) {
      // Could redirect to services page or set a default service
      console.warn('No service selected. User should select a service first.');
    }
  }, [searchParams]);

  const services = [
    {
      id: 1,
      name: "One-on-One Career Counseling",
      duration: "60 minutes",
      price: 150,
      description: "Personalized career guidance session"
    },
    {
      id: 2,
      name: "Quick Career Check-In",
      duration: "30 minutes",
      price: 85,
      description: "Brief focused session for specific questions"
    },
    {
      id: 3,
      name: "Resume Review & Enhancement",
      duration: "45 minutes",
      price: 120,
      description: "Comprehensive resume optimization"
    },
    {
      id: 4,
      name: "Interview Preparation Session",
      duration: "90 minutes",
      price: 200,
      description: "Mock interviews and preparation"
    },
    {
      id: 5,
      name: "University & Major Guidance",
      duration: "75 minutes",
      price: 130,
      description: "Academic planning and university selection"
    }
  ];

  // Generate available time slots
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 17; hour++) {
      for (let minute of [0, 30]) {
        if (hour === 17 && minute === 30) break;
        const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        slots.push(time);
      }
    }
    return slots;
  };

  // Generate next 30 days (excluding weekends)
  const generateAvailableDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 30; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      
      // Skip weekends
      if (date.getDay() !== 0 && date.getDay() !== 6) {
        dates.push({
          date: date.toISOString().split('T')[0],
          display: date.toLocaleDateString('en-US', { 
            weekday: 'short', 
            month: 'short', 
            day: 'numeric' 
          })
        });
      }
    }
    return dates;
  };

  const availableDates = generateAvailableDates();
  const timeSlots = generateTimeSlots();

  // Check availability when date is selected
  useEffect(() => {
    if (selectedDate) {
      checkAvailability(selectedDate);
    }
  }, [selectedDate]);

  const checkAvailability = async (date) => {
    try {
      setLoading(true);
      const response = await apiService.checkAvailability(date);
      setAvailableSlots(response.data.availableSlots);
      setError('');
    } catch (error) {
      console.error('Error checking availability:', error);
      setError('Failed to check availability. Please try again.');
      setAvailableSlots(timeSlots); // Fallback to all slots
    } finally {
      setLoading(false);
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleBookingSubmit = async () => {
    try {
      setLoading(true);
      setError('');

      // Prepare booking data
      const bookingData = {
        serviceId: selectedService.id,
        serviceName: selectedService.name,
        serviceDuration: selectedService.duration,
        servicePrice: selectedService.price,
        appointmentDate: selectedDate,
        appointmentTime: selectedTime,
        clientInfo: formData
      };

      // Submit booking to backend
      const response = await apiService.createBooking(bookingData);

      if (response.success) {
        // Move to confirmation step
        setCurrentStep(5);
        setError('');
      } else {
        throw new Error(response.message || 'Failed to create booking');
      }

    } catch (error) {
      console.error('Error creating booking:', error);
      setError(error.message || 'Failed to create booking. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const renderStepIndicator = () => {
    const steps = [
      { number: 2, title: 'Choose Date & Time' },
      { number: 3, title: 'Your Information' },
      { number: 4, title: 'Payment' },
      { number: 5, title: 'Confirmation' }
    ];

    return (
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className={`flex items-center ${
                currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
              }`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                  currentStep >= step.number 
                    ? 'bg-gray-900 text-white' 
                    : 'bg-gray-200 text-gray-600'
                }`}>
                  {currentStep > step.number ? '✓' : step.number}
                </div>
                <span className="ml-2 text-sm font-medium hidden sm:block">
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-8 h-0.5 ${
                  currentStep > step.number ? 'bg-gray-900' : 'bg-gray-200'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  const renderServiceSelection = () => (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Select a Service
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceSelect(service)}
            className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer hover:border-gray-900 hover:shadow-md transition-all duration-200"
          >
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              {service.name}
            </h3>
            <p className="text-gray-600 text-sm mb-4">{service.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-gray-900 font-bold text-xl">${service.price}</span>
              <span className="text-gray-500 text-sm">{service.duration}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDateTimeSelection = () => (
    <div className="max-w-4xl mx-auto">
      {/* Service confirmation banner */}
      {!selectedService ? (
        <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-yellow-400">⚠️</span>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-yellow-800">
                No Service Selected
              </h3>
              <div className="mt-2 text-sm text-yellow-700">
                Please select a service from the Services page first.
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Selected Service:</h3>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-medium text-gray-900">{selectedService.name}</h4>
            <p className="text-gray-700 text-sm">{selectedService.duration} • ${selectedService.price}</p>
          </div>
        </div>
      )}

      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Choose Date & Time
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Date Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Dates</h3>
          <div className="grid grid-cols-2 gap-2 max-h-96 overflow-y-auto">
            {availableDates.map((dateOption) => (
              <button
                key={dateOption.date}
                onClick={() => setSelectedDate(dateOption.date)}
                className={`p-3 text-sm rounded-lg border transition-colors duration-200 ${
                  selectedDate === dateOption.date
                    ? 'bg-gray-900 text-white border-gray-900'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                }`}
              >
                {dateOption.display}
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Available Times</h3>
          {selectedDate ? (
            <div>
              {loading ? (
                <div className="text-center py-4">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900 mx-auto"></div>
                  <p className="text-gray-500 mt-2">Checking availability...</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-2 max-h-96 overflow-y-auto">
                  {availableSlots.length > 0 ? (
                    availableSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-2 text-sm rounded-lg border transition-colors duration-200 ${
                          selectedTime === time
                            ? 'bg-gray-900 text-white border-gray-900'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-gray-400'
                        }`}
                      >
                        {time}
                      </button>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-4">
                      <p className="text-gray-500">No available time slots for this date</p>
                      <p className="text-sm text-gray-400">Please select another date</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <p className="text-gray-500 italic">Please select a date first</p>
          )}
        </div>
      </div>

      {selectedDate && selectedTime && (
        <div className="mt-8 text-center">
          <button
            onClick={() => setCurrentStep(3)}
            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Continue to Information
          </button>
        </div>
      )}
    </div>
  );

  const renderInformationForm = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Your Information
      </h2>
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <form className="space-y-6">
          {/* Required Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information *</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Optional Information */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Additional Information (Optional)</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Educational Background
                </label>
                <select
                  name="educationalBackground"
                  value={formData.educationalBackground}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200"
                >
                  <option value="">Select your education level</option>
                  <option value="high-school">High School</option>
                  <option value="some-college">Some College</option>
                  <option value="associate">Associate Degree</option>
                  <option value="bachelor">Bachelor's Degree</option>
                  <option value="master">Master's Degree</option>
                  <option value="doctorate">Doctorate</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Preferred Language
                </label>
                <select
                  name="preferredLanguage"
                  value={formData.preferredLanguage}
                  onChange={handleFormChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200"
                >
                  <option value="English">English</option>
                  <option value="Spanish">Spanish</option>
                  <option value="French">French</option>
                  <option value="German">German</option>
                  <option value="Chinese">Chinese</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Special Requests or Topics to Discuss
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleFormChange}
                  rows={3}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-gray-500 transition-colors duration-200"
                  placeholder="Any specific topics you'd like to focus on during the session..."
                ></textarea>
              </div>
            </div>
          </div>
        </form>

        <div className="mt-8 text-center">
          <button
            onClick={() => setCurrentStep(4)}
            disabled={!formData.name || !formData.email || !formData.phone}
            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
        Payment & Confirmation
      </h2>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <span className="text-red-400">⚠️</span>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-red-800">
                Error
              </h3>
              <div className="mt-2 text-sm text-red-700">
                {error}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Booking Summary */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Booking Summary</h3>
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-medium">{selectedService.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Duration:</span>
            <span className="font-medium">{selectedService.duration}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Date:</span>
            <span className="font-medium">
              {new Date(selectedDate).toLocaleDateString('en-US', { 
                weekday: 'long', 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Time:</span>
            <span className="font-medium">{selectedTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Client:</span>
            <span className="font-medium">{formData.name}</span>
          </div>
          <hr className="my-3" />
          <div className="flex justify-between text-lg font-bold">
            <span>Total:</span>
            <span className="text-gray-900">${selectedService.price}</span>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-6">Choose Payment Method</h3>
        
        <div className="space-y-4">
          {/* Credit/Debit Cards */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Credit/Debit Cards</h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleBookingSubmit}
                disabled={loading}
                className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  'Stripe'
                )}
              </button>
              <button
                onClick={handleBookingSubmit}
                disabled={loading}
                className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  'PayPal'
                )}
              </button>
            </div>
          </div>

          {/* Mobile Wallets */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Mobile Wallets</h4>
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={handleBookingSubmit}
                disabled={loading}
                className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  'EasyPaisa'
                )}
              </button>
              <button
                onClick={handleBookingSubmit}
                disabled={loading}
                className="bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
              >
                {loading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                    Processing...
                  </>
                ) : (
                  'JazzCash'
                )}
              </button>
            </div>
          </div>

          {/* Bank Transfer */}
          <div className="border border-gray-200 rounded-lg p-4">
            <h4 className="font-medium text-gray-900 mb-3">Bank Transfer</h4>
            <button
              onClick={handleBookingSubmit}
              disabled={loading}
              className="w-full bg-gray-900 hover:bg-gray-800 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
            >
              {loading ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                'Direct Bank Transfer'
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Payment Security */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 mb-6">
        <div className="flex items-center mb-2">
          <svg className="w-5 h-5 text-gray-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
          <span className="font-medium text-gray-800">Secure Payment</span>
        </div>
        <p className="text-sm text-gray-600">
          All payments are processed securely using industry-standard encryption. 
          Your payment information is never stored on our servers.
        </p>
      </div>

      {/* Payment Terms */}
      <div className="bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Payment Terms</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Payment is required to confirm your booking</li>
          <li>• Full refund available if cancelled 24+ hours in advance</li>
          <li>• 50% refund for cancellations within 24 hours</li>
          <li>• Rescheduling is free up to 2 hours before session</li>
        </ul>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="max-w-2xl mx-auto text-center">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <span className="text-3xl">✅</span>
        </div>
        
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Booking Confirmed!
        </h2>
        
        <p className="text-gray-600 mb-6">
          Your session has been successfully booked. You'll receive a confirmation email with your Google Meet link shortly.
        </p>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="font-semibold text-gray-900 mb-3">Session Details:</h3>
          <div className="text-left space-y-2">
            <p><strong>Service:</strong> {selectedService.name}</p>
            <p><strong>Date:</strong> {new Date(selectedDate).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p><strong>Time:</strong> {selectedTime}</p>
            <p><strong>Duration:</strong> {selectedService.duration}</p>
          </div>
        </div>

        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            📧 Check your email for the Google Meet link and calendar invitation
          </p>
          <p className="text-sm text-gray-600">
            📞 You'll receive a reminder call 24 hours before your session
          </p>
          
          <button
            onClick={() => {
              setCurrentStep(2);
              setSelectedService(null);
              setSelectedDate('');
              setSelectedTime('');
              setFormData({
                name: '',
                email: '',
                phone: '',
                educationalBackground: '',
                preferredLanguage: 'English',
                specialRequests: ''
              });
            }}
            className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
          >
            Book Another Session
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Book Your Session
          </h1>
          <p className="text-xl text-gray-600">
            Schedule your personalized career counseling session in just a few steps
          </p>
        </div>

        {renderStepIndicator()}

        <div className="mt-8">
          {currentStep === 2 && renderDateTimeSelection()}
          {currentStep === 3 && renderInformationForm()}
          {currentStep === 4 && renderPayment()}
          {currentStep === 5 && renderConfirmation()}
        </div>
      </div>
    </div>
  );
};

export default Booking;
