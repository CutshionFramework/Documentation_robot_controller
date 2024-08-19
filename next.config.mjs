/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/docs/getting-started/introduction',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;