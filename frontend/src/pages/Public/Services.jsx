import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      id: 1,
      title: "One-on-One Career Counseling",
      duration: "60 minutes",
      price: "$150",
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
      title: "Quick Career Check-In",
      duration: "30 minutes",
      price: "$85",
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
      title: "Career Assessment & Planning",
      duration: "90 minutes",
      price: "$200",
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
      title: "Resume Review & Enhancement",
      duration: "45 minutes",
      price: "$120",
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
      title: "Interview Preparation Session",
      duration: "90 minutes",
      price: "$200",
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
      title: "University & Major Guidance",
      duration: "75 minutes",
      price: "$130",
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Professional career counseling services tailored to your needs and goals
          </p>
          <Link
            to="/booking"
            className="bg-white text-blue-600 hover:bg-blue-50 hover:shadow-2xl hover:shadow-blue-500/50 px-8 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 hover:rotate-1 shadow-lg"
          >
            Book a Session
          </Link>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose the Right Service for You
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From quick consultations to comprehensive career transformations, 
              we offer services designed for every stage of your professional journey.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service) => (
              <div 
                key={service.id} 
                className="group bg-white rounded-xl shadow-lg border border-gray-200 p-8 relative hover:border-blue-600 hover:ring-4 hover:ring-blue-600 hover:ring-opacity-30 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <span className="text-4xl">{service.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-500">{service.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                        <span className="flex items-center group-hover:text-blue-600 transition-colors duration-300">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          {service.duration}
                        </span>
                        <span className="px-2 py-1 bg-gray-100 rounded text-xs font-medium group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600 group-hover:text-blue-800 transition-all duration-500">{service.price}</div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 group-hover:text-gray-900 transition-colors duration-500 group-hover:font-medium">{service.description}</p>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-500">What's Included:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700 group-hover:text-gray-900 transition-all duration-500">
                        <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0 group-hover:text-green-700 transition-all duration-500" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link
                    to={`/booking?service=${service.id}`}
                    className="flex-1 bg-gray-200 text-gray-700 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white px-6 py-3 rounded-lg font-medium transition-all duration-500 text-center"
                  >
                    Book Now
                  </Link>
                  <Link
                    to="/contact"
                    className="flex-1 border border-gray-300 text-gray-700 hover:bg-gray-50 group-hover:border-blue-600 group-hover:text-blue-600 group-hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-all duration-500 text-center"
                  >
                    Ask Questions
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to transform your career
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Choose Service</h3>
              <p className="text-gray-600 text-sm">Select the service that best fits your needs and career goals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Book Session</h3>
              <p className="text-gray-600 text-sm">Schedule your appointment at a time that works for you</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Get Guidance</h3>
              <p className="text-gray-600 text-center text-sm">Work with Dr. Johnson to achieve your professional objectives</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Transform Career</h3>
              <p className="text-gray-600 text-sm">Implement your action plan and achieve your career goals</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-50 rounded-xl p-8 border border-blue-200">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                What Our Clients Say
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-yellow-400 mb-4">★★★★★</div>
                  <p className="text-gray-700 text-sm mb-4">
                    "Dr. Johnson helped me transition from marketing to UX design. Her guidance was invaluable in identifying my transferable skills."
                  </p>
                  <p className="font-semibold text-gray-900">Sarah M.</p>
                  <p className="text-gray-600 text-xs">UX Designer</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-yellow-400 mb-4">★★★★★</div>
                  <p className="text-gray-700 text-sm mb-4">
                    "The career assessment opened my eyes to possibilities I never considered. I'm now in a role I love!"
                  </p>
                  <p className="font-semibold text-gray-900">Michael R.</p>
                  <p className="text-gray-600 text-xs">Data Analyst</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <div className="text-yellow-400 mb-4">★★★★★</div>
                  <p className="text-gray-700 text-sm mb-4">
                    "Interview coaching gave me the confidence to negotiate better compensation. Worth every penny!"
                  </p>
                  <p className="font-semibold text-gray-900">Jennifer L.</p>
                  <p className="text-gray-600 text-xs">Project Manager</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Flexible Scheduling & Payment Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Flexible Scheduling</h3>
              <p className="text-gray-600 text-sm">
                Evening and weekend appointments available. Online and in-person options.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💳</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure Payment</h3>
              <p className="text-gray-600 text-sm">
                Accept all major credit cards, PayPal, and HSA/FSA payments.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Satisfaction Guarantee</h3>
              <p className="text-gray-600 text-sm">
                Not satisfied? We'll work with you to make it right or provide a refund.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Not Sure Which Service Is Right for You?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Schedule a free 15-minute consultation to discuss your needs and find the perfect service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 hover:bg-blue-50 hover:shadow-2xl hover:shadow-blue-500/50 px-8 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-110 hover:-translate-y-1 shadow-lg"
            >
              Free Consultation
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white hover:bg-blue-700 hover:shadow-2xl hover:shadow-white/30 px-8 py-3 rounded-lg font-semibold transition-all duration-500 transform hover:scale-105 hover:-translate-y-1"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
