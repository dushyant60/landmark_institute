import type { Metadata } from 'next';
import EverythingMcaClient from './EverythingMcaClient';

export const metadata: Metadata = {
  title: 'Everything you need to know about MCA | Landmark Institute',
  description: 'Everything you need to know about MCA A brief about MCA Master of Computer Application is a three-year (six semesters) professional Master\'s Degree in comp...',
  openGraph: {
    title: 'Everything you need to know about MCA | Landmark Institute',
    description: 'Everything you need to know about MCA A brief about MCA Master of Computer Application is a three-year (six semesters) professional Master\'s Degree in comp...',
    url: 'https://www.landmarkinstitute.com/everything-you-need-to-know-about-mca/',
  },
};

export default function Page() {
  return <EverythingMcaClient />;
}
