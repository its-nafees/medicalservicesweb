import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHeartbeat, FaBrain, FaLungs, FaTooth, FaEye, FaAllergies } from 'react-icons/fa';
import { GiMedicinePills, GiStethoscope } from 'react-icons/gi';
import { RiMentalHealthLine } from 'react-icons/ri';

const OPDConsultationDetails = () => {
  // Specialized care sections with animated icons
  const specialties = [
    {
      name: "Cardiology",
      icon: <FaHeartbeat className="text-3xl text-red-500" />,
      desc: "Heart health assessments and preventive care",
      color: "bg-red-50 border-red-100"
    },
    {
      name: "Neurology",
      icon: <FaBrain className="text-3xl text-indigo-500" />,
      desc: "Brain and nervous system specialists",
      color: "bg-indigo-50 border-indigo-100"
    },
    {
      name: "Pulmonology",
      icon: <FaLungs className="text-3xl text-blue-500" />,
      desc: "Respiratory health and lung function",
      color: "bg-blue-50 border-blue-100"
    },
    {
      name: "Dental Care",
      icon: <FaTooth className="text-3xl text-teal-500" />,
      desc: "Oral health and dental treatments",
      color: "bg-teal-50 border-teal-100"
    },
    {
      name: "Ophthalmology",
      icon: <FaEye className="text-3xl text-amber-500" />,
      desc: "Eye care and vision correction",
      color: "bg-amber-50 border-amber-100"
    },
    {
      name: "Allergy & Immunology",
      icon: <FaAllergies className="text-3xl text-purple-500" />,
      desc: "Allergy testing and immune system care",
      color: "bg-purple-50 border-purple-100"
    }
  ];

  // Unique value propositions
  const values = [
    {
      title: "Holistic Approach",
      icon: <GiMedicinePills className="text-2xl" />,
      content: "We treat the whole person, not just symptoms"
    },
    {
      title: "Precision Diagnosis",
      icon: <GiStethoscope className="text-2xl" />,
      content: "Advanced diagnostic tools for accurate assessments"
    },
    {
      title: "Mental Wellness",
      icon: <RiMentalHealthLine className="text-2xl" />,
      content: "Integrated mental health support in all care plans"
    }
  ];

  // Interactive stats
  const stats = [
    { value: "98%", label: "Patient Satisfaction" },
    { value: "15 min", label: "Average Wait Time" },
    { value: "24/7", label: "Telehealth Support" },
    { value: "50+", label: "Specialists Available" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-gradient-to-b from-blue-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="relative rounded-2xl overflow-hidden mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-blue-600/80"></div>
          <div className="relative z-10 py-20 px-8 text-center">
            <motion.h1 
              initial={{ y: -20 }}
              animate={{ y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white mb-4"
            >
              Personalized Outpatient Care
            </motion.h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Where advanced medicine meets compassionate care in our state-of-the-art outpatient facility
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 inline-block"
            >
              <Link 
                to="/appointment" 
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg hover:bg-blue-50 transition-all"
              >
                Book Your Visit
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Unique Value Proposition */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose Our OPD?</h2>
            <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 text-center"
              >
                <motion.div 
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    transition: { 
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse" 
                    } 
                  }}
                  className="text-blue-500 mb-4 inline-block"
                >
                  {item.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.content}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Interactive Stats */}
        <div className="mb-20 bg-blue-600 rounded-2xl p-8 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-4"
              >
                <p className="text-4xl font-bold mb-2">{stat.value}</p>
                <p className="text-blue-100">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specialized Care */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Specialized Care</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive medical expertise across all major specialties
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                whileHover={{ 
                  scale: 1.03,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                }}
                className={`p-6 rounded-xl border ${specialty.color} flex items-start`}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    transition: { duration: 4, repeat: Infinity }
                  }}
                  className="mr-4"
                >
                  {specialty.icon}
                </motion.div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{specialty.name}</h3>
                  <p className="text-gray-600">{specialty.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Unique Patient Journey */}
        <div className="mb-20 bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:w-1/2 bg-blue-600 p-12 text-white flex items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Your Seamless Care Journey</h2>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="bg-white text-blue-600 rounded-full p-1 mr-4">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Same-day appointment availability</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white text-blue-600 rounded-full p-1 mr-4">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Digital health records accessible 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white text-blue-600 rounded-full p-1 mr-4">
                      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>Multidisciplinary care coordination</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:w-1/2 p-12 bg-gray-50">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Experience the Difference</h3>
              <p className="text-gray-600 mb-6">
                Our patient-centered approach combines cutting-edge technology with personalized attention to create healthcare experiences that exceed expectations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Rapid Diagnostics</h4>
                    <p className="text-gray-600">Most test results within 24 hours</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 text-blue-600 p-2 rounded-lg mr-4">
                    <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">Secure Portal</h4>
                    <p className="text-gray-600">Private access to all health records</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Ready to Begin Your Health Journey?</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Our care coordinators are standing by to match you with the perfect specialist for your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/appointment" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-bold text-lg shadow-lg inline-block"
              >
                Schedule an Appointment
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                to="/doctors" 
                className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-bold text-lg shadow-lg inline-block"
              >
                Meet Our Doctors
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OPDConsultationDetails;