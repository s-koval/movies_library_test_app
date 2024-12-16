import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: process.env.NEXT_PUBLIC_PROD_HOST_NAME || 'localhost',
        port: '',
        pathname: '/uploads/**'
      }
    ],
  },
};

export default nextConfig;
