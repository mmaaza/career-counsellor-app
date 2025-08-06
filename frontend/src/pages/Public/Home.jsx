import { useCounsellorMode } from '../../contexts/CounsellorModeContext';

const Home = () => {
  const { isCounsellorMode } = useCounsellorMode();
  
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Counsellor Quick Stats - Only visible in counsellor mode */}
      {isCounsellorMode && (
        <section className="bg-blue-600 text-white py-4">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-semibold">📊 Quick Overview</h3>
              <div className="flex space-x-8 text-sm">
                <div className="text-center">
                  <div className="font-bold">8</div>
                  <div className="opacity-90">Today's Sessions</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">23</div>
                  <div className="opacity-90">This Week</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">12</div>
                  <div className="opacity-90">Pending Bookings</div>
                </div>
                <div className="text-center">
                  <div className="font-bold">156</div>
                  <div className="opacity-90">Total Clients</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Helping You Find the 
                <span className="text-blue-600 block">Right Career Path</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your career with personalized guidance, proven strategies, 
                and expert insights tailored to your unique strengths and goals.
              </p>
              <button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white text-lg font-semibold px-8 py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Start Your Journey
              </button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-80 h-80 bg-gray-200 rounded-2xl shadow-2xl overflow-hidden">
                  {/* Placeholder for counselor photo */}
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center">
                    <div className="text-white text-center">
                      <div className="w-24 h-24 bg-white bg-opacity-20 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-3xl">👨‍💼</span>
                      </div>
                      <p className="text-lg font-medium">Dr. Sarah Johnson</p>
                      <p className="text-sm opacity-90">Career Counselor</p>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-green-400 rounded-full opacity-80"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Your Career Counselor</h2>
          <div className="bg-gray-50 rounded-2xl p-8">
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              With over 10 years of experience in career development and counseling, I am a 
              certified Career Development Facilitator (CDF) and Licensed Professional Counselor (LPC). 
              I specialize in helping professionals at all stages of their careers discover their 
              true potential and navigate successful career transitions.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">500+</div>
                <div className="text-gray-600">Clients Helped</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Benefits of Career Counseling
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Clarity</h3>
              <p className="text-gray-600 leading-relaxed">
                Gain crystal-clear understanding of your strengths, values, and ideal career direction 
                through comprehensive assessments and guided self-reflection.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Confidence</h3>
              <p className="text-gray-600 leading-relaxed">
                Build unshakeable confidence in your career decisions with proven strategies, 
                skill development plans, and ongoing professional support.
              </p>
            </div>
            <div className="text-center bg-white p-8 rounded-xl shadow-lg">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🛤️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Career Path</h3>
              <p className="text-gray-600 leading-relaxed">
                Create a personalized roadmap to your dream career with actionable steps, 
                timeline milestones, and continuous progress tracking.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Quick Access
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Book a Session</h3>
              <p className="text-gray-600 mb-6">
                Schedule your personalized career counseling session with our easy booking system.
              </p>
              <button 
                onClick={() => window.location.href = '/booking'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Book Now
              </button>
            </div>
            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Read Testimonials</h3>
              <p className="text-gray-600 mb-6">
                See how our career counseling has transformed the lives of our clients.
              </p>
              <button 
                onClick={() => window.location.href = '/testimonials'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                View Stories
              </button>
            </div>
            <div className="text-center bg-gray-50 p-8 rounded-xl">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h3>
              <p className="text-gray-600 mb-6">
                Have questions? Contact us directly to learn more about our services.
              </p>
              <button 
                onClick={() => window.location.href = '/contact'}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-8">
            {isCounsellorMode ? 'Counsellor Dashboard Access' : 'Ready to Transform Your Career?'}
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            {isCounsellorMode 
              ? 'Manage your sessions, view client progress, and access all your counselling tools.'
              : 'Take the first step towards your ideal career. Book a consultation today.'
            }
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {isCounsellorMode ? (
              <>
                <button 
                  onClick={() => window.location.href = '/dashboard'}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  📊 Go to Dashboard
                </button>
                <button 
                  onClick={() => window.location.href = '/booking'}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  📅 View Bookings
                </button>
              </>
            ) : (
              <>
                <button 
                  onClick={() => window.location.href = '/booking'}
                  className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Schedule Consultation
                </button>
                <button 
                  onClick={() => window.location.href = '/contact'}
                  className="border-2 border-white text-white hover:bg-white hover:text-blue-600 font-semibold px-8 py-3 rounded-lg transition-colors"
                >
                  Get in Touch
                </button>
              </>
            )}
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="text-white">
              <h4 className="font-semibold mb-2">📧 Email</h4>
              <p className="text-blue-100">sarah@careercounsellor.com</p>
            </div>
            <div className="text-white">
              <h4 className="font-semibold mb-2">📞 Phone</h4>
              <p className="text-blue-100">(555) 123-4567</p>
            </div>
            <div className="text-white">
              <h4 className="font-semibold mb-2">🕒 Hours</h4>
              <p className="text-blue-100">Mon-Fri 9AM-6PM</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;