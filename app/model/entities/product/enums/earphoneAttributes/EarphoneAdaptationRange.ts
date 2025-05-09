const MILD_SEVERE_VALUE = "De Leve a Severa";
const MILD_SEVERE_NAME = "MILD-SEVERE";
const SEVERE_PROFOUND_VALUE = "De Severa a Profunda";
const SEVERE_PROFOUND_NAME = "SEVERE-PROFOUND";
const COFOSIS_VALUE = "Cofosis (Oído muerto)";
const COFOSIS_NAME = "COFOSIS";

/**
 * Enum representing the adaptation range of an earphone based on the user's hearing loss level.
 *
 * - `"MILD-SEVERE"`: Suitable for users with mild to severe hearing loss.
 * - `"SEVERE-PROFOUND"`: Designed for users with severe to profound hearing loss.
 * - `"COFOSIS"`: Used for cases of total hearing loss (Oído muerto).
 */
export enum EarphoneAdaptationRange {
    "MILD-SEVERE" = MILD_SEVERE_NAME,
    "SEVERE-PROFOUND" = SEVERE_PROFOUND_NAME,
    COFOSIS = COFOSIS_NAME,
}

/**
 * List of available earphone adaptation range values.
 */
export const earphoneAdaptationRangeList = [
    MILD_SEVERE_NAME,
    SEVERE_PROFOUND_NAME,
    COFOSIS_NAME
];

/**
 * Retrieves the human-readable value of an `EarphoneAdaptationRange` name.
 * 
 * @param {string} value - The key name of the adaptation range (e.g., `"MILD-SEVERE"`).
 * @returns {string} The corresponding human-readable value.
 * @throws {Error} If the provided value is not a valid `EarphoneAdaptationRange`.
 */
export function valueOfEarphoneAdaptationRange(value: string): string {
    if (value === MILD_SEVERE_NAME) {
        return MILD_SEVERE_VALUE;
    }

    if (value === SEVERE_PROFOUND_NAME) {
        return SEVERE_PROFOUND_VALUE;
    }

    if (value === COFOSIS_NAME) {
        return COFOSIS_VALUE;
    }

    throw new Error("Value not valid for EarphoneAdaptationRange");
}
