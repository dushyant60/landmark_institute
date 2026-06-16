import type { Metadata } from 'next';
import ResultsPageClient from './ResultsPageClient';

export const metadata: Metadata = {
  title: 'Nimcet Result | Mca Entrance Result | Top Performer 2025',
  description: 'Landmark Institute Nimcet Result | Mca Entrance Exam Result | Highest performers | Top performers list. 100+ selections in NIMCET - 2025',
  openGraph: {
    title: 'Nimcet Result | Mca Entrance Result | Top Performer 2025',
    description: 'Landmark Institute Nimcet Result | Mca Entrance Exam Result | Highest performers | Top performers list. 100+ selections in NIMCET - 2025',
    url: 'https://www.landmarkinstitute.com/results/',
  },
};

export default function Page() {
  return <ResultsPageClient />;
}
