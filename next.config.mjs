/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optimizaciones de compilación
  experimental: {
    optimizePackageImports: ['react-icons'],
  },
  
  // Reducir uso de memoria durante compilación
  webpack: (config, { dev, isServer }) => {
    if (dev) {
      // Optimizar para desarrollo
      config.watchOptions = {
        poll: 1000,
        aggregateTimeout: 300,
      };
      
      // Reducir overhead en desarrollo
      config.optimization = {
        ...config.optimization,
        removeAvailableModules: false,
        removeEmptyChunks: false,
        splitChunks: false,
      };
    }
    return config;
  },
};

export default nextConfig;

