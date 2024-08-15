import { ProductEntity } from "../Product";

const MILD_VALUE = "Leve"
const MODERATE_VALUE = "Moderada"
const SEVERE_VALUE = "Severa"
const PROFOUND_VALUE = "Profunda"

export enum AdaptationRange {
    MILD = MILD_VALUE,
    MODERATE = MODERATE_VALUE,
    SEVERE = SEVERE_VALUE,
    PROFOUND = PROFOUND_VALUE,
}

export function valueOfAdaptationRange(value: string){
    if (value === MILD_VALUE){
        return "MILD"
    }

    if (value === MODERATE_VALUE){
        return "MODERATE"
    }

    if (value === SEVERE_VALUE){
        return "SEVERE"
    }

    if (value === PROFOUND_VALUE){
        return "PROFOUND"
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

