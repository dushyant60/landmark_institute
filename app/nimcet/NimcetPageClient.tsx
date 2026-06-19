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
    q: 'Is the Landmark Institute NIMCET good for online coaching?',
    a: 'Yes. It is a top-rated NIMCET coaching institute known for extraordinary results and comprehensive student support.',
  },
  {
    q: 'Can I crack NIMCET without coaching?',
    a: 'You can try, but NIMCET coaching online gives you expert guidance, structure and tested strategies that significantly improve your chances.',
  },
  {
    q: 'What is the duration of the NIMCET course at Landmark?',
    a: 'Usually 6–9 months, based on batch. Fast-track and weekend class options are available.',
  },
  {
    q: 'Does Landmark Institute provide mock tests?',
    a: 'Yes. Weekly Mock Tests and Analysis are a core part of the coaching strategy for NIMCET preparation.',
  },
  {
    q: 'Is it only for students in Delhi?',
    a: 'While Landmark Institute started as NIMCET coaching in Delhi, its online coaching is available nationwide and globally.',
  },
];

export default function NimcetPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const examSections = [
    { subject: 'Mathematics', count: '50', icon: '📐', color: '#3B82F6', bg: '#EFF6FF' },
    { subject: 'Logical Reasoning', count: '40', icon: '🧠', color: '#8B5CF6', bg: '#F5F3FF' },
    { subject: 'Computer Awareness', count: '10', icon: '💻', color: '#0891B2', bg: '#ECFEFF' },
    { subject: 'English', count: '20', icon: '📝', color: '#059669', bg: '#ECFDF5' },
  ];

  const features = [
    { icon: '🎥', title: 'Live Classes + Recordings', desc: 'Access classes live or replay them anytime for flexible learning.' },
    { icon: '📋', title: 'Customized Practice Sheets', desc: 'Subject-wise sheets and PYQs designed by expert faculty.' },
    { icon: '📊', title: 'Weekly Progress Reports', desc: 'Track your performance with detailed weekly analysis.' },
    { icon: '🎯', title: 'Dedicated Mentorship', desc: 'One-on-one guidance to address your weak areas personally.' },
    { icon: '📱', title: 'Mobile App Access', desc: 'Study anywhere via the Landmark Institute app — iOS & Android.' },
    { icon: '💬', title: 'Doubt Clearing Sessions', desc: 'Real-time doubt resolution via live sessions and WhatsApp.' },
  ];

  const topNITs = ['NIT Trichy', 'NIT Warangal', 'NIT Surathkal', 'NIT Calicut', 'NIT Allahabad', 'NIT Rourkela'];

  const careerOptions = [
    'System Analysts', 'Software Consultants', 'Hardware Engineer',
    'Systems Developer / Engineer', 'Web Designer & Developer', 'Technical Writer',
    'Software Application Architect',
  ];

  const successStories = [
    { name: 'Ritika', rank: 'AIR 58', quote: 'Balanced a part-time job and still cracked NIMCET through the Landmark online course.' },
    { name: 'Aditya', rank: 'AIR 27', quote: 'Switching to Landmark\'s online NIMCET coaching saved me travel time and gave me 3 extra study hours every day!' },
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
              style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-1px' }}
            >
              NIMCET Coaching <span className="accent">Online</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="hero-sub"
              style={{ marginBottom: '28px' }}
            >
              Crack the NIT MCA entrance exam with India&apos;s trusted online NIMCET coaching.
              Expert faculty · Live + recorded classes · Weekly mock tests.
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
                <div className="hero-stat-num">120 <span>Q</span></div>
                <div className="hero-stat-label">Total Questions</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">60<span>%</span></div>
                <div className="hero-stat-label">Min. Eligibility</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">6–9<span>mo</span></div>
                <div className="hero-stat-label">Course Duration</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">10<span>+</span></div>
                <div className="hero-stat-label">NITs Accepting</div>
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

      {/* ── MAIN CONTENT AREA ── */}
      <main style={{ background: 'var(--bg)', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>

          {/* Two-column layout */}
          <div className="page-content-grid">

            {/* ── LEFT COLUMN ── */}
            <div>

              {/* About NIMCET */}
              <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                style={{ marginBottom: '48px' }}
              >
                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <span className="section-eyebrow">About the Exam</span>
                </motion.div>
                <motion.h2 variants={fadeUp} className="section-title" style={{ marginBottom: '12px' }}>
                  Understanding the NIMCET Exam
                </motion.h2>
                <motion.p variants={fadeUp} style={{ color: 'var(--text-mid)', lineHeight: 1.75, marginBottom: '20px' }}>
                  The NIMCET is a national-level entrance exam organized by NITs every year for selecting candidates for the MCA programme. It tests knowledge of Computer Science, Mathematics, English, and Logical Reasoning. Any graduate student who has appeared in or passed their final year exam can apply.
                </motion.p>
                <motion.p variants={fadeUp} style={{ color: 'var(--text-mid)', lineHeight: 1.75 }}>
                  The question paper is entirely objective-type with negative marking — making accuracy and speed both critical. Admission to a top NIT depends entirely on the rank obtained in NIMCET.
                </motion.p>
              </motion.section>

              {/* Exam Pattern */}
              <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                style={{ marginBottom: '48px' }}
              >
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">Exam Pattern</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Syllabus & Question Distribution</h2>
                </motion.div>
                <motion.div
                  variants={stagger}
                  className="page-cards-2col"
                >
                  {examSections.map((s) => (
                    <motion.div
                      key={s.subject}
                      variants={fadeUp}
                      style={{
                        background: '#fff',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--r)',
                        padding: '20px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                        transition: '.2s',
                        cursor: 'default',
                      }}
                      whileHover={{ y: -3, boxShadow: 'var(--shadow-md)' }}
                    >
                      <div style={{ width: 52, height: 52, borderRadius: 12, background: s.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 24, flexShrink: 0 }}>
                        {s.icon}
                      </div>
                      <div>
                        <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: 26, color: s.color, lineHeight: 1 }}>{s.count}</div>
                        <div style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 2 }}>Questions</div>
                        <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--slate)', marginTop: 2 }}>{s.subject}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Why Online Coaching */}
              <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                style={{ marginBottom: '48px' }}
              >
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">Why Landmark</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Key Features of Nimcet Online Coaching</h2>
                </motion.div>
                <motion.div
                  variants={stagger}
                  className="page-cards-2col"
                >
                  {features.map((f) => (
                    <motion.div key={f.title} variants={fadeUp} className="why-card">
                      <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                      <h3 style={{ fontSize: 15, fontWeight: 700, color: 'var(--slate)', marginBottom: 6 }}>{f.title}</h3>
                      <p style={{ fontSize: 13.5, color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Online vs Offline comparison */}
              <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                style={{ marginBottom: '48px' }}
              >
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">Comparison</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Online vs Offline Coaching for NIMCET</h2>
                </motion.div>
                <motion.div variants={fadeUp} style={{ background: '#fff', borderRadius: 'var(--r-lg)', border: '1px solid var(--border)', overflow: 'hidden' }}>
                  <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                    <thead>
                      <tr style={{ background: 'var(--blue-light)' }}>
                        <th style={{ padding: '14px 20px', textAlign: 'left', color: 'var(--slate)', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Criteria</th>
                        <th style={{ padding: '14px 20px', textAlign: 'center', color: 'var(--blue)', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Online (Landmark)</th>
                        <th style={{ padding: '14px 20px', textAlign: 'center', color: 'var(--slate-light)', fontFamily: "'Poppins', sans-serif", fontWeight: 700 }}>Offline Coaching</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[
                        ['Flexibility', '✅ High', '❌ Low'],
                        ['Cost-Effective', '✅ Yes', '❌ Expensive'],
                        ['Accessibility', '✅ Anywhere', '❌ Location-bound'],
                        ['Doubt Clearance', '✅ Instant', '⏱ Limited by class time'],
                      ].map(([label, online, offline], i) => (
                        <tr key={label} style={{ borderTop: '1px solid var(--border)', background: i % 2 === 0 ? '#fff' : 'var(--bg)' }}>
                          <td style={{ padding: '12px 20px', fontWeight: 600, color: 'var(--slate-mid)' }}>{label}</td>
                          <td style={{ padding: '12px 20px', textAlign: 'center', color: 'var(--text-mid)' }}>{online}</td>
                          <td style={{ padding: '12px 20px', textAlign: 'center', color: 'var(--text-muted)' }}>{offline}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </motion.div>
              </motion.section>

              {/* Success Stories */}
              <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                style={{ marginBottom: '48px' }}
              >
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">Student Success</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Landmark Students Who Cracked NIMCET</h2>
                </motion.div>
                <motion.div variants={stagger} className="page-cards-2col" style={{ gap: 16 }}>
                  {successStories.map((s) => (
                    <motion.div
                      key={s.name}
                      variants={fadeUp}
                      className="testimonial-card"
                    >
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
                          <span>NIMCET Qualified</span>
                        </div>
                        <div className="t-rank-badge">{s.rank}</div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Career Options */}
              <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                style={{ marginBottom: '48px' }}
              >
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">After MCA</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Career Opportunities After MCA Degree</h2>
                </motion.div>
                <motion.div variants={stagger} style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  {careerOptions.map((c) => (
                    <motion.div
                      key={c}
                      variants={fadeUp}
                      style={{
                        background: '#fff',
                        border: '1px solid var(--border)',
                        borderRadius: 'var(--r-full)',
                        padding: '8px 18px',
                        fontSize: 14,
                        fontWeight: 600,
                        color: 'var(--slate-mid)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 8,
                      }}
                    >
                      <span style={{ width: 8, height: 8, background: 'var(--green)', borderRadius: '50%', display: 'inline-block', flexShrink: 0 }} />
                      {c}
                    </motion.div>
                  ))}
                </motion.div>
              </motion.section>

              {/* Video */}
              <motion.section
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                style={{ marginBottom: '48px' }}
              >
                <span className="section-eyebrow">Watch & Learn</span>
                <h2 className="section-title" style={{ marginBottom: '20px' }}>See Landmark NIMCET Coaching in Action</h2>
                <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, borderRadius: 'var(--r-lg)', overflow: 'hidden', boxShadow: 'var(--shadow-md)' }}>
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/fKdfNDW32YQ?si=px29UaSLCrg_znLv"
                    title="Landmark NIMCET Coaching"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                  />
                </div>
              </motion.section>

              {/* FAQ */}
              <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
              >
                <motion.div variants={fadeUp}>
                  <span className="section-eyebrow">FAQ</span>
                  <h2 className="section-title" style={{ marginBottom: '20px' }}>Frequently Asked Questions</h2>
                </motion.div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {faqData.map((item, i) => (
                    <motion.div
                      key={i}
                      variants={fadeUp}
                      className={`faq-item${openFaq === i ? ' open' : ''}`}
                    >
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

              {/* Eligibility Quick Card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
              >
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
                  📋 Eligibility Criteria
                </h3>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    'Bachelor\'s degree (full-time / 3-year) from a recognized university',
                    '60% marks in graduation with Maths / Stats / Business Maths',
                    'Only Indian citizens are eligible',
                    'BE/BTech students from recognized universities can also apply',
                    'Final-year appearing students are eligible',
                  ].map((pt, i) => (
                    <li key={i} style={{ fontSize: 13, color: 'var(--text-mid)', display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <span style={{ width: 18, height: 18, background: 'var(--blue-light)', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: 'var(--blue)', fontWeight: 800, fontSize: 10, marginTop: 1 }}>{i + 1}</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Top NITs */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
              >
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
                  🏛 Top NITs Accepting NIMCET
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {topNITs.map((nit) => (
                    <span key={nit} style={{ background: 'var(--blue-light)', color: 'var(--blue)', borderRadius: 'var(--r-full)', padding: '5px 12px', fontSize: 12.5, fontWeight: 600 }}>{nit}</span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Card */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
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
                <div style={{ fontSize: 32, marginBottom: 12 }}>🚀</div>
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#fff' }}>
                  Start Your NIMCET Journey
                </h3>
                <p style={{ fontSize: 13.5, color: '#94A3B8', marginBottom: 20, lineHeight: 1.6 }}>
                  Join thousands of students who cracked NIMCET with Landmark&apos;s structured coaching program.
                </p>
                <a href="/contactus/" className="btn btn-green" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
                  Book Demo Class
                </a>
                <a href="/our-courses" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', display: 'flex', marginTop: 10, color: '#94A3B8', borderColor: 'rgba(255,255,255,0.2)' }}>
                  View All Courses
                </a>
              </motion.div>

              {/* Batch options */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
              >
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
                  📅 Flexible Batches
                </h3>
                {[
                  { label: 'Regular Batch', desc: '6–9 month comprehensive prep', tag: 'Most Popular', tagColor: 'var(--blue)' },
                  { label: 'Weekend Batch', desc: 'For working professionals', tag: 'Flexible', tagColor: '#7C3AED' },
                  { label: 'Crash Course', desc: 'Fast-track intensive session', tag: 'Quick', tagColor: '#EA580C' },
                ].map((b) => (
                  <div key={b.label} style={{ padding: '12px 0', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <div style={{ fontWeight: 600, fontSize: 14, color: 'var(--slate)' }}>{b.label}</div>
                      <div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{b.desc}</div>
                    </div>
                    <span style={{ background: `${b.tagColor}18`, color: b.tagColor, borderRadius: 'var(--r-full)', padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>{b.tag}</span>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <style>{`
        @media (max-width: 900px) {
          .nimcet-layout { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
