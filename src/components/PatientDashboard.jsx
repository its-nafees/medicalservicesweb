import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCalendarAlt, FaSignOutAlt } from 'react-icons/fa';
import AppointmentCard from './AppointmentCard';
import AppointmentWidget from './AppointmentWidget';

const PatientDashboard = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('upcoming'); // default tab
  const [showAppointmentWidget, setShowAppointmentWidget] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointments = () => {
      // Simulating an API call
      setLoading(true);
      setError(null);
      setTimeout(() => {
        // Dummy data for appointments
        const dummyAppointments = [
          { id: 1, date: '2025-05-15', type: 'Consultation', status: 'Upcoming' },
          { id: 2, date: '2025-05-18', type: 'Follow-up', status: 'Upcoming' },
        ];
        setAppointments(dummyAppointments);
        setLoading(false);
      }, 2000);
    };

    fetchAppointments();
  }, [activeTab]);

  const handleBookAppointment = (data) => {
    // Simulating appointment booking
    const newAppointment = {
      id: appointments.length + 1,
      ...data,
      status: 'Booked',
    };
    setAppointments((prev) => [...prev, newAppointment]);
    setShowAppointmentWidget(false);
  };

  const handleLogout = () => {
    // Simulate logging out
    navigate('/login');
  };

  return (
    <div>
      <h1>Welcome to Your Dashboard</h1>
      <div>
        <button onClick={() => setActiveTab('upcoming')}>Upcoming Appointments</button>
        <button onClick={() => setActiveTab('history')}>Appointment History</button>
      </div>
      {error && <div className="error">{error}</div>}
      {loading ? (
        <div>Loading...</div>
      ) : (
        <div>
          {appointments
            .filter((appointment) => appointment.status.toLowerCase() === activeTab)
            .map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
        </div>
      )}

      {showAppointmentWidget && (
        <AppointmentWidget
          onBook={handleBookAppointment}
          onClose={() => setShowAppointmentWidget(false)}
        />
      )}

      <div>
        <button onClick={handleLogout}>
          <FaSignOutAlt /> Logout
        </button>
      </div>
    </div>
  );
};

export default PatientDashboard;
