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
    <section className="admission-section" id="admission-open">
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
        >
          {/* Left Side: Batches & Details */}
          <motion.div variants={fadeUp} className="admission-left">
            <div className="admission-card">
              <h3 style={{ fontSize: '20px', fontWeight: 800, color: 'var(--slate)', marginBottom: '20px', fontFamily: "'Poppins', sans-serif" }}>
                Available Batches
              </h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Online Live Classes', 'Hybrid Batch', 'Regular Offline Batch (Patel Nagar, Delhi)'].map((batch) => (
                  <li key={batch} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', borderRadius: '50%', background: 'var(--blue-light)', color: 'var(--blue)', fontWeight: 700, fontSize: '14px', flexShrink: 0 }}>✓</span>
                    <span style={{ fontSize: '15.5px', fontWeight: 600, color: 'var(--slate)' }}>{batch}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="admission-reg-card">
              <h4 style={{ fontSize: '14px', fontWeight: 700, color: '#60A5FA', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
                Registration Details
              </h4>
              <p className="admission-fee-text">
                Registration Fee: <span style={{ color: '#FCD34D' }}>Rs. 500 /-</span>
              </p>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', background: 'rgba(255,255,255,0.05)', padding: '16px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <span style={{ fontSize: '20px', flexShrink: 0 }}>📱</span>
                <div style={{ minWidth: 0 }}>
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
          <motion.div variants={fadeUp} className="admission-right">
            <div className="admission-qr-card">
              <div style={{ background: '#002E6E', color: '#fff', padding: '8px 16px', borderRadius: '20px', fontSize: '12px', fontWeight: 700, marginBottom: '20px', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                <span>🔒</span> SECURE QR PAYMENT
              </div>
              <div className="admission-qr-wrap">
                <Image
                  src="/images/migrated/paytm.png"
                  alt="Paytm QR Code"
                  width={220}
                  height={220}
                  style={{ objectFit: 'contain', width: '100%', height: 'auto', maxWidth: '220px' }}
                />
              </div>
              <p style={{ margin: 0, fontSize: '13.5px', color: 'var(--text-muted)', fontWeight: 500 }}>
                Scan this QR code using Paytm app to pay the registration fee.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        /* ── Section ── */
        .admission-section {
          padding: 72px 0;
          background: var(--bg-light);
        }

        /* ── Grid base ── */
        .admission-grid {
          display: grid;
          grid-template-columns: 1.2fr 0.8fr;
          gap: 40px;
          margin-top: 40px;
          min-width: 0;
        }

        .admission-left {
          display: flex;
          flex-direction: column;
          gap: 24px;
          min-width: 0;
          overflow: hidden;
        }

        .admission-right {
          display: flex;
          min-width: 0;
        }

        /* ── Cards ── */
        .admission-card {
          background: #fff;
          padding: 32px;
          border-radius: 12px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-sm);
        }

        .admission-reg-card {
          background: linear-gradient(135deg, #0F1A2E 0%, #1A365D 100%);
          color: #fff;
          padding: 32px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.05);
          box-shadow: var(--shadow-md);
          overflow: hidden;
          word-break: break-word;
        }

        .admission-fee-text {
          font-size: 24px;
          font-weight: 800;
          margin: 0 0 16px 0;
          color: #fff;
          word-break: break-word;
          overflow-wrap: break-word;
        }

        .admission-qr-card {
          background: #fff;
          padding: 32px;
          border-radius: 12px;
          border: 1px solid var(--border);
          box-shadow: var(--shadow-md);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
          text-align: center;
          overflow: hidden;
        }

        .admission-qr-wrap {
          background: #f8fafc;
          padding: 16px;
          border-radius: 12px;
          border: 1px solid var(--border);
          display: inline-flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 16px;
          max-width: 100%;
        }

        /* ── Tablet: stack at 900px ── */
        @media (max-width: 900px) {
          .admission-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: 24px !important;
          }
          .admission-right {
            width: 100%;
          }
        }

        /* ── Mobile: tighten at 600px ── */
        @media (max-width: 600px) {
          .admission-section {
            padding: 48px 0 !important;
          }
          .admission-grid {
            gap: 16px !important;
            margin-top: 24px !important;
          }
          .admission-card,
          .admission-reg-card,
          .admission-qr-card {
            padding: 20px !important;
          }
          .admission-fee-text {
            font-size: 18px !important;
          }
          .admission-left {
            gap: 16px !important;
          }
          .admission-qr-wrap img {
            max-width: 180px !important;
          }
        }

        /* ── Extra-small: compact at 480px ── */
        @media (max-width: 480px) {
          .admission-card,
          .admission-reg-card,
          .admission-qr-card {
            padding: 16px !important;
          }
          .admission-fee-text {
            font-size: 16px !important;
          }
          .admission-qr-wrap img {
            max-width: 150px !important;
          }
        }
      `}} />
    </section>
  );
}
