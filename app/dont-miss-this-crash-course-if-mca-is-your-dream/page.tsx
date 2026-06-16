import type { Metadata } from 'next';
import CrashCourseClient from './CrashCourseClient';

export const metadata: Metadata = {
  title: 'Don’t miss this Crash Course if MCA is your Dream! | Landmark Institute',
  description: 'Don’t miss this Crash Course if MCA is your Dream! Landmark Institute has emerged as India’s No. 1 institute that specializes in MCA entrance exam. It has ...',
  openGraph: {
    title: 'Don’t miss this Crash Course if MCA is your Dream! | Landmark Institute',
    description: 'Don’t miss this Crash Course if MCA is your Dream! Landmark Institute has emerged as India’s No. 1 institute that specializes in MCA entrance exam. It has ...',
    url: 'https://www.landmarkinstitute.com/dont-miss-this-crash-course-if-mca-is-your-dream/',
  },
};

export default function Page() {
  return <CrashCourseClient />;
}
