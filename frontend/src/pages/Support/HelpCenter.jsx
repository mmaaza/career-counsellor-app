import { useState } from 'react';
import { Link } from 'react-router-dom';

const HelpCenter = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [openFAQ, setOpenFAQ] = useState(null);

  const categories = [
    { id: 'general', label: 'General Questions', icon: '❓' },
    { id: 'booking', label: 'Booking & Scheduling', icon: '📅' },
    { id: 'payment', label: 'Payment & Pricing', icon: '💳' },
    { id: 'sessions', label: 'Session Information', icon: '🎯' },
    { id: 'technical', label: 'Technical Support', icon: '🔧' }
  ];

  const faqData = {
    general: [
      {
        id: 1,
        question: "What is career counseling and how can it help me?",
        answer: "Career counseling is a professional service that helps you discover your strengths, interests, and values to make informed career decisions. Our sessions include career assessments, goal setting, job search strategies, and ongoing support to help you achieve your professional objectives."
      },
      {
        id: 2,
        question: "Who is Dr. Sarah Johnson?",
        answer: "Dr. Sarah Johnson is a licensed professional counselor with over 10 years of experience in career development. She holds a Ph.D. in Counseling Psychology from UC Berkeley and is certified as a Career Development Facilitator (CDF) and Professional Life Coach."
      },
      {
        id: 3,
        question: "What types of services do you offer?",
        answer: "We offer one-on-one career counseling, career assessments, resume reviews, interview preparation, skills development planning, and specialized workshops. All services are tailored to your specific needs and career goals."
      },
      {
        id: 4,
        question: "How long does the career counseling process take?",
        answer: "The duration varies based on your individual needs and goals. Some clients see significant progress in 3-4 sessions, while others prefer ongoing support over several months. We'll work together to create a timeline that fits your situation."
      },
      {
        id: 5,
        question: "Is career counseling confidential?",
        answer: "Yes, absolutely. All our sessions are completely confidential and follow professional counseling ethics. Your personal information and session content will never be shared without your explicit consent."
      }
    ],
    booking: [
      {
        id: 6,
        question: "How do I schedule an appointment?",
        answer: "You can schedule an appointment through our online booking system by clicking 'Book a Session' on our website. Select your preferred service, date, and time, then complete the booking form with your information."
      },
      {
        id: 7,
        question: "How far in advance should I book?",
        answer: "We recommend booking at least 1-2 weeks in advance to ensure availability. However, we often have same-week appointments available. Check our booking calendar for the most current availability."
      },
      {
        id: 8,
        question: "Can I reschedule or cancel my appointment?",
        answer: "Yes, you can reschedule or cancel your appointment up to 24 hours before your scheduled time without any penalty. Please contact us as soon as possible if you need to make changes."
      },
      {
        id: 9,
        question: "What if I'm running late to my appointment?",
        answer: "Please call or text us immediately if you're running late. We can accommodate delays of up to 15 minutes, but this may shorten your session time. For delays longer than 15 minutes, we may need to reschedule."
      },
      {
        id: 10,
        question: "Do you offer weekend or evening appointments?",
        answer: "Yes, we offer flexible scheduling including evening appointments on weekdays and limited weekend availability. Check our booking calendar for available times outside standard business hours."
      }
    ],
    payment: [
      {
        id: 11,
        question: "What are your session rates?",
        answer: "Our rates vary by service: One-on-One Career Counseling (60 min) - $150, Quick Career Check-In (30 min) - $85, Career Assessment & Planning (90 min) - $200, Resume Review & Feedback (45 min) - $100."
      },
      {
        id: 12,
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, and bank transfers. Payment is processed securely through our encrypted payment system."
      },
      {
        id: 13,
        question: "When do I need to pay?",
        answer: "Payment is required at the time of booking to secure your appointment. You'll receive a confirmation email with your receipt and appointment details once payment is processed."
      },
      {
        id: 14,
        question: "Do you offer refunds?",
        answer: "Yes, we offer full refunds for cancellations made at least 24 hours before your appointment. Cancellations made less than 24 hours in advance are subject to a 50% cancellation fee."
      },
      {
        id: 15,
        question: "Do you accept insurance?",
        answer: "While we don't directly bill insurance companies, we can provide you with a detailed receipt that you may submit to your insurance provider for potential reimbursement. Check with your insurance company about coverage for counseling services."
      }
    ],
    sessions: [
      {
        id: 16,
        question: "What should I expect in my first session?",
        answer: "Your first session will focus on understanding your background, current situation, and goals. We'll discuss your career history, challenges, and aspirations. This helps create a personalized plan for our future sessions."
      },
      {
        id: 17,
        question: "How should I prepare for a session?",
        answer: "Come with an open mind and any specific questions or concerns. It's helpful to bring your current resume, think about your career goals, and consider any challenges you're facing. We'll guide you through the rest."
      },
      {
        id: 18,
        question: "Are sessions conducted in-person or online?",
        answer: "We offer both in-person and virtual sessions via secure video conferencing. You can choose your preference during booking. Virtual sessions are just as effective and offer greater flexibility."
      },
      {
        id: 19,
        question: "What if I don't know what career direction I want?",
        answer: "That's perfectly normal and exactly why many people seek career counseling! We use various assessment tools and exercises to help you discover your interests, values, and strengths to identify potential career paths."
      },
      {
        id: 20,
        question: "Can you help with career transitions?",
        answer: "Absolutely! Career transitions are one of our specialties. Whether you're changing industries, returning to work, or advancing in your current field, we'll help you navigate the transition successfully."
      }
    ],
    technical: [
      {
        id: 21,
        question: "I'm having trouble with the booking system. What should I do?",
        answer: "First, try refreshing your browser and clearing your cache. If the problem persists, please contact us directly at support@careercounsellor.com or call (555) 123-4567. We'll help you complete your booking over the phone."
      },
      {
        id: 22,
        question: "What technology do I need for virtual sessions?",
        answer: "You'll need a computer, tablet, or smartphone with a stable internet connection, camera, and microphone. We use Zoom for virtual sessions - you'll receive a link and instructions via email before your appointment."
      },
      {
        id: 23,
        question: "Can I access session materials after our meeting?",
        answer: "Yes, we'll email you any worksheets, resources, or action plans discussed during your session. You'll also receive a summary of key takeaways and next steps within 24 hours of your session."
      },
      {
        id: 24,
        question: "How do I update my contact information?",
        answer: "You can update your contact information by emailing us at info@careercounsellor.com with your new details, or by calling our office during business hours. Please update us as soon as possible to ensure you receive important communications."
      },
      {
        id: 25,
        question: "Is my personal information secure?",
        answer: "Yes, we use industry-standard encryption and security measures to protect your personal information. Our website and booking system are SSL-secured, and we follow strict confidentiality protocols for all client data."
      }
    ]
  };

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  const currentFAQs = faqData[activeCategory] || [];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-xl text-blue-100 mb-8">
            Find answers to common questions about our career counseling services
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <input
                type="text"
                placeholder="Search for answers..."
                className="w-full px-6 py-4 text-lg rounded-lg border-0 focus:ring-2 focus:ring-blue-300 focus:outline-none"
              />
              <button className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">Categories</h2>
              <nav className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-colors duration-200 flex items-center space-x-3 ${
                      activeCategory === category.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-medium">{category.label}</span>
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200">
              <div className="px-6 py-4 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-900">
                  {categories.find(cat => cat.id === activeCategory)?.label}
                </h2>
                <p className="text-gray-600 mt-1">
                  {currentFAQs.length} frequently asked questions
                </p>
              </div>

              <div className="p-6">
                <div className="space-y-4">
                  {currentFAQs.map((faq) => (
                    <div key={faq.id} className="border border-gray-200 rounded-lg">
                      <button
                        onClick={() => toggleFAQ(faq.id)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors duration-200"
                      >
                        <span className="font-medium text-gray-900 pr-4">
                          {faq.question}
                        </span>
                        <svg
                          className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${
                            openFAQ === faq.id ? 'transform rotate-180' : ''
                          }`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      
                      {openFAQ === faq.id && (
                        <div className="px-6 pb-4 border-t border-gray-100">
                          <p className="text-gray-700 leading-relaxed pt-4">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
              <a
                href="mailto:support@careercounsellor.com"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Email Support
              </a>
              <a
                href="tel:+15551234567"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Call (555) 123-4567
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📅</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Book a Session</h4>
            <p className="text-gray-600 text-sm mb-4">
              Ready to get started? Schedule your first career counseling session.
            </p>
            <Link
              to="/booking"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Book Now
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">👩‍💼</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">About Dr. Johnson</h4>
            <p className="text-gray-600 text-sm mb-4">
              Learn more about our experienced career counselor and her approach.
            </p>
            <Link
              to="/about"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
            >
              Learn More
            </Link>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📧</span>
            </div>
            <h4 className="text-lg font-semibold text-gray-900 mb-2">Newsletter</h4>
            <p className="text-gray-600 text-sm mb-4">
              Get career tips and updates delivered to your inbox monthly.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
