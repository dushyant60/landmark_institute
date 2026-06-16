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

export default function McaEntranceExamClient() {

  const htmlContent = `<figure style="margin: 0 0 32px 0; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-md);"><img src="/images/migrated/mca-entrance-exams.png" alt="Best Coaching Institute for All MCA Entrance Exams" style="width: 100%; height: auto; max-height: 450px; object-fit: cover; display: block;" /></figure>

<p>If you aim to crack the MCA entrance exams in India, you are stepping into a competitive field where every mark matters. Whether it is NIMCET, CUET, or MAH MCA CET, a top MCA college route is paved with a correct coaching strategy, hard work and - most importantly - conceptual clarity. This is where the Landmark Institute shines as a guiding light for the candidates.</p>

<h2>Understanding MCA entrance exams</h2>
<h3>Popular MCA entrance exams in India</h3>
<ul>
  <li><strong><a href="/nimcet/">NIMCET</a></strong> - run by NITs, it is one of the most reputed exams.</li>
  <li><strong>MAH MCA CET</strong> - State-level test for Maharashtra colleges.</li>
  <li><strong><a href="/cuet-pg-mca/">CUET PG MCA</a></strong> - A new yet important entrance to central universities.</li>
</ul>

<h2>Why Choosing the Right Coaching Institute Is Crucial</h2>
<p>Coaching isn't just about lectures. It’s about strategy, mindset training, and exam temperament. You could study solo, but expert coaching helps you avoid common mistakes and boosts your confidence significantly.</p>

<h2>Key Features to Look for in an MCA Coaching Center</h2>
<ul>
  <li>Expert faculty with MCA entrance experience</li>
  <li>Updated and focused study material</li>
  <li>Regular mocks and feedback</li>
  <li>Dedicated doubt-clearing support</li>
  <li>Flexible learning modes (online/offline)</li>
</ul>

<h2>Landmark Institute Overview</h2>
<p>Established a decade ago, Landmark Institute is a major coaching center that specializes in preparation for MCA admission. With coaching centers in Delhi and a strong digital presence, it has successfully guided hundreds of MCA candidates to top ranks.</p>

<p><strong>Vision and Mission:</strong> Regardless of their academic background, our mission is to empower each student to secure a top MCA seat.</p>
<p><strong>Inheritance and Success Rate:</strong> Landmark students make it to top NITs and other prestigious institutions every year. Our results speak volumes.</p>
<p><strong>Track Record of Results:</strong> Landmark students crack the top MCA entrances every single year. Our NIMCET success rate is among the highest in India.</p>

<h3>Academic Highlights at Landmark</h3>
<ul>
  <li><strong>Focused Study Material:</strong> You get detailed books, practice sets, and shortcut tricks that are exclusive to Landmark.</li>
  <li><strong>Personal Doubt Sessions:</strong> One size does not fit all. We provide personalized doubt sessions to ensure no student is left behind.</li>
  <li><strong>Tests and Performance Analysis:</strong> Weekly tests simulate actual examination conditions. In addition, you get detailed performance analytics so that you know exactly where to improve.</li>
  <li><strong>Online and Offline Support:</strong> Can't attend classes physically? No problem. Landmark Live online classes, recorded sessions, and PDF notes are accessible anytime.</li>
</ul>

<h2>Unique Teaching Approach of Landmark Institute</h2>
<ul>
  <li><strong>Concept Clarity First:</strong> We focus on strengthening your basics. Without a strong foundation, cracking these exams is like building a house on sand.</li>
  <li><strong>Adaptive Teaching:</strong> Whether you are a slow learner or a fast tracker, Landmark adapts its style to match your pace.</li>
  <li><strong>Real-time Simulation:</strong> From digital timers to strict rules during mocks, you get the real exam vibes every time.</li>
</ul>

<h2>Testimonials from Successful MCA Aspirants</h2>
<blockquote>
  "Before joining Landmark, I had zero ideas how to crack NIMCET. After 6 months of concept coaching, I secured admission in a top NIT!"<br />
  <strong>- Sakshi Verma</strong>
</blockquote>

<blockquote>
  "The mock tests were just like the actual exam. I owe my CUET PG success to the wonderful faculty at Landmark."<br />
  <strong>- Ankit Tiwari</strong>
</blockquote>

<h2>Frequently Asked Questions</h2>
<p><strong>Q1. Which MCA entrance exams are covered by Landmark Institute?</strong><br />
Landmark prepares students for NIMCET, CUET PG MCA, MAH MCA CET, and other university/state-level MCA entrance exams.</p>

<p><strong>Q2. Is Landmark Institute good for online coaching?</strong><br />
Absolutely! We provide high-quality live classes, recorded lecture archives, and online doubt-clearing systems.</p>

<p><strong>Q3. How successful are Landmark students in NIMCET?</strong><br />
We maintain a leading success rate, with a substantial number of students making it into top NITs each year.</p>

<p><strong>Q4. What is the fee structure of Landmark Institute?</strong><br />
Fees vary by course selection and mode (online/offline). We offer flexible fee payments and scholarship options for deserving candidates.</p>

<div class="video-wrapper" style="margin: 32px 0 24px;">
  <iframe src="https://www.youtube.com/embed/6qxbDU29JFw" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border: none; border-radius: 12px; box-shadow: var(--shadow-md);"></iframe>
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
            🎓 Entrance Exams
          </motion.span>
          <motion.h1
            variants={itemVariants}
            style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.25, margin: '16px auto 16px', color: '#fff', fontFamily: "'Poppins', sans-serif" }}
          >
            Best Coaching Institute for All MCA Entrance Exams
          </motion.h1>
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', fontSize: '14px', color: '#94A3B8' }}
          >
            <span>📅 13 Jun 2025</span>
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
                <span>Coaching Guide</span>
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
                  href={`https://api.whatsapp.com/send?text=Check out this article on Landmark Institute: Best Coaching Institute for All MCA Entrance Exams - https://www.landmarkinstitute.com/mca-entrance-exam/`}
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
                    .filter(p => p.slug !== "mca-entrance-exam")
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
