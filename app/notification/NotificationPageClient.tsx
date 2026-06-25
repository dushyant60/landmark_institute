'use client';

import { motion, Variants } from 'framer-motion';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

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

export default function NotificationPageClient() {
  const htmlContent = `
<h2>Our New Batch Starts From July 2026</h2>

<p>Hello Students,</p>
<p>Are you targeting MCA Entrance Exams 2027 such as NIMCET, CUET-PG, MAH CET, or other exams?</p>
<p>📢 Registrations are now open for all batches:</p>
<p>✓ Online Live Classes<br /> ✓ Hybrid Batch<br /> ✓ Regular Offline Batch (Patel Nagar, Delhi)</p>
<p>🎯 Enroll now to get a special discount on fees and book your seat in the 1st batch (limited seats available).</p>
<p>📧 Contact us today for details and registration.<br /><a href="https://wa.link/rruo21" target="_blank" rel="noopener noreferrer">https://wa.link/rruo21</a> / 7678249991</p>

<p><strong>Registration fee is Rs. 500 </strong><br /> <img src="/images/migrated/paytm.png" alt="Paytm" style="max-width: 100%; height: auto; border-radius: var(--r-sm); margin: 24px 0; display: block;" /><br /> <strong>you can pay your registration fee via paytm at the number &nbsp; 9999992338</strong></p>
`;

  return (
    <>
      <Topbar />
      <Navbar />

      <div className="hero" style={{ padding: '60px 0 40px', textAlign: 'center', overflow: 'hidden' }}>
        <motion.div
          className="container"
          style={{ maxWidth: '800px' }}
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.span variants={itemVariants} className="hero-badge">Landmark Institute</motion.span>
          <motion.h1 variants={itemVariants} style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.2, margin: '0 auto' }}>
            Notification
          </motion.h1>
        </motion.div>
      </div>

      <main style={{ padding: '60px 0 80px', background: 'var(--bg)', overflow: 'hidden' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <motion.div
            className="prose-custom"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
