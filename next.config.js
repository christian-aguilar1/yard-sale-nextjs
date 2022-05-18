/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue',
  },
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: 'https://www.google.com',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
