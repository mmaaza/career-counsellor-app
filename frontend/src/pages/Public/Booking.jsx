import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import apiService from '../../services/api';

const Booking = () => {
  const [searchParams] = useSearchParams();
  const [currentStep, setCurrentStep] = useState(1); // Start from step 1 - service selection
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
        setCurrentStep(2); // Skip to step 2 if service is pre-selected
      }
    }
  }, [searchParams]);

  const services = [
    {
      id: 1,
      name: "One-on-One Career Counseling",
      duration: "60 minutes",
      price: 150,
      description: "Personalized career guidance and strategic planning session to help you navigate your professional journey.",
      features: [
        "Comprehensive career assessment",
        "Goal setting and action planning",
        "Industry insights and market analysis",
        "Personalized career roadmap",
        "Follow-up email summary",
        "Resource recommendations"
      ],
      icon: "👥",
      category: "Counseling"
    },
    {
      id: 2,
      name: "Quick Career Check-In",
      duration: "30 minutes",
      price: 85,
      description: "Brief consultation perfect for specific questions, quick guidance, or follow-up sessions.",
      features: [
        "Focused problem-solving",
        "Quick career advice",
        "Resume quick review",
        "Interview preparation tips",
        "Actionable next steps"
      ],
      icon: "⚡",
      category: "Counseling"
    },
    {
      id: 3,
      name: "Career Assessment & Planning",
      duration: "90 minutes",
      price: 200,
      description: "Comprehensive assessment using validated tools to identify your ideal career path and create a detailed plan.",
      features: [
        "Myers-Briggs Type Indicator (MBTI)",
        "Strong Interest Inventory",
        "Values and skills assessment",
        "Career exploration exercises",
        "Detailed written report",
        "90-day action plan"
      ],
      icon: "📊",
      category: "Assessment"
    },
    {
      id: 4,
      name: "Resume Review & Enhancement",
      duration: "45 minutes",
      price: 120,
      description: "Professional resume review and optimization to help you stand out in today's competitive job market.",
      features: [
        "Comprehensive resume analysis",
        "ATS optimization",
        "Content and formatting improvements",
        "Industry-specific keywords",
        "Cover letter guidance",
        "LinkedIn profile tips"
      ],
      icon: "📄",
      category: "Documents"
    },
    {
      id: 5,
      name: "Interview Preparation Session",
      duration: "90 minutes",
      price: 200,
      description: "Intensive interview coaching with mock interviews and personalized feedback to boost your confidence.",
      features: [
        "Mock interview practice",
        "Behavioral question preparation",
        "Salary negotiation strategies",
        "Body language coaching",
        "Industry-specific interview tips",
        "Post-interview follow-up guidance"
      ],
      icon: "🎯",
      category: "Interview"
    },
    {
      id: 6,
      name: "University & Major Guidance",
      duration: "75 minutes",
      price: 130,
      description: "Specialized guidance for students choosing universities, majors, and planning their academic journey.",
      features: [
        "University selection criteria",
        "Major exploration and matching",
        "Application strategy planning",
        "Scholarship and funding guidance",
        "Academic timeline planning",
        "Career pathway mapping"
      ],
      icon: "🎓",
      category: "Education"
    }
  ];

  const handleServiceSelect = (service) => {
    setSelectedService(service);
    setCurrentStep(2);
  };

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
      { number: 1, title: 'Choose Service', icon: '🛍️' },
      { number: 2, title: 'Date & Time', icon: '📅' },
      { number: 3, title: 'Information', icon: '📋' },
      { number: 4, title: 'Payment', icon: '💳' },
      { number: 5, title: 'Confirmation', icon: '✅' }
    ];

    return (
      <div className="flex justify-center mb-16">
        <div className="flex items-center space-x-4 bg-white rounded-xl shadow-lg px-8 py-6">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <div className={`flex flex-col items-center ${
                currentStep >= step.number ? 'text-blue-600' : 'text-gray-400'
              }`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold transition-all duration-200 ${
                  currentStep >= step.number 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-gray-100 text-gray-500'
                } ${currentStep === step.number ? 'ring-4 ring-blue-100' : ''}`}>
                  {currentStep > step.number ? '✓' : step.icon}
                </div>
                <span className={`mt-2 text-xs font-medium text-center leading-tight ${
                  currentStep >= step.number ? 'text-blue-600' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
              </div>
              {index < steps.length - 1 && (
                <div className={`w-12 h-1 rounded-full transition-all duration-200 ${
                  currentStep > step.number ? 'bg-blue-600' : 'bg-gray-200'
                }`}></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };

  const renderServiceSelection = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Your Service
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Select the service that best fits your career development needs. 
          Each session is personalized to help you achieve your professional goals.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service) => (
          <div
            key={service.id}
            onClick={() => handleServiceSelect(service)}
            className={`bg-white p-8 rounded-xl shadow-lg cursor-pointer hover:shadow-xl transition-all duration-200 border-2 ${
              selectedService?.id === service.id 
                ? 'border-blue-600 ring-2 ring-blue-100' 
                : 'border-gray-100 hover:border-blue-200'
            }`}
          >
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{service.icon}</span>
              </div>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full font-medium mb-3">
                {service.category}
              </span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
              {service.name}
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed text-center">
              {service.description}
            </p>
            <div className="space-y-2 mb-6">
              {service.features.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-center text-sm text-gray-600">
                  <span className="text-green-400 mr-2">✓</span>
                  {feature}
                </div>
              ))}
              {service.features.length > 3 && (
                <div className="text-sm text-gray-500 italic">
                  +{service.features.length - 3} more features
                </div>
              )}
            </div>
            <div className="border-t border-gray-100 pt-4">
              <div className="flex justify-between items-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">${service.price}</div>
                  <div className="text-gray-500 text-sm">{service.duration}</div>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200">
                  Select
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderDateTimeSelection = () => (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Service confirmation banner */}
      {!selectedService ? (
        <div className="max-w-2xl mx-auto">
          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-8">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                  No Service Selected
                </h3>
                <p className="text-yellow-700">
                  Please select a service from the previous step to continue with booking.
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
            <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600">✓</span>
              </span>
              Selected Service
            </h3>
            <div className="bg-white p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-xl font-semibold text-gray-900">{selectedService.name}</h4>
                  <p className="text-gray-600 mt-1">{selectedService.description}</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-blue-600">${selectedService.price}</div>
                  <div className="text-gray-500">{selectedService.duration}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Choose Date & Time
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Select your preferred appointment time. All sessions are conducted via secure video call 
          or in-person at our office.
        </p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Date Selection */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600">📅</span>
            </span>
            Available Dates
          </h3>
          <div className="bg-white rounded-xl p-6 shadow-lg">
            <div className="grid grid-cols-2 gap-3 max-h-96 overflow-y-auto">
              {availableDates.map((dateOption) => (
                <button
                  key={dateOption.date}
                  onClick={() => setSelectedDate(dateOption.date)}
                  className={`p-4 text-sm rounded-lg border-2 transition-all duration-200 font-medium ${
                    selectedDate === dateOption.date
                      ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                      : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                  }`}
                >
                  <div className="font-semibold">{dateOption.display.split(', ')[0]}</div>
                  <div className="text-xs opacity-90">{dateOption.display.split(', ')[1]}</div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Time Selection */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600">🕒</span>
            </span>
            Available Times
          </h3>
          {selectedDate ? (
            <div className="bg-white rounded-xl p-6 shadow-lg">
              {loading ? (
                <div className="text-center py-8">
                  <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent mx-auto"></div>
                  <p className="text-gray-500 mt-4 font-medium">Checking availability...</p>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-3 max-h-96 overflow-y-auto">
                  {availableSlots.length > 0 ? (
                    availableSlots.map((time) => (
                      <button
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`p-3 text-sm rounded-lg border-2 transition-all duration-200 font-medium ${
                          selectedTime === time
                            ? 'bg-blue-600 text-white border-blue-600 shadow-lg'
                            : 'bg-white text-gray-700 border-gray-200 hover:border-blue-300 hover:bg-blue-50'
                        }`}
                      >
                        {time}
                      </button>
                    ))
                  ) : (
                    <div className="col-span-3 text-center py-8">
                      <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <span className="text-2xl">📅</span>
                      </div>
                      <p className="text-gray-600 font-medium">No available time slots</p>
                      <p className="text-sm text-gray-500 mt-1">Please select another date</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <p className="text-gray-600 font-medium">Select a date first</p>
              <p className="text-sm text-gray-500 mt-1">Choose from the available dates on the left</p>
            </div>
          )}
        </div>
      </div>

      {selectedDate && selectedTime && (
        <div className="mt-12 text-center">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">✓</span>
              </div>
              <div className="text-left">
                <h4 className="text-lg font-semibold text-green-800">Time Slot Selected</h4>
                <p className="text-green-700">
                  {selectedDate} at {selectedTime}
                </p>
              </div>
            </div>
          </div>
          <button
            onClick={() => setCurrentStep(3)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Continue to Information
          </button>
        </div>
      )}
    </div>
  );

  const renderInformationForm = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Your Information
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Help us personalize your session by providing some basic information about yourself.
        </p>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-8">
        <form className="space-y-8">
          {/* Required Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600">📋</span>
              </span>
              Contact Information
              <span className="text-red-500 ml-2">*</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleFormChange}
                  required
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            <div className="mt-6">
              <label className="block text-sm font-semibold text-gray-700 mb-3">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleFormChange}
                required
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="(555) 123-4567"
              />
            </div>
          </div>

          {/* Optional Information */}
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
              <span className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-purple-600">📚</span>
              </span>
              Additional Information
              <span className="text-gray-500 text-sm font-normal ml-2">(Optional)</span>
            </h3>
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Educational Background
                </label>
                <select
                  name="educationalBackground"
                  value={formData.educationalBackground}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
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
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Preferred Language
                </label>
                <select
                  name="preferredLanguage"
                  value={formData.preferredLanguage}
                  onChange={handleFormChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
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
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Special Requests or Topics to Discuss
                </label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleFormChange}
                  rows={4}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="Any specific topics you'd like to focus on during the session, career challenges you're facing, or goals you want to achieve..."
                ></textarea>
              </div>
            </div>
          </div>
        </form>

        <div className="mt-12 text-center">
          <button
            onClick={() => setCurrentStep(4)}
            disabled={!formData.name || !formData.email || !formData.phone}
            className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );

  const renderPayment = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Payment & Confirmation
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
          Review your booking details and complete payment to secure your session.
        </p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="max-w-2xl mx-auto mb-8">
          <div className="bg-red-50 border border-red-200 rounded-xl p-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mr-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-red-800 mb-2">
                  Payment Error
                </h3>
                <p className="text-red-700">
                  {error}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Booking Summary */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600">📋</span>
            </span>
            Booking Summary
          </h3>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Service:</span>
                <span className="font-semibold text-gray-900">{selectedService.name}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Duration:</span>
                <span className="font-semibold text-gray-900">{selectedService.duration}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Date:</span>
                <span className="font-semibold text-gray-900">
                  {new Date(selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Time:</span>
                <span className="font-semibold text-gray-900">{selectedTime}</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100">
                <span className="text-gray-600 font-medium">Client:</span>
                <span className="font-semibold text-gray-900">{formData.name}</span>
              </div>
              <div className="flex justify-between items-center py-4 bg-blue-50 rounded-lg px-4">
                <span className="text-lg font-bold text-gray-900">Total Amount:</span>
                <span className="text-2xl font-bold text-blue-600">${selectedService.price}</span>
              </div>
            </div>
          </div>

          {/* Payment Security */}
          <div className="mt-6 bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600">🔒</span>
              </div>
              <span className="font-semibold text-green-800">Secure Payment</span>
            </div>
            <p className="text-sm text-green-700 leading-relaxed">
              All payments are processed securely using industry-standard encryption. 
              Your payment information is never stored on our servers.
            </p>
          </div>
        </div>

        {/* Payment Methods */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-green-600">💳</span>
            </span>
            Payment Method
          </h3>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="space-y-6">
              {/* Credit/Debit Cards */}
              <div className="border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 transition-colors duration-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-blue-600 mr-2">💳</span>
                  Credit/Debit Cards
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleBookingSubmit}
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      'Pay with Stripe'
                    )}
                  </button>
                  <button
                    onClick={handleBookingSubmit}
                    disabled={loading}
                    className="bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      'Pay with PayPal'
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Wallets */}
              <div className="border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 transition-colors duration-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-purple-600 mr-2">📱</span>
                  Mobile Wallets
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <button
                    onClick={handleBookingSubmit}
                    disabled={loading}
                    className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      'EasyPaisa'
                    )}
                  </button>
                  <button
                    onClick={handleBookingSubmit}
                    disabled={loading}
                    className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                  >
                    {loading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                        Processing...
                      </>
                    ) : (
                      'JazzCash'
                    )}
                  </button>
                </div>
              </div>

              {/* Bank Transfer */}
              <div className="border-2 border-gray-100 rounded-xl p-6 hover:border-blue-200 transition-colors duration-200">
                <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="text-green-600 mr-2">🏦</span>
                  Bank Transfer
                </h4>
                <button
                  onClick={handleBookingSubmit}
                  disabled={loading}
                  className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center"
                >
                  {loading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2"></div>
                      Processing...
                    </>
                  ) : (
                    'Direct Bank Transfer'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Terms */}
      <div className="mt-12 max-w-2xl mx-auto">
        <div className="bg-gray-50 rounded-xl p-6">
          <h4 className="font-semibold text-gray-900 mb-4 flex items-center">
            <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center mr-2 text-sm">ℹ️</span>
            Payment Terms & Conditions
          </h4>
          <ul className="text-sm text-gray-600 space-y-2 leading-relaxed">
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              Payment is required to confirm your booking
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              Full refund available if cancelled 24+ hours in advance
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              50% refund for cancellations within 24 hours
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2 mt-1">•</span>
              Rescheduling is free up to 2 hours before session
            </li>
          </ul>
        </div>
      </div>
    </div>
  );

  const renderConfirmation = () => (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <div className="bg-white rounded-xl shadow-lg p-12">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <span className="text-4xl">✅</span>
        </div>
        
        <h2 className="text-3xl font-bold text-gray-900 mb-6">
          Booking Confirmed!
        </h2>
        
        <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
          Your session has been successfully booked. You'll receive a confirmation email with your Google Meet link 
          and calendar invitation shortly.
        </p>

        <div className="bg-blue-50 border border-blue-100 rounded-xl p-8 mb-8">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center justify-center">
            <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <span className="text-blue-600">📋</span>
            </span>
            Session Details
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Service:</span>
                <span className="font-semibold text-gray-900">{selectedService.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Duration:</span>
                <span className="font-semibold text-gray-900">{selectedService.duration}</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Date:</span>
                <span className="font-semibold text-gray-900">
                  {new Date(selectedDate).toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium text-gray-600">Time:</span>
                <span className="font-semibold text-gray-900">{selectedTime}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 border border-green-200 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-green-600">📧</span>
              </span>
              <span className="font-semibold text-green-800">Check Your Email</span>
            </div>
            <p className="text-sm text-green-700">
              Confirmation email with Google Meet link and calendar invitation sent
            </p>
          </div>
          
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="flex items-center mb-3">
              <span className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <span className="text-blue-600">📞</span>
              </span>
              <span className="font-semibold text-blue-800">Reminder Call</span>
            </div>
            <p className="text-sm text-blue-700">
              You'll receive a reminder call 24 hours before your session
            </p>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              setCurrentStep(1);
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
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Book Another Session
          </button>
          <button
            onClick={() => window.location.href = '/'}
            className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
          >
            Return to Home
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Book Your 
            <span className="text-blue-600 block">Career Session</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Schedule your personalized career counseling session in just a few simple steps. 
            Get expert guidance tailored to your unique goals and aspirations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {renderStepIndicator()}

          <div className="mt-8">
            {currentStep === 1 && renderServiceSelection()}
            {currentStep === 2 && renderDateTimeSelection()}
            {currentStep === 3 && renderInformationForm()}
            {currentStep === 4 && renderPayment()}
            {currentStep === 5 && renderConfirmation()}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Booking;
