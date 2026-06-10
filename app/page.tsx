import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ResultsTicker from '@/components/ResultsTicker';
import StatsBand from '@/components/StatsBand';
import WhyLandmark from '@/components/WhyLandmark';
import Courses from '@/components/Courses';
import Results from '@/components/Results';
import Faculty from '@/components/Faculty';
import { Testimonials, GoogleReviews } from '@/components/Testimonials';
import ExamsHub from '@/components/ExamsHub';
import FreeResources from '@/components/FreeResources';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LeadCapturePopup from '@/components/LeadCapturePopup';

export default function Home() {
  return (
    <>
      <Topbar />
      <Navbar />
      <Hero />
      <ResultsTicker />
      <StatsBand />

      <WhyLandmark />
      <div className="section-divider" />

      <Courses />
      <div className="section-divider" />

      <Results />
      <div className="section-divider" />

      <Faculty />
      <div className="section-divider" />

      <Testimonials />

      <GoogleReviews />
      <div className="section-divider" />

      <ExamsHub />
      <div className="section-divider" />

      <FreeResources />

      <FAQ />
      <div className="section-divider" />

      <Contact />

      <Footer />

      <FloatingWhatsApp />
      <LeadCapturePopup />
    </>
  );
}
