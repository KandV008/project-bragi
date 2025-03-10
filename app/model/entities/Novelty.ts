export interface NoveltyEntity { // TODO Update String Doc
    id: string;
    title: string;
    description: string;
    promotionalImage: string;
    // TODO toProducts: string[];
    // TODO discount: string;
}

/**
 * Maps the raw novelty document to a strongly typed NoveltyEntity.
 *
 * @param novelty - The raw novelty data (usually from a database or API).
 * @returns A strongly typed NoveltyEntity object.
 */
export function mapDocumentToNovelty(novelty: any): NoveltyEntity {
    return {
        id: novelty.id,
        title: novelty.title,
        description: novelty.description,
        promotionalImage: novelty.promotional_image
    }
}
