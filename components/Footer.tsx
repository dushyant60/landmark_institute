import Link from 'next/link';

const socials = ['YT', 'FB', 'IG', 'TW'];

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

const quickLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Results', href: '/#results' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Free Resources', href: '/#resources' },
  { label: 'Blog', href: '#' },
  { label: 'Contact', href: '/contact' },
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
                  key={s}
                  href="#"
                  style={{
                    width: '36px',
                    height: '36px',
                    background: 'rgba(255,255,255,.1)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#94A3B8',
                    textDecoration: 'none',
                    fontSize: '14px',
                    transition: '.15s',
                  }}
                >
                  {s}
                </a>
              ))}
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

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => (
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
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
