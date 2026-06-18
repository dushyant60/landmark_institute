import type { Metadata } from 'next';
import NotificationsPageClient from './NotificationsPageClient';

export const metadata: Metadata = {
	title: 'Top MCA Colleges | Landmark Institute',
	description: 'Check about the top colleges of MCA, study modules, program durations, and career scope. Learn how Landmark Institute prepares you to get into premium NITs and top universities.',
	openGraph: {
		title: 'Top MCA Colleges | Landmark Institute',
		description: 'Check about the top colleges of MCA, study modules, program durations, and career scope. Learn how Landmark Institute prepares you to get into premium NITs and top universities.',
		url: 'https://www.landmarkinstitute.com/notifications/',
	},
};

export default function Page() {
	return <NotificationsPageClient />;
}
