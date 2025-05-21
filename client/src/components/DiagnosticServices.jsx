import React from 'react';
import { Link } from 'react-router-dom';

const DiagnosticServices = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:flex gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div className="flex items-center mb-6">
            <div className="bg-green-50 p-3 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
              </svg>
            </div>
            <h1 className="ml-4 text-3xl font-bold text-gray-800">Diagnostic Services</h1>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
            Our state-of-the-art diagnostic services provide comprehensive testing and imaging solutions to accurately identify health conditions and guide treatment plans. We utilize cutting-edge technology and follow strict quality standards to deliver reliable results.
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Laboratory Tests</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Complete Blood Count (CBC)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Blood Chemistry Panels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Hormone Level Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Microbiology Cultures</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Genetic Testing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Allergy Testing</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Imaging Services</h2>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Digital X-rays</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>MRI (Magnetic Resonance Imaging)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>CT Scans (Computed Tomography)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Ultrasound</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Mammography</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">✓</span>
                  <span>Bone Density Scans</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-green-50 p-6 rounded-lg mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Why Choose Our Diagnostic Services?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Fast Results</h3>
                <p className="text-gray-600">Most test results available within 24-48 hours, with urgent results prioritized.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Expert Analysis</h3>
                <p className="text-gray-600">Board-certified radiologists and pathologists review all results.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Advanced Technology</h3>
                <p className="text-gray-600">Latest generation equipment for the most accurate diagnostics.</p>
              </div>
              <div>
                <h3 className="font-medium text-gray-800 mb-2">Convenient Locations</h3>
                <p className="text-gray-600">Multiple facilities with extended hours for your convenience.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md sticky top-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Information</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-800">Hours of Operation</h3>
                <p className="text-gray-600">Monday-Friday: 7am-9pm<br />Saturday-Sunday: 8am-6pm</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800">Appointments</h3>
                <p className="text-gray-600">Walk-ins welcome, but appointments recommended for faster service.</p>
                <button className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md text-sm font-medium transition duration-300">
                  Book an Appointment
                </button>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800">Preparation Guidelines</h3>
                <p className="text-gray-600 text-sm">Some tests may require fasting or special preparation. Check with our staff when scheduling.</p>
              </div>
              
              <div>
                <h3 className="font-medium text-gray-800">Insurance</h3>
                <p className="text-gray-600 text-sm">We accept most major insurance plans. Please verify coverage before your visit.</p>
              </div>
              
              <div className="pt-4 border-t border-gray-200">
                <Link to="/services" className="text-green-600 hover:text-green-800 font-medium flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
                  </svg>
                  Back to All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Services */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-8">Related Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Preventive Health Checkups",
              description: "Comprehensive health evaluations to detect potential issues early.",
              link: "/services/checkups"
            },
            {
              title: "Specialist Consultations",
              description: "Access to expert physicians across various medical specialties.",
              link: "/services/consultations"
            },
            {
              title: "Emergency Care",
              description: "24/7 emergency services for urgent medical needs.",
              link: "/services/emergency"
            }
          ].map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <Link to={service.link} className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center">
                Learn more
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticServices;