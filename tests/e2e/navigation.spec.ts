import { clerk } from '@clerk/testing/playwright'
import { test, expect, BrowserContext } from '@playwright/test';
import { SYSTEM_TEST_TAG } from '../testConstants';
require("dotenv").config({ path: ".env.local" });

async function handleCookies(context: BrowserContext) {
    await context.clearCookies();
    await context.addCookies([
        {
            name: "accept_all_cookies",
            value: "true",
            url: "https://audifonosxmenos.com"
        },
        {
            name: "terms_and_conditions",
            value: "accepted",
            url: "https://audifonosxmenos.com"
        }
    ]);
}

test(`[${SYSTEM_TEST_TAG}] Unregistered User navigation to Product`, async ({ page, context }) => {
    handleCookies(context);
    await page.goto('https://audifonosxmenos.com');

    await page.getByRole('button', { name: 'Audífonos' }).first().click();
    await page.waitForURL('**/search?category=EARPHONE');

    await page.getByRole('link', { name: /^(Ver más|Ver Producto)$/ }).first().click();
    await page.waitForURL('**/search/about/**');

    await expect(page.getByRole('heading', { name: 'Descripción' })).toBeVisible();
})

test(`[${SYSTEM_TEST_TAG}] Unregistered User navigation to Novelty`, async ({ page, context }) => {
    handleCookies(context);
    await page.goto('https://audifonosxmenos.com');

    await page.getByRole('button', { name: 'Servicios' }).first().click();
    await page.waitForURL('**/services');

    await page.getByText('Novedades').first().click();
    await page.waitForURL('**/services/novelties');

    await expect(page.getByRole('heading').first()).toBeVisible();
})

test(`[${SYSTEM_TEST_TAG}] Unregistered User navigation to Bargain`, async ({ page, context }) => {
    handleCookies(context);
    await page.goto('https://audifonosxmenos.com');

    await page.getByRole('button', { name: 'Servicios' }).first().click();
    await page.waitForURL('**/services');

    await page.getByText('Ofertas').first().click();
    await page.waitForURL('**/services/bargains');

    await expect(page.getByRole('heading').first()).toBeVisible();
})

test(`[${SYSTEM_TEST_TAG}] Unregistered User navigation to All Services`, async ({ page, context }) => {
    const goBack = async () => {
        await page.goBack();
        await page.waitForURL('**/services');
    }

    handleCookies(context);
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


test(`[${SYSTEM_TEST_TAG}] Registered User navigation`, async ({ page, context }) => {
    handleCookies(context);
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

test(`[${SYSTEM_TEST_TAG}] Admin User navigation to Admin Dashboard`, async ({ page, context }) => {
    await handleCookies(context);
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
    await page.getByText('Admin').first().click();
    await page.waitForURL('**/admin');

    await expect(page.getByRole('heading', { name: "¿Qué acción desea realizar?" })).toBeVisible();
})

test(`[${SYSTEM_TEST_TAG}] Admin User navigation to Admin Product`, async ({ page, context }) => {
    await handleCookies(context);
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

    await page.getByText('Admin').first().click();
    await page.waitForURL('**/admin');
    await expect(page.getByRole('heading', { name: "¿Qué acción desea realizar?" })).toBeVisible();

    await page.getByText('Entidad Producto').click();
    await page.waitForURL('**/admin/products');

    await page.getByRole('link', { name: /^(Ver más|Ver Producto)$/ }).first().click();
    await page.waitForURL('**/admin/products/**');

    await expect(page.getByRole('heading', { name: 'Detalles del Producto' })).toBeVisible();
})

test(`[${SYSTEM_TEST_TAG}] Admin User navigation to Admin Novelty`, async ({ page, context }) => {
    await handleCookies(context);
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

    await page.getByText('Admin').first().click();
    await page.waitForURL('**/admin');
    await expect(page.getByRole('heading', { name: "¿Qué acción desea realizar?" })).toBeVisible();

    await page.getByText('Entidad Novedad').click();
    await page.waitForURL('**/admin/novelties');

    await page.getByRole('link', { name: /^(Ver más|Ver Novedad)$/ }).first().click();
    await page.waitForURL('**/admin/novelties/**');

    await expect(page.getByRole('heading', { name: 'Detalles de la Novedad' })).toBeVisible();
})

test(`[${SYSTEM_TEST_TAG}] Admin User navigation to Admin Bargain`, async ({ page, context }) => {
    await handleCookies(context);
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

    await page.getByText('Admin').first().click();
    await page.waitForURL('**/admin');
    await expect(page.getByRole('heading', { name: "¿Qué acción desea realizar?" })).toBeVisible();

    await page.getByText('Entidad Oferta').click();
    await page.waitForURL('**/admin/bargains');

    await page.getByRole('link', { name: /^(Ver más|Ver Oferta)$/ }).first().click();
    await page.waitForURL('**/admin/bargains/**');

    await expect(page.getByRole('heading', { name: 'Detalles de la Oferta' })).toBeVisible();
})