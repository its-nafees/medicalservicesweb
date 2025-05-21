import React from 'react';
import { motion } from 'framer-motion';

const OPDConsultation = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0 bg-blue-600 md:w-1/3 flex items-center justify-center p-8">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-32 w-32 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </div>
            <div className="p-8 md:w-2/3">
              <div className="uppercase tracking-wide text-sm text-blue-600 font-semibold">Medical Service</div>
              <h1 className="block mt-1 text-3xl font-bold text-gray-900">OPD Consultation</h1>
              <p className="mt-4 text-gray-600 text-lg">
                Our Outpatient Department (OPD) offers expert consultations with qualified doctors for general and specialty healthcare needs.
              </p>
              
              <div className="mt-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Service Features</h2>
                <ul className="list-disc pl-5 space-y-2 text-gray-600">
                  <li>Consultations with experienced specialists</li>
                  <li>Minimal waiting time with appointment system</li>
                  <li>Comprehensive health assessments</li>
                  <li>Personalized treatment plans</li>
                  <li>Follow-up care coordination</li>
                </ul>
              </div>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold text-gray-800 mb-3">Specialties Available</h2>
                <div className="flex flex-wrap gap-3">
                  {['General Medicine', 'Pediatrics', 'Cardiology', 'Dermatology', 'Neurology', 'Orthopedics'].map((specialty) => (
                    <span key={specialty} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                      {specialty}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
                  Book Appointment
                </button>
                <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold py-3 px-6 rounded-lg transition-colors">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </motion.div>
        
        <div className="mt-16 max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "What are your OPD timings?",
                answer: "Our OPD operates from 8:00 AM to 8:00 PM, Monday through Saturday. Sunday timings are 9:00 AM to 2:00 PM."
              },
              {
                question: "Do I need an appointment?",
                answer: "While walk-ins are welcome, we recommend appointments to reduce waiting time. You can book online or by phone."
              },
              {
                question: "What documents should I bring?",
                answer: "Please bring any previous medical records, current medications list, and your health insurance card if applicable."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold text-gray-800">{faq.question}</h3>
                <p className="mt-2 text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OPDConsultation;