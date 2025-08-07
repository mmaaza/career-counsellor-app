import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Meet Your 
                <span className="text-blue-600 block">Career Expert</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Dr. Sarah Johnson brings over a decade of expertise in transforming careers 
                and empowering professionals to achieve their highest potential.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">CDF Certified</span>
                <span className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">LPC Licensed</span>
                <span className="bg-blue-600 text-white px-6 py-3 rounded-full font-medium">500+ Clients</span>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-32 h-32 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-6xl">👩‍💼</span>
                      </div>
                      <p className="text-2xl font-bold">Dr. Sarah Johnson</p>
                      <p className="text-lg opacity-90">Licensed Career Counselor</p>
                    </div>
                  </div>
                </div>
                {/* Floating achievement badges */}
                <div className="absolute -top-6 -right-6 bg-yellow-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  10+ Years
                </div>
                <div className="absolute -bottom-6 -left-6 bg-green-400 text-gray-900 px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                  95% Success
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education & Certifications */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Educational Foundation</h2>
            <p className="text-xl text-gray-600">Built on excellence, backed by prestigious institutions</p>
          </div>
          
          {/* Education Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎓</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">Ph.D. Psychology</h3>
              <p className="text-blue-600 font-semibold mb-2 text-center">UC Berkeley | 2012</p>
              <p className="text-gray-600 text-center text-sm">Career Transition Strategies in the Digital Age</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📚</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">M.A. Career Development</h3>
              <p className="text-blue-600 font-semibold mb-2 text-center">Stanford University | 2009</p>
              <p className="text-gray-600 text-center text-sm">Organizational Psychology & HR</p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🏆</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">B.A. Psychology</h3>
              <p className="text-blue-600 font-semibold mb-2 text-center">Harvard University | 2007</p>
              <p className="text-gray-600 text-center text-sm">Magna Cum Laude, Phi Beta Kappa</p>
            </div>
          </div>

          {/* Certifications Grid */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Professional Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-2">LPC Licensed</h4>
                <p className="text-gray-600 text-sm">California Board</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-2">CDF Certified</h4>
                <p className="text-gray-600 text-sm">NCDA Certified</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-2">MBTI Certified</h4>
                <p className="text-gray-600 text-sm">Myers & Briggs</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-lg text-center border-l-4 border-blue-500">
                <h4 className="font-bold text-gray-900 mb-2">Strengths Coach</h4>
                <p className="text-gray-600 text-sm">Gallup Certified</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Experience */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Professional Journey</h2>
            <p className="text-xl text-gray-600">A decade of transforming careers across leading institutions</p>
          </div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
            
            <div className="space-y-12">
              {/* Experience 1 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
                    <div className="text-sm text-blue-600 font-semibold mb-2">2018 - Present</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Senior Career Counselor & Practice Owner</h3>
                    <p className="text-blue-700 font-medium mb-4">Sarah Johnson Career Consulting</p>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• 100+ clients counseled annually with 95% satisfaction rate</li>
                      <li>• Developed proprietary career assessment methodology</li>
                      <li>• Created online courses with 1,000+ enrollments</li>
                    </ul>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white text-xl">👑</span>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>
              
              {/* Experience 2 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8"></div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white text-xl">🎯</span>
                </div>
                <div className="flex-1 pl-8">
                  <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
                    <div className="text-sm text-blue-600 font-semibold mb-2">2014 - 2018</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Lead Career Services Director</h3>
                    <p className="text-blue-700 font-medium mb-4">UC Berkeley Career Center</p>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Managed services for 15,000+ students</li>
                      <li>• Increased employment rate from 78% to 92%</li>
                      <li>• Led team of 12 career counselors</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              {/* Experience 3 */}
              <div className="relative flex items-center">
                <div className="flex-1 pr-8 text-right">
                  <div className="bg-blue-50 rounded-2xl p-8 shadow-lg">
                    <div className="text-sm text-blue-600 font-semibold mb-2">2012 - 2014</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Career Counselor</h3>
                    <p className="text-blue-700 font-medium mb-4">Stanford Career Development Center</p>
                    <ul className="text-gray-700 space-y-2 text-sm">
                      <li>• Counseled MBA and graduate students</li>
                      <li>• Maintained 98% client satisfaction rating</li>
                      <li>• Developed industry-specific programs</li>
                    </ul>
                  </div>
                </div>
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center relative z-10">
                  <span className="text-white text-xl">🚀</span>
                </div>
                <div className="flex-1 pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Specializations & Services */}
      <section className="py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">How I Can Help You</h2>
            <p className="text-xl text-gray-600">Specialized services tailored to your career stage and goals</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Career Starters */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Career Starters</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  First job placement strategy
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Resume & portfolio development
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Interview confidence building
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Professional networking guidance
                </li>
              </ul>
            </div>
            
            {/* Career Changers */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Career Changers</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Industry transition planning
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Skills gap analysis & bridging
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Personal branding for new field
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Career pivot risk assessment
                </li>
              </ul>
            </div>
            
            {/* Executives & Leaders */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">👔</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">Executives & Leaders</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  C-suite positioning strategies
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Board readiness preparation
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Executive presence coaching
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">•</span>
                  Leadership transition support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements & Recognition */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Recognition & Impact</h2>
            <p className="text-xl text-gray-600">Celebrating excellence and thought leadership in career development</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Awards Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Awards & Honors</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">🏆</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Excellence in Career Services</h4>
                      <p className="text-blue-700 font-medium">NACE | 2017</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Recognized for outstanding contribution to career development practices</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">🎓</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Outstanding Alumni Award</h4>
                      <p className="text-blue-700 font-medium">UC Berkeley | 2019</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Honored for exceptional achievements in professional practice</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">⭐</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Top Career Coach</h4>
                      <p className="text-blue-700 font-medium">SF Business Journal | 2020-2022</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Three consecutive years of recognition as leading career expert</p>
                </div>
              </div>
            </div>
            
            {/* Publications Column */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Publications & Speaking</h3>
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">📚</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">"Navigate Your Career"</h4>
                      <p className="text-blue-700 font-medium">Bestselling Author | 2021</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Comprehensive guide published by Wiley, helping thousands find their path</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">🎤</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">TEDx: "The Future of Work"</h4>
                      <p className="text-blue-700 font-medium">500K+ Views | 2020</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Influential talk on career adaptation in the digital age</p>
                </div>
                
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 shadow-lg border-l-4 border-blue-400">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-4">📰</span>
                    <div>
                      <h4 className="font-bold text-gray-900 text-lg">Media Expert</h4>
                      <p className="text-blue-700 font-medium">HBR, Forbes, WSJ</p>
                    </div>
                  </div>
                  <p className="text-gray-700 text-sm">Regular contributor to leading business publications</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy & Methodology */}
      <section className="py-16 lg:py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">My Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A unique blend of psychology, industry insight, and practical tools designed to create lasting career transformation
            </p>
          </div>
          
          {/* Core Principles */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">Core Principles</h3>
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600 text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Authenticity First</h4>
                      <p className="text-gray-600 text-sm">Your career should reflect who you truly are, not who you think you should be</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600 text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Data-Driven Decisions</h4>
                      <p className="text-gray-600 text-sm">Use assessments and market research to make informed career choices</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <div className="flex items-start">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-4 mt-1">
                      <span className="text-blue-600 text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">Sustainable Growth</h4>
                      <p className="text-gray-600 text-sm">Build careers that support your life goals, not consume them</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8">What Makes Me Different</h3>
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🧠</span>
                    <span className="text-gray-700"><strong>Psychology Background:</strong> I understand the emotional aspects of career change</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💼</span>
                    <span className="text-gray-700"><strong>Industry Experience:</strong> I've worked across multiple sectors and understand market realities</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🔬</span>
                    <span className="text-gray-700"><strong>Research-Based:</strong> My methods are grounded in career development research</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">💝</span>
                    <span className="text-gray-700"><strong>Personal Experience:</strong> I've been through my own career transformation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
