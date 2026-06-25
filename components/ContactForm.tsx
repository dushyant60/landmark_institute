'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

interface ContactFormProps {
  buttonText?: string;
  successMessage?: string;
  title?: string;
  subtitle?: string;
  showMessageField?: boolean;
}

export default function ContactForm({
  buttonText = 'Send Message →',
  successMessage,
  title,
  subtitle,
  showMessageField = true,
}: ContactFormProps) {
  const [formData, setFormData] = useState({ name: '', phone: '', course: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          course: formData.course,
          message: formData.message,
          formType: 'contact',
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitted(true);
      } else {
        setSubmitError(result.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      setSubmitError('Failed to send message. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {title && (
        <h3 style={{ fontSize: '20px', fontWeight: 700, color: 'var(--slate)', marginBottom: '4px' }}>
          {title}
        </h3>
      )}
      {subtitle && (
        <p style={{ fontSize: '14px', color: 'var(--text-muted)', marginBottom: '20px' }}>
          {subtitle}
        </p>
      )}

      {submitted ? (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ textAlign: 'center', padding: '24px 10px' }}
        >
          <div style={{
            width: '56px',
            height: '56px',
            borderRadius: '50%',
            background: '#DCFCE7',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 16px',
            fontSize: '24px',
            color: '#15803D'
          }}>
            ✓
          </div>
          <h4 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--slate)', marginBottom: '8px' }}>
            Success!
          </h4>
          <p style={{ fontSize: '14.5px', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '0' }}>
            {successMessage || (
              <>
                Thank you, <strong>{formData.name}</strong>. Our expert counsellor will call you on <strong>{formData.phone}</strong> within 24 hours.
              </>
            )}
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} style={{ marginTop: title ? '0' : '12px' }}>
          <div className="form-field">
            <label htmlFor="form-name">Full Name *</label>
            <input
              id="form-name"
              type="text"
              required
              placeholder="Your full name"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>

          <div className="form-field">
            <label htmlFor="form-phone">Phone Number *</label>
            <input
              id="form-phone"
              type="tel"
              required
              placeholder="+91 XXXXX XXXXX"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
          </div>

          <div className="form-field">
            <label htmlFor="form-course">Course Interested In *</label>
            <div style={{ position: 'relative' }}>
              <select
                id="form-course"
                required
                value={formData.course}
                onChange={(e) => setFormData({ ...formData, course: e.target.value })}
                style={{ paddingRight: '30px' }}
              >
                <option value="">Select a course...</option>
                <option value="1 Year Online NIMCET Batch">1 Year Online NIMCET Batch</option>
                <option value="Regular Offline Batch (Delhi)">Regular Offline Batch (Delhi)</option>
                <option value="Weekend Online Batch">Hybrid Batch</option>
                <option value="Crash Course (3-4 Months)">Crash Course (3-4 Months)</option>
                <option value="CUET PG MCA Batch">CUET PG MCA Batch</option>
                <option value="Test Series Only">Test Series Only</option>
              </select>
              <div style={{
                position: 'absolute',
                right: '12px',
                top: '50%',
                transform: 'translateY(-50%)',
                pointerEvents: 'none',
                color: 'var(--text-muted)',
                fontSize: '10px'
              }}>
                ▼
              </div>
            </div>
          </div>

          {showMessageField && (
            <div className="form-field">
              <label htmlFor="form-message">Message (Optional)</label>
              <input
                id="form-message"
                type="text"
                placeholder="Your question or message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{
              width: '100%',
              justifyContent: 'center',
              padding: '12px',
              fontSize: '15px',
              marginTop: '10px',
              opacity: isSubmitting ? 0.7 : 1,
              cursor: isSubmitting ? 'not-allowed' : 'pointer'
            }}
          >
            {isSubmitting ? 'Sending...' : buttonText}
          </button>

          {submitError && (
            <p style={{ color: '#E11D48', fontSize: '14px', marginTop: '10px', textAlign: 'center' }}>
              {submitError}
            </p>
          )}
        </form>
      )}
    </div>
  );
}
