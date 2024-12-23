'use server';

import { BargainEntity, mapDocumentToBargain } from "@/app/model/entities/Bargain";
import { bargainIdName } from "@/app/model/JSONnames";
import { Logger } from "@/app/model/Logger";
import { parseBargainForm, parseStartAndEndIndex, parseString } from "@/lib/parser";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

const CONTEXT = "BARGAIN"

export async function getBargains(start: string | null, end: string | null): Promise<BargainEntity[]> {
    Logger.startFunction(CONTEXT, "getBargains")
    const client = await sql.connect()
    const { startIndex, endIndex } = parseStartAndEndIndex(start, end)
    const limit = endIndex - startIndex + 1;
    const offset = startIndex;

    const result = await client.query(
        `SELECT * FROM bargain LIMIT $1 OFFSET $2`,
        [limit, offset]
    );

    const bargains: BargainEntity[] = result.rows.map(mapDocumentToBargain);
    Logger.endFunction(CONTEXT, "getBargains", bargains)
    return bargains
}

export async function getBargain(id: string | null): Promise<BargainEntity> {
    Logger.startFunction(CONTEXT, "getBargain")

    const client = await sql.connect()

    const result = await client.query(
        `SELECT * FROM bargain WHERE id = $1`,
        [id]
    )

    const bargain = mapDocumentToBargain(result.rows[0])
    Logger.endFunction(CONTEXT, "getBargain", bargain)
    return bargain
}

export async function actionCreateBargain(formData: FormData) {
    Logger.startFunction(CONTEXT, "actionCreateBargain")
    const newBargain = parseBargainForm(formData)

    createBargain(newBargain)
        .then(() => Logger.endFunction(CONTEXT, "actionCreateBargain", "void"))
        .catch(error => Logger.errorFunction(CONTEXT, "actionCreateBargain", error)
        );

    redirect("/admin/bargains")
}

export async function createBargain(bargainData: any): Promise<void> {
    Logger.startFunction(CONTEXT, "createBargain")
    const { code, title, description } = bargainData;

    try {
        const client = await sql.connect();

        await client.query(
            'INSERT INTO bargain (code, title, description) VALUES ($1, $2, $3)',
            [code, title, description]
        );
        Logger.endFunction(CONTEXT, "createBargain", bargainData)
    } catch (error) {
        Logger.errorFunction(CONTEXT, "createBargain", error)
        throw new Error('Could not create bargain');
    }
}

export async function actionUpdateBargain(formData: FormData) {
    Logger.startFunction(CONTEXT, "actionUpdateBargain")
    const id = parseString(formData.get(bargainIdName)?.toString(), "BARGAIN_CODE")
    const newBargain = parseBargainForm(formData)
    const updatedBargain = { id: id, ...newBargain}

    updateBargain(updatedBargain)
        .then(() => Logger.endFunction(CONTEXT, "actionUpdateBargain", "void"))
        .catch(error => Logger.errorFunction(CONTEXT, "actionUpdateBargain", error));

    redirect(`/admin/bargains/${id}`)
}

export async function updateBargain(bargainData: any): Promise<void> {
    Logger.startFunction(CONTEXT, "updateBargain")
    const { id, code, title, description } = bargainData;

    try {
        const client = await sql.connect();

        await client.query(
            'UPDATE bargain SET code = $1, title = $2, description = $3 WHERE id = $4',
            [code, title, description, id]
        );
        Logger.endFunction(CONTEXT, "updateBargain", bargainData)
    } catch (error) {
        Logger.errorFunction(CONTEXT, "updateBargain", error)
        throw new Error('Could not update bargain');
    }
}

export async function actionDeleteBargain(bargainCode: string | undefined | null) {
    Logger.startFunction(CONTEXT, "actionDeleteBargain")
    const code = parseString(bargainCode, "BARGAIN_CODE");

    deleteBargain(code)

    Logger.endFunction(CONTEXT, "actionDeleteBargain", "void")
}

export async function deleteBargain(id: any): Promise<void> {
    Logger.startFunction(CONTEXT, "deleteBargain")

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
                `Bargain with code: ${id} has been removed from the bargain.`
            )
        } else {
            Logger.errorFunction(
                CONTEXT, 
                "deleteBargain", 
                `Failed to remove bargain with code: ${id} from the bargain. Bargain not found.`
            )
        }
    } catch (error) {
        Logger.errorFunction(CONTEXT, "deleteBargain", error)
        throw new Error('Could not delete bargain');
    }
}
