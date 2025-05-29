import { Routes, Route } from 'react-router-dom';
import MainNavigation from "./components/MainNavigation";
import MedicalHeroCarousel from "./components/MedicalHeroCarousel";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import PatientPortal from "./pages/PatientPortal";
import HealthTipsPage from "./components/HealthTipsPage";
import OurDoctors from './components/OurDoctors';
import DoctorProfile from './components/DoctorProfile';
import BookAppointment from './components/BookAppointment';
import EmergencyPage from './pages/EmergencyPage';
import AdminDashboard from './components/AdminDashboard';
import PatientDashboard from './components/PatientDashboard';
import OPDConsultationDetails from './components/OPDConsultationDetails';
import EmergencyCareDetails from './components/EmergencyCareDetails';
import DiagnosticServices from './components/DiagnosticServices';
import Vaccinations from './components/Vaccinations';
import HealthCheckups from './components/HealthCheckups';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <MainNavigation />
      <MedicalHeroCarousel />
      <main className="flex-grow pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/health-tips" element={<HealthTipsPage />} />
          <Route path="/emergency" element={<EmergencyPage />} />
          <Route path="/doctors" element={<OurDoctors />} />
          <Route path="/doctors/:id" element={<DoctorProfile />} />
          <Route path="/appointments" element={<BookAppointment />} />
          <Route path="/appointments/:id" element={<BookAppointment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/patient-portal" element={<PatientPortal />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/patient-dashboard" element={<PatientDashboard />} />
          <Route path="/services/opd" element={<OPDConsultationDetails />} />
          <Route path="/services/emergency" element={<EmergencyCareDetails />} />
          <Route path="/services/diagnostics" element={<DiagnosticServices />} />
          <Route path="/services/vaccinations" element={<Vaccinations />} />
          <Route path="/services/checkups" element={<HealthCheckups />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
