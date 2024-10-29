export interface BargainEntity{
    code: string;
    title: string;
    description: string;
    //action: () -> void;
}

export function mapDocumentToBargain(bargain: any): BargainEntity {
    return {
        code: bargain.code,
        title: bargain.title,
        description: bargain.description,
    }
}
