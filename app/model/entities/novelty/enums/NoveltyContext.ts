const SHOPPING_LIST_VALUE = "Cesta de la compra";
const SHOPPING_LIST_NAME = "SHOPPING-LIST";
const SEARCH_VALUE = "Buscador";
const SEARCH_NAME = "SEARCH";

/**
 * Enum representing different novelty contexts.
 * 
 * - `SHOPPING-LIST`: Represents novelties related to the shopping list feature.
 * - `SEARCH`: Represents novelties related to the search functionality.
 */
export enum NoveltyContext {
    "SHOPPING-LIST" = SHOPPING_LIST_NAME,
    SEARCH = SEARCH_NAME,
}

/**
 * List of available novelty context names.
 */
export const noveltyContextList = [
    SHOPPING_LIST_NAME,
    SEARCH_NAME,
];

/**
 * Retrieves the human-readable value of a `NoveltyContext` name.
 * 
 * @param {string} value - The key name of the novelty context (e.g., `"SHOPPING-LIST"`).
 * @returns {string} The corresponding human-readable value.
 * @throws {Error} If the provided value is not a valid `NoveltyContext`.
 */
export function valueOfNoveltyContext(value: string): string {
    if (value === SHOPPING_LIST_NAME) {
        return SHOPPING_LIST_VALUE;
    }

    if (value === SEARCH_NAME) {
        return SEARCH_VALUE;
    }

    throw new Error("Value not valid for NoveltyContext");
}