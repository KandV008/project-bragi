import { ProductEntity } from "../Product";

const MILD_VALUE = "Leve"
const MODERATE_VALUE = "Moderada"
const SEVERE_VALUE = "Severa"
const PROFOUND_VALUE = "Profunda"
const MILD_NAME = "MILD"
const MODERATE_NAME = "MODERATE"
const SEVERE_NAME = "SEVERE"
const PROFOUND_NAME = "PROFOUND"

export enum DegreeOfLoss {
    MILD = MILD_VALUE,
    MODERATE = MODERATE_VALUE,
    SEVERE = SEVERE_VALUE,
    PROFOUND = PROFOUND_VALUE,
}

export const degreeOfLossList = [
    MILD_NAME,
    MODERATE_NAME,
    SEVERE_NAME,
    PROFOUND_NAME,
]

export function valueOfDegreeOfLoss(value: string){
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
        const type = product.adaptationRange;
        Object.values(counts).forEach((x) => {
            if (type === x.type) x.quantity += 1;
        });
    });

    return counts;
}