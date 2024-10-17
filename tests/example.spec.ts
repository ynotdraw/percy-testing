import { test, expect } from '@playwright/test';

test('renders a primary button', async ({ page }) => {
  await page.goto('/iframe.html?args=&id=button--primary&viewMode=story');

  await page.waitForSelector('ds-button');

  // await expect(page).toHaveScreenshot(['button.test.png']);
});

test('renders a secondary button', async ({ page }) => {
  await page.goto('/iframe.html?args=&id=button--secondary&viewMode=story');

  await page.waitForSelector('ds-button');

  // await expect(page).toHaveScreenshot(['secondary.test.png']);
});

test('renders a primary small button', async ({ page }) => {
  await page.goto('/iframe.html?args=&id=button--primary-small&viewMode=story');

  await page.waitForSelector('ds-button');

  // await expect(page).toHaveScreenshot(['primary-small.test.png']);
});

test('renders a secondary small button', async ({ page }) => {
  await page.goto(
    '/iframe.html?args=&id=button--secondary-small&viewMode=story',
  );

  await page.waitForSelector('ds-button');

  // await expect(page).toHaveScreenshot(['secondary-small.test.png']);
});
