'use client';

import { motion, Variants } from 'framer-motion';

const cards = [
  {
    icon: 'M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z',
    title: '17+ Years of Proven Results',
    desc: 'Since 2007, we have consistently produced top AIR rankers in NIMCET and all major MCA entrance exams. Our track record speaks for itself.',
  },
  {
    icon: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M9 7a4 4 0 1 0 0 8 4 4 0 0 0 0-8z',
    title: 'Expert Faculty Team',
    desc: 'Led by Prof. R. Chadha — author of BCA Mathematics, ex-faculty GGSIP University — our team brings unmatched depth to every topic.',
  },
  {
    icon: 'M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2zM22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z',
    title: 'Complete Study Material',
    desc: 'Comprehensive notes, formula sheets, previous year papers, and topic-wise practice sets — everything curated by our expert faculty.',
  },
  {
    icon: 'M17 20h5v-2a3 3 0 0 0-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 0 1 5.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 0 1 9.288 0',
    title: 'Small Batch Size',
    desc: 'We deliberately keep batches small to ensure every student receives individual attention, personalised feedback, and mentorship.',
  },
  {
    icon: 'M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M9 5a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2M9 5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2m-6 9l2 2 4-4',
    title: 'Regular Mock Tests',
    desc: 'Hundreds of mock tests mapped to exact exam patterns, with detailed analysis after each test to identify weak areas and track progress.',
  },
  {
    icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z',
    title: 'Personal Mentorship',
    desc: 'Direct access to faculty for doubt resolution, strategy planning, and motivation — because exam prep is as much mental as it is academic.',
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
      staggerChildren: 0.08,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export default function WhyLandmark() {
  return (
    <section>
      <div className="container">
        <motion.div
          className="section-header center"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-eyebrow">Why Choose Us</span>
          <h2 className="section-title">India&apos;s #1 MCA Entrance Institute</h2>
          <p className="section-sub">
            17 years of consistent top results across every major MCA entrance exam. Here&apos;s
            what sets us apart.
          </p>
        </motion.div>

        <motion.div
          className="why-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {cards.map((card) => (
            <motion.div className="why-card" key={card.title} variants={cardVariants}>
              <div className="why-icon">
                <svg viewBox="0 0 24 24">
                  <path d={card.icon} />
                </svg>
              </div>
              <h3>{card.title}</h3>
              <p>{card.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
