// import type { NextConfig } from 'next';

// const nextConfig: NextConfig = {
// 	reactStrictMode: true,
// 	webpack(config) {
// 		config.module.rules.push({
// 			test: /\.svg$/,
// 			issuer: /\.[jt]sx?$/,
// 			use: [
// 				{
// 					loader: '@svgr/webpack',
// 					options: {
// 						svgo: true,
// 						titleProp: true,
// 					},
// 				},
// 			],
// 		});
// 		return config;
// 	},
// };

// export default nextConfig;


// next.config.mjs
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    const fileLoaderRule = config.module.rules.find((rule) => rule.test?.test?.('.svg'));
    if (fileLoaderRule) fileLoaderRule.exclude = /\.svg$/i;

    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { svgo: true, titleProp: true } }],
    });

    return config;
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
