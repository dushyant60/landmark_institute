import type { Metadata } from 'next';
import PrivacyPolicyClient from './PrivacyPolicyClient';

export const metadata: Metadata = {
  title: 'Privacy Policy – Landmark Institute',
  description: '',
  openGraph: {
    title: 'Privacy Policy – Landmark Institute',
    description: '',
    url: 'https://www.landmarkinstitute.com/privacy-policy/',
  },
};

export default function Page() {
  return <PrivacyPolicyClient />;
}
