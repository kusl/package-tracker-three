import { test, expect, Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://coloradoquiz.web.app');
});

test.describe('Load page', () => {
  test('should load the page', async ({ page }) => {
    console.info({ url: page.mainFrame().url() });
  });
});
