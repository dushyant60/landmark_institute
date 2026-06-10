const toppers = [
  { initials: 'RK', variant: '',       name: 'Rahul Kumar',       exam: 'NIMCET',       air: 'AIR 1',  college: 'NIT Trichy MCA',  year: '2025' },
  { initials: 'PS', variant: 'green',  name: 'Priya Sharma',      exam: 'NIMCET',       air: 'AIR 3',  college: 'NIT Warangal MCA', year: '2025' },
  { initials: 'AC', variant: 'orange', name: 'Ayushi Choudhary',  exam: 'IGDTUW CET',   air: 'AIR 12', college: 'IGDTUW MCA',      year: '2024' },
  { initials: 'MY', variant: 'purple', name: 'Manjeet Yadav',     exam: 'NIMCET',       air: 'AIR 45', college: 'NIT Trichy MCA',  year: '2023' },
];

export default function Results() {
  return (
    <section className="results-bg" id="results">
      <div className="container">
        <div className="section-header center">
          <span className="section-eyebrow">Our Toppers</span>
          <h2 className="section-title">500+ NIT Selections. Countless Careers Changed.</h2>
          <p className="section-sub">Real students. Real ranks. Real NITs.</p>
        </div>
        <div className="results-grid">
          {toppers.map((t) => (
            <div className="result-card" key={t.name}>
              <div className={`result-avatar${t.variant ? ` ${t.variant}` : ''}`}>{t.initials}</div>
              <div className="result-name">{t.name}</div>
              <div className="result-air">
                {t.exam} <strong>{t.air}</strong>
              </div>
              <span className="result-college">{t.college}</span>
              <div className="result-year">{t.year}</div>
            </div>
          ))}
        </div>
        <div className="results-cta">
          <p>
            And hundreds more across NIT Allahabad, NIT Kurukshetra, NIT Bhopal, IGDTUW, JNU, DU
            &amp; more.
          </p>
          <a href="#" className="btn btn-primary btn-lg">
            View All Results →
          </a>
        </div>
      </div>
    </section>
  );
}
