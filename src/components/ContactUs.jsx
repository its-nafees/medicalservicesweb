import React, { useState } from 'react';
import { FaPhoneAlt, FaMapMarkerAlt, FaEnvelope, FaClock, FaUserMd, FaChevronDown } from 'react-icons/fa';
import { MdEmergency } from 'react-icons/md';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';

const ContactUs = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { 
    register, 
    handleSubmit, 
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset(); // Reset form fields after submission
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const departments = [
    { id: 'cardiology', name: 'Cardiology', icon: <FaUserMd className="mr-2" /> },
    { id: 'neurology', name: 'Neurology', icon: <FaUserMd className="mr-2" /> },
    { id: 'pediatrics', name: 'Pediatrics', icon: <FaUserMd className="mr-2" /> }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="bg-gradient-to-r from-blue-600 to-teal-500 py-16 text-white"
      >
        <div className="container mx-auto px-4 text-center">
          <motion.h1 variants={slideUp} className="text-4xl font-bold mb-4">
            Contact Our Medical Team
          </motion.h1>
          <motion.p variants={slideUp} className="text-xl max-w-2xl mx-auto">
            We're here to provide compassionate care. Reach out for appointments, emergencies, or inquiries.
          </motion.p>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <FaUserMd className="mr-2 text-blue-500" />
              Send Us a Message
            </h2>
            
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4"
              >
                Thank you! Your message has been sent. We'll contact you shortly.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2">Full Name*</label>
                    <input 
                      type="text"
                      {...register("name", { required: "Name is required" })}
                      className={`w-full p-3 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Phone*</label>
                    <input 
                      type="tel"
                      {...register("phone", { 
                        required: "Phone number is required",
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: "Please enter a valid 10-digit phone number"
                        }
                      })}
                      className={`w-full p-3 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                      placeholder="+91 XXXXX XXXXX"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Email*</label>
                  <input 
                    type="email"
                    {...register("email", { 
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address"
                      }
                    })}
                    className={`w-full p-3 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="your@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Department</label>
                  <div className="flex space-x-2 overflow-x-auto pb-2">
                    {departments.map((dept) => (
                      <button
                        key={dept.id}
                        type="button"
                        onClick={() => setActiveTab(dept.id)}
                        className={`px-4 py-2 rounded-full text-sm whitespace-nowrap flex items-center ${activeTab === dept.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-600'}`}
                      >
                        {dept.icon}
                        {dept.name}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Subject*</label>
                  <select 
                    {...register("subject", { required: "Please select a subject" })}
                    className={`w-full p-3 border ${errors.subject ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Appointment Booking">Appointment Booking</option>
                    <option value="Emergency">Emergency</option>
                    <option value="Billing/Insurance">Billing/Insurance</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                  {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Message*</label>
                  <textarea 
                    rows="5"
                    {...register("message", { required: "Message is required" })}
                    className={`w-full p-3 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500`}
                    placeholder="Describe your needs..."
                  ></textarea>
                  {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
                </div>

                <motion.button 
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={slideUp}
            className="space-y-8"
          >
            {/* Emergency Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg cursor-pointer"
            >
              <div className="flex items-start">
                <MdEmergency className="text-red-500 text-3xl mr-4 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-red-700 mb-2">Medical Emergencies</h3>
                  <p className="text-gray-700 mb-3">
                    For immediate medical attention, please call our emergency line:
                  </p>
                  <a href="tel:+911234567890" className="text-2xl font-bold text-red-600 hover:text-red-700 flex items-center">
                    <FaPhoneAlt className="mr-2" /> +91 123-456-7890
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Cards */}
            <div className="space-y-6">
              <motion.div 
                whileHover={{ y: -2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start">
                  <FaPhoneAlt className="text-blue-500 text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Phone</h3>
                    <p className="text-gray-600 mb-2">General inquiries & appointments</p>
                    <a href="tel:+911234567891" className="text-blue-600 hover:text-blue-700">+91 123-456-7891</a>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start">
                  <FaMapMarkerAlt className="text-blue-500 text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Location</h3>
                    <p className="text-gray-600 mb-2">Visit our medical center</p>
                    <address className="not-italic">
                      123 Health Lane, Medical District<br />
                      Mumbai, Maharashtra 400001
                    </address>
                    <button className="mt-3 text-blue-600 hover:text-blue-700 text-sm flex items-center">
                      Get Directions <FaChevronDown className="ml-1 text-xs" />
                    </button>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -2 }}
                className="bg-white p-6 rounded-lg shadow-sm border border-gray-100"
              >
                <div className="flex items-start">
                  <FaClock className="text-blue-500 text-2xl mr-4 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-1">Hours</h3>
                    <ul className="space-y-1 text-gray-600">
                      <li className="flex justify-between">
                        <span>Monday-Friday</span>
                        <span>8:00 AM - 8:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Saturday</span>
                        <span>9:00 AM - 5:00 PM</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Sunday</span>
                        <span>Emergency only</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={slideUp}
          className="mt-16 bg-white rounded-xl shadow-lg overflow-hidden"
        >
          <div className="p-4 bg-gray-50 border-b">
            <h3 className="font-semibold text-gray-700">Our Location</h3>
          </div>
          <iframe
            title="Clinic Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.7558372923627!2d72.8338643153776!3d19.05272225872683!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c8df3b4d3e3d%3A0x9d6e5b9d5e5b9d5e!2sMedical%20Center!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;