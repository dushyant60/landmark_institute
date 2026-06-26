import type { Metadata } from 'next';
import Script from 'next/script';
import { GoogleTagManager } from '@next/third-parties/google';
import './globals.css';

export const metadata: Metadata = {
  title: "Landmark Institute - India's No.1 Institute for MCA Entrance",
  description:
    'Best MCA Entrance Coaching Institute provides offline or online mca coaching for mca entrance exam preparation. 100+ Selections in NIMCET-2026.',
  verification: {
    google: 'pqPgR777UhMxs7b0kEH4bL8L096_4GLE0Drk0-FKTzQ',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* GTM is loaded by @next/third-parties using the correct afterInteractive strategy */}
      <GoogleTagManager gtmId="GTM-WN4L8NG" />
      <body>
        {children}

        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-PHDF47P2BG"
          strategy="afterInteractive"
        />
        <Script id="ga-init" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-PHDF47P2BG');`}
        </Script>
      </body>
    </html>
  );
}
