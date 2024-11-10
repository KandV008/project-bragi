export interface BargainEntity{
    id: string;
    code: string;
    title: string;
    description: string;
    //action: () -> void;
}

export function mapDocumentToBargain(bargain: any): BargainEntity {
    return {
        id: bargain.id,
        code: bargain.code,
        title: bargain.title,
        description: bargain.description,
    }
}
