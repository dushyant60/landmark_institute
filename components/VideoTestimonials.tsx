'use client';

import { motion, Variants } from 'framer-motion';

const videos = [
  {
    id: 'JNFZhT1Eh6Q',
    title: 'Student Success Story - Ritukar Sir Mentorship',
    desc: 'Hear about the classroom experience, topic coverage, and mock test strategies that helped produce top ranks.',
  },
  {
    id: 'qhtH-4Opz_0',
    title: 'My NIMCET Journey - Crack MCA Entrance',
    desc: 'How consistency, conceptual clarity in mathematics, and daily doubt resolution paved the way to an NIT selection.',
  },
  {
    id: 'JvqhuWHvjb0',
    title: 'From Basics to Top NITs - Landmark Review',
    desc: 'A complete walkthrough of the online live classes, recorded backup benefits, and comprehensive study books.',
  },
  {
    id: 'Wh4odKR5Pp0',
    title: 'How I Cleared MCA Entrance Exam - Success Tips',
    desc: 'Practical guidance on balance, time management, mock analysis, and shortcut tricks for quantitative aptitude.',
  },
];

const headerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const gridVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

const btnVariants: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, delay: 0.2 } },
};

export default function VideoTestimonials() {
  return (
    <section className="videos-section" id="success-stories">
      <div className="container">
        {/* Header */}
        <motion.div
          className="section-header center"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-eyebrow">Video Success Stories</span>
          <h2 className="section-title">Hear From Our Achievers</h2>
          <p className="section-sub">
            Real feedback from students who cleared NIMCET, CUET PG, and top university exams.
            Watch their preparation journeys and strategies.
          </p>
        </motion.div>

        {/* Video Grid */}
        <motion.div
          className="videos-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {videos.map((vid) => (
            <motion.div className="video-card" key={vid.id} variants={cardVariants}>
              <div className="video-wrapper">
                <iframe
                  src={`https://www.youtube.com/embed/${vid.id}`}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Channel Redirect CTA */}
        <motion.div
          className="videos-cta"
          variants={btnVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <a
            href="https://www.youtube.com/@landmarkinstitute_MCAEntrance"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-youtube btn-lg"
          >
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.518 3.5 12 3.5 12 3.5s-7.518 0-9.388.553a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.87.553 9.388.553 9.388.553s7.518 0 9.388-.553a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
            Visit Our YouTube Channel
          </a>
        </motion.div>
      </div>
    </section>
  );
}
