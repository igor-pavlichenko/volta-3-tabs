/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    { source: '/brake-system', destination: '/' },
    { source: '/telematics', destination: '/' },
    { source: '/navigation', destination: '/' },
  ],
};

module.exports = nextConfig;
