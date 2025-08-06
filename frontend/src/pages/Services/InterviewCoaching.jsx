import { Link } from 'react-router-dom';

const InterviewCoaching = () => {
  const coachingPackages = [
    {
      id: 1,
      title: "Interview Basics",
      duration: "45 minutes",
      price: "$90",
      description: "Essential interview preparation for entry-level positions and first-time job seekers.",
      features: [
        "Common interview questions prep",
        "Basic STAR method training",
        "Professional presentation tips",
        "Confidence building exercises",
        "Follow-up best practices"
      ],
      icon: "🎯",
      popular: false
    },
    {
      id: 2,
      title: "Advanced Interview Prep",
      duration: "60 minutes",
      price: "$125",
      description: "Comprehensive preparation for competitive positions with mock interviews and detailed feedback.",
      features: [
        "Industry-specific question prep",
        "Mock interview session",
        "Video recording & analysis",
        "Behavioral question mastery",
        "Salary negotiation guidance",
        "Follow-up email templates",
        "30-day email support"
      ],
      icon: "🎪",
      popular: true
    },
    {
      id: 3,
      title: "Executive Interview Coaching",
      duration: "90 minutes",
      price: "$200",
      description: "Premium coaching for C-suite, director-level, and senior management positions.",
      features: [
        "Executive presence development",
        "Board presentation skills",
        "Complex scenario discussions",
        "Leadership philosophy articulation",
        "Strategic thinking demonstrations",
        "Multi-round interview strategy",
        "Executive compensation negotiation",
        "90-day follow-up support"
      ],
      icon: "👑",
      popular: false
    }
  ];

  const interviewTypes = [
    {
      type: "Traditional Interviews",
      description: "Standard one-on-one or panel interviews with HR and hiring managers",
      techniques: ["STAR method responses", "Professional storytelling", "Question preparation", "Body language coaching"]
    },
    {
      type: "Behavioral Interviews",
      description: "Competency-based interviews focusing on past experiences and situations",
      techniques: ["Situation analysis", "Task identification", "Action planning", "Result quantification"]
    },
    {
      type: "Technical Interviews",
      description: "Skill-based assessments and technical problem-solving sessions",
      techniques: ["Technical preparation", "Problem-solving approach", "Communication clarity", "Stress management"]
    },
    {
      type: "Video Interviews",
      description: "Remote interviews via Zoom, Teams, or other video platforms",
      techniques: ["Technology setup", "Camera presence", "Virtual body language", "Technical troubleshooting"]
    }
  ];

  const commonChallenges = [
    {
      challenge: "Nervousness & Anxiety",
      impact: "Difficulty articulating thoughts clearly and showcasing true capabilities",
      solution: "Relaxation techniques, practice sessions, and confidence-building exercises"
    },
    {
      challenge: "Weak Examples",
      impact: "Failing to demonstrate skills and achievements with compelling stories",
      solution: "STAR method training and pre-planned example development"
    },
    {
      challenge: "Poor Body Language",
      impact: "Sending negative signals that undermine verbal responses",
      solution: "Video analysis and body language awareness training"
    },
    {
      challenge: "Salary Discussions",
      impact: "Missing opportunities for better compensation or accepting low offers",
      solution: "Negotiation strategies and market research techniques"
    }
  ];

  const successMetrics = [
    { metric: "95%", description: "Client satisfaction rate with our interview coaching" },
    { metric: "78%", description: "Clients receive job offers after our coaching" },
    { metric: "43%", description: "Average salary increase achieved by our clients" },
    { metric: "2.3x", description: "Improvement in client confidence levels" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Interview Coaching
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Master the art of interviewing and land your dream job with confidence
          </p>
          <Link
            to="/booking"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Book Coaching Session
          </Link>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Proven Results
            </h2>
            <p className="text-xl text-gray-600">
              Our interview coaching delivers measurable outcomes for our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((item, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-lg p-8 border border-gray-200">
                <div className="text-4xl font-bold text-blue-600 mb-2">{item.metric}</div>
                <p className="text-gray-700 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaching Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interview Coaching Packages
            </h2>
            <p className="text-xl text-gray-600">
              Choose the coaching level that matches your career stage and interview type
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {coachingPackages.map((pkg) => (
              <div key={pkg.id} className={`rounded-xl shadow-lg border p-8 relative ${
                pkg.popular 
                  ? 'border-blue-600 bg-blue-50' 
                  : 'border-gray-200 bg-gray-50'
              }`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <span className="text-4xl mb-3 block">{pkg.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.title}</h3>
                  <div className="flex items-center justify-center space-x-4 text-sm text-gray-600 mb-4">
                    <span>⏱️ {pkg.duration}</span>
                    <span className="text-2xl font-bold text-blue-600">{pkg.price}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{pkg.description}</p>
                </div>
                
                <div className="mb-8">
                  <h4 className="font-semibold text-gray-900 mb-4">What's Included:</h4>
                  <ul className="space-y-2">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-700">
                        <svg className="w-4 h-4 text-green-600 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/booking"
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-colors duration-200 text-center block ${
                    pkg.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white'
                      : 'border border-blue-600 text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  Select This Package
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Interview Types We Cover
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive preparation for every interview format
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {interviewTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{type.type}</h3>
                <p className="text-gray-700 mb-6">{type.description}</p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Key Techniques:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {type.techniques.map((technique, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <svg className="w-3 h-3 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        {technique}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Challenges */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Interview Challenges
            </h2>
            <p className="text-xl text-gray-600">
              We help you overcome the most common interview obstacles
            </p>
          </div>

          <div className="space-y-8">
            {commonChallenges.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-lg font-bold text-red-600 mb-3">⚠️ Challenge</h3>
                    <h4 className="font-semibold text-gray-900 mb-2">{item.challenge}</h4>
                    <p className="text-gray-700 text-sm">{item.impact}</p>
                  </div>
                  <div className="flex items-center justify-center">
                    <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-green-600 mb-3">✅ Our Solution</h3>
                    <p className="text-gray-700 text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STAR Method */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Master the STAR Method
              </h2>
              <p className="text-gray-700 mb-8">
                The STAR method is the gold standard for answering behavioral interview questions. 
                We'll teach you how to structure compelling responses that showcase your achievements.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    S
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Situation</h3>
                    <p className="text-gray-600 text-sm">Set the context for your story</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    T
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Task</h3>
                    <p className="text-gray-600 text-sm">Describe your responsibility or challenge</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    A
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Action</h3>
                    <p className="text-gray-600 text-sm">Explain the specific actions you took</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center flex-shrink-0 font-bold">
                    R
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Result</h3>
                    <p className="text-gray-600 text-sm">Share the outcomes and impact</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Sample STAR Response</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                  <p><strong className="text-blue-600">Situation:</strong> "When I joined ABC Company, the marketing team was struggling with low email open rates of only 12%, well below industry average."</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-green-600">
                  <p><strong className="text-green-600">Task:</strong> "As the new Marketing Coordinator, I was tasked with improving email engagement and developing a more effective strategy."</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-600">
                  <p><strong className="text-yellow-600">Action:</strong> "I conducted A/B testing on subject lines, segmented our audience by behavior, and implemented personalization techniques."</p>
                </div>
                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-600">
                  <p><strong className="text-purple-600">Result:</strong> "Within 6 months, open rates increased to 28%, click-through rates improved by 45%, and we generated 30% more qualified leads."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Ace Your Next Interview?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't leave your career to chance. Invest in professional interview coaching today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Book Coaching Session
            </Link>
            <Link
              to="/contact"
              className="border border-white text-white hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition-colors duration-200"
            >
              Ask Questions
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InterviewCoaching;
