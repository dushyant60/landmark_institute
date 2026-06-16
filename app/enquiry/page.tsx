import type { Metadata } from 'next';
import EnquiryPageClient from './EnquiryPageClient';

export const metadata: Metadata = {
  title: 'Enquiry – Landmark Institute',
  description: '',
  openGraph: {
    title: 'Enquiry – Landmark Institute',
    description: '',
    url: 'https://www.landmarkinstitute.com/enquiry/',
  },
};

export default function Page() {
  return <EnquiryPageClient />;
}
