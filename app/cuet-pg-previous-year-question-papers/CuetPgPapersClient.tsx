'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ContactForm from '@/components/ContactForm';
import LeadCapturePopup from '@/components/LeadCapturePopup';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const faqData = [
  {
    q: 'How many years of CUET PG papers should I solve?',
    a: 'Most candidates benefit from solving at least the previous three to five years of question papers.',
  },
  {
    q: 'Are previous year papers enough for preparation?',
    a: 'Previous year papers should be combined with syllabus completion, revision, and mock tests for comprehensive preparation.',
  },
  {
    q: 'Do questions repeat in CUET PG?',
    a: 'Exact questions may not repeat frequently, but concepts and question patterns often remain similar across years.',
  },
];

const papers = [
  { year: '2025', href: '/documents/CUET-PG-2025-3.pdf', badge: 'Latest', badgeColor: '#059669', badgeBg: '#ECFDF5' },
  { year: '2024', href: '/documents/CUET-PG-2024-1-1.pdf', badge: 'Popular', badgeColor: '#2563EB', badgeBg: '#EFF6FF' },
  { year: '2023', href: '/documents/CUET-PG-2023.pdf', badge: null, badgeColor: null, badgeBg: null },
  { year: '2022', href: '/documents/CUETPG-2022-2.pdf', badge: null, badgeColor: null, badgeBg: null },
];

const benefits = [
  { icon: '🗺️', title: 'Understand Exam Pattern', desc: 'Get familiar with question types, section weightage, and difficulty level.' },
  { icon: '⚡', title: 'Improve Speed & Accuracy', desc: 'Timed practice builds the speed needed to attempt all questions confidently.' },
  { icon: '🔍', title: 'Identify Recurring Topics', desc: 'Spot high-frequency topics and allocate your study time wisely.' },
  { icon: '⏱️', title: 'Time Management', desc: 'Develop a strategy for how much time to spend on each section.' },
  { icon: '💪', title: 'Build Confidence', desc: 'Each paper you solve adds to your confidence before exam day.' },
  { icon: '📊', title: 'Evaluate Strengths & Weaknesses', desc: 'Use your scores to identify where to focus revision efforts.' },
];

export default function CuetPgPapersClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <Topbar />
      <Navbar />

      {/* ── HERO ── */}
      <div className="hero" style={{ padding: '56px 0 0', overflow: 'hidden' }}>
        <div className="hero-inner">
          {/* Left Column */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <motion.span variants={fadeUp} className="hero-badge">
              <span /> Landmark Institute
            </motion.span>
            <motion.h1
              variants={fadeUp}
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.8px' }}
            >
              CUET PG Previous Year <span className="accent">Question Papers</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="hero-sub" style={{ marginBottom: '28px' }}>
              Download official CUET PG previous year question papers with answer keys — free PDF downloads for 2022, 2023, 2024 &amp; 2025.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="/documents/CUET-PG-Solved-Previous-Year-Paper-2021-2025.pdf" download className="btn btn-green btn-lg">
                Download All Papers (2021–2025)
              </a>
              <a href="/contactus/" className="btn btn-outline btn-lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>
                Talk to an Expert
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div variants={fadeUp} className="hero-stats" style={{ marginBottom: '0' }}>
              <div className="hero-stat">
                <div className="hero-stat-num">4<span>+</span></div>
                <div className="hero-stat-label">Years of Papers</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">Free</div>
                <div className="hero-stat-label">PDF Downloads</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">✓</div>
                <div className="hero-stat-label">Answer Keys</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">Solved</div>
                <div className="hero-stat-label">Bundle 2021–25</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column — Counselling Form Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="hero-card"
            style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
          >
            <h3>Get Counselling</h3>
            <p>Talk to our experts &amp; plan your MCA journey</p>
            <ContactForm buttonText="Book Counselling →" showMessageField={false} />
            <div className="trust-badges">
              <div className="trust-badge">
                <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                No Spam
              </div>
              <div className="trust-badge">
                <svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Expert Guidance
              </div>
            </div>
          </motion.div>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="var(--bg)" />
          </svg>
        </div>
      </div>

      {/* ── MAIN CONTENT ── */}
      <main style={{ background: 'var(--bg)', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="page-content-grid">

            {/* ── LEFT COLUMN ── */}
            <div>

              {/* About CUET PG Papers */}
              <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} style={{ marginBottom: '48px' }}>
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">About</span>
                  <h2 className="section-title" style={{ marginBottom: '12px' }}>CUET PG Previous Year Question Paper with Answers PDF</h2>
                </motion.div>
                <motion.div variants={fadeUp} style={{ background: '#fff', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', padding: '24px', marginBottom: '16px' }}>
                  <p style={{ color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: 12 }}>
                    Preparing for the Common University Entrance Test (Postgraduate) requires more than just completing the syllabus. One of the most effective ways to improve your preparation is by solving <strong>CUET PG Previous Year Question Papers with Answers PDF</strong>.
                  </p>
                  <p style={{ color: 'var(--text-mid)', lineHeight: 1.75, margin: 0 }}>
                    At Landmark Institute, our faculty members regularly analyze previous year papers to help students understand exam trends and prepare more effectively. Candidates who consistently practice previous year question papers often develop better accuracy, confidence, and problem-solving skills.
                  </p>
                </motion.div>
              </motion.section>

              {/* Why Solve Papers */}
              <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} style={{ marginBottom: '48px' }}>
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">Benefits</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Why Solve CUET PG Previous Year Question Papers?</h2>
                </motion.div>
                <motion.div variants={stagger} className="page-cards-2col">
                  {benefits.map((b) => (
                    <motion.div key={b.title} variants={fadeUp} className="why-card">
                      <div style={{ fontSize: 26, marginBottom: 10 }}>{b.icon}</div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--slate)', marginBottom: 6 }}>{b.title}</h3>
                      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{b.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Download Section */}
              <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} style={{ marginBottom: '48px' }}>
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">Free Downloads</span>
                  <h2 className="section-title" style={{ marginBottom: '8px' }}>Download CUET PG Previous Year Question Papers</h2>
                  <p style={{ color: 'var(--text-muted)', marginBottom: '24px' }}>Solve official previous year papers to test your preparation and understand the difficulty level.</p>
                </motion.div>

                {/* Year-wise Papers Grid */}
                <motion.div variants={stagger} className="page-cards-2col">
                  {papers.map((p) => (
                    <motion.div
                      key={p.year}
                      variants={fadeUp}
                      style={{
                        background: '#fff',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--r-lg)',
                        padding: '24px',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 16,
                        boxShadow: 'var(--shadow)',
                        position: 'relative',
                        overflow: 'hidden',
                        transition: 'all 0.25s ease',
                      }}
                      whileHover={{ y: -4, boxShadow: 'var(--shadow-md)' }}
                    >
                      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, background: 'var(--blue)', borderRadius: '0' }} />
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                          <div style={{ width: 44, height: 44, borderRadius: 10, background: '#FEF2F2', color: '#EF4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 20 }}>📄</div>
                          <div>
                            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 16, color: 'var(--slate)' }}>CUET PG {p.year}</div>
                            <div style={{ fontSize: 12.5, color: 'var(--blue-mid)', fontWeight: 600 }}>Question Paper with Keys</div>
                          </div>
                        </div>
                        {p.badge && (
                          <span style={{ background: p.badgeBg!, color: p.badgeColor!, borderRadius: 'var(--r-full)', padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>{p.badge}</span>
                        )}
                      </div>
                      <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>Official question paper with response keys for CUET PG entrance examination.</p>
                      <a
                        href={p.href}
                        download
                        className="btn btn-primary"
                        style={{ justifyContent: 'center', width: '100%', gap: 8 }}
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                        </svg>
                        Download PDF — {p.year}
                      </a>
                    </motion.div>
                  ))}
                </motion.div>

                {/* Featured Solved Bundle */}
                <motion.div
                  variants={fadeUp}
                  style={{
                    background: 'linear-gradient(135deg, #EEF5FF 0%, #fff 100%)',
                    border: '1.5px solid var(--blue)',
                    borderRadius: 'var(--r-lg)',
                    padding: '28px',
                    boxShadow: 'var(--shadow-md)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '24px',
                    flexWrap: 'wrap',
                  }}
                >
                  <div style={{ flex: 1, minWidth: 200 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                      <div style={{ width: 44, height: 44, borderRadius: 10, background: 'var(--blue-light)', color: 'var(--blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22 }}>📚</div>
                      <div>
                        <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 17, color: 'var(--slate)' }}>CUET PG Solved Papers (2021–2025)</div>
                        <div style={{ fontSize: 13, color: 'var(--blue)', fontWeight: 600 }}>Complete Solved Bundle — Best Value</div>
                      </div>
                    </div>
                    <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.5, margin: 0 }}>
                      Get full access to solved previous year papers with answer keys, detailed explanations, and exam pattern analysis. 5 years of papers in one download.
                    </p>
                  </div>
                  <a
                    href="/documents/CUET-PG-Solved-Previous-Year-Paper-2021-2025.pdf"
                    download
                    className="btn btn-green btn-lg"
                    style={{ justifyContent: 'center', minWidth: '220px', gap: 8 }}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3" />
                    </svg>
                    Download Solved Bundle
                  </a>
                </motion.div>
              </motion.section>

              {/* FAQ */}
              <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} style={{ marginBottom: '48px' }}>
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">FAQ</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Frequently Asked Questions</h2>
                </motion.div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {faqData.map((item, i) => (
                    <motion.div key={i} variants={fadeUp} className={`faq-item${openFaq === i ? ' open' : ''}`}>
                      <div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
                        {item.q}
                        <div className="faq-toggle">
                          <svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>
                        </div>
                      </div>
                      {openFaq === i && (
                        <div className="faq-a" style={{ display: 'block' }}>{item.a}</div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </motion.section>

              {/* About Landmark */}
              <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
                <div style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '28px' }}>
                  <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 20, fontWeight: 700, color: 'var(--slate)', marginBottom: 12 }}>About Landmark Institute</h2>
                  <p style={{ color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: 12 }}>
                    Landmark Institute provides guidance for MCA entrance examinations and postgraduate entrance preparation through structured courses, study material, mock tests, and academic support. Our faculty team continuously reviews examination trends to help students prepare effectively.
                  </p>
                  <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', paddingTop: 12, borderTop: '1px solid var(--border-light)' }}>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--slate-mid)' }}>Reviewed By:</strong> Landmark Institute Team</div>
                    <div style={{ fontSize: 13, color: 'var(--text-muted)' }}><strong style={{ color: 'var(--slate-mid)' }}>Last Updated:</strong> May 2026</div>
                  </div>
                </div>
              </motion.section>
            </div>

            {/* ── RIGHT SIDEBAR ── */}
            <div className="page-sidebar">

              {/* Quick Downloads List */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
              >
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
                  ⚡ Quick Downloads
                </h3>
                {papers.map((p) => (
                  <a
                    key={p.year}
                    href={p.href}
                    download
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      padding: '10px 0',
                      borderBottom: '1px solid var(--border-light)',
                      textDecoration: 'none',
                      color: 'var(--slate-mid)',
                      fontSize: 14,
                      fontWeight: 600,
                    }}
                  >
                    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                      <span style={{ fontSize: 16 }}>📄</span> CUET PG {p.year}
                      {p.badge && <span style={{ background: p.badgeBg!, color: p.badgeColor!, borderRadius: 'var(--r-full)', padding: '2px 8px', fontSize: 10, fontWeight: 700 }}>{p.badge}</span>}
                    </span>
                    <span style={{ color: 'var(--blue)', fontSize: 12 }}>PDF ↓</span>
                  </a>
                ))}
                <a
                  href="/documents/CUET-PG-Solved-Previous-Year-Paper-2021-2025.pdf"
                  download
                  className="btn btn-green"
                  style={{ width: '100%', justifyContent: 'center', display: 'flex', marginTop: 16 }}
                >
                  📚 Download All (Solved Bundle)
                </a>
              </motion.div>

              {/* How to Use */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
              >
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
                  📋 How to Use These Papers
                </h3>
                {[
                  'Start with the most recent year (2025)',
                  'Time yourself — attempt in exam conditions',
                  'Check answers with the response key',
                  'Note down weak topics for revision',
                  'Repeat with previous years\' papers',
                ].map((step, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, marginBottom: 12, alignItems: 'flex-start' }}>
                    <span style={{ width: 22, height: 22, background: 'var(--blue-light)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--blue)', fontWeight: 800, fontSize: 11, flexShrink: 0, marginTop: 1 }}>{i + 1}</span>
                    <span style={{ fontSize: 13, color: 'var(--text-mid)', lineHeight: 1.5 }}>{step}</span>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{
                  background: 'linear-gradient(135deg, var(--slate) 0%, #0F2A5E 100%)',
                  borderRadius: 'var(--r-lg)',
                  padding: '28px',
                  color: '#fff',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)' }} />
                <div style={{ fontSize: 32, marginBottom: 12 }}>🎯</div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 17, fontWeight: 700, marginBottom: 8, color: '#fff' }}>
                  Need Expert Guidance?
                </h3>
                <p style={{ fontSize: 13, color: '#94A3B8', marginBottom: 20, lineHeight: 1.6 }}>
                  Join Landmark Institute&apos;s CUET PG coaching for structured preparation, mock tests, and expert faculty support.
                </p>
                <a href="/contactus/" className="btn btn-green" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  Book Counselling
                </a>
                <a href="/our-courses" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', display: 'flex', marginTop: 10, color: '#94A3B8', borderColor: 'rgba(255,255,255,0.2)' }}>
                  View Courses
                </a>
              </motion.div>

              {/* Prep Tips */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ background: 'var(--green-bg)', border: '1px solid rgba(0,200,83,0.2)', borderRadius: 'var(--r-lg)', padding: '20px' }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                  <span style={{ fontSize: 20 }}>✅</span>
                  <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 14, fontWeight: 700, color: 'var(--green-dark)', margin: 0 }}>Pro Tip</h3>
                </div>
                <p style={{ fontSize: 13, color: 'var(--green-dark)', lineHeight: 1.6, margin: 0 }}>
                  Solve at least <strong>3–5 years</strong> of previous papers in timed exam conditions. Combine with Landmark&apos;s mock tests for best results.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
      <LeadCapturePopup />
    </>
  );
}

