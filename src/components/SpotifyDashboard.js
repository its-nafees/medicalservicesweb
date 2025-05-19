import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaSearch, FaHome, FaHeart, FaPlus, FaGlobe, FaSignOutAlt } from 'react-icons/fa';
import { MdLibraryMusic } from 'react-icons/md';

const SpotifyDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const email = localStorage.getItem('userEmail');
    if (!email) {
      navigate('/');
    } else {
      setUserEmail(email);
    }
  }, [navigate]);

  // Mock search function
  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Mock data based on search query
    const mockData = [
      {
        id: 1,
        title: `${searchQuery}`,
        artist: 'Popular Artist',
        album: 'Top Hits 2023',
        duration: '3:45',
        image: 'https://source.unsplash.com/random/80x80/?music,album'
      },
      {
        id: 2,
        title: `Best of ${searchQuery}`,
        artist: 'Various Artists',
        album: 'Compilation Album',
        duration: '4:20',
        image: 'https://source.unsplash.com/random/80x80/?music,cover'
      },
      {
        id: 3,
        title: `${searchQuery} - Remix`,
        artist: 'DJ Remix Master',
        album: 'Remix Collection',
        duration: '3:15',
        image: 'https://source.unsplash.com/random/80x80/?music,artist'
      },
      {
        id: 4,
        title: `${searchQuery} Acoustic Version`,
        artist: 'Unplugged Sessions',
        album: 'Acoustic Covers',
        duration: '4:05',
        image: 'https://source.unsplash.com/random/80x80/?music,concert'
      },
      {
        id: 5,
        title: `${searchQuery} Live Performance`,
        artist: 'Concert Special',
        album: 'Live Recordings',
        duration: '5:30',
        image: 'https://source.unsplash.com/random/80x80/?music,stage'
      }
    ];
    
    setSearchResults(mockData);
    setIsLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('userEmail');
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-black text-white overflow-hidden">
      {/* Sidebar */}
      <div className="w-64 bg-black p-6 flex flex-col">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-white flex items-center">
            <span className="text-green-500 mr-2">Musicify</span>
          </h1>
        </div>
        
        <nav className="flex-1">
          <ul className="space-y-4">
            <li>
              <button className="flex items-center space-x-3 text-white hover:text-green-500 transition">
                <FaHome className="text-xl" />
                <span>Home</span>
              </button>
            </li>
            <li>
              <button className="flex items-center space-x-3 text-white hover:text-green-500 transition">
                <FaSearch className="text-xl" />
                <span>Search</span>
              </button>
            </li>
            <li>
              <button className="flex items-center space-x-3 text-white hover:text-green-500 transition">
                <MdLibraryMusic className="text-xl" />
                <span>Your Library</span>
              </button>
            </li>
            <li className="pt-4 mt-4 border-t border-gray-800">
              <button className="flex items-center space-x-3 text-white hover:text-green-500 transition">
                <FaPlus className="text-xl" />
                <span>Create Playlist</span>
              </button>
            </li>
            <li>
              <button className="flex items-center space-x-3 text-white hover:text-green-500 transition">
                <FaHeart className="text-xl" />
                <span>Liked Songs</span>
              </button>
            </li>
          </ul>
        </nav>
        
        <div className="mt-auto">
          <div className="text-sm text-gray-400 mb-2">Logged in as: {userEmail}</div>
          <button 
            onClick={handleLogout}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition"
          >
            <FaSignOutAlt />
            <span>Logout</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-b from-gray-900 to-black overflow-y-auto">
        <div className="p-8">
          {/* Search Bar */}
          <div className="mb-8">
            <form onSubmit={handleSearch} className="relative max-w-xl">
              <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="What do you want to listen to?"
                className="w-full pl-12 pr-4 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>

          {/* Search Results */}
          {isLoading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-green-500"></div>
            </div>
          ) : (
            <div>
              {searchResults.length > 0 ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Results for "{searchQuery}"</h2>
                  
                  {/* Top Result */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold mb-4">Top Result</h3>
                    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition cursor-pointer max-w-md">
                      <div className="flex items-center mb-4">
                        <img 
                          src={searchResults[0].image} 
                          alt={searchResults[0].title} 
                          className="w-24 h-24 rounded-full object-cover mr-4"
                        />
                        <div>
                          <h4 className="text-xl font-bold">{searchResults[0].title}</h4>
                          <p className="text-gray-400">{searchResults[0].artist}</p>
                        </div>
                      </div>
                      <button className="bg-green-500 text-black px-6 py-2 rounded-full font-bold hover:bg-green-400 transition">
                        Play
                      </button>
                    </div>
                  </div>
                  
                  {/* Songs */}
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Songs</h3>
                    <div className="bg-gray-900 bg-opacity-40 rounded-lg overflow-hidden">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-gray-800 text-left text-gray-400">
                            <th className="p-4">#</th>
                            <th className="p-4">Title</th>
                            <th className="p-4">Album</th>
                            <th className="p-4">Duration</th>
                          </tr>
                        </thead>
                        <tbody>
                          {searchResults.map((track, index) => (
                            <tr 
                              key={track.id} 
                              className="hover:bg-gray-800 transition group"
                            >
                              <td className="p-4">{index + 1}</td>
                              <td className="p-4 flex items-center space-x-4">
                                <img 
                                  src={track.image} 
                                  alt={track.title} 
                                  className="w-10 h-10" 
                                />
                                <div>
                                  <div className="font-medium group-hover:text-green-500 transition">
                                    {track.title}
                                  </div>
                                  <div className="text-sm text-gray-400">
                                    {track.artist}
                                  </div>
                                </div>
                              </td>
                              <td className="p-4">{track.album}</td>
                              <td className="p-4">{track.duration}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </>
              ) : (
                <div className="text-center py-16 text-gray-400">
                  <FaSearch className="mx-auto text-5xl mb-4" />
                  <p className="text-xl">Search for songs, artists, or albums</p>
                  <p className="mt-2">Your music journey starts here</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SpotifyDashboard;