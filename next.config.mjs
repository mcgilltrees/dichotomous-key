/** @type {import('next').NextConfig} */
// Only use basePath for GitHub Pages deployment, not for local development
const useBasePath = process.env.GITHUB_PAGES === 'true';
const basePath = useBasePath ? '/dichotomous-key' : '';

const nextConfig = {
  reactStrictMode: true,
  output: 'export', // enables static HTML export
  ...(useBasePath && {
    basePath,
    assetPrefix: basePath,
  }),
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;


