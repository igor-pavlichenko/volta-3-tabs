/** @type {import('next').NextConfig} */
const nextConfig = {
  rewrites: () => [
    { source: '/brake-system', destination: '/' },
    { source: '/telematics', destination: '/' },
    { source: '/climate-control', destination: '/' },
  ],
};

module.exports = nextConfig;
