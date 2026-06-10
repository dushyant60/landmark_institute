const socials = ['YT', 'FB', 'IG', 'TW'];

const courses = [
  '1 Year Online Batch',
  'Offline Regular Batch',
  'Weekend Batch',
  'Crash Course',
  'Test Series',
];

const exams = ['NIMCET', 'CUET PG MCA', 'DU MCA', 'JNU MCA', 'BHU MCA', 'MAH MCA CET'];

const quickLinks = ['About Us', 'Results', 'Faculty', 'Free Resources', 'Blog', 'Contact'];

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
                <li key={c}><a href="#">{c}</a></li>
              ))}
            </ul>
          </div>

          {/* Exams */}
          <div className="footer-col">
            <h4>Exams</h4>
            <ul className="footer-links">
              {exams.map((e) => (
                <li key={e}><a href="#">{e}</a></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((l) => (
                <li key={l}><a href="#">{l}</a></li>
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
