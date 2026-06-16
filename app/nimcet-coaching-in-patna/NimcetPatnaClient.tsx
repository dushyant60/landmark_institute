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

export default function NimcetPatnaClient() {
  const htmlContent = `<figure><img src="/images/migrated/1-Best-Nimcet-Coaching-in-Patna-1024x577.jpg" alt="#1 Best Nimcet Coaching in Patna" style="max-width: 100%; height: auto; border-radius: var(--r-sm); margin: 24px 0; display: block;" /></figure>

<p>If you are looking for the best <strong>Nimcet coaching in Patna</strong>, then you have landed on the right page. In Bihar and neighboring states, MCA candidates have a landmark institute trust for extensive MCA coaching in Patna which provides real results. if either you are targeting NIMCET or other top <strong>MCA entrance exams</strong>, the landmark institute offers expert assistance and smart strategies to help you reach your goals.</p>

<h2>Why choose Patna for MCA Entrance coaching?</h2>

<p>Patna has emerged as a strong contender in the education sector. For students seeking <strong>MCA coaching in Patna</strong>, the city offers top coaching institutes such as Landmark Institute without high cost of large metro.</p>

<h2>Advantages Over Metro Cities</h2>

<ul>
<li>Cost-affect and result of conducting education</li>
</ul>

<ul>
<li>Proximity to home</li>
</ul>

<ul>
<li>Well -connected transport</li>
</ul>

<ul>
<li>Easy access to educational resources</li>
</ul>

<h2>Overview of NIMCET Exam</h2>

<h3>What is Nimcet?</h3>

<p>Nimcet is the key to obtaining admission to the top NIT for MCA. It is a competitive national-level test, and requires strategic preparation to crack it. Some <strong>NIMCET coaching in patna </strong>can help you master.</p>

<h3>Exam Pattern and Course</h3>

<ul>
<li>Mathematics: 50 questions</li>
</ul>

<ul>
<li>Analytical Ability &amp; Logical Reasoning: 40 Questions</li>
</ul>

<ul>
<li>Computer Awareness: 10 Questions</li>
</ul>

<ul>
<li>English: 20 questions</li>
</ul>

<h3>Eligibility</h3>

<p>Students with a bachelor's degree and mathematics as a subject are eligible to apply.</p>

<h2>Introduction to Landmark Institute, Patna</h2>

<h3>Background and Legacy</h3>

<p>A reliable name in MCA coaching in Patna, the Landmark Institute has helped hundreds of students to secure the top rank in Nimcet and other MCA exams.</p>

<h3>mission and vision</h3>

<p>The mission of the landmark is simple: to provide high quality, inexpensive and accessible coaching for each serious MCA aspirant.</p>

<h2>Why Landmark Institute is the best for Nimcet coaching in Patna</h2>

<h3>Expert Faculty</h3>

<p>The veteran teachers of the landmark explain the crystals to the concepts. His deep understanding of the examination gives students a true competitive lead in NIMCET coaching in Patna.</p>

<h3>Result-Driven Classes</h3>

<p>With a mixture of live lectures, doubt sessions and tests, students on the landmark get exactly what they need to succeed.</p>

<h3>Weekly Mock Test</h3>

<p>Get real -time reaction to your performance through regular mock exams designed to mimic the actual Nimcet pattern.</p>

<h3>Personal Mentarship</h3>

<p>The size of the small square ensures that no student is left behind - each receives personal advice.</p>

<h3>Targeted Study Material</h3>

<p>The study material is especially sewn for <strong>MCA coaching in Patna</strong>, making sure that you spend in the study is efficient and effective every minute.</p>

<h2>Special Focus on NIMCET Preparation</h2>

<p>Landmark Institute <strong>NIMCET coaching in Patna</strong> is beyond basic teaching:</p>

<ul>
<li>Concept clarification from the ground up</li>
</ul>

<ul>
<li>Quick revision notes for last-minute prep</li>
</ul>

<ul>
<li>Mock drills to improve accuracy and speed</li>
</ul>

<h2>Other MCA Entrance Exams Covered</h2>

<ul>
<li>CUET PG MCA</li>
</ul>

<ul>
<li>BHU PET</li>
</ul>

<ul>
<li>JNU MCA</li>
</ul>

<ul>
<li>IPU CET</li>
</ul>

<ul>
<li>MAH CET</li>
</ul>

<h2>Affordable Fees Structure</h2>

<p>There is no need to be expensive quality education. Landmark provides one of the most budget -friendly options for MCA coaching in Patna with easy EMI and scholarship.</p>

<h2>Final Thoughts</h2>

<p>When it comes to <strong>MCA coaching in Patna</strong>, the landmark institute is unmatched in quality, stability and student satisfaction. If you are ready to take your future seriously, enrolling on the landmark can be the smartest move you take. Take the right steps - Start your Nimet Prep today with top <strong>nimcet coaching in Patna</strong>.</p>`;

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
            Nimcet Coaching In Patna
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
