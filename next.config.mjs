const isProd = process.env.NODE_ENV === 'production';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'build',
  basePath: isProd ? '/portfolio-landing' : '',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
