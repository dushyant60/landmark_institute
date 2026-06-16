/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['www.landmarkinstitute.com'],
  },

  trailingSlash: true,

  // 301 Permanent Redirects — preserves SEO equity from old WordPress URLs
  async redirects() {
    return [
      // Legacy Next.js temporary routes → WordPress matching routes
      { source: '/about', destination: '/about-us/', permanent: true },
      { source: '/about/', destination: '/about-us/', permanent: true },
      { source: '/courses', destination: '/our-courses/', permanent: true },
      { source: '/courses/', destination: '/our-courses/', permanent: true },
      { source: '/contact', destination: '/contactus/', permanent: true },
      { source: '/contact/', destination: '/contactus/', permanent: true },
      // Results — old anchor → new dedicated page
      { source: '/results-page', destination: '/results/', permanent: true },
    ];
  },
};

module.exports = nextConfig;
