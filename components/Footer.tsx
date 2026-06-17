import Link from 'next/link';
import Image from 'next/image';

const socials = [
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/R.landmarkinstitute/',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.75z" />
      </svg>
    ),
  },
  {
    name: 'X',
    href: 'https://x.com/landmark_mca',
    icon: (
      <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/lmarkinstitute/',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/landmark-institute-for-mca-entrance/',
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

const courses = [
  { label: '1 Year Online Batch', href: '/courses' },
  { label: 'Offline Regular Batch', href: '/courses' },
  { label: 'Weekend Batch', href: '/courses' },
  { label: 'Crash Course', href: '/courses' },
  { label: 'Test Series', href: '/courses' },
];

const exams = [
  { label: 'NIMCET', href: '/exams' },
  { label: 'CUET PG MCA', href: '/exams' },
  { label: 'DU MCA', href: '/exams' },
  { label: 'JNU MCA', href: '/exams' },
  { label: 'BHU MCA', href: '/exams' },
  { label: 'MAH MCA CET', href: '/exams' },
];

const myPagesCol1 = [
  { label: '#1 Best Nimcet Coaching in Patna | Online Nimcet Course.', href: '/nimcet-coaching-in-patna/' },
  { label: 'Best Institute for Cuet Pg Mca Coaching', href: '/cuet-pg-mca/' },
  { label: 'Blog', href: '/blog/' },
  { label: 'Enquiry', href: '/enquiry/' },
  { label: 'Home', href: '/' },
  { label: 'MCA Entrance Syllabus', href: '/syllabus/' },
  { label: 'Nimcet', href: '/nimcet/' },
  { label: 'Notification', href: '/notification/' },
];

const myPagesCol2 = [
  { label: 'Online MCA Entrance', href: '/online-mca-entrance-exam/' },
  { label: 'SOFT-TECH', href: '/notifications/' },
  { label: 'Student Central', href: '/student-central/' },
  { label: 'Top #1 MCA Entrance Coaching in Kanpur – Landmark Institute', href: '/mca-entrance-coaching-in-kanpur/' },
  { label: 'Videos', href: '/videos/' },
  { label: 'cuet pg previous year question paper', href: '/cuet-pg-previous-year-question-papers/' },
];

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <h3>Landmark Institute</h3>
            <p>
              India&apos;s most trusted MCA entrance coaching institute since 2007. 17+ years · 6000+
              students · 500+ NIT selections.
            </p>
            <div style={{ display: 'flex', gap: '10px', marginTop: '16px' }}>
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="footer-social-link"
                >
                  {s.icon}
                </a>
              ))}
            </div>

            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span style={{ fontSize: '11px', fontWeight: 600, color: '#94A3B8', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Meri Padhai Certified
              </span>
              <a href="https://www.meripadhai.com/" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex' }}>
                <Image
                  src="/images/migrated/meri-padhai.png"
                  alt="Meri Padhai Certified"
                  width={140}
                  height={35}
                  style={{ opacity: 0.9, transition: 'opacity 0.2s', background: '#fff', padding: '6px', borderRadius: '4px' }}
                />
              </a>
            </div>
          </div>

          {/* Courses */}
          <div className="footer-col">
            <h4>Courses</h4>
            <ul className="footer-links">
              {courses.map((c) => (
                <li key={c.label}>
                  <Link href={c.href}>{c.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Exams */}
          <div className="footer-col">
            <h4>Exams</h4>
            <ul className="footer-links">
              {exams.map((e) => (
                <li key={e.label}>
                  <Link href={e.href}>{e.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Pages — Col 1 */}
          <div className="footer-col">
            <h4>My Pages</h4>
            <ul className="footer-links">
              {myPagesCol1.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* My Pages — Col 2 */}
          <div className="footer-col">
            <h4>&nbsp;</h4>
            <ul className="footer-links">
              {myPagesCol2.map((l) => (
                <li key={l.label}>
                  <Link href={l.href}>{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2025 Landmark Institute. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '16px' }}>
            <Link href="/privacy-policy/">Privacy Policy</Link>
            <Link href="/terms-and-conditions/">Terms &amp; Conditions</Link>
            <Link href="/terms-and-conditions/">Refund Policy</Link>
            <Link href="/sitemap.html/">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
