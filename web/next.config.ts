import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/products",
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*", // lo que llamas desde el frontend
        destination: "http://localhost:3001/api/:path*", // backend real
      },
    ];
  },
};

export default nextConfig;
