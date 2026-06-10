'use client';

import { motion, Variants } from 'framer-motion';

const checkPath = 'M5 13l4 4L19 7';
const arrowPath = 'M5 12h14M12 5l7 7-7 7';

const courses = [
  {
    tag: 'Most Popular',
    tagClass: 'tag-blue',
    featured: true,
    title: '1 Year Online Batch',
    desc: 'The most comprehensive programme — covering the full NIMCET & CUET PG MCA syllabus with live classes, recordings, and regular assessments. Ideal for fresh graduates.',
    features: ['Live & Recorded Classes', 'Weekly Mock Tests', 'Doubt Sessions', 'Full Study Material'],
    seats: 'Limited seats available',
  },
  {
    tag: 'Offline · Delhi',
    tagClass: 'tag-green',
    featured: false,
    title: 'Offline Regular Batch',
    desc: 'Face-to-face classroom coaching at our West Patel Nagar centre. Direct faculty interaction, peer competition, and structured daily schedule for maximum focus.',
    features: ['Classroom Sessions', 'Personal Mentorship', 'Test Series', 'Printed Notes'],
    seats: '8 seats remaining',
  },
  {
    tag: 'Weekends',
    tagClass: 'tag-orange',
    featured: false,
    title: 'Weekend Batch',
    desc: 'Designed for working professionals and students with a weekday schedule. Saturday & Sunday intensive sessions covering the complete syllabus at a steady pace.',
    features: ['Sat–Sun Classes', 'Online + Offline', 'Recorded Backup', 'Mock Tests'],
    seats: 'New batch starting soon',
  },
  {
    tag: 'Fast Track',
    tagClass: 'tag-purple',
    featured: false,
    title: 'Crash Course + Test Series',
    desc: 'Intensive 60-90 day revision programme for students who have completed their preparation. Focus on speed, accuracy, and exam temperament with daily mock tests.',
    features: ['Daily Mock Tests', 'Performance Analysis', 'Revision Modules', 'Rank Predictor'],
    seats: 'Enrol anytime',
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

export default function Courses() {
  return (
    <section id="courses">
      <div className="container">
        <motion.div
          className="section-header"
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="section-eyebrow">Our Programmes</span>
          <h2 className="section-title">Choose the Right Batch for You</h2>
          <p className="section-sub">
            From intensive year-long preparation to focused crash courses — we have a batch for
            every schedule and goal.
          </p>
        </motion.div>

        <motion.div
          className="courses-grid"
          variants={gridVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-100px' }}
        >
          {courses.map((course) => (
            <motion.div
              className={`course-card${course.featured ? ' featured' : ''}`}
              key={course.title}
              variants={cardVariants}
            >
              <div>
                <span className={`course-tag ${course.tagClass}`}>{course.tag}</span>
              </div>
              <h3>{course.title}</h3>
              <p>{course.desc}</p>
              <div className="course-features">
                {course.features.map((f) => (
                  <span className="feature-pill" key={f}>
                    <svg viewBox="0 0 24 24"><path d={checkPath} /></svg>
                    {f}
                  </span>
                ))}
              </div>
              <div className="course-footer">
                <span className="course-seats">
                  <span className="seats-dot"></span>
                  {course.seats}
                </span>
                <a href="#" className="course-link">
                  View Details{' '}
                  <svg viewBox="0 0 24 24"><path d={arrowPath} /></svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
