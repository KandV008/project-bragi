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
    if (value === TRUE_NAME) {
        return TRUE_VALUE;
    }

    if (value === FALSE_NAME) {
        return FALSE_VALUE;
    }

    throw new Error("Value not valid for WaterDustResistance");
}