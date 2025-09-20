const RETROAURICULAR_NAME = "RETROAURICULAR"
const RETROAURICULAR_VALUE = "Detrás de la oreja"
const INTRACANAL_NAME = "INTRACANAL"
const INTRACANAL_VALUE = "Dentro del canal auditivo"

/**
 * Type representing the possible locations of an earphone.
 * 
 * - `"RETROAURICULAR"`: Positioned behind the ear.
 * - `"INTRACANAL"`: Placed inside the ear canal.
 */
export type EarphoneLocation = "RETROAURICULAR" | "INTRACANAL";

export function valueOfEarphoneLocation(value: string) {
    if (value === RETROAURICULAR_NAME) {
        return RETROAURICULAR_VALUE
    }

    if (value === INTRACANAL_NAME) {
        return INTRACANAL_VALUE
    }

    throw Error("Value not valid for EarphoneLocation")
}