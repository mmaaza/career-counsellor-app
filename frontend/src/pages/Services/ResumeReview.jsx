import { Link } from 'react-router-dom';

const ResumeReview = () => {
  const reviewPackages = [
    {
      id: 1,
      title: "Basic Resume Review",
      duration: "30 minutes",
      price: "$75",
      description: "Quick feedback on format, content, and overall presentation of your existing resume.",
      features: [
        "Format and layout assessment",
        "Content review and suggestions",
        "Grammar and spelling check",
        "Basic optimization tips",
        "Written feedback summary"
      ],
      icon: "📄",
      popular: false
    },
    {
      id: 2,
      title: "Comprehensive Resume Review",
      duration: "45 minutes",
      price: "$100",
      description: "Detailed analysis with specific recommendations for improvement and industry alignment.",
      features: [
        "In-depth content analysis",
        "Industry-specific optimization",
        "Keywords and ATS optimization",
        "Achievement highlighting",
        "Formatting recommendations",
        "Live consultation session",
        "Revised resume template"
      ],
      icon: "🎯",
      popular: true
    },
    {
      id: 3,
      title: "Executive Resume Review",
      duration: "60 minutes",
      price: "$150",
      description: "Premium service for senior-level professionals with leadership experience and complex career histories.",
      features: [
        "Executive-level content strategy",
        "Leadership achievement focus",
        "Executive summary development",
        "Board-ready presentation",
        "LinkedIn profile optimization",
        "Cover letter review",
        "Personal branding consultation"
      ],
      icon: "👔",
      popular: false
    }
  ];

  const reviewProcess = [
    {
      step: 1,
      title: "Submit Your Resume",
      description: "Upload your current resume and provide background information about your career goals"
    },
    {
      step: 2,
      title: "Initial Analysis",
      description: "We conduct a thorough review of your resume's content, format, and effectiveness"
    },
    {
      step: 3,
      title: "Live Consultation",
      description: "Discuss findings, recommendations, and career strategy in a one-on-one session"
    },
    {
      step: 4,
      title: "Follow-up Resources",
      description: "Receive written summary, templates, and additional resources for implementation"
    }
  ];

  const commonIssues = [
    {
      issue: "Poor Formatting",
      description: "Inconsistent fonts, spacing, or layout that makes the resume hard to read",
      solution: "Clean, professional formatting with consistent styling throughout"
    },
    {
      issue: "Weak Action Verbs",
      description: "Generic verbs that don't demonstrate impact or achievement",
      solution: "Strong, specific action verbs that showcase your accomplishments"
    },
    {
      issue: "Missing Keywords",
      description: "Lack of industry-specific terms that ATS systems and recruiters look for",
      solution: "Strategic keyword integration for your target role and industry"
    },
    {
      issue: "Unclear Value Proposition",
      description: "Failing to clearly communicate what you bring to an employer",
      solution: "Compelling summary that highlights your unique value and expertise"
    },
    {
      issue: "Achievement Light",
      description: "Focusing on duties instead of quantifiable accomplishments",
      solution: "Results-oriented bullet points with specific metrics and outcomes"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Professional Resume Review
          </h1>
          <p className="text-xl text-blue-100 mb-8">
            Get expert feedback to make your resume stand out to employers and ATS systems
          </p>
          <Link
            to="/booking"
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
          >
            Schedule Review
          </Link>
        </div>
      </section>

      {/* Why Resume Review */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Your Resume Needs Expert Review
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your resume is often the first impression you make on potential employers. 
              A professionally reviewed resume can dramatically increase your interview opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">❌</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">ATS Optimization</h3>
              <p className="text-gray-600 text-sm">
                75% of resumes are rejected by Applicant Tracking Systems before human review
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">6-Second Rule</h3>
              <p className="text-gray-600 text-sm">
                Recruiters spend an average of only 6 seconds reviewing each resume
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Interview Rate</h3>
              <p className="text-gray-600 text-sm">
                Professional resume reviews can increase interview callbacks by 300%
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Higher Offers</h3>
              <p className="text-gray-600 text-sm">
                Well-crafted resumes often lead to higher salary offers and better positions
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Review Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Review Package
            </h2>
            <p className="text-xl text-gray-600">
              Select the level of review that matches your career stage and needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {reviewPackages.map((pkg) => (
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

      {/* Review Process */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Review Process
            </h2>
            <p className="text-xl text-gray-600">
              A systematic approach to improving your resume's effectiveness
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {reviewProcess.map((step) => (
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

      {/* Common Issues */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Common Resume Issues We Fix
            </h2>
            <p className="text-xl text-gray-600">
              Don't let these mistakes keep you from landing interviews
            </p>
          </div>

          <div className="space-y-6">
            {commonIssues.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-red-600 mb-2">❌ {item.issue}</h3>
                    <p className="text-gray-700 text-sm">{item.description}</p>
                  </div>
                  <div className="text-center">
                    <svg className="w-8 h-8 text-blue-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-green-600 mb-2">✅ Our Solution</h3>
                    <p className="text-gray-700 text-sm">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              See the Difference
            </h2>
            <p className="text-xl text-gray-600">
              Real examples of resume transformations
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <h3 className="text-xl font-bold text-red-600 mb-4">❌ Before Review</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium">Objective: Looking for a job in marketing</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium">Experience:</p>
                  <p>• Worked on marketing campaigns</p>
                  <p>• Did social media stuff</p>
                  <p>• Helped with events</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium">Skills: Microsoft Office, Communication</p>
                </div>
              </div>
              <div className="mt-4 text-red-600 text-sm">
                <p><strong>Issues:</strong> Vague language, no metrics, weak objective, missing keywords</p>
              </div>
            </div>

            <div className="bg-green-50 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-green-600 mb-4">✅ After Review</h3>
              <div className="space-y-4 text-sm">
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium">Professional Summary: Results-driven Digital Marketing Specialist with 3+ years of experience increasing brand awareness and lead generation through integrated marketing campaigns.</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium">Experience:</p>
                  <p>• Increased social media engagement by 150% across 4 platforms</p>
                  <p>• Managed $50K marketing budget, delivering 25% ROI improvement</p>
                  <p>• Coordinated 12 events generating 500+ qualified leads</p>
                </div>
                <div className="bg-white p-4 rounded border">
                  <p className="font-medium">Technical Skills: Google Analytics, HubSpot, Facebook Ads Manager, SEO, Content Marketing, Email Marketing Automation</p>
                </div>
              </div>
              <div className="mt-4 text-green-600 text-sm">
                <p><strong>Improvements:</strong> Quantified achievements, industry keywords, compelling summary, specific skills</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Resume?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Don't let a weak resume hold back your career. Get expert feedback today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Schedule Review
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

export default ResumeReview;
