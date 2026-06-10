'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Results', href: '/#results' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Exams', href: '/exams' },
  { label: 'Resources', href: '/#resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav>
        <div className="nav-inner">
          <Link href="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="logo-mark">
              <Image
                src="http://www.landmarkinstitute.com/wp-content/uploads/2018/01/landmarklogo4vrt-1.png"
                alt="Landmark Institute logo"
                width={150}
                height={60}
                className="logo-img"
                unoptimized
              />
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-links">
            {navLinks.map((link) => {
              const isActive =
                (link.href === '/' && pathname === '/') ||
                (link.href === '/courses' && pathname === '/courses') ||
                (link.href === '/faculty' && pathname === '/faculty') ||
                (link.href === '/about' && pathname === '/about') ||
                (link.href === '/contact' && pathname === '/contact') ||
                (link.href === '/exams' && pathname === '/exams');
              return (
                <li key={link.label}>
                  <Link href={link.href} className={isActive ? 'active' : ''}>
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="nav-ctas">
            <a href="#" className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '13px' }}>
              Download Brochure
            </a>
            <a href="/#contact" className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '13px' }}>
              Apply Now →
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <button
            className="mobile-nav-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              color: 'var(--slate)',
              padding: '8px',
              display: 'none',
            }}
          >
            <svg viewBox="0 0 24 24" width="26" height="26" stroke="currentColor" strokeWidth="2.5" fill="none">
              {isMobileMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay Menu Drawer */}
      <div className={`mobile-menu-overlay ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navLinks.map((link) => {
            const isActive =
              (link.href === '/' && pathname === '/') ||
              (link.href === '/courses' && pathname === '/courses') ||
              (link.href === '/faculty' && pathname === '/faculty') ||
              (link.href === '/about' && pathname === '/about') ||
              (link.href === '/contact' && pathname === '/contact') ||
              (link.href === '/exams' && pathname === '/exams');
            return (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className={isActive ? 'active' : ''}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mobile-nav-ctas">
          <a
            href="#"
            className="btn btn-outline"
            style={{ justifyContent: 'center', padding: '12px' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Download Brochure
          </a>
          <a
            href="/#contact"
            className="btn btn-primary"
            style={{ justifyContent: 'center', padding: '12px' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Apply Now →
          </a>
        </div>
      </div>

      {/* Local Styles for Hamburger and Overlay Drawer */}
      <style dangerouslySetInnerHTML={{ __html: `
        .mobile-menu-overlay {
          position: fixed;
          top: 68px; /* navbar height */
          left: 0;
          right: 0;
          bottom: 0;
          background: #fff;
          z-index: 99;
          display: flex;
          flex-direction: column;
          padding: 24px;
          gap: 24px;
          transform: translateY(-100%);
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-top: 1px solid var(--border);
        }
        .mobile-menu-overlay.open {
          transform: translateY(0);
          opacity: 1;
          pointer-events: all;
        }
        .mobile-nav-links {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .mobile-nav-links a {
          text-decoration: none;
          color: var(--slate-mid);
          font-size: 17px;
          font-weight: 600;
          font-family: 'Poppins', sans-serif;
          display: block;
          padding: 10px 0;
          border-bottom: 1px solid var(--border-light);
          transition: 0.15s;
        }
        .mobile-nav-links a:hover, .mobile-nav-links a.active {
          color: var(--blue);
          border-bottom-color: var(--blue);
        }
        .mobile-nav-ctas {
          display: flex;
          flex-direction: column;
          gap: 10px;
          margin-top: auto;
          padding-bottom: 20px;
        }
        @media (max-width: 900px) {
          .mobile-nav-toggle {
            display: block !important;
          }
          .nav-ctas {
            display: none !important;
          }
        }
      `}} />
    </>
  );
}


