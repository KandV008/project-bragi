"use server";

import { Logger } from "@/app/config/Logger";
import { cookies } from "next/headers";

const COOKIES_CONTEXT = "COOKIE"
const COOKIE_STATUS_KEY = "accept_all_cookies";
const TERMS_AND_CONDITIONS_KEY = "terms_and_conditions";

/**
 * Checks whether the cookies status has been set by the user.
 * 
 * Retrieves the cookies from the request context and checks for the presence
 * of a specific cookie key (`COOKIE_STATUS_KEY`). If the cookie exists,
 * it means the user has already configured their cookie preferences.
 *
 * @returns {Promise<boolean>} `true` if the cookie status is already set, otherwise `false`.
 */
export async function checkCookiesStatus(): Promise<boolean> {
    Logger.startFunction(COOKIES_CONTEXT, "checkCookiesStatus");

    const cookieStore = await cookies();
    const showPopUp = cookieStore.has(COOKIE_STATUS_KEY);

    Logger.endFunction(COOKIES_CONTEXT, "checkCookiesStatus", showPopUp);
    return showPopUp
}

/**
 * Updates the user's cookies consent status by setting a specific cookie.
 * 
 * This function stores the user's choice (`newStatus`) in the cookie store
 * under the key `COOKIE_STATUS_KEY`, indicating their preference regarding cookie usage.
 *
 * @param {string} newStatus - The user's cookie consent status ("true" or "false").
 * @returns {Promise<void>} A promise that resolves when the cookie has been set.
 */
export async function updateCookiesStatus(newStatus: string) {
    Logger.startFunction(COOKIES_CONTEXT, "updateCookiesStatus");

    const cookieStore = await cookies();
    await cookieStore.set(COOKIE_STATUS_KEY, newStatus);

    Logger.endFunction(COOKIES_CONTEXT, "updateCookiesStatus", "");
}

/**
 * Checks whether the terms and conditons have been accepted by the user.
 * 
 * Retrieves the cookies from the request context and checks for the presence
 * of a specific cookie key (`TERMS_AND_CONDITIONS_KEY`). If the cookie exists,
 * it means the user has already accepted the terms and conditions.
 *
 * @returns {Promise<boolean>} `true` if the terms and conditions are already accepted, otherwise `false`.
 */
export async function checkTermsAndConditions(): Promise<boolean> {
    Logger.startFunction(COOKIES_CONTEXT, "checkTermsAndConditions");

    const cookieStore = await cookies();
    const showPopUp = cookieStore.has(TERMS_AND_CONDITIONS_KEY);

    Logger.endFunction(COOKIES_CONTEXT, "checkTermsAndConditions", showPopUp);
    return showPopUp
}

/**
 * Marks that the user has accepted the terms and conditions of the applications.
 *  *
 * @returns {Promise<void>} A promise that resolves when the cookie has been set.
 */
export async function acceptTermsAndConditions() {
    Logger.startFunction(COOKIES_CONTEXT, "acceptTermsAndConditions");

    const cookieStore = await cookies();
    await cookieStore.set(TERMS_AND_CONDITIONS_KEY, "accepted");

    Logger.endFunction(COOKIES_CONTEXT, "acceptTermsAndConditions", "");
}