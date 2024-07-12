import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await expect(page).toHaveTitle(/Berry/);
});

test('get started link', async ({ page }) => {
  await page.goto('http://localhost:5173/auth/login');
  await page.getByTestId('button-sign-in').click();
  await page.getByText('Sample Page').click();

  await expect(page.getByText('Sample Page')).toBeVisible();

  await page.getByTestId('get-started-link').click();

  await expect(page.getByRole('heading', { name: 'Sample Dashboard' })).toBeVisible();
});
