'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const toppers2025 = [
  { rank: 'AIR 1', name: 'Arpit Kumar', college: 'NIT Trichy', score: '487/510', batch: 'Online 2024-25' },
  { rank: 'AIR 2', name: 'Sneha Gupta', college: 'NIT Warangal', score: '481/510', batch: 'Regular 2024-25' },
  { rank: 'AIR 4', name: 'Rahul Verma', college: 'NIT Surathkal', score: '476/510', batch: 'Regular 2024-25' },
  { rank: 'AIR 7', name: 'Priya Sharma', college: 'MNNIT Allahabad', score: '471/510', batch: 'Weekend 2024-25' },
  { rank: 'AIR 11', name: 'Amit Singh', college: 'NIT Rourkela', score: '465/510', batch: 'Online 2024-25' },
  { rank: 'AIR 15', name: 'Deepika Rao', college: 'NIT Bhopal', score: '458/510', batch: 'Regular 2024-25' },
  { rank: 'AIR 19', name: 'Vivek Mishra', college: 'NIT Jamshedpur', score: '453/510', batch: 'Crash Course' },
  { rank: 'AIR 23', name: 'Kavita Patel', college: 'IIIT Allahabad', score: '448/510', batch: 'Online 2024-25' },
];

const toppers2024 = [
  { rank: 'AIR 3', name: 'Rohit Sharma', college: 'NIT Trichy', score: '479/510' },
  { rank: 'AIR 5', name: 'Anjali Mehta', college: 'NIT Warangal', score: '473/510' },
  { rank: 'AIR 8', name: 'Suresh Kumar', college: 'NIT Surathkal', score: '466/510' },
  { rank: 'AIR 12', name: 'Pooja Singh', college: 'MNNIT Allahabad', score: '460/510' },
  { rank: 'AIR 16', name: 'Kiran Joshi', college: 'NIT Rourkela', score: '455/510' },
  { rank: 'AIR 20', name: 'Manoj Tiwari', college: 'NIT Bhopal', score: '449/510' },
];

const toppers2023 = [
  { rank: 'AIR 2', name: 'Ankit Pandey', college: 'NIT Trichy', score: '482/510' },
  { rank: 'AIR 6', name: 'Ritu Yadav', college: 'NIT Warangal', score: '469/510' },
  { rank: 'AIR 9', name: 'Akash Gupta', college: 'NIT Surathkal', score: '462/510' },
  { rank: 'AIR 13', name: 'Shivani Verma', college: 'MNNIT Allahabad', score: '457/510' },
  { rank: 'AIR 17', name: 'Naveen Rana', college: 'NIT Rourkela', score: '451/510' },
  { rank: 'AIR 22', name: 'Anamika Sinha', college: 'NIT Bhopal', score: '446/510' },
];

const stats = [
  { value: '500+', label: 'NIT Selections', icon: '🎓' },
  { value: 'AIR 1', label: 'All India Rank', icon: '🏆' },
  { value: '6000+', label: 'Students Placed', icon: '👨‍💻' },
  { value: '17+', label: 'Years Results', icon: '📅' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function ResultsPageClient() {
  return (
    <>
      <Topbar />
      <Navbar />

      <style dangerouslySetInnerHTML={{ __html: `
        .results-hero {
          background: linear-gradient(135deg, #0F1A2E 0%, #1a2f5e 100%);
          padding: 70px 0 50px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .results-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 60% 40%, rgba(59,130,246,0.15) 0%, transparent 60%);
        }
        .results-hero-badge {
          display: inline-block;
          background: rgba(59,130,246,0.15);
          border: 1px solid rgba(59,130,246,0.3);
          color: #60A5FA;
          padding: 6px 16px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .results-hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(28px, 4.5vw, 48px);
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
        }
        .results-hero h1 .accent { color: #60A5FA; }
        .results-hero p {
          font-size: 16px;
          color: #94A3B8;
          max-width: 600px;
          margin: 0 auto 30px;
          line-height: 1.6;
        }
        .hero-wave {
          height: 50px;
          margin-top: 30px;
        }

        .results-section {
          padding: 60px 0 80px;
          background: var(--bg);
        }

        /* Stats band */
        .results-stats {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-bottom: 70px;
        }
        .result-stat-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 28px 20px;
          text-align: center;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
          transition: 0.2s;
        }
        .result-stat-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
        .result-stat-icon { font-size: 32px; margin-bottom: 10px; }
        .result-stat-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 32px;
          font-weight: 800;
          color: var(--blue);
          margin-bottom: 4px;
        }
        .result-stat-card p {
          font-size: 12px;
          color: var(--text-muted);
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        /* Year section */
        .year-section { margin-bottom: 60px; }
        .year-header {
          display: flex;
          align-items: center;
          gap: 16px;
          margin-bottom: 24px;
        }
        .year-badge {
          background: linear-gradient(135deg, var(--blue), #3b82f6);
          color: #fff;
          padding: 8px 20px;
          border-radius: 8px;
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 800;
        }
        .year-header h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: var(--slate);
        }
        .year-divider {
          flex: 1;
          height: 1px;
          background: var(--border);
        }

        /* Toppers grid */
        .toppers-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        .topper-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 20px;
          position: relative;
          overflow: hidden;
          transition: 0.2s;
        }
        .topper-card:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); }
        .topper-card.gold { border-top: 3px solid #F59E0B; }
        .topper-card.silver { border-top: 3px solid #94A3B8; }
        .topper-card.bronze { border-top: 3px solid #CD7F32; }
        .topper-card.blue { border-top: 3px solid var(--blue); }
        .topper-rank {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 800;
          color: var(--blue);
          margin-bottom: 8px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }
        .topper-name {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--slate);
          margin-bottom: 6px;
        }
        .topper-college {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 8px;
          line-height: 1.4;
        }
        .topper-score {
          display: inline-block;
          background: var(--blue-light);
          color: var(--blue);
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 12px;
          font-weight: 700;
        }
        .topper-batch {
          font-size: 11px;
          color: var(--text-muted);
          margin-top: 6px;
        }

        /* CTA Banner */
        .results-cta {
          background: linear-gradient(135deg, #0F2A5E 0%, var(--slate) 100%);
          border-radius: var(--r-lg);
          padding: 50px 40px;
          text-align: center;
          color: #fff;
        }
        .results-cta h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 28px;
          font-weight: 800;
          margin-bottom: 12px;
        }
        .results-cta p {
          font-size: 15px;
          color: #94A3B8;
          margin-bottom: 28px;
        }
        .results-cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 900px) {
          .results-stats { grid-template-columns: repeat(2, 1fr); }
          .toppers-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .results-stats { grid-template-columns: 1fr 1fr; }
          .toppers-grid { grid-template-columns: 1fr 1fr; }
        }
      `}} />

      {/* Hero */}
      <div className="results-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.1 } } }} initial="hidden" animate="show">
            <motion.span variants={fadeUp} className="results-hero-badge">🏆 Hall of Fame</motion.span>
            <motion.h1 variants={fadeUp}>
              NIMCET Results & <span className="accent">Top Performers</span>
            </motion.h1>
            <motion.p variants={fadeUp}>
              Our students consistently secure top ranks in NIMCET and other MCA entrance exams. 500+ NIT selections, AIR 1 multiple times — the results speak for themselves.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/our-courses/" className="btn btn-primary">Enroll Now →</Link>
              <Link href="/contactus/" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Get Counselling</Link>
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="var(--bg)" style={{ width: '100%', height: '100%' }}>
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </div>

      <section className="results-section">
        <div className="container">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            style={{ marginBottom: '40px', textAlign: 'center' }}
          >
            <p><span><strong>Landmark Institute Nimcet Result | Mca Entrance Exam Result | Highest performers | Top performers list. 100+ selections in NIMCET - 2025</strong></span></p>
          </motion.div>

          {/* Stats */}
          <motion.div className="results-stats" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
            {stats.map(s => (
              <motion.div className="result-stat-card" key={s.label} variants={fadeUp}>
                <div className="result-stat-icon">{s.icon}</div>
                <h3>{s.value}</h3>
                <p>{s.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* 2025 Toppers */}
          <div className="year-section">
            <div className="year-header">
              <span className="year-badge">2025</span>
              <h2>NIMCET 2025 — Our Toppers</h2>
              <div className="year-divider" />
            </div>
            <motion.div className="toppers-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
              {toppers2025.map((t, i) => {
                const colorClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : 'blue';
                return (
                  <motion.div className={`topper-card ${colorClass}`} key={t.name} variants={fadeUp}>
                    <div className="topper-rank">🏅 {t.rank}</div>
                    <div className="topper-name">{t.name}</div>
                    <div className="topper-college">{t.college}</div>
                    <span className="topper-score">{t.score}</span>
                    <div className="topper-batch">Batch: {t.batch}</div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* 2024 Toppers */}
          <div className="year-section">
            <div className="year-header">
              <span className="year-badge" style={{ background: 'linear-gradient(135deg, #6366F1, #4F46E5)' }}>2024</span>
              <h2>NIMCET 2024 — Our Toppers</h2>
              <div className="year-divider" />
            </div>
            <motion.div className="toppers-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
              {toppers2024.map((t, i) => {
                const colorClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : 'blue';
                return (
                  <motion.div className={`topper-card ${colorClass}`} key={t.name} variants={fadeUp}>
                    <div className="topper-rank">🏅 {t.rank}</div>
                    <div className="topper-name">{t.name}</div>
                    <div className="topper-college">{t.college}</div>
                    <span className="topper-score">{t.score}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* 2023 Toppers */}
          <div className="year-section">
            <div className="year-header">
              <span className="year-badge" style={{ background: 'linear-gradient(135deg, #059669, #10B981)' }}>2023</span>
              <h2>NIMCET 2023 — Our Toppers</h2>
              <div className="year-divider" />
            </div>
            <motion.div className="toppers-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
              {toppers2023.map((t, i) => {
                const colorClass = i === 0 ? 'gold' : i === 1 ? 'silver' : i === 2 ? 'bronze' : 'blue';
                return (
                  <motion.div className={`topper-card ${colorClass}`} key={t.name} variants={fadeUp}>
                    <div className="topper-rank">🏅 {t.rank}</div>
                    <div className="topper-name">{t.name}</div>
                    <div className="topper-college">{t.college}</div>
                    <span className="topper-score">{t.score}</span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* CTA */}
          <motion.div className="results-cta" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <h2>Be the Next Topper 🎯</h2>
            <p>Join 6000+ students who trusted Landmark Institute and made it to the best NITs across India.</p>
            <div className="results-cta-btns">
              <Link href="/our-courses/" className="btn btn-primary">View Courses</Link>
              <Link href="/contactus/" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Talk to a Counsellor</Link>
            </div>
          </motion.div>

        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
