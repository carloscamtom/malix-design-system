import { createMDX } from 'fumadocs-mdx/next';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  transpilePackages: ['@malix/ui', '@malix/tokens'],
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname, '../../'),
};

export default withMDX(config);
