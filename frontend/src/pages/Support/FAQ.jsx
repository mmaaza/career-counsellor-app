import { useState } from 'react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const faqItems = [
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
      question: "How do I schedule an appointment?",
      answer: "You can schedule an appointment through our online booking system by clicking 'Book a Session' on our website. Select your preferred service, date, and time, then complete the booking form with your information."
    },
    {
      id: 4,
      question: "What are your session rates?",
      answer: "Our rates vary by service: One-on-One Career Counseling (60 min) - $150, Quick Career Check-In (30 min) - $85, Career Assessment & Planning (90 min) - $200, Resume Review & Feedback (45 min) - $100."
    },
    {
      id: 5,
      question: "Can I reschedule or cancel my appointment?",
      answer: "Yes, you can reschedule or cancel your appointment up to 24 hours before your scheduled time without any penalty. Please contact us as soon as possible if you need to make changes."
    },
    {
      id: 6,
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), debit cards, PayPal, and bank transfers. Payment is processed securely through our encrypted payment system."
    },
    {
      id: 7,
      question: "Are sessions conducted in-person or online?",
      answer: "We offer both in-person and virtual sessions via secure video conferencing. You can choose your preference during booking. Virtual sessions are just as effective and offer greater flexibility."
    },
    {
      id: 8,
      question: "Do you accept insurance?",
      answer: "While we don't directly bill insurance companies, we can provide you with a detailed receipt that you may submit to your insurance provider for potential reimbursement. Check with your insurance company about coverage for counseling services."
    },
    {
      id: 9,
      question: "What should I expect in my first session?",
      answer: "Your first session will focus on understanding your background, current situation, and goals. We'll discuss your career history, challenges, and aspirations. This helps create a personalized plan for our future sessions."
    },
    {
      id: 10,
      question: "Is career counseling confidential?",
      answer: "Yes, absolutely. All our sessions are completely confidential and follow professional counseling ethics. Your personal information and session content will never be shared without your explicit consent."
    }
  ];

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-blue-100">
            Find quick answers to common questions about our career counseling services
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200">
            <div className="p-8">
              <div className="space-y-4">
                {faqItems.map((faq) => (
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

          {/* Contact Section */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Can't find what you're looking for? We're here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/help-center"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Visit Help Center
              </Link>
              <Link
                to="/contact"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;
