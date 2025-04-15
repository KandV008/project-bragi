const GENERAL_VALUE = "General";
const GENERAL_NAME = "GENERAL";
const SPECIFIC_VALUE = "Específico";
const SPECIFIC_NAME = "SPECIFIC";
const INFO_VALUE = "Informativo";
const INFO_NAME = "INFO";

/**
 * Enum representing different types of novelties.
 * 
 * - `GENERAL`: Represents general novelties applicable to all users.
 * - `SPECIFIC`: Represents specific novelties targeted at a particular audience.
 * - `INFO`: Represents informative novelties providing relevant details.
 */
export enum NoveltyType {
    GENERAL = GENERAL_NAME,
    SPECIFIC = SPECIFIC_NAME,
    INFO = INFO_NAME,
}

/**
 * List of available novelty type names.
 */
export const noveltyTypeList = [
    GENERAL_NAME,
    SPECIFIC_NAME,
    INFO_NAME
];

/**
 * Retrieves the human-readable value of a `NoveltyType` name.
 * 
 * @param {string} value - The key name of the novelty type (e.g., `"GENERAL"`).
 * @returns {string} The corresponding human-readable value.
 * @throws {Error} If the provided value is not a valid `NoveltyType`.
 */
export function valueOfNoveltyType(value: string): string {
    if (value === GENERAL_NAME) {
        return GENERAL_VALUE;
    }

    if (value === SPECIFIC_NAME) {
        return SPECIFIC_VALUE;
    }

    if (value === INFO_NAME) {
        return INFO_VALUE;
    }

    throw new Error("Value not valid for NoveltyType");
}
