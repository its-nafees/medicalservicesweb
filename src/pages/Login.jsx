import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AUTH_CONFIG = {
  ADMIN_CREDENTIALS: {
    email: 'nafeesahmadf5253@gmail.com',
    password: 'admin@12345'
  },
  PATIENT_DEFAULT_ROLE: 'patient'
};

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: AUTH_CONFIG.PATIENT_DEFAULT_ROLE
  });
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!isLogin) {
      if (formData.password !== formData.confirmPassword) {
        setError('Passwords do not match');
        return false;
      }
      
      if (formData.role === 'admin') {
        setError('Admin registration is restricted');
        return false;
      }
    }
    
    if (!formData.email || !formData.password) {
      setError('Please fill all required fields');
      return false;
    }
    
    return true;
  };

  const handleAdminLogin = () => {
    // Store admin auth status in localStorage or context
    localStorage.setItem('isAdmin', 'true');
    navigate('/admin-dashboard'); // This should route to Appointments.jsx
  };

  const handlePatientLogin = () => {
    localStorage.setItem('isPatient', 'true');
    navigate('/patient-dashboard');
  };

  const simulateAPICall = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        if (formData.email === AUTH_CONFIG.ADMIN_CREDENTIALS.email && 
            formData.password === AUTH_CONFIG.ADMIN_CREDENTIALS.password) {
          resolve('admin');
        } else if (formData.email && formData.password) {
          resolve('patient');
        } else {
          resolve(null);
        }
      }, 800);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    if (!validateForm()) return;

    setIsLoading(true);

    try {
      if (!isLogin) {
        // Registration logic
        await new Promise(resolve => setTimeout(resolve, 800));
        alert('Registration successful! Please login');
        setIsLogin(true);
        setFormData({
          name: '',
          email: '',
          password: '',
          confirmPassword: '',
          role: AUTH_CONFIG.PATIENT_DEFAULT_ROLE
        });
        return;
      }

      // Login logic
      const userType = await simulateAPICall();
      
      if (userType === 'admin') {
        handleAdminLogin();
      } else if (userType === 'patient') {
        handlePatientLogin();
      } else {
        setError('Invalid credentials');
      }
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-teal-50">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg border border-blue-100">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            {isLogin ? 'MediCare Portal Login' : 'Patient Registration'}
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            {isLogin ? 'Access your medical records' : 'Join our healthcare network'}
          </p>
        </div>

        {error && (
          <div className="p-3 text-sm text-red-700 bg-red-100 rounded-lg flex items-center">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {error}
          </div>
        )}

        <form className="mt-8 space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                placeholder="John Doe"
              />
            </div>
          )}

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="patient@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              minLength="6"
              value={formData.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
              placeholder="••••••••"
            />
          </div>

          {!isLogin && (
            <>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  required
                  minLength="6"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  placeholder="••••••••"
                />
              </div>

              <div>
                <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                  Account Type
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                  disabled={true}
                >
                  <option value="patient">Patient</option>
                  <option value="admin" disabled>Admin (Restricted)</option>
                </select>
                <p className="mt-1 text-xs text-gray-500">
                  Admin accounts are system-managed only
                </p>
              </div>
            </>
          )}

          <div className="pt-2">
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-200 flex items-center justify-center ${isLoading ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                <>
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    {isLogin ? (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
                    ) : (
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
                    )}
                  </svg>
                  {isLogin ? 'Sign In' : 'Register'}
                </>
              )}
            </button>
          </div>
        </form>

        <div className="text-center text-sm text-gray-600 pt-2">
          {isLogin ? (
            <>
              New to MediCare?{' '}
              <button
                onClick={() => setIsLogin(false)}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Create account
              </button>
            </>
          ) : (
            <>
              Already registered?{' '}
              <button
                onClick={() => setIsLogin(true)}
                className="font-medium text-blue-600 hover:text-blue-500"
              >
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}