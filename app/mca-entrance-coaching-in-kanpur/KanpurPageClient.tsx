'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const topExams = ['NIMCET', 'CUET PG MCA', 'MAH MCA CET', 'IPU CET'];

const eligibilityPoints = [
  "Bachelor's degree (3-year full-time) from a recognized university",
  "60% marks in graduation (55% for SC/ST) with Mathematics as a subject",
  "BE/BTech students from recognized universities can also apply",
  "Final-year appearing students are also eligible to apply",
];

export default function KanpurPageClient() {
  const htmlContent = `<figure><img src="/images/migrated/MCA-Entrance-Coaching-in-Kanpur-1024x577.jpg" alt="MCA Entrance Coaching in Kanpur" style="max-width: 100%; height: auto; border-radius: var(--r-sm); margin: 24px 0; display: block;" /></figure>

<p>Are you planning to crack the <strong>MCA entrance in Kanpur</strong> and go to top level universities like NITs, DU or JNU? Then you probably know how difficult the competition is. Where there is a difference in expert guidance. And when it comes to <strong>MCA entrance coaching in Kanpur</strong>, the Landmark Institute is the best.</p>

<h2>Why choose MCA?</h2>

<h3>Career scope after MCA</h3>

<p>MCA opens the doors to a wide range of career paths in software development and data science. And if you are aiming for government jobs or MNC roles, having a degree from a top university helps a lot.</p>

<h3>Top MCA Entrance Exams</h3>

<ul>
<li><strong>NIMCET</strong> – For admission to NITs</li>
</ul>

<ul>
<li><strong>DUET</strong> – Delhi University MCA</li>
</ul>

<ul>
<li><strong>JNU Entrance Exam</strong></li>
</ul>

<ul>
<li><strong>IPU CET</strong>, <strong>BHU</strong>, and more</li>
</ul>

<p>But to crack them, you need more than talent - you need preparation with intentions.</p>

<h2>Why You Need MCA Coaching in Kanpur</h2>

<p>Let's be honest - moving forward can be heavy. You need:</p>

<ul>
<li>Structured study plans</li>
</ul>

<ul>
<li>Regular evaluation</li>
</ul>

<ul>
<li>Concentrated guidance</li>
</ul>

<p>This is the reason that admission to a top institution offering MCA coaching in Kanpur can increase your chances of success.</p>

<h2>Kanpur: A growing Education Hub</h2>

<p>Kanpur is no longer about industries - it has quickly become a hotspot for students targeting competitive exams. The city provides affordable education, increasing number of coaching institutes and a strong educational community. No wonder more students are choosing MCA entrance coaching in Kanpur.</p>

<h2>Why Landmark Institute?</h2>

<p>With more than 17 years of experience, the Landmark Institute has become a prominent name in NIMCET coaching in Kanpur and other MCA entrance coaching programs. Their success rate, dedication and personal views make them a favorite option for students not only in Kanpur, but also from neighboring cities.</p>

<h2>Courses Offered</h2>

<h4>Regular classroom program</h4>

<p>The best for those students who want a full, depth preparation in all MCA entrance exams.</p>

<h4>crash course</h4>

<p>Less on time? No problem. Crash course helps you to modify and practice intensively.</p>

<h4>Weekend classes</h4>

<p>Perfect for college students or working professionals who require flexibility without compromising quality.</p>

<p><strong>Whether you are aiming for Nimcet, DU, or JNU, the landmark has covered you.</strong></p>

<h2>MCA Entrance Exams Covered</h2>

<ul>
<li><strong>NIMCET Coaching in Kanpur</strong></li>
</ul>

<ul>
<li><strong>DU MCA Coaching</strong></li>
</ul>

<ul>
<li><strong>JNU, BHU, Jamia, IPU Coaching</strong></li>
</ul>

<ul>
<li>All other national-level MCA entrances</li>
</ul>

<p>With university-specific strategies, students are trained to master every pattern and course.</p>

<h2>Faculty and guidance</h2>

<p>The faculty of the landmark consists of experienced teachers and subject experts who have helped hundreds of students clear mca entrance in kanpur and beyond MCA entrance. Ensure one-on-one mentoring and regular response to you stay on the track.</p>

<h2>Top Study Materials</h2>

<ul>
<li>Full course coverage</li>
</ul>

<ul>
<li>Practice letters and test series</li>
</ul>

<ul>
<li>Regular quiz and mock test</li>
</ul>

<ul>
<li>Update notes aligned with latest exam pattern</li>
</ul>

<h2>Success speaks for herself</h2>

<p>From Nimcet Air-4 to DU and BHU rankers, the Landmark Institute has produced several toppers. Their students consistently perform in national level examinations, validate the institute's teaching quality and commitment.</p>

<h2>Tips to crack Nimcet Coaching in Kanpur</h2>

<ul>
<li>Start early-Settlement beats the last-end pressure</li>
</ul>

<ul>
<li>Pay attention to mathematics and Reasoning</li>
</ul>

<ul>
<li>Practice previous years papers</li>
</ul>

<ul>
<li>Take weekly mocks to improve speed and accuracy</li>
</ul>

<h2>Conclusion</h2>

<p>If you are ready to crack the MCA entrance in Kanpur and secure admission to your dream university, then you need a launchpad. With its expert faculty, focused study plans and heritage of success, it is a Go-to Destination for MCA entrance coaching in Kanpur.</p>`;

  return (
    <>
      <Topbar />
      <Navbar />

      {/* ── HERO ── */}
      <div className="hero" style={{ padding: '56px 0 0', overflow: 'hidden' }}>
        <motion.div
          className="container"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', maxWidth: '680px' }}>
            <motion.span variants={fadeUp} className="hero-badge">
              <span /> Landmark Institute
            </motion.span>
            <motion.h1
              variants={fadeUp}
              style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-1px' }}
            >
              MCA Coaching in <span className="accent">Kanpur</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="hero-sub"
              style={{ marginBottom: '28px' }}
            >
              Empower your MCA entrance preparation in Kanpur. Expert guidance, comprehensive mocks, and one-on-one mentorship for NIMCET, JNU, and DU.
            </motion.p>
            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
              <a href="/contactus/" className="btn btn-green btn-lg">Enroll Now — Demo</a>
              <a href="/our-courses" className="btn btn-outline btn-lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>View Courses</a>
            </motion.div>
          </div>

          {/* Stats strip */}
          <motion.div
            variants={fadeUp}
            className="hero-stats"
            style={{ maxWidth: '680px', marginBottom: '0' }}
          >
            <div className="hero-stat">
              <div className="hero-stat-num">500<span>+</span></div>
              <div className="hero-stat-label">NIT Selections</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">85<span>%</span></div>
              <div className="hero-stat-label">Success Rate</div>
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

              {/* Top Exams */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
              >
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
                  📝 Top MCA Exams Covered
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {topExams.map((exam) => (
                    <span key={exam} style={{ background: 'var(--blue-light)', color: 'var(--blue)', borderRadius: 'var(--r-full)', padding: '5px 12px', fontSize: 12.5, fontWeight: 600 }}>{exam}</span>
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
                  Start Your Kanpur Journey
                </h3>
                <p style={{ fontSize: 13.5, color: '#94A3B8', marginBottom: 20, lineHeight: 1.6 }}>
                  Book a free demo session at our Kanpur center or online. Prepare with veteran faculty and top rankers.
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
