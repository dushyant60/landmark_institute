import type { Metadata } from 'next';
import McaEntranceExamClient from './McaEntranceExamClient';

export const metadata: Metadata = {
  title: 'Best Coaching Institute for All MCA Entrance Exams | Landmark Institute',
  description: 'IMAGE NEEDED: mca-entrance-exams-1024x1024.png (mca entrance exams) If you aim to crack the MCA entrance exams in India, you are stepping into a competitiv...',
  openGraph: {
    title: 'Best Coaching Institute for All MCA Entrance Exams | Landmark Institute',
    description: 'IMAGE NEEDED: mca-entrance-exams-1024x1024.png (mca entrance exams) If you aim to crack the MCA entrance exams in India, you are stepping into a competitiv...',
    url: 'https://www.landmarkinstitute.com/mca-entrance-exam/',
  },
};

export default function Page() {
  return <McaEntranceExamClient />;
}
