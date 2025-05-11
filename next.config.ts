import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
      remotePatterns: [
          {
              protocol: "https",
              hostname: "images-na.ssl-images-amazon.com",
          },
          {
              protocol: "https",
              hostname: "m.media-amazon.com",
          },
          {
              protocol: "https",
              hostname: "placehold.co",
          }
      ]
  },
    typescript: {
      ignoreBuildErrors: true,
    },
    eslint: {
      ignoreDuringBuilds: true,
    }
};

export default nextConfig;
