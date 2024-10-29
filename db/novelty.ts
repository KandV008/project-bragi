import { BargainEntity, mapDocumentToBargain } from "@/app/model/entities/Bargain";
import { mapDocumentToNovelty, NoveltyEntity } from "@/app/model/entities/Novelty";
import { Logger } from "@/app/model/Logger";
import { parseBargainForm, parseNoveltyForm, parseStartAndEndIndex, parseString } from "@/lib/parser";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

const CONTEXT = "NOVELTY"

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

export async function actionCreateNovelty(formData: FormData) {
    Logger.startFunction(CONTEXT, "actionCreateNovelty")
    const newNovelty = parseNoveltyForm(formData)

    createNovelty(newNovelty)
        .then(() => Logger.endFunction(CONTEXT, "actionCreateNovelty", "void"))
        .catch(error => Logger.errorFunction(CONTEXT, "actionCreateNovelty", error)
        );

    redirect("/admin/novelties")
}

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
        throw new Error('Could not create bargain');
    }
}

// TODO Change to Novelty Entity 
export async function actionUpdateNovelty(formData: FormData) {
    Logger.startFunction(CONTEXT, "actionUpdateNovelty")
    const prevCode = parseString(formData.get("prev_code")?.toString(), "PRODUCT_ID")
    const newBargain = parseBargainForm(formData)

    updateNovelty(newBargain, prevCode)
        .then(() => Logger.endFunction(CONTEXT, "actionUpdateNovelty", "void"))
        .catch(error => Logger.errorFunction(CONTEXT, "actionUpdateNovelty", error));

    redirect(`/admin/novelties/${prevCode}`)
}

// TODO Change to Novelty Entity 
export async function updateNovelty(bargainData: { code: string, title: string, description: string }, prevCode: string): Promise<void> {
    Logger.startFunction(CONTEXT, "updateNovelty")
    const { code, title, description } = bargainData;

    try {
        const client = await sql.connect();

        await client.query(
            'UPDATE bargain SET code = $1, title = $2, description = $3 WHERE code = $4',
            [code, title, description, prevCode]
        );
        Logger.endFunction(CONTEXT, "updateNovelty", bargainData)
    } catch (error) {
        Logger.errorFunction(CONTEXT, "updateNovelty", error)
        throw new Error('Could not update bargain');
    }
}

// TODO Change to Novelty Entity 
export async function actionDeleteNovelty(bargainCode: string | undefined | null) {
    Logger.startFunction(CONTEXT, "actionDeleteNovelty")
    const code = parseString(bargainCode, "BARGAIN_CODE");

    deleteNovelty(code)

    Logger.endFunction(CONTEXT, "actionDeleteNovelty", "void")
    redirect("/admin/novelties")
}

// TODO Change to Novelty Entity 
export async function deleteNovelty(bargainCode: any): Promise<void> {
    Logger.startFunction(CONTEXT, "deleteNovelty")

    try {
        const client = await sql.connect();

        const result = await client.query(
            'DELETE FROM bargain WHERE code = $1',
            [bargainCode]
        );

        if (result.rowCount === 1) {
            Logger.endFunction(
                CONTEXT, 
                "deleteNovelty", 
                `Bargain with code: ${bargainCode} has been removed from the bargain.`
            )
        } else {
            Logger.errorFunction(
                CONTEXT, 
                "deleteNovelty", 
                `Failed to remove bargain with code: ${bargainCode} from the bargain. Bargain not found.`
            )
        }
    } catch (error) {
        Logger.errorFunction(CONTEXT, "deleteNovelty", error)
        throw new Error('Could not create bargain');
    }
}
