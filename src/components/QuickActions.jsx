import React from 'react';
import { motion } from 'framer-motion';

const QuickActions = () => {
  const actions = [
    { icon: '📝', label: 'New Appointment', color: 'bg-blue-100 text-blue-600' },
    { icon: '💊', label: 'Refill Prescription', color: 'bg-purple-100 text-purple-600' },
    { icon: '📋', label: 'View Records', color: 'bg-green-100 text-green-600' },
    { icon: '💰', label: 'Pay Bill', color: 'bg-amber-100 text-amber-600' }
  ];

  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium text-gray-900 mb-3">Quick Actions</h3>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {actions.map((action, index) => (
          <motion.button
            key={index}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`p-3 rounded-lg flex flex-col items-center ${action.color} hover:shadow-md transition-all`}
          >
            <span className="text-2xl mb-1">{action.icon}</span>
            <span className="text-sm font-medium">{action.label}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default QuickActions;