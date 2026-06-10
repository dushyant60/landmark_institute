export default function Topbar() {
  const waPath =
    'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347';

  return (
    <div className="topbar">
      <div className="topbar-inner">
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="tel:9999992338">📞 +91 999 999 2338</a>
          <a href="tel:9953692399">📞 +91 995 369 2399</a>
          <a href="mailto:info@landmarkinstitute.com">✉️ info@landmarkinstitute.com</a>
        </div>
        <div className="topbar-right">
          <span>West Patel Nagar, New Delhi</span>
          <a href="https://wa.me/919999992338" className="wa-badge">
            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
              <path d={waPath} />
            </svg>
            WhatsApp Now
          </a>
        </div>
      </div>
    </div>
  );
}
