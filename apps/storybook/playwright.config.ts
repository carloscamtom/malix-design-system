import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  snapshotDir: './tests/__snapshots__',
  snapshotPathTemplate: '{snapshotDir}/{testFilePath}/{arg}{ext}',
  timeout: 30_000,
  expect: {
    toHaveScreenshot: {
      maxDiffPixelRatio: 0.01,
    },
  },
  use: {
    baseURL: 'http://localhost:6006',
    screenshot: 'off',
  },
  webServer: {
    command: 'npx http-server ./storybook-static -p 6006 --silent',
    port: 6006,
    reuseExistingServer: !process.env.CI,
  },
});
