/** @type {import('next').NextConfig} */
// Only use basePath for GitHub Pages deployment, not for local development
const useBasePath = process.env.GITHUB_PAGES === 'true';

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // enables static HTML export
  ...(useBasePath && {
    basePath: '/dichotomous-key',
    assetPrefix: '/dichotomous-key',
  }),
};

export default nextConfig;


