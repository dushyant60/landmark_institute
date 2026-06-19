'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LeadCapturePopup from '@/components/LeadCapturePopup';
import ScrollProgressBar from '@/components/ScrollProgressBar';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

const otherPosts = [
  { title: "Best Coaching for MCA Entrance Exams", slug: "mca-entrance-exam" },
  { title: "Everything You Need to Know About MCA", slug: "everything-you-need-to-know-about-mca" },
  { title: "Don't Miss This Crash Course", slug: "dont-miss-this-crash-course-if-mca-is-your-dream" },
  { title: "Top 10 Universities in India for MCA", slug: "top-10-universities-in-india-for-mca" },
  { title: "The Hidden Merits of Pursuing MCA", slug: "the-hidden-merits-of-pursuing-mca" },
  { title: "Career Options & Jobs After MCA", slug: "what-are-the-career-options-available-after-mca" }
];

export default function EverythingMcaClient() {

  const htmlContent = `<figure style="margin: 0 0 32px 0; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-md);"><img src="/images/migrated/Everything-You-Need-to-Know-About-MCA.png" alt="Everything you need to know about MCA" style="width: 100%; height: auto; max-height: 450px; object-fit: cover; display: block;" /></figure>

<h3><strong>A brief about MCA</strong></h3>
<p>Master of Computer Application is a three-year (six semesters) professional Master's Degree in computer science awarded in India. It prepares the student to get into the IT sector through professional training and advanced learning. MCA course is all about Application Development. You are eligible for this course after obtaining a Bachelor’s Degree.</p>

<h3><strong>Why MCA</strong></h3>
<p>There is a high demand of IT professionals all over the world today. Big companies require application developers, software developers and programming experts to survive and sustain in the market. The program, mainly, aims at imparting comprehensive knowledge with equal emphasis on theory and practice. MCA is one of the rare courses that offer a wide range of specialization courses which are application based and open doors for great career opportunities and job scope.</p>
<p>Students are also provided practical and theoretical training in the fields of Systems Designing, Application Software Development, Enterprise Resource Planning, Computer Networks, System Administration, Web Designing and Development, Database Administration, Parallel and Vector Processing, Data Mining and Warehousing, etc.</p>

<h3><strong>A student can go for the following specializations in MCA:</strong></h3>
<ol>
  <li>Systems Management</li>
  <li>Systems Development</li>
  <li>Systems Engineering</li>
  <li>Application Software</li>
  <li>Internet</li>
  <li>Management Information Systems (MIS)</li>
  <li>Software Development</li>
  <li>Troubleshooting</li>
  <li>Hardware Technology</li>
  <li>Networking</li>
</ol>

<h3><strong>Its Scope</strong></h3>
<p>After completing MCA, student may choose any of the following job positions in the field of IT:</p>
<ol>
  <li>Software Programmer</li>
  <li>Software Engineer</li>
  <li>Software Developer</li>
  <li>System analysts</li>
  <li>System Designer</li>
  <li>Programmers</li>
  <li>Managers</li>
  <li>Banking</li>
  <li>Consultancies</li>
  <li>Computer and related Electronic Equipment manufacturers</li>
  <li>Database management</li>
  <li>Desktop Publishing</li>
  <li>Design Support and data Communications</li>
  <li>E-Commerce</li>
  <li>Embedded Technologies</li>
  <li>Government Agencies</li>
  <li>Software Publishers</li>
</ol>

<h3><strong>Other Skills Required:</strong></h3>
<p>Students must have in-depth knowledge of the following programming languages:</p>
<p style="background: var(--bg); padding: 12px 18px; border-left: 4px solid var(--blue); border-radius: 0 8px 8px 0; font-family: monospace;">C, C++, Java, .Net, ASP.NET, etc.</p>

<p>While for web designing field knowing the following languages is a must:</p>
<ul>
  <li>PHP, CSS, HTML, JavaScript, etc.</li>
</ul>

<p>For those who want to go in the networking field, knowing the following is mandatory:</p>
<ul>
  <li>SQL, LINUX</li>
</ul>

<h3><strong>Best MCA colleges in India</strong></h3>
<p>Without a formal degree and qualification no company would offer you a good post. Therefore, if working in the IT sector is your goal then you start preparing to qualify the entrance exam of any of the following top institutes for MCA in India:</p>
<ol>
  <li>University of Pune (Pune, Maharashtra)</li>
  <li>Jawaharlal Nehru University (New Mehrauli Road, New Delhi)</li>
  <li>University of Hyderabad (Gachibowli, Hyderabad)</li>
  <li>NIT (Tiruchirappalli, Tamil Nadu)</li>
  <li>Birla Institute of Technology (Jaipur, Rajasthan)</li>
  <li>NIT (Mangalore, Karnataka)</li>
  <li>Motilal Nehru National Institute of Technology (Allahabad, Uttar Pradesh)</li>
  <li>PSG College of Technology (Coimbatore, Tamil Nadu)</li>
  <li>NIT (Rourkela, Orissa)</li>
  <li>ITM University (Madhya Pradesh)</li>
</ol>

<h3><strong>Best MCA coaching Institute in India</strong></h3>
<p><strong><a href="/">Landmark Institute</a></strong> prepares students for all India MCA entrance tests to get through the topmost colleges for MCA - NIMCET, DU, JNU, Pune, HCU, BHU, BITS, IP, JAMIA etc. The reason behind this course is the strength in the teaching methodology of Landmark Institute.</p>
<p>Today, this modus of teaching has evolved to perfection and only needs the matching diligence and optimistic approach of a serious student. And success is inevitable. Landmark provides relevant education, course material, training and counselling to all its students.</p>

<p><strong>You get to learn from some of the most experienced and qualified mentors like:</strong></p>
<ul>
  <li>Prof. R. Chadha - Ex-Faculty GGSIP University & Author BCA Mathematics</li>
  <li>Mr. Srish Malhotra - M.Sc Maths (Gold Medalist)</li>
  <li>Mr. A. Nayyar - M.C.A., M.Tech (Gold Medalist)</li>
  <li>Mr. Roshan - Reasoning Expert</li>
</ul>

<div style="background: var(--blue-light); padding: 24px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2); margin: 32px 0 24px;">
  <h4 style="margin-top: 0; color: var(--slate); font-weight: 700;">🤝 Ready to take the next step?</h4>
  <p style="margin-bottom: 16px;">Speak to our counselling team to plan your preparation strategy for top MCA colleges.</p>
  <a href="/contactus/" class="btn btn-primary" style="display: inline-flex; align-items: center; text-decoration: none; color: #fff;">Get Counselling →</a>
</div>`;

  return (
    <>
      <Topbar />
      <Navbar />

      {/* Scroll Progress Bar */}
      <ScrollProgressBar />

      <div className="hero" style={{ padding: '80px 0 60px', background: 'linear-gradient(135deg, #0A1628 0%, #112240 100%)', color: '#fff', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(59,130,246,0.15) 0%, transparent 60%)', zIndex: 0 }} />
        <motion.div
          className="container"
          style={{ maxWidth: '800px', position: 'relative', zIndex: 1 }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={itemVariants} className="hero-badge" style={{ background: 'rgba(59, 130, 246, 0.15)', borderColor: 'rgba(59, 130, 246, 0.3)', color: '#60A5FA' }}>
            📚 MCA Overview
          </motion.span>
          <motion.h1
            variants={itemVariants}
            style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.25, margin: '16px auto 16px', color: '#fff', fontFamily: "'Poppins', sans-serif" }}
          >
            Everything you need to know about MCA
          </motion.h1>
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', fontSize: '14px', color: '#94A3B8' }}
          >
            <span>📅 25 Apr 2023</span>
            <span>•</span>
            <span>✍️ Written by Landmark Team</span>
          </motion.div>
        </motion.div>
      </div>

      <main style={{ padding: '60px 0 80px', background: 'var(--bg)', minHeight: '60vh' }}>
        <div className="container">
          <div className="blog-layout-container">

            {/* Left Side: Article Content */}
            <motion.div
              className="blog-main-content"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              {/* Breadcrumbs */}
              <div className="blog-breadcrumbs">
                <Link href="/">Home</Link>
                <span>/</span>
                <Link href="/blog/">Blog</Link>
                <span>/</span>
                <span>About MCA</span>
              </div>

              <div
                className="prose-custom"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
              />

              {/* Author Bio Box */}
              <div className="blog-author-bio">
                <div className="blog-author-avatar">LM</div>
                <div className="blog-author-info">
                  <h4>Written by Landmark Team</h4>
                  <p>Expert mentors and educators at Landmark Institute, guiding MCA aspirants to secure top ranks in NIMCET, CUET, and other university entrances for over 15+ years.</p>
                </div>
              </div>

              {/* Social Share Bar */}
              <div className="blog-share-bar">
                <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--slate-mid)' }}>Share Article:</span>
                <a
                  href={`https://api.whatsapp.com/send?text=Check out this article on Landmark Institute: Everything you need to know about MCA - https://www.landmarkinstitute.com/everything-you-need-to-know-about-mca/`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blog-share-btn"
                  title="Share on WhatsApp"
                >
                  💬
                </a>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    alert('Article link copied to clipboard!');
                  }}
                  className="blog-share-btn"
                  title="Copy Link"
                >
                  🔗
                </button>
              </div>
            </motion.div>

            {/* Right Side: Sticky Sidebar */}
            <div className="blog-sidebar-sticky">

              {/* Batches CTA widget */}
              <div className="blog-sidebar-widget blog-cta-card">
                <h3 style={{ color: '#60A5FA', borderBottomColor: 'rgba(255,255,255,0.1)' }}>🚀 Next Batch Starting!</h3>
                <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '16px', lineHeight: '1.55' }}>
                  Secure your seat in India's leading NIMCET and MCA entrance coaching program. Online & Offline batches available.
                </p>
                <Link href="/contactus/" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', width: '100%', background: '#3B82F6', borderColor: '#3B82F6' }}>
                  Enquire Now
                </Link>
              </div>

              {/* Recommended reads widget */}
              <div className="blog-sidebar-widget">
                <h3>📚 Recommended Reads</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {otherPosts
                    .filter(p => p.slug !== "everything-you-need-to-know-about-mca")
                    .slice(0, 4)
                    .map((p, i) => (
                      <div key={i} style={{ borderBottom: '1px solid var(--border-light)', paddingBottom: '10px' }}>
                        <Link href={`/${p.slug}/`} style={{ fontSize: '13px', fontWeight: 600, color: 'var(--slate)', textDecoration: 'none', lineHeight: 1.4, display: 'block' }}>
                          {p.title}
                        </Link>
                      </div>
                    ))}
                </div>
              </div>

              {/* Stats widget */}
              <div className="blog-sidebar-widget">
                <h3>🏆 Why Landmark?</h3>
                <ul style={{ padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px', listStyle: 'none' }}>
                  <li style={{ fontSize: '13px', color: 'var(--text-mid)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    ✨ <strong>28+ Yrs</strong> teaching experience
                  </li>
                  <li style={{ fontSize: '13px', color: 'var(--text-mid)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    📚 <strong>Author of 10 books</strong> on math
                  </li>
                  <li style={{ fontSize: '13px', color: 'var(--text-mid)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    👥 <strong>Personalized attention</strong> (Max 40/batch)
                  </li>
                  <li style={{ fontSize: '13px', color: 'var(--text-mid)', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    🎓 <strong>AIR 1, 2, & 3</strong> under our mentors
                  </li>
                </ul>
              </div>

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
