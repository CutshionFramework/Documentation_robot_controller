/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',
  basePath: isProd ? '/doc_robot_controller' : '',
  assetPrefix: isProd ? '/doc_robot_controller/' : '',
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