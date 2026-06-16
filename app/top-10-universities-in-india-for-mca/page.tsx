import type { Metadata } from 'next';
import TopUniversitiesClient from './TopUniversitiesClient';

export const metadata: Metadata = {
  title: 'Top 10 Universities in India for MCA | Landmark Institute',
  description: 'In this article you get know about Top MCA Universities India . Some of the ways that can help you n qualify the MCA entrance exam in some top-notch colleg...',
  openGraph: {
    title: 'Top 10 Universities in India for MCA | Landmark Institute',
    description: 'In this article you get know about Top MCA Universities India . Some of the ways that can help you n qualify the MCA entrance exam in some top-notch colleg...',
    url: 'https://www.landmarkinstitute.com/top-10-universities-in-india-for-mca/',
  },
};

export default function Page() {
  return <TopUniversitiesClient />;
}
