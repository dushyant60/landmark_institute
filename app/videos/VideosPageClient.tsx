'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

const videos = [
  { title: 'NIMCET 2025 AIR 1 — Arpit Kumar Full Interview', category: 'Success Story', duration: '4:32', views: '12.4K', thumb: '🎬', year: 2025 },
  { title: 'NIMCET 2025 AIR 2 — Sneha Gupta Success Story', category: 'Success Story', duration: '3:48', views: '9.8K', thumb: '🎬', year: 2025 },
  { title: 'NIMCET Mathematics: Calculus from Zero to Hero', category: 'Lecture', duration: '45:12', views: '28.1K', thumb: '📐', year: 2025 },
  { title: 'CUET PG MCA Exam Pattern 2026 — Complete Guide', category: 'Exam Info', duration: '18:04', views: '15.3K', thumb: '📋', year: 2026 },
  { title: 'How to Crack NIMCET in 3 Months — Strategy Session', category: 'Strategy', duration: '32:15', views: '41.2K', thumb: '🎯', year: 2025 },
  { title: 'NIMCET 2025 AIR 4 — Rahul Verma Interview', category: 'Success Story', duration: '5:10', views: '8.7K', thumb: '🎬', year: 2025 },
  { title: 'Data Structures for NIMCET — CS Full Lecture', category: 'Lecture', duration: '52:30', views: '19.6K', thumb: '💻', year: 2025 },
  { title: 'NIMCET Probability & Statistics — Master Class', category: 'Lecture', duration: '38:45', views: '22.4K', thumb: '📊', year: 2026 },
  { title: 'Top 10 NIMCET Mistakes Every Student Makes', category: 'Tips', duration: '14:22', views: '35.8K', thumb: '⚠️', year: 2025 },
  { title: 'DU MCA 2026 — Exam Pattern, Syllabus & Strategy', category: 'Exam Info', duration: '20:10', views: '11.2K', thumb: '🏛️', year: 2026 },
  { title: 'Linear Algebra for NIMCET — Complete Tutorial', category: 'Lecture', duration: '47:08', views: '24.5K', thumb: '📐', year: 2025 },
  { title: 'Landmark Institute — Campus & Facilities Tour', category: 'About Us', duration: '6:44', views: '6.3K', thumb: '🏫', year: 2025 },
];

const categories = ['All', 'Success Story', 'Lecture', 'Strategy', 'Exam Info', 'Tips', 'About Us'];

const catColors: Record<string, string> = {
  'Success Story': '#10B981',
  'Lecture': '#3B82F6',
  'Strategy': '#F59E0B',
  'Exam Info': '#6366F1',
  'Tips': '#EF4444',
  'About Us': '#0EA5E9',
};

export default function VideosPageClient() {
  return (
    <>
      <Topbar />
      <Navbar />

      <style dangerouslySetInnerHTML={{
        __html: `
        .videos-hero {
          background: linear-gradient(135deg, #0A1628 0%, #1a3360 100%);
          padding: 70px 0 50px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .videos-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 60% 40%, rgba(59,130,246,0.18) 0%, transparent 55%);
        }
        .page-badge {
          display: inline-block;
          background: rgba(59,130,246,0.15);
          border: 1px solid rgba(59,130,246,0.35);
          color: #60A5FA;
          padding: 6px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 20px;
        }
        .videos-hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(26px, 4vw, 46px);
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
        }
        .videos-hero h1 .accent { color: #60A5FA; }
        .videos-hero p { font-size: 16px; color: #94A3B8; max-width: 580px; margin: 0 auto; line-height: 1.65; }
        .videos-section { padding: 60px 0 80px; background: var(--bg); }

        .video-filters {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-bottom: 36px;
        }
        .vf-btn {
          padding: 8px 18px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: 1.5px solid var(--border);
          background: #fff;
          color: var(--slate-mid);
          transition: 0.15s;
          text-decoration: none;
        }
        .vf-btn.active, .vf-btn:hover {
          background: var(--blue);
          color: #fff;
          border-color: var(--blue);
        }

        .videos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 60px;
        }
        .video-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          overflow: hidden;
          transition: 0.2s;
          cursor: pointer;
        }
        .video-card:hover { transform: translateY(-3px); box-shadow: var(--shadow-md); }
        .video-thumb-area {
          height: 180px;
          background: linear-gradient(135deg, #0F1A2E, #1a3360);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
          position: relative;
        }
        .v-emoji { font-size: 48px; }
        .v-play {
          width: 48px; height: 48px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          border: 2px solid rgba(255,255,255,0.4);
          display: flex; align-items: center; justify-content: center;
          color: #fff; font-size: 18px;
          transition: 0.15s;
        }
        .video-card:hover .v-play { background: var(--blue); border-color: var(--blue); }
        .v-duration {
          position: absolute;
          bottom: 8px;
          right: 10px;
          background: rgba(0,0,0,0.7);
          color: #fff;
          font-size: 11px;
          padding: 2px 7px;
          border-radius: 4px;
        }
        .video-card-body { padding: 16px; }
        .v-cat-tag {
          display: inline-block;
          padding: 3px 10px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 8px;
        }
        .video-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 14px;
          font-weight: 700;
          color: var(--slate);
          line-height: 1.4;
          margin-bottom: 8px;
        }
        .v-meta {
          display: flex;
          gap: 12px;
          font-size: 12px;
          color: var(--text-muted);
        }

        @media (max-width: 900px) {
          .videos-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 600px) {
          .videos-grid { grid-template-columns: 1fr; }
        }
      `}} />

      <div className="videos-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.span variants={fadeUp} className="page-badge">🎬 Videos</motion.span>
            <motion.h1 variants={fadeUp}>
              NIMCET <span className="accent">Video Lectures</span> &<br />Student Success Stories
            </motion.h1>
            <motion.p variants={fadeUp}>
              Watch free NIMCET coaching videos, faculty lectures, student interviews, and MCA entrance preparation tips from Landmark Institute.
            </motion.p>
          </motion.div>
        </div>
        <div style={{ height: '50px', marginTop: '30px' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="var(--bg)" style={{ width: '100%', height: '100%' }}>
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </div>

      <section className="videos-section">
        <div className="container">
          <div className="video-filters">
            {categories.map(c => (
              <a key={c} href="#" className={`vf-btn ${c === 'All' ? 'active' : ''}`}>{c}</a>
            ))}
          </div>

          <motion.div className="videos-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
            {videos.map(v => (
              <motion.div className="video-card" key={v.title} variants={fadeUp}>
                <div className="video-thumb-area">
                  <div className="v-emoji">{v.thumb}</div>
                  <div className="v-play">▶</div>
                  <span className="v-duration">{v.duration}</span>
                </div>
                <div className="video-card-body">
                  <span className="v-cat-tag" style={{ background: catColors[v.category] || '#64748B' }}>{v.category}</span>
                  <h3>{v.title}</h3>
                  <div className="v-meta">
                    <span>👁 {v.views} views</span>
                    <span>📅 {v.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            style={{ background: 'linear-gradient(135deg, #0F2A5E 0%, var(--slate) 100%)', borderRadius: 'var(--r-lg)', padding: '50px 40px', textAlign: 'center', color: '#fff' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '26px', fontWeight: 800, marginBottom: '12px' }}>
              Want Live Coaching? 🎯
            </h2>
            <p style={{ fontSize: '15px', color: '#94A3B8', marginBottom: '24px' }}>
              Join Landmark Institute for live daily classes, mock tests, and personal mentorship. Best NIMCET results in India.
            </p>
            <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link href="/our-courses/" className="btn btn-primary">View All Courses</Link>
              <Link href="/contactus/" className="btn btn-outline" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.3)' }}>Free Counselling</Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
