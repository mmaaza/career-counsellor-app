import { Link } from 'react-router-dom';

const RefundPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Refund Policy
          </h1>
          <p className="text-xl text-blue-100">
            Our commitment to fair and transparent refund practices
          </p>
        </div>
      </section>

      {/* Policy Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
            
            {/* Last Updated */}
            <div className="mb-8 p-4 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-sm text-blue-800">
                <strong>Last Updated:</strong> January 1, 2025
              </p>
            </div>

            {/* Policy Content */}
            <div className="prose prose-lg max-w-none">
              
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Refund Commitment</h2>
                <p className="text-gray-700 mb-4">
                  At Career Counsellor, we are committed to providing exceptional service and ensuring your satisfaction. 
                  This refund policy outlines the terms and conditions under which refunds may be requested and processed.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Standard Cancellation Policy</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">24-Hour Cancellation Rule</h3>
                  <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li><strong>Full Refund:</strong> Cancellations made 24+ hours before your scheduled appointment</li>
                    <li><strong>50% Refund:</strong> Cancellations made less than 24 hours before your appointment</li>
                    <li><strong>No Refund:</strong> No-shows or cancellations made after the appointment start time</li>
                  </ul>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Service-Specific Refund Terms</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">One-on-One Counseling</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>60-minute sessions: $150</li>
                      <li>Standard cancellation policy applies</li>
                      <li>Satisfaction guarantee for first session</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Career Assessments</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>90-minute sessions: $200</li>
                      <li>Refund available before assessment begins</li>
                      <li>Partial refund if cancelled during session</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Resume Review</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>45-minute sessions: $100</li>
                      <li>Refund available before review begins</li>
                      <li>Satisfaction guarantee on final deliverable</li>
                    </ul>
                  </div>
                  
                  <div className="border border-gray-200 rounded-lg p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Quick Check-In</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700 text-sm">
                      <li>30-minute sessions: $85</li>
                      <li>Standard cancellation policy applies</li>
                      <li>No partial refunds due to session length</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Emergency Circumstances</h2>
                <p className="text-gray-700 mb-4">
                  We understand that emergencies happen. In cases of medical emergencies, family crises, or other 
                  unforeseen circumstances, we may waive our standard cancellation policy. Please contact us as 
                  soon as possible to discuss your situation.
                </p>
                <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                  <p className="text-green-800 text-sm">
                    <strong>Emergency Contact:</strong> Call (555) 123-4567 or email support@careercounsellor.com
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Refund Process</h2>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Submit Request</h3>
                      <p className="text-gray-700 text-sm">Contact us via email or phone to request a refund</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Review Process</h3>
                      <p className="text-gray-700 text-sm">We'll review your request within 1-2 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Processing</h3>
                      <p className="text-gray-700 text-sm">Approved refunds are processed within 3-5 business days</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Confirmation</h3>
                      <p className="text-gray-700 text-sm">You'll receive email confirmation once the refund is issued</p>
                    </div>
                  </div>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Satisfaction Guarantee</h2>
                <p className="text-gray-700 mb-4">
                  We stand behind the quality of our services. If you're not satisfied with your first session, 
                  we offer a full refund or the opportunity to schedule with a different counselor at no additional cost.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <p className="text-yellow-800 text-sm">
                    <strong>Note:</strong> Satisfaction guarantee applies only to first-time clients and first sessions.
                  </p>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Payment Method Refunds</h2>
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-gray-200 rounded-lg">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Payment Method</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Processing Time</th>
                        <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Notes</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Credit Card</td>
                        <td className="px-4 py-3 text-sm text-gray-700">3-5 business days</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Refunded to original card</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">PayPal</td>
                        <td className="px-4 py-3 text-sm text-gray-700">1-2 business days</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Refunded to PayPal account</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-sm text-gray-700">Bank Transfer</td>
                        <td className="px-4 py-3 text-sm text-gray-700">5-7 business days</td>
                        <td className="px-4 py-3 text-sm text-gray-700">Requires bank account verification</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
                <p className="text-gray-700 mb-4">
                  For any questions about our refund policy or to request a refund, please contact us:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="text-sm font-medium text-gray-900">support@careercounsellor.com</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Phone</p>
                    <p className="text-sm font-medium text-gray-900">(555) 123-4567</p>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-lg">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <p className="text-sm text-gray-600">Business Hours</p>
                    <p className="text-sm font-medium text-gray-900">Mon-Fri 9AM-6PM</p>
                  </div>
                </div>
              </section>

            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-12 bg-white rounded-xl shadow-lg p-8 border border-gray-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-gray-600 mb-6">
              Book your career counseling session with confidence, knowing you're protected by our fair refund policy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                Book a Session
              </Link>
              <Link
                to="/contact"
                className="border border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg font-medium transition-colors duration-200"
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

export default RefundPolicy;
