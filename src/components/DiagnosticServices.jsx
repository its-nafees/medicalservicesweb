import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, 
  FaXRay, 
  FaClock, 
  FaCalendarAlt, 
  FaNotesMedical, 
  FaFileInvoiceDollar,
  FaArrowLeft,
  FaArrowRight
} from 'react-icons/fa';
import { GiMedicalPack } from 'react-icons/gi';
import { MdHealthAndSafety, MdEmergency } from 'react-icons/md';

const DiagnosticServices = () => {
  const laboratoryTests = [
    "Complete Blood Count (CBC)",
    "Blood Chemistry Panels",
    "Hormone Level Testing",
    "Microbiology Cultures",
    "Genetic Testing",
    "Allergy Testing"
  ];

  const imagingServices = [
    "Digital X-rays",
    "MRI (Magnetic Resonance Imaging)",
    "CT Scans (Computed Tomography)",
    "Ultrasound",
    "Mammography",
    "Bone Density Scans"
  ];

  const benefits = [
    {
      title: "Fast Results",
      description: "Most test results available within 24-48 hours, with urgent results prioritized."
    },
    {
      title: "Expert Analysis",
      description: "Board-certified radiologists and pathologists review all results."
    },
    {
      title: "Advanced Technology",
      description: "Latest generation equipment for the most accurate diagnostics."
    },
    {
      title: "Convenient Locations",
      description: "Multiple facilities with extended hours for your convenience."
    }
  ];

  const relatedServices = [
    {
      title: "Preventive Health Checkups",
      description: "Comprehensive health evaluations to detect potential issues early.",
      link: "/services/checkups",
      icon: <MdHealthAndSafety className="text-3xl text-green-600 mb-3" />
    },
    {
      title: "Specialist Consultations",
      description: "Access to expert physicians across various medical specialties.",
      link: "/services/consultations",
      icon: <GiMedicalPack className="text-3xl text-green-600 mb-3" />
    },
    {
      title: "Emergency Care",
      description: "24/7 emergency services for urgent medical needs.",
      link: "/services/emergency",
      icon: <MdEmergency className="text-3xl text-green-600 mb-3" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:flex gap-8">
        {/* Main Content */}
        <div className="lg:w-2/3">
          <div className="flex items-center mb-8">
            <div className="bg-green-100 p-4 rounded-xl shadow-inner">
              <FaFlask className="h-10 w-10 text-green-700" />
            </div>
            <div className="ml-5">
              <h1 className="text-3xl font-bold text-gray-800">Diagnostic Services</h1>
              <p className="text-green-600 font-medium">Precision diagnostics for better health outcomes</p>
            </div>
          </div>
          
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Our state-of-the-art diagnostic services provide comprehensive testing and imaging solutions to accurately 
            identify health conditions and guide treatment plans. We utilize cutting-edge technology and follow strict 
            quality standards to deliver reliable results with exceptional patient care.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-green-200 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-3 rounded-lg mr-4">
                  <FaFlask className="h-6 w-6 text-green-700" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Laboratory Tests</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                {laboratoryTests.map((test, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">✓</span>
                    <span>{test}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-green-200 transition-all">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-3 rounded-lg mr-4">
                  <FaXRay className="h-6 w-6 text-blue-700" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800">Imaging Services</h2>
              </div>
              <ul className="space-y-3 text-gray-600">
                {imagingServices.map((service, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-500 mr-2 mt-1">✓</span>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-8 rounded-2xl mb-10 border border-green-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Why Choose Our Diagnostic Services?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white p-3 rounded-lg shadow-sm mr-4 mt-1">
                    <div className="h-5 w-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">{index + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2 text-lg">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:w-1/3">
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 sticky top-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-6 pb-4 border-b border-gray-200">Quick Information</h2>
            
            <div className="space-y-6">
              <div>
                <div className="flex items-center mb-2">
                  <FaClock className="text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Hours of Operation</h3>
                </div>
                <p className="text-gray-600 ml-8 pl-1">
                  Monday-Friday: 7am-9pm<br />
                  Saturday-Sunday: 8am-6pm
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <FaCalendarAlt className="text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Appointments</h3>
                </div>
                <p className="text-gray-600 ml-8 pl-1 mb-3">
                  Walk-ins welcome, but appointments recommended for faster service.
                </p>
                <button className="ml-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition duration-300 shadow-md hover:shadow-lg">
                  Book an Appointment
                </button>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <FaNotesMedical className="text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Preparation Guidelines</h3>
                </div>
                <p className="text-gray-600 text-sm ml-8 pl-1">
                  Some tests may require fasting or special preparation. 
                  Check with our staff when scheduling.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <FaFileInvoiceDollar className="text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Insurance</h3>
                </div>
                <p className="text-gray-600 text-sm ml-8 pl-1">
                  We accept most major insurance plans. Please verify coverage before your visit.
                </p>
              </div>
              
              <div className="pt-6 border-t border-gray-200">
                <Link 
                  to="/services" 
                  className="text-green-600 hover:text-green-800 font-medium flex items-center transition-colors"
                >
                  <FaArrowLeft className="mr-2" />
                  Back to All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Related Services */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-gray-800 mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-green-600">
          Related Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {relatedServices.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group"
            >
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-5">{service.description}</p>
              <Link 
                to={service.link} 
                className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center transition-colors"
              >
                Learn more
                <FaArrowRight className="ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DiagnosticServices;