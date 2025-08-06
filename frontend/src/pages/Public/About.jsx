import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-6 overflow-hidden">
              <div className="w-full h-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <span className="text-4xl text-white">👩‍💼</span>
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Dr. Sarah Johnson</h1>
            <p className="text-xl text-gray-600 mb-6">Licensed Professional Counselor & Career Development Specialist</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-gray-900 text-white px-4 py-2 rounded-full">CDF Certified</span>
              <span className="bg-gray-900 text-white px-4 py-2 rounded-full">LPC Licensed</span>
              <span className="bg-gray-900 text-white px-4 py-2 rounded-full">10+ Years Experience</span>
              <span className="bg-gray-900 text-white px-4 py-2 rounded-full">500+ Clients Served</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Summary</h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              As a Licensed Professional Counselor with over a decade of experience in career development, 
              I specialize in helping individuals navigate career transitions, discover their professional 
              strengths, and create actionable plans for career advancement. My approach combines evidence-based 
              counseling techniques with practical industry knowledge to deliver transformative results.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I have successfully guided over 500 clients through various career challenges, from recent 
              graduates seeking their first professional role to seasoned executives pursuing career pivots. 
              My expertise spans multiple industries, with particular strength in technology, healthcare, 
              education, and business sectors.
            </p>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Education & Certifications</h2>
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Ph.D. in Counseling Psychology</h3>
              <p className="text-gray-600 mb-2">University of California, Berkeley | 2012</p>
              <p className="text-gray-700">Dissertation: "Career Transition Strategies in the Digital Age"</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">M.A. in Career Development</h3>
              <p className="text-gray-600 mb-2">Stanford University | 2009</p>
              <p className="text-gray-700">Specialization in Organizational Psychology and Human Resources</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">B.A. in Psychology</h3>
              <p className="text-gray-600 mb-2">Harvard University | 2007</p>
              <p className="text-gray-700">Magna Cum Laude, Phi Beta Kappa</p>
            </div>
          </div>

          <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Professional Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Licensed Professional Counselor (LPC)</h4>
              <p className="text-gray-600">California Board of Psychology | License #PC12345</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Certified Career Development Facilitator (CDF)</h4>
              <p className="text-gray-600">National Career Development Association</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">Myers-Briggs Type Indicator (MBTI) Certified</h4>
              <p className="text-gray-600">The Myers & Briggs Foundation</p>
            </div>
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h4 className="font-semibold text-gray-900 mb-2">StrengthsFinder 2.0 Certified Coach</h4>
              <p className="text-gray-600">Gallup Strengths Center</p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Professional Experience</h2>
          <div className="space-y-8">
            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Senior Career Counselor & Private Practice Owner</h3>
              <p className="text-gray-600 mb-2">Sarah Johnson Career Consulting | 2018 - Present</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Provide individual and group career counseling to 100+ clients annually</li>
                <li>• Developed proprietary career assessment methodology with 95% client satisfaction rate</li>
                <li>• Specialized in executive career transitions and industry pivots</li>
                <li>• Created online career development courses with 1,000+ enrollments</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Lead Career Services Director</h3>
              <p className="text-gray-600 mb-2">UC Berkeley Career Center | 2014 - 2018</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Managed career services for 15,000+ students across all academic disciplines</li>
                <li>• Increased graduate employment rate from 78% to 92% during tenure</li>
                <li>• Developed partnerships with 200+ employers for internship and job placement</li>
                <li>• Led team of 12 career counselors and advisors</li>
              </ul>
            </div>
            <div className="border-l-4 border-gray-900 pl-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Career Counselor</h3>
              <p className="text-gray-600 mb-2">Stanford Career Development Center | 2012 - 2014</p>
              <ul className="text-gray-700 space-y-2">
                <li>• Provided individual career counseling to MBA and graduate students</li>
                <li>• Conducted career workshops and group sessions</li>
                <li>• Developed industry-specific career guidance programs</li>
                <li>• Maintained 98% client satisfaction rating</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations & Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Specializations & Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Areas of Expertise</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Career Transition & Change Management
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Executive Career Development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Industry Pivot Strategies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Interview Preparation & Coaching
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Resume & LinkedIn Optimization
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Salary Negotiation Strategies
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Work-Life Balance Counseling
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Industry Focus</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Technology & Software Development
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Healthcare & Life Sciences
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Financial Services & Banking
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Education & Academia
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Consulting & Professional Services
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Non-Profit & Government
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-gray-900 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  Marketing & Creative Industries
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Achievements & Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Awards & Honors</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Excellence in Career Services Award</h4>
                  <p className="text-gray-600">National Association of Colleges and Employers | 2017</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Outstanding Alumni Award</h4>
                  <p className="text-gray-600">UC Berkeley School of Education | 2019</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Top Career Coach Recognition</h4>
                  <p className="text-gray-600">San Francisco Business Journal | 2020, 2021, 2022</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Publications & Speaking</h3>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Author: "Navigate Your Career"</h4>
                  <p className="text-gray-600">Bestselling career guide published by Wiley | 2021</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">TEDx Talk: "The Future of Work"</h4>
                  <p className="text-gray-600">TEDx San Francisco | 500K+ views | 2020</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900">Featured Expert</h4>
                  <p className="text-gray-600">Harvard Business Review, Forbes, Wall Street Journal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach & Philosophy */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Approach & Philosophy</h2>
          <div className="bg-white rounded-lg p-8">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              I believe that every individual has unique strengths and potential that, when properly identified 
              and channeled, can lead to extraordinary career success. My approach is holistic, combining 
              psychological insights with practical industry knowledge to create personalized career strategies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🔍</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Assessment-Based</h3>
                <p className="text-gray-600 text-sm">Comprehensive evaluation of skills, interests, and values</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Goal-Oriented</h3>
                <p className="text-gray-600 text-sm">Clear, actionable plans with measurable outcomes</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Collaborative</h3>
                <p className="text-gray-600 text-sm">Partnership approach with ongoing support and guidance</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Consultation */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Ready to Transform Your Career?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Take the first step towards achieving your professional goals with personalized career guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={() => window.location.href = '/booking'}
              className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Schedule Consultation
            </button>
            <button 
              onClick={() => window.location.href = '/contact'}
              className="border border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200"
            >
              Get in Touch
            </button>
          </div>
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              <strong>Available for consultations:</strong> Monday - Friday, 9:00 AM - 6:00 PM PST
            </p>
            <p className="text-gray-600">
              <strong>Response time:</strong> Within 24 hours for all inquiries
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
