import type { StorybookConfig } from '@storybook/react-vite';
import { resolve } from 'node:path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-interactions'],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  },
  viteFinal: async (viteConfig) => ({
    ...viteConfig,
    resolve: {
      ...(viteConfig.resolve ?? {}),
      alias: {
        ...(viteConfig.resolve?.alias ?? {}),
        '@malix/ui': resolve(process.cwd(), '../../packages/ui/src'),
        '@malix/ui/styles.css': resolve(process.cwd(), '../../packages/ui/src/styles.css'),
        '@malix/tokens': resolve(process.cwd(), '../../packages/tokens'),
        '@malix/tokens/tokens.css': resolve(process.cwd(), '../../packages/tokens/tokens.css')
      }
    }
  })
};

export default config;
