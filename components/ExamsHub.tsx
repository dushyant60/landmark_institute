'use client';

import { motion, Variants } from 'framer-motion';

const exams = [
  {
    code: 'NIM',
    flagStyle: { background: '#EEF5FF', color: 'var(--blue)' },
    name: 'NIMCET',
    desc: 'NIT MCA Common Entrance Test — the most prestigious MCA entrance for NITs across India.',
    links: ['Syllabus', 'Pattern', 'Previous Papers', 'Eligibility'],
  },
  {
    code: 'CUE',
    flagStyle: { background: '#E8FFF2', color: 'var(--green-dark)' },
    name: 'CUET PG MCA',
    desc: 'Common University Entrance Test for postgraduate MCA admissions to central universities.',
    links: ['Syllabus', 'Pattern', 'Previous Papers', 'Eligibility'],
  },
  {
    code: 'DU',
    flagStyle: { background: '#FFF7ED', color: '#EA580C' },
    name: 'DU MCA',
    desc: "Delhi University MCA entrance exam for admission to one of India's most sought-after programmes.",
    links: ['Syllabus', 'Pattern', 'Previous Papers', 'Eligibility'],
  },
  {
    code: 'JNU',
    flagStyle: { background: '#F5F3FF', color: '#7C3AED' },
    name: 'JNU MCA',
    desc: 'Jawaharlal Nehru University MCA entrance — known for its rigorous CS-focused curriculum.',
    links: ['Syllabus', 'Pattern', 'Previous Papers'],
  },
  {
    code: 'BHU',
    flagStyle: { background: '#FEF3C7', color: '#B45309' },
    name: 'BHU MCA',
    desc: "Banaras Hindu University MCA entrance for admission to one of India's oldest central universities.",
    links: ['Syllabus', 'Pattern', 'Previous Papers'],
  },
  {
    code: 'MAH',
    flagStyle: { background: '#FCE7F3', color: '#BE185D' },
    name: 'MAH MCA CET',
    desc: 'Maharashtra MCA Common Entrance Test for admissions to MCA programmes across Maharashtra.',
    links: ['Syllabus', 'Pattern', 'Previous Papers'],
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
  hidden: { opacity: 0, y: 25 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

export default function ExamsHub() {
  return (
    <section className="exams-bg" id="exams">
      <div className="container">
        <motion.div
          className="section-header center"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-eyebrow">Exam Information Hub</span>
          <h2 className="section-title">Know Your Target Exam Inside Out</h2>
          <p className="section-sub">
            Detailed guides on eligibility, syllabus, exam pattern, and previous year papers for
            every MCA entrance exam.
          </p>
        </motion.div>

        <motion.div
          className="exams-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {exams.map((exam) => (
            <motion.div className="exam-card" key={exam.name} variants={cardVariants}>
              <div className="exam-flag" style={exam.flagStyle}>
                {exam.code}
              </div>
              <h3>{exam.name}</h3>
              <p>{exam.desc}</p>
              <div className="exam-links">
                {exam.links.map((link) => (
                  <a href="#" className="exam-link" key={link}>
                    {link}
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
