import { test, expect } from '@playwright/test';

test('Pos_UI_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = 'ohu narthanaya idhiripath kalaa';

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.type(input, { delay: 80 });

  const output = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(output).toContainText('ඔහු නර්තනය ඉදිරිපත් කලා');
});

test('Pos_UI_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
  await inputArea.fill('mama yanawa');
  await inputArea.clear();

  const output = page.locator('div.w-full.h-80.p-3.bg-slate-50');
  await expect(output).toBeVisible();
});
