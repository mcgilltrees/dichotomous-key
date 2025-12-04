/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Needed so the app works when served from https://mcgilltrees.github.io/dichotomous-key
  output: "export",
  basePath: "/dichotomous-key",
  assetPrefix: "/dichotomous-key/"
};

export default nextConfig;
