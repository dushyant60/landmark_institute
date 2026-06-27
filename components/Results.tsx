import Link from 'next/link';
import Image from 'next/image';

const toppers = [
  { initials: 'MK', variant: '', name: 'Mujeeb Khan', exam: 'NIMCET', air: 'AIR 4', year: '2025' },
  { initials: 'DS', variant: 'green', name: 'Druv Singla', exam: 'CUET PG', air: 'AIR 1', year: '2024' },
  { initials: 'RJ', variant: 'orange', name: 'Rishabh Jain', exam: 'IPU CET MCA', air: 'AIR 2', year: '2024' },
  { initials: 'MY', variant: 'purple', name: 'Manjeet Yadav', exam: 'NIMCET', air: 'AIR 45', year: '2025' },
];

const resultFlyers = [
  { src: '/images/migrated/cuet_pg_2026.jpeg', alt: 'CUET PG Selection Details' },
  { src: '/images/migrated/nimcet_toopers_2025.jpeg', alt: 'NIMCET Results & Toppers' },
  { src: '/images/migrated/CUET_PG_MCA_2025.jpeg', alt: 'CUET PG MCA Toppers' },
  { src: '/images/migrated/nimcet_2024.jpeg', alt: 'NIMCET Ranks & Results' },
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

        {/* Highlighted Results Flyers */}
        <div className="toppers-flyers-grid">
          {resultFlyers.map((flyer) => (
            <div className="topper-flyer-card" key={flyer.src}>
              <div className="topper-flyer-wrapper">
                <Image
                  src={flyer.src}
                  alt={flyer.alt}
                  width={1200}
                  height={800}
                  className="topper-flyer-img"
                  unoptimized
                />
              </div>
              <div className="topper-flyer-title">{flyer.alt}</div>
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
