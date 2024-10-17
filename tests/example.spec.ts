import { test, expect } from '@playwright/test';
import percySnapshot from '@percy/playwright';

test('renders a primary button', async ({ page }) => {
  await page.goto('/iframe.html?args=&id=button--primary&viewMode=story');

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  await percySnapshot(page, 'primary-button');
});

test('renders a secondary button', async ({ page }) => {
  await page.goto('/iframe.html?args=&id=button--secondary&viewMode=story');

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  await percySnapshot(page, 'secondary-button');
});

test('renders a primary small button', async ({ page }) => {
  await page.goto('/iframe.html?args=&id=button--primary-small&viewMode=story');

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  await percySnapshot(page, 'primary-small-button');
});

test('renders a secondary small button', async ({ page }) => {
  await page.goto(
    '/iframe.html?args=&id=button--secondary-small&viewMode=story',
  );

  expect(page).toBeDefined();

  await page.waitForSelector('ds-button');

  await percySnapshot(page, 'secondary-small-button');
});
