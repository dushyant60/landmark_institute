'use client';

import { useState, useEffect, useCallback } from 'react';

const checkPath = 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z';
const closePath = 'M6 18L18 6M6 6l12 12';

export default function LeadCapturePopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const showPopup = useCallback(() => {
    setIsOpen(true);
    setSubmitted(false);
    setFormData({ name: '', email: '', phone: '' });
    setErrors({});
  }, []);

  const hidePopup = useCallback(() => {
    setIsOpen(false);
  }, []);

  useEffect(() => {
    const timer = setTimeout(showPopup, 3000);
    return () => clearTimeout(timer);
  }, [showPopup]);

  useEffect(() => {
    const handleVisibilityChange = () => {
      if (!document.hidden && !isOpen && !submitted) {
        const timer = setTimeout(showPopup, 1000);
        return () => clearTimeout(timer);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [isOpen, submitted, showPopup]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) newErrors.phone = 'Enter a valid phone number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setSubmitted(true);
    setTimeout(() => {
      hidePopup();
    }, 2000);
  };

  const handleClose = () => {
    hidePopup();
  };

  if (!isOpen) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
        <button className="popup-close" onClick={handleClose} aria-label="Close">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d={closePath} />
          </svg>
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit}>
            <div className="popup-header">
              <div className="popup-badge">
                <span className="pulse-dot"></span>
                Exclusive Guide
              </div>
              <h2>Get Your Free MCA Entrance Guide</h2>
              <p>Complete preparation roadmap for NIMCET, CUET PG MCA, DU MCA & more</p>
            </div>

            <div className="form-field">
              <label>Full Name</label>
              <input
                type="text"
                placeholder="Your full name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                aria-invalid={!!errors.name}
              />
              {errors.name && <span className="field-error">{errors.name}</span>}
            </div>

            <div className="form-row">
              <div className="form-field">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  aria-invalid={!!errors.email}
                />
                {errors.email && <span className="field-error">{errors.email}</span>}
              </div>
              <div className="form-field">
                <label>Phone</label>
                <input
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-lg popup-submit" style={{ width: '100%', justifyContent: 'center' }}>
              Send me the Guide!
            </button>

            <div className="trust-badges">
              <div className="trust-badge">
                <svg viewBox="0 0 24 24"><path d={checkPath} /></svg>
                Instant Download
              </div>
              <div className="trust-badge">
                <svg viewBox="0 0 24 24"><path d={checkPath} /></svg>
                No Spam Guarantee
              </div>
              <div className="trust-badge">
                <svg viewBox="0 0 24 24"><path d={checkPath} /></svg>
                Expert Curated
              </div>
            </div>
          </form>
        ) : (
          <div className="popup-success">
            <div className="success-icon">
              <svg viewBox="0 0 24 24"><path d={checkPath} /></svg>
            </div>
            <h3>Guide Sent Successfully!</h3>
            <p>Check your email & WhatsApp for the download link.</p>
            <p className="success-note">Our counsellor will call you within 24 hours.</p>
          </div>
        )}
      </div>
    </div>
  );
}