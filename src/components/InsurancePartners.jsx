import React, { useState } from 'react';
import { FiExternalLink, FiCheckCircle, FiSearch, FiChevronRight, FiArrowLeft } from 'react-icons/fi';
import { motion } from 'framer-motion';

const InsurancePartners = () => {
  const [showVerification, setShowVerification] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  const insuranceProviders = [
    {
      id: 1,
      name: 'UnitedHealth Group',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/UnitedHealth_Group_logo.svg/1200px-UnitedHealth_Group_logo.svg.png',
      coverageUrl: 'https://www.unitedhealthgroup.com',
      plans: ['Gold Plan', 'Silver Plan', 'Medicare Advantage']
    },
    {
      id: 2,
      name: 'Aetna',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Aetna_logo.svg/1200px-Aetna_logo.svg.png',
      coverageUrl: 'https://www.aetna.com',
      plans: ['Premier Plan', 'Standard Network']
    },
    {
      id: 3,
      name: 'Blue Cross Blue Shield',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Blue_Cross_Blue_Shield_Association_logo.svg/1200px-Blue_Cross_Blue_Shield_Association_logo.svg.png',
      coverageUrl: 'https://www.bcbs.com',
      plans: ['PPO', 'HMO', 'EPO']
    },
    {
      id: 4,
      name: 'Cigna',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Cigna_logo.svg/1200px-Cigna_logo.svg.png',
      coverageUrl: 'https://www.cigna.com',
      plans: ['Open Access Plus', 'LocalPlus']
    },
    {
      id: 5,
      name: 'Humana',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Humana_logo.svg/1200px-Humana_logo.svg.png',
      coverageUrl: 'https://www.humana.com',
      plans: ['Choice PPO', 'Gold Plus HMO']
    },
    {
      id: 6,
      name: 'Kaiser Permanente',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Kaiser_Permanente_logo.svg/1200px-Kaiser_Permanente_logo.svg.png',
      coverageUrl: 'https://www.kaiserpermanente.org',
      plans: ['HMO', 'Medicare Plans']
    }
  ];

  // Filter providers based on search term
  const filteredProviders = insuranceProviders.filter(provider =>
    provider.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    provider.plans.some(plan => plan.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Pagination logic - show 3 cards per page
  const cardsPerPage = 3;
  const totalPages = Math.ceil(filteredProviders.length / cardsPerPage);
  const currentProviders = filteredProviders.slice(
    (currentPage - 1) * cardsPerPage,
    currentPage * cardsPerPage
  );

  if (showVerification) {
    return (
      <div className="max-w-md mx-auto p-6">
        <button 
          onClick={() => setShowVerification(false)}
          className="flex items-center text-blue-600 mb-6"
        >
          <FiArrowLeft className="mr-2" /> Back to Providers
        </button>
        
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4 mx-auto">
              <FiCheckCircle className="text-blue-600 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Verify Your Insurance</h2>
            <p className="text-gray-600">Check your coverage in just a few steps</p>
          </div>

          <form className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Insurance Provider</label>
              <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
                <option value="">Select your provider</option>
                {insuranceProviders.map(provider => (
                  <option key={provider.id} value={provider.name}>{provider.name}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Member ID</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500" 
                placeholder="Enter your member ID"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Date of Birth</label>
              <input 
                type="date" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg shadow-md transition-colors"
            >
              Verify Now
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-medium mb-4 shadow-md">
          <FiCheckCircle className="mr-2" /> Insurance Partners
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Our Trusted Insurance Network
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          We accept most major insurance providers to make your healthcare accessible
        </p>
      </div>

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-12 relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <FiSearch className="text-gray-400" />
        </div>
        <input
          type="text"
          className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-full bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search providers or plans..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset to first page when searching
          }}
        />
      </div>

      {/* Providers Grid - Showing 3 cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {currentProviders.map((provider) => (
          <motion.div
            key={provider.id}
            whileHover={{ y: -5 }}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100 overflow-hidden"
          >
            <div className="p-6 flex flex-col items-center">
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <img 
                  src={provider.logo} 
                  alt={provider.name}
                  className="h-16 w-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">{provider.name}</h3>
              
              <div className="mb-6 text-center">
                <p className="text-sm text-gray-500 mb-2">Accepted Plans:</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {provider.plans.map((plan, idx) => (
                    <span key={idx} className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full">
                      {plan}
                    </span>
                  ))}
                </div>
              </div>
              
              <a 
                href={provider.coverageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center px-4 py-2 border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-lg transition-colors duration-300"
              >
                Check Coverage <FiExternalLink className="inline ml-1" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center mb-12">
          <div className="flex space-x-2">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
            >
              Previous
            </button>
            
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`px-4 py-2 border rounded-lg ${currentPage === i + 1 ? 'bg-blue-600 text-white' : 'hover:bg-gray-50'} transition-colors`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 border rounded-lg disabled:opacity-50 hover:bg-gray-50 transition-colors"
            >
              Next
            </button>
          </div>
        </div>
      )}

      {/* Verification CTA */}
      <div className="bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto border border-gray-100">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-6 md:mb-0 md:mr-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Need help with insurance verification?</h3>
            <p className="text-gray-600">Our team can check your benefits quickly and easily</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setShowVerification(true)}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-all"
          >
            Verify My Insurance <FiChevronRight className="inline ml-1" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default InsurancePartners;