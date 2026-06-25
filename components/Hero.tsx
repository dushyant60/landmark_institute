'use client';

import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';

const checkPath = 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
const waPath =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 15 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] } },
};

export default function Hero() {
  return (
    <div className="hero">
      <div className="hero-inner">
        {/* Left column */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', flexDirection: 'column' }}
        >
          <motion.div variants={itemVariants} className="hero-badge">
            <span></span> 100+ NIT Selections in NIMCET
          </motion.div>
          <motion.h1 variants={itemVariants}>
            India&apos;s Most Trusted
            <br />
            <span className="accent">MCA Entrance</span>
            <br />
            Coaching Institute
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-sub">
            Expert preparation for{' '}
            <strong>NIMCET, CUET PG MCA, DU MCA, JNU MCA, BHU MCA, Jamia</strong> &amp; all
            MCA entrance exams. 17 years of proven results.
          </motion.p>
          <motion.div variants={itemVariants} className="hero-btns">
            <a href="/contactus/" className="btn btn-primary btn-lg">
              Apply Now →
            </a>
            <a
              href="/documents/Landmark%20Institute.pdf"
              download
              className="btn btn-outline btn-lg"
              style={{ borderColor: 'rgba(255,255,255,.3)', color: '#fff' }}
            >
              Download Brochure
            </a>
            <a href="https://wa.me/919999992338" className="btn btn-green btn-lg">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d={waPath} />
              </svg>
              WhatsApp Now
            </a>
          </motion.div>

          <motion.div variants={itemVariants} className="hero-stats">
            <div className="hero-stat">
              <div className="hero-stat-num">17<span>+</span></div>
              <div className="hero-stat-label">Years Experience</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">6000<span>+</span></div>
              <div className="hero-stat-label">Students Trained</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">500<span>+</span></div>
              <div className="hero-stat-label">NIT Selections</div>
            </div>
            <div className="hero-stat">
              <div className="hero-stat-num">AIR<span> 1</span></div>
              <div className="hero-stat-label">Top Rankers</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right column — Counselling form card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="show"
          className="hero-card"
        >
          <h3>Get Counselling</h3>
          <p>Talk to our experts &amp; plan your MCA journey</p>

          <ContactForm
            buttonText="Book Counselling →"
            showMessageField={false}
          />

          <div className="trust-badges">
            <div className="trust-badge">
              <svg viewBox="0 0 24 24"><path d={checkPath} /></svg>
              No Spam
            </div>
            <div className="trust-badge">
              <svg viewBox="0 0 24 24"><path d={checkPath} /></svg>
              Expert Guidance
            </div>
          </div>
        </motion.div>
      </div>

      {/* Wave */}
      <div className="hero-wave">
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="var(--bg)">
          <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
        </svg>
      </div>
    </div>
  );
}
