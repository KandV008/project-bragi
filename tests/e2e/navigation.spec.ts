import { setupClerkTestingToken, clerk } from '@clerk/testing/playwright'
import { test, expect } from '@playwright/test';
import { SYSTEM_TEST_TAG } from '../testConstants';
require("dotenv").config({ path: ".env.local" });

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

test(`[${SYSTEM_TEST_TAG}] Unregistered User navigation to All Services`, async ({ page }) => {
    const goBack = async () => {
        await page.goBack();
        await page.waitForURL('**/services');
    }

    await page.goto('https://audifonosxmenos.com');

    await page.getByRole('button', { name: 'Servicios' }).first().click();
    await page.waitForURL('**/services');

    // Online Appointment
    await page.getByText('Pedir Cita').first().click();
    await page.waitForURL('**/services/appointment');

    await expect(page.getByRole('heading', { name: "Pedir cita vía online" })).toBeVisible();
    await goBack();

    // About Us
    await page.getByText('Sobre Nosotros').first().click();
    await page.waitForURL('**/services/about-us');

    await expect(page.getByRole('heading', { name: "Sobre Nosotros" })).toBeVisible();
    await goBack()

    // Contact
    await page.getByText('Contacto').first().click();
    await page.waitForURL('**/services/contact');

    await expect(page.getByRole('heading', { name: "Contacta con nosotros" })).toBeVisible();

})


test(`[${SYSTEM_TEST_TAG}] Registered User navigation`, async ({ page }) => {
    await page.goto('https://audifonosxmenos.com');

    await clerk.signIn({
        page,
        signInParams: {
            strategy: 'password',
            identifier: process.env.E2E_CLERK_USER_USERNAME!,
            password: process.env.E2E_CLERK_USER_PASSWORD!,
        },
    })

    await page.getByRole('button', { name: 'Cuenta' }).first().click();
    await page.waitForURL('**/profile');

    await expect(page.getByRole('heading', { name: "¿Qué desea hacer con su cuenta?" })).toBeVisible();
    await page.getByText('Favoritos').first().click();
    await page.waitForURL('**/profile/favorites');

    await expect(page.getByText('Favoritos').first()).toBeVisible();
    await page.getByText('Cesta').first().click();
    await page.waitForURL('**/profile/shoppingList');

    await expect(page.getByText('Cesta').first()).toBeVisible();
})