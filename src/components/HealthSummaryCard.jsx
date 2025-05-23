import React from 'react';

const HealthSummaryCard = ({ title, value, icon, status }) => {
  const statusColors = {
    high: 'bg-red-50 text-red-700',
    low: 'bg-yellow-50 text-yellow-700',
    normal: 'bg-green-50 text-green-700',
    due: 'bg-blue-50 text-blue-700'
  };

  return (
    <div className="bg-white rounded-lg shadow p-4 flex items-start space-x-3 border-l-4 border-blue-400">
      <div className="text-2xl">{icon}</div>
      <div>
        <h4 className="text-sm font-medium text-gray-500">{title}</h4>
        <p className="text-xl font-semibold mt-1">{value}</p>
        {status && (
          <span className={`text-xs px-2 py-1 rounded-full mt-2 inline-block ${statusColors[status]}`}>
            {status.toUpperCase()}
          </span>
        )}
      </div>
    </div>
  );
};

export default HealthSummaryCard;