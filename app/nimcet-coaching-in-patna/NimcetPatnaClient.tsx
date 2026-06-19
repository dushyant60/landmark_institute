'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ContactForm from '@/components/ContactForm';

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const topNITs = ['NIT Trichy', 'NIT Warangal', 'NIT Surathkal', 'NIT Calicut', 'NIT Allahabad', 'NIT Rourkela'];

const eligibilityPoints = [
  "Bachelor's degree (3-year full-time) from a recognized university",
  "60% marks in graduation (or 6.5 CGPA) with Mathematics / Statistics / Business Maths",
  "Only Indian citizens are eligible to apply",
  "Final-year appearing students are also eligible",
];

export default function NimcetPatnaClient() {
  const htmlContent = `<figure><img src="/images/migrated/1-Best-Nimcet-Coaching-in-Patna-1024x577.jpg" alt="#1 Best Nimcet Coaching in Patna" style="max-width: 100%; height: auto; border-radius: var(--r-sm); margin: 24px 0; display: block;" /></figure>

<p>If you are looking for the best <strong>Nimcet coaching in Patna</strong>, then you have landed on the right page. In Bihar and neighboring states, MCA candidates have a landmark institute trust for extensive MCA coaching in Patna which provides real results. if either you are targeting NIMCET or other top <strong>MCA entrance exams</strong>, the landmark institute offers expert assistance and smart strategies to help you reach your goals.</p>

<h2>Why choose Patna for MCA Entrance coaching?</h2>

<p>Patna has emerged as a strong contender in the education sector. For students seeking <strong>MCA coaching in Patna</strong>, the city offers top coaching institutes such as Landmark Institute without high cost of large metro.</p>

<h2>Advantages Over Metro Cities</h2>

<ul>
<li>Cost-affect and result of conducting education</li>
</ul>

<ul>
<li>Proximity to home</li>
</ul>

<ul>
<li>Well -connected transport</li>
</ul>

<ul>
<li>Easy access to educational resources</li>
</ul>

<h2>Overview of NIMCET Exam</h2>

<h3>What is Nimcet?</h3>

<p>Nimcet is the key to obtaining admission to the top NIT for MCA. It is a competitive national-level test, and requires strategic preparation to crack it. Some <strong>NIMCET coaching in patna </strong>can help you master.</p>

<h3>Exam Pattern and Course</h3>

<ul>
<li>Mathematics: 50 questions</li>
</ul>

<ul>
<li>Analytical Ability &amp; Logical Reasoning: 40 Questions</li>
</ul>

<ul>
<li>Computer Awareness: 10 Questions</li>
</ul>

<ul>
<li>English: 20 questions</li>
</ul>

<h3>Eligibility</h3>

<p>Students with a bachelor's degree and mathematics as a subject are eligible to apply.</p>

<h2>Introduction to Landmark Institute, Patna</h2>

<h3>Background and Legacy</h3>

<p>A reliable name in MCA coaching in Patna, the Landmark Institute has helped hundreds of students to secure the top rank in Nimcet and other MCA exams.</p>

<h3>mission and vision</h3>

<p>The mission of the landmark is simple: to provide high quality, inexpensive and accessible coaching for each serious MCA aspirant.</p>

<h2>Why Landmark Institute is the best for Nimcet coaching in Patna</h2>

<h3>Expert Faculty</h3>

<p>The veteran teachers of the landmark explain the crystals to the concepts. His deep understanding of the examination gives students a true competitive lead in NIMCET coaching in Patna.</p>

<h3>Result-Driven Classes</h3>

<p>With a mixture of live lectures, doubt sessions and tests, students on the landmark get exactly what they need to succeed.</p>

<h3>Weekly Mock Test</h3>

<p>Get real -time reaction to your performance through regular mock exams designed to mimic the actual Nimcet pattern.</p>

<h3>Personal Mentarship</h3>

<p>The size of the small square ensures that no student is left behind - each receives personal advice.</p>

<h3>Targeted Study Material</h3>

<p>The study material is especially sewn for <strong>MCA coaching in Patna</strong>, making sure that you spend in the study is efficient and effective every minute.</p>

<h2>Special Focus on NIMCET Preparation</h2>

<p>Landmark Institute <strong>NIMCET coaching in Patna</strong> is beyond basic teaching:</p>

<ul>
<li>Concept clarification from the ground up</li>
</ul>

<ul>
<li>Quick revision notes for last-minute prep</li>
</ul>

<ul>
<li>Mock drills to improve accuracy and speed</li>
</ul>

<h2>Other MCA Entrance Exams Covered</h2>

<ul>
<li>CUET PG MCA</li>
</ul>

<ul>
<li>BHU PET</li>
</ul>

<ul>
<li>JNU MCA</li>
</ul>

<ul>
<li>IPU CET</li>
</ul>

<ul>
<li>MAH CET</li>
</ul>

<h2>Affordable Fees Structure</h2>

<p>There is no need to be expensive quality education. Landmark provides one of the most budget -friendly options for MCA coaching in Patna with easy EMI and scholarship.</p>

<h2>Final Thoughts</h2>

<p>When it comes to <strong>MCA coaching in Patna</strong>, the landmark institute is unmatched in quality, stability and student satisfaction. If you are ready to take your future seriously, enrolling on the landmark can be the smartest move you take. Take the right steps - Start your Nimet Prep today with top <strong>nimcet coaching in Patna</strong>.</p>`;

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
              NIMCET Coaching in <span className="accent">Patna</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="hero-sub"
              style={{ marginBottom: '28px' }}
            >
              Join Patna&apos;s premium MCA coaching institute. Benefit from expert mentorship, structured study material, and proven results.
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
                <div className="hero-stat-num">500<span>+</span></div>
                <div className="hero-stat-label">NIT Selections</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">24<span>/7</span></div>
                <div className="hero-stat-label">Doubt Support</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">3 <span>Types</span></div>
                <div className="hero-stat-label">Flexible Batches</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">17<span>+</span></div>
                <div className="hero-stat-label">Years Legacy</div>
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

      <main style={{ background: 'var(--bg)', paddingBottom: '80px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div className="page-content-grid">
            {/* Left Column */}
            <div>
              <motion.div
                className="prose-custom"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-100px' }}
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />
            </div>

            {/* Right Column (Sidebar CTA) */}
            <div className="page-sidebar">
              {/* Eligibility Criteria */}
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
                  {eligibilityPoints.map((pt, i) => (
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
                  Start Your Patna Journey
                </h3>
                <p style={{ fontSize: 13.5, color: '#94A3B8', marginBottom: 20, lineHeight: 1.6 }}>
                  Enquire today to book a free demo session at our Patna center or online. Start preparation with top rankers.
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

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
