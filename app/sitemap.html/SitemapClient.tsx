'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

const sitemapData = [
  {
    category: 'Core Pages',
    description: 'Main navigational pages of the Landmark Institute platform.',
    links: [
      { label: 'Home', href: '/' },
      { label: 'About Us', href: '/about-us/' },
      { label: 'Contact Us', href: '/contactus/' },
      { label: 'Faculty & Mentors', href: '/faculty/' },
      { label: 'Our Success Results', href: '/results/' },
      { label: 'Student Central', href: '/student-central/' },
    ],
  },
  {
    category: 'Programs & Courses',
    description: 'Explore our classroom, online, weekend, and crash courses.',
    links: [
      { label: 'Our Courses Overview', href: '/our-courses/' },
      { label: 'Online MCA Entrance Program', href: '/online-mca-entrance-exam/' },
      { label: 'NIMCET Coaching in Patna', href: '/nimcet-coaching-in-patna/' },
      { label: 'MCA Entrance Coaching in Kanpur', href: '/mca-entrance-coaching-in-kanpur/' },
    ],
  },
  {
    category: 'Exams & Prep',
    description: 'Exam patterns, syllabus, and previous year question papers.',
    links: [
      { label: 'Exams Hub', href: '/exams/' },
      { label: 'NIMCET Entrance Info', href: '/nimcet/' },
      { label: 'CUET PG MCA Info', href: '/cuet-pg-mca/' },
      { label: 'MCA Entrance Syllabus', href: '/syllabus/' },
      { label: 'CUET PG Previous Year Papers', href: '/cuet-pg-previous-year-question-papers/' },
    ],
  },
  {
    category: 'Updates & Media',
    description: 'Latest notifications, updates, blog posts, and video testimonials.',
    links: [
      { label: 'Latest Notifications', href: '/notification/' },
      { label: 'Top MCA Colleges', href: '/notifications/' },
      { label: 'Video Testimonials', href: '/videos/' },
      { label: 'Official Blog', href: '/blog/' },
    ],
  },
  {
    category: 'Articles & Guides',
    description: 'Valuable guides and reference posts for MCA entrance aspirants.',
    links: [
      { label: 'Everything You Need to Know About MCA', href: '/everything-you-need-to-know-about-mca/' },
      { label: 'Top 10 Universities in India for MCA', href: '/top-10-universities-in-india-for-mca/' },
      { label: 'Career Options Available After MCA', href: '/what-are-the-career-options-available-after-mca/' },
      { label: 'The Hidden Merits of Pursuing MCA', href: '/the-hidden-merits-of-pursuing-mca/' },
      { label: "Don't Miss This Crash Course", href: '/dont-miss-this-crash-course-if-mca-is-your-dream/' },
    ],
  },
  {
    category: 'Legal & Policies',
    description: 'Terms of service, privacy regulations, and machine-readable data.',
    links: [
      { label: 'Privacy Policy', href: '/privacy-policy/' },
      { label: 'Terms & Conditions', href: '/terms-and-conditions/' },
      { label: 'XML Sitemap (Search Engines)', href: '/sitemap.xml' },
    ],
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function SitemapClient() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Hero Header */}
      <div className="sitemap-hero">
        <div className="container">
          <span className="hero-badge">Site Directory</span>
          <h1>Landmark Institute Sitemap</h1>
          <p>
            An organized overview of all public sections, courses, guides, and updates available on our platform.
          </p>
        </div>
        <div className="hero-wave">
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="var(--bg)">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </div>

      {/* CSS Overrides */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .sitemap-hero {
          padding: 60px 0 45px;
          text-align: center;
          background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
          color: #fff;
          position: relative;
        }
        .sitemap-hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(32px, 5vw, 44px);
          font-weight: 800;
          margin-bottom: 12px;
          letter-spacing: -0.02em;
        }
        .sitemap-hero p {
          max-width: 650px;
          margin: 0 auto;
          font-size: 16px;
          color: #94A3B8;
          line-height: 1.6;
        }
        .hero-badge {
          display: inline-block;
          background: rgba(188, 22, 0, 0.15);
          color: #EF4444;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          margin-bottom: 16px;
          border: 1px solid rgba(188, 22, 0, 0.25);
        }
        .hero-wave {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 30px;
        }
        .hero-wave svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .sitemap-section {
          padding: 60px 0 80px;
          background: var(--bg);
        }
        .sitemap-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        .sitemap-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 28px;
          box-shadow: var(--shadow);
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .sitemap-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
        }
        .sitemap-card h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 18px;
          font-weight: 700;
          color: var(--slate);
          margin-bottom: 6px;
          border-bottom: 2px solid var(--blue-light);
          padding-bottom: 10px;
        }
        .sitemap-card-desc {
          font-size: 12.5px;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 18px;
        }
        .sitemap-links-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .sitemap-link-item a {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 14.5px;
          color: var(--slate-mid);
          text-decoration: none;
          font-weight: 500;
          transition: color 0.15s, transform 0.15s;
        }
        .sitemap-link-item a::before {
          content: '→';
          color: var(--blue);
          font-weight: bold;
          font-size: 13px;
          transition: transform 0.15s;
        }
        .sitemap-link-item a:hover {
          color: var(--blue-dark);
          transform: translateX(3px);
        }
        .sitemap-link-item a:hover::before {
          transform: scale(1.2);
        }

        @media (max-width: 960px) {
          .sitemap-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }
        @media (max-width: 640px) {
          .sitemap-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          .sitemap-hero {
            padding: 50px 16px 35px;
          }
        }
      `}} />

      {/* Main Sitemap Content */}
      <section className="sitemap-section">
        <div className="container">
          <motion.div
            className="sitemap-grid"
            variants={containerVariants}
            initial="hidden"
            animate="show"
          >
            {sitemapData.map((category) => (
              <motion.div
                className="sitemap-card"
                key={category.category}
                variants={cardVariants}
              >
                <h3>{category.category}</h3>
                <p className="sitemap-card-desc">{category.description}</p>
                <ul className="sitemap-links-list">
                  {category.links.map((link) => (
                    <li className="sitemap-link-item" key={link.label}>
                      <Link href={link.href}>{link.label}</Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}




