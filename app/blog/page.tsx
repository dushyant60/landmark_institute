import type { Metadata } from 'next';
import BlogPageClient from './BlogPageClient';

export const metadata: Metadata = {
  title: 'Blog – Landmark Institute',
  description: '',
  openGraph: {
    title: 'Blog – Landmark Institute',
    description: '',
    url: 'https://www.landmarkinstitute.com/blog/',
  },
};

export default function Page() {
  return <BlogPageClient />;
}
