import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        // Optional: If you want to restrict to a specific base path
        // pathname: '/brainly/**',
      },
    ],
    qualities: [75, 90, 95], // Add 90 to the existing list
    // ... other image settings
  },
};

export default nextConfig;
