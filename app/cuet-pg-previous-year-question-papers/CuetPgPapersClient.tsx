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

export default function CuetPgPapersClient() {
  const htmlContent1 = `
<img src="/images/migrated/cuet-pg-previous-year-question-paper-with-answers-pdf.jpeg" alt="cuet pg previous year question papers with answers pdf" style="max-width: 100%; height: auto; border-radius: var(--r-sm); margin: 24px 0; display: block;" />
<p>Preparing for the Common University Entrance Test (Postgraduate) requires more than just completing the syllabus. One of the most effective ways to improve your preparation is by solving <strong>CUET PG Previous Year Question Paper with Answers PDF</strong>. These papers help candidates understand the exam pattern, identify important topics, improve time management, and evaluate their preparation level before the examination.</p>
<p>At Landmark Institute, our faculty members regularly analyze previous year papers to help students understand exam trends and prepare more effectively. Based on our experience, candidates who consistently practice previous year question papers often develop better accuracy, confidence, and problem-solving skills.</p>
<h2>Why Solve CUET PG Previous Year Question Paper?</h2>
<p>Previous year papers provide valuable insights into the structure of the examination and help candidates become familiar with the types of questions that are commonly asked.</p>
<ul>
<li>Understand the latest exam pattern.</li>
<li>Improve speed and accuracy.</li>
<li>Identify important and recurring topics.</li>
<li>Develop better time-management skills.</li>
<li>Build confidence before the examination.</li>
<li>Evaluate strengths and weaknesses.</li>
</ul>
`;

  const htmlContent2 = `
<h2>Frequently Asked Questions</h2>
<h3>Q1. How many years of CUET PG papers should I solve?</h3>
<p>Ans. Most candidates benefit from solving at least the previous three to five years of question papers.</p>
<h3>Q2. Are previous year papers enough for preparation?</h3>
<p>Ans. Previous year papers should be combined with syllabus completion, revision, and mock tests for comprehensive preparation.</p>
<h3>Q3. Do questions repeat in CUET PG?</h3>
<p>Ans. Exact questions may not repeat frequently, but concepts and question patterns often remain similar.</p>
<h2>About Landmark Institute</h2>
<p>Landmark Institute provides guidance for MCA entrance examinations and postgraduate entrance preparation through structured courses, study material, mock tests, and academic support. Our faculty team continuously reviews examination trends to help students prepare effectively.</p>
<p><strong>Reviewed By:</strong> Landmark Institute Team<br /><strong>Last Updated:</strong> May 2026</p>
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
            CUET PG Previous Year Papers
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
            dangerouslySetInnerHTML={{ __html: htmlContent1 }}
          />

          <motion.h2
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            style={{ fontFamily: "'Poppins', sans-serif", fontSize: '24px', fontWeight: 800, marginTop: '48px', marginBottom: '8px', color: 'var(--slate)', borderBottom: '2px solid var(--border-light)', paddingBottom: '8px' }}
          >
            Download CUET PG Previous Year Question Papers
          </motion.h2>
          <motion.p
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '32px' }}
          >
            Solve official previous year papers to test your preparation and understand the difficulty level.
          </motion.p>

          <motion.div
            className="downloads-grid"
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            {/* CUET PG 2025 */}
            <motion.div className="download-card" variants={itemVariants}>
              <div>
                <div className="download-card-header">
                  <div className="download-card-icon" style={{ background: '#FEF2F2', color: '#EF4444' }}>📄</div>
                  <h3 className="download-card-title">CUET PG 2025</h3>
                </div>
                <div className="download-card-tagline">Previous Year Question Paper 2025</div>
                <p className="download-card-desc">Official question paper with response keys for CUET PG entrance examination.</p>
              </div>
              <a href="/documents/CUET-PG-2025-3.pdf" download className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                Download PDF
              </a>
            </motion.div>

            {/* CUET PG 2024 */}
            <motion.div className="download-card" variants={itemVariants}>
              <div>
                <div className="download-card-header">
                  <div className="download-card-icon" style={{ background: '#FEF2F2', color: '#EF4444' }}>📄</div>
                  <h3 className="download-card-title">CUET PG 2024</h3>
                </div>
                <div className="download-card-tagline">Previous Year Question Paper 2024</div>
                <p className="download-card-desc">Official question paper with response keys for CUET PG entrance examination.</p>
              </div>
              <a href="/documents/CUET-PG-2024-1-1.pdf" download className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                Download PDF
              </a>
            </motion.div>

            {/* CUET PG 2023 */}
            <motion.div className="download-card" variants={itemVariants}>
              <div>
                <div className="download-card-header">
                  <div className="download-card-icon" style={{ background: '#FEF2F2', color: '#EF4444' }}>📄</div>
                  <h3 className="download-card-title">CUET PG 2023</h3>
                </div>
                <div className="download-card-tagline">Previous Year Question Paper 2023</div>
                <p className="download-card-desc">Official question paper with response keys for CUET PG entrance examination.</p>
              </div>
              <a href="/documents/CUET-PG-2023.pdf" download className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                Download PDF
              </a>
            </motion.div>

            {/* CUET PG 2022 */}
            <motion.div className="download-card" variants={itemVariants}>
              <div>
                <div className="download-card-header">
                  <div className="download-card-icon" style={{ background: '#FEF2F2', color: '#EF4444' }}>📄</div>
                  <h3 className="download-card-title">CUET PG 2022</h3>
                </div>
                <div className="download-card-tagline">Previous Year Question Paper 2022</div>
                <p className="download-card-desc">Official question paper with response keys for CUET PG entrance examination.</p>
              </div>
              <a href="/documents/CUETPG-2022-2.pdf" download className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
                Download PDF
              </a>
            </motion.div>

            {/* Featured Solved Papers Card */}
            <motion.div className="download-card featured" variants={itemVariants}>
              <div className="download-card-featured-inner">
                <div style={{ flex: 1 }}>
                  <div className="download-card-header" style={{ marginBottom: '8px' }}>
                    <div className="download-card-icon" style={{ background: 'var(--blue-light)', color: 'var(--blue)' }}>📚</div>
                    <h3 className="download-card-title">CUET PG Solved Papers (2021-2025)</h3>
                  </div>
                  <div className="download-card-tagline" style={{ fontSize: '15px', color: 'var(--blue)' }}>
                    CUET PG Solved Previous Year Papers PDF
                  </div>
                  <p className="download-card-desc" style={{ fontSize: '13.5px', marginBottom: 0 }}>
                    Get full access to solved previous year papers with answer keys, detailed explanations, and exam pattern analysis.
                  </p>
                </div>
                <a href="/documents/CUET-PG-Solved-Previous-Year-Paper-2021-2025.pdf" download className="btn btn-green btn-lg" style={{ justifyContent: 'center', minWidth: '220px' }}>
                  Download Solved Papers
                </a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            className="prose-custom"
            variants={itemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
            dangerouslySetInnerHTML={{ __html: htmlContent2 }}
          />
        </div>
      </main>

      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
