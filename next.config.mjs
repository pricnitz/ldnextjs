/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true, // ✅ must be top-level
  images: {
    unoptimized: true, // ✅ stays inside images
  },
};

export default nextConfig;