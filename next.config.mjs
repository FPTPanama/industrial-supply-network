/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones de compilación
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
};

export default nextConfig;

