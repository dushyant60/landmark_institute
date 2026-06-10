'use client';

import { useState } from 'react';

const faqs = [
  {
    q: 'Which exam is best for MCA entrance?',
    a: 'NIMCET is considered the most prestigious MCA entrance exam as it leads to admissions in NITs across India. However, CUET PG MCA, DU MCA, and JNU MCA are also excellent options. We advise students to prepare for all exams simultaneously since the syllabus overlaps significantly.',
  },
  {
    q: 'Is NIMCET difficult to crack?',
    a: "NIMCET is competitive but absolutely crackable with the right preparation. With a structured study plan, regular mock tests, and expert guidance — as our 500+ NIT selections prove — a top rank is well within reach for a dedicated student.",
  },
  {
    q: 'Can I prepare online?',
    a: 'Absolutely. Our online batch is equally comprehensive — live classes, recorded lectures, online test series, doubt sessions via video call, and digital study material. Many of our top rankers have been online students.',
  },
  {
    q: 'What is the fee structure?',
    a: 'Fee details are shared during the free counselling session as they vary by batch type and duration. We also offer scholarships based on performance in our scholarship test. Call us at 9999992338 for the latest fee information.',
  },
  {
    q: 'Do you provide recorded lectures?',
    a: 'Yes — all live sessions are recorded and made available to students within 24 hours. Online batch students can re-watch any lecture as many times as they need throughout their enrolled period.',
  },
  {
    q: 'How long is the preparation needed?',
    a: 'Typically, 8–12 months of focused preparation is ideal for a first-time aspirant. Students with a strong BCA/BSc background can sometimes achieve top ranks in 6 months. We also offer a crash course for students who have already covered the basics.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section className="faq-section">
      <div className="container">
        <div className="section-header center">
          <span className="section-eyebrow">FAQs</span>
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-sub">Everything you want to know before enrolling.</p>
        </div>
        <div className="faq-grid">
          {faqs.map((faq, i) => (
            <div className={`faq-item${openIndex === i ? ' open' : ''}`} key={faq.q}>
              <div className="faq-q" onClick={() => toggle(i)}>
                {faq.q}
                <div className="faq-toggle">
                  <svg viewBox="0 0 24 24">
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </div>
              </div>
              <div className="faq-a">{faq.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
