import type { Metadata } from 'next';
import ResultsPageClient from './ResultsPageClient';

export const metadata: Metadata = {
  title: 'Nimcet Result | Mca Entrance Result | Top Performer',
  description: 'Landmark Institute Nimcet Result | Mca Entrance Exam Result | Highest performers | Top performers list. 100+ selections in NIMCET',
  openGraph: {
    title: 'Nimcet Result | Mca Entrance Result | Top Performer',
    description: 'Landmark Institute Nimcet Result | Mca Entrance Exam Result | Highest performers | Top performers list. 100+ selections in NIMCET',
    url: 'https://www.landmarkinstitute.com/results/',
  },
};

export default function Page() {
  return <ResultsPageClient />;
}
