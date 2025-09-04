// next.config.mjs
// const isDev = process.env.NODE_ENV !== 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/kairo',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/kairo',
        permanent: false,
        basePath: false,
      },
    ];
  },
};

export default nextConfig;
