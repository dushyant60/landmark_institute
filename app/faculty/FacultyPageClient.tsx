'use client';

import { motion, Variants } from 'framer-motion';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LeadCapturePopup from '@/components/LeadCapturePopup';

const checkPath = 'M5 13l4 4L19 7';

const crownIcon = (
  <svg
    className="director-crown"
    viewBox="0 0 24 24"
    style={{ width: 16, height: 16, fill: '#F59E0B', display: 'inline-block', verticalAlign: 'middle', marginRight: '4px' }}
  >
    <path d="M2 20h20l-3-9-4 4-3-7-3 7-4-4z" />
  </svg>
);

const facultyList = [
  {
    initials: 'RC',
    avatarStyle: {},
    name: 'Dr. Ritukar Chadha',
    role: 'MENTOR & DIRECTOR',
    subtitle: 'M.Sc · Ph.D. (Mathematics)',
    isDirector: true,
    bio: 'Head of the Institute, Dr. Chadha brings 28+ years of university teaching experience. He is the author of 10 books on advanced mathematics — spanning real analysis, statistics, operations research, and discrete mathematics, alongside BCA Mathematics and Physics — and a former faculty member of GGS Indraprastha University. Under his mentorship, hundreds of students have secured AIR 1, 2 & 3 across DU, JNU, NIMCET, and CUET.',
    credentials: [
      '28+ yrs teaching experience',
      'Author of 10 advanced mathematics books',
      'Guided hundreds of AIR 1, 2 & 3 rank holders',
      'Former faculty member, GGSIPU Delhi',
    ],
    stats: [
      { value: '28+', label: 'Yrs Teaching' },
      { value: '10', label: 'Books' },
      { value: '100s', label: 'Top Ranks' },
    ],
  },
  {
    initials: 'SM',
    avatarStyle: { background: 'linear-gradient(135deg, #10B981, #059669)' },
    name: 'Dr. Srish Malhotra',
    role: 'MATHEMATICS FACULTY',
    subtitle: 'M.Sc (Gold Medalist) · Ph.D. (Mathematics)',
    isDirector: false,
    bio: 'A mathematics faculty of the highest repute. A gold medalist and doctorate in Mathematics, he has trained thousands of students for JEE, JAM, and MCA entrance examinations. He brings 18 years of experience and currently serves as a professor at MDU- and IPU-affiliated colleges.',
    credentials: [
      '18 years teaching experience',
      'Gold Medalist & Ph.D. in Mathematics',
      'Trained thousands for JEE, JAM & MCA',
    ],
    stats: [],
  },
  {
    initials: 'RK',
    avatarStyle: { background: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' },
    name: 'Mr. Roshan Kotnala',
    role: 'REASONING FACULTY',
    subtitle: 'M.Phil (Economics)',
    isDirector: false,
    bio: 'One of the most respected teachers of Reasoning and Quantitative Aptitude, with 22 years of experience across SSC, Banking, UPSC (CSAT), CUET (PG MCA), and NIMCET. A proven achiever himself, he has cleared several government examinations including SSC, Bank PO, and Assistant Grade.',
    credentials: [
      '22 years teaching experience',
      'Reasoning & Quantitative Aptitude expert',
      'Cleared SSC, Bank PO & Assistant Grade exams',
    ],
    stats: [],
  },
  {
    initials: 'PV',
    avatarStyle: { background: 'linear-gradient(135deg, #F59E0B, #D97706)' },
    name: 'Mr. Pradeep Kumar Verma',
    role: 'COMPUTER FACULTY',
    subtitle: 'M.Sc (Physics) · MCA · UGC-NET · LLB',
    isDirector: false,
    bio: 'A highly accomplished professional with broad academic interests. UGC-NET qualified in Computer Science and an Assistant Professor of the subject, he is an expert in Data Structures & Algorithms, Operating Systems, Computer Networks, and DBMS. He brings 10+ years of teaching and mentoring for CUET (PG), NIMCET, GATE, and other competitive exams.',
    credentials: [
      '10+ years teaching experience',
      'UGC-NET qualified in Computer Science',
      'Assistant Professor & CS Specialist',
    ],
    stats: [],
  },
  {
    initials: 'MK',
    avatarStyle: { background: 'linear-gradient(135deg, #EC4899, #DB2777)' },
    name: 'Mr. Mujeeb Khan',
    role: 'MATHEMATICS FACULTY',
    subtitle: 'NIMCET AIR 4 · M.Sc (Mathematics, pursuing)',
    isDirector: false,
    bio: "A young achiever and gifted mathematician who brings fresh energy to the team. He secured AIR 4 in NIMCET 2025 and was the year's highest scorer in Mathematics. Out of a genuine love for teaching, he chose to mentor aspirants rather than join NIT Trichy — giving students a top ranker of the very exam they are preparing for.",
    credentials: [
      'Secured NIMCET AIR 4 in 2025',
      'Highest scorer in Mathematics',
      'Direct peer mentoring from a top ranker',
    ],
    stats: [],
  },
];

const heroContainerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const heroItemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function FacultyPageClient() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Styled Header */}
      <div className="hero" style={{ padding: '60px 0 40px', textAlign: 'center' }}>
        <motion.div
          className="container"
          style={{ maxWidth: '800px' }}
          variants={heroContainerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={heroItemVariants} className="hero-badge">
            LANDMARK INSTITUTE · NEW DELHI
          </motion.span>
          <motion.h1 variants={heroItemVariants} style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>
            Our <span className="accent">Expert Faculty</span>
          </motion.h1>
          <motion.p variants={heroItemVariants} className="hero-sub" style={{ margin: '0 auto', fontSize: '16px', color: '#94A3B8' }}>
            A teaching team defined by qualification, experience, and results — mentors who have guided students to the nation&apos;s very top ranks.
          </motion.p>
        </motion.div>
        <div className="hero-wave" style={{ marginTop: '30px', height: '40px' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="var(--bg)">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </div>

      {/* Faculty Section */}
      <section style={{ padding: '60px 0 80px', background: 'var(--bg)' }}>
        <div className="container">
          <motion.div
            className="faculty-grid"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '30px' }}
            variants={gridVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {facultyList.map((f) => (
              <motion.div
                className={`faculty-card${f.isDirector ? ' director' : ''}`}
                key={f.name}
                style={{
                  background: '#fff',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                }}
                variants={cardVariants}
              >
                <div className="faculty-header" style={{ padding: '24px' }}>
                  <div className="faculty-avatar" style={f.avatarStyle}>
                    {f.initials}
                  </div>
                  <div className="faculty-header-text">
                    <h3 style={{ fontSize: '18px', color: '#fff', fontWeight: 700 }}>{f.name}</h3>
                    <span style={{ display: 'flex', alignItems: 'center', fontSize: '12px', color: '#60A5FA', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.5px', marginTop: '4px' }}>
                      {f.isDirector && crownIcon}
                      {f.role}
                    </span>
                    <span style={{ display: 'block', fontSize: '11px', color: '#94A3B8', marginTop: '2px' }}>
                      {f.subtitle}
                    </span>
                  </div>
                </div>
                
                <div className="faculty-body" style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <p style={{ fontSize: '14px', color: 'var(--slate-mid)', lineHeight: '1.6', marginBottom: '20px', flexGrow: 1 }}>
                    {f.bio}
                  </p>
                  
                  <div className="faculty-credentials" style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', marginTop: 'auto' }}>
                    {f.credentials.map((c) => (
                      <div className="credential" key={c} style={{ display: 'flex', gap: '8px', fontSize: '13px', color: 'var(--text-mid)', marginBottom: '8px', lineHeight: '1.4' }}>
                        <svg viewBox="0 0 24 24" style={{ width: '14px', height: '14px', stroke: 'var(--blue)', fill: 'none', strokeWidth: '2.5', strokeLinecap: 'round', flexShrink: 0, marginTop: '2px' }}>
                          <path d={checkPath} />
                        </svg>
                        <span>{c}</span>
                      </div>
                    ))}
                  </div>

                  {f.stats.length > 0 && (
                    <div className="faculty-stat" style={{ borderTop: '1px solid var(--border)', paddingTop: '16px', marginTop: '16px', display: 'flex', justifyContent: 'space-around' }}>
                      {f.stats.map((s) => (
                        <div className="fac-stat-item" key={s.label} style={{ textAlign: 'center' }}>
                          <strong style={{ display: 'block', fontSize: '18px', fontWeight: 800, color: 'var(--blue)' }}>{s.value}</strong>
                          <span style={{ fontSize: '11px', color: 'var(--text-muted)' }}>{s.label}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <LeadCapturePopup />
    </>
  );
}
