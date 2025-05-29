import { test, expect } from '@playwright/test';
import { SYSTEM_TEST_TAG } from '../testConstants';

test(`[${SYSTEM_TEST_TAG}] Unregistered User navigation to Product`, async ({ page }) => {
    await page.goto('https://audifonosxmenos.com');

    await page.getByRole('button', { name: 'Audífonos' }).first().click();
    await page.waitForURL('**/search?category=EARPHONE');

    await page.getByRole('link', { name: /^(Ver más|Ver Producto)$/ }).first().click();
    await page.waitForURL('**/search/about/**');

    await expect(page.getByRole('heading', { name: 'Descripción' })).toBeVisible();
})

test(`[${SYSTEM_TEST_TAG}] Unregistered User navigation to Novelty`, async ({ page }) => {
    await page.goto('https://audifonosxmenos.com');

    await page.getByRole('button', { name: 'Servicios' }).first().click();
    await page.waitForURL('**/services');

    await page.getByText('Novedades').first().click();
    await page.waitForURL('**/services/novelties');

    await expect(page.getByRole('heading').first()).toBeVisible();
})

test(`[${SYSTEM_TEST_TAG}] Unregistered User navigation to Bargain`, async ({ page }) => {
    await page.goto('https://audifonosxmenos.com');

    await page.getByRole('button', { name: 'Servicios' }).first().click();
    await page.waitForURL('**/services');

    await page.getByText('Ofertas').first().click();
    await page.waitForURL('**/services/bargains');

    await expect(page.getByRole('heading').first()).toBeVisible();
})