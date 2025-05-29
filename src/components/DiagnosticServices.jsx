import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaFlask, FaXRay, FaClock, FaCalendarAlt, FaNotesMedical, 
  FaFileInvoiceDollar, FaArrowLeft, FaArrowRight, FaUserMd,
  FaRegClock, FaRegCalendarCheck, FaMicroscope, FaChartLine
} from 'react-icons/fa';
import { GiMedicalPack, GiTestTubes } from 'react-icons/gi';
import { MdHealthAndSafety, MdEmergency, MdPrecisionManufacturing } from 'react-icons/md';
import { BiTestTube } from 'react-icons/bi';
import { BsSpeedometer2, BsShieldCheck } from 'react-icons/bs';

const DiagnosticServices = () => {
  // Enhanced diagnostic services data
  const diagnosticServices = {
    laboratory: {
      title: "Advanced Laboratory Testing",
      icon: <GiTestTubes className="text-4xl text-green-600" />,
      tests: [
        {
          name: "Complete Blood Count (CBC)",
          description: "Evaluates overall health and detects disorders",
          turnaround: "2-4 hours"
        },
        {
          name: "Comprehensive Metabolic Panel",
          description: "Measures kidney function, electrolyte levels, and more",
          turnaround: "24 hours"
        },
        {
          name: "Thyroid Function Tests",
          description: "Assesses thyroid gland performance",
          turnaround: "24-48 hours"
        },
        {
          name: "Genetic Testing",
          description: "Advanced DNA analysis for hereditary conditions",
          turnaround: "7-14 days"
        },
        {
          name: "Allergy Panels",
          description: "Identifies environmental and food allergies",
          turnaround: "3-5 days"
        },
        {
          name: "COVID-19 Testing",
          description: "PCR and rapid antigen testing available",
          turnaround: "24-72 hours (PCR), 15 min (rapid)"
        }
      ],
      features: [
        "CAP-accredited laboratory",
        "Robotic automation for precision",
        "Same-day results for critical tests",
        "Mobile phlebotomy services available"
      ]
    },
    imaging: {
      title: "Precision Imaging Services",
      icon: <MdPrecisionManufacturing className="text-4xl text-blue-600" />,
      modalities: [
        {
          name: "3T MRI",
          description: "High-field strength for detailed neurological imaging",
          prep: "None (unless contrast required)"
        },
        {
          name: "128-Slice CT",
          description: "Ultra-fast scanning with reduced radiation",
          prep: "Fasting for abdominal scans"
        },
        {
          name: "3D Mammography",
          description: "Tomosynthesis for early breast cancer detection",
          prep: "No deodorant on exam day"
        },
        {
          name: "Musculoskeletal Ultrasound",
          description: "Dynamic imaging for joints and soft tissues",
          prep: "None"
        },
        {
          name: "DEXA Scan",
          description: "Bone density measurement for osteoporosis",
          prep: "No calcium supplements 24h prior"
        },
        {
          name: "PET/CT Fusion",
          description: "Metabolic and anatomical imaging combined",
          prep: "Low-carb diet 24h prior"
        }
      ],
      features: [
        "AI-assisted image analysis",
        "Sub-specialty radiologist interpretation",
        "Reduced-dose protocols for pediatric patients",
        "Same-day appointments available"
      ]
    }
  };

  // Enhanced benefits section
  const benefits = [
    {
      title: "Rapid Results",
      description: "80% of routine tests completed within 24 hours",
      icon: <BsSpeedometer2 className="text-3xl text-green-600" />,
      stats: "98% on-time result delivery"
    },
    {
      title: "Expert Analysis",
      description: "Fellowship-trained specialists review complex cases",
      icon: <FaUserMd className="text-3xl text-green-600" />,
      stats: "30+ board-certified diagnosticians"
    },
    {
      title: "Cutting-Edge Technology",
      description: "Next-generation diagnostic equipment",
      icon: <MdPrecisionManufacturing className="text-3xl text-green-600" />,
      stats: "$15M annual technology investment"
    },
    {
      title: "Quality Assurance",
      description: "Rigorous quality control protocols",
      icon: <BsShieldCheck className="text-3xl text-green-600" />,
      stats: "CAP, CLIA, and ACR accredited"
    }
  ];

  // Patient stories/testimonials
  const testimonials = [
    {
      quote: "The genetic testing service helped identify my risk factors early, allowing for preventive measures that likely saved my life.",
      author: "Sarah K., 42",
      test: "Comprehensive Genetic Panel"
    },
    {
      quote: "I was amazed at how quickly I got my MRI results - same day with a detailed report from a specialist.",
      author: "Michael T., 56",
      test: "3T MRI Scan"
    }
  ];

  // Technology showcase
  const technologies = [
    {
      name: "Mass Spectrometry",
      description: "For ultra-precise chemical analysis",
      icon: <FaMicroscope className="text-3xl text-blue-500" />
    },
    {
      name: "AI Radiology",
      description: "Machine learning-assisted diagnosis",
      icon: <FaChartLine className="text-3xl text-blue-500" />
    },
    {
      name: "Digital Pathology",
      description: "High-resolution tissue analysis",
      icon: <BiTestTube className="text-3xl text-blue-500" />
    }
  ];

  // Process timeline
  const processSteps = [
    {
      step: "1",
      title: "Order & Schedule",
      description: "Physician orders tests, patient schedules appointment",
      icon: <FaRegCalendarCheck className="text-2xl" />
    },
    {
      step: "2",
      title: "Sample Collection",
      description: "Blood draw, imaging, or other specimen collection",
      icon: <FaFlask className="text-2xl" />
    },
    {
      step: "3",
      title: "Analysis",
      description: "Testing performed by certified technicians",
      icon: <GiTestTubes className="text-2xl" />
    },
    {
      step: "4",
      title: "Physician Review",
      description: "Results interpreted by specialist",
      icon: <FaUserMd className="text-2xl" />
    },
    {
      step: "5",
      title: "Results Delivery",
      description: "Secure electronic delivery to patient and physician",
      icon: <FaNotesMedical className="text-2xl" />
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl p-8 mb-12 border border-green-200">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Advanced Diagnostic Services</h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Precision diagnostics powered by cutting-edge technology and expert analysis. 
              Our comprehensive testing services deliver accurate results to guide your 
              healthcare decisions with confidence.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-green-200 flex items-center">
                <BsShieldCheck className="text-green-600 mr-2" />
                <span className="font-medium">CAP Accredited</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-green-200 flex items-center">
                <FaRegClock className="text-green-600 mr-2" />
                <span className="font-medium">Same-Day Results</span>
              </div>
              <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-green-200 flex items-center">
                <MdPrecisionManufacturing className="text-green-600 mr-2" />
                <span className="font-medium">Latest Technology</span>
              </div>
            </div>
            <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg flex items-center">
              <FaCalendarAlt className="mr-2" />
              Schedule a Test
            </button>
          </div>
          <div className="md:w-1/3 mt-8 md:mt-0 flex justify-center">
            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-200">
              <GiTestTubes className="h-24 w-24 text-green-500 mx-auto" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:flex gap-8">
        <div className="lg:w-2/3">
          {/* Laboratory Services */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-green-100 p-4 rounded-xl shadow-inner">
                {diagnosticServices.laboratory.icon}
              </div>
              <div className="ml-5">
                <h2 className="text-3xl font-bold text-gray-800">{diagnosticServices.laboratory.title}</h2>
                <p className="text-green-600 font-medium">Accurate results for informed decisions</p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 mb-8">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Test Name</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Description</th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Turnaround Time</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {diagnosticServices.laboratory.tests.map((test, index) => (
                    <tr key={index} className="hover:bg-gray-50">
                      <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{test.name}</td>
                      <td className="px-6 py-4 text-gray-600">{test.description}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-gray-600">{test.turnaround}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {diagnosticServices.laboratory.features.map((feature, index) => (
                <div key={index} className="bg-white p-5 rounded-lg shadow-sm border border-gray-100 flex items-start">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Imaging Services */}
          <section className="mb-16">
            <div className="flex items-center mb-8">
              <div className="bg-blue-100 p-4 rounded-xl shadow-inner">
                {diagnosticServices.imaging.icon}
              </div>
              <div className="ml-5">
                <h2 className="text-3xl font-bold text-gray-800">{diagnosticServices.imaging.title}</h2>
                <p className="text-blue-600 font-medium">Advanced imaging for precise diagnosis</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {diagnosticServices.imaging.modalities.map((modality, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-blue-200 transition-all">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{modality.name}</h3>
                  <p className="text-gray-600 mb-4">{modality.description}</p>
                  <div className="bg-blue-50 px-3 py-2 rounded-lg inline-block">
                    <span className="text-blue-700 text-sm font-medium">Preparation: {modality.prep}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100">
              <h3 className="text-xl font-semibold text-gray-800 mb-6">Imaging Center Features</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {diagnosticServices.imaging.features.map((feature, index) => (
                  <div key={index} className="flex items-start">
                    <div className="bg-blue-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="text-gray-700">{feature}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Diagnostic Process */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Diagnostic Process</h2>
            <div className="relative">
              <div className="absolute left-5 top-0 h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={index} className="relative flex items-start group">
                    <div className="absolute left-5 h-full w-0.5 bg-green-100 opacity-0 group-last:opacity-0" aria-hidden="true"></div>
                    <div className="relative flex items-center justify-center flex-shrink-0 bg-white border-2 border-green-500 rounded-full h-10 w-10 group-hover:bg-green-100 transition-colors">
                      <span className="text-green-700 font-bold">{step.step}</span>
                    </div>
                    <div className="ml-6">
                      <h3 className="text-lg font-medium text-gray-900">{step.title}</h3>
                      <p className="mt-2 text-gray-600">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          
          {/* Technology Showcase */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Diagnostic Technology</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 text-center hover:shadow-lg transition-shadow">
                  <div className="mx-auto mb-4 flex justify-center">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{tech.name}</h3>
                  <p className="text-gray-600">{tech.description}</p>
                </div>
              ))}
            </div>
          </section>
          
          {/* Testimonials */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Patient Experiences</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100">
                  <div className="flex items-start mb-4">
                    <svg className="h-8 w-8 text-green-500 mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                    </svg>
                    <p className="text-gray-700 italic">"{testimonial.quote}"</p>
                  </div>
                  <div className="pl-11">
                    <p className="font-medium text-gray-900">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.test}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
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
                  Monday-Friday: 6am-10pm<br />
                  Saturday: 7am-8pm<br />
                  Sunday: 8am-6pm<br />
                  <span className="text-sm text-gray-500">*24/7 emergency testing available</span>
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <FaCalendarAlt className="text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Appointments</h3>
                </div>
                <p className="text-gray-600 ml-8 pl-1 mb-3">
                  Schedule online or call our central scheduling:
                </p>
                <div className="ml-8 bg-blue-50 p-3 rounded-lg mb-3">
                  <p className="font-bold text-blue-800">(555) 123-4567</p>
                </div>
                <button className="ml-8 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white px-5 py-2.5 rounded-lg text-sm font-semibold transition duration-300 shadow-md hover:shadow-lg w-full">
                  Book Online Now
                </button>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <FaNotesMedical className="text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Getting Results</h3>
                </div>
                <p className="text-gray-600 text-sm ml-8 pl-1">
                  Results available through our secure patient portal. Critical results are communicated directly by your physician.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-2">
                  <FaFileInvoiceDollar className="text-green-600 mr-3" />
                  <h3 className="font-semibold text-gray-800">Billing & Insurance</h3>
                </div>
                <p className="text-gray-600 text-sm ml-8 pl-1 mb-2">
                  We accept most major insurance plans. Self-pay options and payment plans available.
                </p>
                <a href="#" className="ml-8 text-blue-600 hover:text-blue-800 text-sm font-medium">View accepted insurance</a>
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
          
          {/* Why Choose Us */}
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-xl shadow-lg border border-green-100 mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Why Choose Our Diagnostics?</h2>
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                    <p className="text-gray-600 text-sm">{benefit.description}</p>
                    <p className="text-green-700 text-xs font-medium mt-1">{benefit.stats}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-2xl p-8 text-center text-white mb-16">
        <h2 className="text-3xl font-bold mb-4">Ready for Your Diagnostic Tests?</h2>
        <p className="text-xl text-green-100 mb-6 max-w-2xl mx-auto">
          Get started with world-class diagnostic services today. Our team is ready to assist you.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button className="bg-white text-green-700 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg">
            Schedule an Appointment
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-green-800 px-6 py-3 rounded-lg font-semibold transition duration-300 shadow-md hover:shadow-lg">
            Contact Our Team
          </button>
        </div>
      </div>
      
      {/* Related Services */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-green-600">
          Comprehensive Care Services
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
            <MdHealthAndSafety className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
              Preventive Health Screenings
            </h3>
            <p className="text-gray-600 mb-5">
              Comprehensive health evaluations designed to detect potential issues before symptoms appear.
            </p>
            <Link 
              to="/services/checkups" 
              className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center transition-colors"
            >
              Learn more
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
            <GiMedicalPack className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
              Specialist Consultations
            </h3>
            <p className="text-gray-600 mb-5">
              Connect with our network of specialists to discuss your diagnostic results and treatment options.
            </p>
            <Link 
              to="/services/consultations" 
              className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center transition-colors"
            >
              Learn more
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-green-200 group">
            <MdEmergency className="text-4xl text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-green-700 transition-colors">
              Urgent Care Services
            </h3>
            <p className="text-gray-600 mb-5">
              Immediate care for non-life-threatening conditions with on-site diagnostic capabilities.
            </p>
            <Link 
              to="/services/urgent-care" 
              className="text-green-600 hover:text-green-800 font-medium text-sm flex items-center transition-colors"
            >
              Learn more
              <FaArrowRight className="ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticServices;