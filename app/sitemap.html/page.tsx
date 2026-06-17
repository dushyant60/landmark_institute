import type { Metadata } from 'next';
import SitemapClient from './SitemapClient';

export const metadata: Metadata = {
  title: 'Sitemap - Landmark Institute',
  description: 'Sitemap for Landmark Institute. Find all pages, courses, exam hubs, resources, and articles under one organized layout.',
};

export default function SitemapPage() {
  return <SitemapClient />;
}
