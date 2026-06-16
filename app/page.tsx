import type { Metadata } from 'next';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: 'India’s No.1 Institute for MCA Entrance Coaching & NIMCET Coaching',
  description:
    'Best MCA Entrance Coaching Institute provides offline or online mca coaching for entrance exam preparation. 100+ Selections in NIMCET- 2025.',
  openGraph: {
    title: 'India’s No.1 Institute for MCA Entrance Coaching & NIMCET Coaching',
    description:
      'Best MCA Entrance Coaching Institute provides offline or online mca coaching for entrance exam preparation. 100+ Selections in NIMCET- 2025.',
    url: 'https://www.landmarkinstitute.com/',
  },
};
import Hero from '@/components/Hero';
import ResultsTicker from '@/components/ResultsTicker';
import StatsBand from '@/components/StatsBand';
import WhyLandmark from '@/components/WhyLandmark';
import Courses from '@/components/Courses';
import Results from '@/components/Results';
import VideoTestimonials from '@/components/VideoTestimonials';
import Faculty from '@/components/Faculty';
import { Testimonials, GoogleReviews } from '@/components/Testimonials';
import ExamsHub from '@/components/ExamsHub';
import FreeResources from '@/components/FreeResources';
import AdmissionAlert from '@/components/AdmissionAlert';
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

      <VideoTestimonials />
      <div className="section-divider" />

      <Faculty />
      <div className="section-divider" />

      <Testimonials />

      <GoogleReviews />
      <div className="section-divider" />

      <ExamsHub />
      <div className="section-divider" />

      {/* <FreeResources /> */}

      <AdmissionAlert />
      <div className="section-divider" />

      <FAQ />
      <div className="section-divider" />

      <Contact />

      <Footer />

      <FloatingWhatsApp />
      <LeadCapturePopup />
    </>
  );
}
