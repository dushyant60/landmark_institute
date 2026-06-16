import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'Know More About US - Landmark Institute',
  description:
    'Know more about Landmark Institute for MCA Entrance Coaching in India | One of the best Institute situated in Delhi for MCA Entrance Preparation.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
