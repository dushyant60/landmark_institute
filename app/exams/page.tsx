import type { Metadata } from 'next';
import ExamsPageClient from './ExamsPageClient';

export const metadata: Metadata = {
  title: 'MCA Entrance Exam Hub – NIMCET, CUET PG, DU, JNU, BHU MCA',
  description:
    'Complete guide on eligibility criteria, exam patterns, subject weightage, syllabus, and target colleges for NIMCET, CUET PG, and MAH MCA CET.',
};

export default function ExamsPage() {
  return <ExamsPageClient />;
}
