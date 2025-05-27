import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  FaTimes,
  FaClinicMedical,
  FaUserMd,
  FaCalendarAlt,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaCheck
} from 'react-icons/fa';
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

  const departments = [
    { id: 1, name: 'Cardiology' },
    { id: 2, name: 'Neurology' },
    { id: 3, name: 'Pediatrics' },
    { id: 4, name: 'Orthopedics' },
    { id: 5, name: 'Ophthalmology' },
    { id: 6, name: 'Dentistry' },
    { id: 7, name: 'Pulmonology' },
    { id: 8, name: 'Allergist' },
    { id: 9, name: 'General Surgery' },
    { id: 10, name: 'Oncology' },
    { id: 11, name: 'Radiology' },
    { id: 12, name: 'Family Medicine' }
  ];

  const doctors = [
    { id: 1, name: "Dr. Priya Sharma", departmentId: 1, specialization: "Cardiology" },
    { id: 2, name: "Dr. Rohit Malhotra", departmentId: 2, specialization: "Neurology" },
    { id: 3, name: "Dr. Anjali Patel", departmentId: 3, specialization: "Pediatrics" },
    { id: 4, name: "Dr. Vikram Singh", departmentId: 4, specialization: "Orthopedics" },
    { id: 5, name: "Dr. Meena Desai", departmentId: 5, specialization: "Ophthalmology" },
    { id: 6, name: "Dr. Arjun Reddy", departmentId: 6, specialization: "Dentistry" },
    { id: 7, name: "Dr. Neha Gupta", departmentId: 7, specialization: "Pulmonology" },
    { id: 8, name: "Dr. Sameer Joshi", departmentId: 8, specialization: "Allergist" },
    { id: 9, name: "Dr. Nandini Iyer", departmentId: 9, specialization: "General Surgery" },
    { id: 10, name: "Dr. Rajiv Khanna", departmentId: 10, specialization: "Oncology" },
    { id: 11, name: "Dr. Sunita Rao", departmentId: 11, specialization: "Radiology" },
    { id: 12, name: "Dr. Amit Verma", departmentId: 12, specialization: "Family Medicine" }
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
      console.log('Appointment Booked:', { ...formData, doctor: selectedDoctor });
      alert(`Appointment booked with ${selectedDoctor.name} (${selectedDoctor.specialization})!`);
      onClose();
    }
  };

  const filteredDoctors = doctors.filter(doc => doc.departmentId === parseInt(formData.department));

  return (
    <div onClick={onClose} className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-xl shadow-xl w-full max-w-md overflow-hidden"
      >
        <div className="flex justify-between items-center p-5 bg-gradient-to-r from-blue-600 to-blue-500 text-white">
          <h3 className="text-xl font-bold">Book Appointment</h3>
          <button onClick={onClose}><FaTimes size={20} /></button>
        </div>

        {/* Steps Indicator */}
        <div className="px-6 pt-6">
          <div className="flex justify-between mb-6 relative">
            <div className="absolute top-4 left-0 right-0 h-1 bg-gray-200 -z-10 mx-10"></div>
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex flex-col items-center z-10">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step >= i ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'}`}>{i}</div>
                <span className={`text-xs mt-2 ${step >= i ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>{i === 1 ? 'Service' : i === 2 ? 'Time' : 'Details'}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Step Content */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {step === 1 && (
            <>
              <label className="block">Department</label>
              <select name="department" value={formData.department} onChange={handleChange} className="w-full border rounded p-2">
                <option value="">Select Department</option>
                {departments.map(dept => (
                  <option key={dept.id} value={dept.id}>{dept.name}</option>
                ))}
              </select>

              <label className="block">Doctor</label>
              <select name="doctorId" value={formData.doctorId} onChange={handleChange} className="w-full border rounded p-2">
                <option value="">Select Doctor</option>
                {filteredDoctors.map(doc => (
                  <option key={doc.id} value={doc.id}>{doc.name} ({doc.specialization})</option>
                ))}
              </select>

              <button type="button" onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
            </>
          )}

          {step === 2 && (
            <>
              <label className="block">Date</label>
              <input type="date" name="date" value={formData.date} onChange={handleChange} className="w-full border rounded p-2" />

              <label className="block">Time</label>
              <select name="time" value={formData.time} onChange={handleChange} className="w-full border rounded p-2">
                <option value="">Select Time</option>
                {timeSlots.map(time => (
                  <option key={time} value={time}>{time}</option>
                ))}
              </select>

              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="text-gray-700">Back</button>
                <button type="button" onClick={nextStep} className="bg-blue-600 text-white px-4 py-2 rounded">Next</button>
              </div>
            </>
          )}

          {step === 3 && (
            <>
              <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="w-full border rounded p-2" />
              <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="w-full border rounded p-2" />
              <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full border rounded p-2" />
              <textarea name="notes" placeholder="Notes (optional)" value={formData.notes} onChange={handleChange} className="w-full border rounded p-2" />

              <div className="flex justify-between">
                <button type="button" onClick={prevStep} className="text-gray-700">Back</button>
                <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Confirm</button>
              </div>
            </>
          )}
        </form>
      </motion.div>
    </div>
  );
};

export default AppointmentWidget;