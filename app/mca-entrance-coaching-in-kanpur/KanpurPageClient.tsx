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

export default function KanpurPageClient() {
  const htmlContent = `<figure><img src="/images/migrated/MCA-Entrance-Coaching-in-Kanpur-1024x577.jpg" alt="MCA Entrance Coaching in Kanpur" style="max-width: 100%; height: auto; border-radius: var(--r-sm); margin: 24px 0; display: block;" /></figure>

<p>Are you planning to crack the <strong>MCA entrance in Kanpur</strong> and go to top level universities like NITs, DU or JNU? Then you probably know how difficult the competition is. Where there is a difference in expert guidance. And when it comes to <strong>MCA entrance coaching in Kanpur</strong>, the Landmark Institute is the best.</p>

<h2>Why choose MCA?</h2>

<h3>Career scope after MCA</h3>

<p>MCA opens the doors to a wide range of career paths in software development and data science. And if you are aiming for government jobs or MNC roles, having a degree from a top university helps a lot.</p>

<h3>Top MCA Entrance Exams</h3>

<ul>
<li><strong>NIMCET</strong> – For admission to NITs</li>
</ul>

<ul>
<li><strong>DUET</strong> – Delhi University MCA</li>
</ul>

<ul>
<li><strong>JNU Entrance Exam</strong></li>
</ul>

<ul>
<li><strong>IPU CET</strong>, <strong>BHU</strong>, and more</li>
</ul>

<p>But to crack them, you need more than talent - you need preparation with intentions.</p>

<h2>Why You Need MCA Coaching in Kanpur</h2>

<p>Let's be honest - moving forward can be heavy. You need:</p>

<ul>
<li>Structured study plans</li>
</ul>

<ul>
<li>Regular evaluation</li>
</ul>

<ul>
<li>Concentrated guidance</li>
</ul>

<p>This is the reason that admission to a top institution offering MCA coaching in Kanpur can increase your chances of success.</p>

<h2>Kanpur: A growing Education Hub</h2>

<p>Kanpur is no longer about industries - it has quickly become a hotspot for students targeting competitive exams. The city provides affordable education, increasing number of coaching institutes and a strong educational community. No wonder more students are choosing MCA entrance coaching in Kanpur.</p>

<h2>Why Landmark Institute?</h2>

<p>With more than 17 years of experience, the Landmark Institute has become a prominent name in NIMCET coaching in Kanpur and other MCA entrance coaching programs. Their success rate, dedication and personal views make them a favorite option for students not only in Kanpur, but also from neighboring cities.</p>

<h2>Courses Offered</h2>

<h4>Regular classroom program</h4>

<p>The best for those students who want a full, depth preparation in all MCA entrance exams.</p>

<h4>crash course</h4>

<p>Less on time? No problem. Crash course helps you to modify and practice intensively.</p>

<h4>Weekend classes</h4>

<p>Perfect for college students or working professionals who require flexibility without compromising quality.</p>

<p><strong>Whether you are aiming for Nimcet, DU, or JNU, the landmark has covered you.</strong></p>

<h2>MCA Entrance Exams Covered</h2>

<ul>
<li><strong>NIMCET Coaching in Kanpur</strong></li>
</ul>

<ul>
<li><strong>DU MCA Coaching</strong></li>
</ul>

<ul>
<li><strong>JNU, BHU, Jamia, IPU Coaching</strong></li>
</ul>

<ul>
<li>All other national-level MCA entrances</li>
</ul>

<p>With university-specific strategies, students are trained to master every pattern and course.</p>

<h2>Faculty and guidance</h2>

<p>The faculty of the landmark consists of experienced teachers and subject experts who have helped hundreds of students clear mca entrance in kanpur and beyond MCA entrance. Ensure one-on-one mentoring and regular response to you stay on the track.</p>

<h2>Top Study Materials</h2>

<ul>
<li>Full course coverage</li>
</ul>

<ul>
<li>Practice letters and test series</li>
</ul>

<ul>
<li>Regular quiz and mock test</li>
</ul>

<ul>
<li>Update notes aligned with latest exam pattern</li>
</ul>

<h2>Success speaks for herself</h2>

<p>From Nimcet Air-4 to DU and BHU rankers, the Landmark Institute has produced several toppers. Their students consistently perform in national level examinations, validate the institute's teaching quality and commitment.</p>

<h2>Tips to crack Nimcet Coaching in Kanpur</h2>

<ul>
<li>Start early-Settlement beats the last-end pressure</li>
</ul>

<ul>
<li>Pay attention to mathematics and Reasoning</li>
</ul>

<ul>
<li>Practice previous years papers</li>
</ul>

<ul>
<li>Take weekly mocks to improve speed and accuracy</li>
</ul>

<h2>Conclusion</h2>

<p>If you are ready to crack the MCA entrance in Kanpur and secure admission to your dream university, then you need a launchpad. With its expert faculty, focused study plans and heritage of success, it is a Go-to Destination for MCA entrance coaching in Kanpur.</p>`;

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
            Mca Entrance Coaching In Kanpur
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
