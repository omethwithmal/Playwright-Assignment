import { test, expect } from '@playwright/test';

test('Pos_Fun_0001', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = 'mama potha kiyavanavaa';
  const expected = 'මම පොත කියවනවා';

  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.w-full.h-80.p-3.bg-slate-50')).toHaveText(expected);
});

test('Pos_Fun_0002', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = 'mama heta magazine eka miladhi gannavaa';
  const expected = 'මම හෙට magazine එක මිලදි ගන්නවා';

  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.w-full.h-80.p-3.bg-slate-50')).toHaveText(expected);
});

test('Pos_Fun_0003', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = 'oyaa ehee gihin thiyenavadha';
  const expected = 'ඔයා එහේ ගිහින් තියෙනවද';

  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.w-full.h-80.p-3.bg-slate-50')).toHaveText(expected);
});

test('Pos_Fun_0004', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = 'phone eka answer karanna, eth mama busy kiyanna';

  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.w-full.h-80.p-3.bg-slate-50')).toContainText('phone');
});

test('Pos_Fun_0005', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');
  const input = 'oya final exam ekata mahansi wela wada karanawa nama oyata hoda grade ekak ganna puluwan';

  await page.getByPlaceholder('Input Your Singlish Text Here.').fill(input);
  await expect(page.locator('div.w-full.h-80.p-3.bg-slate-50')).toBeVisible();
});
