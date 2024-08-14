import { ProductEntity } from "../Product";

export enum DegreeOfLoss {
    MILD = "Leve",
    MODERATE = "Moderada",
    SEVERE = "Severa",
    PROFOUND = "Profunda",
}

export interface DegreeOfLossQuantity {
    MILD: DegreeOfLossQuantityProps,
    MODERATE: DegreeOfLossQuantityProps,
    SEVERE: DegreeOfLossQuantityProps,
    PROFOUND: DegreeOfLossQuantityProps,
}

interface DegreeOfLossQuantityProps {
    quantity: number;
    type: DegreeOfLoss
}

export function checkDegreeOfLossType(
    products: ProductEntity[]
): DegreeOfLossQuantity {
    const counts: DegreeOfLossQuantity = {
        MILD: { quantity: 0, type: DegreeOfLoss.MILD },
        MODERATE: { quantity: 0, type: DegreeOfLoss.MODERATE },
        SEVERE: { quantity: 0, type: DegreeOfLoss.SEVERE },
        PROFOUND: { quantity: 0, type: DegreeOfLoss.PROFOUND },
    };

    products.forEach((product) => {
        const type = product.adaptation_range;
        Object.values(counts).forEach((x) => {
            if (type === x.type) x.quantity += 1;
        });
    });

    return counts;
}