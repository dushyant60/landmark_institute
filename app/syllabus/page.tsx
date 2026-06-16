import type { Metadata } from 'next';
import SyllabusPageClient from './SyllabusPageClient';

export const metadata: Metadata = {
  title: 'NIMCET Syllabus 2026 | Mca Entrance Exam Syllabus | Updated',
  description: 'Check the updated NIMCET Syllabus 2026 MCA Entrance Exam Syllabus with subject-wise topics, exam pattern, marking scheme, and PDF download. Prepare smarter.',
  openGraph: {
    title: 'NIMCET Syllabus 2026 | Mca Entrance Exam Syllabus | Updated',
    description: 'Check the updated NIMCET Syllabus 2026 MCA Entrance Exam Syllabus with subject-wise topics, exam pattern, marking scheme, and PDF download. Prepare smarter.',
    url: 'https://www.landmarkinstitute.com/syllabus/',
  },
};

export default function Page() {
  return <SyllabusPageClient />;
}
