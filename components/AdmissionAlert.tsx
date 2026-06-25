'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

export default function AdmissionAlert() {
  return (
    <section className="admission-section" id="admission-open" style={{ padding: '72px 0', background: 'var(--bg-light)' }}>
      <div className="container">
        <motion.div
          className="section-header center"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <span className="section-eyebrow" style={{ background: '#FEE2E2', color: '#EF4444', padding: '4px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            Admission Open
          </span>
          <h2 className="section-title" style={{ marginTop: '16px' }}>Join for Demo Classes</h2>
          <p className="section-sub">Registration Open for New Batches for 2027-2028 (Offline/Online)</p>
        </motion.div>

        <motion.div
          className="admission-grid"
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '40px', marginTop: '40px' }}
        >
          {/* Left Side: Batches & Details */}
          <motion.div variants={fadeUp} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <div style={{ background: '#fff', padding: '32px', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-sm)' }}>
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--slate)', marginBottom: '20px', fontFamily: "'Poppins', sans-serif" }}>
                Available Batches
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', background: 'var(--blue-light)', color: 'var(--blue)', fontWeight: 700, fontSize: '14px' }}>✓</span>
                  <span style={{ fontSize: '15.5px', fontWeight: 600, color: 'var(--slate)' }}>
                    Online Live Classes
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', background: 'var(--blue-light)', color: 'var(--blue)', fontWeight: 700, fontSize: '14px' }}>✓</span>
                  <span style={{ fontSize: '15.5px', fontWeight: 600, color: 'var(--slate)' }}>
                    Hybrid Batch
                  </span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', background: 'var(--blue-light)', color: 'var(--blue)', fontWeight: 700, fontSize: '14px' }}>✓</span>
                  <span style={{ fontSize: '15.5px', fontWeight: 600, color: 'var(--slate)' }}>
                    Regular Offline Batch (Patel Nagar, Delhi)
                  </span>
                </li>
              </ul>
            </div>

            <div style={{ background: 'linear-gradient(135deg, #0F1A2E 0%, #1A365D 100%)', color: '#fff', padding: '32px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: 'var(--shadow-md)' }}>
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Registration Details
              </h4>
              <p style={{ fontSize: '24px', fontWeight: 800, margin: '0 0 16px 0', color: '#fff' }}>
                Registration Fee: <span style={{ color: '#FCD34D' }}>Rs. 500 /-</span>
              </p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '20px' }}>📱</span>
                <div>
                  <p style={{ margin: '0 0 4px 0', fontSize: '14.5px', fontWeight: 600 }}>Paytm Number</p>
                  <p style={{ margin: 0, fontSize: '20px', fontWeight: 800, color: '#FCD34D', letterSpacing: '0.05em' }}>9999992338</p>
                  <p style={{ margin: '8px 0 0 0', fontSize: '13px', color: '#94A3B8', lineHeight: 1.4 }}>
                    You can pay your registration fee via Paytm at this number.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: QR Code Card */}
          <motion.div variants={fadeUp} style={{ display: 'flex' }}>
            <div style={{ background: '#fff', padding: '32px', borderRadius: '12px', border: '1px solid var(--border)', boxShadow: 'var(--shadow-md)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '100%', textAlign: 'center' }}>
              <div style={{ background: '#002E6E', color: '#fff', padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span>🔒</span> SECURE QR PAYMENT
              </div>
              <div style={{ background: '#f8fafc', padding: '16px', borderRadius: '12px', border: '1px solid var(--border)', display: 'inline-flex', justifyContent: 'center', alignItems: 'center', marginBottom: '16px' }}>
                <Image
                  src="/images/migrated/paytm.png"
                  alt="Paytm QR Code"
                  width={220}
                  height={220}
                  style={{ objectFit: 'contain' }}
                />
              </div>
              <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--text-muted)', fontWeight: 500 }}>
                Scan this QR code using Paytm app to pay the registration fee.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @media (max-width: 900px) {
          .admission-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}} />
    </section>
  );
}
