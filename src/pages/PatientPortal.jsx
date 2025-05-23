export default function PatientPortal() {
    return (
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Patient Portal</h1>
        <div className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto">
          <p className="text-center mb-6">Welcome to your patient dashboard</p>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/appointments" className="portal-card">
              My Appointments
            </a>
            <a href="/prescriptions" className="portal-card">
              Prescriptions
            </a>
            <a href="/medical-history" className="portal-card">
              Medical History
            </a>
            <a href="/billing" className="portal-card">
              Billing
            </a>
          </div>
        </div>
      </div>
    );
  }