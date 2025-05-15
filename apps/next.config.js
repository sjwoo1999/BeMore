const { composePlugins, withNx } = require('@nx/next');
const path = require('path');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {},
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@app': path.resolve(__dirname, 'src/app'), // ✅ 여기 핵심
    };
    return config;
  },
};

module.exports = composePlugins(withNx)(nextConfig);
