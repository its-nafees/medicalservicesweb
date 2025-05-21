import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const OPDConsultationDetails = () => {
  const features = [
    "General physician consultations",
    "Specialist referrals (Cardiology, Neurology, etc.)",
    "Follow-up visits and chronic disease management",
    "Pediatric consultations",
    "Geriatric healthcare services",
    "Women's health and gynecology",
    "Mental health counseling"
  ];

  const doctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "General Physician",
      experience: "12 years",
      image: "https://randomuser.me/api/portraits/women/43.jpg"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Cardiologist",
      experience: "15 years",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Dr. Priya Patel",
      specialty: "Pediatrician",
      experience: "8 years",
      image: "https://randomuser.me/api/portraits/women/65.jpg"
    }
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
            to="/services" 
            className="flex items-center text-blue-600 hover:text-blue-800 mb-8 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to all services
          </Link>

          <div className="flex flex-col md:flex-row gap-8 mb-12">
            <div className="md:w-1/3">
              <div className="bg-blue-50 p-8 rounded-xl shadow-sm border border-blue-100 flex justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
            </div>
            <div className="md:w-2/3">
              <h1 className="text-3xl font-bold text-gray-800 mb-4">OPD Consultation Services</h1>
              <p className="text-lg text-gray-600 mb-6">
                Our Outpatient Department (OPD) provides comprehensive consultation services with experienced doctors across various specialties. 
                We offer personalized care tailored to your specific health needs with minimal waiting times.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-100">
                <h3 className="font-semibold text-blue-800 mb-2">Consultation Hours:</h3>
                <p className="text-gray-700">Monday-Saturday: 8:00 AM - 8:00 PM</p>
                <p className="text-gray-700">Sunday: 9:00 AM - 2:00 PM</p>
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our OPD Services Include</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mt-1 mr-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Expert Doctors</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doctors.map((doctor, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 text-center"
                >
                  <img src={doctor.image} alt={doctor.name} className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
                  <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
                  <p className="text-blue-600 mb-2">{doctor.specialty}</p>
                  <p className="text-gray-600 text-sm">Experience: {doctor.experience}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-xl border border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Book an Appointment</h2>
            <p className="text-gray-600 mb-6">
              Schedule your consultation with our specialists today. We offer both in-person and telemedicine appointments.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/appointment" 
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium text-center transition-colors"
              >
                Book Online
              </Link>
              <div className="bg-white border border-gray-300 px-6 py-3 rounded-lg font-medium text-center">
                <p className="text-gray-700">Call us at</p>
                <p className="text-blue-600 font-semibold">+1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default OPDConsultationDetails;