const raw = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
const basePath = raw === '/' ? '' : raw.replace(/\/+$/, '');

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  reactStrictMode: true,
  // GitHub Pages serves a project repo under /<repo>; empty at a domain root.
  basePath,
  assetPrefix: basePath || undefined,
  trailingSlash: true,
};

export default nextConfig;
