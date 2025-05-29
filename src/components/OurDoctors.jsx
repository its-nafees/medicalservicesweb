import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaHeartbeat, FaBrain, FaBaby, FaBone, FaEye, FaTooth, 
  FaLungs, FaAllergies, FaProcedures, FaSyringe, FaXRay, 
  FaStethoscope, FaCalendarAlt 
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const OurDoctors = () => {
  const allDoctors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      specialization: "Cardiology",
      experience: "14 years",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Senior interventional cardiologist with expertise in complex angioplasties.",
      icon: FaHeartbeat,
      color: "text-red-500"
    },
    {
      id: 2,
      name: "Dr. Rohit Malhotra",
      specialization: "Neurology",
      experience: "11 years",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Specializes in stroke management and movement disorders.",
      icon: FaBrain,
      color: "text-blue-500"
    },
    {
      id: 3,
      name: "Dr. Anjali Patel",
      specialization: "Pediatrics",
      experience: "9 years",
      photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Child specialist with expertise in neonatal care and vaccinations.",
      icon: FaBaby,
      color: "text-pink-500"
    },
    {
      id: 4,
      name: "Dr. Vikram Singh",
      specialization: "Orthopedics",
      experience: "15 years",
      photo: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Joint replacement specialist with expertise in arthroscopic surgeries.",
      icon: FaBone,
      color: "text-gray-600"
    },
    {
      id: 5,
      name: "Dr. Meena Desai",
      specialization: "Ophthalmology",
      experience: "12 years",
      photo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Cataract and LASIK surgery specialist with expertise in retinal disorders.",
      icon: FaEye,
      color: "text-green-500"
    },
    {
      id: 6,
      name: "Dr. Arjun Reddy",
      specialization: "Dentistry",
      experience: "8 years",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70",
      bio: "Cosmetic dentist specializing in dental implants and smile makeovers.",
      icon: FaTooth,
      color: "text-white-500"
    },
    {
      id: 7,
      name: "Dr. Neha Gupta",
      specialization: "Pulmonology",
      experience: "10 years",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70",
      bio: "Expert in asthma, COPD, and sleep apnea management.",
      icon: FaLungs,
      color: "text-teal-500"
    },
    {
      id: 8,
      name: "Dr. Sameer Joshi",
      specialization: "Allergist",
      experience: "7 years",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Specializes in allergy testing and immunotherapy treatments.",
      icon: FaAllergies,
      color: "text-yellow-500"
    },
    {
      id: 9,
      name: "Dr. Nandini Iyer",
      specialization: "General Surgery",
      experience: "13 years",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Expert in laparoscopic and minimally invasive surgeries.",
      icon: FaProcedures,
      color: "text-purple-500"
    },
    {
      id: 10,
      name: "Dr. Rajiv Khanna",
      specialization: "Oncology",
      experience: "16 years",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Medical oncologist specializing in chemotherapy and targeted therapies.",
      icon: FaSyringe,
      color: "text-indigo-500"
    },
    {
      id: 11,
      name: "Dr. Sunita Rao",
      specialization: "Radiology",
      experience: "14 years",
      photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Diagnostic radiologist with expertise in MRI and CT interpretations.",
      icon: FaXRay,
      color: "text-blue-400"
    },
    {
      id: 12,
      name: "Dr. Amit Verma",
      specialization: "Family Medicine",
      experience: "12 years",
      photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      bio: "Primary care physician specializing in preventive medicine and chronic disease management.",
      icon: FaStethoscope,
      color: "text-red-400"
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
          {allDoctors.map((doctor) => {
            const Icon = doctor.icon;
            return (
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
                    <Icon className={`text-2xl ${doctor.color}`} />
                  </div>
                </div>
                
                <div className="p-6 pt-8">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">
                      {doctor.name}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                      {doctor.experience}
                    </span>
                  </div>
                  
                  <p className="text-blue-600 font-medium mb-1">
                    {doctor.specialization}
                  </p>
                  <p className="text-gray-600 text-sm mb-4">
                    {doctor.bio}
                  </p>
                  
                  <div className="flex space-x-3">
                    <Link 
                      to={`/doctors/${doctor.id}`}
                      className="flex-1 text-center text-blue-600 hover:text-blue-800 font-medium text-sm py-2 border border-blue-100 rounded-lg transition-colors"
                    >
                      View Profile
                    </Link>
                    <Link 
                      to={`/appointments?doctorId=${doctor.id}`}
                      className="flex-1 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm py-2 rounded-lg flex items-center justify-center transition-colors"
                    >
                      <FaCalendarAlt className="mr-2" />
                      Book
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default OurDoctors;