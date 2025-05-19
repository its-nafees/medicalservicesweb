import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaSignInAlt } from 'react-icons/fa';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    try {
      console.log('Logging in:', formData);
      localStorage.setItem('token', 'dummy-token');
      localStorage.setItem('userEmail', formData.email);
      navigate('/dashboard');
    } catch (err) {
      setError('Something went wrong.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="bg-gray-800 p-8 rounded-lg shadow-xl w-96 text-white">
        <h1 className="text-3xl font-bold text-green-500 text-center mb-6">Musicify</h1>
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>
        
        {error && <div className="bg-red-500 text-white p-3 rounded mb-4">{error}</div>}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4 flex items-center border-b border-gray-600 py-2">
            <FaUser className="text-gray-400 mr-2" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-full bg-transparent focus:outline-none text-white"
              required
            />
          </div>
          
          <div className="mb-4 flex items-center border-b border-gray-600 py-2">
            <FaLock className="text-gray-400 mr-2" />
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-full bg-transparent focus:outline-none text-white"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-green-500 text-black py-2 px-4 rounded-full hover:bg-green-400 transition duration-200 flex items-center justify-center font-bold mt-6"
          >
            <FaSignInAlt className="mr-2" /> Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;