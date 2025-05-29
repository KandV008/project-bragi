import { test, expect } from '@playwright/test';
import { SYSTEM_TEST_TAG } from '../testConstants';

test(`[${SYSTEM_TEST_TAG}] Unregistered User navigation`, async ({ page }) => {
    await page.goto('https://audifonosxmenos.com');

    await page.getByRole('button', { name: 'Audífonos' }).first().click();
    await page.waitForURL('**/search?category=EARPHONE');

    await page.getByRole('link', { name: /^(Ver más|Ver Producto)$/ }).first().click();
    await page.waitForURL('**/search/about/**');

    await expect(page.getByRole('heading', { name: 'Descripción' })).toBeVisible();
})