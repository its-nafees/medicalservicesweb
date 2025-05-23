import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import { addDoctor, getDoctors } from './api'; // ❌ Removed

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('doctors');
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      setLoading(true);
      // ❌ Simulating doctor data temporarily
      const dummyDoctors = [
        { _id: '1', name: 'Dr. A', specialization: 'Cardiologist' },
        { _id: '2', name: 'Dr. B', specialization: 'Dentist' },
      ];
      setDoctors(dummyDoctors);
      setLoading(false);
    };

    if (activeTab === 'doctors') {
      fetchDoctors();
    }
  }, [activeTab]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleAddDoctor = async (doctorData) => {
    // ❌ This just simulates adding doctor temporarily
    const newDoctor = {
      _id: Date.now().toString(),
      ...doctorData,
    };
    setDoctors([...doctors, newDoctor]);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* ... existing JSX ... */}
      {activeTab === 'doctors' && (
        <div>
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-gray-700">All Doctors</h3>
            <button 
              onClick={() => alert("Add Doctor Clicked")} // Placeholder for future
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center"
            >
              {/* FaPlus icon is assumed to be imported elsewhere */}
              Add New Doctor
            </button>
          </div>
          
          {loading ? (
            <p>Loading doctors...</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {doctors.map(doctor => (
                <div key={doctor._id} className="p-4 bg-white rounded shadow">
                  <h4 className="font-bold text-lg">{doctor.name}</h4>
                  <p>{doctor.specialization}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
