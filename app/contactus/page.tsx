import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Know more about us|Specific Information | Landmark Institute',
  description:
    'Know more about us, Contact us for more information, any specific information or any other study, coaching related concern. We are here for you only.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}

