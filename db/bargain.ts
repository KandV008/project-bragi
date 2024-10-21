import { BargainEntity, mapDocumentToBargain } from "@/app/model/entities/Bargain";
import { parseBargainForm, parseStartAndEndIndex, parseString } from "@/lib/parser";
import { sql } from "@vercel/postgres";
import { redirect } from "next/navigation";

export async function getBargains(start: string | null, end: string | null): Promise<BargainEntity[]> {
    const client = await sql.connect()
    const { startIndex, endIndex } = parseStartAndEndIndex(start, end)
    const limit = endIndex - startIndex + 1;
    const offset = startIndex;

    const result = await client.query(
        `SELECT * FROM bargain LIMIT $1 OFFSET $2`,
        [limit, offset]
    );

    const bargains: BargainEntity[] = result.rows.map(mapDocumentToBargain);
    console.log(bargains)
    return bargains
}

export async function getBargain(code: string | null): Promise<BargainEntity> {
    const client = await sql.connect()

    const result = await client.query(
        `SELECT * FROM bargain WHERE code = $1`,
        [code]
    )

    return mapDocumentToBargain(result.rows[0])
}

export async function actionCreateBargain(formData: FormData) {
    const newBargain = parseBargainForm(formData)
    console.log(newBargain)

    createBargain(newBargain)
        .then(() => console.log("Bargain added successfully"))
        .catch(error => console.error("Error adding bargain:", error));

    redirect("/admin/bargains")
}

export async function createBargain(bargainData: any): Promise<void> {
    const { code, title, description } = bargainData;

    try {
        const client = await sql.connect();

        await client.query(
            'INSERT INTO bargain (code, title, description) VALUES ($1, $2, $3)',
            [code, title, description]
        );
    } catch (error) {
        console.error('Error creating bargain:', error);
        throw new Error('Could not create bargain');
    }
}

export async function actionUpdateBargain(formData: FormData) {
    const prevCode = parseString(formData.get("prev_code")?.toString(), "PRODUCT_ID")
    const newBargain = parseBargainForm(formData)

    updateBargain(newBargain, prevCode)
        .then(() => console.log("Bargain updated successfully"))
        .catch(error => console.error("Error updating bargain:", error));

    redirect(`/admin/bargains/${prevCode}`)
}

export async function updateBargain(bargainData: { code: string, title: string, description: string }, prevCode: string): Promise<void> {
    const { code, title, description } = bargainData;

    try {
        const client = await sql.connect();

        await client.query(
            'UPDATE bargain SET code = $1, title = $2, description = $3 WHERE code = $4',
            [code, title, description, prevCode]
        );
    } catch (error) {
        console.error('Error updating bargain:', error);
        throw new Error('Could not update bargain');
    }
}

export async function actionDeleteBargain(bargainCode: string | undefined | null) {
    const code = parseString(bargainCode, "BARGAIN_CODE");

    deleteBargain(code)

    redirect("/admin/bargains")
}

export async function deleteBargain(bargainCode: any): Promise<void> {
    try {
        const client = await sql.connect();

        const result = await client.query(
            'DELETE FROM bargain WHERE code = $1',
            [bargainCode]
        );

        if (result.rowCount === 1) {
            console.log(`Bargain with code: ${bargainCode} has been removed from the bargain.`);
        } else {
            console.error(`Failed to remove bargain with code: ${bargainCode} from the bargain. Bargain not found.`);
        }
    } catch (error) {
        console.error('Error creating bargain:', error);
        throw new Error('Could not create bargain');
    }
}
