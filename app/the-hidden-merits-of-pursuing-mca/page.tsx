import type { Metadata } from 'next';
import HiddenMeritsClient from './HiddenMeritsClient';

export const metadata: Metadata = {
  title: 'The Hidden Merits of Pursuing MCA | Landmark Institute',
  description: 'Have you ever heard of these exciting work fields- Date Scientist, Cyber-Robotics and Cloud Architect, Video Game Designer? Don’t they sound exciting and w...',
  openGraph: {
    title: 'The Hidden Merits of Pursuing MCA | Landmark Institute',
    description: 'Have you ever heard of these exciting work fields- Date Scientist, Cyber-Robotics and Cloud Architect, Video Game Designer? Don’t they sound exciting and w...',
    url: 'https://www.landmarkinstitute.com/the-hidden-merits-of-pursuing-mca/',
  },
};

export default function Page() {
  return <HiddenMeritsClient />;
}
