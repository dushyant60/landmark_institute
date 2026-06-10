import type { Metadata } from 'next';
import CoursesPageClient from './CoursesPageClient';

export const metadata: Metadata = {
  title: 'MCA Entrance Coaching Programmes – Landmark Institute',
  description:
    'Explore our comprehensive 1-Year Online, Offline Regular, Weekend, Crash Course, and 2-Year programmes for MCA Entrance exam preparation (NIMCET, CUET PG, DU, JNU).',
};

export default function CoursesPage() {
  return <CoursesPageClient />;
}
