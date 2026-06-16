import type { Metadata } from 'next';
import KanpurPageClient from './KanpurPageClient';

export const metadata: Metadata = {
  title: 'Top #1 MCA Entrance Coaching in Kanpur - Landmark Institute',
  description: 'Are you planning to crack the nimcet coaching or MCA entrance coaching in Kanpur or ther entrance exams and go to top level universities like NITs, DU or JNU?',
  openGraph: {
    title: 'Top #1 MCA Entrance Coaching in Kanpur - Landmark Institute',
    description: 'Are you planning to crack the nimcet coaching or MCA entrance coaching in Kanpur or ther entrance exams and go to top level universities like NITs, DU or JNU?',
    url: 'https://www.landmarkinstitute.com/mca-entrance-coaching-in-kanpur/',
  },
};

export default function Page() {
  return <KanpurPageClient />;
}

