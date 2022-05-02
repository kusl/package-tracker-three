import { test, expect } from '@playwright/test';

const myAddress: string = 'https://coloradoquiz.web.app';

test.beforeEach(async ({ page }) => {
  await page.goto(myAddress);
});

test.describe('Load page', () => {
  test('should load the page', async ({ page }) => {
    const address: string = page.mainFrame().url();
    console.info({ url: address });
    expect(address.trim().toLocaleLowerCase() === myAddress.trim().toLocaleLowerCase());
  });
});
