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

export default function StudentCentralClient() {
  const htmlContent = `
<h2>ASK FROM OUR EXPERT</h2>

<h3>Prof. R. Chadha (Director)</h3>
<p><strong>(Ex Faculty GGSIP University and Author BCA Mathematics)</strong></p>

<p>Prof. R.CHADHA is a renowned name in the field of Advanced Maths Coaching. He has more than 15 years of experience of teaching Advanced Mathematics to B.Tech. / M.Sc(Maths) / B.Sc (Maths Hons) / MCA students of different Indian Universities. He is a prolific author of books on Advanced Maths namely Discrete Maths, Statistics &amp; Operation Research, Calculus, Real Analysis, BCA Mathematics (Vol I, II, III &amp; IV). He has been a visiting faculty to a number of colleges affiliated to GGSIP University for BCA/MCA/B.Tech classes. Under his guidance any MCA aspirant can look to achieve his target score.</p>

<hr style="margin: 40px 0;" />

<h2>STUDENT SPEAK</h2>
<table>
<tbody>
<tr>
<td><img src="/images/migrated/circle-sagar.png" alt="Sagar Sharma" style="max-width: 100px; height: auto; border-radius: 50%; display: block;" /></td>
<td><strong>Sagar Sharma</strong><br />
NIT All India Rank-15/ NIT North India Rank-1<br />
NIT Delhi Rank-1<br />
<br />
<i>"I owe my success to the Faculty of Landmark Institute. The Best Institute for MCA Entrance in India."</i></td>
</tr>
<tr>
<td><img src="/images/migrated/circle-tushar.png" alt="Tushar Garg" style="max-width: 100px; height: auto; border-radius: 50%; display: block;" /></td>
<td><strong>Tushar Garg</strong><br />
IP-33/BITS-11<br />
NIT-145/JAMIA MILIA-1/Also Selected JNU, HCU, DU<br />
<br />
<i>"I thank R. Chadha Sir, Srish Sir, Roshan Sir for the tremendous Success I have achieved in MCA Entrance exam."</i></td>
</tr>
<tr>
<td><img src="/images/migrated/circle-prernamisra.png" alt="Prerna Mishra" style="max-width: 100px; height: auto; border-radius: 50%; display: block;" /></td>
<td><strong>Prerna Mishra</strong><br />
IP-343/Qualified for IIT,DU,BHU<br />
<br />
<i>" Landmark is the best institute for MCA Students. It helps student to make best carrier in IT industry .It makes bright our future. This is the best Institute for us."</i></td>
</tr>
<tr>
<td><img src="/images/migrated/circle-shilpi.png" alt="Shilpi Pandey" style="max-width: 100px; height: auto; border-radius: 50%; display: block;" /></td>
<td><strong>Shilpi Pandey</strong><br />
IP-10/NIT-85/JAMIA-4<br />
<br />
<i>"I have no words to describe my gratitude to the faculty of Landmark Institute. Best Institute Thank You so much Sir."</i></td>
</tr>
<tr>
<td><img src="/images/migrated/circle-jatin.png" alt="Jatin Rohilla" style="max-width: 100px; height: auto; border-radius: 50%; display: block;" /></td>
<td><strong>Jatin Rohilla</strong><br />
DU M.sc (CS) All India Rank-1/IP-22<br />
NIT-146<br />
<br />
<i>"The atmosphere at Landmark is very Competitive, Conducive and Encouraging. It brings the best out of a student."</i></td>
</tr>
<tr>
<td><img src="/images/migrated/circle-ankita.png" alt="Ankita Jain" style="max-width: 100px; height: auto; border-radius: 50%; display: block;" /></td>
<td><strong>Ankita Jain</strong><br />
IP-7/NIT-61/JAMIA-10<br />
DU Qualified<br />
<br />
<i>"I can say only 1 word about my experience at Landmark. Just Amazing. Small Batches, Individual Attention, Rigorous Test Series. If you are serious about a top rank in MCA Entrance then this is the only Institute where you should be. Thank you Sir."</i></td>
</tr>
<tr>
<td><img src="/images/migrated/circle-piyush.png" alt="Piyush" style="max-width: 100px; height: auto; border-radius: 50%; display: block;" /></td>
<td><strong>Piyush</strong><br />
IP AIR-1/NIT-86/HCU-13<br />
BHU-11/DU Qualified<br />
<br />
<i>"I had never taken any coaching in my whole life, but once i joined Landmark, then it proved to be the turning point in my life. I owe my success to R. Chadha Sir and his Team."</i></td>
</tr>
<tr>
<td><img src="/images/migrated/circle-samiran.png" alt="Samiran Kundu" style="max-width: 100px; height: auto; border-radius: 50%; display: block;" /></td>
<td><strong>Samiran Kundu</strong><br />
IP-158/NIT-72/DU-15<br />
<br />
<i>"Highly Competitive Environment, Regular Tests, Complete Discipline. Ideal atmosphere to bring the best out of you. Must join Landmark For MCA Entrance."</i></td>
</tr>
</tbody>
</table>
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
            STUDENT CENTRAL
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
