import { test, expect } from '@playwright/test';

test('go to home and verify first data', async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await expect(page.getByText('John Doe')).toBeVisible();
});

test('go to home and add projet', async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.locator("#add").click()
  await page.locator("#project").click();
  await page.locator("#project").type("test ajout travaux");
  await page.locator("#user").click()
  await page.locator("#user").type("Bertrand JAUNET");
  await page.locator("#contract").click()
  await page.locator("#contract").type("1234");
  await page.locator("div.cdk-overlay-container button.mdc-button--unelevated > span.mdc-button__label").click();
  await expect(page.getByText('Bertrand JAUNET')).toBeVisible();
});

test('go to home and edit one projet', async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.locator("#option").click()
  await page.locator("#edit").click();
  await page.locator("#project").click();
  await page.locator("#project").clear();
  await page.locator("#project").type("test edit travaux");
  await page.locator("div.cdk-overlay-container button.mdc-button--unelevated > span.mdc-button__label").click();
  await expect(page.getByText('test edit travaux')).toBeVisible();
});


test('go to home and delete one', async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.locator("#option").click()
  await page.locator("#delete").click();
  await expect(page.getByText('Aucune demande en cours')).toBeVisible();
});
