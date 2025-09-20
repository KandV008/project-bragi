const VISIBLE_NAME = "VISIBLE"
const VISIBLE_VALUE = "Visible"
const DISCREET_NAME = "DISCREET"
const DISCREET_VALUE = "Discreto"
const IMPERCEPTIBLE_NAME = "IMPERCEPTIBLE"
const IMPERCEPTIBLE_VALUE = "Imperceptible"
const COFOSIS_NAME = "COFOSIS"
const COFOSIS_VALUE = "Discreto"

/**
 * Type representing the level of discretion of an earphone.
 *
 * - `"VISIBLE"`: The earphone is easily noticeable.
 * - `"DISCREET"`: The earphone is somewhat concealed but still noticeable upon close inspection.
 * - `"IMPERCEPTIBLE"`: The earphone is nearly invisible when worn.
 * - `"COFOSIS"`: Special designation for cases of complete hearing loss (Oído muerto).
 */
export type EarphoneLevelOfDiscretion = "VISIBLE" | "DISCREET" | "IMPERCEPTIBLE" | "COFOSIS";

export function valueOfEarphoneLevelOfDiscretionf(value: string) {
    if (value === VISIBLE_NAME) {
        return VISIBLE_VALUE
    }

    if (value === DISCREET_NAME) {
        return DISCREET_VALUE
    }

    if (value === IMPERCEPTIBLE_NAME) {
        return IMPERCEPTIBLE_VALUE
    }

    if (value === COFOSIS_NAME) {
        return COFOSIS_VALUE
    }

    throw Error("Value not valid for EarphoneLevelOfDiscretion")
}