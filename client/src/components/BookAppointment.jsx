  import React, { useState, useEffect } from 'react';
  import { useLocation, useNavigate } from 'react-router-dom';
  import { 
    FaCalendarAlt, 
    FaClock, 
    FaUserMd, 
    FaArrowLeft,
    FaUser,
    FaEnvelope,
    FaPhone,
    FaInfoCircle
  } from 'react-icons/fa';

  const BookAppointment = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const queryParams = new URLSearchParams(location.search);
    const doctorId = queryParams.get('doctorId');
    
    // Form state
    const [formData, setFormData] = useState({
      date: '',
      time: '',
      name: '',
      email: '',
      phone: ''
    });
    
    const [doctor, setDoctor] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Available time slots
    const availableTimes = [
      '09:00 AM', '10:00 AM', '11:00 AM', 
      '12:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
    ];

    // Fetch doctor details
    useEffect(() => {
      // Simulate API fetch
      const fetchDoctorDetails = async () => {
        try {
          // In a real app, replace with actual API call
          const mockDoctors = [
            // Your doctors data here (same as in OurDoctors component)
          ];
          
          const foundDoctor = mockDoctors.find(doc => doc.id === parseInt(doctorId));
          setDoctor(foundDoctor);
        } catch (error) {
          console.error('Error fetching doctor details:', error);
        }
      };

      if (doctorId) fetchDoctorDetails();
    }, [doctorId]);

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      setIsSubmitting(true);
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        console.log('Booking appointment:', {
          doctorId,
          ...formData
        });
        
        navigate('/appointment-confirmation', {
          state: {
            doctor,
            appointmentDetails: formData
          }
        });
      } catch (error) {
        console.error('Error booking appointment:', error);
      } finally {
        setIsSubmitting(false);
      }
    };

    const today = new Date().toISOString().split('T')[0];

    return (
      <section className="py-12 bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-blue-600 hover:text-blue-800 mb-6 transition-colors"
            >
              <FaArrowLeft className="mr-2" />
              Back to Doctors
            </button>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              {/* Header */}
              <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-6">
                <h1 className="text-2xl md:text-3xl font-bold">Book Your Appointment</h1>
                <p className="text-blue-100 opacity-90 mt-1">Complete the form to schedule your visit</p>
              </div>
              
              {/* Doctor Info */}
              {doctor && (
                <div className="flex items-center p-6 border-b border-gray-100">
                  <img 
                    src={doctor.photo} 
                    alt={doctor.name}
                    className="w-16 h-16 rounded-full object-cover mr-4 border-2 border-blue-200"
                  />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{doctor.name}</h2>
                    <p className="text-blue-600 font-medium">{doctor.specialization}</p>
                    <p className="text-sm text-gray-500 mt-1 flex items-center">
                      <FaInfoCircle className="mr-1" />
                      {doctor.experience} experience
                    </p>
                  </div>
                </div>
              )}
              
              {/* Appointment Form */}
              <form onSubmit={handleSubmit} className="p-6">
                <div className="space-y-5">
                  {/* Date and Time */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium flex items-center">
                        <FaCalendarAlt className="mr-2 text-blue-500" />
                        Appointment Date
                      </label>
                      <div className="relative">
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                          min={today}
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium flex items-center">
                        <FaClock className="mr-2 text-blue-500" />
                        Time Slot
                      </label>
                      <div className="relative">
                        <select
                          name="time"
                          value={formData.time}
                          onChange={handleChange}
                          className="w-full p-3 border border-gray-300 rounded-lg appearance-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                          required
                        >
                          <option value="">Select a time slot</option>
                          {availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                  
                  {/* Patient Name */}
                  <div>
                    <label className="block text-gray-700 mb-2 font-medium flex items-center">
                      <FaUser className="mr-2 text-blue-500" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  {/* Contact Info */}
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium flex items-center">
                        <FaEnvelope className="mr-2 text-blue-500" />
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-gray-700 mb-2 font-medium flex items-center">
                        <FaPhone className="mr-2 text-blue-500" />
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="123-456-7890"
                        required
                      />
                    </div>
                  </div>
                </div>
                
                {/* Submit Button */}
                <div className="mt-8">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg hover:from-blue-700 hover:to-blue-600 transition-all flex items-center justify-center ${isSubmitting ? 'opacity-80 cursor-not-allowed' : ''}`}
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <FaUserMd className="mr-2" />
                        Confirm Appointment
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default BookAppointment;