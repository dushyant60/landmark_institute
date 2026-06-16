import type { Metadata } from 'next';
import NimcetPatnaClient from './NimcetPatnaClient';

export const metadata: Metadata = {
  title: 'Best Nimcet Coaching in Patna | Online Nimcet Course',
  description: 'If you are looking for the best Nimcet coaching in Patna, then you have landed on the right page. get best online mca entrance coaching in patna, bihar.',
  openGraph: {
    title: 'Best Nimcet Coaching in Patna | Online Nimcet Course',
    description: 'If you are looking for the best Nimcet coaching in Patna, then you have landed on the right page. get best online mca entrance coaching in patna, bihar.',
    url: 'https://www.landmarkinstitute.com/nimcet-coaching-in-patna/',
  },
};

export default function Page() {
  return <NimcetPatnaClient />;
}

