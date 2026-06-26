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

export default function CrashCourseClient() {

  const htmlContent = `<figure style="margin: 0 0 32px 0; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-md);"><img src="/images/migrated/Dont-miss-this-Crash-Course-if-MCA-is-your-dream.png" alt="Don’t miss this Crash Course if MCA is your Dream!" style="width: 100%; height: auto; max-height: 450px; object-fit: cover; display: block;" /></figure>

<p><strong><a href="/">Landmark Institute</a> </strong>has emerged as India’s No. 1 institute that specializes in MCA entrance exam. It has created new dimensions for teaching and mentoring MCA aspiring students to accomplish their dream by cracking the MCA entrance exam. We give the finest training to students and prepare them for top universities like NIT, Delhi University, Jamia Milia Islamia, Jawaharlal Nehru University and many others.</p>

<h3><strong>Why Landmark is the No.1 Institute for MCA Entrance Exam Preparation?</strong></h3>
<ul>
  <li>Integrated Teaching Approach</li>
  <li>Well Qualified Faculty</li>
  <li>Best Track Record of Results in MCA entrance exam</li>
  <li>Doubt Clearance</li>
  <li>Tests and Assessments</li>
  <li>Disciplined and Focused Learning Environment</li>
  <li>Competitive Atmosphere with Personalised Attention</li>
  <li>Comprehensive Study Material</li>
  <li>Online/Offline Learning Programs</li>
  <li>Daily Attendance Monitoring</li>
  <li>Comprehensive Testing Systems</li>
</ul>

<h3><strong>Join any of the following courses at Landmark for guaranteed success</strong></h3>
<ul>
  <li>1.5 years program for students pursuing 2nd year 4th semester</li>
  <li>1 year program for final year graduates</li>
  <li>4-month exclusive crash course for final year graduates</li>
</ul>

<h3><strong>Everything you need to know about ‘Crash Course’</strong></h3>
<ul>
  <li>If you have not enrolled yourself for a full-time MCA coaching or you are having last minute jitters, doubts, uncertainty etc. then joining a crash course is all you need.</li>
  <li>The course emphasizes primarily on making the students revisit the fundamental concepts of the most important and crucial topics. This helps you sharpen your analytical skills and performance.</li>
  <li>You get a chance to work on your weak areas and check your progress on a daily basis.</li>
</ul>

<h3><strong>Landmark’s 4-month crash course – The Game Changer</strong></h3>
<p>Landmark’s expert research team, faculties and academic heads have created this special course exclusively for students who have missed out the full-time course for any reason. This course can do wonders just in 4 month.</p>

<h3><strong>Key Features</strong></h3>
<ul>
  <li>Classes are conducted 3-4 days a week where in each class is around 4 hours long. Full course coverage in just four months, with special classes in Mathematics, reasoning and elementary English.</li>
  <li>Comprehensive study material available offline and online as well.</li>
  <li>Advanced test series for every subject and topic.</li>
  <li>Expert faculties for all subjects.</li>
  <li>Additional notes.</li>
</ul>

<h3><strong>Course Highlights</strong></h3>
<ul>
  <li>Limited batch length.</li>
  <li>Simple and easy teaching methodology.</li>
  <li>Special discussion and doubt session.</li>
  <li>Get to know about current trends and updates.</li>
  <li>Counseling sessions.</li>
  <li>Located near central Delhi, easily accessible by metro or any other means of transportation.</li>
  <li>Adequate Infrastructure</li>
  <li>Innovative teaching tools and methodology.</li>
  <li>Interactive lectures with expert faculties for each subject.</li>
</ul>

<h3><strong>Landmark shows you the right path. Landmark believes in individual attention</strong></h3>
<p>Our main teaching policy is to personalize and customize the regular teaching sessions according the requirement of the students. This is the main reason behind making smaller batches of not more than 40 students in each. Ingenious and superior learning styles.</p>

<ul>
  <li>The training module at Landmark is a blend of a great team of faculties, in-depth and authentic study material and upgraded teaching methodologies</li>
  <li>Focus on specific subjects At Landmark we have not left any topic, subject or a chapter untouched. Our strategy is vivid and defined, to cover every topic and coach students to comprehend all the concepts and syllabus to clear the entrance exam with a good score.</li>
</ul>

<h3><strong>Crash Course USPs</strong></h3>
<ul>
  <li>Best results in last 10 years</li>
  <li>2 Demo classes</li>
  <li>Extremely reasonable fee</li>
</ul>

<div style="background: var(--blue-light); padding: 24px; border-radius: 12px; border: 1px solid rgba(59, 130, 246, 0.2); margin: 32px 0 24px;">
  <h4 style="margin-top: 0; color: var(--slate); font-weight: 700;">📅 Course Launch & Demo Dates</h4>
  <p style="margin-bottom: 8px;"><strong>Course Launch Date:</strong> 26th</p>
  <p style="margin-bottom: 16px;"><strong>Demo Classes:</strong> 26th and 28th December</p>
  <a href="/contactus/" class="btn btn-primary" style="display: inline-flex; align-items: center; text-decoration: none; color: #fff;">Register Now →</a>
</div>

<figure style="margin: 32px 0 0 0; border-radius: 12px; overflow: hidden; box-shadow: var(--shadow-md);"><img src="/images/migrated/Dont-miss-this-Crash-Course-if-MCA-is-your-dream-1.png" alt="Don't miss this Crash Course if MCA is your Dream!" style="width: 100%; height: auto; max-height: 450px; object-fit: cover; display: block;" /></figure>`;

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
            📅 Notifications & Batches
          </motion.span>
          <motion.h1
            variants={itemVariants}
            style={{ fontSize: 'clamp(26px, 4vw, 42px)', fontWeight: 800, lineHeight: 1.25, margin: '16px auto 16px', color: '#fff', fontFamily: "'Poppins', sans-serif" }}
          >
            Don’t miss this Crash Course if MCA is your Dream!
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
                <span>Crash Course</span>
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
                  href={`https://api.whatsapp.com/send?text=Check out this article on Landmark Institute: Don’t miss this Crash Course if MCA is your Dream! - https://www.landmarkinstitute.com/dont-miss-this-crash-course-if-mca-is-your-dream/`}
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
                    .filter(p => p.slug !== "dont-miss-this-crash-course-if-mca-is-your-dream")
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
