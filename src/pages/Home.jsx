import React from "react";
import KeyServices from "../components/KeyServices";
import WhyChooseUs from "../components/WhyChooseUs";
import DoctorProfiles from "../components/DoctorProfiles";
import Testimonials from "../components/Testimonials";
import HealthTipsSection from "../components/HealthTipsSection";
import FacilityGallery from "../components/FacilityGallery";
import InsurancePartners from "../components/InsurancePartners";
import Emergency from "../components/Emergency";

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Carousel Section */}

      <KeyServices />
      <WhyChooseUs />
      <DoctorProfiles />
      <Testimonials />
      <HealthTipsSection />
      <FacilityGallery/>
      <InsurancePartners/>
      <Emergency/>
    </div>
  );
}
