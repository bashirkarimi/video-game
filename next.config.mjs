/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    RAWG_API_KEY:'b172c09892dc49d1b0fa82c1c749a744'
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'media.rawg.io',
        port: '',
      },
    ],
    deviceSizes: [320, 640, 1024, 1280, 1920],
  },
};

export default nextConfig;
