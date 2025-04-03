'use server';

import { BargainEntity, mapDocumentToBargain } from "@/app/model/entities/bargain/Bargain";
import { bargainIdName } from "@/app/config/JSONnames";
import { Logger } from "@/app/config/Logger";
import { parseBargainForm, parseStartAndEndIndex, parseString } from "@/lib/parser/parser";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";
import { BARGAIN_CONTEXT, METHOD_ACTION_CREATE_BARGAIN, METHOD_ACTION_DELETE_BARGAIN, METHOD_ACTION_UPDATE_BARGAIN, METHOD_CREATE_BARGAIN, METHOD_DELETE_BARGAIN, METHOD_GET_BARGAIN, METHOD_GET_BARGAINS, METHOD_UPDATE_BARGAIN } from "../dbConfig";

/**
 * Fetches a list of bargains from the database.
 *
 * @param {string | null} start - The start index for pagination.
 * @param {string | null} end - The end index for pagination.
 * @returns {Promise<BargainEntity[]>} A promise resolving to an array of bargain entities.
 */
export async function getBargains(start: string | null, end: string | null): Promise<BargainEntity[]> {
    Logger.startFunction(BARGAIN_CONTEXT, METHOD_GET_BARGAINS);

    try {
        const client = await sql.connect();
        const { startIndex, endIndex } = parseStartAndEndIndex(start, end);
        const limit = endIndex - startIndex + 1;
        const offset = startIndex;

        const result = await client.query(
            `SELECT * FROM bargain LIMIT $1 OFFSET $2`,
            [limit, offset]
        );

        const bargains: BargainEntity[] = result.rows.map(mapDocumentToBargain);
        Logger.endFunction(BARGAIN_CONTEXT, METHOD_GET_BARGAINS, bargains);
        return bargains;
    } catch (error) {
        Logger.errorFunction(BARGAIN_CONTEXT, METHOD_GET_BARGAINS, error)
        throw new Error(`[${METHOD_GET_BARGAINS}] ${error}`)
    }
}

/**
 * Fetches a single bargain by its code.
 *
 * @param {string | null | undefined} id - The unique code of the bargain.
 * @returns {Promise<BargainEntity>} A promise resolving to the found bargain entity.
 */
export async function getBargain(id: string | null | undefined): Promise<BargainEntity> {
    Logger.startFunction(BARGAIN_CONTEXT, METHOD_GET_BARGAIN);

    try {
        const client = await sql.connect();
        const result = await client.query(
            `SELECT * FROM bargain WHERE code = $1`,
            [id]
        );

        const bargain = mapDocumentToBargain(result.rows[0]);
        Logger.endFunction(BARGAIN_CONTEXT, METHOD_GET_BARGAIN, bargain);
        return bargain;
    } catch (error) {
        Logger.errorFunction(BARGAIN_CONTEXT, METHOD_GET_BARGAIN, error)
        throw new Error(`[${METHOD_GET_BARGAIN}] ${error}`)
    }
}

/**
 * Handles the creation of a new bargain via a form submission.
 *
 * @param {FormData} formData - The form data containing the bargain details.
 */
export async function actionCreateBargain(formData: FormData) {
    Logger.startFunction(BARGAIN_CONTEXT, METHOD_ACTION_CREATE_BARGAIN);

    try {
        const newBargain = parseBargainForm(formData);
        let status: number = 1

        await createBargain(newBargain)
            .then(() => {
                Logger.endFunction(BARGAIN_CONTEXT, METHOD_ACTION_CREATE_BARGAIN, "void")
                status = 0
            })
            .catch(error => {
                Logger.errorFunction(BARGAIN_CONTEXT, METHOD_ACTION_CREATE_BARGAIN, error)
                status = 1
            });

        return status
    } catch (error) {
        Logger.errorFunction(BARGAIN_CONTEXT, METHOD_ACTION_CREATE_BARGAIN, error)
        throw new Error(`[${METHOD_ACTION_CREATE_BARGAIN}] ${error}`)
    }
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
async function createBargain(bargainData: { code: string; title: string; description: string }): Promise<void> {
    Logger.startFunction(BARGAIN_CONTEXT, METHOD_CREATE_BARGAIN);
    const { code, title, description } = bargainData;

    try {
        const client = await sql.connect();
        await client.query(
            'INSERT INTO bargain (code, title, description) VALUES ($1, $2, $3)',
            [code, title, description]
        );
        Logger.endFunction(BARGAIN_CONTEXT, METHOD_CREATE_BARGAIN, bargainData);
    } catch (error) {
        Logger.errorFunction(BARGAIN_CONTEXT, METHOD_CREATE_BARGAIN, error);
        throw new Error(`[${METHOD_CREATE_BARGAIN}] ${error}`);
    }
}

/**
 * Handles the update of a bargain via a form submission.
 *
 * @param {FormData} formData - The form data containing updated bargain details.
 */
export async function actionUpdateBargain(formData: FormData) {
    Logger.startFunction(BARGAIN_CONTEXT, METHOD_ACTION_UPDATE_BARGAIN);

    try {
        const id = parseString(formData.get(bargainIdName)?.toString(), "BARGAIN_CODE");
        const newBargain = parseBargainForm(formData);
        const updatedBargain = { id, ...newBargain };
        let status: number = 1

        await updateBargain(updatedBargain)
            .then(() => {
                Logger.endFunction(BARGAIN_CONTEXT, METHOD_ACTION_UPDATE_BARGAIN, "void")
                status = 0
            })
            .catch(error => {
                Logger.errorFunction(BARGAIN_CONTEXT, METHOD_ACTION_UPDATE_BARGAIN, error)
                status = 1
            });

        return status
    } catch (error) {
        Logger.errorFunction(BARGAIN_CONTEXT, METHOD_ACTION_UPDATE_BARGAIN, error)
        throw new Error(`[${METHOD_ACTION_UPDATE_BARGAIN}] ${error}`)
    }
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
async function updateBargain(bargainData: { id: string; code: string; title: string; description: string }): Promise<void> {
    Logger.startFunction(BARGAIN_CONTEXT, METHOD_UPDATE_BARGAIN);
    const { id, code, title, description } = bargainData;

    try {
        const client = await sql.connect();
        await client.query(
            'UPDATE bargain SET code = $1, title = $2, description = $3 WHERE id = $4',
            [code, title, description, id]
        );
        Logger.endFunction(BARGAIN_CONTEXT, METHOD_UPDATE_BARGAIN, bargainData);
    } catch (error) {
        Logger.errorFunction(BARGAIN_CONTEXT, METHOD_UPDATE_BARGAIN, error);
        throw new Error(`[${METHOD_UPDATE_BARGAIN}] ${error}`);
    }
}

/**
 * Handles the deletion of a bargain.
 *
 * @param {string | undefined | null} bargainId - The code of the bargain to delete.
 */
export async function actionDeleteBargain(bargainId: string | undefined | null) {
    Logger.startFunction(BARGAIN_CONTEXT, METHOD_ACTION_DELETE_BARGAIN);

    try{
        const id = parseString(bargainId, "BARGAIN_ID");
        let status: number = 1;
    
        await deleteBargain(id)
            .then(() => {
                Logger.endFunction(BARGAIN_CONTEXT, METHOD_ACTION_DELETE_BARGAIN, "void")
                status = 0
            })
            .catch((error) => {
                Logger.errorFunction(BARGAIN_CONTEXT, METHOD_ACTION_DELETE_BARGAIN, error)
                status = 1
            });
    
        return status
    } catch (error){
        Logger.errorFunction(BARGAIN_CONTEXT, METHOD_ACTION_DELETE_BARGAIN, error)
        throw new Error(`[${METHOD_ACTION_DELETE_BARGAIN}] ${error}`)
    }
}

/**
 * Deletes a bargain from the database.
 *
 * @param {string} id - The ID of the bargain to delete.
 * @returns {Promise<void>} A promise that resolves when the bargain is deleted.
 */
async function deleteBargain(id: string): Promise<void> {
    Logger.startFunction(BARGAIN_CONTEXT, METHOD_DELETE_BARGAIN);

    try {
        const client = await sql.connect();
        const result = await client.query(
            'DELETE FROM bargain WHERE id = $1',
            [id]
        );

        if (result.rowCount === 1) {
            Logger.endFunction(
                BARGAIN_CONTEXT,
                METHOD_DELETE_BARGAIN,
                `Bargain with ID: ${id} has been removed from the database.`
            );
        } else {
            Logger.errorFunction(
                BARGAIN_CONTEXT,
                METHOD_DELETE_BARGAIN,
                `Failed to remove bargain with ID: ${id}. Bargain not found.`
            );
            throw new Error(`[${METHOD_DELETE_BARGAIN}] Bargain not found.`);        }
    } catch (error) {
        Logger.errorFunction(BARGAIN_CONTEXT, METHOD_DELETE_BARGAIN, error);
        throw new Error(`[${METHOD_DELETE_BARGAIN}] ${error}`);
    }
}
