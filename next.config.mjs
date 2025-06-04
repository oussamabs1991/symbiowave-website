// next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // For Cloudflare Pages static export:
  output: 'export', // <--- UNCOMMENT AND ACTIVATE THIS
  images: {
    unoptimized: true, // <--- UNCOMMENT AND ACTIVATE THIS
  },
};

export default nextConfig;