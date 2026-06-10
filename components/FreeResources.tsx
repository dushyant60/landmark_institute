const resources = [
  {
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8zM14 2v6h6',
    title: 'NIMCET Notes PDF',
    desc: 'Complete topic-wise notes by Prof. R. Chadha',
    badge: 'FREE',
  },
  {
    icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2',
    title: 'Previous Year Papers',
    desc: 'Last 10 years NIMCET, CUET PG & more',
    badge: 'FREE',
  },
  {
    icon: 'M4 6h16M4 10h16M4 14h10',
    title: 'Formula Sheet',
    desc: 'All important maths & CS formulae at a glance',
    badge: 'FREE',
  },
  {
    icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2m-6 9l2 2 4-4',
    title: 'Free Mock Test',
    desc: 'Full-length NIMCET simulation test',
    badge: 'NEW',
  },
];

export default function FreeResources() {
  return (
    <section className="resources-bg" id="resources">
      <div className="container">
        <div className="resources-inner">
          {/* Left column */}
          <div>
            <span className="section-eyebrow" style={{ color: '#60A5FA' }}>
              Free Resources
            </span>
            <h2 className="section-title" style={{ color: '#fff', marginBottom: '12px' }}>
              Download Free Study Material
            </h2>
            <p style={{ color: '#94A3B8', fontSize: '16px', lineHeight: '1.7', marginBottom: '28px' }}>
              Access our curated collection of NIMCET preparation resources — completely free. No
              strings attached.
            </p>
            <div className="resource-cards">
              {resources.map((r) => (
                <div className="resource-item" key={r.title}>
                  <div className="resource-icon">
                    <svg viewBox="0 0 24 24"><path d={r.icon} /></svg>
                  </div>
                  <div>
                    <h4>{r.title}</h4>
                    <p>{r.desc}</p>
                  </div>
                  <span className="resource-badge">{r.badge}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div className="resources-form">
            <h3>Get All Resources Free</h3>
            <p>Fill in your details and we&apos;ll send the download links instantly.</p>
            <input className="rf-input" type="text" placeholder="Your full name" />
            <input className="rf-input" type="email" placeholder="Email address" />
            <input className="rf-input" type="tel" placeholder="Mobile number" />
            <select className="rf-input" style={{ color: '#94A3B8' }}>
              <option value="">Target exam</option>
              <option>NIMCET</option>
              <option>CUET PG MCA</option>
              <option>DU MCA</option>
              <option>Other</option>
            </select>
            <button
              className="btn btn-green"
              style={{ width: '100%', justifyContent: 'center', padding: '13px', fontSize: '15px' }}
            >
              Download Free Resources →
            </button>
            <p style={{ fontSize: '12px', color: '#64748B', textAlign: 'center', marginTop: '10px' }}>
              We respect your privacy. No spam ever.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
