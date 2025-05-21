import React, { useState } from 'react';
import { 
  FaAmbulance, 
  FaPhoneAlt, 
  FaHospital, 
  FaFirstAid, 
  FaUserMd, 
  FaClock, 
  FaMapMarkerAlt, 
  FaInfoCircle,
  FaHeart,
  FaLungs,
  FaTint
} from 'react-icons/fa';
import { MdEmergency, MdWarning, MdLocationOn, MdLocalHospital } from 'react-icons/md';
import { motion } from 'framer-motion';

const Emergency = () => {
  const [currentLocation, setCurrentLocation] = useState(null);
  const [locationError, setLocationError] = useState(null);
  const [activeProcedure, setActiveProcedure] = useState(null);

  const emergencyContacts = [
    { id: 1, name: "Ambulance", number: "108", icon: <FaAmbulance className="text-red-500" /> },
    { id: 2, name: "Police", number: "100", icon: <MdEmergency className="text-blue-500" /> },
    { id: 3, name: "Fire Department", number: "101", icon: <MdWarning className="text-orange-500" /> },
    { id: 4, name: "Medical Helpline", number: "104", icon: <FaUserMd className="text-green-500" /> }
  ];

  const emergencyProcedures = [
    { 
      id: 1, 
      title: "Heart Attack", 
      steps: ["Stay calm", "Take aspirin (if not allergic)", "Call emergency services immediately"],
      icon: <FaHeart className="text-red-500" />
    },
    { 
      id: 2, 
      title: "Choking", 
      steps: ["Perform Heimlich maneuver", "Call for help immediately", "Continue until object is expelled or help arrives"],
      icon: <FaLungs className="text-blue-500" />
    },
    { 
      id: 3, 
      title: "Severe Bleeding", 
      steps: ["Apply direct pressure to wound", "Elevate the injured area", "Use a tourniquet if necessary"],
      icon: <FaTint className="text-red-500" />
    }
  ];

  const nearbyHospitals = [
    {
      id: 1,
      name: "Apollo Hospital",
      address: "123 Health Street, Mumbai",
      phone: "+91 123-456-7890",
      distance: "2.5 km",
      emergency: true,
      specialties: ["Cardiology", "Trauma", "Neurology"]
    },
    {
      id: 2,
      name: "City Medical Center",
      address: "456 Care Avenue, Mumbai",
      phone: "+91 987-654-3210",
      distance: "3.8 km",
      emergency: true,
      specialties: ["Pediatrics", "General Surgery"]
    }
  ];

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCurrentLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
          setLocationError(null);
        },
        (error) => {
          setLocationError("Unable to retrieve your location. Please enable location services.");
          console.error("Error getting location:", error);
        }
      );
    } else {
      setLocationError("Geolocation is not supported by your browser.");
    }
  };

  const toggleProcedure = (id) => {
    setActiveProcedure(activeProcedure === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Emergency Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-red-600 text-white py-12"
      >
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <MdEmergency className="text-5xl animate-pulse" />
          </div>
          <h1 className="text-4xl font-bold mb-4">EMERGENCY MEDICAL HELP</h1>
          <p className="text-xl mb-6">Call the numbers below for immediate assistance</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:108" 
              className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-3 rounded-full font-bold text-lg hover:bg-red-50 transition-colors"
            >
              <FaPhoneAlt className="mr-2" /> Call Now: 108
            </a>
            <button 
              onClick={getCurrentLocation}
              className="inline-flex items-center justify-center bg-red-700 text-white px-8 py-3 rounded-full font-bold text-lg hover:bg-red-800 transition-colors"
            >
              <FaMapMarkerAlt className="mr-2" /> Share My Location
            </button>
          </div>
          {locationError && (
            <div className="mt-4 text-yellow-300 flex items-center justify-center">
              <MdWarning className="mr-2" /> {locationError}
            </div>
          )}
          {currentLocation && (
            <div className="mt-4 text-green-300 flex items-center justify-center">
              <FaMapMarkerAlt className="mr-2" /> 
              Location shared: {currentLocation.lat.toFixed(4)}, {currentLocation.lng.toFixed(4)}
            </div>
          )}
        </div>
      </motion.div>

      {/* Emergency Contacts */}
      <div className="container mx-auto px-4 py-12">
        <motion.div 
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {emergencyContacts.map((contact) => (
            <div key={contact.id} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500 hover:shadow-lg transition-shadow">
              <div className="text-3xl mb-3">{contact.icon}</div>
              <h3 className="text-xl font-bold mb-2">{contact.name}</h3>
              <a href={`tel:${contact.number}`} className="text-2xl font-semibold text-gray-800 hover:text-red-600 flex items-center">
                <FaPhoneAlt className="mr-2" /> {contact.number}
              </a>
            </div>
          ))}
        </motion.div>

        {/* Emergency Procedures */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="bg-blue-600 text-white p-4">
            <h2 className="text-2xl font-bold flex items-center">
              <FaFirstAid className="mr-2" /> Emergency Procedures
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 p-6">
            {emergencyProcedures.map((procedure) => (
              <motion.div 
                whileHover={{ scale: 1.02 }}
                key={procedure.id} 
                className="border border-gray-200 rounded-lg p-5 hover:border-blue-300 transition-colors cursor-pointer"
                onClick={() => toggleProcedure(procedure.id)}
              >
                <div className="flex items-start">
                  <div className="text-2xl mr-3">{procedure.icon}</div>
                  <h3 className="text-xl font-bold text-red-600 mb-3">{procedure.title}</h3>
                </div>
                {activeProcedure === procedure.id && (
                  <ul className="mt-3 space-y-2">
                    {procedure.steps.map((step, index) => (
                      <li key={index} className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 rounded-full w-5 h-5 flex items-center justify-center mr-2 mt-1 flex-shrink-0">
                          {index + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mt-3 text-blue-600 text-sm flex items-center">
                  <FaInfoCircle className="mr-1" /> 
                  {activeProcedure === procedure.id ? "Click to collapse" : "Click for instructions"}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Nearby Hospitals */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-12">
          <div className="bg-green-600 text-white p-4">
            <h2 className="text-2xl font-bold flex items-center">
              <MdLocalHospital className="mr-2" /> Nearby Hospitals
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              {nearbyHospitals.map((hospital) => (
                <div key={hospital.id} className="grid md:grid-cols-3 gap-6 border-b pb-6 last:border-b-0 last:pb-0">
                  <div className="md:col-span-2">
                    <h3 className="text-xl font-bold mb-2 flex items-center">
                      <FaHospital className="mr-2 text-green-500" /> {hospital.name}
                    </h3>
                    <p className="text-gray-600 mb-2">{hospital.address}</p>
                    <p className="text-gray-600 mb-2">Distance: {hospital.distance}</p>
                    <p className="flex items-center text-gray-600 mb-3">
                      <FaClock className="mr-2" /> 
                      {hospital.emergency ? "24/7 Emergency Services" : "Limited emergency hours"}
                    </p>
                    <div className="mb-3">
                      <span className="font-medium">Specialties:</span>
                      <div className="flex flex-wrap gap-2 mt-1">
                        {hospital.specialties.map((spec, i) => (
                          <span key={i} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                    <a 
                      href={`tel:${hospital.phone}`} 
                      className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                    >
                      <FaPhoneAlt className="mr-2" /> {hospital.phone}
                    </a>
                  </div>
                  <div className="h-48 bg-gray-200 rounded-lg overflow-hidden">
                    <iframe 
                      title={`Map to ${hospital.name}`}
                      src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7558372923627!2d72.8338643153776!3d19.05272225872683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df3b4d3e3d%3A0x9d6e5b9d5e5b9d5e!2s${encodeURIComponent(hospital.name)}!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Emergency Tips */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-lg">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <MdWarning className="mr-2 text-yellow-600" /> Important Emergency Tips
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>Stay calm and assess the situation before acting</li>
            <li>Ensure your own safety before helping others</li>
            <li>Be prepared to describe the emergency clearly to responders</li>
            <li>Know your exact location or nearby landmarks</li>
            <li>Keep emergency numbers saved in your phone and posted visibly at home</li>
            <li>Learn basic first aid and CPR techniques</li>
            <li>Keep a well-stocked first aid kit at home and in your car</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Emergency;