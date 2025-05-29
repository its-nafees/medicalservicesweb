import React from 'react';
import { Link } from 'react-router-dom';

const HealthCheckups = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mb-12 text-center">
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-full p-4 inline-flex shadow-md mb-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-purple-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
            </svg>
          </div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Comprehensive Health Checkups</h1>
          <p className="text-xl text-gray-600 mb-6">
            Proactive care through advanced diagnostic screenings tailored to your age, gender, and lifestyle.
          </p>
          <div className="flex justify-center gap-4">
            <Link 
              to="/services/checkups/book" 
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
            >
              Book Your Checkup
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Benefits Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Benefits</h2>
          <ul className="space-y-3">
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Early detection of health risks</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Personalized health recommendations</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Prevention-focused approach</span>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-100 text-purple-600 rounded-full p-1 mr-3">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span>Comprehensive health baseline</span>
            </li>
          </ul>
        </div>

        {/* Packages Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-indigo-500">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Packages</h2>
          <div className="space-y-4">
            {[
              { name: "Basic Wellness", price: "₹1,499", tests: "25+ tests" },
              { name: "Executive Health", price: "₹3,999", tests: "50+ tests" },
              { name: "Cardiac Care", price: "₹5,499", tests: "Heart-focused" },
              { name: "Diabetes Care", price: "₹4,299", tests: "Comprehensive" },
              { name: "Women's Wellness", price: "₹6,999", tests: "Specialized" },
              { name: "Senior Health", price: "₹7,499", tests: "Complete panel" },
            ].map((pkg, index) => (
              <div key={index} className="border-b border-gray-100 pb-3 last:border-0">
                <div className="flex justify-between items-center">
                  <h3 className="font-medium text-gray-800">{pkg.name}</h3>
                  <span className="text-purple-600 font-semibold">{pkg.price}</span>
                </div>
                <p className="text-sm text-gray-500">{pkg.tests}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Process Card */}
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">How It Works</h2>
          <ol className="space-y-4">
            {[
              "Book your appointment online or via phone",
              "8-12 hours fasting required before tests",
              "Visit our center for sample collection",
              "Receive reports within 24-48 hours",
              "Free doctor consultation to review results",
              "Personalized health plan provided"
            ].map((step, index) => (
              <li key={index} className="flex items-start">
                <span className="bg-blue-100 text-blue-600 rounded-full w-6 h-6 flex items-center justify-center mr-3 flex-shrink-0">
                  {index + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Detailed Information */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
        <div className="md:flex">
          <div className="md:w-1/3 bg-purple-600 p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold text-white mb-4">Why Regular Checkups Matter</h2>
            <p className="text-purple-100 mb-6">
              70% of lifestyle diseases can be prevented with early detection through regular health screenings.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="bg-purple-500 rounded-lg p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Detect issues before symptoms appear</span>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-500 rounded-lg p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Monitor existing conditions effectively</span>
              </div>
              <div className="flex items-center">
                <div className="bg-purple-500 rounded-lg p-2 mr-3">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-white font-medium">Reduce long-term healthcare costs</span>
              </div>
            </div>
          </div>
          <div className="md:w-2/3 p-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h3>
            <div className="space-y-6">
              {[
                {
                  question: "How often should I get a health checkup?",
                  answer: "We recommend annual checkups for adults. Those with chronic conditions or risk factors may need more frequent monitoring."
                },
                {
                  question: "What should I bring to my appointment?",
                  answer: "Please bring your ID, any previous medical reports, list of medications, and insurance information if applicable."
                },
                {
                  question: "Are the tests painful?",
                  answer: "Most tests are non-invasive or involve minimal discomfort. Blood tests require a small needle prick similar to a vaccination."
                },
                {
                  question: "How do I prepare for my health checkup?",
                  answer: "Fast for 8-12 hours before your appointment. Drink water to stay hydrated. Avoid strenuous exercise 24 hours prior."
                }
              ].map((faq, index) => (
                <div key={index}>
                  <h4 className="font-medium text-gray-800 mb-1">{faq.question}</h4>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">What Our Patients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              quote: "The comprehensive checkup helped detect my prediabetes early. With lifestyle changes, I avoided developing full diabetes.",
              name: "Rahul Sharma",
              role: "IT Professional, 42"
            },
            {
              quote: "The women's health package was thorough yet comfortable. The doctor took time to explain all my reports in detail.",
              name: "Priya Patel",
              role: "Marketing Executive, 35"
            },
            {
              quote: "As a senior citizen, I appreciate the geriatric-focused tests. The home sample collection was very convenient.",
              name: "Suresh Iyer",
              role: "Retired Banker, 68"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="bg-purple-100 text-purple-600 rounded-full w-10 h-10 flex items-center justify-center mr-3">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Take Charge of Your Health Today</h2>
        <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
          Our expert team and advanced diagnostics provide you with the most comprehensive health assessment available.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/services/checkups/book" 
            className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-lg font-medium transition-all transform hover:scale-105 shadow-lg"
          >
            Book Now
          </Link>
          <Link 
            to="/contact" 
            className="border-2 border-white hover:bg-white hover:bg-opacity-10 text-white px-8 py-3 rounded-lg font-medium transition-all"
          >
            Contact Our Experts
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthCheckups;