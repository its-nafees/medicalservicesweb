import React from 'react';
import { Link } from 'react-router-dom';
import { 
  FaSyringe,
  FaClock,
  FaCalendarAlt,
  FaNotesMedical,
  FaFileInvoiceDollar,
  FaArrowLeft,
  FaArrowRight,
  FaChild,
  FaGlobeAmericas,
  FaShieldAlt,
  FaClipboardCheck,
  FaUserMd
} from 'react-icons/fa';
import { MdHealthAndSafety, MdVaccines } from 'react-icons/md';
import { GiMedicalPack } from 'react-icons/gi';

const BookVaccinations = () => {
  const vaccineTypes = [
    { 
      name: "Childhood Immunizations", 
      icon: <FaChild className="text-yellow-500 text-2xl" />,
      details: "DTaP, MMR, Polio, Hepatitis B, and other essential childhood vaccines"
    },
    { 
      name: "Seasonal Flu Vaccines", 
      icon: <FaSyringe className="text-yellow-500 text-2xl" />,
      details: "Annual influenza vaccines for all ages (standard and high-dose options)"
    },
    { 
      name: "COVID-19 Vaccines", 
      icon: <MdVaccines className="text-yellow-500 text-2xl" />,
      details: "Primary series and booster shots available for all eligible age groups"
    },
    { 
      name: "Travel Vaccines", 
      icon: <FaGlobeAmericas className="text-yellow-500 text-2xl" />,
      details: "Yellow Fever, Typhoid, Hepatitis A, and other travel-specific immunizations"
    },
    { 
      name: "HPV Vaccine", 
      icon: <FaShieldAlt className="text-yellow-500 text-2xl" />,
      details: "Protection against human papillomavirus (recommended ages 9-45)"
    },
    { 
      name: "Shingles Vaccine", 
      icon: <GiMedicalPack className="text-yellow-500 text-2xl" />,
      details: "Shingrix vaccine for adults 50+ (2-dose series)"
    }
  ];

  const benefits = [
    {
      title: "CDC-Recommended Protocols",
      description: "All vaccines administered according to current CDC immunization schedules and guidelines.",
      icon: <FaClipboardCheck className="text-yellow-600 text-xl" />
    },
    {
      title: "Expert Administration",
      description: "Vaccines administered by our team of trained, certified healthcare professionals.",
      icon: <FaUserMd className="text-yellow-600 text-xl" />
    },
    {
      title: "Comprehensive Vaccine Care",
      description: "Pre-vaccination counseling, detailed documentation, and follow-up care included.",
      icon: <MdHealthAndSafety className="text-yellow-600 text-xl" />
    },
    {
      title: "Insurance & Cost Support",
      description: "We accept most insurance plans and offer affordable self-pay options.",
      icon: <FaFileInvoiceDollar className="text-yellow-600 text-xl" />
    }
  ];

  const faqs = [
    {
      question: "What should I bring to my vaccination appointment?",
      answer: "Please bring your photo ID, insurance card, and vaccination records if available."
    },
    {
      question: "Are there any side effects from vaccines?",
      answer: "Mild side effects like soreness or low-grade fever are normal and typically resolve within 1-2 days."
    },
    {
      question: "Can I get multiple vaccines at once?",
      answer: "Yes, most vaccines can be administered simultaneously following CDC guidelines."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Hero Header */}
      <div className="bg-gradient-to-r from-yellow-50 to-amber-50 p-8 rounded-2xl mb-12 border border-yellow-100 shadow-sm">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
            <div className="bg-white p-5 rounded-full shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
          </div>
          <div className="md:w-2/3 text-center md:text-left">
            <h1 className="text-4xl font-bold text-gray-800 mb-3">Vaccination Services</h1>
            <p className="text-xl text-amber-700 font-medium mb-4">Protecting you and your family through immunization</p>
            <p className="text-gray-600">
              Our comprehensive vaccination program offers CDC-recommended immunizations for all ages, 
              from routine childhood vaccines to specialized travel immunizations. 
              Stay protected with our expert-administered vaccines in a comfortable, caring environment.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:flex gap-8">
        <div className="lg:w-2/3">
          {/* Vaccine Types with Enhanced Cards */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaSyringe className="text-yellow-600 mr-3 text-2xl" /> 
              Our Vaccine Offerings
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {vaccineTypes.map((vaccine, index) => (
                <div 
                  key={index} 
                  className="bg-white p-5 rounded-xl shadow-md border-l-4 border-yellow-400 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start mb-3">
                    <div className="mr-4">
                      {vaccine.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{vaccine.name}</h3>
                  </div>
                  <p className="text-gray-600 pl-10">{vaccine.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="bg-gradient-to-br from-amber-50 to-yellow-50 p-8 rounded-2xl mb-10 border border-amber-100">
            <h2 className="text-2xl font-bold text-gray-800 mb-8 text-center">
              Why Choose Our Vaccination Services?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start bg-white p-5 rounded-lg shadow-sm">
                  <div className="bg-yellow-100 p-3 rounded-full mr-4">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800 mb-2 text-lg">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Vaccine Schedule */}
          <div className="bg-white p-6 rounded-xl shadow-md mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaCalendarAlt className="text-yellow-600 mr-3" />
              Recommended Vaccination Schedule
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white rounded-lg overflow-hidden">
                <thead className="bg-yellow-50">
                  <tr>
                    <th className="px-4 py-3 text-left text-gray-700 font-semibold">Age</th>
                    <th className="px-4 py-3 text-left text-gray-700 font-semibold">Recommended Vaccines</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  <tr>
                    <td className="px-4 py-3 font-medium">Infants (0-12 months)</td>
                    <td className="px-4 py-3 text-gray-600">HepB, DTaP, Hib, PCV13, Polio, Rotavirus</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="px-4 py-3 font-medium">Children (1-12 years)</td>
                    <td className="px-4 py-3 text-gray-600">MMR, Varicella, HepA, Influenza (annual)</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 font-medium">Adolescents (13-18)</td>
                    <td className="px-4 py-3 text-gray-600">HPV, Meningococcal, Tdap booster</td>
                  </tr>
                  <tr className="bg-amber-50">
                    <td className="px-4 py-3 font-medium">Adults (19+)</td>
                    <td className="px-4 py-3 text-gray-600">Td/Tdap boosters, Shingles, Pneumococcal</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaNotesMedical className="text-yellow-600 mr-3" />
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-100 pb-4">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:w-1/3 mt-8 lg:mt-0">
          <div className="bg-white p-6 rounded-xl shadow-lg sticky top-8 border border-yellow-100">
            <h2 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
              Vaccination Information
            </h2>
            
            <div className="space-y-6">
              {/* Hours */}
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <FaClock className="text-yellow-600 mr-2" /> Clinic Hours
                </h3>
                <div className="ml-6">
                  <p className="text-gray-700 font-medium">Monday - Friday</p>
                  <p className="text-gray-600">8:00 AM - 7:00 PM</p>
                  <p className="text-gray-700 font-medium mt-2">Saturday</p>
                  <p className="text-gray-600">9:00 AM - 4:00 PM</p>
                  <p className="text-gray-700 font-medium mt-2">Sunday</p>
                  <p className="text-gray-600">Closed</p>
                </div>
              </div>

              {/* Appointment Booking */}
              <div className="bg-amber-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <FaCalendarAlt className="text-amber-600 mr-2" /> Schedule Your Visit
                </h3>
                <p className="text-gray-600 ml-6 mb-4">
                  Walk-ins welcome but appointments recommended for faster service.
                </p>
                <Link
                  to="/book-vaccination"
                  className="ml-6 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white px-5 py-2.5 rounded-lg font-medium transition duration-300 shadow-md hover:shadow-lg inline-flex items-center"
                >
                  Book Vaccination
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>

              {/* Preparation */}
              <div>
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <FaNotesMedical className="text-yellow-600 mr-2" /> Preparation Tips
                </h3>
                <ul className="text-gray-600 ml-6 space-y-2">
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Bring photo ID and insurance card</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Wear loose clothing for arm access</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Stay hydrated before your visit</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-500 mr-2">•</span>
                    <span>Bring previous vaccination records if available</span>
                  </li>
                </ul>
              </div>

              {/* Insurance */}
              <div className="bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center">
                  <FaFileInvoiceDollar className="text-yellow-600 mr-2" /> Insurance Information
                </h3>
                <p className="text-gray-600 ml-6">
                  We accept most major insurance plans including Medicare and Medicaid. 
                  Self-pay options available at competitive rates.
                </p>
              </div>

              {/* Back Link */}
              <Link 
                to="/services" 
                className="flex items-center justify-center text-yellow-600 hover:text-yellow-800 mt-6 pt-6 border-t border-gray-200 font-medium"
              >
                <FaArrowLeft className="mr-2" /> Back to All Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookVaccinations;