import type { Metadata } from 'next';
import AboutPageClient from './AboutPageClient';

export const metadata: Metadata = {
  title: 'About Us – Landmark Institute',
  description:
    'Learn about the history, vision, and core philosophy of Landmark Institute. Helping MCA aspirants clear NIMCET and CUET PG since 2007.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
