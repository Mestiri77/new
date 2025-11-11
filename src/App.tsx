import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { FleetShowcase } from "./components/FleetShowcase";
import { BookingSection } from "./components/BookingSection";
import { BestExperience } from "./components/BestExperience";
import { StatsSection } from "./components/StatsSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Testimonials } from "./components/Testimonials";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <FleetShowcase />
      <BestExperience />
      <StatsSection />
      <BookingSection />
      <WhyChooseUs />
      <Testimonials />
      <ContactSection />
      <Footer />
      <Toaster />
    </div>
  );
}