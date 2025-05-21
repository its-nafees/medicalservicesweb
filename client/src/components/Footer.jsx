export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-700 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="bg-white p-2 rounded-lg mr-4">
                <img 
                  src="/medical-logo.svg" 
                  alt="MediCare Hospital Logo"
                  className="h-12"
                />
              </div>
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-blue-200">
                MediCare+
              </h2>
            </div>
            <p className="text-blue-100 mb-6">
              Your trusted healthcare partner offering comprehensive medical services with compassion and cutting-edge technology.
            </p>
            <div className="flex space-x-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social}
                  href="#" 
                  className="bg-blue-800 hover:bg-blue-600 w-10 h-10 rounded-full flex items-center justify-center transition-all"
                >
                  <i className={`fab fa-${social} text-blue-100`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-500 inline-block">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Services', 'Doctors', 'Appointments', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-blue-100 hover:text-white flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-500 inline-block">Our Services</h3>
            <ul className="space-y-3">
              {['Emergency Care', 'OPD Consultation', 'Diagnostics', 'Surgery', 'Vaccination', 'Health Checks'].map((service) => (
                <li key={service}>
                  <a href="#" className="text-blue-100 hover:text-white flex items-center">
                    <span className="w-2 h-2 bg-teal-400 rounded-full mr-3"></span>
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-6 pb-2 border-b border-blue-500 inline-block">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <i className="fas fa-map-marker-alt text-teal-300 mt-1 mr-3"></i>
                <p className="text-blue-100">123 Health Avenue, Medical City, MC 12345</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-phone-alt text-teal-300 mr-3"></i>
                <p className="text-blue-100">(123) 456-7890</p>
              </div>
              <div className="flex items-center">
                <i className="fas fa-envelope text-teal-300 mr-3"></i>
                <p className="text-blue-100">info@medicare.example</p>
              </div>
              <div className="mt-6 p-3 bg-blue-800 rounded-lg">
                <div className="flex items-center">
                  <i className="fas fa-ambulance text-red-300 mr-3 text-xl"></i>
                  <div>
                    <p className="font-bold text-white">Emergency</p>
                    <p className="text-blue-100">(123) 456-7891</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-blue-600 my-10"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex flex-wrap justify-center gap-4 mb-4 md:mb-0">
            {['Privacy Policy', 'Terms of Service', 'Sitemap', 'Careers'].map((item) => (
              <a key={item} href="#" className="text-blue-200 hover:text-white text-sm">
                {item}
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-blue-200 text-sm">
              © {new Date().getFullYear()} MediCare Hospital. All rights reserved.
            </p>
            <p className="text-blue-300 text-xs mt-1">
              Designed with <i className="fas fa-heart text-red-300"></i> for better healthcare
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}