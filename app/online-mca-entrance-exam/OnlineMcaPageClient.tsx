'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ContactForm from '@/components/ContactForm';

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
    q: 'What exams does Landmark Institute prepare students for?',
    a: 'Landmark prepares students for NIMCET, MAH MCA CET, DU MCA, JNU, PUNE, HCU, BHU, BITS, IP, JAMIA and other top university MCA entrance exams.',
  },
  {
    q: 'Is online MCA coaching as effective as offline?',
    a: 'Yes! With live sessions, recorded lectures, weekly mock tests, and one-on-one mentorship, online coaching at Landmark is as rigorous and effective as offline.',
  },
  {
    q: 'What topics are covered in MCA entrance coaching?',
    a: 'Computer Science, Logical Reasoning, Mathematics, and English — all aligned with latest exam syllabi.',
  },
  {
    q: 'Do you offer a crash course?',
    a: 'Yes. Landmark offers short-term intensive crash courses ideal for last-minute preparation for MCA entrance exams like MAH MCA CET.',
  },
];

export default function OnlineMcaPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const whyChoosePoints = [
    { icon: '📚', title: 'Expert Faculty', desc: 'Dedicated faculty with deep domain expertise in CS, Maths, Logic, and English.' },
    { icon: '🎥', title: 'Live & Recorded Classes', desc: 'Attend live online sessions and replay recorded lectures anytime, anywhere.' },
    { icon: '📝', title: 'Special Doubt Sessions', desc: 'Regular doubt clearing sessions to ensure no concept is left behind.' },
    { icon: '🧪', title: 'Weekend Mock Tests', desc: 'Full-length mock tests every weekend to track your progress and identify gaps.' },
    { icon: '📱', title: 'Mobile App + LMS', desc: 'Access test series, video lectures, dashboards, and discussion forums on the app.' },
    { icon: '🎯', title: 'Exam-Specific Strategy', desc: 'Custom strategies for NIMCET, MAH MCA CET, DU, JNU and other exams.' },
    { icon: '📊', title: 'Performance Tracking', desc: 'Individual performance dashboards to monitor improvement over time.' },
    { icon: '🤝', title: 'Personalized Mentorship', desc: 'One-on-one guidance and mental health support throughout your preparation.' },
  ];

  const comparisonRows = [
    ['Live Online Classes', true, 'Some offer'],
    ['Recorded Lectures', true, 'Limited access'],
    ['Full MCA CET Mock Test Series', true, 'Sometimes extra charges'],
    ['Doubt Clearing & Mentorship', true, 'Generic support'],
    ['Specialized NIMCET / MAH MCA CET Modules', true, 'Not always targeted'],
  ];

  const courses = [
    {
      tag: 'Comprehensive', tagClass: 'tag-blue',
      title: 'Online MCA Entrance Coaching',
      desc: 'Full-course online prep via our digitized learning system. Live + recorded classes for all MCA entrance exams.',
      features: ['All subjects covered', 'Live + recorded', 'Full mock test series'],
    },
    {
      tag: 'Intensive', tagClass: 'tag-orange',
      title: 'Crash Course & Hybrid Batch',
      desc: 'Short-term intensive sessions for last-minute exam prep — perfect for MAH MCA CET or NIMCET.',
      features: ['Fast-paced syllabus', 'Weekend timing', 'High-yield topics'],
    },
    {
      tag: 'Practice', tagClass: 'tag-green',
      title: 'Mock Test Series for MAH MCA CET',
      desc: 'Realistic MAH MCA CET mock tests that mirror actual exam conditions with detailed analysis.',
      features: ['Full-length mocks', 'Sectional tests', 'Detailed analytics'],
    },
  ];

  const subjects = [
    { name: 'Mathematics & Logical Reasoning', detail: 'Algebra, calculus, number systems, and puzzles — fully covered for all entrance exams.', icon: '📐', color: '#3B82F6', bg: '#EFF6FF' },
    { name: 'Computer Awareness & Programming', detail: 'Specialist-led sessions covering core CS concepts tested in MAH MCA CET and similar exams.', icon: '💻', color: '#0891B2', bg: '#ECFEFF' },
    { name: 'English Comprehension', detail: 'Grammar, comprehension, and vocabulary — rapidly improved with exam-specific techniques.', icon: '📝', color: '#059669', bg: '#ECFDF5' },
  ];

  const studentStories = [
    {
      name: 'Ritika Mehta',
      city: 'Pune',
      quote: 'I joined Landmark\'s MCA entrance coaching online, and the structured approach really helped. The MCA CET mock test series was game-changing!',
    },
    {
      name: 'Akshay Sharma',
      city: 'Mumbai',
      quote: 'I took the crash course 2 months before MAH MCA CET, and still managed to rank in the top 2%! Highly recommend.',
    },
  ];

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
              Best Online <span className="accent">MCA Entrance</span> Coaching Institute
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="hero-sub"
              style={{ marginBottom: '28px' }}
            >
              Preparing for NIMCET, MAH MCA CET, DU, JNU or any MCA entrance exam?
              Get expert-guided, structured coaching online — from the comfort of your home.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="/contactus/" className="btn btn-green btn-lg">Enroll Now — Demo</a>
              <a href="/our-courses" className="btn btn-outline btn-lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>View Courses</a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeUp}
              className="hero-stats"
              style={{ marginBottom: '0' }}
            >
              <div className="hero-stat">
                <div className="hero-stat-num">10<span>+</span></div>
                <div className="hero-stat-label">Exams Covered</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">6–9<span>mo</span></div>
                <div className="hero-stat-label">Course Duration</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">Live<span>+</span></div>
                <div className="hero-stat-label">Recorded Access</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">EMI<span> ✓</span></div>
                <div className="hero-stat-label">Easy Payment</div>
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

          {/* Two-column layout */}
          <div className="page-content-grid">

            {/* ── LEFT COLUMN ── */}
            <div>

              {/* About Section */}
              <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} style={{ marginBottom: '48px' }}>
                <motion.div variants={fadeUp} style={{ marginBottom: '16px' }}>
                  <span className="section-eyebrow">About the Coaching</span>
                  <h2 className="section-title" style={{ marginBottom: '12px' }}>
                    Why MCA Entrance Coaching Matters
                  </h2>
                </motion.div>
                <motion.div variants={fadeUp} style={{ background: '#fff', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', padding: '24px', marginBottom: '16px' }}>
                  <p style={{ color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: 12, margin: 0 }}>
                    Cracking an MCA entrance exam is no cakewalk. Understanding complex concepts in Mathematics, Computers, and Reasoning — while managing time pressure — requires structured preparation. Landmark Institute is one of the leading online MCA entrance coaching institutes, helping students get placed in top universities like NIMCET, DU, JNU, PUNE, HCU, BHU, BITS, IP, and JAMIA.
                  </p>
                </motion.div>
                <motion.div variants={stagger} className="page-cards-2col">
                  {[
                    { icon: '⚙️', title: 'Self-Study Challenges', desc: 'Selecting important topics per syllabus is complex and time-consuming without guidance.' },
                    { icon: '📈', title: 'With Coaching', desc: 'Get structured study plans, expert PYQ analysis, and targeted preparation strategies.' },
                  ].map((item) => (
                    <motion.div key={item.title} variants={fadeUp} style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r)', padding: '18px' }}>
                      <div style={{ fontSize: 24, marginBottom: 8 }}>{item.icon}</div>
                      <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--slate)', marginBottom: 4 }}>{item.title}</div>
                      <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{item.desc}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Why Choose Landmark */}
              <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} style={{ marginBottom: '48px' }}>
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">Why Landmark</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Why Choose Landmark Institute for MCA?</h2>
                </motion.div>
                <motion.div variants={stagger} className="page-cards-2col">
                  {whyChoosePoints.map((f) => (
                    <motion.div key={f.title} variants={fadeUp} className="why-card">
                      <div style={{ fontSize: 26, marginBottom: 10 }}>{f.icon}</div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--slate)', marginBottom: 6 }}>{f.title}</h3>
                      <p style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Courses Offered */}
              <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} style={{ marginBottom: '48px' }}>
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">Our Programs</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Courses Offered by Landmark Institute</h2>
                </motion.div>
                <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                  {courses.map((c) => (
                    <motion.div key={c.title} variants={fadeUp} className="course-card" style={{ flexDirection: 'row', gap: 24, alignItems: 'flex-start' }}>
                      <div style={{ flex: 1 }}>
                        <span className={`course-tag ${c.tagClass}`} style={{ marginBottom: 8, display: 'inline-block' }}>{c.tag}</span>
                        <h3 style={{ marginBottom: 8 }}>{c.title}</h3>
                        <p style={{ marginBottom: 12 }}>{c.desc}</p>
                        <div className="course-features">
                          {c.features.map((ft) => (
                            <div key={ft} className="feature-pill">
                              <svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7" /></svg>
                              {ft}
                            </div>
                          ))}
                        </div>
                      </div>
                      <a href="/contactus/" className="btn btn-primary" style={{ whiteSpace: 'nowrap', alignSelf: 'flex-start' }}>Enquire Now</a>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Curriculum */}
              <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} style={{ marginBottom: '48px' }}>
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">Curriculum</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Comprehensive Curriculum for MCA Entrance</h2>
                </motion.div>
                <motion.div variants={stagger} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {subjects.map((s) => (
                    <motion.div
                      key={s.name}
                      variants={fadeUp}
                      style={{
                        background: '#fff',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--r)',
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 18,
                      }}
                    >
                      <div style={{ width: 48, height: 48, borderRadius: 12, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, flexShrink: 0 }}>{s.icon}</div>
                      <div>
                        <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: 15, color: 'var(--slate)', marginBottom: 4 }}>{s.name}</div>
                        <div style={{ fontSize: 13, color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.detail}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Comparison Table */}
              <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} style={{ marginBottom: '48px' }}>
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">How We Compare</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>What Makes Landmark Institute the Best?</h2>
                </motion.div>
                <motion.div variants={fadeUp} style={{ background: '#fff', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                    <thead>
                      <tr style={{ background: 'var(--blue-light)' }}>
                        <th style={{ padding: '14px 20px', textAlign: 'left', color: 'var(--slate)', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Feature</th>
                        <th style={{ padding: '14px 20px', textAlign: 'center', color: 'var(--blue)', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Landmark Institute</th>
                        <th style={{ padding: '14px 20px', textAlign: 'center', color: 'var(--slate-light)', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Others</th>
                      </tr>
                    </thead>
                    <tbody>
                      {comparisonRows.map(([label, landmark, others], i) => (
                        <tr key={String(label)} style={{ borderTop: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                          <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--slate-mid)' }}>{label}</td>
                          <td style={{ padding: '12px 20px', textAlign: 'center', color: 'var(--green-dark)' }}>{landmark ? '✅' : String(landmark)}</td>
                          <td style={{ padding: '12px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>{String(others)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </motion.section>

              {/* Student Stories */}
              <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} style={{ marginBottom: '48px' }}>
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">Success Stories</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Stories of Success from Landmark Students</h2>
                </motion.div>
                <motion.div variants={stagger} className="page-cards-2col">
                  {studentStories.map((s) => (
                    <motion.div key={s.name} variants={fadeUp} className="testimonial-card">
                      <div className="stars">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} className="star" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                        ))}
                      </div>
                      <p className="testimonial-text">{s.quote}</p>
                      <div className="testimonial-author">
                        <div className="t-avatar">{s.name[0]}</div>
                        <div className="t-author-info">
                          <span>{s.name}</span>
                          <span>{s.city}</span>
                        </div>
                        <div className="t-rank-badge">MCA Admitted</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Video */}
              <motion.section variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }} style={{ marginBottom: '48px' }}>
                <span className="section-eyebrow">Watch & Learn</span>
                <h2 className="section-title" style={{ marginBottom: '20px' }}>See Landmark MCA Coaching in Action</h2>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                  <iframe
                    src="https://www.youtube.com/embed/fKdfNDW32YQ?si=V4pOp48QS39aYeU4"
                    title="Landmark MCA Entrance Coaching"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  />
                </div>
              </motion.section>

              {/* FAQ */}
              <motion.section variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, margin: '-80px' }}>
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
            </div>

            {/* ── RIGHT SIDEBAR ── */}
            <div className="page-sidebar">

              {/* Exam Tips */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
              >
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
                  💡 Expert Exam Tips
                </h3>
                {[
                  { tip: 'Plan a study routine', detail: 'Set dedicated time slots for each subject daily.' },
                  { tip: 'Track your progress', detail: 'Review mock test performance weekly and adjust strategy.' },
                  { tip: 'Don\'t skip the basics', detail: 'Strong foundations in Maths & CS are non-negotiable.' },
                  { tip: 'Practice PYQs', detail: 'Previous year papers reveal the most important question patterns.' },
                ].map((item) => (
                  <div key={item.tip} style={{ marginBottom: 14, paddingBottom: 14, borderBottom: '1px solid var(--border-light)' }}>
                    <div style={{ fontWeight: 700, fontSize: 14, color: 'var(--slate)', marginBottom: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                      <span style={{ width: 6, height: 6, background: 'var(--blue)', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }} />
                      {item.tip}
                    </div>
                    <div style={{ fontSize: 12.5, color: 'var(--text-muted)', marginLeft: 14 }}>{item.detail}</div>
                  </div>
                ))}
              </motion.div>

              {/* Exams Covered */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
              >
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
                  🏆 Exams We Cover
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {['NIMCET', 'MAH MCA CET', 'DU MCA', 'JNU', 'PUNE', 'HCU', 'BHU', 'BITS', 'IP', 'JAMIA'].map((exam) => (
                    <span key={exam} style={{ background: 'var(--blue-light)', color: 'var(--blue)', borderRadius: 'var(--r-full)', padding: '5px 12px', fontSize: 12.5, fontWeight: 600 }}>{exam}</span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Card */}
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
                <div style={{ fontSize: 32, marginBottom: 12 }}>🎓</div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#fff' }}>
                  Start Your MCA Journey
                </h3>
                <p style={{ fontSize: 13.5, color: '#94A3B8', marginBottom: 20, lineHeight: 1.6 }}>
                  Get expert guidance, structured study plans, and mock tests for all top MCA entrance exams.
                </p>
                <a href="/contactus/" className="btn btn-green" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  Book Demo Class
                </a>
                <a href="/our-courses" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', display: 'flex', marginTop: 10, color: '#94A3B8', borderColor: 'rgba(255,255,255,0.2)' }}>
                  View All Courses
                </a>
              </motion.div>

              {/* App features */}
              <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
              >
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
                  📱 Landmark App Features
                </h3>
                {['Test series', 'Video lectures', 'Performance dashboards', 'Discussion forums'].map((f) => (
                  <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 0', borderBottom: '1px solid var(--border-light)', fontSize: 13.5, color: 'var(--text-mid)' }}>
                    <span style={{ width: 20, height: 20, background: 'var(--green-bg)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: 'var(--green-dark)', fontSize: 11, flexShrink: 0 }}>✓</span>
                    {f}
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
