import { test, expect } from '@playwright/test';

test('Neg_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = 'man kadeta yanavaa';

  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  const output = page.locator('div.w-full.h-80.p-3.bg-slate-50');

  await expect(output).not.toHaveText('මන් කඩෙට යනවා');
});

test('Neg_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = 'ohu kema knn puluwn d';

  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.w-full.h-80.p-3.bg-slate-50')).toBeVisible();
});

test('Neg_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = 'api pansal yanawaa$$$$';

  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.w-full.h-80.p-3.bg-slate-50')).toContainText('$$$$');
});

test('Neg_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = 'mama    gedhara    yanawaa';

  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.w-full.h-80.p-3.bg-slate-50')).toBeVisible();
});

test('Neg_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = 'api iiyee beach beach beach giyaa';

  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.w-full.h-80.p-3.bg-slate-50')).not.toHaveText('අපි ඊයේ beach beach beach ගියා');
});
