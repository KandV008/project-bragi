import { ProductEntity } from "../Product";

export enum EarLocation {
    RETROAURICULAR = "Retroauricular - detrás de la oreja",
    INTRACANAL = "Intracanal - dentro del canal auditivo",
    CIC = "CIC - completamente en el canal auditivo",
    RIC = "RIC - auricular dentro del conducto auditivo",
}

export interface EarLocationQuantity {
    RETROAURICULAR: EarLocationQuantityProps,
    INTRACANAL: EarLocationQuantityProps,
    CIC: EarLocationQuantityProps,
    RIC: EarLocationQuantityProps,
}

interface EarLocationQuantityProps {
    quantity: number;
    type: EarLocation
}

export function checkEarLocationType(products: ProductEntity[]): EarLocationQuantity {
    const counts: EarLocationQuantity = {
        RETROAURICULAR: { quantity: 0, type: EarLocation.RETROAURICULAR },
        INTRACANAL: { quantity: 0, type: EarLocation.INTRACANAL },
        CIC: { quantity: 0, type: EarLocation.CIC },
        RIC: { quantity: 0, type: EarLocation.RIC },
    };

    products.forEach((product) => {
        const type = product.location;
        Object.values(counts).forEach((x) => {
            if (type === x.type) x.quantity += 1;
        });
    });

    return counts;
}