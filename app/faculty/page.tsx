import type { Metadata } from 'next';
import FacultyPageClient from './FacultyPageClient';

export const metadata: Metadata = {
  title: 'Our Expert Faculty – Landmark Institute',
  description:
    'Meet the expert mentors at Landmark Institute. Taught by university professors, book authors, and exam top rankers (NIMCET AIR 4) with decades of experience.',
};

export default function FacultyPage() {
  return <FacultyPageClient />;
}
