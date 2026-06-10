const waPath =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347';

export default function Contact() {
  return (
    <section className="contact-bg" id="contact">
      <div className="container">
        <div className="section-header center">
          <span className="section-eyebrow">Get in Touch</span>
          <h2 className="section-title">Visit Us or Reach Out Anytime</h2>
          <p className="section-sub">
            Our counsellors are available 7 days a week to answer your questions.
          </p>
        </div>

        <div className="contact-grid">
          {/* Left: contact info */}
          <div className="contact-info">
            {/* Phone */}
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 11 19.79 19.79 0 0 1 1.27 2.38 2 2 0 0 1 3.24 0h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 7.91a16 16 0 0 0 6.08 6.08l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <h4>Call Us</h4>
                <a href="tel:9999992338">+91 999 999 2338</a>
                <a href="tel:9953692399">+91 995 369 2399</a>
              </div>
            </div>

            {/* Email */}
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
              </div>
              <div>
                <h4>Email Us</h4>
                <a href="mailto:info@landmarkinstitute.com">info@landmarkinstitute.com</a>
              </div>
            </div>

            {/* Location */}
            <div className="contact-item">
              <div className="contact-icon">
                <svg viewBox="0 0 24 24">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <h4>Visit Us</h4>
                <p>West Patel Nagar, New Delhi</p>
                <p style={{ fontSize: '13px', marginTop: '4px' }}>
                  Near Metro Station, Delhi 110008
                </p>
              </div>
            </div>

            {/* WhatsApp */}
            <div className="contact-item">
              <div className="contact-icon" style={{ background: 'var(--green-bg)' }}>
                <svg viewBox="0 0 24 24" style={{ stroke: 'var(--green-dark)' }}>
                  <path d={waPath} />
                </svg>
              </div>
              <div>
                <h4>WhatsApp</h4>
                <a href="https://wa.me/919999992338" style={{ color: 'var(--green-dark)' }}>
                  +91 999 999 2338
                </a>
                <p style={{ fontSize: '13px' }}>Available 9 AM – 9 PM daily</p>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="contact-form">
            <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--slate)', marginBottom: '4px' }}>
              Send us a message
            </h3>
            <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>
              We typically respond within 30 minutes.
            </p>
            <div className="form-field">
              <label>Full Name</label>
              <input type="text" placeholder="Your full name" />
            </div>
            <div className="form-field">
              <label>Phone Number</label>
              <input type="tel" placeholder="+91 XXXXX XXXXX" />
            </div>
            <div className="form-field">
              <label>Course Interested In</label>
              <select>
                <option>Select course</option>
                <option>1 Year Online Batch</option>
                <option>Offline Regular Batch</option>
                <option>Weekend Batch</option>
                <option>Crash Course</option>
                <option>Test Series Only</option>
              </select>
            </div>
            <div className="form-field">
              <label>Message</label>
              <input type="text" placeholder="Your question or message" />
            </div>
            <button
              className="btn btn-primary"
              style={{ width: '100%', justifyContent: 'center', padding: '12px', fontSize: '15px' }}
            >
              Send Message →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
