import type { Metadata } from 'next';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LeadCapturePopup from '@/components/LeadCapturePopup';

export const metadata: Metadata = {
  title: 'Contact Us – Landmark Institute',
  description:
    'Get in touch with Landmark Institute West Patel Nagar, New Delhi. Call, email, WhatsApp, or visit us for expert MCA entrance exam guidance.',
};

export default function ContactPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Hero Header */}
      <div className="hero" style={{ padding: '60px 0 40px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="hero-badge">Get in Touch</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>
            Contact <span className="accent">Our Experts</span>
          </h1>
          <p className="hero-sub" style={{ margin: '0 auto', fontSize: '16px', color: '#94A3B8' }}>
            Have questions about NIMCET, CUET PG, or batch formats? Our counsellors are available 7 days a week to help guide your path to top-tier NITs and colleges.
          </p>
        </div>
        <div className="hero-wave" style={{ marginTop: '30px', height: '40px' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="var(--bg)">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </div>

      {/* Main Contact Form & Details (reusing existing UI components) */}
      <div style={{ background: '#fff' }}>
        <Contact />
      </div>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .info-section {
          padding: 60px 0 80px;
          background: var(--bg);
          border-top: 1px solid var(--border);
        }
        .info-grid-custom {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
        }
        .info-block {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 32px;
          box-shadow: var(--shadow);
        }
        .info-block h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--slate);
          margin-bottom: 20px;
          border-bottom: 2px solid var(--blue-light);
          padding-bottom: 8px;
        }
        .hours-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .hours-row {
          display: flex;
          justify-content: space-between;
          padding: 10px 0;
          font-size: 14.5px;
          color: var(--slate-mid);
          border-bottom: 1px dashed var(--border);
        }
        .hours-row:last-child {
          border-bottom: none;
        }
        .hours-row strong {
          color: var(--slate);
        }
        .directions-block p {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--slate-mid);
          margin-bottom: 16px;
        }
        .directions-list {
          padding-left: 20px;
          margin-bottom: 16px;
        }
        .directions-list li {
          font-size: 14px;
          color: var(--text-mid);
          margin-bottom: 8px;
          line-height: 1.5;
        }
        .map-placeholder {
          background: var(--blue-light);
          border: 1.5px dashed var(--blue);
          border-radius: var(--r);
          height: 140px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          padding: 20px;
          margin-top: 20px;
        }
        .map-placeholder svg {
          width: 32px;
          height: 32px;
          stroke: var(--blue);
          margin-bottom: 8px;
        }
        .map-placeholder h5 {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--blue-dark);
        }
        @media(max-width: 900px) {
          .info-grid-custom {
            grid-template-columns: 1fr;
            gap: 32px;
          }
        }
      `}} />

      {/* Supplementary office info */}
      <section className="info-section">
        <div className="container">
          <div className="info-grid-custom">
            
            {/* Office Hours */}
            <div className="info-block">
              <h3>Office Hours</h3>
              <ul className="hours-list">
                <li className="hours-row">
                  <span>Monday – Friday</span>
                  <strong>9:00 AM – 9:00 PM</strong>
                </li>
                <li className="hours-row">
                  <span>Saturday</span>
                  <strong>9:00 AM – 9:00 PM</strong>
                </li>
                <li className="hours-row">
                  <span>Sunday</span>
                  <strong>9:00 AM – 9:00 PM</strong>
                </li>
              </ul>
              <p style={{ fontSize: '13px', color: 'var(--text-muted)', marginTop: '20px', lineHeight: '1.5' }}>
                Note: Telephonic counselling is active 24/7. Classroom visits are recommended during regular office hours for mock material review.
              </p>
            </div>

            {/* Metro directions */}
            <div className="info-block directions-block">
              <h3>How to Reach Landmark Delhi</h3>
              <p>
                Our head office is located in West Patel Nagar, New Delhi, situated at an extremely accessible location for local and commuting students:
              </p>
              <ul className="directions-list">
                <li><strong>By Metro:</strong> Take the Blue Line Metro. Get off at West Patel Nagar Station. We are a 1-minute walk from the station exit (Pillar no. 220).</li>
                <li><strong>By Road:</strong> Centrally positioned on main Patel Road. Cabs and local buses stop right outside the coaching center.</li>
                <li><strong>Parking:</strong> Visitor parking is available directly in the service lane adjacent to the main road entrance.</li>
              </ul>
              
              <div className="map-placeholder">
                <div>
                  <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <h5>West Patel Nagar, Metro Pillar 220</h5>
                  <p style={{ fontSize: '11px', color: 'var(--blue-dark)', margin: 0 }}>Opposite Metro Station Exit, West Patel Nagar, New Delhi, Delhi 110008</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
      <LeadCapturePopup />
    </>
  );
}
