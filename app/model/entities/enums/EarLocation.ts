import { ProductEntity } from "../Product";

const RETROAURICULAR_VALUE = "Retroauricular - detrás de la oreja"
const INTRACANAL_VALUE = "Intracanal - dentro del canal auditivo"
const CIC_VALUE = "CIC - completamente en el canal auditivo"
const RIC_VALUE = "RIC - auricular dentro del conducto auditivo"
const RETROAURICULAR_NAME = "RETROAURICULAR"
const INTRACANAL_NAME = "INTRACANAL"
const CIC_NAME = "CIC"
const RIC_NAME = "RIC"

export enum EarLocation {
    RETROAURICULAR = RETROAURICULAR_VALUE, //BTE, RIC
    INTRACANAL = INTRACANAL_VALUE, //ITC, ITE, CIC
    CIC = CIC_VALUE,
    RIC = RIC_VALUE,
}

export const earLocationList = [
    RETROAURICULAR_NAME,
    INTRACANAL_NAME,
    CIC_NAME,
    RIC_NAME,
]

export function valueOfEarLocation(value: string){
    if (value === RETROAURICULAR_VALUE){
        return RETROAURICULAR_NAME
    }

    if (value === INTRACANAL_VALUE){
        return INTRACANAL_NAME
    }

    if (value === CIC_VALUE){
        return CIC_NAME
    }

    if (value === RIC_VALUE){
        return RIC_NAME
    }

    throw Error("Value not valid")
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