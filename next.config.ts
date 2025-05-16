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
          },
          {
              protocol: "https",
              hostname: "www.youtube.com",
          },
          {
              protocol: "https",
              hostname: "img.youtube.com",
          },
          {
              protocol: "https",
              hostname: "i.ytimg.com",
          },

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
