import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaTimes, FaCalendarAlt, FaUserMd, FaClinicMedical, FaUser, FaPhone, FaEnvelope, FaCheck } from 'react-icons/fa';
import { IoIosArrowDown } from 'react-icons/io';

const AppointmentWidget = ({ onClose }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    department: '',
    doctorId: '',
    date: '',
    time: '',
    name: '',
    phone: '',
    email: '',
    notes: ''
  });

  // Departments with all 12 specializations from OurDoctors.jsx
  const departments = [
    { id: 1, name: 'Cardiology', icon: 'FaHeartbeat' },
    { id: 2, name: 'Neurology', icon: 'FaBrain' },
    { id: 3, name: 'Pediatrics', icon: 'FaBaby' },
    { id: 4, name: 'Orthopedics', icon: 'FaBone' },
    { id: 5, name: 'Ophthalmology', icon: 'FaEye' },
    { id: 6, name: 'Dentistry', icon: 'FaTooth' },
    { id: 7, name: 'Pulmonology', icon: 'FaLungs' },
    { id: 8, name: 'Allergist', icon: 'FaAllergies' },
    { id: 9, name: 'General Surgery', icon: 'FaProcedures' },
    { id: 10, name: 'Oncology', icon: 'FaSyringe' },
    { id: 11, name: 'Radiology', icon: 'FaXRay' },
    { id: 12, name: 'Family Medicine', icon: 'FaStethoscope' }
  ];

  // All 12 doctors from OurDoctors.jsx
  const doctors = [
    { id: 1, name: "Dr. Priya Sharma", departmentId: 1, specialization: "Cardiology", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 2, name: "Dr. Rohit Malhotra", departmentId: 2, specialization: "Neurology", photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 3, name: "Dr. Anjali Patel", departmentId: 3, specialization: "Pediatrics", photo: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 4, name: "Dr. Vikram Singh", departmentId: 4, specialization: "Orthopedics", photo: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 5, name: "Dr. Meena Desai", departmentId: 5, specialization: "Ophthalmology", photo: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 6, name: "Dr. Arjun Reddy", departmentId: 6, specialization: "Dentistry", photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70" },
    { id: 7, name: "Dr. Neha Gupta", departmentId: 7, specialization: "Pulmonology", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=70" },
    { id: 8, name: "Dr. Sameer Joshi", departmentId: 8, specialization: "Allergist", photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 9, name: "Dr. Nandini Iyer", departmentId: 9, specialization: "General Surgery", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 10, name: "Dr. Rajiv Khanna", departmentId: 10, specialization: "Oncology", photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 11, name: "Dr. Sunita Rao", departmentId: 11, specialization: "Radiology", photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" },
    { id: 12, name: "Dr. Amit Verma", departmentId: 12, specialization: "Family Medicine", photo: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80" }
  ];

  const timeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const prevStep = () => setStep(step - 1);

  const validateStep = () => {
    if (step === 1 && (!formData.department || !formData.doctorId)) {
      alert('Please select both department and doctor');
      return false;
    }
    if (step === 2 && (!formData.date || !formData.time)) {
      alert('Please select both date and time');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateStep()) {
      const selectedDoctor = doctors.find(doc => doc.id === parseInt(formData.doctorId));
      console.log('Appointment Booked:', {
        ...formData,
        doctor: selectedDoctor
      });
      alert(`Appointment booked with ${selectedDoctor.name} (${selectedDoctor.specialization})!`);
      onClose();
    }
  };

  const selectedDoctor = doctors.find(doc => doc.id === parseInt(formData.doctorId));

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <h3 className="text-xl font-bold">Book Appointment</h3>
          <button 
            onClick={onClose} 
            className="text-white hover:text-blue-200 transition-colors"
          >
            <FaTimes size={20} />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 pt-6">
          <div className="flex justify-between mb-6 relative">
            <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10 mx-10"></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center 
                  ${step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'} 
                  transition-colors duration-300`}>
                  {i}
                </div>
                <span className={`text-xs mt-2 ${step >= i ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                  {i === 1 ? 'Service' : i === 2 ? 'Time' : 'Details'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Form Content */}
        <div className="p-6">
          <form onSubmit={handleSubmit}>
            {/* Step 1: Department and Doctor */}
            {step === 1 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-gray-700 mb-2 flex items-center">
                    <FaClinicMedical className="mr-2 text-blue-500" />
                    Department
                  </label>
                  <div className="relative">
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      required
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept.id} value={dept.id}>
                          {dept.name}
                        </option>
                      ))}
                    </select>
                    <IoIosArrowDown className="absolute right-3 top-3.5 text-gray-400" />
                  </div>
                </div>

                {formData.department && (
                  <div>
                    <label className="block text-gray-700 mb-2 flex items-center">
                      <FaUserMd className="mr-2 text-blue-500" />
                      Doctor
                    </label>
                    <div className="relative">
                      <select
                        name="doctorId"
                        value={formData.doctorId}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        required
                      >
                        <option value="">Select Doctor</option>
                        {doctors
                          .filter(doc => doc.departmentId === parseInt(formData.department))
                          .map(doc => (
                            <option key={doc.id} value={doc.id}>
                              {doc.name} ({doc.specialization})
                            </option>
                          ))}
                      </select>
                      <IoIosArrowDown className="absolute right-3 top-3.5 text-gray-400" />
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 2: Date and Time */}
            {step === 2 && (
              <div className="space-y-5">
                {selectedDoctor && (
                  <div className="flex items-center p-4 bg-blue-50 rounded-lg">
                    <img 
                      src={selectedDoctor.photo} 
                      alt={selectedDoctor.name}
                      className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-blue-200"
                    />
                    <div>
                      <h4 className="font-semibold">{selectedDoctor.name}</h4>
                      <p className="text-sm text-blue-600">{selectedDoctor.specialization}</p>
                    </div>
                  </div>
                )}
                
                <div>
                  <label className="block text-gray-700 mb-2 flex items-center">
                    <FaCalendarAlt className="mr-2 text-blue-500" />
                    Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                {formData.date && (
                  <div>
                    <label className="block text-gray-700 mb-2">Time Slot</label>
                    <div className="grid grid-cols-2 gap-3">
                      {timeSlots.map((time, i) => (
                        <button
                          key={i}
                          type="button"
                          onClick={() => setFormData({ ...formData, time })}
                          className={`p-3 border rounded-lg text-center transition-colors ${formData.time === time ? 
                            'bg-blue-100 border-blue-500 text-blue-700' : 
                            'border-gray-300 hover:bg-gray-50'}`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Step 3: Patient Details */}
            {step === 3 && (
              <div className="space-y-5">
                <div>
                  <label className="block text-gray-700 mb-2 flex items-center">
                    <FaUser className="mr-2 text-blue-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 flex items-center">
                    <FaPhone className="mr-2 text-blue-500" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2 flex items-center">
                    <FaEnvelope className="mr-2 text-blue-500" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>

                <div>
                  <label className="block text-gray-700 mb-2">Additional Notes (Optional)</label>
                  <textarea
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows="3"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={prevStep}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Back
                </button>
              ) : (
                <div></div>
              )}

              {step < 3 ? (
                <button
                  type="button"
                  onClick={nextStep}
                  className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                >
                  Next
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-2.5 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center gap-2 transition-colors"
                >
                  <FaCheck /> Confirm Appointment
                </button>
              )}
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default AppointmentWidget;