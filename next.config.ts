import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true, // recommended for static hosting
};

export default nextConfig;
