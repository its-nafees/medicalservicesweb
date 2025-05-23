import React from 'react';
import { Link } from 'react-router-dom'; // Add this import

const DoctorProfile = ({ doctor }) => {
  return (
    <div className="doctor-profile">
      <img src={doctor.photo} alt={doctor.name} />
      <h2>{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p>{doctor.bio}</p>
      {/* Example usage of Link */}
      <Link to={`/appointments?doctorId=${doctor.id}`} className="book-button">
        Book Appointment
      </Link>
    </div>
  );
};

export default DoctorProfile;