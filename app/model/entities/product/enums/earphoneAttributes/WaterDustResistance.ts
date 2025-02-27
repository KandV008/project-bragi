import { ProductEntity } from "../../Product";

/**
 * Constant representing the string value for "true" in water and dust resistance.
 */
const TRUE_VALUE = "Sí";

/**
 * Constant representing the string value for "false" in water and dust resistance.
 */
const FALSE_VALUE = "No";

/**
 * Constant representing the programmatic name for the "true" value.
 */
const TRUE_NAME = "true";

/**
 * Constant representing the programmatic name for the "false" value.
 */
const FALSE_NAME = "false";

/**
 * Object mapping true/false names for water and dust resistance.
 */
export const waterDustResistanceList = {
    TRUE_NAME,
    FALSE_NAME,
};

/**
 * Converts a user-friendly string value of water and dust resistance
 * into its programmatic representation.
 *
 * @param value - The input string representing water and dust resistance.
 * @returns The corresponding programmatic name ("true" or "false").
 * @throws Error if the value is not valid.
 */
export function valueOfWaterDustResistance(value: string): string {
    if (value === TRUE_VALUE) {
        return TRUE_NAME;
    }

    if (value === FALSE_VALUE) {
        return FALSE_NAME;
    }

    throw new Error("Value not valid");
}

/**
 * Counts the number of products that are water and dust resistant
 * and those that are not.
 *
 * @param products - The array of products to analyze.
 * @returns An object containing counts for resistant ("Sí") and non-resistant ("No") products.
 */
export function checkWaterAndDustResistanceType(products: ProductEntity[]) {
    const counts = {
        YES: { quantity: 0, type: TRUE_VALUE },
        NO: { quantity: 0, type: FALSE_VALUE },
    };

    products.forEach((product) => {
        if (product.earphoneAttributes?.waterDustResistance) {
            counts.YES.quantity += 1;
        } else {
            counts.NO.quantity += 1;
        }
    });

    return counts;
}
