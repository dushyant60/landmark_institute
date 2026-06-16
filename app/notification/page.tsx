import type { Metadata } from 'next';
import NotificationPageClient from './NotificationPageClient';

export const metadata: Metadata = {
  title: 'Notifications-Check the latest | Landmark Institute',
  description: 'Update yourself by getting latest notification, update, news, announcement, batch information, and exam date etc to help in your study in much better way.',
  openGraph: {
    title: 'Notifications-Check the latest | Landmark Institute',
    description: 'Update yourself by getting latest notification, update, news, announcement, batch information, and exam date etc to help in your study in much better way.',
    url: 'https://www.landmarkinstitute.com/notification/',
  },
};

export default function Page() {
  return <NotificationPageClient />;
}
