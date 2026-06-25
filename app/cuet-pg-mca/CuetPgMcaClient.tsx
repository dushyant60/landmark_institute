'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';

const faqData = [
  {
    q: 'Which is the best coaching for CUET PG MCA?',
    a: 'Students should evaluate faculty quality, study material, mock tests, and student support before choosing a coaching institute. Landmark Institute is a preferred choice among many MCA aspirants.',
  },
  {
    q: 'Is CUET PG MCA Online Coaching effective?',
    a: 'Yes. Quality online coaching programs provide live classes, recorded lectures, mock tests, and doubt-solving support, making them highly effective.',
  },
  {
    q: 'When should I start CUET PG Preparation?',
    a: 'Ideally, students should begin preparation 8–10 months before the examination.',
  },
  {
    q: 'Are CUET PG Online Courses suitable for working professionals?',
    a: 'Yes. Flexible schedules and recorded sessions make online courses suitable for working professionals.',
  },
  {
    q: 'How important are mock tests for CUET PG Exam Preparation?',
    a: 'Mock tests improve speed, accuracy, confidence, and time management while helping students identify weak areas.',
  },
  {
    q: 'Can I prepare for CUET PG MCA without coaching?',
    a: 'Yes. However, coaching provides structured guidance, expert mentorship, quality study material, and performance tracking that many students find beneficial.',
  },
];
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

const topUniversities = ['JNU', 'BHU', 'Delhi University', 'HCU', 'Pondicherry University', 'BBAU'];

const eligibilityPoints = [
  "Bachelor's degree in any discipline from a recognized university",
  "Mathematics as a subject at 10+2 level or at Graduation level",
  "Minimum 50% marks (45% for reserved categories) in graduation",
  "No age limit specified by NTA for CUET PG MCA",
];

export default function CuetPgMcaClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const htmlContent = `
<p><img src="/images/migrated/best-cuet-pg-mca-coaching-delhi-online-2027-300x156.jpeg" alt="Best CUET PG MCA Coaching in Delhi and Online by Landmark Institute for CUET PG Preparation" style="max-width: 100%; height: auto; border-radius: var(--r-sm); margin: 24px 0; display: block;" /></p>
<h2>Looking for the Best CUET PG MCA Coaching?</h2>
<p><span>If you are searching for the </span><strong><span>Best CUET PG MCA Coaching</span></strong><span> to achieve your MCA admission goals, you are already taking an important step in the right direction. Every year, thousands of students appear for the CUET PG MCA examination with the dream of securing admission to top universities. However, with increasing competition and changing exam patterns, success requires more than just self-study.</span></p>
<p><span>A structured preparation strategy, expert guidance, quality study material, regular mock tests, and continuous mentorship can significantly improve your chances of success. This is why many aspirants choose professional <strong>CUET PG MCA Coaching</strong> programs to strengthen their preparation and stay ahead of the competition.</span></p>
<p><span>Whether you are looking for classroom coaching in Delhi or <strong>CUET PG MCA Online Coaching</strong> from anywhere in India, selecting the right institute can make a major difference in your preparation journey.</span></p>
<h2>What is CUET PG MCA?</h2>
<p><span>CUET PG MCA is an entrance examination conducted for admission into Master of Computer Applications (MCA) programs offered by participating universities. The examination evaluates a candidate’s aptitude, reasoning ability, mathematical skills, and analytical thinking.</span></p>
<p><span>As competition continues to grow, students need a focused approach toward </span><strong><span>CUET PG Preparation</span></strong><span>. A well-planned preparation strategy can help candidates improve their scores and secure admission to their preferred university.</span></p>
<h2>Why Students Need Professional CUET PG MCA Coaching</h2>
<p><span>Many students begin preparation independently but often face challenges such as:</span></p>
<ul>
<li><span>Lack of a structured study plan</span></li>
<li><span>Difficulty understanding important concepts</span></li>
<li><span>Limited access to quality practice material</span></li>
<li><span>Poor time management</span></li>
<li><span>Inconsistent preparation</span></li>
<li><span>Lack of expert guidance</span></li>
</ul>
<p><span>A professional </span><strong><span>CUET PG Coaching</span></strong><span> program helps students overcome these challenges by providing a clear roadmap, expert mentorship, and exam-oriented preparation techniques.</span></p>
<p><span>Benefits of joining coaching include:</span></p>
<ul>
<li><span>Systematic learning</span></li>
<li><span>Regular assessments</span></li>
<li><span>Updated study material</span></li>
<li><span>Mock test practice</span></li>
<li><span>Performance tracking</span></li>
<li><span>Doubt-clearing support</span></li>
</ul>
<h2>Why Landmark Institute is Considered the Best Coaching for CUET PG MCA</h2>
<p><span>Choosing the right coaching institute is one of the most important decisions for any MCA aspirant.</span></p>
<p><span>Landmark Institute has established itself as a trusted name among students preparing for MCA entrance examinations. The institute focuses on providing quality education, exam-oriented preparation, and individual student support.</span></p>
<h3><span>Specialized Focus on MCA Entrance Exams</span></h3>
<p><span>Unlike many institutes that prepare students for multiple unrelated examinations, Landmark Institute maintains a strong focus on <a href="../">MCA entrance preparation</a>.</span></p>
<p><span>This specialized approach helps students receive:</span></p>
<ul>
<li><span>Targeted preparation strategies</span></li>
<li><span>Updated exam-specific content</span></li>
<li><span>Relevant practice questions</span></li>
<li><span>Focused mentorship</span></li>
</ul>
<p><span>Students preparing for </span><strong><span>CUET PG MCA Coaching</span></strong><span> benefit from a curriculum designed specifically for MCA entrance success.</span></p>
<h2>Experienced Faculty for CUET PG MCA Preparation</h2>
<p><span>Faculty quality plays a crucial role in competitive examination success.</span></p>
<p><span>At Landmark Institute, students learn from experienced mentors who simplify complex concepts and provide practical problem-solving techniques.</span></p>
<h3><span>Quantitative Aptitude</span></h3>
<p><span>Students receive guidance in:</span></p>
<ul>
<li><span>Arithmetic</span></li>
<li><span>Algebra</span></li>
<li><span>Number Systems</span></li>
<li><span>Geometry</span></li>
<li><span>Modern Mathematics</span></li>
<li><span>Data Interpretation</span></li>
</ul>
<h3><span>Logical Reasoning</span></h3>
<p><span>The reasoning section often becomes a scoring area for prepared candidates.</span></p>
<p><span>Topics covered include:</span></p>
<ul>
<li><span>Analytical Reasoning</span></li>
<li><span>Coding-Decoding</span></li>
<li><span>Blood Relations</span></li>
<li><span>Puzzles</span></li>
<li><span>Series</span></li>
<li><span>Seating Arrangements</span></li>
</ul>
<h3><span>Computer Science Concepts</span></h3>
<p><span>Students also strengthen their understanding of:</span></p>
<ul>
<li><span>Data Structures</span></li>
<li><span>Operating Systems</span></li>
<li><span>Programming Fundamentals</span></li>
<li><span>Database Management Systems</span></li>
<li><span>Computer Organization</span></li>
</ul>
<h2><strong>Best CUET PG MCA Online Coaching for Students Across India</strong></h2>
<p><span>The popularity of </span><strong><span>CUET PG MCA Online Coaching</span></strong><span> has increased significantly over the last few years.</span></p>
<p><span>Students now prefer flexible learning options that allow them to prepare from home while accessing expert faculty and quality study resources.</span></p>
<h3><span>Benefits of CUET PG MCA Online Coaching</span></h3>
<ul>
<li><span>Learn from anywhere in India</span></li>
<li><span>Save travel time</span></li>
<li><span>Access recorded lectures</span></li>
<li><span>Attend live interactive sessions</span></li>
<li><span>Flexible study schedules</span></li>
<li><span>Easy revision of concepts</span></li>
</ul>
<p><span>For students living outside Delhi, </span><strong><span>CUET PG Online Coaching India</span></strong><span> provides access to expert guidance without relocation.</span></p>
<h2><strong>CUET PG Online Coaching – Start Early for Better Results</strong></h2>
<p><span>Students targeting <strong>CUET PG Online Coaching</strong> should begin preparation as early as possible.</span></p>
<p><span>Early preparation allows students to:</span></p>
<ul>
<li><span>Build strong fundamentals</span></li>
<li><span>Complete the syllabus comfortably</span></li>
<li><span>Practice more mock tests</span></li>
<li><span>Improve speed and accuracy</span></li>
<li><span>Revise multiple times before the examination</span></li>
</ul>
<p><span>Experts recommend beginning serious preparation at least 8–10 months before the examination date.</span></p>
<h2><strong>Best CUET PG Online Coaching in India – What Should You Look For?</strong></h2>
<p><span>When selecting the </span><strong><span>Best CUET PG Online Coaching in India</span></strong><span>, students should evaluate several important factors.</span></p>
<h3><span>Faculty Experience</span></h3>
<p><span>Teachers should possess deep subject knowledge and experience in MCA entrance preparation.</span></p>
<h3><span>Updated Study Material</span></h3>
<p><span>Study resources must align with the latest examination pattern.</span></p>
<h3><span>Quality Mock Tests</span></h3>
<p><span>Mock tests should closely resemble the actual examination.</span></p>
<h3><span>Student Support</span></h3>
<p><span>Regular doubt-solving sessions and mentorship significantly improve learning outcomes.</span></p>
<h3><span>Flexible Learning Options</span></h3>
<p><span>Access to live classes and recorded lectures ensures uninterrupted preparation.</span></p>
<h2><strong>Comprehensive CUET PG MCA Courses</strong></h2>
<p><span>Quality </span><strong><span>CUET PG MCA Courses</span></strong><span> should include complete preparation support rather than just classroom teaching.</span></p>
<p><span>An ideal course should offer:</span></p>
<h3><span>Concept Building</span></h3>
<p><span>Strong fundamentals are essential for solving advanced questions.</span></p>
<h3><span>Topic-Wise Practice</span></h3>
<p><span>Regular practice improves confidence and accuracy.</span></p>
<h3><span>Mock Test Series</span></h3>
<p><span>Students gain experience handling exam pressure and managing time.</span></p>
<h3><span>Performance Analysis</span></h3>
<p><span>Detailed feedback helps identify strengths and weaknesses.</span></p>
<h3><span>Revision Programs</span></h3>
<p><span>Revision sessions help students retain important concepts and formulas.</span></p>
<h2><strong>Effective CUET PG Exam Preparation Strategy</strong></h2>
<p><span>A strategic approach is essential for achieving a competitive score.</span></p>
<h3><span>Understand the Exam Pattern</span></h3>
<p><span>Students should first understand:</span></p>
<ul>
<li><span>Examination structure</span></li>
<li><span>Important topics</span></li>
<li><span>Subject weightage</span></li>
<li><span>Question types</span></li>
</ul>
<h3><span>Create a Study Plan</span></h3>
<p><span>A realistic timetable ensures consistent progress.</span></p>
<p><span>Allocate dedicated study hours for:</span></p>
<ul>
<li><span>Mathematics</span></li>
<li><span>Logical Reasoning</span></li>
<li><span>Computer Science</span></li>
<li><span>Revision</span></li>
<li><span>Mock Tests</span></li>
</ul>
<h3><span>Solve Previous Year Papers</span></h3>
<p><span>Previous year questions help students understand:</span></p>
<ul>
<li><span>Frequently asked topics</span></li>
<li><span>Difficulty levels</span></li>
<li><span>Exam trends</span></li>
</ul>
<h3><span>Practice Mock Tests Regularly</span></h3>
<p><span>Mock tests are among the most important components of successful <a href="../cuet-pg-previous-year-question-papers/"><strong><span>CUET PG Exam Preparation</span></strong></a>.</span></p>
<p><span>Benefits include:</span></p>
<ul>
<li><span>Improved confidence</span></li>
<li><span>Better time management</span></li>
<li><span>Increased speed</span></li>
<li><span>Enhanced accuracy</span></li>
</ul>
<h3><span>Revise Frequently</span></h3>
<p><span>Regular revision strengthens retention and reduces mistakes during the examination.</span></p>
<h2><strong>Common Mistakes to Avoid During CUET PG Preparation</strong></h2>
<p><span>Many students make avoidable mistakes that negatively affect their performance.</span></p>
<h3><span>Ignoring Basics</span></h3>
<p><span>Strong fundamentals are essential for success.</span></p>
<h3><span>Delaying Preparation</span></h3>
<p><span>Starting late often creates unnecessary pressure.</span></p>
<h3><span>Skipping Mock Tests</span></h3>
<p><span>Mock tests provide valuable exam experience.</span></p>
<h3><span>Lack of Revision</span></h3>
<p><span>Without revision, students may forget important concepts.</span></p>
<h3><span>Not Analyzing Mistakes</span></h3>
<p><span>Every test should be reviewed carefully to identify improvement areas.</span></p>
<h2><strong>Benefits of CUET PG Online Courses</strong></h2>
<p><span>Modern students increasingly prefer </span><strong><span>CUET PG Online Courses</span></strong><span> because they provide flexibility and convenience.</span></p>
<p><span>Advantages include:</span></p>
<ul>
<li><span>Learn from home</span></li>
<li><span>Flexible schedules</span></li>
<li><span>Recorded lectures</span></li>
<li><span>Cost-effective preparation</span></li>
<li><span>Access to expert faculty</span></li>
</ul>
<p><span>Online learning has become an effective alternative to traditional classroom coaching.</span></p>
<h2><strong>Importance of Mock Tests in CUET PG MCA Preparation</strong></h2>
<p><span>Mock tests are one of the most valuable preparation tools.</span></p>
<p><span>Regular mock test practice helps students:</span></p>
<ul>
<li><span>Improve speed</span></li>
<li><span>Increase accuracy</span></li>
<li><span>Build confidence</span></li>
<li><span>Manage examination pressure</span></li>
<li><span>Identify weak areas</span></li>
</ul>
<p><span>Students should attempt full-length mock tests regularly and analyze their performance after each attempt.</span></p>
<h2><strong>Student Support and Mentorship</strong></h2>
<p><span>Competitive exam preparation often requires continuous motivation and guidance.</span></p>
<p><span>Landmark Institute supports students through:</span></p>
<ul>
<li><span>Doubt-clearing sessions</span></li>
<li><span>Performance reviews</span></li>
<li><span>Personalized mentoring</span></li>
<li><span>Academic guidance</span></li>
<li><span>Study planning assistance</span></li>
</ul>
<p><span>This student-focused approach helps aspirants remain consistent throughout their preparation journey.</span></p>
<h2><strong>Who Should Join CUET PG MCA Coaching?</strong></h2>
<h3><span>Final-Year Students</span></h3>
<p><span>Students planning immediate MCA admission after graduation.</span></p>
<h3><span>Working Professionals</span></h3>
<p><span>Candidates balancing job responsibilities and entrance preparation.</span></p>
<h3><span>Repeat Aspirants</span></h3>
<p><span>Students aiming to improve previous scores.</span></p>
<h3><span>Beginners</span></h3>
<p><span>Candidates unfamiliar with the examination pattern and syllabus.</span></p>
<h2><strong>Career Opportunities After MCA</strong></h2>
<p><span>A strong CUET PG score can open the door to quality MCA programs and excellent career opportunities.</span></p>
<p><span>Popular career paths include:</span></p>
<ul>
<li><span>Software Developer</span></li>
<li><span>Data Analyst</span></li>
<li><span>Full Stack Developer</span></li>
<li><span>Web Developer</span></li>
<li><span>Cloud Engineer</span></li>
<li><span>Cybersecurity Specialist</span></li>
<li><span>System Analyst</span></li>
<li><span>Database Administrator</span></li>
</ul>
<p><span>The IT industry continues to offer strong career growth and attractive salary opportunities for MCA graduates.</span></p>
<h2><strong>Why Students Choose Landmark Institute for CUET PG Coaching</strong></h2>
<p><span>Students often prefer Landmark Institute because of:</span></p>
<ul>
<li><span>Specialized MCA entrance coaching</span></li>
<li><span>Experienced faculty</span></li>
<li><span>Comprehensive study material</span></li>
<li><span>Regular mock tests</span></li>
<li><span>Personalized mentorship</span></li>
<li><span>Online and offline learning modes</span></li>
<li><span>Affordable fee structure</span></li>
<li><span>Student-centric teaching methodology</span></li>
</ul>
<p><span>These features help create an effective learning environment for MCA aspirants.</span></p>
<h2><strong>Final Thoughts</strong></h2>
<p><span>Success in CUET PG MCA requires dedication, consistency, proper guidance, and smart preparation. While self-study plays an important role, a structured coaching program can help students stay focused and improve their performance through expert mentorship and regular assessments.</span></p>
<p><span>Whether you are searching for </span><strong><span>CUET PG MCA Coaching</span></strong><span>, </span><strong><span>CUET PG MCA Online Coaching</span></strong><span>, </span><strong><span>CUET PG Online Coaching India</span></strong><span>, or comprehensive </span><strong><span>CUET PG Online Courses</span></strong><span>, selecting the right institute can significantly improve your preparation journey.</span></p>
<p><span>Landmark Institute continues to support MCA aspirants through quality education, experienced faculty, comprehensive study resources, and exam-oriented preparation strategies designed to help students achieve their academic goals.</span></p>
<p><span></span></p>
`;

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
              CUET PG MCA <span className="accent">Coaching</span>
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="hero-sub"
              style={{ marginBottom: '28px' }}
            >
              Crack the CUET PG MCA entrance exam with India&apos;s trusted online and classroom coaching. Expert faculty, live sessions, and full-length mock tests.
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
                <div className="hero-stat-num">75<span>Q</span></div>
                <div className="hero-stat-label">Total Questions</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">105<span>m</span></div>
                <div className="hero-stat-label">Test Duration</div>
              </div>
              <div className="hero-stat">
                <div className="hero-stat-num">100<span>+</span></div>
                <div className="hero-stat-label">Accepting Univ.</div>
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

              {/* Interactive FAQ */}
              <motion.section
                variants={stagger}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
                style={{ marginTop: '48px' }}
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

              {/* Top Universities */}
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
              >
                <h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
                  🏛 Top CUET PG Universities
                </h3>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {topUniversities.map((uni) => (
                    <span key={uni} style={{ background: 'var(--blue-light)', color: 'var(--blue)', borderRadius: 'var(--r-full)', padding: '5px 12px', fontSize: 12.5, fontWeight: 600 }}>{uni}</span>
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
                  Start Your CUET PG Journey
                </h3>
                <p style={{ fontSize: 13.5, color: '#94A3B8', marginBottom: 20, lineHeight: 1.6 }}>
                  Crack CUET PG MCA with Landmark&apos;s specialized prep program. Get structured study guides, live lessons, and weekly mock tests.
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
                  { label: 'Hybrid Batch', desc: 'For working professionals', tag: 'Flexible', tagColor: '#7C3AED' },
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
