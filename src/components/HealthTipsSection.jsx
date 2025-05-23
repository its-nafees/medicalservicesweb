import React, { useState, useEffect } from 'react';
import { 
  FiHeart, 
  FiActivity, 
  FiDroplet, 
  FiClock, 
  FiX, 
  FiRefreshCw,
  FiArrowRight,
  FiEye
} from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const HealthTipsSection = () => {
  // Medical color palette
  const colors = {
    primary: '#2563eb',   // Doctor blue
    secondary: '#0ea5e9', // Medical teal
    accent: '#ef4444',    // Emergency red
    light: '#ffffff',     // Pure white
    dark: '#1e293b',      // Dark navy
    text: '#334155',      // Primary text
    subtle: '#64748b'     // Secondary text
  };

  const [loading, setLoading] = useState(true);
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [news, setNews] = useState([]);
  const [lastUpdated, setLastUpdated] = useState(null);
  const navigate = useNavigate();

  // Health Tips Data (3 items)
  const healthTips = [
    {
      id: 1,
      title: "Summer Hydration Guide",
      hindiTitle: "गर्मी में पानी की कमी से बचाव",
      icon: "droplet",
      category: "Hydration",
      bgColor: colors.primary,
      fullContent: {
        english: "During peak summer, drink 3-4 liters of water daily. Include coconut water, buttermilk, and water-rich fruits like watermelon. Avoid excessive caffeine and alcohol.",
        hindi: "गर्मियों में रोज 3-4 लीटर पानी पिएं। नारियल पानी, छाछ और तरबूज जैसे फल शामिल करें। कैफीन और अल्कोहल से बचें।",
        image: "https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7"
      }
    },
    {
      id: 2,
      title: "Stress Relief Yoga",
      hindiTitle: "तनाव कम करने के योगासन",
      icon: "activity",
      category: "Mental Wellness",
      bgColor: colors.secondary,
      fullContent: {
        english: "Practice these daily: 1) Balasana (Child's Pose) 2) Savasana 3) Sukhasana. Even 15 minutes can reduce stress significantly.",
        hindi: "रोज करें: 1) बालासन 2) शवासन 3) सुखासन। सिर्फ 15 मिनट भी तनाव कम कर सकता है।",
        image: "https://images.unsplash.com/photo-1545205597-3d9d02c29597"
      }
    },
    {
      id: 3,
      title: "Balanced Diet Tips",
      hindiTitle: "संतुलित आहार के उपाय",
      icon: "heart",
      category: "Nutrition",
      bgColor: colors.accent,
      fullContent: {
        english: "50% vegetables/fruits, 25% whole grains, 25% protein. Include nuts, seeds and healthy fats. Limit processed foods.",
        hindi: "50% सब्जियां/फल, 25% साबुत अनाज, 25% प्रोटीन। नट्स और स्वस्थ वसा शामिल करें। प्रोसेस्ड फूड कम लें।",
        image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061"
      }
    },
  ];

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'heart':
        return <FiHeart size={20} />;
      case 'activity':
        return <FiActivity size={20} />;
      case 'droplet':
        return <FiDroplet size={20} />;
      case 'eye':
        return <FiEye size={20} />;
      default:
        return <FiHeart size={20} />;
    }
  };

  // Fetch news
  const fetchNews = async () => {
    try {
      // Mock API call
      const mockNews = [
        {
          id: 1,
          title: "स्वास्थ्य मंत्रालय ने जारी की नई गाइडलाइंस",
          englishTitle: "Health Ministry releases new guidelines",
          date: new Date().toISOString(),
          source: "Dainik Bhaskar",
          content: "नई गाइडलाइंस के अनुसार गर्मियों में हाइड्रेशन पर विशेष ध्यान देने की सलाह दी गई है...",
          englishContent: "New guidelines recommend special focus on hydration during summer months...",
          image: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae"
        }
      ];
      setNews(mockNews);
      setLastUpdated(new Date());
    } catch (error) {
      console.error("Failed to fetch news:", error);
    }
  };

  useEffect(() => {
    fetchNews();
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const openDetail = (item) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[300px]">
        <div 
          className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 mb-4" 
          style={{ borderColor: colors.primary }}
        ></div>
        <p style={{ color: colors.text }}>Loading health resources...</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8" style={{ backgroundColor: colors.light }}>
      {/* Header */}
      <div className="text-center mb-12">
        <h2 
          className="text-3xl md:text-4xl font-bold mb-4"
          style={{ 
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}
        >
          Health Tips & News
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Expert-curated health advice and latest medical updates for your wellbeing
        </p>
      </div>

      {/* Health Tips Section */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-6">
          <h3 
            className="text-2xl font-semibold flex items-center gap-2"
            style={{ color: colors.dark }}
          >
            <FiHeart className="text-pink-500" />
            Daily Health Tips
          </h3>
          <button 
            onClick={() => navigate('/health-tips')}
            className="text-sm font-medium flex items-center"
            style={{ color: colors.primary }}
          >
            View all tips <FiArrowRight className="ml-1" />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {healthTips.map((item) => (
            <div 
              key={item.id}
              onClick={() => openDetail(item)}
              className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer transition-transform hover:scale-[1.02] group"
              style={{ borderTop: `4px solid ${item.bgColor}` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.fullContent.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="flex items-center">
                    <span className="text-white mr-2">
                      {getIconComponent(item.icon)}
                    </span>
                    <span 
                      className="text-white text-xs px-2 py-1 rounded-full"
                      style={{ backgroundColor: `${item.bgColor}90` }}
                    >
                      {item.category}
                    </span>
                  </div>
                  <h3 className="text-white font-bold text-lg mt-1">{item.title}</h3>
                </div>
              </div>
              <div className="p-5">
                <p className="text-gray-600 mb-4">{item.hindiTitle}</p>
                <div className="flex items-center text-blue-600 text-sm font-medium">
                  Read more <FiArrowRight className="ml-1" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* News Section */}
      <div className="mb-12">
        <div className="flex items-center justify-between mb-6">
          <h3 
            className="text-2xl font-semibold flex items-center gap-2"
            style={{ color: colors.dark }}
          >
            <FiClock className="text-blue-500" />
            Latest Health News
          </h3>
          <div className="flex items-center gap-4">
            {lastUpdated && (
              <p 
                className="text-xs"
                style={{ color: colors.subtle }}
              >
                Updated: {new Date(lastUpdated).toLocaleTimeString()}
              </p>
            )}
            <button 
              onClick={fetchNews}
              className="text-sm font-medium flex items-center"
              style={{ color: colors.primary }}
            >
              <FiRefreshCw className="mr-1" /> Refresh
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {news.map((newsItem) => (
            <div 
              key={newsItem.id} 
              onClick={() => openDetail(newsItem)}
              className="bg-white rounded-xl p-6 cursor-pointer transition-all hover:shadow-lg flex flex-col md:flex-row gap-6"
              style={{ 
                borderLeft: `4px solid ${colors.primary}`,
                color: colors.text
              }}
            >
              {newsItem.image && (
                <img 
                  src={newsItem.image} 
                  alt={newsItem.title}
                  className="w-full md:w-40 h-40 object-cover rounded-lg"
                />
              )}
              <div className="flex-1">
                <div className="flex justify-between items-start mb-2">
                  <h4 
                    className="font-bold text-lg"
                    style={{ color: colors.dark }}
                  >
                    {newsItem.englishTitle}
                  </h4>
                  <span 
                    className="text-xs whitespace-nowrap ml-4 mt-1"
                    style={{ color: colors.subtle }}
                  >
                    {new Date(newsItem.date).toLocaleDateString()}
                  </span>
                </div>
                <p 
                  className="mb-3 text-gray-700"
                >
                  {newsItem.title}
                </p>
                <div className="flex justify-between items-center">
                  <div 
                    className="text-xs font-medium"
                    style={{ color: colors.primary }}
                  >
                    Source: {newsItem.source}
                  </div>
                  <button className="text-blue-600 text-sm font-medium flex items-center">
                    Read full story <FiArrowRight className="ml-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50">
          <div 
            className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            style={{ 
              boxShadow: '0 10px 25px -5px rgba(0,0,0,0.3)',
              borderTop: `4px solid ${selectedItem.bgColor || colors.primary}`
            }}
          >
            <div className="relative">
              {selectedItem.fullContent?.image && (
                <img 
                  src={selectedItem.fullContent.image} 
                  alt={selectedItem.title}
                  className="w-full h-64 object-cover rounded-t-xl"
                />
              )}
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                style={{ color: colors.primary }}
              >
                <FiX size={20} />
              </button>
            </div>
            
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span 
                  className="text-xs font-medium px-3 py-1 rounded-full"
                  style={{ 
                    backgroundColor: (selectedItem.bgColor || colors.primary) + '20',
                    color: selectedItem.bgColor || colors.primary
                  }}
                >
                  {selectedItem.category || selectedItem.source}
                </span>
                <span 
                  className="text-xs"
                  style={{ color: colors.subtle }}
                >
                  {new Date(selectedItem.date || Date.now()).toLocaleString()}
                </span>
              </div>
              
              <h3 
                className="text-2xl font-bold mb-4 leading-tight"
                style={{ color: colors.dark }}
              >
                {selectedItem.englishTitle || selectedItem.title}
              </h3>
              
              <div className="space-y-6">
                {selectedItem.content && (
                  <div>
                    <h4 
                      className="font-semibold mb-3 text-lg"
                      style={{ color: colors.primary }}
                    >
                      Hindi
                    </h4>
                    <p 
                      className="whitespace-pre-line leading-relaxed text-gray-700"
                    >
                      {selectedItem.content}
                    </p>
                  </div>
                )}
                
                <div>
                  <h4 
                    className="font-semibold mb-3 text-lg"
                    style={{ color: colors.primary }}
                  >
                    {selectedItem.content ? "English" : "Details"}
                  </h4>
                  <p 
                    className="whitespace-pre-line leading-relaxed text-gray-700"
                  >
                    {selectedItem.englishContent || selectedItem.fullContent?.english}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default HealthTipsSection;