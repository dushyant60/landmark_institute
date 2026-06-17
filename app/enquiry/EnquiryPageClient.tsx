'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
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

const courses = [
  '1 Year Online NIMCET Batch',
  'Regular Offline Batch (Delhi)',
  'Weekend Online Batch',
  'Crash Course (3-4 Months)',
  'CUET PG MCA Batch',
  'DU MCA Preparation',
  'Test Series Only',
];

export default function EnquiryPageClient() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', phone: '', email: '', course: '', city: '', message: '' });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <Topbar />
      <Navbar />

      <style dangerouslySetInnerHTML={{
        __html: `
        .enq-hero {
          background: linear-gradient(135deg, #0A1628 0%, #1a3360 100%);
          padding: 60px 0 40px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .enq-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(59,130,246,0.18) 0%, transparent 60%);
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
          margin-bottom: 16px;
        }
        .enq-hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(24px, 4vw, 42px);
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
        }
        .enq-hero h1 .accent { color: #60A5FA; }
        .enq-hero p { font-size: 15px; color: #94A3B8; max-width: 560px; margin: 0 auto; line-height: 1.65; }
        .enq-section { padding: 60px 0 80px; background: var(--bg); }

        .enq-layout {
          display: grid;
          grid-template-columns: 1fr 360px;
          gap: 40px;
          align-items: start;
        }

        .enq-form-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 36px;
          box-shadow: 0 4px 24px rgba(0,0,0,0.06);
        }
        .enq-form-card h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: var(--slate);
          margin-bottom: 6px;
        }
        .enq-form-card > p { font-size: 14px; color: var(--text-muted); margin-bottom: 28px; }

        .field-group {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        .field { margin-bottom: 16px; }
        .field label {
          display: block;
          font-size: 12px;
          font-weight: 700;
          color: var(--text-muted);
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 6px;
        }
        .field input,
        .field select,
        .field textarea {
          width: 100%;
          border: 1.5px solid var(--border);
          border-radius: var(--r-sm);
          padding: 10px 14px;
          font-size: 14px;
          font-family: 'Inter', sans-serif;
          color: var(--text);
          outline: none;
          transition: 0.15s;
          background: #fff;
          appearance: none;
        }
        .field input:focus,
        .field select:focus,
        .field textarea:focus {
          border-color: var(--blue);
          box-shadow: 0 0 0 3px rgba(11,94,215,0.1);
        }
        .field textarea { resize: vertical; min-height: 90px; }

        .success-box {
          text-align: center;
          padding: 40px 20px;
        }
        .success-icon-circle {
          width: 72px; height: 72px;
          border-radius: 50%;
          background: #DCFCE7;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 16px;
          font-size: 32px;
        }
        .success-box h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: var(--slate);
          margin-bottom: 10px;
        }
        .success-box p { font-size: 14px; color: var(--text-muted); line-height: 1.6; }

        .enq-sidebar > div {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 24px;
          margin-bottom: 20px;
        }
        .enq-sidebar h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--slate);
          margin-bottom: 14px;
          padding-bottom: 12px;
          border-bottom: 1px solid var(--border-light);
        }
        .contact-row {
          display: flex;
          gap: 10px;
          align-items: flex-start;
          margin-bottom: 14px;
          font-size: 13.5px;
          color: var(--slate-mid);
        }
        .contact-row span:first-child { font-size: 18px; flex-shrink: 0; }

        @media (max-width: 900px) {
          .enq-layout { grid-template-columns: 1fr; }
          .field-group { grid-template-columns: 1fr; }
        }
      `}} />

      <div className="enq-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.span variants={fadeUp} className="page-badge">📋 Enquiry</motion.span>
            <motion.h1 variants={fadeUp}>
              Enquire About <span className="accent">MCA Entrance</span><br />Coaching Courses
            </motion.h1>
            <motion.p variants={fadeUp}>
              Fill in your details below and our counsellors will call you back within 24 hours with personalized course recommendations.
            </motion.p>
          </motion.div>
        </div>
        <div style={{ height: '40px', marginTop: '24px' }}>
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" fill="var(--bg)" style={{ width: '100%', height: '100%' }}>
            <path d="M0,40 L0,20 Q720,0 1440,20 L1440,40 Z" />
          </svg>
        </div>
      </div>

      <section className="enq-section">
        <div className="container">
          <div className="enq-layout">
            <motion.div className="enq-form-card" variants={fadeUp} initial="hidden" animate="show">
              {submitted ? (
                <div className="success-box">
                  <div className="success-icon-circle">✅</div>
                  <h3>Enquiry Submitted!</h3>
                  <p>Thank you for reaching out. Our counsellor will call you within 24 hours to discuss your course options.</p>
                  <Link href="/" className="btn btn-primary" style={{ display: 'inline-block', marginTop: '20px' }}>Back to Home</Link>
                </div>
              ) : (
                <>
                  <h2>Send Your Enquiry</h2>
                  <p>All fields marked * are required. We respect your privacy.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="field-group">
                      <div className="field">
                        <label>Full Name *</label>
                        <input required type="text" placeholder="Your full name" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                      </div>
                      <div className="field">
                        <label>Phone Number *</label>
                        <input required type="tel" placeholder="+91 98XXXXXX00" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                      </div>
                    </div>
                    <div className="field-group">
                      <div className="field">
                        <label>Email Address</label>
                        <input type="email" placeholder="you@example.com" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                      </div>
                      <div className="field">
                        <label>Your City *</label>
                        <input required type="text" placeholder="City, State" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} />
                      </div>
                    </div>
                    <div className="field">
                      <label>Course Interested In *</label>
                      <select required value={form.course} onChange={e => setForm({ ...form, course: e.target.value })}>
                        <option value="">Select a course…</option>
                        {courses.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                    </div>
                    <div className="field">
                      <label>Message (Optional)</label>
                      <textarea placeholder="Any specific questions or requirements?" value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                    </div>
                    <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', display: 'flex', fontSize: '15px', padding: '14px' }}>
                      Submit Enquiry →
                    </button>
                  </form>
                </>
              )}
            </motion.div>

            <div className="enq-sidebar">
              <div>
                <h3>📞 Contact Us Directly</h3>
                <div className="contact-row"><span>📱</span><div><strong>Phone / WhatsApp</strong><br />+91 9999992338</div></div>
                <div className="contact-row"><span>✉️</span><div><strong>Email</strong><br />info@landmarkinstitute.com</div></div>
                <div className="contact-row"><span>📍</span><div><strong>Address</strong><br />Ground Floor, 3/24, Block 1, West Patel Nagar, Patel Nagar, New Delhi -110008</div></div>
              </div>
              <div>
                <h3>🎯 Quick Links</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {[
                    ['View All Courses', '/our-courses/'],
                    ['NIMCET 2026 Info', '/nimcet'],
                    ['Download Syllabus', '/syllabus'],
                    ['See Results', '/results'],
                  ].map(([l, h]) => (
                    <Link key={l} href={h} style={{ fontSize: '13.5px', color: 'var(--blue)', fontWeight: 600, textDecoration: 'none' }}>→ {l}</Link>
                  ))}
                </div>
              </div>
              <div style={{ background: 'linear-gradient(135deg, #0F1A2E, #1a3360)', color: '#fff' }}>
                <h3 style={{ color: '#60A5FA', borderBottomColor: 'rgba(255,255,255,0.1)' }}>⭐ Why Landmark?</h3>
                {['17+ years of excellence', '6000+ students trained', '500+ NIT selections', 'AIR 1, 2, 4 in NIMCET 2025', 'Online & Offline batches'].map(t => (
                  <div key={t} style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '8px', display: 'flex', gap: '8px' }}>
                    <span style={{ color: '#10B981' }}>✓</span>{t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
