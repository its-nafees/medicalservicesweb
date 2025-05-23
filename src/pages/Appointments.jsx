export default function Appointments() {
    return (
      <div className="container mx-auto py-12 px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-center mb-8">Book an Appointment</h1>
        <form className="bg-white p-6 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">Select Service</label>
            <select className="w-full p-2 border rounded">
              <option>General Consultation</option>
              <option>Emergency Care</option>
            </select>
          </div>
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
            Book Now
          </button>
        </form>
      </div>
    );
  }