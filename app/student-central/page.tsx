import type { Metadata } from 'next';
import StudentCentralClient from './StudentCentralClient';

export const metadata: Metadata = {
  title: 'Reviews & Testimonials Feedback | Landmark Institute',
  description: 'Check existing student reviews, testimonials, feedback for Landmark Institute. We have more than XXX happy students. 100+ selections in NIMCET - 2018',
  openGraph: {
    title: 'Reviews & Testimonials Feedback | Landmark Institute',
    description: 'Check existing student reviews, testimonials, feedback for Landmark Institute. We have more than XXX happy students. 100+ selections in NIMCET - 2018',
    url: 'https://www.landmarkinstitute.com/student-central/',
  },
};

export default function Page() {
  return <StudentCentralClient />;
}
