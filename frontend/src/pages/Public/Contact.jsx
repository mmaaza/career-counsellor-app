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
      icon: '📧',
      title: 'Email',
      value: 'sarah@careercounsellor.com',
      description: 'Send us an email anytime'
    },
    {
      icon: '📞',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      description: 'Call during business hours'
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'New York, NY',
      description: 'Virtual & in-person sessions'
    },
    {
      icon: '🕒',
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
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Let's Start Your 
                <span className="text-blue-600 block">Success Story</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ready to transform your career? I'm here to guide you every step of the way. 
                From career transitions to interview mastery, let's unlock your professional potential together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => window.location.href = '/booking'}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
                >
                  Schedule Consultation
                </button>
                <button 
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white font-semibold px-8 py-4 rounded-lg transition-colors"
                >
                  Send Message
                </button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-6xl">💬</span>
                      </div>
                      <p className="text-2xl font-bold">Let's Connect</p>
                      <p className="text-lg opacity-90">Ready to Help You Succeed</p>
                    </div>
                  </div>
                </div>
                {/* Floating achievement badges */}
                <div className="absolute -top-6 -right-6 bg-green-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  24hr Response
                </div>
                <div className="absolute -bottom-6 -left-6 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  Free Consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Get In Touch</h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Choose the most convenient way to reach out. I'm here to help with any questions about your career journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((info, index) => (
              <div 
                key={index} 
                className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 text-center border border-gray-100"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">{info.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{info.title}</h3>
                <p className="text-blue-600 font-medium mb-2 text-lg">{info.value}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Sidebar */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Ready to Transform
              <span className="block text-blue-600">Your Career?</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Every successful career journey begins with a single conversation. 
              Let's discuss your goals and create a roadmap for your success.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8" id="contact-form">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-blue-600 text-xl">📝</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">Send a Message</h3>
                    <p className="text-gray-600">I'll respond within 24 hours</p>
                  </div>
                </div>
                
                {submitStatus === 'success' && (
                  <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-xl">
                    <div className="flex items-center">
                      <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                        <span className="text-green-600">✓</span>
                      </div>
                      <div>
                        <span className="text-green-800 font-semibold text-lg">Message sent successfully!</span>
                        <p className="text-green-700">I'll get back to you within 24 hours with a personalized response.</p>
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-3">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-3">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-3">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label htmlFor="preferredContact" className="block text-sm font-semibold text-gray-700 mb-3">
                        Preferred Contact Method
                      </label>
                      <select
                        id="preferredContact"
                        name="preferredContact"
                        value={formData.preferredContact}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                      >
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                        <option value="either">Either</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-3">
                      What can I help you with? *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
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
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-3">
                      Tell me about your goals *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                      placeholder="Share your career goals, challenges you're facing, or any questions you have. The more details you provide, the better I can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white font-semibold py-4 px-8 rounded-lg transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent inline-block mr-3"></div>
                        Sending Your Message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-8">
                {/* Quick Actions Card */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-blue-600 text-xl">⚡</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Quick Actions</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <a 
                      href="/booking" 
                      className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg transition-colors duration-200 font-semibold"
                    >
                      📅 Book Session
                    </a>
                    <a 
                      href="/services" 
                      className="block w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 text-center py-3 px-6 rounded-lg transition-colors duration-200 font-semibold"
                    >
                      📋 View Services
                    </a>
                  </div>
                </div>

                {/* Response Time Card */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-green-600 text-xl">⏰</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Response Time</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-3">📧</span>
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <p className="text-gray-600">Within 24 hours</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-blue-600 mr-3">📱</span>
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <p className="text-gray-600">Same business day</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-600 mr-3">🚀</span>
                      <div>
                        <p className="font-semibold text-gray-900">Urgent</p>
                        <p className="text-gray-600">Within 2 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Office Hours Card */}
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                      <span className="text-purple-600 text-xl">🕒</span>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">Office Hours</h3>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-700">Monday - Friday</span>
                      <span className="font-semibold text-gray-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Saturday</span>
                      <span className="font-semibold text-gray-900">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-700">Sunday</span>
                      <span className="font-semibold text-gray-900">Closed</span>
                    </div>
                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                      <p className="text-sm text-blue-700">
                        <strong>Note:</strong> Emergency consultations available outside regular hours
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get answers to common questions about career counseling and my services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 border border-gray-200 hover:shadow-xl transition-shadow duration-200">
                <div className="flex items-start mb-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-blue-600 font-bold text-lg">Q</span>
                  </div>
                  <h3 className="font-semibold text-gray-900 text-lg leading-tight">{faq.question}</h3>
                </div>
                <div className="ml-14">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Additional CTA */}
          <div className="text-center mt-12">
            <div className="bg-gray-50 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
              <p className="text-gray-600 mb-6">
                Don't see your question here? I'm always happy to chat about your specific situation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="/booking"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
                >
                  Book Free Call
                </a>
                <button 
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
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
