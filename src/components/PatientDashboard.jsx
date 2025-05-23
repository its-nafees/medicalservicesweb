import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import AppointmentWidget from './AppointmentWidget';
import Emergency from './Emergency';
import HealthSummaryCard from './HealthSummaryCard';
import QuickActions from './QuickActions';

const PatientDashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [upcomingAppointments, setUpcomingAppointments] = useState([]);
  const [medicalRecords, setMedicalRecords] = useState([]);
  const [prescriptions, setPrescriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showAppointmentWidget, setShowAppointmentWidget] = useState(false);
  const [showEmergencyWidget, setShowEmergencyWidget] = useState(false);
  const [healthStats, setHealthStats] = useState({
    heartRate: 72,
    bloodPressure: '120/80',
    glucose: 98,
    lastCheckup: '2023-05-15'
  });
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate API calls
    const fetchData = async () => {
      try {
        // Mock data fetching
        await new Promise(resolve => setTimeout(resolve, 1000));
        setUpcomingAppointments([
          { id: 1, date: '2023-06-10', time: '10:00 AM', doctor: 'Dr. Smith', specialty: 'Cardiology' },
          { id: 2, date: '2023-06-15', time: '2:30 PM', doctor: 'Dr. Johnson', specialty: 'Dermatology' }
        ]);
        setMedicalRecords([
          { id: 1, date: '2023-05-10', type: 'Blood Test', result: 'Normal' },
          { id: 2, date: '2023-04-22', type: 'X-Ray', result: 'Clear' }
        ]);
        setPrescriptions([
          { id: 1, name: 'Metformin', dosage: '500mg', frequency: 'Twice daily', refills: 2 },
          { id: 2, name: 'Lisinopril', dosage: '10mg', frequency: 'Once daily', refills: 1 }
        ]);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleEmergencyClick = () => {
    setShowEmergencyWidget(true);
  };

  const handleCloseEmergencyWidget = () => {
    setShowEmergencyWidget(false);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'appointments', label: 'Appointments' },
    { id: 'records', label: 'Medical Records' },
    { id: 'prescriptions', label: 'Prescriptions' },
    { id: 'billing', label: 'Billing' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      {/* Header with animated gradient */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-gradient-to-r from-blue-600 to-indigo-700 shadow-lg"
      >
        <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <motion.div 
              whileHover={{ rotate: 15 }}
              className="bg-white p-2 rounded-full"
            >
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
              </svg>
            </motion.div>
            <h1 className="text-2xl font-bold text-white">HealthPortal Dashboard</h1>
          </div>
          <div className="flex items-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleEmergencyClick}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors flex items-center space-x-2 shadow-md"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <span>Emergency</span>
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1 }}
              className="p-2 rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8">
        {/* Welcome Banner */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-white rounded-xl shadow-md p-6 mb-6 bg-gradient-to-r from-indigo-50 to-blue-50 border border-blue-100"
        >
          <div className="flex justify-between items-center">
            <div>
              <h2 className="text-2xl font-bold text-gray-800">Welcome back, <span className="text-blue-600">John Doe</span>!</h2>
              <p className="text-gray-600 mt-1">Here's your health summary for today</p>
            </div>
            <div className="flex space-x-3">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                onClick={() => setShowAppointmentWidget(true)}
              >
                Book Appointment
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Profile
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Health Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <HealthSummaryCard 
            title="Heart Rate" 
            value={`${healthStats.heartRate} bpm`} 
            icon="❤️" 
            status={healthStats.heartRate > 100 ? 'high' : healthStats.heartRate < 60 ? 'low' : 'normal'}
          />
          <HealthSummaryCard 
            title="Blood Pressure" 
            value={healthStats.bloodPressure} 
            icon="🩸" 
            status={healthStats.bloodPressure.split('/')[0] > 130 ? 'high' : 'normal'}
          />
          <HealthSummaryCard 
            title="Glucose Level" 
            value={`${healthStats.glucose} mg/dL`} 
            icon="🍬" 
            status={healthStats.glucose > 140 ? 'high' : healthStats.glucose < 70 ? 'low' : 'normal'}
          />
          <HealthSummaryCard 
            title="Last Checkup" 
            value={new Date(healthStats.lastCheckup).toLocaleDateString()} 
            icon="📅" 
            status={new Date().getTime() - new Date(healthStats.lastCheckup).getTime() > 90*24*60*60*1000 ? 'due' : 'normal'}
          />
        </div>

        {/* Quick Actions */}
        <QuickActions />

        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <nav className="-mb-px flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-blue-500 text-blue-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          {isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
              <p className="mt-4 text-gray-600">Loading your health data...</p>
            </div>
          ) : (
            <>
              {activeTab === 'overview' && (
                <div className="p-6">
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Health Overview</h3>
                  {/* Overview content */}
                </div>
              )}
              {activeTab === 'appointments' && (
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Upcoming Appointments</h3>
                    <button 
                      onClick={() => setShowAppointmentWidget(true)}
                      className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm"
                    >
                      + New Appointment
                    </button>
                  </div>
                  {/* Appointments content */}
                </div>
              )}
              {/* Other tabs content */}
            </>
          )}
        </div>
      </main>

      {/* Appointment Widget Modal */}
      <AnimatePresence>
        {showAppointmentWidget && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center border-b p-4">
                <h3 className="text-lg font-medium text-gray-900">Schedule Appointment</h3>
                <button 
                  onClick={() => setShowAppointmentWidget(false)}
                  className="text-gray-400 hover:text-gray-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <AppointmentWidget onClose={() => setShowAppointmentWidget(false)} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Emergency Widget Modal */}
      <AnimatePresence>
        {showEmergencyWidget && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="flex justify-between items-center border-b p-4 bg-red-50">
                <h3 className="text-lg font-medium text-red-700">Emergency Services</h3>
                <button 
                  onClick={handleCloseEmergencyWidget}
                  className="text-red-400 hover:text-red-500"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <Emergency onClose={handleCloseEmergencyWidget} />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PatientDashboard;