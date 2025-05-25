'use server';

import { mapDocumentToNovelty, NoveltyEntity } from "@/app/model/entities/novelty/Novelty";
import { noveltyIdName } from "@/app/config/JSONnames";
import { Logger } from "@/app/config/Logger";
import { parseNoveltyForm, parseStartAndEndIndex, parseString } from "@/lib/parser/parser";
import { sql } from "@vercel/postgres";
import { METHOD_ACTION_CREATE_NOVELTY, METHOD_ACTION_DELETE_NOVELTY, METHOD_ACTION_UPDATE_NOVELTY, METHOD_CREATE_NOVELTY, METHOD_DELETE_NOVELTY, METHOD_GET_NOVELTIES, METHOD_GET_NOVELTY, METHOD_GET_VALID_NOVELTIES, METHOD_UPDATE_NOVELTY, NOVELTY_CONTEXT } from "../dbConfig";

/**
 * Fetches a paginated list of novelties.
 * @param {string | null} start - The start index.
 * @param {string | null} end - The end index.
 * @returns {Promise<NoveltyEntity[]>} - List of novelty entities.
 * @throws {Error} - Throws an error if there is an exception during the operation.
 */
export async function getNovelties(start: string | null, end: string | null): Promise<NoveltyEntity[]> {
    Logger.startFunction(NOVELTY_CONTEXT, METHOD_GET_NOVELTIES)

    try {
        const client = await sql.connect()
        const { startIndex, endIndex } = parseStartAndEndIndex(start, end)
        const limit = endIndex - startIndex + 1;
        const offset = startIndex;

        const result = await client.query(
            `SELECT * FROM novelty LIMIT $1 OFFSET $2`,
            [limit, offset]
        );

        const novelties: NoveltyEntity[] = result.rows.map(mapDocumentToNovelty);
        Logger.endFunction(NOVELTY_CONTEXT, METHOD_GET_NOVELTIES, novelties)
        return novelties
    } catch (error) {
        Logger.errorFunction(NOVELTY_CONTEXT, METHOD_GET_NOVELTIES, error)
        throw new Error(`[${METHOD_GET_NOVELTIES}] ${error}`)
    }
}

/**
 * Fetches a paginated list of active novelties.
 * @param {string | null} start - The start index.
 * @param {string | null} end - The end index.
 * @returns {Promise<NoveltyEntity[]>} - List of active novelty entities.
 * @throws {Error} - Throws an error if there is an exception during the operation.
 */
export async function getActiveNovelties(start: string | null, end: string | null): Promise<NoveltyEntity[]> {
    Logger.startFunction(NOVELTY_CONTEXT, METHOD_GET_NOVELTIES)

    try {
        const client = await sql.connect()
        const { startIndex, endIndex } = parseStartAndEndIndex(start, end)
        const limit = endIndex - startIndex + 1;
        const offset = startIndex;

        const result = await client.query(
            `SELECT * FROM novelty WHERE end_date > NOW() AND code IS NOT NULL LIMIT $1 OFFSET $2`,
            [limit, offset], 
        );

        const novelties: NoveltyEntity[] = result.rows.map(mapDocumentToNovelty);
        Logger.endFunction(NOVELTY_CONTEXT, METHOD_GET_NOVELTIES, novelties)
        return novelties
    } catch (error) {
        Logger.errorFunction(NOVELTY_CONTEXT, METHOD_GET_NOVELTIES, error)
        throw new Error(`[${METHOD_GET_NOVELTIES}] ${error}`)
    }
}

/**
 * Retrieves valid novelties where the `end_date` is greater than the current date.
 *
 * This function queries the `novelty` table and filters out expired novelties
 * by comparing `end_date` with the current timestamp (`NOW()`).
 *
 * @returns {Promise<NoveltyEntity[]>} A list of valid novelties.
 * @throws {Error} - Throws an error if there is an exception during the operation.
 */
export async function getValidNovelties(context: string): Promise<NoveltyEntity[]> {
    Logger.startFunction(NOVELTY_CONTEXT, METHOD_GET_VALID_NOVELTIES);

    try {
        const client = await sql.connect();

        const result = await client.query(
            `SELECT * FROM novelty WHERE end_date > NOW() AND context = $1 AND type != 'INFO'`, [context]
        );

        const novelties: NoveltyEntity[] = result.rows.map(mapDocumentToNovelty);
        Logger.endFunction(NOVELTY_CONTEXT, METHOD_GET_VALID_NOVELTIES, novelties);
        return novelties;
    } catch (error) {
        Logger.errorFunction(NOVELTY_CONTEXT, METHOD_GET_VALID_NOVELTIES, error)
        throw new Error(`[${METHOD_GET_VALID_NOVELTIES}] ${error}`)
    }
}


/**
 * Retrieves a single novelty by ID.
 * @param {string | null} id - The ID of the novelty.
 * @returns {Promise<NoveltyEntity>} - The retrieved novelty entity.
 * @throws {Error} - Throws an error if there is an exception during the operation.
 */
export async function getNovelty(id: string | null): Promise<NoveltyEntity> {
    Logger.startFunction(NOVELTY_CONTEXT, METHOD_GET_NOVELTY)

    try {

        const client = await sql.connect()

        const result = await client.query(
            `SELECT * FROM novelty WHERE id = $1`,
            [id]
        )

        const novelty = mapDocumentToNovelty(result.rows[0])
        Logger.endFunction(NOVELTY_CONTEXT, METHOD_GET_NOVELTY, novelty)
        return novelty
    } catch (error) {
        Logger.errorFunction(NOVELTY_CONTEXT, METHOD_GET_NOVELTY, error)
        throw new Error(`[${METHOD_GET_NOVELTY}] ${error}`)
    }
}

/**
 * Handles the creation of a new novelty from form data.
 * @param {FormData} formData - The form data containing novelty details.
 * @returns {Promise<number>} - Status code (0 for success, 1 for failure).
 * @throws {Error} - If the novelty creation process fails.
 */
export async function actionCreateNovelty(formData: FormData): Promise<number> {
    Logger.startFunction(NOVELTY_CONTEXT, METHOD_ACTION_CREATE_NOVELTY)

    try {
        const newNovelty = parseNoveltyForm(formData)
        let status: number = 1

        await createNovelty(newNovelty)
            .then(() => {
                Logger.endFunction(NOVELTY_CONTEXT, METHOD_ACTION_CREATE_NOVELTY, "void")
                status = 0
            })
            .catch(error => {
                Logger.errorFunction(NOVELTY_CONTEXT, METHOD_ACTION_CREATE_NOVELTY, error)
                status = 1
            });

        return status
    } catch (error) {
        Logger.errorFunction(NOVELTY_CONTEXT, METHOD_ACTION_CREATE_NOVELTY, error)
        throw new Error(`[${METHOD_ACTION_CREATE_NOVELTY}] ${error}`)
    }
}

/**
 * Creates a new novelty entry in the database.
 * @param {any} noveltyData - The data for the new novelty.
 * @throws {Error} - Throws an error if there is an exception during the operation.
 */
async function createNovelty(noveltyData: any): Promise<void> {
    Logger.startFunction(NOVELTY_CONTEXT, METHOD_CREATE_NOVELTY)
    const { title, description, promotionalImage, type, context, endDate } = noveltyData;

    try {
        const client = await sql.connect();

        await client.query(
            'INSERT INTO novelty (title, description, promotional_image, type, context, end_date) VALUES ($1, $2, $3, $4, $5, $6)',
            [title, description, promotionalImage, type, context, endDate]
        );
        Logger.endFunction(NOVELTY_CONTEXT, METHOD_CREATE_NOVELTY, noveltyData)
    } catch (error) {
        Logger.errorFunction(NOVELTY_CONTEXT, METHOD_CREATE_NOVELTY, error)
        throw new Error(`[${METHOD_CREATE_NOVELTY}] ${error}`)
    }
}

/**
 * Handles updating a novelty based on form data.
 * @param {FormData} formData - The form data containing updated novelty details.
 * @returns {Promise<number>} - Status code (0 for success, 1 for failure).
 * @throws {Error} - Throws an error if there is an exception during the operation.
 */
export async function actionUpdateNovelty(formData: FormData): Promise<number> {
    Logger.startFunction(NOVELTY_CONTEXT, METHOD_ACTION_UPDATE_NOVELTY)

    try {
        const id = parseString(formData.get(noveltyIdName)?.toString(), "NOVELTY_ID")
        const newNovelty = parseNoveltyForm(formData)
        const updatedNovelty = { id: id, ...newNovelty }
        let status: number = 1

        await updateNovelty(updatedNovelty)
            .then(() => {
                Logger.endFunction(NOVELTY_CONTEXT, METHOD_ACTION_UPDATE_NOVELTY, "void")
                status = 0
            })
            .catch(error => {
                Logger.errorFunction(NOVELTY_CONTEXT, METHOD_ACTION_UPDATE_NOVELTY, error)
                status = 1
            });

        return status
    } catch (error) {
        Logger.errorFunction(NOVELTY_CONTEXT, METHOD_ACTION_UPDATE_NOVELTY, error)
        throw new Error(`[${METHOD_ACTION_UPDATE_NOVELTY}] ${error}`)
    }
}

/**
 * Updates an existing novelty in the database.
 * @param {any} noveltyData - The updated novelty data.
 * @throws {Error} - Throws an error if there is an exception during the operation.
 */
async function updateNovelty(noveltyData: any): Promise<void> {
    Logger.startFunction(NOVELTY_CONTEXT, METHOD_UPDATE_NOVELTY);
    const { id, title, description, promotionalImage, type, context, endDate } = noveltyData;

    try {
        const client = await sql.connect();

        await client.query(
            'UPDATE novelty SET title = $2, description = $3, promotional_image = $4, type = $5, context = $6, end_date = $7 WHERE id = $1',
            [id, title, description, promotionalImage, type, context, endDate]
        );

        Logger.endFunction(NOVELTY_CONTEXT, METHOD_UPDATE_NOVELTY, noveltyData);
    } catch (error) {
        Logger.errorFunction(NOVELTY_CONTEXT, METHOD_UPDATE_NOVELTY, error)
        throw new Error(`[${METHOD_UPDATE_NOVELTY}] ${error}`)
    }
}

/**
 * Handles deletion of a novelty.
 * @param {string | undefined | null} noveltyId - The ID of the novelty to be deleted.
 * @returns {Promise<number>} - Status code (0 for success, 1 for failure).
 * @throws {Error} - Throws an error if there is an exception during the operation.
 */
export async function actionDeleteNovelty(noveltyId: string | undefined | null): Promise<number> {
    Logger.startFunction(NOVELTY_CONTEXT, METHOD_ACTION_DELETE_NOVELTY)

    try {
        const id = parseString(noveltyId, "BARGAIN_CODE");
        let status: number = 1;

        await deleteNovelty(id)
            .then(() => {
                Logger.endFunction(NOVELTY_CONTEXT, METHOD_ACTION_DELETE_NOVELTY, "void")
                status = 0
            })
            .catch((error) => {
                Logger.errorFunction(NOVELTY_CONTEXT, METHOD_ACTION_DELETE_NOVELTY, error)
                status = 1
            });

        return status
    } catch (error) {
        Logger.errorFunction(NOVELTY_CONTEXT, METHOD_ACTION_DELETE_NOVELTY, error)
        throw new Error(`[${METHOD_ACTION_DELETE_NOVELTY}] ${error}`)
    }
}

/**
 * Deletes a novelty from the database.
 * @param {any} noveltyId - The ID of the novelty to delete.
 * @throws {Error} - Throws an error if there is an exception during the operation.
 */
async function deleteNovelty(noveltyId: any): Promise<void> {
    Logger.startFunction(NOVELTY_CONTEXT, METHOD_DELETE_NOVELTY)

    try {
        const client = await sql.connect();

        const result = await client.query(
            'DELETE FROM novelty WHERE id = $1',
            [noveltyId]
        );

        if (result.rowCount === 0) {
            throw new Error(`Failed to remove novelty with id: ${noveltyId} from the novelty. Novelty not found.`);
        }

        Logger.endFunction(
            NOVELTY_CONTEXT,
            METHOD_DELETE_NOVELTY,
            `Novelty with id: ${noveltyId} has been removed from the novelty.`
        )
    } catch (error) {
        Logger.errorFunction(NOVELTY_CONTEXT, METHOD_DELETE_NOVELTY, error)
        throw new Error(`[${METHOD_DELETE_NOVELTY}] ${error}`)
    }
}
