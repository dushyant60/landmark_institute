import type { Metadata } from 'next';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';
import LeadCapturePopup from '@/components/LeadCapturePopup';

export const metadata: Metadata = {
  title: 'MCA Entrance Exam Hub – NIMCET, CUET PG, DU, JNU, BHU MCA',
  description:
    'Complete guide on eligibility criteria, exam patterns, subject weightage, syllabus, and target colleges for NIMCET, CUET PG, and MAH MCA CET.',
};

const examsData = [
  {
    code: 'NIM',
    flagStyle: { background: '#EEF5FF', color: 'var(--blue)' },
    name: 'NIMCET',
    fullname: 'NIT MCA Common Entrance Test',
    desc: 'The most prestigious national-level MCA entrance exam for securing admissions to NITs across India.',
    eligibility: 'BCA / B.Sc (CS/IT/Maths/Stats) / BIT / B.Voc or B.E./B.Tech with Mathematics in 10+2 or graduation. Minimum 60% aggregate marks (55% for SC/ST).',
    pattern: {
      questions: '120 Questions',
      duration: '120 Minutes (2 Hours)',
      subjects: 'Mathematics (50 Qs), Analytical Ability (40 Qs), Computer Awareness (20 Qs), General English (10 Qs)',
      marking: '4 Marks for correct answer, -1 Mark for wrong answer (total 1000 marks due to scaling weightage)',
    },
    colleges: 'NIT Trichy, NIT Surathkal, MNNIT Allahabad, NIT Bhopal, NIT Calicut, NIT Jamshedpur, NIT Kurukshetra, NIT Raipur, NIT Agartala, NIT Patna.',
  },
  {
    code: 'CUE',
    flagStyle: { background: '#E8FFF2', color: 'var(--green-dark)' },
    name: 'CUET PG MCA',
    fullname: 'Common University Entrance Test PG',
    desc: 'The centralized gateway entrance exam for admissions to postgraduate computer courses in central, state, and top private universities.',
    eligibility: 'BCA / Bachelor Degree in Computer Science Engineering or equivalent OR Graduate in B.Sc. / B.Com. / B.A. with Mathematics at 10+2 Level or Graduation.',
    pattern: {
      questions: '75 Questions',
      duration: '105 Minutes',
      subjects: 'Core Domain Knowledge: Mathematical Methods, Discrete Mathematics, Computer Architecture, Data Structures, Operating Systems, C++ Programming',
      marking: '+4 Marks for correct, -1 Mark for incorrect (total 300 marks)',
    },
    colleges: 'Jawaharlal Nehru University (JNU), Banaras Hindu University (BHU), Delhi University (DU), Pondicherry University, HBTU Kanpur, and Central/State Universities.',
  },
  {
    code: 'DU',
    flagStyle: { background: '#FFF7ED', color: '#EA580C' },
    name: 'DU MCA',
    fullname: 'University of Delhi MCA Entrance',
    desc: 'Delhi University conducts its MCA admissions through the CUET PG exam. Highly sought-after for its premium placements and nominal fee structures.',
    eligibility: 'BCA or Bachelor\'s degree from a recognized university with at least two courses in Mathematical Sciences (Mathematics, Computer Science, Statistics, Operational Research).',
    pattern: {
      questions: '75 Questions (via CUET PG)',
      duration: '105 Minutes',
      subjects: 'Mathematical Aptitude, Logical Reasoning, Computer Awareness, Software Concepts, and Verbal Ability',
      marking: '+4 for correct answer, -1 for negative marking',
    },
    colleges: 'Department of Computer Science, University of Delhi (DU North Campus).',
  },
  {
    code: 'JNU',
    flagStyle: { background: '#F5F3FF', color: '#7C3AED' },
    name: 'JNU MCA',
    fullname: 'Jawaharlal Nehru University MCA',
    desc: 'Jawaharlal Nehru University MCA admissions are via CUET PG. Noted for its intense focus on academic research, computer theory, and top placement cell.',
    eligibility: 'BCA / Bachelor degree in Computer Science or Mathematics. Minimum 55% marks in graduation.',
    pattern: {
      questions: '75 Questions (via CUET PG)',
      duration: '105 Minutes',
      subjects: 'Theoretical Computer Science, Discrete Math, Logic Gates, Algorithms, Operating Systems, Advanced Mathematics',
      marking: 'Standard CUET PG guidelines apply (+4/-1)',
    },
    colleges: 'School of Computer and Systems Sciences, JNU (New Delhi).',
  },
  {
    code: 'BHU',
    flagStyle: { background: '#FEF3C7', color: '#B45309' },
    name: 'BHU MCA',
    fullname: 'Banaras Hindu University MCA',
    desc: 'Banaras Hindu University conducts its admissions via CUET PG. Offers state-of-the-art labs, expansive library access, and rich academic history.',
    eligibility: 'BCA / B.Sc (CS/IT) or Bachelor degree in any stream with Math/CS as a subject. Minimum 50% aggregate marks.',
    pattern: {
      questions: '75 Questions (via CUET PG)',
      duration: '105 Minutes',
      subjects: 'Computer Awareness, Data Structures, Discrete Structures, Reasoning, Quantitative Ability, and Calculus',
      marking: 'CUET PG pattern (+4/-1)',
    },
    colleges: 'Rajiv Gandhi South Campus and Main Campus, Banaras Hindu University.',
  },
  {
    code: 'MAH',
    flagStyle: { background: '#FCE7F3', color: '#BE185D' },
    name: 'MAH MCA CET',
    fullname: 'Maharashtra MCA Common Entrance Test',
    desc: 'State-level entrance examination conducted by DTE Maharashtra for admissions to professional MCA programs in Maharashtra.',
    eligibility: 'Passed BCA / B.Sc. (CS/IT) / B.E. / B.Tech. OR Graduate in any stream with Math at 10+2 or Graduation. Minimum 50% marks (45% for reserved categories).',
    pattern: {
      questions: '100 Questions',
      duration: '90 Minutes (1.5 Hours)',
      subjects: 'Mathematics & Statistics (30 Qs), Logical & Abstract Reasoning (30 Qs), Computer Concepts (20 Qs), English Comprehension (20 Qs)',
      marking: '+2 Marks for correct answer, No negative marking (total 200 marks)',
    },
    colleges: 'VJTI Mumbai, SPIT Mumbai, PUMBA Pune, K.J. Somaiya Mumbai, MET Mumbai, and colleges across Maharashtra.',
  },
];

export default function ExamsPage() {
  return (
    <>
      <Topbar />
      <Navbar />

      {/* Hero Header */}
      <div className="hero" style={{ padding: '60px 0 40px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="hero-badge">Exam Information Hub</span>
          <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', marginBottom: '16px' }}>
            Know Your <span className="accent">Target Exam</span>
          </h1>
          <p className="hero-sub" style={{ margin: '0 auto', fontSize: '16px', color: '#94A3B8' }}>
            Detailed guidelines on eligibility criteria, exam patterns, subject weightage, marking schemes, and premier target colleges for every major MCA entrance exam.
          </p>
        </div>
        <div className="hero-wave" style={{ marginTop: '30px', height: '40px' }}>
          <svg viewBox="0 0 1440 60" preserveAspectRatio="none" fill="var(--bg)">
            <path d="M0,60 L0,30 Q360,0 720,30 Q1080,60 1440,30 L1440,60 Z" />
          </svg>
        </div>
      </div>

      {/* CSS Overrides */}
      <style dangerouslySetInnerHTML={{
        __html: `
        .exams-section {
          padding: 60px 0 80px;
          background: var(--bg);
        }
        .custom-exam-card {
          background: #fff;
          border: 1px solid var(--border);
          border-radius: var(--r-lg);
          padding: 32px;
          margin-bottom: 30px;
          box-shadow: var(--shadow);
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 24px;
          transition: 0.2s;
        }
        .custom-exam-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-md);
          border-color: var(--blue-light);
        }
        .exam-flag-box {
          width: 80px;
          height: 80px;
          border-radius: var(--r);
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Poppins', sans-serif;
          font-weight: 950;
          font-size: 20px;
          flex-shrink: 0;
        }
        .exam-info-panel h3 {
          font-family: 'Poppins', sans-serif;
          font-size: 22px;
          font-weight: 800;
          color: var(--slate);
          margin-bottom: 2px;
        }
        .exam-info-panel h4 {
          font-family: 'Inter', sans-serif;
          font-size: 13.5px;
          color: var(--text-muted);
          font-weight: 600;
          margin-bottom: 16px;
        }
        .exam-info-panel p {
          font-size: 14.5px;
          line-height: 1.6;
          color: var(--slate-mid);
          margin-bottom: 20px;
        }
        .detail-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          border-top: 1px solid var(--border);
          padding-top: 20px;
          margin-bottom: 20px;
        }
        .detail-block h5 {
          font-family: 'Poppins', sans-serif;
          font-size: 13px;
          font-weight: 700;
          text-transform: uppercase;
          color: var(--blue);
          margin-bottom: 6px;
          letter-spacing: 0.5px;
        }
        .detail-block p {
          font-size: 13.5px;
          color: var(--slate-mid);
          line-height: 1.5;
          margin-bottom: 0;
        }
        .pattern-table {
          width: 100%;
          border-collapse: collapse;
          margin-top: 8px;
        }
        .pattern-table td {
          font-size: 13px;
          padding: 6px 0;
          border-bottom: 1px dashed var(--border-light);
          color: var(--slate-mid);
        }
        .pattern-table td:first-child {
          font-weight: 600;
          width: 120px;
          color: var(--slate);
        }
        .exam-cta-bar {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        @media (max-width: 900px) {
          .custom-exam-card {
            grid-template-columns: 1fr;
            gap: 16px;
            padding: 24px;
          }
          .exam-flag-box {
            width: 60px;
            height: 60px;
            font-size: 16px;
          }
          .detail-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
      `}} />

      {/* Main Content Section */}
      <section className="exams-section">
        <div className="container" style={{ maxWidth: '1000px' }}>

          {examsData.map((exam) => (
            <div className="custom-exam-card" key={exam.name}>
              {/* Flag Icon */}
              <div className="exam-flag-box" style={exam.flagStyle}>
                {exam.code}
              </div>

              {/* Information Panel */}
              <div className="exam-info-panel">
                <h3>{exam.name}</h3>
                <h4>{exam.fullname}</h4>
                <p>{exam.desc}</p>

                <div className="detail-grid">
                  {/* Eligibility */}
                  <div className="detail-block">
                    <h5>Eligibility Criteria</h5>
                    <p>{exam.eligibility}</p>
                  </div>

                  {/* Target Colleges */}
                  <div className="detail-block">
                    <h5>Target Institutes</h5>
                    <p>{exam.colleges}</p>
                  </div>
                </div>

                {/* Exam Pattern Table */}
                <div style={{ marginBottom: '24px', background: 'var(--bg)', borderRadius: '8px', padding: '16px', border: '1px solid var(--border)' }}>
                  <h5 style={{ fontFamily: 'Poppins', fontSize: '13px', fontWeight: 700, textTransform: 'uppercase', color: 'var(--slate)', marginBottom: '10px', letterSpacing: '0.5px' }}>Exam Pattern Breakdown</h5>
                  <table className="pattern-table">
                    <tbody>
                      <tr>
                        <td>Total Questions</td>
                        <td>{exam.pattern.questions}</td>
                      </tr>
                      <tr>
                        <td>Test Duration</td>
                        <td>{exam.pattern.duration}</td>
                      </tr>
                      <tr>
                        <td>Marking Scheme</td>
                        <td>{exam.pattern.marking}</td>
                      </tr>
                      <tr>
                        <td>Subject Scope</td>
                        <td>{exam.pattern.subjects}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Actions */}
                <div className="exam-cta-bar">
                  <a href="/#contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
                    Enquire for Batch →
                  </a>
                  {/* <a href="#" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '13px' }}>
                    Download Syllabus
                  </a>
                  <a href="#" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '13px', borderColor: 'transparent' }}>
                    Previous Year Papers
                  </a> */}
                </div>
              </div>
            </div>
          ))}

        </div>
      </section>

      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <LeadCapturePopup />
    </>
  );
}
