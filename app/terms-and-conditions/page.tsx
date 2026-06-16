import type { Metadata } from 'next';
import TermsPageClient from './TermsPageClient';

export const metadata: Metadata = {
  title: 'Terms and Conditions – Landmark Institute',
  description: '',
  openGraph: {
    title: 'Terms and Conditions – Landmark Institute',
    description: '',
    url: 'https://www.landmarkinstitute.com/terms-and-conditions/',
  },
};

export default function Page() {
  return <TermsPageClient />;
}

