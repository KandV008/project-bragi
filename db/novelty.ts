'use server';

import { mapDocumentToNovelty, NoveltyEntity } from "@/app/model/entities/Novelty";
import { noveltyIdName } from "@/app/model/JSONnames";
import { Logger } from "@/app/model/Logger";
import { parseNoveltyForm, parseStartAndEndIndex, parseString } from "@/lib/parser";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

const CONTEXT = "NOVELTY"

/**
 * Fetches a paginated list of novelties.
 * @param {string | null} start - The start index.
 * @param {string | null} end - The end index.
 * @returns {Promise<NoveltyEntity[]>} - List of novelty entities.
 */
export async function getNovelties(start: string | null, end: string | null): Promise<NoveltyEntity[]> {
    Logger.startFunction(CONTEXT, "getNovelties")
    const client = await sql.connect()
    const { startIndex, endIndex } = parseStartAndEndIndex(start, end)
    const limit = endIndex - startIndex + 1;
    const offset = startIndex;

    const result = await client.query(
        `SELECT * FROM novelty LIMIT $1 OFFSET $2`,
        [limit, offset]
    );

    const novelties: NoveltyEntity[] = result.rows.map(mapDocumentToNovelty);
    Logger.endFunction(CONTEXT, "getNovelties", novelties)
    return novelties
}

/**
 * Retrieves a single novelty by ID.
 * @param {string | null} id - The ID of the novelty.
 * @returns {Promise<NoveltyEntity>} - The retrieved novelty entity.
 */
export async function getNovelty(id: string | null): Promise<NoveltyEntity> {
    Logger.startFunction(CONTEXT, "getNovelty")

    const client = await sql.connect()

    const result = await client.query(
        `SELECT * FROM novelty WHERE id = $1`,
        [id]
    )

    const novelty = mapDocumentToNovelty(result.rows[0])
    Logger.endFunction(CONTEXT, "getNovelty", novelty)
    return novelty
}

/**
 * Handles the creation of a new novelty from form data.
 * @param {FormData} formData - The form data containing novelty details.
 */
export async function actionCreateNovelty(formData: FormData) {
    Logger.startFunction(CONTEXT, "actionCreateNovelty")
    const newNovelty = parseNoveltyForm(formData)

    createNovelty(newNovelty)
        .then(() => Logger.endFunction(CONTEXT, "actionCreateNovelty", "void"))
        .catch(error => Logger.errorFunction(CONTEXT, "actionCreateNovelty", error)
        );

    redirect("/admin/novelties")
}

/**
 * Creates a new novelty entry in the database.
 * @param {any} bargainData - The data for the new novelty.
 */
export async function createNovelty(bargainData: any): Promise<void> {
    Logger.startFunction(CONTEXT, "createNovelty")
    const { title, description, promotionalImage } = bargainData;

    try {
        const client = await sql.connect();

        await client.query(
            'INSERT INTO novelty (title, description, promotional_image) VALUES ($1, $2, $3)',
            [title, description, promotionalImage]
        );
        Logger.endFunction(CONTEXT, "createNovelty", bargainData)
    } catch (error) {
        Logger.errorFunction(CONTEXT, "createNovelty", error)
        throw new Error('Could not create novelty');
    }
}

/**
 * Handles updating a novelty based on form data.
 * @param {FormData} formData - The form data containing updated novelty details.
 */
export async function actionUpdateNovelty(formData: FormData) {
    Logger.startFunction(CONTEXT, "actionUpdateNovelty")
    const id = parseString(formData.get(noveltyIdName)?.toString(), "NOVELTY_ID")
    const newNovelty = parseNoveltyForm(formData)
    const updatedNovelty = { id: id, ...newNovelty }

    updateNovelty(updatedNovelty)
        .then(() => Logger.endFunction(CONTEXT, "actionUpdateNovelty", "void"))
        .catch(error => Logger.errorFunction(CONTEXT, "actionUpdateNovelty", error));

    redirect(`/admin/novelties/${id}`)
}

/**
 * Updates an existing novelty in the database.
 * @param {any} novelty - The updated novelty data.
 */
export async function updateNovelty(novelty: any): Promise<void> {
    Logger.startFunction(CONTEXT, "updateNovelty");
    const { id, title, description, promotionalImage } = novelty;

    try {
        const client = await sql.connect();

        await client.query(
            'UPDATE novelty SET title = $2, description = $3, promotional_image = $4 WHERE id = $1',
            [id, title, description, promotionalImage]
        );
        
        Logger.endFunction(CONTEXT, "updateNovelty", novelty);
    } catch (error) {
        Logger.errorFunction(CONTEXT, "updateNovelty", error);
        throw new Error('Could not update novelty');
    }
}

/**
 * Handles deletion of a novelty.
 * @param {string | undefined | null} noveltyId - The ID of the novelty to be deleted.
 */
export async function actionDeleteNovelty(noveltyId: string | undefined | null) {
    Logger.startFunction(CONTEXT, "actionDeleteNovelty")
    const id = parseString(noveltyId, "BARGAIN_CODE");

    deleteNovelty(id)

    Logger.endFunction(CONTEXT, "actionDeleteNovelty", "void")
}

/**
 * Deletes a novelty from the database.
 * @param {any} noveltyId - The ID of the novelty to delete.
 */
export async function deleteNovelty(noveltyId: any): Promise<void> {
    Logger.startFunction(CONTEXT, "deleteNovelty")

    try {
        const client = await sql.connect();

        const result = await client.query(
            'DELETE FROM novelty WHERE id = $1',
            [noveltyId]
        );

        if (result.rowCount === 1) {
            Logger.endFunction(
                CONTEXT, 
                "deleteNovelty", 
                `Novelty with id: ${noveltyId} has been removed from the novelty.`
            )
        } else {
            Logger.errorFunction(
                CONTEXT, 
                "deleteNovelty", 
                `Failed to remove novelty with id: ${noveltyId} from the novelty. Novelty not found.`
            )
        }
    } catch (error) {
        Logger.errorFunction(CONTEXT, "deleteNovelty", error)
        throw new Error('Could not delete novelty');
    }
}
