import React, { useState, useEffect } from "react";
import {
  FaUser,
  FaPhone,
  FaChevronDown,
  FaTimes,
  FaBars,
  FaCalendarAlt,
  FaStethoscope,
  FaHospitalUser,
  FaHome,
  FaUserMd
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import AppointmentWidget from "./AppointmentWidget";

const MainNavigation = ({ role }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [showAppointment, setShowAppointment] = useState(false);
  const location = useLocation();

  const medicalServices = [
    { name: "OPD Consultation", icon: <FaHospitalUser className="mr-2" />, path: "/services/opd" },
    { name: "Emergency Care", icon: <FaPhone className="mr-2 text-red-500" />, path: "/emergency" },
    { name: "Diagnostic Tests", icon: <FaStethoscope className="mr-2" />, path: "/services/diagnostics" },
    { name: "Vaccinations", icon: "💉", path: "/services/vaccinations" },
    { name: "Health Checkups", icon: "🩺", path: "/services/checkups" }
  ];

  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleServices = () => {
    setServicesOpen(!servicesOpen);
  };

  const closeMobileMenu = () => {
    setIsOpen(false);
    setServicesOpen(false);
  };

  // Check if current route is admin or patient portal
  const isPortalRoute = location.pathname.startsWith('/admin') || location.pathname.startsWith('/patient');

  if (isPortalRoute) {
    return (
      <header className="bg-white shadow-sm">
        <div className="flex justify-between items-center p-4">
          <h2 className="font-bold text-lg capitalize">{role} Portal</h2>
          <button className="text-gray-500 hover:text-gray-700">Logout</button>
        </div>
      </header>
    );
  }

  return (
    <>
      <nav className={`fixed top-0 w-full bg-white z-50 shadow-md transition-all duration-300 ${scrolling ? "h-16" : "h-20"}`}>
        <div className="container mx-auto px-4 h-full">
          <div className="flex items-center justify-between h-full">
            
            {/* Logo */}
            <Link to="/" className="flex items-center h-full">
              <img 
                src="/images/1-removebg-preview(1).png" 
                alt="Hospital Logo" 
                className="h-full w-auto py-2"
              />
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link 
                to="/" 
                className="flex items-center text-gray-700 hover:text-blue-600 font-semibold transition-colors px-3 py-2 hover:scale-105"
              >
                <FaHome className="mr-2" /> HOME
              </Link>
              
              <div className="relative"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}>
                <button className="flex items-center text-gray-700 hover:text-blue-600 font-semibold transition-colors px-3 py-2 hover:scale-105">
                  SERVICES <FaChevronDown className={`ml-1 text-xs transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-xl border border-gray-100 z-50">
                    {medicalServices.map((service, index) => (
                      <Link 
                        key={index} 
                        to={service.path}
                        className="flex items-center px-4 py-3 text-gray-700 hover:bg-blue-50 hover:text-blue-600 font-medium border-b border-gray-100 last:border-b-0 transition-all duration-200"
                        onClick={closeMobileMenu}
                      >
                        {service.icon} {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                to="/doctors" 
                className="flex items-center text-gray-700 hover:text-blue-600 font-semibold transition-colors px-3 py-2 hover:scale-105"
              >
                <FaUserMd className="mr-2" /> DOCTORS
              </Link>
              
              <button 
                onClick={() => setShowAppointment(true)}
                className="flex items-center text-gray-700 hover:text-blue-600 font-semibold transition-colors px-3 py-2 hover:scale-105"
              >
                <FaCalendarAlt className="mr-2" /> APPOINTMENTS
              </button>
              
              <Link 
                to="/contact" 
                className="flex items-center text-gray-700 hover:text-blue-600 font-semibold transition-colors px-3 py-2 hover:scale-105"
              >
                CONTACT
              </Link>

              <Link 
                to="/emergency" 
                className="flex items-center bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <FaPhone className="mr-2" /> EMERGENCY
              </Link>
              
              <Link 
                to="/login" 
                className="flex items-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <FaUser className="mr-2" /> LOGIN
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-800 focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <FaTimes className="text-2xl" />
              ) : (
                <FaBars className="text-2xl" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="lg:hidden mt-2 pb-4 space-y-2 bg-white rounded-lg shadow-lg">
              <Link 
                to="/" 
                className="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 font-semibold hover:bg-blue-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                <FaHome className="mr-3" /> HOME
              </Link>
              
              <div className="relative">
                <button 
                  className="flex justify-between items-center w-full py-3 px-4 text-gray-700 hover:text-blue-600 font-semibold hover:bg-blue-50 rounded-md"
                  onClick={toggleServices}
                >
                  <span className="flex items-center">
                    <FaStethoscope className="mr-3" /> SERVICES
                  </span>
                  <FaChevronDown className={`transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>
                
                {servicesOpen && (
                  <div className="ml-6 mt-1 bg-gray-50 rounded-md">
                    {medicalServices.map((service, index) => (
                      <Link 
                        key={index} 
                        to={service.path}
                        className="flex items-center py-2 px-4 text-gray-700 hover:text-blue-600 font-medium hover:bg-blue-50 rounded-md transition-colors"
                        onClick={closeMobileMenu}
                      >
                        <span className="mr-3">{service.icon}</span> {service.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              
              <Link 
                to="/doctors" 
                className="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 font-semibold hover:bg-blue-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                <FaUserMd className="mr-3" /> DOCTORS
              </Link>
              
              <button 
                onClick={() => {
                  setShowAppointment(true);
                  closeMobileMenu();
                }}
                className="w-full flex items-center text-left py-3 px-4 text-gray-700 hover:text-blue-600 font-semibold hover:bg-blue-50 rounded-md transition-colors"
              >
                <FaCalendarAlt className="mr-3" /> APPOINTMENTS
              </button>
              
              <Link 
                to="/contact" 
                className="flex items-center py-3 px-4 text-gray-700 hover:text-blue-600 font-semibold hover:bg-blue-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                CONTACT
              </Link>

              <div className="pt-2 mt-2 border-t border-gray-200 space-y-2">
                <Link 
                  to="/emergency"
                  className="flex justify-center items-center py-2 px-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  <FaPhone className="mr-2" /> EMERGENCY
                </Link>
                <Link 
                  to="/login" 
                  className="flex justify-center items-center py-2 px-4 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-bold rounded-lg transition-colors"
                  onClick={closeMobileMenu}
                >
                  <FaUser className="mr-2" /> PATIENT LOGIN
                </Link>
                <button 
                  onClick={() => {
                    setShowAppointment(true);
                    closeMobileMenu();
                  }}
                  className="w-full flex justify-center items-center py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors"
                >
                  <FaCalendarAlt className="mr-2" /> BOOK APPOINTMENT
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Appointment Widget */}
      {showAppointment && <AppointmentWidget onClose={() => setShowAppointment(false)} />}
    </>
  );
};

export default MainNavigation;