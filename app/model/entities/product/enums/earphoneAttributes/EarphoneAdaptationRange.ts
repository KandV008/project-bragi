/**
 * Type representing the adaptation range of an earphone based on the user's hearing loss level.
 *
 * - `"MILD-SEVERE"`: Suitable for users with mild to severe hearing loss.
 * - `"SEVERE-PROFOUND"`: Designed for users with severe to profound hearing loss.
 * - `"COFOSIS"`: Used for cases of total hearing loss (Oído muerto).
 */
export type EarphoneAdaptationRange = "MILD-SEVERE" | "SEVERE-PROFOUND" | "COFOSIS";
