'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const resultImages = [
  { src: '/images/migrated/cuet_pg_2026.jpeg', alt: 'CUET PG Selection Details' },
  { src: '/images/migrated/nimcet_toopers_2025.jpeg', alt: 'NIMCET Results & Toppers' },
  { src: '/images/migrated/CUET_PG_MCA_2025.jpeg', alt: 'CUET PG MCA Toppers' },
  { src: '/images/migrated/nimcet_2024.jpeg', alt: 'NIMCET Ranks & Results' },
  { src: '/images/migrated/ipucet_mca_2024.jpeg', alt: 'IPU CET MCA Selections' },
  { src: '/images/migrated/mahcet_mca_2024.jpeg', alt: 'MAH CET MCA Ranks' },
];

// const stats = [
//   { value: '500+', label: 'NIT Selections', icon: '🎓' },
//   { value: 'AIR 1', label: 'All India Rank', icon: '🏆' },
//   { value: '6000+', label: 'Students Placed', icon: '👨‍💻' },
//   { value: '17+', label: 'Years Results', icon: '📅' },
// ];

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

      <style dangerouslySetInnerHTML={{
        __html: `
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
        .results-images-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          margin-bottom: 70px;
          max-width: 1200px;
          margin-left: auto;
          margin-right: auto;
          width: 100%;
        }
        .result-image-card {
          background: transparent;
          border: none;
          padding: 0;
          box-shadow: none;
          display: flex;
          flex-direction: column;
        }
        .result-image-wrapper {
          position: relative;
          width: 100%;
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 4px 20px rgba(0,0,0,0.08);
        }
        .result-image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
        }
        .result-image-title {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--slate);
          margin-top: 14px;
          text-align: center;
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
          .results-images-grid { grid-template-columns: 1fr; gap: 16px; }
        }
        @media (max-width: 600px) {
          .results-stats { grid-template-columns: 1fr 1fr; }
          .results-images-grid { grid-template-columns: 1fr; gap: 16px; }
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
            style={{ marginBottom: '50px', textAlign: 'center' }}
          >
            <h2 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '32px', fontWeight: 800, color: 'var(--slate)', marginBottom: '12px' }}>
              NIMCET Top Performers
            </h2>
            <h3 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '20px', fontWeight: 600, color: '#bc1600', marginBottom: '24px' }}>
              100+ Selections in NIMCET
            </h3>
            <p style={{ fontSize: '16px', color: 'var(--text-muted)', maxWidth: '1200px', margin: '0 auto 30px', lineHeight: '1.6' }}>
              Landmark Institute NIMCET Result & MCA Entrance Exam Result. Below is the list of our highest performers and top achievers.
            </p>

            {/* Callout box */}
            <div style={{
              background: '#FFF5F5',
              borderLeft: '4px solid #bc1600',
              padding: '20px 24px',
              borderRadius: '8px',
              maxWidth: '1200px',
              margin: '0 auto',
              textAlign: 'left',
              boxShadow: '0 2px 8px rgba(188, 22, 0, 0.05)'
            }}>
              <h4 style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 700, color: '#bc1600', marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '8px', marginTop: 0 }}>
                📢 Important Note About Our Results
              </h4>
              <p style={{ fontSize: '14.5px', color: 'var(--slate)', margin: 0, lineHeight: '1.5' }}>
                These flyers showcase our top rankers and performers. Please note that our complete list of selections is far more extensive, with many more students achieving outstanding success across various prestigious institutions.
              </p>
            </div>
          </motion.div>



          {/* Results Images Grid */}
          <div className="results-images-grid" >
            {resultImages.map((img) => (
              <div className="result-image-card" key={img.alt}>
                <div className="result-image-wrapper">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={1200}
                    height={800}
                    className="result-image"
                    unoptimized
                  />
                </div>
                <div className="result-image-title">{img.alt}</div>
              </div>
            ))}
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
