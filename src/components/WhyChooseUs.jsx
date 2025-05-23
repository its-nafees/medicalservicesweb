import React from 'react';
import { motion } from 'framer-motion';
import { FaUserMd, FaClock, FaHospital, FaProcedures, FaHandHoldingMedical } from 'react-icons/fa';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <FaUserMd className="text-4xl" />,
      title: "Experienced Doctors",
      description: "Board-certified specialists with 10+ years average experience",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <FaClock className="text-4xl" />,
      title: "24/7 Emergency",
      description: "Immediate care anytime with 15-minute response guarantee",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <FaHospital className="text-4xl" />,
      title: "Advanced Equipment",
      description: "Cutting-edge MRI/CT scanners and robotic surgery systems",
      color: "from-emerald-500 to-emerald-600"
    },
    {
      icon: <FaProcedures className="text-4xl" />,
      title: "Short Wait Times",
      description: "90% of patients seen within 15 minutes of appointment",
      color: "from-amber-500 to-amber-600"
    },
    {
      icon: <FaHandHoldingMedical className="text-4xl" />,
      title: "Insurance Partnerships",
      description: "Direct billing with 50+ major insurance providers",
      color: "from-purple-500 to-purple-600"
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
        stiffness: 100
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5">
        <div className="absolute top-20 left-10 w-40 h-40 rounded-full bg-blue-400 filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-emerald-400 filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="text-center mb-20"
        >
          <motion.span 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ 
              duration: 0.6,
              delay: 0.4
            }}
            className="inline-block mb-4 text-lg font-semibold text-blue-600 bg-blue-50 px-4 py-1 rounded-full"
          >
            Why Choose Us
          </motion.span>
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            initial={{ letterSpacing: "2px" }}
            animate={{ letterSpacing: "0px" }}
            transition={{ duration: 0.8 }}
          >
            Exceptional Care, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-emerald-600">Every Time</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Where medical excellence meets compassionate care in a state-of-the-art healing environment
          </motion.p>
        </motion.div>
        
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ 
                y: -10,
                scale: 1.03,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-br rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
              <div className={`h-full bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center relative z-10 border border-gray-100 group-hover:border-transparent`}>
                <div className={`mb-6 p-4 rounded-full bg-gradient-to-br ${feature.color} text-white shadow-md`}>
                  {feature.icon}
                </div>
                <motion.h3 
                  className="text-xl font-bold text-gray-800 mb-3"
                  whileHover={{ color: "#2563eb" }}
                >
                  {feature.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-600"
                  initial={{ opacity: 0.8 }}
                  whileHover={{ opacity: 1 }}
                >
                  {feature.description}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;