'use client';

import { motion, Variants } from 'framer-motion';

const checkPath = 'M5 13l4 4L19 7';

const faculty = [
  {
    initials: 'RC',
    avatarStyle: {},
    name: 'Dr. Ritukar Chadha',
    role: 'MENTOR & DIRECTOR',
    degree: 'M.Sc · Ph.D. (Mathematics)',
    isDirector: true,
    bio: "Head of the Institute, Dr. Chadha brings 28+ years of university teaching experience. He is the author of 10 books on advanced mathematics — spanning real analysis, statistics, operations research, and discrete mathematics, alongside BCA Mathematics and Physics — and a former faculty member of GGS Indraprastha University. Under his mentorship, hundreds of students have secured AIR 1, 2 & 3 across DU, JNU, NIMCET, and CUET.",
    credentials: [
      '28+ yrs teaching',
      'Author of 10 books',
      'Hundreds of top ranks',
      'Ex-faculty, GGSIPU',
    ],
    stats: [
      { value: '28+', label: 'Yrs Exp' },
      { value: '10', label: 'Books' },
      { value: 'Hundreds', label: 'Top Ranks' },
    ],
  },
  {
    initials: 'SM',
    avatarStyle: { background: 'linear-gradient(135deg,#10B981,#059669)' },
    name: 'Dr. Srish Malhotra',
    role: 'MATHEMATICS FACULTY',
    degree: 'M.Sc (Gold Medalist) · Ph.D. (Mathematics)',
    isDirector: false,
    bio: 'A mathematics faculty of the highest repute. A gold medalist and doctorate in Mathematics, he has trained thousands of students for JEE, JAM, and MCA entrance examinations. He brings 18 years of experience and currently serves as a professor at MDU- and IPU-affiliated colleges.',
    credentials: [
      '18 yrs experience',
      'Gold Medalist',
      'JEE · JAM · MCA',
    ],
    stats: [
      { value: '18', label: 'Yrs Exp' },
      { value: 'Gold', label: 'Medal' },
      { value: 'JEE/JAM', label: 'Prep' },
    ],
  },
  {
    initials: 'RK',
    avatarStyle: { background: 'linear-gradient(135deg,#F59E0B,#D97706)' },
    name: 'Mr. Roshan Kotnala',
    role: 'REASONING FACULTY',
    degree: 'M.Phil (Economics)',
    isDirector: false,
    bio: 'One of the most respected teachers of Reasoning and Quantitative Aptitude, with 22 years of experience across SSC, Banking, UPSC (CSAT), CUET (PG MCA), and NIMCET. A proven achiever himself, he has cleared several government examinations including SSC, Bank PO, and Assistant Grade.',
    credentials: [
      '22 yrs experience',
      'Reasoning & Quant',
      'CUET · NIMCET',
    ],
    stats: [
      { value: '22', label: 'Yrs Exp' },
      { value: 'Reasoning', label: 'Quant' },
    ],
  },
  {
    initials: 'PV',
    avatarStyle: { background: 'linear-gradient(135deg,#8B5CF6,#7C3AED)' },
    name: 'Mr. Pradeep Kumar Verma',
    role: 'COMPUTER FACULTY',
    degree: 'M.Sc (Physics) · MCA · UGC-NET · LLB',
    isDirector: false,
    bio: 'A highly accomplished professional with broad academic interests. UGC-NET qualified in Computer Science and an Assistant Professor of the subject, he is an expert in Data Structures & Algorithms, Operating Systems, Computer Networks, and DBMS. He brings 10+ years of teaching and mentoring for CUET (PG), NIMCET, GATE, and other competitive exams.',
    credentials: [
      '10+ yrs experience',
      'UGC-NET qualified',
      'GATE · NIMCET',
    ],
    stats: [
      { value: '10+', label: 'Yrs Exp' },
      { value: 'UGC-NET', label: 'Qualified' },
    ],
  },
  {
    initials: 'MK',
    avatarStyle: { background: 'linear-gradient(135deg,#EC4899,#BE185D)' },
    name: 'Mr. Mujeeb Khan',
    role: 'MATHEMATICS FACULTY',
    degree: 'NIMCET AIR 4 · M.Sc (Mathematics, pursuing)',
    isDirector: false,
    bio: "A young achiever and gifted mathematician who brings fresh energy to the team. He secured AIR 4 in NIMCET 2025 and was the year's highest scorer in Mathematics. Out of a genuine love for teaching, he chose to mentor aspirants rather than join NIT Trichy — giving students a top ranker of the very exam they are preparing for.",
    credentials: [
      'NIMCET AIR 4',
      'Highest in Maths, 2025',
    ],
    stats: [
      { value: 'AIR 4', label: 'NIMCET' },
      { value: 'Highest', label: 'in Maths' },
    ],
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
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

export default function Faculty() {
  return (
    <section className="faculty-section" id="faculty">
      <div className="container">
        <motion.div
          className="section-header center"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-eyebrow">Our Faculty</span>
          <h2 className="section-title">
            A teaching team defined by qualification, experience, and results
          </h2>
          <p className="section-sub">
            mentors who have guided students to the nation&apos;s very top ranks.
          </p>
        </motion.div>

        <motion.div
          className="faculty-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {faculty.map((f) => (
            <motion.div
              className={`faculty-card${f.isDirector ? ' director' : ''}`}
              key={f.name}
              variants={cardVariants}
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <div className="faculty-header">
                <div className="faculty-avatar" style={f.avatarStyle}>
                  {f.initials}
                </div>
                <div className="faculty-header-text">
                  <h3 style={{ fontSize: '18px', marginBottom: '4px' }}>{f.name}</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.5px', display: 'flex', alignItems: 'center', gap: '4px' }}>
                      {f.isDirector && (
                        <svg
                          className="director-crown"
                          viewBox="0 0 24 24"
                          style={{ width: 14, height: 14, fill: '#F59E0B' }}
                        >
                          <path d="M2 20h20l-3-9-4 4-3-7-3 7-4-4z" />
                        </svg>
                      )}
                      {f.role}
                    </span>
                    <span style={{ fontSize: '13px', color: '#94A3B8', fontWeight: 500 }}>
                      {f.degree}
                    </span>
                  </div>
                </div>
              </div>
              <div className="faculty-body" style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
                {f.bio && (
                  <p style={{ fontSize: '13px', color: 'var(--text-mid)', lineHeight: '1.6', marginBottom: '16px' }}>
                    {f.bio}
                  </p>
                )}
                <div className="faculty-credentials" style={{ marginBottom: f.stats.length > 0 ? '16px' : '0' }}>
                  {f.credentials.map((c) => (
                    <div className="credential" key={c}>
                      <svg viewBox="0 0 24 24"><path d={checkPath} /></svg>
                      {c}
                    </div>
                  ))}
                </div>
                {f.stats.length > 0 && (
                  <div className="faculty-stat" style={{ marginTop: 'auto' }}>
                    {f.stats.map((s) => (
                      <div className="fac-stat-item" key={s.label}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
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
  );
}
