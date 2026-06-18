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

export default function NotificationsPageClient() {
  const htmlContent = `
<h2>Facts About MCA</h2>
<hr />

<h3>1. M.C.A :-</h3>
<p>Master of Computer Applications is a big Degree in the field of Computer Science. Experts consider it at par with M.B.A. If an M.B.A. is important for marketing a Brand, an MCA is equally important for creating a Brand.</p>
<h3>2. Scope :-</h3>
<p>There is a multiple scope as a career. IT Industry is creating a wide range of opportunities. Big companies, M.N.Cs are absorbing MCAs as system Analysts, Software Developers, System Managers, Internet Experts, Computer Education Consultants etc. There is a huge demand in Indian Railways, Defence Services and Telecommunication Sector.</p>
<p><strong>There is a huge demand of IT professionals in new technologies such as Artificial Intelligence, Data Mining, Data Analytics and Cyber Security</strong></p>
<h3>3. Procedure :-</h3>
<p>M.C.A. is conducted by almost all the Universities of India. The minimum Qualification is Bachelor’s Degree or equivalent with minimum 50% to 60% marks. The selection is through a written test conducted by different Universities. Some states conduct a unified Exam. e.g. Maharashtra, Madhya Pradesh, Tamilnadu etc.</p>
<h3>4. Maths Conditions :-</h3>
<p>All the Universities prescribe Maths at 12th or Graduation level or at both levels. A student without maths at any two levels has very few options. A student who did not have Maths at 12th level but with graduation level like BCA / B.Com can appear in the exam.</p>
<h3>5. Syllabus :-</h3>
<p>The written test consists of four parts : Mathematics, Computer Awareness, Elementary English, Logical and Analytical Reasoning. The main emphasis is on Advanced Maths. The detailed Syllabus is available on website of “LANDMARK INSTITUTE”.</p>
<h3>6. Regular Vs Correspondence :-</h3>
<p>The Universities such as IGNOU, P.T.U., S.M.U. provide M.C.A. through correspondence but Industry prefers regular M.C.A. Degree. A regular M.C.A. Degree from a good reputed Institute is uncomparable.</p>
<h3>7. Salary :-</h3>
<p>An M.C.A. from a top Institute; can expect anything between 20 lacs to 25 lacs. However, if you are selected in a Foreign placement; the salary ranges from $ 50000 - $ 100000 per annum. With experience the salary increases exponentially.</p>
<h3>8. Top Institute :-</h3>
<p>A list of top Institutes is available on website of “LANDMARK INSTITUTE”. The grading has been done on the basis of quality of Education, Infrastructure and above all Placement Records.</p>
<h3>9. Top Companies :-</h3>
<p>Few of the top Companies where students who have completed M.C.A. placed are Microsoft, Oracle, IBM, Apple, Google, L &amp; T Limited, TCS, Infosys, Wipro, AT &amp; T, Citibank, CDOT, NIIT, Hughes Software System, Rancosystems, ICICI Bank, Indian Railways, Defence Services, CMC Limited, Satyam Computers, Tata Info Tech etc.</p>
<h4>BCA</h4><h2>BCA (Bachelor of Computer Applications)</h2>

<hr />

India has suffered an immense boom in the IT Sector in recent few years and the related opportunities in computer field has increased tremendously. B.C.A is a three year course and is defined as a computer course that is related to Computer Language. It is a bachelor’s degree covering a wide area in the field of computers. Any candidate pursuing a B.C.A degree can have many opportunities in software firms.

<h3>CAREER OPPORTUNITIES :-</h3>
After pursuing three years degree course, an applicant can start his career in any of the Software Companies or can even opt to study further in this field. They can be either a programmer or have other wide job opportunities in IT sector such as system analyst, networking expert etc.
<h3>COURSE ASPECTS:-</h3>
The course mainly contents software applications and programming. Examples are Java, C- Programming, SQL, and Server, C++, Networking and applications of the operating systems. The related applications have serious implications on the career of the admitted applicants.
<h3>ELIGLBILITY CRITERIA:-</h3>
Any candidate who has appeared for 10+2 and secured at least 50% marks in his higher secondary exams in any stream with Mathematics or Computer (I.P/C++/Multimedia) as a subject can opt for it.
<h3>COURSE STRUCTURE:-</h3>
The course is divided into Six Semesters consisting of two semesters per year i.e. the total number of years that the candidates have to continue for this bachelor degree is three.
<h3>ADMISSION PROCEDURE:-</h3>
Admission to this course is through an entrance exam conducted by different universities. As the number of seats are limited and number of candidates is large so there is a tough competition for the admission to a top institute.

<h4>TOP COLLEGES OF MCA</h4><h2>Top Institutes of MCA (Category Wise)</h2>

<hr />


<h3>(A + Category)</h3>
<ul>
 	<li>1. NIT Trichy (Number Of Seats: 60)</li>
 	<li>2 NIT Suratkal (Number Of Seats: 60)</li>
 	<li>3. NIT Warangl (Number Of Seats: 60)</li>
 	<li>4. NIT Allahabad (Number Of Seats: 60)</li>
 	<li>5. Delhi University (Number Of Seats: 40)</li>
 	<li>6. Pune University (Number Of Seats: 60)</li>
 	<li>7. JNU (Number of Seats: 50)</li>
 	<li>8. Hyderabad Central University (Number of Seats: 60)</li>
 	<li>9. BHU (Number of Seats: 60)</li>
 	<li>10. Jamia Millia Islamia (Number of Seats: 60)</li>
 	<li>11. NIT Kurukshetra (Number Of Seats: 60)</li>
 	<li>12. NIT Jamshedpur (Number Of Seats: 60)</li>
 	<li>13. NIT Bhopal (Number Of Seats: 60)</li>
 	<li>14. NIT Raipur (Number Of Seats: 60)</li>
 	<li>15. Vellore Engineering College (Number Of Seats: 60)</li>
 	<li>16. NIT Durgapur (Number Of Seats: 60)</li>
 	<li>17. BITS Ranchi (Number Of Seats: 60)</li>
 	<li>18. Tezpur University (Number Of Seats: 60)</li>
 	<li>19. Pondichery Central University (Number of Seats: 60)</li>
 	<li>20. Anna University (Number of Seats: 60)</li>
 	<li>21. HBIT (Number of Seats: 60)</li>
 	<li>22. IGDTU (Number of Seats: 60)</li>
</ul>
<h3>(A Category)</h3>
<ul>
 	<li>1. Aligarh Muslim University (Number Of Seats: 60)</li>
 	<li>2. Assam Engineering College (Number Of Seats: 20)</li>
 	<li>3. Bharati Vidyapeeth University, Pune (Number Of Seats: 240)</li>
 	<li>4. Cochin University (Number Of Seats: 40)</li>
 	<li>5. Dhirubhai Ambani Institute of Information and Communication Tech., Gandhinagar (Number Of Seats: 60)</li>
 	<li>6. Guru Gobind Singh Indraprastha University (Number Of Seats: 880)</li>
 	<li>7. G.N.D.U. Amritsar (Number Of Seats: 90)</li>
 	<li>8. ICSE Indore (Number Of Seats: 60)</li>
 	<li>9. Kurukshetra University (Number Of Seats: 60)</li>
 	<li>10. Manglore University (Number Of Seats: 40)</li>
 	<li>11. Punjab University Chandigarh (Number Of Seats: 30)</li>
 	<li>12. SPJIMR School of I.T. (Number Of Seats: 30)</li>
 	<li>13. Symbiosis Institute of Computer Science and Research (Number Of Seats: 90)</li>
 	<li>14. VJTI (Number Of Seats: 60)</li>
 	<li>15. Mumbai University (Number Of Seats: 50)</li>
 	<li>16. Thapar University, Patiala (Number Of Seats: 30)</li>
</ul>
<h3>(B Category)</h3>
<ul>
 	<li>1. Bharathiar University, Coimbator (Number Of Seats: 42)</li>
 	<li>2. Guru Jambheshwar University, Hisar (Number Of Seats: 30)</li>
 	<li>3. Gurukul Kangri Vishwavidyalaya, Haridwar (Number Of Seats: 30)</li>
 	<li>4. Himachal Pradesh University, Shimla (Number Of Seats: 30)</li>
 	<li>5. IMT Ghaziabad (Number Of Seats: 40)</li>
 	<li>6. Institute of Software Engineering (Number Of Seats: 240)</li>
 	<li>7. Jamia Hamdard University (Number Of Seats: 60)</li>
 	<li>8. Lucknow University (Number Of Seats: 60)</li>
 	<li>9. Madurai University (Number Of Seats: 30)</li>
 	<li>10. NCST (Number Of Seats: 60)</li>
 	<li>11. Punjab University Patiala (Number Of Seats: 60)</li>
 	<li>12. Punjab Technical University, Jalandhar(Number Of Seats: 60)</li>
 	<li>13. P.S.G. Coimbatore (Number Of Seats: 60)</li>
 	<li>14. Manglore University (Number Of Seats: 60)</li>
 	<li>15. Punjab University Chandigarh (Number Of Seats: 60)</li>
 	<li>16. SPJIMR School of I.T. (Number Of Seats: 30)</li>
 	<li>17. Symbiosis Institute of Computer Science and Research (Number Of Seats: 30)</li>
 	<li>18. VJTI (Number Of Seats: 30)</li>
</ul>
<b>Apart from these Institutes; following is the list of State University Affiliated Colleges whose grading is not been done are:</b>
<ul>
 	<li>1. Maharashtra State (Number Of Seats: 3400)</li>
 	<li>2. Gujarat (Number Of Seats: 1450)</li>
 	<li>3. Madhya Pradesh (Number Of Seats: 3640)</li>
 	<li>4. Punjab (Number Of Seats: 1900)</li>
 	<li>5. Tamilnadu (Number Of Seats: 1200)</li>
 	<li>6. U.P. Technical University, Lucknow (Number Of Seats: 6400)</li>
 	<li>7. West Bangal (Number Of Seats: 1269)</li>
</ul>
<h4>TOP INSTITUTE OF BCA</h4><h2>Top Colleges in Delhi/N.C.R for B.C.A</h2>

<hr />

<ul>
 	<li>1. Jamia Milia Islamia</li>
 	<li>2. BITS (Noida)</li>
 	<li>3. Maharaja Surajmal Institute (Janakpuri)</li>
 	<li>4. Vivekanand Institute of Professional Studies (Moti Nagar)</li>
 	<li>5. Indian Institute of Technology and Management (Janakpuri)</li>
 	<li>6. Innovative Institute of Technology and Management (Janakpuri)</li>
 	<li>7. Jagannath Institute of Management Sciences (vasant kunj)</li>
 	<li>8. Jagannath Institute of Management Sciences (Rohini)</li>
 	<li>9. Trinity Institute of Professional Studies (Dwarka)</li>
 	<li>10. Fairfield Institute of Technology and Management (Kapasheda)</li>
 	<li>11. Siri Fort College of Computer Technology and Managament (Rohini)</li>
</ul>
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
            Top MCA Colleges
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
