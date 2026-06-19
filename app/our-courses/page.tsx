import type { Metadata } from 'next';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Available courses | Program module | Landmark Institute',
  description: 'Check our multiple program modules | Time | Classes | Course coverage time | Course objective | Batches start time. It will help to get better understanding.',
  openGraph: {
    title: 'Available courses | Program module | Landmark Institute',
    description: 'Check our multiple program modules | Time | Classes | Course coverage time | Course objective | Batches start time. It will help to get better understanding.',
    url: 'https://www.landmarkinstitute.com/our-courses/',
  },
};

export default function Page() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="hero" style={{ padding: '60px 0 40px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="hero-badge">Landmark Institute</span>
          <h1 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.2, margin: '0 auto' }}>
            Our Courses
          </h1>
        </div>
      </div>
      <main style={{ padding: '60px 0 80px', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '28px', fontWeight: 800, color: 'var(--slate)', marginBottom: '8px' }}>
              Available MCA Programs & Batches
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto' }}>
              Explore our structured learning modules designed to build concepts from ground zero and achieve top ranks in NIMCET &amp; CUET PG MCA.
            </p>
          </div>

          <div className="courses-grid">
            {/* Course 1: 1-Year Online Programme */}
            <div className="course-card">
              <div>
                <span className="course-tag tag-blue">Online Mode</span>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--slate)', marginTop: '8px', marginBottom: '16px' }}>
                  1-Year Online Programme for MCA Entrance Exam
                </h3>
                <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Online classes go hand in hand with interactive learning-World Time doubts.',
                    'Online Test Series-Regular practice with full length mocks and topic wise tests.',
                    'Flexibility and convenience - anytime, anywhere - no commuting is necessary.',
                    'Global access - Join any city, state or abroad as well.',
                    'Recording access - Never miss a class with recorded sessions access.',
                    'Cost Savings - Save at travel and housing while receiving expert coaching.',
                    'Printed study material-examination-oriented material was transported to your home.',
                    'Live + Recorded Classes - Learn Live, Revise Later - Full Access'
                  ].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: '1.45' }}>
                      <span style={{ color: 'var(--green)', fontSize: '15px', fontWeight: 'bold', lineHeight: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/contactus/" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
                Enquire Now
              </a>
            </div>

            {/* Course 2: 1-Year Offline Regular Programme */}
            <div className="course-card">
              <div>
                <span className="course-tag tag-green">Regular Batch</span>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--slate)', marginTop: '8px', marginBottom: '16px' }}>
                  1-Year Offline Regular Programme For MCA Entrance Exam
                </h3>
                <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'The best classroom experience-structure, distraught-free learning environment.',
                    'Small batch size - only 30 to 40 students per batch for better engagement.',
                    'Personal attention - Personal guidance to help make every student successful.',
                    'Dedicated doubt clearing sessions-Regular sessions to strengthen weak areas.',
                    'Timely course completion - the course structure planned with clear milestones.',
                    'Unique Teaching Methods - conceptual clarity + shortcut technique for examination.',
                    'Quick Update on Information - Stay informed with the latest MCA exam alert.',
                    'Assignment, material and test chain - designed by experienced faculty for maximum impact.'
                  ].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: '1.45' }}>
                      <span style={{ color: 'var(--green)', fontSize: '15px', fontWeight: 'bold', lineHeight: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/contactus/" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
                Enquire Now
              </a>
            </div>

            {/* Course 3: 1-Year Offline Weekend Programme */}
            <div className="course-card">
              <div>
                <span className="course-tag tag-orange">Weekend Batch</span>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--slate)', marginTop: '8px', marginBottom: '16px' }}>
                  1-Year Offline Weekend Programme For MCA Entrance Exam
                </h3>
                <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Best Class Experience - Learn in a concentrated and competitive environment.',
                    'Small batch size - only 30 to 40 students per batch for better focus.',
                    'Personal attention - faculty support to suit the needs of each student.',
                    'Regular doubt-clearing sessions - every weekend strengthen your understanding.',
                    'Timely course completion - Strategic Plan to complete the course on time.',
                    'Unique teaching methods - concept clarity + exam technique from experienced masters.',
                    'Immediate notification update - Be informed about all MCA exam announcements.',
                    'Assignment, study materials and testing chains - carefully prepared by our expert faculty.'
                  ].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: '1.45' }}>
                      <span style={{ color: 'var(--green)', fontSize: '15px', fontWeight: 'bold', lineHeight: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/contactus/" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
                Enquire Now
              </a>
            </div>

            {/* Course 4: Crash Course Batch */}
            <div className="course-card">
              <div>
                <span className="course-tag tag-purple">Crash Course</span>
                <h3 style={{ fontSize: '19px', fontWeight: 700, color: 'var(--slate)', marginTop: '8px', marginBottom: '4px' }}>
                  Crash Course Batch – Online Mode
                </h3>
                <div style={{ fontSize: '12.5px', color: 'var(--blue)', fontWeight: 600, marginBottom: '12px' }}>
                  ⏳ Batch Starts: January 2026
                </div>
                <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {[
                    'Live classes - Interactive sessions with top faculty.',
                    'Full course coverage with fast-paced, structured preparation.',
                    'Subject-wise and complete-length test with mock test-analysis.',
                    'Rapid resolution of doubt-solution session-condensed questions.',
                    'Hard Copy Books - Printed ingredients were given at your address.',
                    'Recorded lectures - classes at your convenience.',
                    'Comprehensive Study Material - Updated content curated by experts.',
                    'Full-length tested testing chain-global examination experience.'
                  ].map((f, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '13.5px', color: 'var(--text-mid)', lineHeight: '1.45' }}>
                      <span style={{ color: 'var(--green)', fontSize: '15px', fontWeight: 'bold', lineHeight: 1 }}>✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              <a href="/contactus/" className="btn btn-primary" style={{ marginTop: 'auto', width: '100%', justifyContent: 'center' }}>
                Enquire Now
              </a>
            </div>

            {/* Course 5: 2-Year Program */}
            <div className="course-card featured">
              <div className="download-card-featured-inner">
                <div style={{ flex: 1 }}>
                  <div>
                    <span className="course-tag tag-blue" style={{ background: 'var(--blue)', color: '#fff' }}>2-Year Program</span>
                  </div>
                  <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--slate)', marginTop: '12px', marginBottom: '8px' }}>
                    2-Year Online &amp; Offline Programme
                  </h3>
                  <div style={{ fontSize: '13px', color: 'var(--text-muted)', fontWeight: 500, marginBottom: '16px' }}>
                    Double the duration, thorough conceptual foundation. Select your study mode:
                  </div>
                  <ul style={{ listStyleType: 'none', paddingLeft: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {[
                      'Online Mode – Study from anywhere.',
                      'Offline mode - Class session for personal learning.'
                    ].map((f, i) => (
                      <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '14px', color: 'var(--text-mid)', lineHeight: '1.45' }}>
                        <span style={{ color: 'var(--green)', fontSize: '16px', fontWeight: 'bold', lineHeight: 1 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
                <a href="/contactus/" className="btn btn-green btn-lg" style={{ justifyContent: 'center', minWidth: '220px', display: 'flex', alignItems: 'center' }}>
                  Enquire Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
