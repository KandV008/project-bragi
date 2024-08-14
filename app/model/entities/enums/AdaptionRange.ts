import { ProductEntity } from "../Product";

export enum AdaptationRange {
    MILD = "Leve",
    MODERATE = "Moderada",
    SEVERE = "Severa",
    PROFOUND = "Profunda",
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

