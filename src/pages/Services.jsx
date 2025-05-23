


  import React from 'react';
  import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
  
  export default function Services () {
    const services = [
      {
        id: 1,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        ),
        title: "OPD Consultation",
        description: "Expert consultations with qualified doctors for general and specialty healthcare needs.",
        link: "/services/opd",
        color: "bg-blue-50"
      },
      {
        id: 2,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
          </svg>
        ),
        title: "Emergency Care",
        description: "24/7 emergency services with fully equipped facilities and rapid response teams.",
        link: "/services/emergency",
        color: "bg-red-50"
      },
      {
        id: 3,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
          </svg>
        ),
        title: "Diagnostic Services",
        description: "Advanced laboratory tests, imaging services (X-ray, MRI, CT Scan) and accurate diagnostics.",
        link: "/services/diagnostics",
        color: "bg-green-50"
      },
      {
        id: 4,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        ),
        title: "Vaccinations",
        description: "Comprehensive immunization services for children and adults, including travel vaccines.",
        link: "/services/vaccinations",
        color: "bg-yellow-50"
      },
      {
        id: 5,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-14 w-14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
          </svg>
        ),
        title: "Health Checkups",
        description: "Preventive health packages and comprehensive wellness screenings tailored to your needs.",
        link: "/services/checkups",
        color: "bg-purple-50"
      }
    ];
  
    const container = {
      hidden: { opacity: 0 },
      show: {
        opacity: 1,
        transition: {
          staggerChildren: 0.1
        }
      }
    };
  
    const item = {
      hidden: { opacity: 0, y: 20 },
      show: { opacity: 1, y: 0 }
    };
  
    return (
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Key Services</h2>
            <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            <p className="text-lg text-gray-600 mt-6 max-w-2xl mx-auto">
              Comprehensive healthcare services designed to meet all your medical needs with excellence and care.
            </p>
          </motion.div>
          
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
          >
            {services.map((service) => (
              <motion.div 
                key={service.id}
                variants={item}
                whileHover={{ y: -5 }}
                className={`${service.color} p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center border border-gray-100`}
              >
                <div className="bg-white p-4 rounded-full shadow-md mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6 flex-grow">{service.description}</p>
                <Link 
                  to={service.link} 
                  className="group text-blue-600 hover:text-blue-800 font-medium inline-flex items-center transition-colors"
                >
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    );
  };
  
  