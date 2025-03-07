const MILD_SEVERE_VALUE = "De Leve a Severa"
const MILD_SEVERE_NAME = "MILD-SEVERE"
const SEVERE_PROFOUND_VALUE = "De Severa a Profunda"
const SEVERE_PROFOUND_NAME = "SEVERE-PROFOUND"
const COFOSIS_VALUE = "Cofosis (Oído muerto)"
const COFOSIS_NAME = "COFOSIS"

/**
 * Enum representing the degree of hearing loss an earphone is designed for.
 *
 * - `"MILD-SEVERE"`: Suitable for users with mild to severe hearing loss.
 * - `"SEVERE-PROFOUND"`: Designed for users with severe to profound hearing loss.
 * - `"COFOSIS"`: Used for cases of total hearing loss (Oído muerto).
 */
export enum EarphoneDegreeOfLoss {
    'MILD-SEVERE' = MILD_SEVERE_NAME,
    'SEVERE-PROFOUND' = SEVERE_PROFOUND_NAME,
    COFOSIS = COFOSIS_NAME,
}

/**
 * List of available earphone degree of loss values.
 */
export const earphoneDegreeOfLossList = [
    MILD_SEVERE_NAME,
    SEVERE_PROFOUND_NAME,
    COFOSIS_NAME
];

export function valueOfEarphoneDegreeOfLoss(value: string) {
    if (value === MILD_SEVERE_NAME) {
        return MILD_SEVERE_VALUE
    }

    if (value === SEVERE_PROFOUND_NAME) {
        return SEVERE_PROFOUND_VALUE
    }

    if (value === COFOSIS_NAME) {
        return COFOSIS_VALUE
    }

    throw Error("Value not valid for EarphoneDegreeOfLoss")
}