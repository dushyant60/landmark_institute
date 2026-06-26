'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
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

export default function CareerOptionsClient() {

  const htmlContent = `<figure style="margin: 0 0 32px 0; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-md);"><img src="/images/migrated/2019-02-13.png" alt="Career Options After MCA | Jobs After MCA" style="width: 100%; height: auto; max-height: 450px; object-fit: cover; display: block;" /></figure>

<p>Lack of awareness and misinformation leave students directionless. When it comes to higher education, most students are misguided by money-driven private centers who proudly call themselves 'Educational Institutes'. MCA is one such course where students, in the quest to achieve success and a great job, are often left baffled and unaided. This article will help you understand MCA, its scope, and its merits.</p>

<p>We believe that it is extremely vital to know every aspect of this program before making any small or big choice that might make or break your career. How is the MCA course useful in providing you with the perfect training in computer applications that can get you the right job and tremendous career opportunities? But first, the million-dollar question: is this course best for you? If yes, then what should be your next step?</p>

<h3>Why MCA?</h3>
<p>If you are a computer enthusiast, crazy about software developments and new technologies, understand the algorithm of design and optimization, have a knack for Mathematics, Statistics, Accounting, and Finance, or if gadgets are literally your first love, then this postgraduate course is enough to give you a major breakthrough in your career. It will give you a significant edge over the rest: you can work in your favorite software company, target multinational tech giants, or even better, start your own technology business.</p>

<h3>What You Will Learn During the Program</h3>
<ol>
  <li>Systems Designing & Architecture</li>
  <li>Application Software Development</li>
  <li>Enterprise Resource Planning (ERP)</li>
  <li>Computer Networks & Communications</li>
  <li>System Administration & Security</li>
  <li>Web Designing and Full-Stack Development</li>
  <li>Database Administration & Warehousing</li>
  <li>Parallel and Vector Processing</li>
  <li>Data Mining, Data Science & AI Foundations</li>
</ol>

<h3>Specializations In MCA</h3>
<ol>
  <li>Systems Management</li>
  <li>Systems Development</li>
  <li>Systems Engineering</li>
  <li>Application Software development</li>
  <li>Internet & Cloud Technologies</li>
  <li>Management Information Systems (MIS)</li>
  <li>Software Development</li>
  <li>Hardware Technology & Embedded Systems</li>
  <li>Networking & Cyber Security</li>
</ol>

<h3>Job Scope & Career Profiles</h3>
<p>Any IT company, small or big, would be happy to hire you as a:</p>
<ul>
  <li>Software Developer / Programmer</li>
  <li>Software Engineer</li>
  <li>Systems Analyst</li>
  <li>Software Application Architect</li>
  <li>Database Administrator</li>
  <li>Software Consultant</li>
  <li>Web Developer & UI/UX Engineer</li>
</ul>

<h3>Key Campus Recruiters</h3>
<p>Many national and multi-national IT organizations recruit MCA students every year, including:</p>
<p><strong>TCS, Satyam Computers, Polaris, Wipro Systems, Sonata Software, D.E. Shaw, HCL Technologies, Texas Instruments, Oracle India, and many more.</strong></p>

<h3>Yes MCA it is, but what’s next?</h3>
<p>Once you realize this is the path for you, you cannot afford to waste a single second. Cracking the entrance exam is the first major step. You must score incredibly well to secure admission into the best national universities to pursue this course.</p>
<p>Random preparation is not enough—you need a real plan! Make a preparation strategy that covers the entire syllabus. Collect previous years' question papers, practice with authentic mock tests, study advanced mathematics and statistics books, and brush up on your analytical logic and reasoning skills.</p>

<div style="background: var(--blue-light); padding: 24px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2); margin: 32px 0 24px;">
  <h4 style="margin-top: 0; color: var(--slate); font-weight: 700;">🌟 Landmark Institute - India's No. 1 Coaching for MCA Entrances</h4>
  <p>Join Landmark Institute to get the best academic direction, in-depth study material, and upgraded teaching methodologies. Under our personalized training program, we ensure every student is fully prepared to excel in NIMCET, CUET PG, and university entrances.</p>
  <p style="margin-bottom: 16px;">Get regular class tests, topic-wise worksheets, and detailed coverage of the mathematical and reasoning syllabus.</p>
  <a href="/contactus/" class="btn btn-primary" style="display: inline-flex; align-items: center; text-decoration: none; color: #fff;">Speak with a Career Counsellor →</a>
</div>

<p><strong>Also Read:</strong> <Link href="/everything-you-need-to-know-about-mca/"><strong>Everything you need to know about MCA</strong></Link></p>`;

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
            💼 Career Options
          </motion.span>
          <motion.h1
            variants={itemVariants}
            style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.25, margin: '16px auto 16px', color: '#fff', fontFamily: "'Poppins', sans-serif" }}
          >
            Career Options After MCA | Jobs After MCA
          </motion.h1>
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', fontSize: '14px', color: '#94A3B8' }}
          >
            <span>📅 13 Feb 2019</span>
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
                <span>Career Scope</span>
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
                  href={`https://api.whatsapp.com/send?text=Check out this article on Landmark Institute: Career Options After MCA | Jobs After MCA - https://www.landmarkinstitute.com/what-are-the-career-options-available-after-mca/`}
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
                    .filter(p => p.slug !== "what-are-the-career-options-available-after-mca")
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
    </>
  );
}
