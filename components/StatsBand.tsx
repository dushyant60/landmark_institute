const stats = [
  { num: '17+',   label: 'Years of Excellence' },
  { num: '6000+', label: 'Students Trained' },
  { num: '500+',  label: 'NIT Selections' },
  { num: '100+',  label: 'NIMCET 2025 Selections' },
  { num: '4.9★',  label: 'Google Rating' },
];

export default function StatsBand() {
  return (
    <div className="stats-band">
      <div className="container">
        <div className="stats-band-grid">
          {stats.map((s) => (
            <div className="stat-item" key={s.label}>
              <span className="stat-num">{s.num}</span>
              <div className="stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
