export default function Services() {
    const services = [
      "General Consultation",
      "Emergency Care",
      "Diagnostic Tests",
      "Vaccinations",
      "Health Checkups"
    ];
  
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-12">Our Services</h1>
        <ul className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <li key={index} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold">{service}</h3>
            </li>
          ))}
        </ul>
      </div>
    );
  }