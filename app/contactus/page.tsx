import type { Metadata } from 'next';
import ContactPageClient from './ContactPageClient';

export const metadata: Metadata = {
  title: 'Know more about us|Specific Information | Landmark Institute',
  description:
    'Know more about us, Contact us for more information, any specific information or any other study, coaching related concern. We are here for you only.',
};

export default function ContactPage() {
  const schemaJson = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': 'Landmark Institute',
    'image': 'http://www.landmarkinstitute.com/wp-content/uploads/2018/01/landmarklogo4vrt-1.png',
    'url': 'https://www.landmarkinstitute.com/contactus/',
    'telephone': '+91 999 999 2338, +91 995 369 2399',
    'address': {
      '@type': 'PostalAddress',
      'streetAddress': 'Ground Floor, 3/24, Block 1, West Patel Nagar, Patel Nagar',
      'addressLocality': 'New Delhi',
      'postalCode': '110008',
      'addressCountry': 'IN'
    },
    'openingHoursSpecification': [
      {
        '@type': 'OpeningHoursSpecification',
        'dayOfWeek': [
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday'
        ],
        'opens': '09:00',
        'closes': '17:00'
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaJson) }}
      />
      <ContactPageClient />
    </>
  );
}

