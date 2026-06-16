import type { Metadata } from 'next';
import Topbar from '@/components/Topbar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingWhatsApp from '@/components/FloatingWhatsApp';

export const metadata: Metadata = {
  title: 'Results-Existing Results|Top performer | Landmark Institute',
  description: 'Check Landmark Institute existing | current & last year results | Highest performers | Top performers list. 100+ selections in NIMCET - 2018',
  openGraph: {
    title: 'Results-Existing Results|Top performer | Landmark Institute',
    description: 'Check Landmark Institute existing | current & last year results | Highest performers | Top performers list. 100+ selections in NIMCET - 2018',
    url: 'https://www.landmarkinstitute.com/videos/',
  },
};

export default function Page() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="hero" style={{ padding: '60px 0 40px', textAlign: 'center' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <span className="hero-badge">Landmark Institute</span>
          <h1 style={{ fontSize: 'clamp(30px, 4vw, 42px)', fontWeight: 700, lineHeight: 1.2, margin: '0 auto' }}>
            Videos
          </h1>
        </div>
      </div>
      <main style={{ padding: '60px 0 80px', background: 'var(--bg)' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <h2 style={{ fontFamily: "'Poppins', sans-serif", fontSize: '28px', fontWeight: 800, color: 'var(--slate)', marginBottom: '8px' }}>
              Featured Success Stories from Our Toppers
            </h2>
            <p style={{ fontSize: '15px', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
              Free MCA entrance exam preparation tips, core mathematical problem-solving sessions, and successful student reviews.
            </p>
          </div>

          <div className="videos-gallery-grid">
            {/* Video 1 */}
            <div className="videos-gallery-card">
              <div className="prose-custom" style={{ margin: 0 }}>
                <div className="video-wrapper" style={{ marginBottom: 0, borderRadius: 'var(--r-lg) var(--r-lg) 0 0' }}>
                  <iframe
                    src="https://www.youtube.com/embed/BNFQ-JxYEaU"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="videos-gallery-info">
                <span className="videos-gallery-tag" style={{ background: '#E8FFF2', color: '#00A846' }}>Success Stories</span>
              </div>
            </div>

            {/* Video 2 */}
            <div className="videos-gallery-card">
              <div className="prose-custom" style={{ margin: 0 }}>
                <div className="video-wrapper" style={{ marginBottom: 0, borderRadius: 'var(--r-lg) var(--r-lg) 0 0' }}>
                  <iframe
                    src="https://www.youtube.com/embed/sL-izVi0fKI"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="videos-gallery-info">
                <span className="videos-gallery-tag" style={{ background: '#E8F1FD', color: '#0B5ED7' }}>Success Stories</span>
              </div>
            </div>

            {/* Video 3 */}
            <div className="videos-gallery-card">
              <div className="prose-custom" style={{ margin: 0 }}>
                <div className="video-wrapper" style={{ marginBottom: 0, borderRadius: 'var(--r-lg) var(--r-lg) 0 0' }}>
                  <iframe
                    src="https://www.youtube.com/embed/CwbBWEDU7TM"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="videos-gallery-info">
                <span className="videos-gallery-tag" style={{ background: '#FFF7ED', color: '#EA580C' }}>Success Stories</span>
              </div>
            </div>

            {/* Video 4 */}
            <div className="videos-gallery-card">
              <div className="prose-custom" style={{ margin: 0 }}>
                <div className="video-wrapper" style={{ marginBottom: 0, borderRadius: 'var(--r-lg) var(--r-lg) 0 0' }}>
                  <iframe
                    src="https://www.youtube.com/embed/O1ft5NXE9hk"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
              <div className="videos-gallery-info">
                <span className="videos-gallery-tag" style={{ background: '#F5F3FF', color: '#7C3AED' }}>Success Stories</span>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
