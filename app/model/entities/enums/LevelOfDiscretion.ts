import { ProductEntity } from "../Product";

const VISIBLE_VALUE = "Visible"
const DISCREET_VALUE = "Discreto"
const IMPERCEPTIBLE_VALUE = "Imperceptible"

export enum LevelOfDiscretion {
    VISIBLE = VISIBLE_VALUE,
    DISCREET = DISCREET_VALUE,
    IMPERCEPTIBLE = IMPERCEPTIBLE_VALUE,
}

export interface LevelOfDiscretionQuantity {
    VISIBLE: LevelOfDiscretionQuantityProps,
    DISCREET: LevelOfDiscretionQuantityProps,
    IMPERCEPTIBLE: LevelOfDiscretionQuantityProps,
}

export function valueOfLevelOfDiscretion(value: string){
    if (value === VISIBLE_VALUE){
        return "VISIBLE"
    }

    if (value === DISCREET_VALUE){
        return "DISCREET"
    }

    if (value === IMPERCEPTIBLE_VALUE){
        return "IMPERCEPTIBLE"
    }

    throw Error("Value not valid")
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
        const type = product.levelOfDiscretion;
        Object.values(counts).forEach((x) => {
            if (type === x.type) x.quantity += 1;
        });
    });

    return counts;
}