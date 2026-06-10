import type { Metadata } from 'next';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LeadCapturePopup from '@/components/LeadCapturePopup';

export const metadata: Metadata = {
  title: 'MCA Entrance Coaching Programmes – Landmark Institute',
  description:
    'Explore our comprehensive 1-Year Online, Offline Regular, Weekend, Crash Course, and 2-Year programmes for MCA Entrance exam preparation (NIMCET, CUET PG, DU, JNU).',
};

const checkIcon = (
  <svg className="feature-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path d="M5 13l4 4L19 7" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const comprehensivePrograms = [
  {
    title: '1-Year Online Programme for MCA Entrance Exam',
    category: 'MCA',
    tag: 'Online Mode',
    tagClass: 'tag-blue',
    featured: true,
    features: [
      'Online classes go hand in hand with interactive learning-World Time doubts.',
      'Online Test Series-Regular practice with full length mocks and topic wise tests.',
      'Flexibility and convenience – anytime, anywhere – no commuting is necessary.',
      'Global access – Join any city, state or abroad as well.',
      'Recording access – Never miss a class with recorded sessions access.',
      'Cost Savings – Save at travel and housing while receiving expert coaching.',
      'Printed study material-examination-oriented material was transported to your home.',
      'Live + Recorded Classes – Learn Live, Revise Later – Full Access',
    ],
  },
  {
    title: '1-Year Offline Regular Programme For MCA Entrance Exam',
    category: 'MCA',
    tag: 'Offline · Regular',
    tagClass: 'tag-green',
    featured: false,
    features: [
      'The best classroom experience-structure, distraught-free learning environment.',
      'Small batch size – only 30 to 40 students per batch for better engagement.',
      'Personal attention – Personal guidance to help make every student successful.',
      'Dedicated doubt clearing sessions-Regular sessions to strengthen weak areas.',
      'Timely course completion – the course structure planned with clear milestones.',
      'Unique Teaching Methods – conceptual clarity + shortcut technique for examination.',
      'Quick Update on Information – Stay informed with the latest MCA exam alert.',
      'Assignment, material and test chain – designed by experienced faculty for maximum impact.',
    ],
  },
  {
    title: '1-Year Offline Weekend Programme For MCA Entrance Exam',
    category: 'MCA',
    tag: 'Offline · Weekend',
    tagClass: 'tag-orange',
    featured: false,
    features: [
      'Best Class Experience – Learn in a concentrated and competitive environment.',
      'Small batch size – only 30 to 40 students per batch for better focus.',
      'Personal attention – faculty support to suit the needs of each student.',
      'Regular doubt-clearing sessions – every weekend strengthen your understanding.',
      'Timely course completion – Strategic Plan to complete the course on time.',
      'Unique teaching methods – concept clarity + exam technique from experienced masters.',
      'Immediate notification update – Be informed about all MCA exam announcements.',
      'Assignment, study materials and testing chains – carefully prepared by our expert faculty.',
    ],
  },
];

const specializedPrograms = [
  {
    title: 'Crash Course Batch – Online Mode',
    category: 'MCA',
    tag: 'Starts Jan 2026',
    tagClass: 'tag-purple',
    featured: false,
    extraInfo: 'Batch Starts: January 2026',
    features: [
      'Live classes – Interactive sessions with top faculty.',
      'Full course coverage with fast-paced, structured preparation.',
      'Subject-wise and complete-length test with mock test-analysis.',
      'Rapid resolution of doubt-solution session-condensed questions.',
      'Hard Copy Books – Printed ingredients were given at your address.',
      'Recorded lectures – classes at your convenience.',
      'Comprehensive Study Material – Updated content curated by experts.',
      'Full-length tested testing chain-global examination experience.',
    ],
  },
  {
    title: '2-Year Online & Offline Programme',
    category: 'MCA',
    tag: '2-Year Batch',
    tagClass: 'tag-blue',
    featured: false,
    extraInfo: 'Batch Options Available',
    features: [
      'Online Mode – Study from anywhere.',
      'Offline mode – Class session for personal learning.',
    ],
  },
];

export default function CoursesPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Styled Header */}
      <div className="hero" style={{ padding: '60px 0 40px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="hero-badge">MCA Programmes</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>
            Our <span className="accent">MCA Entrance</span> Batches
          </h1>
          <p className="hero-sub" style={{ margin: '0 auto', fontSize: '16px', color: '#94A3B8' }}>
            Prepare with India&apos;s most trusted coaching institute. We offer comprehensive online and offline batches tailored to suit your schedule and learning preferences.
          </p>
        </div>
        <div className="hero-wave" style={{ marginTop: '30px', height: '40px' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="var(--bg)">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </div>

      {/* Custom Styles */}
      <style dangerouslySetInnerHTML={{ __html: `
        .courses-section {
          padding: 60px 0 80px;
          background: var(--bg);
        }
        .section-subtitle-custom {
          font-family: 'Poppins', sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: var(--slate);
          margin-bottom: 24px;
          border-bottom: 2px solid var(--border);
          padding-bottom: 8px;
        }
        .custom-course-grid-3 {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 30px;
          margin-bottom: 50px;
        }
        .custom-course-grid-2 {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 30px;
        }
        .feature-list {
          list-style: none;
          padding: 0;
          margin: 20px 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
          flex-grow: 1;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14.5px;
          color: var(--slate-mid);
          line-height: 1.5;
        }
        .feature-icon {
          width: 18px;
          height: 18px;
          stroke: var(--green-dark);
          background: var(--green-bg);
          border-radius: 50%;
          padding: 3px;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .course-card-custom {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .extra-badge {
          display: inline-block;
          font-size: 12px;
          font-weight: 600;
          color: var(--slate-light);
          background: var(--border-light);
          padding: 4px 10px;
          border-radius: var(--r-sm);
          margin-top: 4px;
          font-family: 'Poppins', sans-serif;
        }
        @media (max-width: 1024px) {
          .custom-course-grid-3 {
            grid-template-columns: repeat(2, 1fr);
          }
        }
        @media (max-width: 768px) {
          .custom-course-grid-3, .custom-course-grid-2 {
            grid-template-columns: 1fr;
          }
        }
      `}} />

      {/* Main Courses Grid Section */}
      <section className="courses-section">
        <div className="container">
          
          {/* 1-Year Comprehensive Batches */}
          <h2 className="section-subtitle-custom">1-Year Comprehensive Programmes</h2>
          <div className="custom-course-grid-3">
            {comprehensivePrograms.map((course) => (
              <div
                className={`course-card course-card-custom${course.featured ? ' featured' : ''}`}
                key={course.title}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="course-tag tag-blue" style={{ background: 'var(--blue-light)', color: 'var(--blue)', fontSize: '10px' }}>
                    {course.category}
                  </span>
                  <span className={`course-tag ${course.tagClass}`}>
                    {course.tag}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '19px', marginTop: '10px', height: '56px', display: 'flex', alignItems: 'center' }}>
                  {course.title}
                </h3>
                
                <ul className="feature-list">
                  {course.features.map((feature, i) => (
                    <li className="feature-item" key={i}>
                      {checkIcon}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className={`btn ${course.featured ? 'btn-primary' : 'btn-outline'}`}
                  style={{ width: '100%', justifyContent: 'center', marginTop: 'auto', padding: '12px' }}
                >
                  Contact Us Now
                </a>
              </div>
            ))}
          </div>

          {/* Specialized & Advanced Batches */}
          <h2 className="section-subtitle-custom">Specialized &amp; 2-Year Programmes</h2>
          <div className="custom-course-grid-2">
            {specializedPrograms.map((course) => (
              <div
                className="course-card course-card-custom"
                key={course.title}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="course-tag tag-blue" style={{ background: 'var(--blue-light)', color: 'var(--blue)', fontSize: '10px' }}>
                    {course.category}
                  </span>
                  <span className={`course-tag ${course.tagClass}`}>
                    {course.tag}
                  </span>
                </div>
                
                <h3 style={{ fontSize: '19px', marginTop: '10px' }}>
                  {course.title}
                </h3>
                
                {course.extraInfo && (
                  <div>
                    <span className="extra-badge">{course.extraInfo}</span>
                  </div>
                )}
                
                <ul className="feature-list">
                  {course.features.map((feature, i) => (
                    <li className="feature-item" key={i}>
                      {checkIcon}
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href="/#contact"
                  className="btn btn-outline"
                  style={{ width: '100%', justifyContent: 'center', marginTop: 'auto', padding: '12px' }}
                >
                  Contact Us Now
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>

      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <LeadCapturePopup />
    </>
  );
}
