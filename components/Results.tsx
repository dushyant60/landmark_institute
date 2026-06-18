import Link from 'next/link';

const toppers = [
  { initials: 'MK', variant: '', name: 'Mujeeb Khan', exam: 'NIMCET', air: 'AIR 4', year: '2025' },
  { initials: 'DS', variant: 'green', name: 'Druv Singla', exam: 'CUET PG', air: 'AIR 1', year: '2024' },
  { initials: 'RJ', variant: 'orange', name: 'Rishabh Jain', exam: 'IPU CET MCA', air: 'AIR 2', year: '2024' },
  { initials: 'MY', variant: 'purple', name: 'Manjeet Yadav', exam: 'NIMCET', air: 'AIR 45', year: '2025' },
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
              <div className="result-year">{t.year}</div>
            </div>
          ))}
        </div>
        <div className="results-cta">
          <p>
            And hundreds more across NIT Allahabad, NIT Kurukshetra, NIT Bhopal, IGDTUW, JNU, DU
            &amp; more.
          </p>
          <Link href="/results" className="btn btn-primary btn-lg">
            View All Results →
          </Link>
        </div>
      </div>
    </section>
  );
}
