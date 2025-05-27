import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserMd, FaCalendarAlt, FaProcedures, FaUsers, FaChartLine, FaSignOutAlt, FaPlus } from 'react-icons/fa';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const [patients, setPatients] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // Sample data - replace with API calls in real implementation
  useEffect(() => {
    setLoading(true);
    
    // Simulated data fetch
    setTimeout(() => {
      setDoctors([
        { _id: '1', name: 'Dr. Rajesh Kumar', specialization: 'Cardiology', contact: '9876543210', status: 'active' },
        { _id: '2', name: 'Dr. Priya Sharma', specialization: 'Pediatrics', contact: '8765432109', status: 'active' },
        { _id: '3', name: 'Dr. Amit Patel', specialization: 'Orthopedics', contact: '7654321098', status: 'on leave' },
      ]);
      
      setAppointments([
        { id: '1', patientName: 'Rahul Verma', doctor: 'Dr. Rajesh Kumar', date: '2023-06-15', time: '10:00 AM', status: 'confirmed' },
        { id: '2', patientName: 'Neha Gupta', doctor: 'Dr. Priya Sharma', date: '2023-06-15', time: '11:30 AM', status: 'completed' },
        { id: '3', patientName: 'Sanjay Singh', doctor: 'Dr. Amit Patel', date: '2023-06-16', time: '02:00 PM', status: 'pending' },
      ]);
      
      setPatients([
        { id: '1', name: 'Rahul Verma', age: 35, gender: 'Male', lastVisit: '2023-05-20' },
        { id: '2', name: 'Neha Gupta', age: 28, gender: 'Female', lastVisit: '2023-06-10' },
        { id: '3', name: 'Sanjay Singh', age: 42, gender: 'Male', lastVisit: '2023-04-15' },
      ]);
      
      setLoading(false);
    }, 1000);
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem('isAdmin');
    navigate('/login');
  };

  const stats = {
    totalDoctors: doctors.length,
    totalAppointments: appointments.length,
    upcomingAppointments: appointments.filter(a => a.status === 'confirmed' || a.status === 'pending').length,
    totalPatients: patients.length
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-blue-800 text-white p-4">
        <div className="flex items-center justify-center mb-8 mt-4">
          <h1 className="text-xl font-bold">MediCare Admin</h1>
        </div>
        
        <nav>
          <ul className="space-y-2">
            <li>
              <button 
                onClick={() => setActiveTab('dashboard')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'dashboard' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
              >
                <FaChartLine className="mr-3" />
                Dashboard
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('doctors')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'doctors' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
              >
                <FaUserMd className="mr-3" />
                Doctors
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('appointments')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'appointments' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
              >
                <FaCalendarAlt className="mr-3" />
                Appointments
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('patients')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'patients' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
              >
                <FaUsers className="mr-3" />
                Patients
              </button>
            </li>
            <li>
              <button 
                onClick={() => setActiveTab('services')}
                className={`flex items-center w-full p-3 rounded-lg ${activeTab === 'services' ? 'bg-blue-700' : 'hover:bg-blue-700'}`}
              >
                <FaProcedures className="mr-3" />
                Services
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto pt-4 border-t border-blue-700">
          <button 
            onClick={handleLogout}
            className="flex items-center w-full p-3 rounded-lg hover:bg-blue-700"
          >
            <FaSignOutAlt className="mr-3" />
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <header className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800">
            {activeTab === 'dashboard' && 'Admin Dashboard'}
            {activeTab === 'doctors' && 'Doctors Management'}
            {activeTab === 'appointments' && 'Appointments'}
            {activeTab === 'patients' && 'Patients Records'}
            {activeTab === 'services' && 'Medical Services'}
          </h2>
        </header>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Total Doctors</h3>
                    <p className="text-3xl font-bold text-blue-600">{stats.totalDoctors}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Total Appointments</h3>
                    <p className="text-3xl font-bold text-green-600">{stats.totalAppointments}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Upcoming Appointments</h3>
                    <p className="text-3xl font-bold text-yellow-600">{stats.upcomingAppointments}</p>
                  </div>
                  <div className="bg-white p-6 rounded-lg shadow">
                    <h3 className="text-gray-500 text-sm font-medium">Registered Patients</h3>
                    <p className="text-3xl font-bold text-purple-600">{stats.totalPatients}</p>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow mb-8">
                  <h3 className="text-lg font-medium mb-4">Recent Appointments</h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Doctor</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200">
                        {appointments.slice(0, 5).map(appointment => (
                          <tr key={appointment.id}>
                            <td className="px-6 py-4 whitespace-nowrap">{appointment.patientName}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{appointment.doctor}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{appointment.date} at {appointment.time}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                                appointment.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                                'bg-yellow-100 text-yellow-800'
                              }`}>
                                {appointment.status}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'doctors' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-700">Doctors List</h3>
                  <button 
                    onClick={() => alert("Open doctor registration form")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                  >
                    <FaPlus className="mr-2" />
                    Add New Doctor
                  </button>
                </div>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Specialization</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Contact</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {doctors.map(doctor => (
                        <tr key={doctor._id}>
                          <td className="px-6 py-4 whitespace-nowrap font-medium">{doctor.name}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{doctor.specialization}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{doctor.contact}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              doctor.status === 'active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                            }`}>
                              {doctor.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                            <button className="text-red-600 hover:text-red-800">Remove</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'appointments' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-700">Appointments Management</h3>
                  <div className="flex space-x-2">
                    <select className="border border-gray-300 rounded px-3 py-2">
                      <option>All Status</option>
                      <option>Pending</option>
                      <option>Confirmed</option>
                      <option>Completed</option>
                      <option>Cancelled</option>
                    </select>
                    <input 
                      type="date" 
                      className="border border-gray-300 rounded px-3 py-2"
                    />
                  </div>
                </div>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">ID</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Patient</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Doctor</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date & Time</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Status</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {appointments.map(appointment => (
                        <tr key={appointment.id}>
                          <td className="px-6 py-4 whitespace-nowrap">#{appointment.id}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{appointment.patientName}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{appointment.doctor}</td>
                          <td className="px-6 py-4 whitespace-nowrap">{appointment.date} at {appointment.time}</td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 py-1 text-xs rounded-full ${
                              appointment.status === 'completed' ? 'bg-green-100 text-green-800' :
                              appointment.status === 'confirmed' ? 'bg-blue-100 text-blue-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {appointment.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <button className="text-blue-600 hover:text-blue-800 mr-3">View</button>
                            <button className="text-gray-600 hover:text-gray-800">Cancel</button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {activeTab === 'patients' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-700">Patient Records</h3>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Search patients..."
                      className="border border-gray-300 rounded px-4 py-2 pl-10 w-64"
                    />
                    <svg className="absolute left-3 top-3 h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {patients.map(patient => (
                    <div key={patient.id} className="bg-white p-6 rounded-lg shadow">
                      <div className="flex items-center mb-4">
                        <div className="bg-blue-100 text-blue-800 rounded-full h-12 w-12 flex items-center justify-center font-bold text-xl">
                          {patient.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <h4 className="font-bold text-lg">{patient.name}</h4>
                          <p className="text-gray-600">{patient.age} years, {patient.gender}</p>
                        </div>
                      </div>
                      <div className="border-t border-gray-200 pt-3">
                        <p className="text-sm text-gray-500">Last Visit: {patient.lastVisit}</p>
                        <div className="mt-3 flex space-x-2">
                          <button className="text-blue-600 hover:text-blue-800 text-sm">View History</button>
                          <button className="text-green-600 hover:text-green-800 text-sm">Book Appointment</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'services' && (
              <div>
                <div className="flex justify-between items-center mb-6">
                  <h3 className="text-lg font-medium text-gray-700">Medical Services</h3>
                  <button 
                    onClick={() => alert("Add new service")}
                    className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
                  >
                    <FaPlus className="mr-2" />
                    Add Service
                  </button>
                </div>
                
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Service</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Department</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Duration</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">General Consultation</td>
                        <td className="px-6 py-4 whitespace-nowrap">General Medicine</td>
                        <td className="px-6 py-4 whitespace-nowrap">30 mins</td>
                        <td className="px-6 py-4 whitespace-nowrap">₹500</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-800">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">ECG</td>
                        <td className="px-6 py-4 whitespace-nowrap">Cardiology</td>
                        <td className="px-6 py-4 whitespace-nowrap">45 mins</td>
                        <td className="px-6 py-4 whitespace-nowrap">₹1200</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-800">Remove</button>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 whitespace-nowrap font-medium">Dental Checkup</td>
                        <td className="px-6 py-4 whitespace-nowrap">Dentistry</td>
                        <td className="px-6 py-4 whitespace-nowrap">45 mins</td>
                        <td className="px-6 py-4 whitespace-nowrap">₹800</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <button className="text-blue-600 hover:text-blue-800 mr-3">Edit</button>
                          <button className="text-red-600 hover:text-red-800">Remove</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;