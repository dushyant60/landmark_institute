import type { Metadata } from 'next';
import OnlineMcaPageClient from './OnlineMcaPageClient';

export const metadata: Metadata = {
  title: 'Best Online MCA Entrance Coaching Institute | Mca Entrance Classes',
  description: 'We are leading best online mca entrance coaching institute. provide entrance exam for mca online, help students to successfully placed in top colleges.',
  openGraph: {
    title: 'Best Online MCA Entrance Coaching Institute | Mca Entrance Classes',
    description: 'We are leading best online mca entrance coaching institute. provide entrance exam for mca online, help students to successfully placed in top colleges.',
    url: 'https://www.landmarkinstitute.com/online-mca-entrance-exam/',
  },
};

export default function Page() {
  return <OnlineMcaPageClient />;
}
