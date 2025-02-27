import { ProductEntity } from "../product/Product"

const MILD_VALUE = "Leve"
const MODERATE_VALUE = "Moderada"
const SEVERE_VALUE = "Severa"
const PROFOUND_VALUE = "Profunda"
const MILD_NAME = "MILD"
const MODERATE_NAME = "MODERATE"
const SEVERE_NAME = "SEVERE"
const PROFOUND_NAME = "PROFOUND"

export enum AdaptationRange {
    MILD = MILD_VALUE,
    MODERATE = MODERATE_VALUE,
    SEVERE = SEVERE_VALUE,
    PROFOUND = PROFOUND_VALUE,
}

export const adaptationRangeList = [
    MILD_NAME,
    MODERATE_NAME,
    SEVERE_NAME,
    PROFOUND_NAME,
]

export function valueOfAdaptationRange(value: string){
    if (value === MILD_VALUE){
        return MILD_NAME
    }

    if (value === MODERATE_VALUE){
        return MODERATE_NAME
    }

    if (value === SEVERE_VALUE){
        return SEVERE_NAME
    }

    if (value === PROFOUND_VALUE){
        return PROFOUND_NAME
    }

    throw Error("Value not valid")
}

export interface AdaptationRangeQuantity {
    MILD: AdaptationRangeQuantityProps,
    MODERATE: AdaptationRangeQuantityProps,
    SEVERE: AdaptationRangeQuantityProps,
    PROFOUND: AdaptationRangeQuantityProps,
}

interface AdaptationRangeQuantityProps {
    quantity: number;
    type: AdaptationRange
}

export function checkAdaptationRangeType(
    products: ProductEntity[]
): AdaptationRangeQuantity {
    const counts: AdaptationRangeQuantity = {
        MILD: { quantity: 0, type: AdaptationRange.MILD },
        MODERATE: { quantity: 0, type: AdaptationRange.MODERATE },
        SEVERE: { quantity: 0, type: AdaptationRange.SEVERE },
        PROFOUND: { quantity: 0, type: AdaptationRange.PROFOUND },
    };

    products.forEach((product) => {
        const type = product.adaptationRange;
        Object.values(counts).forEach((x) => {
            if (type === x.type) x.quantity += 1;
        });
    });

    return counts;
}

