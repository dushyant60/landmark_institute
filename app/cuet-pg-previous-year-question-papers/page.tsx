import type { Metadata } from 'next';
import CuetPgPapersClient from './CuetPgPapersClient';

export const metadata: Metadata = {
  title: 'CUET PG Previous Year Question Paper PDF with Answers',
  description: 'Download CUET PG Previous Year Question Paper with Answers PDF. Get solved papers, answer keys, exam pattern, and important questions for CUET PG 2026.',
  openGraph: {
    title: 'CUET PG Previous Year Question Paper PDF with Answers',
    description: 'Download CUET PG Previous Year Question Paper with Answers PDF. Get solved papers, answer keys, exam pattern, and important questions for CUET PG 2026.',
    url: 'https://www.landmarkinstitute.com/cuet-pg-previous-year-question-papers/',
  },
};

export default function Page() {
  return <CuetPgPapersClient />;
}
