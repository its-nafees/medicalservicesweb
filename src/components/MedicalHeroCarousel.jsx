import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaPhone, FaCalendarAlt, FaUserMd, FaStethoscope, FaHospital } from "react-icons/fa";

// Updated slides with matte color backgrounds
const slides = [
  {
    image: "/images/doctor-563429_1280.jpg", // Doctor with patient
    title: "Expert Medical Consultations",
    text: "Our 200+ specialist doctors provide personalized care with 96% patient satisfaction rate.",
    bgColor: "rgba(1, 88, 155, 0.37)", // Blue matte overlay
    icon: <FaUserMd className="text-2xl" />,
    cta: "Book Appointment",
    link: "/appointments"
  },
  {
    image: "/images/surgery-1822458_1280(1).jpg", // Surgical team
    title: "Advanced Surgical Care",
    text: "State-of-the-art operation theaters with 98% success rate in complex procedures.",
    bgColor: "rgba(121, 85, 72, 0.42)", // Brown matte overlay
    icon: <FaStethoscope className="text-2xl" />,
    cta: "Meet Our Surgeons",
    link: "/doctors"
  },
  {
    image: "/images/medical-5051148_1280.jpg", // Emergency team
    title: "24/7 Emergency Services",
    text: "Average response time of 8 minutes for critical cases with dedicated trauma care.",
    bgColor: "rgba(183, 28, 124, 0.33)", // Red matte overlay
    icon: <FaHospital className="text-2xl" />,
    cta: "Emergency Contact",
    link: "tel:+911234567890"
  }
];

const MedicalHeroCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[700px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? "opacity-100" : "opacity-0"}`}
        >
          {/* Background Image with Color Matte */}
          <div className="absolute inset-0">
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt={slide.title}
            />
            <div 
              className="absolute inset-0"
              style={{ backgroundColor: slide.bgColor }}
            ></div>
          </div>

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-start px-8 md:px-16 lg:px-32 text-white">
            <div className="max-w-2xl space-y-6">
              <div className="flex items-center gap-3 text-2xl">
                {slide.icon}
                <span className="font-medium">{slide.title.split(' ')[0]}</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                {slide.title}
              </h2>
              
              <p className="text-lg md:text-xl lg:text-2xl max-w-lg">
                {slide.text}
              </p>
              
              <Link
                to={slide.link}
                className={`inline-flex items-center px-6 py-3 rounded-lg text-lg font-semibold transition-all shadow-lg hover:shadow-xl ${
                  slide.bgColor.includes("183, 28, 28") 
                    ? "bg-white text-red-700 hover:bg-gray-100" 
                    : "bg-white text-blue-800 hover:bg-blue-50"
                }`}
              >
                {slide.cta}
              </Link>

              <div className="flex items-center gap-4 pt-4 text-lg">
                <span className="font-medium">24/7 Helpline:</span>
                <a href="tel:+911234567890" className="font-bold hover:underline">
                  +91 12345 67890
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? "bg-white w-6" : "bg-white bg-opacity-50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default MedicalHeroCarousel;