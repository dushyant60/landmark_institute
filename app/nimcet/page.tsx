import type { Metadata } from 'next';
import NimcetPageClient from './NimcetPageClient';

export const metadata: Metadata = {
  title: 'Best Nimcet Coaching Online | Nimcet Online Coaching',
  description: 'Join the best Nimcet online coaching. Expert tutors, flexible learning, full syllabus coverage preparation with expert guidance for nimcet coaching.',
  openGraph: {
    title: 'Best Nimcet Coaching Online | Nimcet Online Coaching',
    description: 'Join the best Nimcet online coaching. Expert tutors, flexible learning, full syllabus coverage preparation with expert guidance for nimcet coaching.',
    url: 'https://www.landmarkinstitute.com/nimcet/',
  },
};

export default function Page() {
  return <NimcetPageClient />;
}
