import type { Metadata } from 'next';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LeadCapturePopup from '@/components/LeadCapturePopup';

export const metadata: Metadata = {
  title: 'About Us – Landmark Institute',
  description:
    'Learn about the history, vision, and core philosophy of Landmark Institute. Helping MCA aspirants clear NIMCET and CUET PG since 2007.',
};

const timelineData = [
  {
    year: '2007',
    title: 'The Foundation',
    desc: 'Founded by Dr. Ritukar Chadha with a single mathematics coaching batch in New Delhi, driven by a vision to simplify advanced calculus and algebra for MCA entrance candidates.',
  },
  {
    year: '2012',
    title: 'Curriculum Expansion',
    desc: 'Integrated dedicated departments for Computer Science, Reasoning, and Quantitative Aptitude, providing a comprehensive single-roof solution for the NIMCET syllabus.',
  },
  {
    year: '2018',
    title: '500+ NIT Selections',
    desc: 'Crossed the major milestone of sending over 500 students to National Institutes of Technology (NITs) across India, establishing Landmark as a premier coaching name.',
  },
  {
    year: '2023',
    title: 'Nationwide Hybrid Launch',
    desc: 'Launched high-definition live online batches, digital mock test analytics, and interactive online doubt platforms, bringing Landmark Delhi’s top coaching to students nationwide.',
  },
  {
    year: '2026 & Beyond',
    title: 'Modernizing MCA Prep',
    desc: 'Incorporating advanced feedback loops, direct peer-mentorship from top rankers (like NIMCET 2025 AIR 4), and continuing our legacy of securing top ranks year-after-year.',
  },
];

const pillars = [
  {
    title: 'Concept-First Approach',
    desc: 'We focus on teaching math, logic, and coding from absolute first-principles. We build fundamental conceptual clarity first, making shortcuts and speed naturally follow.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
  {
    title: 'Mentorship Over Classrooms',
    desc: 'We reject massive, auditorium-like lectures. Batch sizes are strictly kept at 30 to 40 students so our faculty members can serve as personal counselors, guides, and friends.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    title: 'Structured Testing Loops',
    desc: 'Our topic-wise and full-length mock exams replicate the actual examination interface. Students receive comprehensive scorecards to diagnose weak topics instantly.',
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

export default function AboutPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Hero Header */}
      <div className="hero" style={{ padding: '60px 0 40px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="hero-badge">About Us</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>
            Empowering Tech Leaders <span className="accent">Since 2007</span>
          </h1>
          <p className="hero-sub" style={{ margin: '0 auto', fontSize: '16px', color: '#94A3B8' }}>
            How a single classroom in West Patel Nagar, New Delhi evolved into India&apos;s premier MCA Entrance Coaching Institute, mentoring over 6,000+ graduates into NITs and top universities.
          </p>
        </div>
        <div className="hero-wave" style={{ marginTop: '30px', height: '40px' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="var(--bg)">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </div>

      {/* CSS Overrides */}
      <style dangerouslySetInnerHTML={{ __html: `
        .about-section {
          padding: 60px 0 80px;
          background: var(--bg);
        }
        .intro-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          margin-bottom: 70px;
          align-items: center;
        }
        .intro-text h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: var(--slate);
          margin-bottom: 16px;
        }
        .intro-text p {
          font-size: 15.5px;
          line-height: 1.7;
          color: var(--slate-mid);
          margin-bottom: 16px;
        }
        .stats-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 30px;
          box-shadow: var(--shadow);
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 20px;
        }
        .stat-box {
          text-align: center;
          padding: 10px;
        }
        .stat-box h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 30px;
          font-weight: 800;
          color: var(--blue);
          margin-bottom: 4px;
        }
        .stat-box p {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
        }

        /* Timeline Styles */
        .timeline-section {
          margin-bottom: 70px;
        }
        .timeline-title {
          text-align: center;
          font-family: 'Poppins', sans-serif;
          font-size: 26px;
          font-weight: 800;
          color: var(--slate);
          margin-bottom: 40px;
        }
        .timeline-container {
          position: relative;
          max-width: 800px;
          margin: 0 auto;
          padding: 20px 0;
        }
        .timeline-container::before {
          content: '';
          position: absolute;
          width: 3px;
          background: var(--blue-light);
          top: 0;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
        }
        .timeline-item {
          position: relative;
          width: 50%;
          padding: 10px 30px;
          box-sizing: border-box;
          margin-bottom: 20px;
        }
        .timeline-item::after {
          content: '';
          position: absolute;
          width: 14px;
          height: 14px;
          right: -7px;
          background-color: #fff;
          border: 4px solid var(--blue);
          border-radius: 50%;
          top: 25px;
          z-index: 1;
        }
        .timeline-item.left {
          left: 0;
          text-align: right;
        }
        .timeline-item.right {
          left: 50%;
        }
        .timeline-item.right::after {
          left: -7px;
        }
        .timeline-content {
          padding: 20px;
          background-color: #fff;
          position: relative;
          border-radius: var(--r);
          border: 1px solid var(--border);
          box-shadow: 0 4px 12px rgba(0,0,0,0.02);
        }
        .timeline-year {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 800;
          color: var(--blue);
          margin-bottom: 4px;
        }
        .timeline-content h4 {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--slate);
          margin-bottom: 8px;
        }
        .timeline-content p {
          font-size: 13.5px;
          color: var(--text-muted);
          line-height: 1.5;
        }

        /* Pillars Section */
        .pillars-section {
          margin-bottom: 70px;
        }
        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .pillar-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 24px;
          transition: 0.2s;
        }
        .pillar-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .pillar-icon-box {
          width: 48px;
          height: 48px;
          border-radius: 10px;
          background: var(--blue-light);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 16px;
        }
        .pillar-icon-box svg {
          width: 24px;
          height: 24px;
          stroke: var(--blue);
        }
        .pillar-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--slate);
          margin-bottom: 8px;
        }
        .pillar-card p {
          font-size: 13.5px;
          line-height: 1.6;
          color: var(--text-muted);
        }

        /* Editorial Note */
        .director-note-card {
          background: linear-gradient(135deg, #0F2A5E 0%, var(--slate) 100%);
          color: #fff;
          border-radius: var(--r-lg);
          padding: 40px;
          position: relative;
          overflow: hidden;
          margin-bottom: 40px;
        }
        .director-note-card::before {
          content: '“';
          position: absolute;
          font-family: 'Poppins', sans-serif;
          font-size: 240px;
          font-weight: 900;
          color: rgba(255,255,255,0.03);
          top: -60px;
          left: 20px;
          line-height: 1;
        }
        .director-note-title {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #60A5FA;
          margin-bottom: 16px;
        }
        .director-note-text {
          font-size: 16px;
          line-height: 1.8;
          color: #E2E8F0;
          font-style: italic;
          margin-bottom: 24px;
          position: relative;
          z-index: 1;
        }
        .director-sign h5 {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
        }
        .director-sign span {
          font-size: 12px;
          color: #94A3B8;
        }

        @media (max-width: 900px) {
          .intro-grid {
            grid-template-columns: 1fr;
          }
          .pillars-grid {
            grid-template-columns: 1fr;
          }
          .timeline-container::before {
            left: 20px;
          }
          .timeline-item {
            width: 100%;
            padding-left: 50px;
            padding-right: 0;
          }
          .timeline-item::after {
            left: 13px;
          }
          .timeline-item.left {
            text-align: left;
          }
          .timeline-item.left::after {
            left: 13px;
          }
          .timeline-item.right {
            left: 0;
          }
        }
      `}} />

      {/* Main About Content */}
      <section className="about-section">
        <div className="container">
          
          {/* Section 1: Intro */}
          <div className="intro-grid">
            <div className="intro-text">
              <h2>A Legacy of Educational Leadership</h2>
              <p>
                Landmark Institute is India&apos;s leading training center for MCA entrance examinations, including <strong>NIMCET</strong>, <strong>CUET PG MCA</strong>, <strong>DU MCA</strong>, and other premier national university entrances.
              </p>
              <p>
                Headquartered in West Patel Nagar, New Delhi, we bridge the gap between graduate mathematics and high-stakes competitive examinations. Our courses are structured to nurture problem-solving speeds and analytical logic in students, translating complex topics into masterable elements.
              </p>
            </div>
            
            <div className="stats-card">
              <div className="stat-box" style={{ borderRight: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)' }}>
                <h3>17+</h3>
                <p>Years Legacy</p>
              </div>
              <div className="stat-box" style={{ borderBottom: '1px solid var(--border-light)' }}>
                <h3>6000+</h3>
                <p>Students</p>
              </div>
              <div className="stat-box" style={{ borderRight: '1px solid var(--border-light)', paddingTop: '20px' }}>
                <h3>500+</h3>
                <p>NIT Seats</p>
              </div>
              <div className="stat-box" style={{ paddingTop: '20px' }}>
                <h3>AIR 1</h3>
                <p>Top Rankers</p>
              </div>
            </div>
          </div>

          {/* Section 2: Timeline */}
          <div className="timeline-section">
            <h3 className="timeline-title">Our Growth Story</h3>
            <div className="timeline-container">
              {timelineData.map((item, idx) => {
                const positionClass = idx % 2 === 0 ? 'left' : 'right';
                return (
                  <div className={`timeline-item ${positionClass}`} key={item.year}>
                    <div className="timeline-content">
                      <div className="timeline-year">{item.year}</div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Section 3: Pillars */}
          <div className="pillars-section">
            <h3 className="timeline-title">The Three Pillars of Landmark</h3>
            <div className="pillars-grid">
              {pillars.map((pillar) => (
                <div className="pillar-card" key={pillar.title}>
                  <div className="pillar-icon-box">{pillar.icon}</div>
                  <h3>{pillar.title}</h3>
                  <p>{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Section 4: Director's Note */}
          <div className="director-note-card">
            <h4 className="director-note-title">Director&apos;s Message</h4>
            <blockquote className="director-note-text">
              &ldquo;MCA is not just a postgraduate degree; it is a vital gateway to the global software engineering ecosystem. Our goal at Landmark has never been to teach students how to memorize formulas or copy code. Our goal is to train them to think mathematically. When a student learns the true &apos;why&apos; behind a complex algorithm or equations, clearing the competitive exam ceases to be a challenge and becomes a natural result of their understanding.&rdquo;
            </blockquote>
            <div className="director-sign">
              <h5>Dr. Ritukar Chadha</h5>
              <span>Founder &amp; Director, Landmark Institute</span>
            </div>
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
