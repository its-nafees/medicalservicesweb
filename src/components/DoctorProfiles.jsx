import React from 'react';
import { motion } from 'framer-motion';
import { FaHeartbeat, FaBrain, FaBaby, FaBone, FaUserMd, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const DoctorProfiles = () => {
  const doctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialization: "Cardiology",
      qualification: "MD, DM Cardiology",
      experience: "14 years",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Senior interventional cardiologist with expertise in complex angioplasties.",
      icon: <FaHeartbeat className="text-2xl text-red-500" />
    },
    {
      id: 2,
      name: "Dr. Rohit Malhotra",
      specialization: "Neurology",
      qualification: "DM Neurology",
      experience: "11 years",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Specializes in stroke management and movement disorders.",
      icon: <FaBrain className="text-2xl text-blue-500" />
    },
    {
      id: 3,
      name: "Dr. Ananya Reddy",
      specialization: "Pediatrics",
      qualification: "MD Pediatrics",
      experience: "8 years",
      photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Passionate about child nutrition and developmental pediatrics.",
      icon: <FaBaby className="text-2xl text-yellow-500" />
    },
    {
      id: 4,
      name: "Dr. Arjun Kapoor",
      specialization: "Orthopedics",
      qualification: "MS Orthopedics",
      experience: "16 years",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Expert in joint replacements and sports injuries.",
      icon: <FaBone className="text-2xl text-green-500" />
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our <span className="text-blue-600">Expert Doctors</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Meet our team of highly qualified specialists dedicated to your health
          </p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {doctors.map((doctor) => (
            <motion.div 
              key={doctor.id}
              variants={item}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="relative h-60 bg-gray-100">
                <img 
                  src={doctor.photo} 
                  alt={doctor.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute -bottom-6 right-4 bg-white p-3 rounded-full shadow-md">
                  {doctor.icon}
                </div>
              </div>
              
              <div className="p-6 pt-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-800">{doctor.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {doctor.experience}
                  </span>
                </div>
                
                <p className="text-blue-600 font-medium mb-3">{doctor.specialization}</p>
                <p className="text-gray-600 text-sm mb-4">{doctor.bio}</p>
                
                <div className="flex space-x-3">
                  <Link 
                    to={`/doctors/${doctor.id}`}
                    className="flex-1 text-center text-blue-600 hover:text-blue-800 font-medium text-sm py-2 border border-blue-100 rounded-lg transition-colors"
                  >
                    View Profile
                  </Link>
                  <Link 
                    to="/appointments"
                    className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg flex items-center justify-center transition-colors"
                  >
                    <FaCalendarAlt className="mr-2" />
                    Book
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link 
            to="/doctors" 
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 transition-all shadow-md"
          >
            View All Specialists
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default DoctorProfiles;