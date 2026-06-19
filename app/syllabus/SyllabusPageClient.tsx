'use client';

import { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import ContactForm from '@/components/ContactForm';

const stagger: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const topNITs = ['NIT Trichy', 'NIT Warangal', 'NIT Surathkal', 'NIT Calicut', 'NIT Allahabad', 'NIT Rourkela'];

const faqData = [
  {
    q: 'What is included in the NIMCET syllabus?',
    a: 'The NIMCET syllabus includes Mathematics, Logical Reasoning, Computer Awareness, and General English.',
  },
  {
    q: 'What is the latest NIMCET exam pattern?',
    a: 'The NIMCET exam pattern consists of multiple-choice questions designed to test mathematical ability, reasoning skills, computer knowledge, and English proficiency.',
  },
  {
    q: 'Is Mathematics important in the MCA NIMCET syllabus?',
    a: 'Yes. Mathematics is the most important section of the MCA NIMCET syllabus and plays a major role in determining the final rank.',
  },
  {
    q: 'Is NIMCET difficult to crack?',
    a: 'NIMCET is competitive, but students can achieve a good rank through consistent preparation, regular practice, and mock tests.',
  },
  {
    q: 'How much time is required to complete the MCA entrance exam syllabus?',
    a: 'Most candidates prepare for approximately 6–12 months depending on their academic background and current preparation level.',
  },
  {
    q: 'Can I crack NIMCET without coaching?',
    a: 'Yes. With a disciplined study plan, quality study material, previous year papers, and mock tests, students can successfully crack NIMCET through self-study.',
  },
  {
    q: 'Why is understanding the NIMCET exam syllabus important?',
    a: 'Understanding the NIMCET exam syllabus helps students focus on important topics, allocate study time effectively, and prepare in a structured manner.',
  },
  {
    q: 'What is the best way to prepare for the NIMCET syllabus?',
    a: 'The best approach is to study regularly, solve previous year papers, attempt mock tests, revise frequently, and focus on Mathematics throughout the preparation journey.',
  },
];

export default function SyllabusPageClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
	const htmlContent = `
<img src="/images/migrated/NIMCET-Syllabus-2026-Mca-Entrance-Exam-Syllabus-Updated​.jpeg" alt="NIMCET Syllabus covering Mathematics, Logical Reasoning, Computer Awareness, English, and MCA Entrance Exam Pattern" style="max-width: 100%; height: auto; border-radius: var(--r-sm); margin: 24px 0; display: block;" />
<a href="#">Syllabus</a>
<p>If you are planning to pursue an MCA from a National Institute of Technology (NIT), understanding the <strong>NIMCET syllabus</strong> is the first step toward effective preparation. Every year, thousands of students appear for the NIT MCA Common Entrance Test (NIMCET) to secure admission into top MCA programs across India. A clear understanding of the <strong>MCA entrance exam syllabus</strong> helps students identify important topics, plan their studies, and improve their chances of achieving a high rank.</p>
<p>The latest <strong>MCA NIMCET syllabus</strong> covers Mathematics, Logical Reasoning, Computer Awareness, and General English. Along with the syllabus, candidates should also understand the <strong>NIMCET exam pattern</strong> to develop an effective preparation strategy.</p>
<p>In this detailed guide, we will cover the complete <strong>NIMCET exam syllabus</strong>, subject-wise topics, important chapters, preparation strategy, exam pattern, and frequently asked questions.</p>
<h2><strong>What is NIMCET?</strong></h2>
<p>NIMCET (NIT MCA Common Entrance Test) is a national-level entrance examination conducted for admission to MCA programs offered by participating NITs. It is one of the most competitive MCA entrance examinations in India and is preferred by students seeking quality technical education and strong career opportunities.</p>
<p>The examination evaluates a candidate's aptitude in Mathematics, Logical Reasoning, Computer Awareness, and English Language skills. Due to increasing competition and limited seats, a thorough understanding of the <strong>NIMCET syllabus</strong> and regular practice are essential for success.</p>
<br><br>
<iframe width="100%" height="450" src="https://www.youtube.com/embed/40H_dN1Mmhw?si=2KHBIZbNjlB3N5yF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen style="border-radius: var(--r-md); margin-bottom: 24px;"></iframe><br><br>
<h2><strong>NIMCET Exam Highlights</strong></h2>
<table>
<tbody>
<tr>
<th><strong>Particulars</strong></th>
<th><strong>Details</strong></th>
</tr>
<tr>
<td>Exam Name</td>
<td>NIMCET</td>
</tr>
<tr>
<td>Full Form</td>
<td>NIT MCA Common Entrance Test</td>
</tr>
<tr>
<td>Exam Level</td>
<td>National Level</td>
</tr>
<tr>
<td>Course Offered</td>
<td>Master of Computer Applications (MCA)</td>
</tr>
<tr>
<td>Mode of Examination</td>
<td>Computer-Based Test (CBT)</td>
</tr>
<tr>
<td>Duration</td>
<td>2 Hours</td>
</tr>
<tr>
<td>Question Type</td>
<td>Multiple Choice Questions (MCQs)</td>
</tr>
<tr>
<td>Admission Process</td>
<td>Based on NIMCET Rank</td>
</tr>
</tbody>
</table>
<h2><strong>NIMCET Exam Pattern</strong></h2>
<p>Before starting preparation, candidates should understand the latest <strong>NIMCET exam pattern</strong>. Knowing the structure of the examination helps students manage their preparation effectively and focus on high-weightage sections.</p>
<p>The <strong>NIMCET exam pattern</strong> is designed to test analytical thinking, mathematical ability, computer knowledge, and language proficiency. Since Mathematics plays a major role in determining the final rank, students should allocate sufficient time to this section.</p>
<table>
<thead>
<tr>
<th><strong>Section</strong></th>
<th><strong>Number of Questions</strong></th>
<th><strong>Marks per Question</strong></th>
<th><strong>Total Marks</strong></th>
<th><strong>Negative Marking</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Mathematics</td>
<td>50</td>
<td>12</td>
<td>600</td>
<td>-3</td>
</tr>
<tr>
<td>Analytical Ability &amp; Logical Reasoning</td>
<td>40</td>
<td>6</td>
<td>240</td>
<td>-1.5</td>
</tr>
<tr>
<td>Computer Awareness</td>
<td>20</td>
<td>6</td>
<td>120</td>
<td>-1.5</td>
</tr>
<tr>
<td>General English</td>
<td>10</td>
<td>4</td>
<td>40</td>
<td>-1</td>
</tr>
<tr>
<td><strong>Total</strong></td>
<td><strong>120</strong></td>
<td>—</td>
<td><strong>1000</strong></td>
<td>—</td>
</tr>
</tbody>
</table>
<p>Understanding the <strong>NIMCET exam pattern</strong> also helps candidates improve time management and develop a practical exam strategy.</p>
<h2><strong>NIMCET Exam Syllabus Overview</strong></h2>
<p>The <strong>NIMCET exam syllabus</strong> is designed to evaluate a student's aptitude across multiple areas that are essential for MCA studies. The complete <strong>MCA entrance exam syllabus</strong> for NIMCET is divided into four major sections:</p>
<ul>
 	<li>Mathematics</li>
 	<li>Logical Reasoning</li>
 	<li>Computer Awareness</li>
 	<li>General English</li>
</ul>
<p>The <strong>MCA NIMCET syllabus</strong> places significant emphasis on Mathematics, making it the most important subject for candidates targeting a top rank. Students should prepare each section systematically according to the latest <strong>NIMCET syllabus</strong> and exam requirements.</p>
<h2><strong>NIMCET Syllabus (Subject-Wise)</strong></h2>
<p>The latest <strong>NIMCET syllabus</strong> consists of multiple topics from Mathematics, Reasoning, Computer Awareness, and English. Understanding the complete <strong>NIMCET exam syllabus</strong> helps students create a focused preparation plan.</p>
<h2>Mathematics Syllabus</h2>
<p>Mathematics is the most important section of the <strong>MCA NIMCET syllabus</strong>. Strong mathematical skills can significantly improve a student's overall performance and rank.</p>
<h3>Algebra</h3>
<ul>
 	<li>Linear Equations</li>
 	<li>Quadratic Equations</li>
 	<li>Progressions</li>
 	<li>Logarithms</li>
 	<li>Complex Numbers</li>
 	<li>Permutations and Combinations</li>
</ul>
<h3>Calculus</h3>
<ul>
 	<li>Limits</li>
 	<li>Continuity</li>
 	<li>Differentiation</li>
 	<li>Applications of Derivatives</li>
 	<li>Integration</li>
 	<li>Definite and Indefinite Integrals</li>
</ul>
<h3>Trigonometry</h3>
<ul>
 	<li>Trigonometric Ratios</li>
 	<li>Trigonometric Identities</li>
 	<li>Heights and Distances</li>
 	<li>Inverse Trigonometric Functions</li>
</ul>
<h3>Coordinate Geometry</h3>
<ul>
 	<li>Straight Lines</li>
 	<li>Circles</li>
 	<li>Parabolas</li>
 	<li>Ellipses</li>
 	<li>Hyperbolas</li>
</ul>
<h3>Probability and Statistics</h3>
<ul>
 	<li>Probability Concepts</li>
 	<li>Conditional Probability</li>
 	<li>Mean, Median, and Mode</li>
 	<li>Standard Deviation</li>
 	<li>Variance</li>
</ul>
<h3>Matrices and Determinants</h3>
<ul>
 	<li>Matrix Operations</li>
 	<li>Determinants</li>
 	<li>Inverse of Matrix</li>
 	<li>Applications of Matrices</li>
</ul>
<p>Since Mathematics carries significant importance in the <a href="/syllabus/" target="_blank" rel="noopener"><b><u>NIMCET syllabus</u></b></a>, students should devote regular practice time to this section.</p>
<h2>Logical Reasoning Syllabus</h2>
<p>The Logical Reasoning section assesses a candidate's analytical and problem-solving abilities.</p>
<p><strong>Important topics include</strong>:</p>
<ul>
 	<li>Number Series</li>
 	<li>Letter Series</li>
 	<li>Coding-Decoding</li>
 	<li>Blood Relations</li>
 	<li>Direction Sense</li>
 	<li>Ranking</li>
 	<li>Seating Arrangement</li>
 	<li>Puzzles</li>
 	<li>Analogies</li>
 	<li>Statement and Conclusion</li>
 	<li>Syllogism</li>
</ul>
<p>Consistent practice can help students improve speed and accuracy in this section.</p>
<h2>Computer Awareness Syllabus</h2>
<p>Computer Awareness is an important part of the <strong>NIMCET exam syllabus</strong> and tests the fundamental knowledge required for MCA studies.</p>
<h3>Important Topics</h3>
<ul>
 	<li>Computer Fundamentals</li>
 	<li>Input and Output Devices</li>
 	<li>Operating Systems</li>
 	<li>Computer Networks</li>
 	<li>Internet Basics</li>
 	<li>Database Management Systems</li>
 	<li>Software Concepts</li>
 	<li>Hardware Concepts</li>
 	<li>Programming Fundamentals</li>
 	<li>Memory Management</li>
</ul>
<p>Students should regularly revise basic computer concepts while preparing the <strong>MCA entrance exam syllabus</strong>.</p>
<h2>General English Syllabus</h2>
<p>The English section evaluates language skills, vocabulary, and comprehension ability.</p>
<h3>Topics Covered</h3>
<ul>
 	<li>Grammar</li>
 	<li>Vocabulary</li>
 	<li>Synonyms and Antonyms</li>
 	<li>Sentence Correction</li>
 	<li>Reading Comprehension</li>
 	<li>Error Detection</li>
 	<li>Fill in the Blanks</li>
 	<li>Para Jumbles</li>
</ul>
<p>Daily reading and vocabulary practice can help candidates improve their score in this section.</p>
<h2>Important Topics in NIMCET Mathematics</h2>
<p>Among all sections of the <strong>NIMCET syllabus</strong>, Mathematics is considered the most scoring as well as the most challenging.</p>
<p>Students should focus on:</p>
<ul>
 	<li>Algebra</li>
 	<li>Calculus</li>
 	<li>Probability</li>
 	<li>Trigonometry</li>
 	<li>Coordinate Geometry</li>
 	<li>Matrices and Determinants</li>
</ul>
<p>Many successful candidates attribute their high ranks to consistent Mathematics practice and strong conceptual clarity.</p>
<h2>Subject-Wise Preparation Strategy</h2>
<p>A well-planned strategy is essential for completing the <strong>MCA entrance exam syllabus</strong> effectively.</p>
<h3>Mathematics</h3>
<ul>
 	<li>Practice daily.</li>
 	<li>Solve previous year questions.</li>
 	<li>Maintain a formula notebook.</li>
 	<li>Focus on conceptual understanding.</li>
</ul>
<h3>Logical Reasoning</h3>
<ul>
 	<li>Solve puzzles regularly.</li>
 	<li>Practice reasoning sets under timed conditions.</li>
 	<li>Improve analytical thinking skills.</li>
</ul>
<h3>Computer Awareness</h3>
<ul>
 	<li>Revise computer fundamentals.</li>
 	<li>Cover networking and operating system basics.</li>
 	<li>Review important technical concepts weekly.</li>
</ul>
<h3>English</h3>
<ul>
 	<li>Read newspapers regularly.</li>
 	<li>Improve vocabulary.</li>
 	<li>Practice grammar exercises.</li>
 	<li>Solve comprehension passages.</li>
</ul>
<h2>NIMCET Previous Year Paper Analysis</h2>
<p>One of the best ways to prepare for the <strong>NIMCET exam syllabus</strong> is by analyzing previous year question papers.</p>
<p><strong>Recent exam trends indicate</strong>:</p>
<ul>
 	<li>Mathematics remains the highest-priority section.</li>
 	<li>Logical Reasoning questions are becoming more analytical.</li>
 	<li>Computer Awareness focuses on fundamental concepts.</li>
 	<li>English questions are generally moderate in difficulty.</li>
</ul>
<p><strong>Previous year papers help students understand</strong>:</p>
<ul>
 	<li>Question patterns</li>
 	<li>Topic importance</li>
 	<li>Difficulty level</li>
 	<li>Time management requirements</li>
</ul>
<h2><strong>NIMCET Preparation Plan</strong></h2>
<h3>Phase 1: Foundation Building (Months 1–2)</h3>
<ul>
 	<li>Complete Mathematics fundamentals.</li>
 	<li>Cover basic reasoning concepts.</li>
 	<li>Begin Computer Awareness preparation.</li>
</ul>
<h3>Phase 2: Concept Strengthening (Months 3–4)</h3>
<ul>
 	<li>Solve topic-wise practice questions.</li>
 	<li>Attempt sectional mock tests.</li>
 	<li>Improve weak areas.</li>
</ul>
<h3>Phase 3: Advanced Practice (Months 5–6)</h3>
<ul>
 	<li>Solve previous year papers.</li>
 	<li>Attempt full-length mock tests.</li>
 	<li>Focus on revision and accuracy.</li>
</ul>
<p>Students who follow a structured plan generally complete the <strong>NIMCET syllabus</strong> more effectively and confidently.</p>
<h2>Common Mistakes to Avoid During NIMCET Preparation</h2>
<p>Many students make avoidable mistakes while preparing for the <strong>MCA entrance exam syllabus</strong>.</p>
<h3>Avoid These Errors</h3>
<ul>
 	<li>Ignoring Mathematics preparation</li>
 	<li>Not attempting mock tests</li>
 	<li>Poor time management</li>
 	<li>Memorizing concepts without understanding them</li>
 	<li>Skipping revision</li>
 	<li>Neglecting previous year papers</li>
</ul>
<p>Avoiding these mistakes can significantly improve overall performance.</p>
<h2>Other MCA Entrance Exams</h2>
<p>Students preparing for the <strong>MCA entrance exam syllabus</strong> often appear for multiple examinations to maximize admission opportunities.</p>
<h3>CUET PG MCA</h3>
<p><a href="/cuet-pg-mca/" target="_blank" rel="noopener"><u>CUET PG MCA</u></a> is becoming an increasingly popular option for MCA admissions across Indian universities.</p>
<h3>MAH MCA CET</h3>
<p>MAH MCA CET is conducted for admission to MCA colleges in Maharashtra.</p>
<h3>University-Level MCA Entrance Exams</h3>
<p>Several universities conduct their own MCA entrance examinations with syllabus patterns similar to the <strong>MCA NIMCET syllabus</strong>.</p>
<h2>Why Mock Tests Are Important</h2>
<p>Mock tests play a crucial role in mastering the <strong>NIMCET exam pattern</strong>.</p>
<p>Benefits include:</p>
<ul>
 	<li>Better time management</li>
 	<li>Improved speed</li>
 	<li>Increased accuracy</li>
 	<li>Real exam experience</li>
 	<li>Performance evaluation</li>
</ul>
<p>Regular mock test practice helps students become familiar with the actual examination environment.</p>
<h2>Why Choose Landmark Institute for NIMCET Preparation?</h2>
<p>Preparing for the <strong>NIMCET syllabus</strong> requires expert guidance, quality study material, and continuous practice.</p>
<p>At Landmark Institute, students benefit from:</p>
<ul>
 	<li>Experienced MCA entrance faculty</li>
 	<li>Structured classroom and online programs</li>
 	<li>Comprehensive study material</li>
 	<li>Regular mock test series</li>
 	<li>Doubt-clearing sessions</li>
 	<li>Performance analysis and mentorship</li>
</ul>
<p>Our objective is to help students complete the <a href="/" target="_blank" rel="noopener"><b><u>MCA entrance exam</u></b></a><strong> syllabus</strong> effectively and achieve their target rank.</p>
<h2>Career Opportunities After MCA from NITs</h2>
<p>Completing an MCA from an NIT opens doors to various career opportunities in the technology sector.</p>
<p>Popular career options include:</p>
<ul>
 	<li>Software Developer</li>
 	<li>Full Stack Developer</li>
 	<li>Data Analyst</li>
 	<li>Cloud Engineer</li>
 	<li>Cyber Security Analyst</li>
 	<li>Database Administrator</li>
 	<li>System Engineer</li>
 	<li>Application Developer</li>
</ul>
<p>Many graduates secure opportunities in leading technology companies and fast-growing startups.</p>
<h2><strong>NIMCET Syllabus and Exam Pattern: Key Takeaways</strong></h2>
<p>A thorough understanding of both the <strong>NIMCET syllabus</strong> and <strong>NIMCET exam pattern</strong> is essential for success. The latest <strong>MCA NIMCET syllabus</strong> covers Mathematics, Logical Reasoning, Computer Awareness, and English.</p>
<p>Students who understand the complete <strong>NIMCET exam syllabus</strong>, practice regularly, solve previous year papers, and attempt mock tests consistently are generally better prepared for the examination.</p>
<p>Following a structured preparation strategy can significantly improve performance and increase the chances of securing admission to a top NIT MCA program.</p>

<h2><strong>Conclusion</strong></h2>
<p>The <strong>NIMCET syllabus</strong> is designed to evaluate a candidate's aptitude in Mathematics, Logical Reasoning, Computer Awareness, and English. A clear understanding of the <strong>MCA entrance exam syllabus</strong>, combined with knowledge of the <strong>NIMCET exam pattern</strong>, can help students prepare more effectively. By following a structured study plan, practicing regularly, and revising important topics, candidates can improve their performance and increase their chances of securing admission to a prestigious NIT MCA program.</p>
`;

	return (
		<>
			<Topbar />
			<Navbar />

			{/* ── HERO ── */}
			<div className="hero" style={{ padding: '56px 0 0', overflow: 'hidden' }}>
				<div className="hero-inner">
					{/* Left Column */}
					<motion.div
						variants={stagger}
						initial="hidden"
						animate="show"
						style={{ display: 'flex', flexDirection: 'column' }}
					>
						<motion.span variants={fadeUp} className="hero-badge">
							<span /> Landmark Institute
						</motion.span>
						<motion.h1
							variants={fadeUp}
							style={{ fontSize: 'clamp(32px, 4.5vw, 52px)', fontWeight: 900, lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-1px' }}
						>
							NIMCET <span className="accent">Syllabus</span>
						</motion.h1>
						<motion.p
							variants={fadeUp}
							className="hero-sub"
							style={{ marginBottom: '28px' }}
						>
							Complete guidelines for NIMCET, CUET PG MCA & MCA entrance exams. Download official syllabus PDFs & prepare systematically.
						</motion.p>
						<motion.div variants={fadeUp} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '48px' }}>
							<a href="/contactus/" className="btn btn-green btn-lg">Enroll Now — Demo</a>
							<a href="/our-courses" className="btn btn-outline btn-lg" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.4)' }}>View Courses</a>
						</motion.div>

						{/* Stats strip */}
						<motion.div
							variants={fadeUp}
							className="hero-stats"
							style={{ marginBottom: '0' }}
						>
							<div className="hero-stat">
								<div className="hero-stat-num">120 <span>Q</span></div>
								<div className="hero-stat-label">Total Questions</div>
							</div>
							<div className="hero-stat">
								<div className="hero-stat-num">4 <span>Sec</span></div>
								<div className="hero-stat-label">Subject Areas</div>
							</div>
							<div className="hero-stat">
								<div className="hero-stat-num">1000<span>m</span></div>
								<div className="hero-stat-label">Maximum Marks</div>
							</div>
							<div className="hero-stat">
								<div className="hero-stat-num">17<span>+</span></div>
								<div className="hero-stat-label">Years Legacy</div>
							</div>
						</motion.div>
					</motion.div>

					{/* Right Column — Counselling Form Card */}
					<motion.div
						variants={fadeUp}
						initial="hidden"
						animate="show"
						className="hero-card"
						style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
					>
						<h3>Get Counselling</h3>
						<p>Talk to our experts &amp; plan your MCA journey</p>
						<ContactForm buttonText="Book Counselling →" showMessageField={false} />
						<div className="trust-badges">
							<div className="trust-badge">
								<svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
								No Spam
							</div>
							<div className="trust-badge">
								<svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
								Expert Guidance
							</div>
						</div>
					</motion.div>
				</div>
				<div className="hero-wave">
					<svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
						<path d="M0 60V30C240 0 480 60 720 30C960 0 1200 60 1440 30V60H0Z" fill="var(--bg)" />
					</svg>
				</div>
			</div>

			<main style={{ background: 'var(--bg)', paddingBottom: '80px' }}>
				<div className="container" style={{ maxWidth: '1200px' }}>
					<div className="page-content-grid">
						{/* Left Column */}
						<div>
							<motion.section
								variants={stagger}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true, margin: '-80px' }}
							>
								<motion.h2
									variants={fadeUp}
									className="section-title"
									style={{ marginBottom: '8px' }}
								>
									Official Syllabus & Brochures Download
								</motion.h2>
								<motion.p
									variants={fadeUp}
									style={{ fontSize: '15px', color: 'var(--text-muted)', marginBottom: '32px' }}
								>
									Select from the official guides and syllabus documents below. Click to request the download package.
								</motion.p>

								<motion.div
									className="downloads-grid"
									variants={stagger}
								>
									{/* NIMCET Syllabus Card */}
									<motion.div className="download-card" variants={fadeUp} whileHover={{ y: -4 }}>
										<div>
											<div className="download-card-header">
												<div className="download-card-icon">📄</div>
												<h3 className="download-card-title">NIMCET Syllabus PDF</h3>
											</div>
											<div className="download-card-tagline">
												NIMCET Complete Information: Eligibility, Syllabus, Exam Pattern & Counselling
											</div>
											<p className="download-card-desc">
												If you need personalized guidance, preparation strategies, or help with the admission process, you can connect with our expert counsellors.
											</p>
										</div>
										<a href="/documents/NIMCET%20Syllabus%202026%20PDF.pdf" download className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
											Syllabus Download
										</a>
									</motion.div>

									{/* NIMCET Information Brochure Card */}
									<motion.div className="download-card" variants={fadeUp} whileHover={{ y: -4 }}>
										<div>
											<div className="download-card-header">
												<div className="download-card-icon">📕</div>
												<h3 className="download-card-title">NIMCET Information Brochure</h3>
											</div>
											<div className="download-card-tagline">
												NIMCET Complete Information: Eligibility, Syllabus, Exam Pattern & Counselling
											</div>
											<p className="download-card-desc">
												If you need personalized guidance, preparation strategies, or help with the admission process, you can connect with our expert counsellors.
											</p>
										</div>
										<a href="/documents/NIMCET%20Information%20Brochure.pdf" download className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
											Syllabus Download
										</a>
									</motion.div>

									{/* CUET PG MCA Syllabus Card */}
									<motion.div className="download-card" variants={fadeUp} whileHover={{ y: -4 }}>
										<div>
											<div className="download-card-header">
												<div className="download-card-icon">📘</div>
												<h3 className="download-card-title">Syllabus for CUET PG MCA</h3>
											</div>
											<div className="download-card-tagline">
												CUET PG Complete Information: Eligibility, Syllabus, Exam Pattern & Participating Universities
											</div>
											<p className="download-card-desc">
												If you need personalized guidance, preparation strategies, or help with the admission process, you can connect with our expert counsellors.
											</p>
										</div>
										<a href="/documents/Syllabus%20for%20CUET%20PG%20MCA.pdf" download className="btn btn-primary" style={{ justifyContent: 'center', width: '100%' }}>
											Syllabus Download
										</a>
									</motion.div>
								</motion.div>
							</motion.section>

							<motion.div
								className="prose-custom"
								variants={fadeUp}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true, margin: '-100px' }}
								dangerouslySetInnerHTML={{ __html: htmlContent }}
							/>

							{/* Interactive FAQ */}
							<motion.section
								variants={stagger}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true, margin: '-80px' }}
								style={{ marginTop: '48px' }}
							>
								<motion.div variants={fadeUp}>
									<span className="section-eyebrow">FAQ</span>
									<h2 className="section-title" style={{ marginBottom: '20px' }}>Frequently Asked Questions</h2>
								</motion.div>
								<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
									{faqData.map((item, i) => (
										<motion.div
											key={i}
											variants={fadeUp}
											className={`faq-item${openFaq === i ? ' open' : ''}`}
										>
											<div className="faq-q" onClick={() => setOpenFaq(openFaq === i ? null : i)}>
												{item.q}
												<div className="faq-toggle">
													<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12h14" /></svg>
												</div>
											</div>
											{openFaq === i && (
												<div className="faq-a" style={{ display: 'block' }}>{item.a}</div>
											)}
										</motion.div>
									))}
								</div>
							</motion.section>
						</div>

						{/* Right Column (Sidebar CTA) */}
						<div className="page-sidebar">
							{/* Top NITs */}
							<motion.div
								variants={fadeUp}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
								style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
							>
								<h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
									🏛 Top NITs Accepting NIMCET
								</h3>
								<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
									{topNITs.map((nit) => (
										<span key={nit} style={{ background: 'var(--blue-light)', color: 'var(--blue)', borderRadius: 'var(--r-full)', padding: '5px 12px', fontSize: 12.5, fontWeight: 600 }}>{nit}</span>
									))}
								</div>
							</motion.div>

							{/* CTA Card */}
							<motion.div
								variants={fadeUp}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
								style={{
									background: 'linear-gradient(135deg, var(--slate) 0%, #0F2A5E 100%)',
									borderRadius: 'var(--r-lg)',
									padding: '28px',
									color: '#fff',
									position: 'relative',
									overflow: 'hidden',
								}}
							>
								<div style={{ position: 'absolute', top: -20, right: -20, width: 100, height: 100, borderRadius: '50%', background: 'rgba(59, 130, 246, 0.2)' }} />
								<div style={{ fontSize: 32, marginBottom: 12 }}>🚀</div>
								<h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 18, fontWeight: 700, marginBottom: 8, color: '#fff' }}>
									Start Your NIMCET Journey
								</h3>
								<p style={{ fontSize: 13.5, color: '#94A3B8', marginBottom: 20, lineHeight: 1.6 }}>
									Join thousands of students who cracked NIMCET with Landmark&apos;s structured coaching program.
								</p>
								<a href="/contactus/" className="btn btn-green" style={{ width: '100%', justifyContent: 'center', display: 'flex' }}>
									Book Demo Class
								</a>
								<a href="/our-courses" className="btn btn-outline" style={{ width: '100%', justifyContent: 'center', display: 'flex', marginTop: 10, color: '#94A3B8', borderColor: 'rgba(255,255,255,0.2)' }}>
									View All Courses
								</a>
							</motion.div>

							{/* Batch options */}
							<motion.div
								variants={fadeUp}
								initial="hidden"
								whileInView="show"
								viewport={{ once: true }}
								style={{ background: '#fff', border: '1px solid var(--border)', borderRadius: 'var(--r-lg)', padding: '24px', boxShadow: 'var(--shadow)' }}
							>
								<h3 style={{ fontFamily: "'Poppins', sans-serif", fontSize: 16, fontWeight: 700, color: 'var(--slate)', marginBottom: 16, paddingBottom: 8, borderBottom: '2px solid var(--border-light)' }}>
									📅 Flexible Batches
								</h3>
								{[
									{ label: 'Regular Batch', desc: '6–9 month comprehensive prep', tag: 'Most Popular', tagColor: 'var(--blue)' },
									{ label: 'Weekend Batch', desc: 'For working professionals', tag: 'Flexible', tagColor: '#7C3AED' },
									{ label: 'Crash Course', desc: 'Fast-track intensive session', tag: 'Quick', tagColor: '#EA580C' },
								].map((b) => (
									<div key={b.label} style={{ padding: '12px 0', borderBottom: '1px solid var(--border-light)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
										<div>
											<div style={{ fontWeight: 600, fontSize: 14, color: 'var(--slate)' }}>{b.label}</div>
											<div style={{ fontSize: 12, color: 'var(--text-muted)', marginTop: 2 }}>{b.desc}</div>
										</div>
										<span style={{ background: `${b.tagColor}18`, color: b.tagColor, borderRadius: 'var(--r-full)', padding: '3px 10px', fontSize: 11, fontWeight: 700 }}>{b.tag}</span>
									</div>
								))}
							</motion.div>
						</div>
					</div>
				</div>
			</main>

			<Footer />
			<FloatingWhatsApp />
		</>
	);
}
