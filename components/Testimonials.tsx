const starPath =
  'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z';

const StarIcon = () => (
  <svg className="star" viewBox="0 0 24 24">
    <path d={starPath} />
  </svg>
);

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="stars">
    {Array.from({ length: count }).map((_, i) => <StarIcon key={i} />)}
  </div>
);

const testimonials = [
  {
    text: 'Landmark gave me the right guidance and support. Regular tests, mock analysis, and R.K. Chadha Sir\'s motivation helped me secure AIR 12 in IGDTUW CET.',
    avatarStyle: {},
    initials: 'AC',
    name: 'Ayushi Choudhary',
    info: 'IGDTUW MCA · 2024',
    rank: 'AIR 12',
  },
  {
    text: 'Excellent coaching. Ritukar Sir was very supportive even after the exam. The healthy competition pushed us to improve daily. Secured AIR 45 in NIMCET 2023!',
    avatarStyle: { background: 'linear-gradient(135deg,#E8FFF2,#86EFAC)', color: '#059669' },
    initials: 'MY',
    name: 'Manjeet Yadav',
    info: 'NIT Trichy MCA · 2023',
    rank: 'AIR 45',
  },
  {
    text: 'Small batches, individual attention, rigorous test series — this is the only institute if you\'re serious about a top rank in MCA Entrance. Just amazing.',
    avatarStyle: { background: 'linear-gradient(135deg,#F5F3FF,#DDD6FE)', color: '#7C3AED' },
    initials: 'AJ',
    name: 'Ankita Jain',
    info: 'NIT Allahabad MCA',
    rank: 'Top 50',
  },
];

const googleReviews = [
  { initials: 'PK', name: 'Piyush Kumar',  text: 'Best institute for MCA entrance. The faculty is very supportive and the test series is excellent.' },
  { initials: 'SS', name: 'Sagar Sharma',  text: 'R. Chadha Sir is a legend. His teaching style is unique and his notes are absolutely complete. Highly recommended.' },
  { initials: 'TG', name: 'Tushar Garg',   text: 'Joined the online batch. The recordings are very clear and doubt sessions are very helpful. Got selected in NIT!' },
  { initials: 'SK', name: 'Samiran Kundu', text: 'Truly the best institute for NIMCET. Environment is very competitive which keeps you motivated throughout.' },
  { initials: 'MS', name: 'Meenakshi',     text: 'Landmark gave wings to my career. I never imagined such success. Best institute for MCA entrance prep!' },
];

const GStars = () => (
  <div className="g-stars">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="g-s" viewBox="0 0 24 24"><path d={starPath} /></svg>
    ))}
  </div>
);

export function Testimonials() {
  return (
    <section className="testimonials-bg">
      <div className="container">
        <div className="section-header center">
          <span className="section-eyebrow">Student Reviews</span>
          <h2 className="section-title">What Our Students Say</h2>
          <p className="section-sub">
            Thousands of students have transformed their careers at Landmark Institute.
          </p>
        </div>
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div className="testimonial-card" key={t.name}>
              <Stars />
              <p className="testimonial-text">{t.text}</p>
              <div className="testimonial-author">
                <div className="t-avatar" style={t.avatarStyle}>
                  {t.initials}
                </div>
                <div className="t-author-info">
                  <span>{t.name}</span>
                  <span>{t.info}</span>
                </div>
                <span className="t-rank-badge">{t.rank}</span>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '32px' }}>
          <a href="#" className="btn btn-outline btn-lg" style={{ fontSize: '14px' }}>
            View All Reviews →
          </a>
        </div>
      </div>
    </section>
  );
}

export function GoogleReviews() {
  return (
    <section style={{ background: 'var(--white)', padding: '48px 0' }}>
      <div className="container">
        <div className="section-header center" style={{ marginBottom: '32px' }}>
          <span className="section-eyebrow">Google Reviews</span>
          <h2 className="section-title" style={{ fontSize: '28px' }}>
            4.9 ★ on Google · 200+ Reviews
          </h2>
        </div>
        <div className="reviews-row">
          {googleReviews.map((r) => (
            <div className="g-review" key={r.name}>
              <GStars />
              <p className="g-text">{r.text}</p>
              <div className="g-author">
                <div className="g-dot">{r.initials}</div>
                {r.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
