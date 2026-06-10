'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Results', href: '/#results' },
  { label: 'Faculty', href: '/faculty' },
  { label: 'Exams', href: '/#exams' },
  { label: 'Resources', href: '/#resources' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav>
      <div className="nav-inner">
        <Link href="/" className="logo">
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

        <ul className="nav-links">
          {navLinks.map((link) => {
            const isActive =
              (link.href === '/' && pathname === '/') ||
              (link.href === '/courses' && pathname === '/courses') ||
              (link.href === '/faculty' && pathname === '/faculty') ||
              (link.href === '/about' && pathname === '/about') ||
              (link.href === '/contact' && pathname === '/contact');
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
      </div>
    </nav>
  );
}

