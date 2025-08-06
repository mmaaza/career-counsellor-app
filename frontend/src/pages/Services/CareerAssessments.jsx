import { Link } from 'react-router-dom';

const CareerAssessments = () => {
  const assessmentTypes = [
    {
      id: 1,
      title: "Comprehensive Career Assessment",
      duration: "90 minutes",
      price: "$200",
      description: "A complete evaluation of your interests, values, personality, and skills to identify ideal career paths.",
      features: [
        "Myers-Briggs Type Indicator (MBTI)",
        "Strong Interest Inventory",
        "Values assessment",
        "Skills evaluation",
        "Personalized career report",
        "Follow-up consultation session"
      ],
      icon: "🎯"
    },
    {
      id: 2,
      title: "Skills & Strengths Assessment",
      duration: "60 minutes",
      price: "$125",
      description: "Focus on identifying your core competencies and natural talents for career advancement.",
      features: [
        "StrengthsFinder 2.0 assessment",
        "Technical skills evaluation",
        "Soft skills analysis",
        "Leadership potential assessment",
        "Development recommendations",
        "Action plan creation"
      ],
      icon: "💪"
    },
    {
      id: 3,
      title: "Career Change Assessment",
      duration: "75 minutes",
      price: "$175",
      description: "Specialized evaluation for professionals considering a career transition or industry change.",
      features: [
        "Current career satisfaction analysis",
        "Transferable skills identification",
        "Industry compatibility assessment",
        "Risk tolerance evaluation",
        "Transition timeline planning",
        "Resource recommendations"
      ],
      icon: "🔄"
    },
    {
      id: 4,
      title: "Student Career Exploration",
      duration: "60 minutes",
      price: "$100",
      description: "Designed for students and recent graduates to explore career options and educational paths.",
      features: [
        "Interest and aptitude testing",
        "Major selection guidance",
        "Career exploration activities",
        "Educational pathway mapping",
        "Internship recommendations",
        "Entry-level career planning"
      ],
      icon: "🎓"
    }
  ];

  const assessmentProcess = [
    {
      step: 1,
      title: "Initial Consultation",
      description: "We discuss your background, goals, and assessment objectives"
    },
    {
      step: 2,
      title: "Assessment Administration",
      description: "Complete validated career assessment tools and questionnaires"
    },
    {
      step: 3,
      title: "Results Analysis",
      description: "Professional interpretation of your assessment results"
    },
    {
      step: 4,
      title: "Report & Recommendations",
      description: "Receive detailed report with career recommendations and next steps"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Career Assessments
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Discover your ideal career path through scientifically-validated assessments
          </p>
          <Link
            to="/booking"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule Assessment
          </Link>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Take a Career Assessment?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Career assessments provide objective insights into your personality, interests, values, and skills 
              to help you make informed decisions about your professional future.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Self-Discovery</h3>
              <p className="text-gray-600">
                Gain deeper understanding of your natural tendencies, preferences, and motivations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Clear Direction</h3>
              <p className="text-gray-600">
                Identify specific career paths that align with your unique profile and aspirations.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Confident Decisions</h3>
              <p className="text-gray-600">
                Make career choices based on scientific insights rather than guesswork.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Assessment Options
            </h2>
            <p className="text-xl text-gray-600">
              Choose the assessment that best fits your career exploration needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {assessmentTypes.map((assessment) => (
              <div key={assessment.id} className="bg-gray-50 rounded-xl shadow-lg border border-gray-200 p-8">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{assessment.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{assessment.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                      <span>⏱️ {assessment.duration}</span>
                      <span>💰 {assessment.price}</span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">{assessment.description}</p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <ul className="space-y-2">
                    {assessment.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/booking"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center block"
                >
                  Book This Assessment
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Assessment Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to understanding your career potential
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {assessmentProcess.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                What You'll Gain
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Personalized Career Matches</h3>
                    <p className="text-gray-600 text-sm">Specific career recommendations based on your unique profile</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Detailed Insights Report</h3>
                    <p className="text-gray-600 text-sm">Comprehensive analysis of your strengths, interests, and values</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Action-Oriented Plan</h3>
                    <p className="text-gray-600 text-sm">Clear next steps and resources for pursuing your ideal career</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Ongoing Support</h3>
                    <p className="text-gray-600 text-sm">Follow-up consultation to discuss results and plan implementation</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Discover Your Path?</h3>
              <p className="text-gray-700 mb-6">
                Take the first step towards a fulfilling career with our comprehensive assessment process.
              </p>
              <div className="space-y-4">
                <Link
                  to="/booking"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center block"
                >
                  Schedule Assessment
                </Link>
                <Link
                  to="/contact"
                  className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center block"
                >
                  Ask Questions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How accurate are career assessments?</h3>
                <p className="text-gray-700 text-sm">Our assessments use scientifically validated tools with high reliability scores. While no assessment is 100% predictive, they provide valuable insights that 85-90% of clients find helpful in their career decisions.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Can I take an assessment online?</h3>
                <p className="text-gray-700 text-sm">Yes! We offer both in-person and virtual assessment sessions. The online format is just as comprehensive and includes the same level of personalized interpretation and support.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">What if I don't agree with the results?</h3>
                <p className="text-gray-700 text-sm">Assessment results are starting points for discussion, not final verdicts. We'll explore any concerns you have and help you understand how the results apply to your unique situation and goals.</p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">How long are the results valid?</h3>
                <p className="text-gray-700 text-sm">Core personality and values tend to remain stable over time, but interests and circumstances can evolve. We recommend reassessment every 3-5 years or during major life transitions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareerAssessments;
