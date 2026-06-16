import type { Metadata } from 'next';
import CuetPgMcaClient from './CuetPgMcaClient';

export const metadata: Metadata = {
  title: "India' Best Coaching for CUET PG MCA Preparation",
  description: 'If you are serious about cracking Cuet PG MCA and coaching that focus, inexpensive and really effective landmark institute is your best bet.',
  openGraph: {
    title: "India' Best Coaching for CUET PG MCA Preparation",
    description: 'If you are serious about cracking Cuet PG MCA and coaching that focus, inexpensive and really effective landmark institute is your best bet.',
    url: 'https://www.landmarkinstitute.com/cuet-pg-mca/',
  },
};

export default function Page() {
  return <CuetPgMcaClient />;
}
