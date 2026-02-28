/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  // Image optimization
  images: {
    domains: ['ipfs.io', 'arweave.net', 'gateway.pinata.cloud'],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
  },

  // Production optimizations
  poweredByHeader: false,
  compress: true,

  // Experimental features (disabled for compatibility)
  // experimental: {
  //   optimizeCss: true,
  // },

  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Production optimizations
    if (!dev && !isServer) {
      config.optimization.splitChunks = {
        chunks: 'all',
        minSize: 20000,
        maxSize: 244000,
        cacheGroups: {
          default: false,
          vendors: false,
          framework: {
            chunks: 'all',
            name: 'framework',
            test: /(?<!node_modules.*)[\\/]node_modules[\\/](react|react-dom|scheduler|prop-types|use-subscription)[\\/]/,
            priority: 40,
            enforce: true,
          },
          lib: {
            test(module) {
              return (
                module.size() > 160000 &&
                /node_modules[/\\]/.test(module.identifier())
              );
            },
            name(module) {
              const hash = require('crypto')
                .createHash('sha1')
                .update(module.identifier())
                .digest('hex')
                .substring(0, 8);
              return `lib-${hash}`;
            },
            priority: 30,
            minChunks: 1,
            reuseExistingChunk: true,
          },
          commons: {
            name: 'commons',
            minChunks: 2,
            priority: 20,
          },
          shared: {
            name(module, chunks) {
              const hash = require('crypto')
                .createHash('sha1')
                .update(chunks.map((c) => c.name).join('_'))
                .digest('hex')
                .substring(0, 8);
              return `shared-${hash}`;
            },
            priority: 10,
            minChunks: 2,
            reuseExistingChunk: true,
          },
        },
      };
    }
    return config;
  },

  // Environment variables that should be available on the client
  env: {
    NEXT_PUBLIC_APP_NAME: 'VoidClaw Protocol',
    NEXT_PUBLIC_APP_VERSION: '0.1.0',
  },

  // Headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
