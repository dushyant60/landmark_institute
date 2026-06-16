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

export default function PrivacyPolicyClient() {
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
          <motion.h1 variants={itemVariants}>Privacy Policy</motion.h1>
          <motion.p variants={itemVariants}>Landmark Institute — Your privacy is our priority</motion.p>
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

            <h2>Who we are</h2>
            <p>
              Our website address is: <a href="https://www.landmarkinstitute.com">https://www.landmarkinstitute.com</a>.
            </p>

            <h2>Comments</h2>
            <p>
              When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.
            </p>
            <p>
              An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: <a href="https://automattic.com/privacy/" target="_blank" rel="noopener noreferrer">https://automattic.com/privacy/</a>. After approval of your comment, your profile picture is visible to the public in the context of your comment.
            </p>

            <h2>Media</h2>
            <p>
              If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
            </p>

            <h2>Cookies</h2>
            <p>
              If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.
            </p>
            <p>
              If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.
            </p>
            <p>
              When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select "Remember Me", your login will persist for two weeks. If you log out of your account, the login cookies will be removed.
            </p>
            <p>
              If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
            </p>

            <h2>Embedded content from other websites</h2>
            <p>
              Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
            </p>
            <p>
              These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
            </p>

            <h2>Who we share your data with</h2>
            <p>
              If you request a password reset, your IP address will be included in the reset email.
            </p>

            <h2>How long we retain your data</h2>
            <p>
              If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.
            </p>
            <p>
              For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
            </p>

            <h2>What rights you have over your data</h2>
            <p>
              If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
            </p>

            <h2>Where your data is sent</h2>
            <p>
              Visitor comments may be checked through an automated spam detection service.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
