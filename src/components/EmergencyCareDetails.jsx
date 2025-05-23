import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EmergencyCareDetails = () => {
  // Enhanced features with icons
  const features = [
    {
      title: "24/7 Trauma Center",
      description: "Level 1 trauma center with immediate surgical capabilities",
      icon: "⚕️"
    },
    {
      title: "Cardiac Emergency",
      description: "24/7 STEMI program for heart attacks with <90 minute door-to-balloon time",
      icon: "❤️"
    },
    {
      title: "Stroke Unit",
      description: "Certified stroke center with 24/7 neurologist availability",
      icon: "🧠"
    },
    {
      title: "Pediatric ER",
      description: "Dedicated pediatric emergency specialists and child-friendly environment",
      icon: "👶"
    },
    {
      title: "Air Ambulance",
      description: "Helicopter EMS with 150km coverage radius",
      icon: "🚁"
    },
    {
      title: "Toxicology",
      description: "Poison control specialists and antidote bank",
      icon: "⚠️"
    },
    {
      title: "Burn Unit",
      description: "Specialized burn care with isolation facilities",
      icon: "🔥"
    },
    {
      title: "Psychiatric ER",
      description: "Secure behavioral health emergency services",
      icon: "🧠"
    }
  ];

  // Enhanced emergency contacts with categories
  const emergencyNumbers = [
    { 
      category: "Medical Emergencies",
      contacts: [
        { name: "Emergency Hotline", number: "108" },
        { name: "Ambulance", number: "102" },
        { name: "Poison Control", number: "1800-456-789" }
      ]
    },
    {
      category: "Public Safety",
      contacts: [
        { name: "Police", number: "100" },
        { name: "Fire Department", number: "101" },
        { name: "Disaster Response", number: "1090" }
      ]
    },
    {
      category: "Specialty Lines",
      contacts: [
        { name: "Mental Health Crisis", number: "1860-266-2345" },
        { name: "Child Emergency", number: "1098" },
        { name: "Women's Helpline", number: "181" }
      ]
    }
  ];

  // Emergency preparedness tips
  const emergencyTips = [
    {
      title: "Before Arrival",
      items: [
        "Call emergency number first",
        "Have patient's medical history ready",
        "Clear pathway for responders"
      ]
    },
    {
      title: "What to Bring",
      items: [
        "ID and insurance cards",
        "Current medications list",
        "Any relevant medical reports"
      ]
    },
    {
      title: "At the ER",
      items: [
        "Triage nurse will assess first",
        "Critical cases seen immediately",
        "Average wait times displayed"
      ]
    }
  ];

  // Emergency department stats
  const stats = [
    { value: "24/7", label: "Operation" },
    { value: "<5min", label: "Average Triage Time" },
    { value: "45", label: "Treatment Bays" },
    { value: "98%", label: "Patient Satisfaction" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Back button with improved styling */}
          <Link 
            to="/services" 
            className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors mb-8"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to all services
          </Link>

          {/* Hero section with emergency alert */}
          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl shadow-sm border border-red-200 flex flex-col items-center">
                <div className="bg-red-100 p-4 rounded-full mb-4 animate-pulse">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Alert</h3>
                <p className="text-center text-gray-700 mb-4">For immediate life-threatening conditions</p>
                <div className="bg-white p-3 rounded-lg border border-red-200 w-full text-center">
                  <p className="text-sm text-gray-600 mb-1">Emergency Hotline</p>
                  <p className="text-3xl font-bold text-red-600">108 / 102</p>
                </div>
              </div>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Emergency & Trauma Center</h1>
              <p className="text-xl text-gray-600 mb-6">
                Our state-of-the-art Emergency Department is staffed by board-certified emergency physicians and specialty-trained nurses, equipped to handle all critical conditions with the highest level of care and shortest response times in the region.
              </p>
              
              {/* Stats grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {stats.map((stat, index) => (
                  <div key={index} className="bg-gray-50 p-3 rounded-lg border border-gray-200 text-center">
                    <p className="text-2xl font-bold text-red-600">{stat.value}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h3 className="font-semibold text-blue-800 mb-2">ER Wait Times</h3>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                  <p className="text-gray-800">
                    Current average wait time: <span className="font-bold">12 minutes</span> (non-critical cases)
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced features section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Comprehensive Emergency Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 hover:border-red-200 transition-all"
                >
                  <div className="text-3xl mb-3">{feature.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Emergency contacts with categories */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Emergency Contact Numbers</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {emergencyNumbers.map((category, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                  <h3 className="text-xl font-bold text-red-700 mb-4 border-b pb-2">{category.category}</h3>
                  <div className="space-y-3">
                    {category.contacts.map((contact, i) => (
                      <div key={i} className="flex justify-between items-center bg-white p-3 rounded-lg">
                        <span className="font-medium text-gray-700">{contact.name}</span>
                        <span className="font-bold text-red-600">{contact.number}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Emergency preparedness */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {emergencyTips.map((section, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-0.5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Emergency location map */}
          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Emergency Department Location</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Getting Here</h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Main Hospital Building, Ground Floor (Red Zone)</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                        <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1v-1a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H19a1 1 0 001-1V5a1 1 0 00-1-1H3z" />
                      </svg>
                      <span>Dedicated ambulance entrance on North Side</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-blue-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span>Helipad access for air ambulance cases</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-sm">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Parking Information</h3>
                  <p className="text-gray-700 mb-2">Emergency parking available in designated red zones (first 30 minutes free)</p>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    Parking attendants available 24/7
                  </div>
                </div>
              </div>
              <div className="bg-gray-200 rounded-lg flex items-center justify-center h-64">
                <p className="text-gray-500">[Interactive Hospital Map Here]</p>
              </div>
            </div>
          </div>

          {/* Emergency team section */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-xl border border-red-200">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Emergency Care Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Specialized Staff</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Board-certified emergency physicians</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Trauma surgeons on-site 24/7</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Pediatric emergency specialists</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Quality Assurance</h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>JCI-accredited emergency services</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Continuous staff training and simulations</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2 mt-0.5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>Real-time emergency response monitoring</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmergencyCareDetails;