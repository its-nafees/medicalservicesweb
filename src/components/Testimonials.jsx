import React, { useState, useEffect } from "react";
import { FaStar, FaUserInjured, FaProcedures, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [testimonials, setTestimonials] = useState([
    {
      name: "Rahul Sharma",
      text: "Excellent cardiac care with compassionate doctors. World-class treatment facilities.",
      rating: 5,
      role: "Heart Patient",
      treatment: "Angioplasty",
      date: "March 2023"
    },
    {
      name: "Priya Patel",
      text: "Maternity staff made delivery safe and comfortable. Exceptional care and support.",
      rating: 5,
      role: "New Mother",
      treatment: "Normal Delivery",
      date: "April 2023"
    },
  ]);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const [newTestimonial, setNewTestimonial] = useState({
    name: "",
    text: "",
    rating: 5,
    role: "",
    treatment: ""
  });

  const handleChange = (e) => {
    setNewTestimonial({ ...newTestimonial, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTestimonial.name && newTestimonial.text) {
      const testimonialToAdd = {
        ...newTestimonial,
        date: new Date().toLocaleDateString('en-IN', { month: 'long', year: 'numeric' })
      };
      setTestimonials([...testimonials, testimonialToAdd]);
      setNewTestimonial({
        name: "",
        text: "",
        rating: 5,
        role: "",
        treatment: ""
      });
      setCurrentIndex(testimonials.length);
    }
  };

  const handleRating = (ratingValue) => {
    setNewTestimonial({ ...newTestimonial, rating: ratingValue });
  };

  const nextSlide = () => {
    setCurrentIndex(prev => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <div className="flex items-center justify-center min-h-[450px] bg-blue-50 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-5xl flex flex-col md:flex-row gap-6">
        {/* Testimonials Section */}
        <div className="md:w-2/3 w-full">
          <h2 className="text-center text-2xl font-bold text-blue-800 mb-4">
            Patient Experiences
          </h2>

          <div className="relative bg-blue-50 p-6 rounded-xl h-[280px]">
            {testimonials.length > 0 ? (
              <div className="h-full flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <FaUserInjured className="text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonials[currentIndex].name}</h3>
                      <p className="text-sm text-blue-600">
                        {testimonials[currentIndex].role} • {testimonials[currentIndex].treatment}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        className={`${i < testimonials[currentIndex].rating ? "text-yellow-400" : "text-gray-300"} mr-1`}
                      />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 mb-4">"{testimonials[currentIndex].text}"</p>
                </div>
                
                <div className="text-sm text-gray-500">
                  {testimonials[currentIndex].date}
                </div>
              </div>
            ) : (
              <div className="h-full flex items-center justify-center text-center">
                <p className="text-gray-500">Share your experience with us!</p>
              </div>
            )}

            {testimonials.length > 1 && (
              <>
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-blue-100"
                >
                  <FaChevronLeft className="text-blue-600" />
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white p-2 rounded-full shadow-md hover:bg-blue-100"
                >
                  <FaChevronRight className="text-blue-600" />
                </button>
              </>
            )}
          </div>

          {testimonials.length > 1 && (
            <div className="flex justify-center mt-4 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${currentIndex === index ? 'bg-blue-600 w-4' : 'bg-gray-300'}`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Compact Form Section */}
        <div className="md:w-1/3 w-full bg-blue-600 p-5 rounded-xl">
          <div className="flex items-center gap-2 mb-4">
            <FaProcedures className="text-white" />
            <h3 className="text-lg font-semibold text-white">Share Your Story</h3>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                name="name"
                value={newTestimonial.name}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded bg-white/10 text-white placeholder-white/50 border border-white/20 text-sm"
                placeholder="Your name"
                required
              />
            </div>
            
            <div className="grid grid-cols-2 gap-2">
              <div>
                <input
                  type="text"
                  name="role"
                  value={newTestimonial.role}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded bg-white/10 text-white placeholder-white/50 border border-white/20 text-sm"
                  placeholder="Your role"
                  required
                />
              </div>
              <div>
                <input
                  type="text"
                  name="treatment"
                  value={newTestimonial.treatment}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded bg-white/10 text-white placeholder-white/50 border border-white/20 text-sm"
                  placeholder="Treatment (if any)"
                />
              </div>
            </div>
            
            <div>
              <textarea
                name="text"
                value={newTestimonial.text}
                onChange={handleChange}
                rows="3"
                className="w-full px-3 py-2 rounded bg-white/10 text-white placeholder-white/50 border border-white/20 text-sm"
                placeholder="Your experience..."
                required
              />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map((value) => (
                  <button
                    type="button"
                    key={value}
                    onClick={() => handleRating(value)}
                    className="focus:outline-none"
                  >
                    <FaStar
                      className={`text-lg ${value <= newTestimonial.rating ? "text-yellow-300" : "text-white/30"}`}
                    />
                  </button>
                ))}
              </div>
              <span className="text-white text-sm">
                {newTestimonial.rating}.0
              </span>
            </div>
            
            <button 
              type="submit" 
              className="w-full bg-white text-blue-700 font-medium text-sm p-2 rounded hover:bg-blue-50 mt-2"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;