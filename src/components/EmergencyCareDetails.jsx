import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const EmergencyCareDetails = () => {
  const features = [
    "24/7 emergency medical care",
    "Fully equipped trauma center",
    "Rapid response teams",
    "Ambulance services with advanced life support",
    "Emergency cardiac care",
    "Stroke emergency care",
    "Pediatric emergency specialists",
    "Emergency surgical services"
  ];

  const emergencyNumbers = [
    { name: "Main Emergency", number: "108" },
    { name: "Ambulance", number: "102" },
    { name: "Police", number: "100" },
    { name: "Fire", number: "101" }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-12 bg-white"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Link 
            to="/KeyServices" 
            className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to all services
          </Link>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="bg-red-50 p-8 rounded-xl shadow-sm border border-red-100 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">Emergency Care Services</h1>
              <p className="text-lg text-gray-600 mb-6">
                Our Emergency Department is staffed 24 hours a day, 7 days a week with board-certified emergency physicians and nurses specially trained in emergency care. We provide immediate medical attention for all critical and life-threatening conditions.
              </p>
              <div className="bg-red-50 p-4 rounded-lg border border-red-100">
                <h3 className="font-semibold text-red-800 mb-2">Emergency Hotline:</h3>
                <p className="text-2xl font-bold text-gray-800">108 / 102</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Emergency Services We Provide</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-red-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Emergency Contact Numbers</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {emergencyNumbers.map((contact, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.03 }}
                  className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 text-center"
                >
                  <h3 className="text-lg font-medium text-gray-800 mb-1">{contact.name}</h3>
                  <p className="text-red-600 font-bold text-xl">{contact.number}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">What to Do in an Emergency</h2>
            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 flex-1">For life-threatening emergencies, call our hotline immediately or proceed directly to our Emergency Department.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-700 flex-1">Our emergency team will guide you through first aid steps over the phone while help is on the way.</p>
              </div>
              <div className="flex items-start">
                <div className="bg-red-100 text-red-800 rounded-full p-2 mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <p className="text-gray-700 flex-1">Emergency Department Location: Ground Floor, Main Building (clearly marked with red signs)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default EmergencyCareDetails;