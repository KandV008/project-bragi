import { ProductEntity } from "../Product";

export enum LevelOfDiscretion {
    VISIBLE = "Visible",
    DISCREET = "Discreto",
    IMPERCEPTIBLE = "Imperceptible",
}

export interface LevelOfDiscretionQuantity {
    VISIBLE: LevelOfDiscretionQuantityProps,
    DISCREET: LevelOfDiscretionQuantityProps,
    IMPERCEPTIBLE: LevelOfDiscretionQuantityProps,
}

interface LevelOfDiscretionQuantityProps {
    quantity: number;
    type: LevelOfDiscretion
}

export function checkLevelOfDiscretionType(
    products: ProductEntity[]
): LevelOfDiscretionQuantity {
    const counts: LevelOfDiscretionQuantity = {
        VISIBLE: { quantity: 0, type: LevelOfDiscretion.VISIBLE },
        DISCREET: { quantity: 0, type: LevelOfDiscretion.DISCREET },
        IMPERCEPTIBLE: { quantity: 0, type: LevelOfDiscretion.IMPERCEPTIBLE },
    };

    products.forEach((product) => {
        const type = product.level_of_discretion;
        Object.values(counts).forEach((x) => {
            if (type === x.type) x.quantity += 1;
        });
    });

    return counts;
}