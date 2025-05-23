// src/components/AppointmentCard.jsx
import { FaUserMd, FaCalendar, FaClock } from 'react-icons/fa';

const AppointmentCard = ({ appointment }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center mb-2">
        <FaUserMd className="text-blue-500 mr-2" />
        <h3 className="font-medium">{appointment.doctorName || 'Doctor'}</h3>
      </div>
      <div className="flex items-center text-sm text-gray-600 mb-1">
        <FaCalendar className="mr-2" />
        <span>{new Date(appointment.date).toLocaleDateString()}</span>
      </div>
      <div className="flex items-center text-sm text-gray-600 mb-2">
        <FaClock className="mr-2" />
        <span>{appointment.time}</span>
      </div>
      <p className="text-sm"><span className="font-medium">Reason:</span> {appointment.reason}</p>
      <div className={`mt-2 text-sm px-2 py-1 rounded-full inline-block ${
        appointment.status === 'confirmed' 
          ? 'bg-green-100 text-green-800' 
          : appointment.status === 'pending'
            ? 'bg-yellow-100 text-yellow-800'
            : 'bg-red-100 text-red-800'
      }`}>
        {appointment.status}
      </div>
    </div>
  );
};

export default AppointmentCard;