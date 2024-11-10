export interface NoveltyEntity {
    id: string;
    title: string;
    description: string;
    promotionalImage: string;
    //toProducts: string[];
    //discount: string;
}

export function mapDocumentToNovelty(novelty: any): NoveltyEntity {
    return {
        id: novelty.id,
        title: novelty.title,
        description: novelty.description,
        promotionalImage: novelty.promotional_image
    }
}
