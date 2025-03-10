export interface BargainEntity{ // TODO Update String Doc
    id: string;
    code: string;
    title: string;
    description: string;
    // TODO action: () -> void;
}

/**
 * Maps the raw bargain document to a strongly typed BargainEntity.
 *
 * @param bargain - The raw bargain data (usually from a database or API).
 * @returns A strongly typed BargainEntity object.
 */
export function mapDocumentToBargain(bargain: any): BargainEntity {
    return {
        id: bargain.id,
        code: bargain.code,
        title: bargain.title,
        description: bargain.description,
    }
}
