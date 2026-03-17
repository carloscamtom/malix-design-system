import { test, expect } from '@playwright/test';

/**
 * Visual regression tests for critical Malix components.
 *
 * Each test navigates to the Storybook iframe URL for a specific story,
 * waits for the component to render, and takes a screenshot that is
 * compared against a committed baseline snapshot.
 *
 * First run generates baselines in tests/__snapshots__/.
 * Subsequent runs compare against them.
 */

// Helper to build Storybook iframe URLs
// Story IDs follow the pattern: title--story-name (lowercased, spaces → hyphens)
function storyUrl(id: string) {
  return `/iframe.html?id=${id}&viewMode=story`;
}

const CRITICAL_STORIES = [
  { name: 'Button — Primary', id: 'malix-button--text' },
  { name: 'Button — Secondary Icon', id: 'malix-button--leading-icon-text' },
  { name: 'Input Group', id: 'malix-inputgroup--with-label' },
  { name: 'Card — Level 1', id: 'malix-card--level1' },
  { name: 'DataTable', id: 'malix-datatable--default' },
  { name: 'Modal', id: 'malix-modal--default' },
  { name: 'Tooltip — Top', id: 'malix-tooltip--top' },
  { name: 'Tooltip — Bottom', id: 'malix-tooltip--bottom' },
  { name: 'Pill', id: 'malix-pill--default' },
  { name: 'Sidebar Item', id: 'malix-sidebaritem--default' },
  { name: 'Header', id: 'malix-header--default' },
  { name: 'StatCard', id: 'malix-statcard--default' },
  { name: 'Validation Alert', id: 'malix-validationalert--error' },
  { name: 'Empty State', id: 'malix-emptystate--default' },
] as const;

for (const story of CRITICAL_STORIES) {
  test(`visual regression: ${story.name}`, async ({ page }) => {
    await page.goto(storyUrl(story.id));

    // Wait for Storybook to finish rendering
    await page.waitForSelector('#storybook-root', { state: 'attached' });
    // Small delay for CSS transitions / font loading
    await page.waitForTimeout(500);

    // For tooltip stories, hover to trigger the tooltip
    if (story.id.includes('tooltip')) {
      const button = page.locator('.malix-button').first();
      if (await button.isVisible()) {
        await button.hover();
        await page.waitForTimeout(300);
      }
    }

    await expect(page).toHaveScreenshot(`${story.id}.png`, {
      fullPage: true,
    });
  });
}
