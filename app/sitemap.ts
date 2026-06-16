import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.landmarkinstitute.com';
  
  const routes = [
    '',
    '/about-us/',
    '/blog/',
    '/contactus/',
    '/cuet-pg-mca/',
    '/cuet-pg-previous-year-question-papers/',
    '/dont-miss-this-crash-course-if-mca-is-your-dream/',
    '/enquiry/',
    '/everything-you-need-to-know-about-mca/',
    '/exams/',
    '/faculty/',
    '/mca-entrance-coaching-in-kanpur/',
    '/mca-entrance-exam/',
    '/nimcet/',
    '/nimcet-coaching-in-patna/',
    '/notification/',
    '/notifications/',
    '/online-mca-entrance-exam/',
    '/our-courses/',
    '/privacy-policy/',
    '/results/',
    '/student-central/',
    '/syllabus/',
    '/terms-and-conditions/',
    '/the-hidden-merits-of-pursuing-mca/',
    '/top-10-universities-in-india-for-mca/',
    '/videos/',
    '/what-are-the-career-options-available-after-mca/',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));
}
