import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  allowedDevOrigins: ['192.168.50.110'],
  images: {
    qualities: [100, 75, 95]
  }
};

export default nextConfig;
