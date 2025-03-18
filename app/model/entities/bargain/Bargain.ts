import { bargainCodeMap } from "./bargainCodes";
import { MAP_DOCUMENT_TO_BARGAIN_ERROR_MESSAGE } from "./BargainConfiguration";

/**
 * Represents a bargain entity with relevant metadata.
 */
export interface BargainEntity {
    /** Unique identifier for the bargain. */
    id: string;
    /** The discount code associated with the bargain. */
    code: string;
    /** Title or name of the bargain. */
    title: string;
    /** Description providing details about the bargain. */
    description: string;
    /** List of requirements to be able to use this bargain */
    requirements: string[];
}

/**
 * Maps a raw bargain document to a strongly typed `BargainEntity`.
 *
 * @param {any} bargain - The raw bargain data (usually from a database or API).
 * @returns {BargainEntity} - A strongly typed `BargainEntity` object.
 * @throws {Error} - If any required field is null or undefined.
 */
export function mapDocumentToBargain(bargain: any): BargainEntity {
    try {
        if (!bargain || !bargain.id || !bargain.code || !bargain.title || !bargain.description) {
            throw new Error(MAP_DOCUMENT_TO_BARGAIN_ERROR_MESSAGE);
        }

        return {
            id: bargain.id,
            code: bargain.code,
            title: bargain.title,
            description: bargain.description,
            requirements: Array.isArray(bargain.requirements) ? bargain.requirements : [],
        };
    } catch (error) {
        throw new Error(MAP_DOCUMENT_TO_BARGAIN_ERROR_MESSAGE);
    }
}


/**
 * Retrieves the corresponding action function for a given bargain code.
 *
 * @param {string} code - The discount code.
 * @returns {((shoppingList: ProductDTO[]) => ProductDTO[]) | null} - 
 * The associated function if found, otherwise `null`.
 */
export function getCodeAction(code: string) {
    if (code in bargainCodeMap) {
        return bargainCodeMap[code as keyof typeof bargainCodeMap];
    }

    return null;
}
