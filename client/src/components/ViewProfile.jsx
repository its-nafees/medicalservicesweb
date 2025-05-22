import { FaHeartbeat } from "react-icons/fa";

const ViewProfile = () => {
  const doctor = {
    id: 1,
    name: "Dr. Priya Sharma",
    specialization: "Cardiology",
    experience: "14 years",
    photo: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
    bio: "Senior interventional cardiologist with expertise in complex angioplasties.",
    icon: FaHeartbeat,
    color: "text-red-500"
  };

  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src={doctor.photo}
            alt={doctor.name}
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            {doctor.specialization}
          </div>
          <div className={`flex items-center mt-1 text-lg font-medium ${doctor.color}`}>
            <doctor.icon className="mr-2" />
            {doctor.name}
          </div>
          <p className="mt-2 text-gray-500">{doctor.experience} of experience</p>
          <p className="mt-4 text-gray-600">{doctor.bio}</p>
          <button className="mt-6 px-4 py-2 bg-indigo-500 text-white rounded-md hover:bg-indigo-600 transition">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;