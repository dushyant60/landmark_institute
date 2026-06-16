'use client';

import { motion, Variants } from 'framer-motion';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function TermsPageClient() {
  return (
    <>
      <Topbar />
      <Navbar />

      <style dangerouslySetInnerHTML={{
        __html: `
        .legal-hero {
          background: linear-gradient(135deg, #0A1628 0%, #1a3360 100%);
          padding: 60px 0 40px;
          text-align: center;
        }
        .legal-hero h1 {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(24px, 4vw, 40px);
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
        }
        .legal-hero p { font-size: 14px; color: #94A3B8; }
        .legal-section { padding: 60px 0 80px; background: var(--bg); }
        .legal-content {
          max-width: 820px;
          margin: 0 auto;
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 48px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.04);
        }
        .legal-content h2 {
          font-family: 'Poppins', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: var(--slate);
          margin: 36px 0 12px;
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
        }
        .legal-content h2:first-of-type { margin-top: 0; padding-top: 0; border-top: none; }
        .legal-content p {
          font-size: 14.5px;
          color: var(--slate-mid);
          line-height: 1.8;
          margin-bottom: 14px;
        }
        .legal-content ul {
          margin: 0 0 16px 20px;
          font-size: 14.5px;
          color: var(--slate-mid);
          line-height: 1.8;
        }
        .legal-content li { margin-bottom: 6px; }
        .legal-content a { color: var(--blue); text-decoration: underline; }
        .legal-updated {
          font-size: 12px;
          color: var(--text-muted);
          margin-bottom: 32px;
          padding: 10px 16px;
          background: var(--blue-light);
          border-radius: 8px;
          display: inline-block;
        }
      `}} />

      <div className="legal-hero" style={{ overflow: 'hidden' }}>
        <motion.div
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={itemVariants}>Terms And Conditions</motion.h1>
          <motion.p variants={itemVariants}>Landmark Institute — Please read these terms carefully before using our services</motion.p>
        </motion.div>
        <div style={{ height: '40px', marginTop: '20px' }}>
          <svg viewBox="0 0 1440 40" preserveAspectRatio="none" fill="var(--bg)" style={{ width: '100%', height: '100%' }}>
            <path d="M0,40 L0,20 Q720,0 1440,20 L1440,40 Z" />
          </svg>
        </div>
      </div>

      <section className="legal-section" style={{ overflow: 'hidden' }}>
        <div className="container">
          <motion.div
            className="legal-content"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="legal-updated">Last Updated: June 2026</span>

            <p><strong>Terms and Conditions</strong></p>
            <p>
              1. This website provides information in regard to all the details of LandMark Institute and its education services in the field of MCA Entrance Exams Coaching both Offline and Online.
            </p>
            <p>
              2. All eligible students or persons who want to pursue these services can register themselves through paying the fee.
            </p>
            <p>
              3. Each registered user once paid the fee has access to online and offline coaching whichever one register and whichever is available as a medium of coaching. In Covid times the same is running online.
            </p>
            <p>
              4. The registered user should have a good Wi-Fi connection to ensure the smooth running of online Classes. We do not take any responsibility if the registered student taking our classes does not have a good quality internet connection.
            </p>
            <p>
              5. The company reserves the right to review and revise the Terms of Use from time to time without prior notice and, by using this site subsequent to any revision of the Terms of Use, you agree to be bound by such changes.
            </p>

            <h2>No Representations or Warranties</h2>
            <p>
              The services provided on this Web site and the content, information, documents, graphics and images published at this Web site could include inaccuracies, typographical errors or other errors. Furthermore, we reserve the right to temporarily, or permanently, modify, alter, discontinue or delete the same without prior notice.
            </p>

            <h2>Security</h2>
            <p>
              Registered user/student will have a log in account and password. You are responsible for maintaining the confidentiality of your password and account information and are fully responsible for all conduct carried out under this password and account. We are not liable for any loss of confidentiality or for any damages arising from your failure to comply with these terms. You will promptly report any unauthorized use of your password to us.
            </p>

            <h2>Ownership</h2>
            <p>
              All contents of this website are Copyright of LandMark Institute.
            </p>

            <h2>Refund Policy</h2>
            <p>
              The fee once paid for any Course in LandMark Institute is <strong>NON REFUNDABLE</strong>.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
