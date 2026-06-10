import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Landmark Institute – India\'s #1 MCA Entrance Coaching',
  description:
    'Expert preparation for NIMCET, CUET PG MCA, DU MCA, JNU MCA, BHU MCA & all MCA entrance exams. 17 years · 6000+ students · 500+ NIT selections.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
