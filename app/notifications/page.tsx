import type { Metadata } from 'next';
import NotificationsPageClient from './NotificationsPageClient';

export const metadata: Metadata = {
	title: 'Soft-tech | Course | Program overview | Landmark Institute',
	description: 'Check about the Courses, Study module, Time duration & Career scope in brief. This way these modules will help students to achieve their dream in easy & smart way',
	openGraph: {
		title: 'Soft-tech | Course | Program overview | Landmark Institute',
		description: 'Check about the Courses, Study module, Time duration & Career scope in brief. This way these modules will help students to achieve their dream in easy & smart way',
		url: 'https://www.landmarkinstitute.com/notifications/',
	},
};

export default function Page() {
	return <NotificationsPageClient />;
}
