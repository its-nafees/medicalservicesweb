import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  FiHeart,
  FiActivity,
  FiDroplet,
  FiPlus,
  FiArrowLeft,
  FiArrowRight,
  FiTrash2,
  FiEdit,
  FiSun,
  FiMoon,
  FiAward,
  FiEye
} from 'react-icons/fi';

// Image URLs categorized by common health tip categories
const categoryImages = {
  'Hydration': 'https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7',
  'Mental Wellness': 'https://images.unsplash.com/photo-1545205597-3d9d02c29597',
  'Nutrition': 'https://images.unsplash.com/photo-1490645935967-10de6ba17061',
  'Exercise': 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b',
  'Sleep': 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2',
  'General Health': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528',
  'Ayurveda': 'https://images.unsplash.com/photo-1584473457409-cec4611a4e09',
  'Yoga': 'https://images.unsplash.com/photo-1545389336-cf090694435e',
  'Immunity': 'https://images.unsplash.com/photo-1571019614243-c4cd4dc44a4b',
  'Eye Care': 'https://images.unsplash.com/photo-1494253109108-2e30c049369b',
  'Default': 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528'
};

// Icon and color mapping
const categoryStyles = {
  'Hydration': {
    icon: 'droplet',
    color: 'text-blue-500',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800'
  },
  'Mental Wellness': {
    icon: 'activity',
    color: 'text-green-500',
    bgColor: 'bg-green-100',
    textColor: 'text-green-800'
  },
  'Nutrition': {
    icon: 'heart',
    color: 'text-red-500',
    bgColor: 'bg-red-100',
    textColor: 'text-red-800'
  },
  'Exercise': {
    icon: 'activity',
    color: 'text-purple-500',
    bgColor: 'bg-purple-100',
    textColor: 'text-purple-800'
  },
  'Sleep': {
    icon: 'moon',
    color: 'text-indigo-500',
    bgColor: 'bg-indigo-100',
    textColor: 'text-indigo-800'
  },
  'General Health': {
    icon: 'heart',
    color: 'text-pink-500',
    bgColor: 'bg-pink-100',
    textColor: 'text-pink-800'
  },
  'Ayurveda': {
    icon: 'award',
    color: 'text-yellow-500',
    bgColor: 'bg-yellow-100',
    textColor: 'text-yellow-800'
  },
  'Yoga': {
    icon: 'award',
    color: 'text-teal-500',
    bgColor: 'bg-teal-100',
    textColor: 'text-teal-800'
  },
  'Immunity': {
    icon: 'sun',
    color: 'text-orange-500',
    bgColor: 'bg-orange-100',
    textColor: 'text-orange-800'
  },
  'Eye Care': {
    icon: 'eye',
    color: 'text-cyan-500',
    bgColor: 'bg-cyan-100',
    textColor: 'text-cyan-800'
  },
  'Default': {
    icon: 'heart',
    color: 'text-gray-500',
    bgColor: 'bg-gray-100',
    textColor: 'text-gray-800'
  }
};

const HealthTipsPage = () => {
  const [selectedTip, setSelectedTip] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);
  const [newTip, setNewTip] = useState({
    title: '',
    hindiTitle: '',
    category: '',
    content: '',
    hindiContent: ''
  });

  // Initialize state with data from localStorage or default tips
  const [healthTips, setHealthTips] = useState(() => {
    const savedTips = localStorage.getItem('healthTips');
    if (savedTips) {
      return JSON.parse(savedTips);
    } else {
      return [
        {
          id: 1,
          title: "Summer Hydration Guide",
          hindiTitle: "गर्मी में पानी की कमी से बचाव",
          icon: "droplet",
          category: "Hydration",
          content: "During peak summer, drink 3-4 liters of water daily. Include coconut water, buttermilk, and water-rich fruits like watermelon. Avoid excessive caffeine and alcohol.",
          hindiContent: "गर्मियों में रोज 3-4 लीटर पानी पिएं। नारियल पानी, छाछ और तरबूज जैसे फल शामिल करें। कैफीन और अल्कोहल से बचें।",
          image: categoryImages['Hydration']
        },
        {
          id: 2,
          title: "Stress Relief Yoga",
          hindiTitle: "तनाव कम करने के योगासन",
          icon: "activity",
          category: "Mental Wellness",
          content: "Practice these daily: 1) Balasana (Child's Pose) 2) Savasana 3) Sukhasana. Even 15 minutes can reduce stress significantly.",
          hindiContent: "रोज करें: 1) बालासन 2) शवासन 3) सुखासन। सिर्फ 15 मिनट भी तनाव कम कर सकता है।",
          image: categoryImages['Mental Wellness']
        },
        {
          id: 3,
          title: "Balanced Diet Tips",
          hindiTitle: "संतुलित आहार के उपाय",
          icon: "heart",
          category: "Nutrition",
          content: "50% vegetables/fruits, 25% whole grains, 25% protein. Include nuts, seeds and healthy fats. Limit processed foods.",
          hindiContent: "50% सब्जियां/फल, 25% साबुत अनाज, 25% प्रोटीन। नट्स और स्वस्थ वसा शामिल करें। प्रोसेस्ड फूड कम लें।",
          image: categoryImages['Nutrition']
        },
        {
          id: 4,
          title: "Eye Care for Screen Users",
          hindiTitle: "स्क्रीन उपयोगकर्ताओं के लिए आंखों की देखभाल",
          icon: "eye",
          category: "Eye Care",
          content: "Follow the 20-20-20 rule: Every 20 minutes, look at something 20 feet away for 20 seconds. Use artificial tears if needed and adjust screen brightness.",
          hindiContent: "20-20-20 नियम का पालन करें: हर 20 मिनट में, 20 सेकंड के लिए 20 फीट दूर देखें। आवश्यकता होने पर कृत्रिम आँसू का उपयोग करें और स्क्रीन की चमक समायोजित करें।",
          image: categoryImages['Eye Care']
        }
      ];
    }
  });

  // Save to localStorage whenever healthTips changes
  useEffect(() => {
    localStorage.setItem('healthTips', JSON.stringify(healthTips));
  }, [healthTips]);

  const handleAddTip = (e) => {
    e.preventDefault();
    
    // Get appropriate image, icon and styles based on category
    const category = newTip.category;
    const styles = categoryStyles[category] || categoryStyles['Default'];
    
    if (editingId) {
      // Update existing tip
      setHealthTips(healthTips.map(tip => 
        tip.id === editingId ? { 
          ...newTip, 
          id: editingId,
          image: categoryImages[category] || categoryImages['Default'],
          icon: styles.icon,
          category: category
        } : tip
      ));
      setEditingId(null);
    } else {
      // Add new tip
      const newTipWithId = {
        ...newTip,
        id: Math.max(...healthTips.map(tip => tip.id), 0) + 1,
        icon: styles.icon,
        image: categoryImages[category] || categoryImages['Default'],
        category: category
      };
      setHealthTips([...healthTips, newTipWithId]);
    }
    
    setNewTip({ title: '', hindiTitle: '', category: '', content: '', hindiContent: '' });
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTip({ ...newTip, [name]: value });
  };

  const handleDeleteTip = (id, e) => {
    e.stopPropagation();
    if (window.confirm('Are you sure you want to delete this tip?')) {
      setHealthTips(healthTips.filter(tip => tip.id !== id));
      if (selectedTip && selectedTip.id === id) {
        setSelectedTip(null);
      }
    }
  };

  const handleEditTip = (tip, e) => {
    e.stopPropagation();
    setNewTip({
      title: tip.title,
      hindiTitle: tip.hindiTitle,
      category: tip.category,
      content: tip.content,
      hindiContent: tip.hindiContent
    });
    setEditingId(tip.id);
    setShowForm(true);
  };

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'heart':
        return <FiHeart size={20} />;
      case 'activity':
        return <FiActivity size={20} />;
      case 'droplet':
        return <FiDroplet size={20} />;
      case 'moon':
        return <FiMoon size={20} />;
      case 'award':
        return <FiAward size={20} />;
      case 'sun':
        return <FiSun size={20} />;
      case 'eye':
        return <FiEye size={20} />;
      default:
        return <FiHeart size={20} />;
    }
  };

  // Categories for dropdown
  const categories = Object.keys(categoryStyles).filter(cat => cat !== 'Default');

  if (selectedTip) {
    const styles = categoryStyles[selectedTip.category] || categoryStyles['Default'];
    
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button onClick={() => setSelectedTip(null)} className="flex items-center text-blue-600 mb-6">
          <FiArrowLeft className="mr-2" /> Back to all tips
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {selectedTip.image && (
            <img src={selectedTip.image} alt={selectedTip.title} className="w-full h-64 object-cover" />
          )}
          <div className="p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedTip.title}</h2>
                <p className="text-gray-600 italic">{selectedTip.hindiTitle}</p>
              </div>
              <span className={`${styles.bgColor} ${styles.textColor} text-xs px-2 py-1 rounded-full`}>
                {selectedTip.category}
              </span>
            </div>
            <div className="prose max-w-none">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">English</h3>
              <p className="text-gray-700 mb-6 whitespace-pre-line">{selectedTip.content}</p>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">हिंदी</h3>
              <p className="text-gray-700 whitespace-pre-line">{selectedTip.hindiContent}</p>
            </div>
            <div className="mt-6 flex justify-end space-x-2">
              <button 
                onClick={(e) => handleEditTip(selectedTip, e)}
                className="flex items-center text-blue-600 border border-blue-600 px-3 py-1 rounded-md hover:bg-blue-50"
              >
                <FiEdit className="mr-1" /> Edit
              </button>
              <button 
                onClick={(e) => handleDeleteTip(selectedTip.id, e)}
                className="flex items-center text-red-600 border border-red-600 px-3 py-1 rounded-md hover:bg-red-50"
              >
                <FiTrash2 className="mr-1" /> Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showForm) {
    const styles = categoryStyles[newTip.category] || categoryStyles['Default'];
    
    return (
      <div className="max-w-2xl mx-auto px-4 py-8">
        <button onClick={() => {
          setShowForm(false);
          setEditingId(null);
          setNewTip({ title: '', hindiTitle: '', category: '', content: '', hindiContent: '' });
        }} className="flex items-center text-blue-600 mb-6">
          <FiArrowLeft className="mr-2" /> Back to all tips
        </button>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-6">{editingId ? 'Edit Health Tip' : 'Add New Health Tip'}</h2>
          <form onSubmit={handleAddTip}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title (English)</label>
                <input type="text" name="title" value={newTip.title} onChange={handleInputChange} className="w-full p-2 border rounded-md" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Title (Hindi)</label>
                <input type="text" name="hindiTitle" value={newTip.hindiTitle} onChange={handleInputChange} className="w-full p-2 border rounded-md" required />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
              <select 
                name="category" 
                value={newTip.category} 
                onChange={handleInputChange} 
                className="w-full p-2 border rounded-md" 
                required
              >
                <option value="">Select a category</option>
                {categories.map((category) => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content (English)</label>
                <textarea name="content" value={newTip.content} onChange={handleInputChange} className="w-full p-2 border rounded-md h-32" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Content (Hindi)</label>
                <textarea name="hindiContent" value={newTip.hindiContent} onChange={handleInputChange} className="w-full p-2 border rounded-md h-32" required />
              </div>
            </div>
            {newTip.category && (
              <div className="mb-4 p-3 bg-gray-50 rounded-md">
                <div className="flex items-center mb-2">
                  <span className={`${styles.color} mr-2`}>
                    {getIconComponent(styles.icon)}
                  </span>
                  <span className={`${styles.bgColor} ${styles.textColor} text-xs px-2 py-1 rounded-full`}>
                    {newTip.category}
                  </span>
                </div>
                <p className="text-sm text-gray-600 mb-2">Preview image:</p>
                <img 
                  src={categoryImages[newTip.category] || categoryImages['Default']} 
                  alt="Category preview" 
                  className="w-full h-32 object-cover rounded-md"
                />
              </div>
            )}
            <div className="flex justify-between">
              <button 
                type="button" 
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                  setNewTip({ title: '', hindiTitle: '', category: '', content: '', hindiContent: '' });
                }}
                className="bg-gray-200 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
              <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                {editingId ? 'Update Health Tip' : 'Add Health Tip'}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">All Health Tips</h1>
        <button 
          onClick={() => {
            setShowForm(true);
            setEditingId(null);
            setNewTip({ title: '', hindiTitle: '', category: '', content: '', hindiContent: '' });
          }} 
          className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          <FiPlus className="mr-2" /> Add New Tip
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {healthTips.map((tip) => {
          const styles = categoryStyles[tip.category] || categoryStyles['Default'];
          
          return (
            <div 
              key={tip.id} 
              onClick={() => setSelectedTip(tip)} 
              className="bg-white rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-all cursor-pointer relative overflow-hidden group"
            >
              <div className="absolute inset-0 overflow-hidden">
                <img 
                  src={tip.image} 
                  alt={tip.title} 
                  className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity"
                />
              </div>
              <div className="relative z-10 h-full flex flex-col">
                <div className="p-6 flex-grow">
                  <div className="flex items-center mb-3">
                    <span className={`${styles.color} mr-2`}>
                      {getIconComponent(tip.icon)}
                    </span>
                    <span className={`${styles.bgColor} ${styles.textColor} text-xs px-2 py-1 rounded-full`}>
                      {tip.category}
                    </span>
                  </div>
                  <h3 className="font-bold text-lg text-gray-800 mb-2">{tip.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{tip.hindiTitle}</p>
                </div>
                <div className="px-6 pb-4 text-blue-600 text-sm flex items-center">
                  Read more <FiArrowRight className="ml-1" />
                </div>
                <div className="absolute top-2 right-2 flex space-x-1">
                  <button 
                    onClick={(e) => handleEditTip(tip, e)}
                    className="p-1 text-gray-500 hover:text-blue-600 bg-white rounded-full shadow"
                    title="Edit"
                  >
                    <FiEdit size={16} />
                  </button>
                  <button 
                    onClick={(e) => handleDeleteTip(tip.id, e)}
                    className="p-1 text-gray-500 hover:text-red-600 bg-white rounded-full shadow"
                    title="Delete"
                  >
                    <FiTrash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-8">
        <Link to="/" className="text-blue-600 flex items-center">
          <FiArrowLeft className="mr-2" /> Back to Home
        </Link>
      </div>
    </div>
  );
};

export default HealthTipsPage;