import type { Metadata } from 'next';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';

export const metadata: Metadata = {
  title: "Landmark Institute - India's No.1 Institute for MCA Entrance",
  description:
    'Best MCA Entrance Coaching Institute provides offline or online mca coaching for mca entrance exam preparation. 100+ Selections in NIMCET-2026.',
  openGraph: {
    title: "Landmark Institute - India's No.1 Institute for MCA Entrance",
    description:
      'Best MCA Entrance Coaching Institute provides offline or online mca coaching for mca entrance exam preparation. 100+ Selections in NIMCET-2026.',
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
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    'name': 'Landmark Institute',
    'url': 'https://www.landmarkinstitute.com/',
    'logo': 'https://www.landmarkinstitute.com/icon.png',
    'description': 'Best MCA Entrance Coaching Institute provides offline or online mca coaching for mca entrance exam preparation. 100+ Selections in NIMCET-2026.',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Ground Floor, 3/24, Block 1, West Patel Nagar, Patel Nagar',
      'addressLocality': 'New Delhi',
      'postalCode': '110008',
      'addressCountry': 'IN'
    },
    'telephone': '+91 999 999 2338, +91 995 369 2399'
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <Topbar />
      <Navbar />
      <Hero />
      <ResultsTicker />


      <WhyLandmark />
      <div className="section-divider" />

      <Courses />
      <div className="section-divider" />

      <StatsBand />

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




