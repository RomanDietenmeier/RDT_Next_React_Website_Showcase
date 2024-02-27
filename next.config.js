/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  // assetPrefix: "https://romandietenmeiertechnik.de/4nex/",
  output: "export",
  compiler: {
    styledComponents: true,
  },
  images: { unoptimized: true },
};

module.exports = nextConfig;
