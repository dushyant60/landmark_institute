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

export default function TopUniversitiesClient() {

  const htmlContent = `<figure style="margin: 0 0 32px 0; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-md);"><img src="/images/migrated/2019-01-23.png" alt="Top 10 Universities in India for MCA" style="width: 100%; height: auto; max-height: 450px; object-fit: cover; display: block;" /></figure>

<p>There is a high demand for professionally qualified technical and computer graduates in the IT industry, which is why pursuing an MCA has become incredibly lucrative. Pursuing an MCA provides a sound academic training, exposure, and a solid platform which helps you craft a high-growth career in Computer Applications. MCA is one such course that gives you the niche tools to shape your coding skills and professional profile.</p>

<p>Master of Computer Applications (MCA) is a professional postgraduate course with the aim to equip students with the latest computer application frameworks, languages, and methodologies used in software development, system design, computer networking, database administration, and web engineering.</p>

<p>At present, MCA graduates enjoy vast career scopes, job placements, and rapid career progressions. While many government and private institutes offer this course, to really achieve big and learn from the best, one needs to secure admission into the <strong>Top MCA Universities in India</strong>.</p>

<h3><strong>List of Top 10 MCA Institutes in India</strong></h3>
<ol>
  <li><strong>NIT Tiruchirappalli (Trichy)</strong></li>
  <li><strong>NIT Surathkal</strong></li>
  <li><strong>MNNIT Allahabad</strong></li>
  <li><strong>NIT Warangal</strong></li>
  <li><strong>Delhi University (DU), New Delhi</strong></li>
  <li><strong>Hyderabad Central University (HCU), Hyderabad</strong></li>
  <li><strong>Jawaharlal Nehru University (JNU), New Delhi</strong></li>
  <li><strong>Banaras Hindu University (BHU), Varanasi</strong></li>
  <li><strong>Jamia Millia Islamia, New Delhi</strong></li>
  <li><strong>GGSIP University (IPU), Delhi</strong></li>
</ol>

<h3><strong>How to Crack the MCA Entrance Exam</strong></h3>
<p>One should ideally start preparing for MCA entrance exams in the final year of graduation. If a student puts in 5-6 hours of focused self-study daily, then 5-6 months of coaching and practice will be more than enough. Key ways to help you qualify for the entrance exams of these top-notch universities include:</p>

<ul>
  <li><strong>A Strategic, Planned Approach:</strong> Create a topic-wise study routine and follow it assertively.</li>
  <li><strong>Collecting the Right Study Material:</strong> Focus on core topics like Advanced Mathematics, Calculus, Algebra, Reasoning, and Basic Computer Science.</li>
  <li><strong>Classroom Coaching:</strong> Preparing with the help of experts and teachers provides a rigorous training module that solves doubts instantly. It also helps you build exam speed.</li>
  <li><strong>Online Coaching:</strong> Live interactive lectures and recorded video sessions help strengthen preparation for distant students.</li>
  <li><strong>Reference Books:</strong> Study standard reference books. Highly recommended titles include mathematics books by Dr. Ritukar Chadha.</li>
  <li><strong>Monitoring Progress:</strong> Create a chart tracking your mock test scores to monitor topic-wise accomplishments daily.</li>
</ul>

<div style="background: var(--blue-light); padding: 24px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2); margin: 32px 0 24px;">
  <h4 style="margin-top: 0; color: var(--slate); font-weight: 700;">🏫 Prepare with Landmark Institute - India's Best MCA Coaching</h4>
  <p>Landmark Institute prepares students for All India MCA Entrance Tests (NIMCET, DU, JNU, Pune, HCU, BHU, BITS, IPU, Jamia, etc.). Our concept-oriented teaching methodology ensures that every student develops the absolute clarity required to solve difficult mathematical problems with speed and precision.</p>
  <p style="margin-bottom: 16px;">Learn under senior professors like Prof. R. Chadha (Ex-Faculty GGSIP University & Author of BCA Mathematics books) and Dr. Srish Malhotra (Maths Gold Medalist).</p>
  <a href="/contactus/" class="btn btn-primary" style="display: inline-flex; align-items: center; text-decoration: none; color: #fff;">Book a Counselling Session →</a>
</div>

<p><strong>Also Read:</strong></p>
<ul>
  <li><Link href="/dont-miss-this-crash-course-if-mca-is-your-dream/"><strong>Don’t miss this Crash Course if MCA is your Dream!</strong></Link></li>
  <li><Link href="/the-hidden-merits-of-pursuing-mca/"><strong>The Hidden Merits of Pursuing MCA</strong></Link></li>
</ul>`;

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
            🏫 Universities & Colleges
          </motion.span>
          <motion.h1
            variants={itemVariants}
            style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.25, margin: '16px auto 16px', color: '#fff', fontFamily: "'Poppins', sans-serif" }}
          >
            Top 10 Universities in India for MCA
          </motion.h1>
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', fontSize: '14px', color: '#94A3B8' }}
          >
            <span>📅 12 Nov 2024</span>
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
                <span>Top MCA Universities</span>
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
                  href={`https://api.whatsapp.com/send?text=Check out this article on Landmark Institute: Top 10 Universities in India for MCA - https://www.landmarkinstitute.com/top-10-universities-in-india-for-mca/`}
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
                    .filter(p => p.slug !== "top-10-universities-in-india-for-mca")
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
