import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    unoptimized: true
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true
};

export default nextConfig;
