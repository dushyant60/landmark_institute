const checkPath = 'M5 13l4 4L19 7';

const faculty = [
  {
    initials: 'RC',
    avatarStyle: {},
    name: 'Prof. R. Chadha',
    role: 'Director & Founder',
    isDirector: true,
    credentials: [
      'Author of BCA Mathematics (standard textbook)',
      'Ex-Faculty, GGSIP University Delhi',
      '15+ years of MCA entrance teaching experience',
      'Produced 10+ AIR 1 rank holders',
    ],
    stats: [
      { value: '15+', label: 'Years' },
      { value: '6000+', label: 'Students' },
      { value: '10+', label: 'AIR 1s' },
    ],
  },
  {
    initials: 'RS',
    avatarStyle: { background: 'linear-gradient(135deg,#10B981,#059669)' },
    name: 'Ritukar Sir',
    role: 'Computer Science Faculty',
    isDirector: false,
    credentials: [
      'Expert in Data Structures & Algorithms',
      'C/C++, DBMS, OS specialist',
      'Known for student-friendly explanations',
    ],
    stats: [],
  },
  {
    initials: 'SS',
    avatarStyle: { background: 'linear-gradient(135deg,#8B5CF6,#7C3AED)' },
    name: 'Srish Sir',
    role: 'Reasoning & Aptitude',
    isDirector: false,
    credentials: [
      'Analytical & Logical Reasoning expert',
      'Quantitative Aptitude specialist',
      'Shortcut-focused teaching methodology',
    ],
    stats: [],
  },
];

export default function Faculty() {
  return (
    <section className="faculty-section" id="faculty">
      <div className="container">
        <div className="section-header center">
          <span className="section-eyebrow">Meet Our Faculty</span>
          <h2 className="section-title">Taught by India&apos;s Best MCA Coaching Experts</h2>
          <p className="section-sub">
            Our faculty combines deep academic expertise with years of exam-focused teaching
            experience.
          </p>
        </div>
        <div className="faculty-grid">
          {faculty.map((f) => (
            <div className={`faculty-card${f.isDirector ? ' director' : ''}`} key={f.name}>
              <div className="faculty-header">
                <div className="faculty-avatar" style={f.avatarStyle}>
                  {f.initials}
                </div>
                <div className="faculty-header-text">
                  <h3>{f.name}</h3>
                  <span>
                    {f.isDirector && (
                      <svg
                        className="director-crown"
                        viewBox="0 0 24 24"
                        style={{ width: 16, height: 16, fill: '#F59E0B' }}
                      >
                        <path d="M2 20h20l-3-9-4 4-3-7-3 7-4-4z" />
                      </svg>
                    )}
                    {f.role}
                  </span>
                </div>
              </div>
              <div className="faculty-body">
                <div className="faculty-credentials">
                  {f.credentials.map((c) => (
                    <div className="credential" key={c}>
                      <svg viewBox="0 0 24 24"><path d={checkPath} /></svg>
                      {c}
                    </div>
                  ))}
                </div>
                {f.stats.length > 0 && (
                  <div className="faculty-stat">
                    {f.stats.map((s) => (
                      <div className="fac-stat-item" key={s.label}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
