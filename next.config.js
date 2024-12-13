/** @type {import('next').NextConfig} */
const nextConfig = {
  // The appDir experimental feature is not compatible with static exports
  experimental: {
    appDir: true, // Remove this
  },

  // Keep these settings
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['lorencouse.com'],
  },
};
