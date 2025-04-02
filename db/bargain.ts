'use server';

import { BargainEntity, mapDocumentToBargain } from "@/app/model/entities/bargain/Bargain";
import { bargainIdName } from "@/app/config/JSONnames";
import { Logger } from "@/app/model/Logger";
import { parseBargainForm, parseStartAndEndIndex, parseString } from "@/lib/parser/parser";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

const CONTEXT = "BARGAIN";

/**
 * Fetches a list of bargains from the database.
 *
 * @param {string | null} start - The start index for pagination.
 * @param {string | null} end - The end index for pagination.
 * @returns {Promise<BargainEntity[]>} A promise resolving to an array of bargain entities.
 */
export async function getBargains(start: string | null, end: string | null): Promise<BargainEntity[]> {
    Logger.startFunction(CONTEXT, "getBargains");
    const client = await sql.connect();
    const { startIndex, endIndex } = parseStartAndEndIndex(start, end);
    const limit = endIndex - startIndex + 1;
    const offset = startIndex;

    const result = await client.query(
        `SELECT * FROM bargain LIMIT $1 OFFSET $2`,
        [limit, offset]
    );

    const bargains: BargainEntity[] = result.rows.map(mapDocumentToBargain);
    Logger.endFunction(CONTEXT, "getBargains", bargains);
    return bargains;
}

/**
 * Fetches a single bargain by its code.
 *
 * @param {string | null | undefined} id - The unique code of the bargain.
 * @returns {Promise<BargainEntity>} A promise resolving to the found bargain entity.
 */
export async function getBargain(id: string | null | undefined): Promise<BargainEntity> {
    Logger.startFunction(CONTEXT, "getBargain");

    const client = await sql.connect();
    const result = await client.query(
        `SELECT * FROM bargain WHERE code = $1`,
        [id]
    );

    const bargain = mapDocumentToBargain(result.rows[0]);
    Logger.endFunction(CONTEXT, "getBargain", bargain);
    return bargain;
}

/**
 * Handles the creation of a new bargain via a form submission.
 *
 * @param {FormData} formData - The form data containing the bargain details.
 */
export async function actionCreateBargain(formData: FormData) {
    Logger.startFunction(CONTEXT, "actionCreateBargain");
    const newBargain = parseBargainForm(formData);

    createBargain(newBargain)
        .then(() => Logger.endFunction(CONTEXT, "actionCreateBargain", "void"))
        .catch(error => Logger.errorFunction(CONTEXT, "actionCreateBargain", error));

    redirect("/admin/bargains");
}

/**
 * Creates a new bargain in the database.
 *
 * @param {object} bargainData - The data for the new bargain.
 * @param {string} bargainData.code - The code of the bargain.
 * @param {string} bargainData.title - The title of the bargain.
 * @param {string} bargainData.description - The description of the bargain.
 * @returns {Promise<void>} A promise that resolves when the bargain is created.
 */
export async function createBargain(bargainData: { code: string; title: string; description: string }): Promise<void> {
    Logger.startFunction(CONTEXT, "createBargain");
    const { code, title, description } = bargainData;

    try {
        const client = await sql.connect();
        await client.query(
            'INSERT INTO bargain (code, title, description) VALUES ($1, $2, $3)',
            [code, title, description]
        );
        Logger.endFunction(CONTEXT, "createBargain", bargainData);
    } catch (error) {
        Logger.errorFunction(CONTEXT, "createBargain", error);
        throw new Error('Could not create bargain');
    }
}

/**
 * Handles the update of a bargain via a form submission.
 *
 * @param {FormData} formData - The form data containing updated bargain details.
 */
export async function actionUpdateBargain(formData: FormData) {
    Logger.startFunction(CONTEXT, "actionUpdateBargain");
    const id = parseString(formData.get(bargainIdName)?.toString(), "BARGAIN_CODE");
    const newBargain = parseBargainForm(formData);
    const updatedBargain = { id, ...newBargain };

    updateBargain(updatedBargain)
        .then(() => Logger.endFunction(CONTEXT, "actionUpdateBargain", "void"))
        .catch(error => Logger.errorFunction(CONTEXT, "actionUpdateBargain", error));

    redirect(`/admin/bargains/${id}`);
}

/**
 * Updates an existing bargain in the database.
 *
 * @param {object} bargainData - The updated bargain data.
 * @param {string} bargainData.id - The ID of the bargain.
 * @param {string} bargainData.code - The updated code of the bargain.
 * @param {string} bargainData.title - The updated title of the bargain.
 * @param {string} bargainData.description - The updated description of the bargain.
 * @returns {Promise<void>} A promise that resolves when the update is successful.
 */
export async function updateBargain(bargainData: { id: string; code: string; title: string; description: string }): Promise<void> {
    Logger.startFunction(CONTEXT, "updateBargain");
    const { id, code, title, description } = bargainData;

    try {
        const client = await sql.connect();
        await client.query(
            'UPDATE bargain SET code = $1, title = $2, description = $3 WHERE id = $4',
            [code, title, description, id]
        );
        Logger.endFunction(CONTEXT, "updateBargain", bargainData);
    } catch (error) {
        Logger.errorFunction(CONTEXT, "updateBargain", error);
        throw new Error('Could not update bargain');
    }
}

/**
 * Handles the deletion of a bargain.
 *
 * @param {string | undefined | null} bargainCode - The code of the bargain to delete.
 */
export async function actionDeleteBargain(bargainCode: string | undefined | null) {
    Logger.startFunction(CONTEXT, "actionDeleteBargain");
    const code = parseString(bargainCode, "BARGAIN_CODE");

    deleteBargain(code);

    Logger.endFunction(CONTEXT, "actionDeleteBargain", "void");
}

/**
 * Deletes a bargain from the database.
 *
 * @param {string} id - The ID of the bargain to delete.
 * @returns {Promise<void>} A promise that resolves when the bargain is deleted.
 */
export async function deleteBargain(id: string): Promise<void> {
    Logger.startFunction(CONTEXT, "deleteBargain");

    try {
        const client = await sql.connect();
        const result = await client.query(
            'DELETE FROM bargain WHERE id = $1',
            [id]
        );

        if (result.rowCount === 1) {
            Logger.endFunction(
                CONTEXT, 
                "deleteBargain", 
                `Bargain with ID: ${id} has been removed from the database.`
            );
        } else {
            Logger.errorFunction(
                CONTEXT, 
                "deleteBargain", 
                `Failed to remove bargain with ID: ${id}. Bargain not found.`
            );
        }
    } catch (error) {
        Logger.errorFunction(CONTEXT, "deleteBargain", error);
        throw new Error('Could not delete bargain');
    }
}
