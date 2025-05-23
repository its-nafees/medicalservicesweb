import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = ({ role }) => {
  const adminLinks = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Patients', path: '/admin/patients' },
    { name: 'Appointments', path: '/admin/appointments' },
  ];

  const patientLinks = [
    { name: 'Dashboard', path: '/patient' },
    { name: 'My Appointments', path: '/patient/appointments' },
    { name: 'Medical Records', path: '/patient/records' },
  ];

  const links = role === 'admin' ? adminLinks : patientLinks;

  return (
    <aside className="w-64 bg-blue-600 text-white p-4">
      <div className="mb-8 p-2">
        <h1 className="text-xl font-bold">Medical Portal</h1>
      </div>
      <nav>
        <ul>
          {links.map((link) => (
            <li key={link.name} className="mb-2">
              <Link
                to={link.path}
                className="block p-2 hover:bg-blue-700 rounded"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;