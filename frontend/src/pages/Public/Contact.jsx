import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    preferredContact: 'email'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after successful submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        preferredContact: 'email'
      });
      setSubmitStatus(null);
    }, 3000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email',
      value: 'sarah@careercounsellor.com',
      description: 'Send us an email anytime'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call during business hours'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      title: 'Location',
      value: 'New York, NY',
      description: 'Virtual & in-person sessions'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Business Hours',
      value: 'Mon-Fri: 9AM-6PM',
      description: 'Weekend by appointment'
    }
  ];

  const faqs = [
    {
      question: 'How long does a typical session last?',
      answer: 'Most sessions are 60-90 minutes, depending on the service. Initial consultations are typically 90 minutes to allow for comprehensive assessment.'
    },
    {
      question: 'Do you offer virtual sessions?',
      answer: 'Yes! I offer both virtual and in-person sessions. Virtual sessions are conducted via secure video conferencing platforms.'
    },
    {
      question: 'What should I prepare for my first session?',
      answer: 'Bring your resume, any career assessments you\'ve taken, and come prepared to discuss your career goals, challenges, and aspirations.'
    },
    {
      question: 'How quickly can I expect to see results?',
      answer: 'While every situation is unique, most clients start seeing clarity and direction within 2-3 sessions. Complete career transitions typically take 3-6 months.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/20 to-transparent"></div>
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-8 backdrop-blur-sm">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Let's Start Your 
            <span className="block text-blue-200">Success Story</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your career? I'm here to guide you every step of the way. 
            From career transitions to interview mastery, let's unlock your professional potential together.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/booking'}
              className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-full hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Book Free Consultation
            </button>
            <button 
              onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 -mt-10 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-8 text-center shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-100 group"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6 text-white shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110">
                  {info.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">{info.title}</h3>
                <p className="text-blue-600 font-semibold mb-2 text-lg">{info.value}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Sidebar */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-3xl mb-8 shadow-lg">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Ready to Transform
              <span className="block text-blue-600">Your Career?</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Choose how you'd like to connect. Every successful career journey begins with a single conversation. 
              Let's discuss your goals and create a roadmap for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 xl:grid-cols-5 gap-12">
            {/* Contact Form */}
            <div className="xl:col-span-3">
              <div className="bg-white rounded-3xl shadow-2xl p-12 border border-gray-100 relative overflow-hidden" id="contact-form">
                {/* Background decoration */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-20 translate-x-20"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-50 to-transparent rounded-full translate-y-16 -translate-x-16"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-10">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-gray-900 mb-1">Send a Message</h3>
                      <p className="text-gray-600 text-lg">I'll respond within 24 hours</p>
                    </div>
                  </div>
                
                  {submitStatus === 'success' && (
                    <div className="mb-10 p-8 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-200 rounded-2xl relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-24 h-24 bg-green-100 rounded-full -translate-y-12 translate-x-12 opacity-50"></div>
                      <div className="relative flex items-center">
                        <div className="w-12 h-12 bg-green-500 rounded-2xl flex items-center justify-center mr-5 shadow-lg">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-green-800 font-bold text-xl">Message sent successfully!</span>
                          <p className="text-green-700 text-lg">I'll get back to you within 24 hours with a personalized response.</p>
                        </div>
                      </div>
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="name" className="block text-lg font-bold text-gray-800 mb-4">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-lg bg-gray-50 hover:bg-white"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-lg font-bold text-gray-800 mb-4">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-lg bg-gray-50 hover:bg-white"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <label htmlFor="phone" className="block text-lg font-bold text-gray-800 mb-4">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-lg bg-gray-50 hover:bg-white"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                      <div>
                        <label htmlFor="preferredContact" className="block text-lg font-bold text-gray-800 mb-4">
                          Preferred Contact Method
                        </label>
                        <select
                          id="preferredContact"
                          name="preferredContact"
                          value={formData.preferredContact}
                          onChange={handleChange}
                          className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-lg bg-gray-50 hover:bg-white"
                        >
                          <option value="email">Email</option>
                          <option value="phone">Phone</option>
                          <option value="either">Either</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-lg font-bold text-gray-800 mb-4">
                        What can I help you with? *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 text-lg bg-gray-50 hover:bg-white"
                      >
                        <option value="">Select a topic...</option>
                        <option value="consultation">🆓 Schedule a Free Consultation</option>
                        <option value="services">❓ Questions about Services</option>
                        <option value="pricing">💰 Pricing Information</option>
                        <option value="career-change">🔄 Career Change Guidance</option>
                        <option value="resume-review">📄 Resume Review</option>
                        <option value="interview-prep">🎯 Interview Preparation</option>
                        <option value="other">💬 Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-lg font-bold text-gray-800 mb-4">
                        Tell me about your goals *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-6 py-5 border-2 border-gray-200 rounded-2xl focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300 resize-none text-lg bg-gray-50 hover:bg-white"
                        placeholder="Share your career goals, challenges you're facing, or any questions you have. The more details you provide, the better I can help you..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 hover:from-blue-700 hover:via-blue-800 hover:to-blue-900 disabled:opacity-50 text-white font-bold py-6 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center text-xl relative overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-7 w-7 border-b-2 border-white mr-4"></div>
                          Sending Your Message...
                        </>
                      ) : (
                        <>
                          <svg className="w-7 h-7 mr-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                          </svg>
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="xl:col-span-2 space-y-8">
              {/* Quick Actions */}
              <div className="bg-gradient-to-br from-blue-600 to-blue-800 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-10">
                    <div className="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <h3 className="text-3xl font-bold mb-3">Quick Actions</h3>
                    <p className="text-blue-100 text-lg">Choose your preferred way to connect</p>
                  </div>
                  
                  <div className="space-y-5">
                    <button 
                      onClick={() => window.location.href = '/booking'}
                      className="w-full bg-white text-blue-600 font-bold py-5 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center text-lg group"
                    >
                      <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book Free Consultation
                    </button>
                    <button 
                      onClick={() => window.location.href = '/services'}
                      className="w-full border-2 border-white text-white hover:bg-white hover:text-blue-600 font-bold py-5 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg group"
                    >
                      <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                      </svg>
                      Explore Services
                    </button>
                    <a 
                      href="mailto:sarah@careercounsellor.com"
                      className="w-full border-2 border-blue-300 text-blue-100 hover:bg-blue-300 hover:text-blue-800 font-bold py-5 px-6 rounded-2xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center text-lg group"
                    >
                      <svg className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      Quick Email
                    </a>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-3xl shadow-2xl p-10 border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-28 h-28 bg-gray-50 rounded-full -translate-y-14 translate-x-14"></div>
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-600 to-gray-800 rounded-3xl flex items-center justify-center mx-auto mb-6">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Location & Hours</h3>
                    <p className="text-gray-600">Where and when to find me</p>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-2xl p-6 text-center">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">📍 New York City</h4>
                      <p className="text-gray-600">Virtual & in-person sessions available</p>
                    </div>
                    
                    <div className="bg-gray-50 rounded-2xl p-6 text-center">
                      <h4 className="font-bold text-gray-900 mb-2 text-lg">🕒 Business Hours</h4>
                      <p className="text-gray-600">Monday - Friday: 9AM - 6PM</p>
                      <p className="text-gray-600">Weekend: By appointment</p>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-6 text-center border border-blue-200">
                      <div className="w-12 h-12 bg-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <h4 className="text-blue-800 font-bold text-lg mb-2">100% Virtual Options</h4>
                      <p className="text-blue-700">Meet from anywhere in the world</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-3xl shadow-2xl p-10 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
                
                <div className="relative z-10">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">Why Choose Me?</h3>
                    <p className="text-green-100">Your success is my mission</p>
                  </div>
                  
                  <div className="space-y-5">
                    <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-white font-medium">15+ years experience</p>
                    </div>
                    <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-white font-medium">500+ successful career transitions</p>
                    </div>
                    <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-white font-medium">Certified career counselor</p>
                    </div>
                    <div className="flex items-center bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                      <div className="w-3 h-3 bg-white rounded-full mr-4 flex-shrink-0"></div>
                      <p className="text-white font-medium">24-hour response guarantee</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Common Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to know about career counseling and my approach to helping you succeed
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">Q</span>
                  </div>
                  <h3 className="font-bold text-gray-900 text-lg leading-tight">{faq.question}</h3>
                </div>
                <div className="ml-14">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-16">
            <div className="bg-white rounded-3xl shadow-2xl p-10 border border-blue-100 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-8">
                Don't see your question here? I'm always happy to chat about your specific situation and how I can help.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.location.href = '/booking'}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold px-8 py-4 rounded-xl hover:from-blue-700 hover:to-blue-800 transition-all duration-300 transform hover:scale-105"
                >
                  Book Free Call
                </button>
                <button 
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-blue-600 text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Ask Question
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
