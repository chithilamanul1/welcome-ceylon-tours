import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'welcomeceylontours.lk',
          },
        ],
        destination: 'https://www.welcomeceylontours.lk/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
