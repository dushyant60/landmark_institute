import type { Metadata } from 'next';
import CareerOptionsClient from './CareerOptionsClient';

export const metadata: Metadata = {
  title: 'Career Options After MCA | Jobs After MCA | Landmark Institute',
  description: '&nbsp; Lack of awareness and misinformation leave students directionless. When it comes to higher education most students are misguided by money-driven pri...',
  openGraph: {
    title: 'Career Options After MCA | Jobs After MCA | Landmark Institute',
    description: '&nbsp; Lack of awareness and misinformation leave students directionless. When it comes to higher education most students are misguided by money-driven pri...',
    url: 'https://www.landmarkinstitute.com/what-are-the-career-options-available-after-mca/',
  },
};

export default function Page() {
  return <CareerOptionsClient />;
}
