'use client';

import { motion, type Variants } from 'framer-motion';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};
const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

const categories = ['All', 'NIMCET Prep', 'Syllabus', 'Study Tips', 'Notifications', 'MCA Exams', 'Results'];

const posts = [
  {
    id: 1,
    category: 'MCA Exams',
    categoryColor: '#6366F1',
    title: 'Best Coaching Institute for All MCA Entrance Exams',
    excerpt: 'A complete guide on preparing for NIMCET, CUET PG MCA, and MAH MCA CET. Learn about Landmark\'s concept-clarity first approach and adaptive teaching methodologies.',
    date: 'June 13, 2025',
    readTime: '8 min read',
    author: 'Landmark Team',
    slug: 'mca-entrance-exam',
    img: 'mca-entrance-exams.png',
  },
  {
    id: 2,
    category: 'Notifications',
    categoryColor: '#EF4444',
    title: 'Don\'t miss this Crash Course if MCA is your Dream!',
    excerpt: 'Landmark Institute\'s 4-month crash course details. Sharpen your analytical skills, check daily progress, and revisit fundamental concepts of mathematics and reasoning.',
    date: 'November 12, 2024',
    readTime: '4 min read',
    author: 'Landmark Team',
    slug: 'dont-miss-this-crash-course-if-mca-is-your-dream',
    img: 'Dont-miss-this-Crash-Course-if-MCA-is-your-dream.png',
  },
  {
    id: 3,
    category: 'Study Tips',
    categoryColor: '#F59E0B',
    title: 'The Hidden Merits of Pursuing MCA',
    excerpt: 'Discover exciting work fields like Data Science, Cyber-Robotics, Cloud Architecture, and Video Game Design. A detailed reality check of computer application jobs.',
    date: 'November 12, 2024',
    readTime: '6 min read',
    author: 'Landmark Team',
    slug: 'the-hidden-merits-of-pursuing-mca',
    img: 'hidden-merits-of-pursuing-of-pursuing-mca.png',
  },
  {
    id: 4,
    category: 'MCA Exams',
    categoryColor: '#6366F1',
    title: 'Top 10 Universities in India for MCA',
    excerpt: 'A curated list of top 10 MCA institutes in India (NITs, DU, HCU, JNU, BHU, IP) and key strategic steps to prepare and crack the entrance exams successfully.',
    date: 'November 12, 2024',
    readTime: '5 min read',
    author: 'Landmark Team',
    slug: 'top-10-universities-in-india-for-mca',
    img: '2019-01-23.png',
  },
  {
    id: 5,
    category: 'MCA Exams',
    categoryColor: '#6366F1',
    title: 'Everything you need to know about MCA',
    excerpt: 'Master of Computer Application is a three-year professional Master\'s Degree in computer science. It prepares students for the IT sector through advanced learning.',
    date: 'April 25, 2023',
    readTime: '5 min read',
    author: 'Landmark Team',
    slug: 'everything-you-need-to-know-about-mca',
    img: 'Everything-You-Need-to-Know-About-MCA.png',
  },
  {
    id: 6,
    category: 'Study Tips',
    categoryColor: '#F59E0B',
    title: 'Career Options After MCA | Jobs After MCA',
    excerpt: 'Explore career scope, job profiles, and placement options (TCS, Wipro, HCL) after completing your MCA. Make an informed choice to shape your IT career.',
    date: 'February 13, 2019',
    readTime: '6 min read',
    author: 'Landmark Team',
    slug: 'what-are-the-career-options-available-after-mca',
    img: '2019-02-13.png',
  },
];

export default function BlogPageClient() {
  return (
    <>
      <Topbar />
      <Navbar />

      <style dangerouslySetInnerHTML={{ __html: `
        .blog-hero {
          background: linear-gradient(135deg, #0A1628 0%, #1a3360 100%);
          padding: 70px 0 50px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .blog-hero::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 70% 40%, rgba(59,130,246,0.15) 0%, transparent 55%);
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
          margin-bottom: 20px;
        }
        .blog-hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(26px, 4vw, 46px);
          font-weight: 800;
          color: #fff;
          margin-bottom: 16px;
        }
        .blog-hero h1 .accent { color: #60A5FA; }
        .blog-hero p { font-size: 16px; color: #94A3B8; max-width: 600px; margin: 0 auto; line-height: 1.65; }
        .blog-section { padding: 60px 0 80px; background: var(--bg); }

        /* Blog layout */
        .blog-layout {
          display: grid;
          grid-template-columns: 1fr 300px;
          gap: 32px;
          align-items: start;
        }

        /* Blog Grid */
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
        }
        .blog-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          box-shadow: 0 4px 15px -3px rgba(0,0,0,0.02);
        }
        .blog-card:hover { 
          transform: translateY(-5px); 
          box-shadow: 0 12px 25px -5px rgba(0,0,0,0.06); 
          border-color: rgba(59,130,246,0.2);
        }
        .blog-card-thumb {
          position: relative;
          height: 190px;
          overflow: hidden;
          background: #0F1A2E;
        }
        .blog-card-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }
        .blog-card:hover .blog-card-thumb img {
          transform: scale(1.04);
        }
        .blog-card-body { 
          padding: 24px; 
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }
        .blog-cat-tag {
          display: inline-block;
          padding: 4px 12px;
          border-radius: 100px;
          font-size: 11px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 14px;
          align-self: flex-start;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .blog-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 16px;
          font-weight: 700;
          color: var(--slate);
          margin: 0 0 10px 0;
          line-height: 1.45;
        }
        .blog-card h3 a {
          color: inherit;
          text-decoration: none;
          transition: color 0.15s;
        }
        .blog-card h3 a:hover {
          color: var(--blue);
        }
        .blog-card p { 
          font-size: 13.5px; 
          color: var(--text-mid); 
          line-height: 1.6; 
          margin: 0 0 20px 0;
          flex-grow: 1;
        }
        .blog-card-meta {
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-size: 12px;
          color: var(--text-muted);
          padding-top: 14px;
          border-top: 1px solid var(--border-light);
        }
        .blog-card-meta-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .blog-meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .blog-card-meta a.read-more {
          color: var(--blue);
          font-weight: 600;
          text-decoration: none;
          font-size: 13px;
          transition: color 0.15s;
        }
        .blog-card-meta a.read-more:hover {
          color: var(--blue-dark);
        }

        /* Sidebar */
        .blog-sidebar { position: sticky; top: 90px; }
        .sidebar-widget {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: 16px;
          padding: 24px;
          margin-bottom: 24px;
        }
        .sidebar-widget h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: var(--slate);
          margin: 0 0 16px 0;
          padding-bottom: 12px;
          border-bottom: 2px solid var(--border-light);
        }
        .popular-post {
          display: flex;
          gap: 12px;
          margin-bottom: 16px;
          padding-bottom: 16px;
          border-bottom: 1px solid var(--border-light);
          align-items: center;
        }
        .popular-post:last-child { margin-bottom: 0; border-bottom: none; padding-bottom: 0; }
        .popular-thumb {
          width: 64px;
          height: 48px;
          border-radius: 6px;
          overflow: hidden;
          background: #0F1A2E;
          flex-shrink: 0;
        }
        .popular-thumb img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .popular-info {
          flex-grow: 1;
        }
        .popular-title { 
          font-size: 12.5px; 
          font-weight: 600; 
          color: var(--slate); 
          line-height: 1.4; 
        }
        .popular-title a {
          color: inherit;
          text-decoration: none;
          transition: color 0.15s;
        }
        .popular-title a:hover {
          color: var(--blue);
        }
        .popular-read { font-size: 11px; color: var(--text-muted); margin-top: 3px; }

        @media (max-width: 1024px) {
          .blog-layout { grid-template-columns: 1fr; }
          .blog-sidebar { position: static; }
        }
        @media (max-width: 700px) {
          .blog-grid { grid-template-columns: 1fr; gap: 20px; }
        }
      `}} />

      {/* Hero */}
      <div className="blog-hero">
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.span variants={fadeUp} className="page-badge">📝 Blog & Articles</motion.span>
            <motion.h1 variants={fadeUp}>
              MCA Entrance <span className="accent">Exam Tips</span>,<br />NIMCET Prep & Study Material
            </motion.h1>
            <motion.p variants={fadeUp}>
              Expert articles from Landmark Institute faculty on NIMCET preparation, MCA entrance strategies, syllabus updates, and student success stories.
            </motion.p>
          </motion.div>
        </div>
        <div style={{ height: '50px', marginTop: '30px' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="var(--bg)" style={{ width: '100%', height: '100%' }}>
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </div>

      <section className="blog-section">
        <div className="container">

          <div className="blog-layout">

            {/* Posts Grid */}
            <motion.div className="blog-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
              {posts.map(post => (
                <motion.div className="blog-card" key={post.id} variants={fadeUp}>
                  <div className="blog-card-thumb">
                    <img 
                      src={`/images/migrated/${post.img}`} 
                      alt={post.title} 
                    />
                  </div>
                  <div className="blog-card-body">
                    <span className="blog-cat-tag" style={{ background: post.categoryColor }}>{post.category}</span>
                    <h3>
                      <Link href={`/${post.slug}/`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p>{post.excerpt}</p>
                    <div className="blog-card-meta">
                      <div className="blog-card-meta-left">
                        <div className="blog-meta-item">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
                          <span>{post.date}</span>
                        </div>
                        <div className="blog-meta-item">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <Link href={`/${post.slug}/`} className="read-more">Read More →</Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Sidebar */}
            <div className="blog-sidebar">
              
              {/* Popular widget with dedicated thumbnails */}
              <div className="sidebar-widget">
                <h3>🔥 Most Popular</h3>
                {posts.slice(0, 5).map((p) => (
                  <div className="popular-post" key={p.id}>
                    <div className="popular-thumb">
                      <img src={`/images/migrated/${p.img}`} alt={p.title} />
                    </div>
                    <div className="popular-info">
                      <div className="popular-title">
                        <Link href={`/${p.slug}/`}>
                          {p.title}
                        </Link>
                      </div>
                      <div className="popular-read">{p.readTime}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="sidebar-widget">
                <h3>📂 Categories</h3>
                {categories.filter(c => c !== 'All').map(c => (
                  <a href="#" key={c} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border-light)', fontSize: '13.5px', color: 'var(--slate-mid)', textDecoration: 'none', fontWeight: 500 }}>
                    {c}
                    <span style={{ color: 'var(--blue)', fontWeight: 700 }}>→</span>
                  </a>
                ))}
              </div>

              <div className="sidebar-widget" style={{ background: 'linear-gradient(135deg, #0F1A2E, #1a3360)', color: '#fff', border: 'none', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 100% 0%, rgba(59, 130, 246, 0.25) 0%, transparent 60%)', zIndex: 0 }} />
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <h3 style={{ color: '#60A5FA', borderBottomColor: 'rgba(255,255,255,0.1)' }}>🚀 Counselling</h3>
                  <p style={{ fontSize: '13px', color: '#94A3B8', marginBottom: '16px', lineHeight: '1.55' }}>
                    Unsure which batch to join? Get free personalized guidance from our counsellors.
                  </p>
                  <Link href="/enquiry/" className="btn btn-primary" style={{ display: 'flex', justifyContent: 'center', width: '100%', background: '#3B82F6', borderColor: '#3B82F6' }}>
                    Talk to Us →
                  </Link>
                </div>
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
