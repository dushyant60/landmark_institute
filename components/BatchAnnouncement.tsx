'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function BatchAnnouncement() {
  return (
    <section className="batch-announcement-section">
      <div className="container">
        <motion.div
          className="batch-banner-wrapper"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="batch-banner-glow" />
          <div className="batch-banner-content">
            <div className="batch-banner-left">
              <span className="batch-banner-badge">
                <span className="pulse-dot-green"></span>
                Admissions Open
              </span>
              <h2 className="batch-banner-title">
                New Batch Commencing <span className="accent-text">July 2027</span>
              </h2>
              <p className="batch-banner-subtitle">
                Start your comprehensive preparation for NIMCET, CUET PG, and all major MCA Entrance Exams. Secure your seat today.
              </p>
            </div>

            <div className="batch-banner-right">
              <Link href="/contactus/" className="btn btn-primary btn-lg batch-btn">
                Enquire Now
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .batch-announcement-section {
          padding: 40px 0;
          background: var(--bg-light);
          overflow: hidden;
        }

        .batch-banner-wrapper {
          position: relative;
          background: linear-gradient(135deg, #0b1528 0%, #112244 100%);
          border: 1px solid rgba(59, 130, 246, 0.2);
          border-radius: var(--r-lg);
          padding: 40px 48px;
          color: #fff;
          box-shadow: var(--shadow-lg);
          overflow: hidden;
        }

        .batch-banner-glow {
          position: absolute;
          top: -100px;
          right: -100px;
          width: 250px;
          height: 250px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
          z-index: 0;
          pointer-events: none;
        }

        .batch-banner-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 32px;
          position: relative;
          z-index: 1;
        }

        .batch-banner-left {
          max-width: 680px;
        }

        .batch-banner-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(59, 130, 246, 0.12);
          border: 1px solid rgba(59, 130, 246, 0.25);
          color: #60a5fa;
          padding: 6px 14px;
          border-radius: 100px;
          font-size: 13px;
          font-weight: 700;
          margin-bottom: 16px;
          text-transform: uppercase;
          letter-spacing: 0.04em;
        }

        .pulse-dot-green {
          width: 8px;
          height: 8px;
          background: #10B981;
          border-radius: 50%;
          position: relative;
          display: inline-block;
        }
        
        .pulse-dot-green::after {
          content: '';
          position: absolute;
          inset: -4px;
          border-radius: 50%;
          border: 2px solid #10B981;
          animation: pulse-ring 1.5s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.5); opacity: 1; }
          80%, 100% { transform: scale(1.8); opacity: 0; }
        }

        .batch-banner-title {
          font-family: 'Poppins', sans-serif;
          font-size: clamp(24px, 3.5vw, 32px);
          font-weight: 800;
          line-height: 1.25;
          margin-bottom: 12px;
          color: #fff;
        }

        .accent-text {
          color: #fcd34d;
          background: linear-gradient(to right, #FCD34D, #F59E0B);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .batch-banner-subtitle {
          font-size: 15px;
          color: #94a3b8;
          line-height: 1.6;
          margin: 0;
        }

        .batch-banner-right {
          flex-shrink: 0;
        }

        .batch-btn {
          min-width: 160px;
          text-align: center;
          justify-content: center;
        }

        @media (max-width: 900px) {
          .batch-banner-content {
            flex-direction: column;
            align-items: flex-start;
            gap: 24px;
          }
          .batch-banner-wrapper {
            padding: 32px;
          }
          .batch-banner-right {
            width: 100%;
          }
          .batch-btn {
            width: 100%;
          }
        }
      `}} />
    </section>
  );
}
