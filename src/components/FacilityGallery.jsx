import React, { useState } from 'react';
import { FiZoomIn, FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const FacilityGallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentCategory, setCurrentCategory] = useState('Waiting Areas');

  const facilityData = {
    'Waiting Areas': [
      {
        id: 1,
        src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
        alt: 'Comfortable lounge with natural lighting',
        title: 'Premium Lounge',
        description: 'Spacious waiting area with ergonomic seating'
      },
      {
        id: 2,
        src: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842',
        alt: 'Modern reception area',
        title: 'Reception Zone',
        description: 'Efficient check-in counters with friendly staff'
      },
      {
        id: 3,
        src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
        alt: 'Children play area',
        title: 'Kids Corner',
        description: 'Dedicated play space for young patients'
      }
    ],
    'Operation Theaters': [
      {
        id: 4,
        src: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322',
        alt: 'Advanced surgical suite',
        title: 'OR-1',
        description: 'Fully equipped with robotic surgery systems'
      },
      {
        id: 5,
        src: 'https://images.unsplash.com/photo-1581595210413-e90e5b685f3c',
        alt: 'Sterile operation environment',
        title: 'OR-2',
        description: 'Laminar airflow with HEPA filtration'
      },
      {
        id: 6,
        src: 'https://images.unsplash.com/photo-1581595219506-9a1c2a5a3b0d',
        alt: 'Neurosurgery theater',
        title: 'Neuro OR',
        description: 'Specialized for complex neurological procedures'
      }
    ],
    'Diagnostic Labs': [
      {
        id: 7,
        src: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d',
        alt: 'Pathology lab',
        title: 'Lab A',
        description: 'Fully automated testing equipment'
      },
      {
        id: 8,
        src: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0',
        alt: 'Radiology section',
        title: 'Imaging Center',
        description: '3T MRI and 128-slice CT scanners'
      },
      {
        id: 9,
        src: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef',
        alt: 'Microbiology lab',
        title: 'Lab B',
        description: 'Advanced culture and sensitivity testing'
      }
    ],
    'Patient Rooms': [
      {
        id: 10,
        src: 'https://images.unsplash.com/photo-1581595219315-a187dd40c322',
        alt: 'Deluxe private room',
        title: 'Suite 101',
        description: 'Luxury accommodation with city views'
      },
      {
        id: 11,
        src: 'https://images.unsplash.com/photo-1581056771107-24ca5f033842',
        alt: 'Standard patient room',
        title: 'Room 205',
        description: 'Comfortable single occupancy with amenities'
      },
      {
        id: 12,
        src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118',
        alt: 'ICU unit',
        title: 'ICU-3',
        description: '24/7 monitoring with advanced life support'
      }
    ]
  };

  const openImage = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = 'hidden';
  };

  const closeImage = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigateImage = (direction) => {
    const currentImages = facilityData[currentCategory];
    const currentIndex = currentImages.findIndex(img => img.id === selectedImage.id);
    let newIndex;
    
    if (direction === 'prev') {
      newIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
    } else {
      newIndex = currentIndex === currentImages.length - 1 ? 0 : currentIndex + 1;
    }
    
    setSelectedImage(currentImages[newIndex]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-teal-400 bg-clip-text text-transparent">
          Our World-Class Facilities
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Explore our cutting-edge medical environments designed for exceptional patient care
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 mb-12">
        {Object.keys(facilityData).map((category) => (
          <button
            key={category}
            onClick={() => setCurrentCategory(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all ${currentCategory === category 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilityData[currentCategory].map((image) => (
          <div 
            key={image.id} 
            className="relative group rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
            onClick={() => openImage(image)}
          >
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img 
                src={image.src} 
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
              <h3 className="text-white text-xl font-bold mb-1">{image.title}</h3>
              <p className="text-gray-200 text-sm">{image.description}</p>
              <div className="mt-4 flex justify-center">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm text-white">
                  <FiZoomIn size={20} />
                </div>
              </div>
            </div>
            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-sm">
              {currentCategory}
            </div>
          </div>
        ))}
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeImage}
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors p-2"
          >
            <FiX size={28} />
          </button>
          
          <button 
            onClick={() => navigateImage('prev')}
            className="absolute left-6 text-white hover:text-gray-300 transition-colors p-2 bg-black/30 rounded-full"
          >
            <FiChevronLeft size={32} />
          </button>
          
          <div className="max-w-5xl w-full mx-16">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt}
              className="w-full max-h-[80vh] object-contain rounded-lg"
            />
            <div className="mt-6 text-center text-white">
              <h3 className="text-2xl font-bold mb-2">{selectedImage.title}</h3>
              <p className="text-gray-300">{selectedImage.description}</p>
              <p className="mt-2 text-sm text-gray-400">{currentCategory}</p>
            </div>
          </div>
          
          <button 
            onClick={() => navigateImage('next')}
            className="absolute right-6 text-white hover:text-gray-300 transition-colors p-2 bg-black/30 rounded-full"
          >
            <FiChevronRight size={32} />
          </button>
        </div>
      )}
    </div>
  );
};

export default FacilityGallery;