import { NoveltyContext } from "./enums/NoveltyContext";
import { NoveltyType } from "./enums/NoveltyType";
import { MAP_DOCUMENT_TO_NOVELTY_ERROR_MESSAGE } from "./NoveltyConfiguration";
import { NoveltyActionProps, noveltyCodeMap } from "./noveltyCodes";
import { Logger } from "../../../config/Logger";
import { getValidNovelties } from "@/db/novelty/novelty";

/**
 * Represents a novelty entity with detailed information about the novelty.
 */
export interface NoveltyEntity {
    /** Unique identifier for the novelty */
    id: string;
    /** Title of the novelty */
    title: string;
    /** Code representing the novelty */
    code: string;
    /** Description of the novelty */
    description: string;
    /** URL or path to the promotional image */
    promotionalImage: string;
    /** Type of novelty (e.g., discount, promotion) */
    type: NoveltyType;
    /** Context of the novelty (e.g., seasonal, event-based) */
    context: NoveltyContext;
    /** The expiry date of the novelty */
    endDate: Date;
}

/**
 * Maps a raw novelty document (usually from a database or API) to a strongly typed `NoveltyEntity` object.
 * Validates required fields and formats the end date.
 * 
 * @param novelty - The raw novelty data to be mapped.
 * @returns A strongly typed `NoveltyEntity` object representing the mapped novelty.
 * @throws {Error} If the novelty data is invalid or required fields are missing.
 */
export function mapDocumentToNovelty(novelty: any): NoveltyEntity {
    try {
        const requiredFields = [
            "id",
            "title",
            "code",
            "description",
            "promotional_image",
            "type",
            "context",
            "end_date"
        ];

        if (!novelty || requiredFields.some(field => !novelty[field])) {
            throw new Error(MAP_DOCUMENT_TO_NOVELTY_ERROR_MESSAGE);
        }

        const endDate = new Date(novelty.end_date);

        if (isNaN(endDate.getTime())) {
            throw new Error('Invalid endDate format');
        }

        return {
            id: novelty.id,
            title: novelty.title,
            code: novelty.code,
            description: novelty.description,
            promotionalImage: novelty.promotional_image,
            type: NoveltyType[novelty.type as keyof typeof NoveltyType],
            context: NoveltyContext[novelty.context as keyof typeof NoveltyContext],
            endDate: endDate,
        }
    } catch (error) {
        throw new Error(MAP_DOCUMENT_TO_NOVELTY_ERROR_MESSAGE);
    }
}

/**
 * Applies valid novelties to a list of products, by checking if the novelty's end date is still valid and if an action can be applied.
 * 
 * @param context - The context in which the novelties should be applied (e.g., a category or seasonal context).
 * @param products - A list of products to which the novelties may be applied.
 * @returns A promise that resolves with the updated list of products after applying valid novelties.
 * @throws {Error} If an error occurs while retrieving valid novelties or applying them to products.
 */
export async function applyNoveltyToList(context: string, products: any[]): Promise<any[]> {
    const productsApplied = new Set<string>();

    try {
        const novelties: NoveltyEntity[] = await getValidNovelties(context);

        for (const novelty of novelties) {
            handleNovelty(novelty, products, productsApplied);
        }

    } catch (error) {
        Logger.errorFunction("NOVELTY", "applyNoveltyToList", { context, error });
        throw new Error("Failed to apply novelty to products");
    } finally {
        return products;
    }
}

/**
 * Handles a single novelty by checking if an action exists for it and applying it to products that have not yet been processed.
 * 
 * @param novelty - The novelty to be applied.
 * @param products - A list of products to check and apply the novelty action to.
 * @param productsApplied - A set to track which products have already had the novelty applied.
 */
function handleNovelty(novelty: NoveltyEntity, products: any[], productsApplied: Set<string>) {
    const action = getNoveltyAction(novelty.code);

    if (!action) {
        Logger.infoFunction("NOVELTY", "handleNovelty", `No action found for novelty code: ${novelty.code}`);
        return;
    }

    products.forEach((product) => handleProduct(productsApplied, product, action))
}

/**
 * Checks if a product has already had a novelty applied and, if not, applies the action associated with the novelty.
 * 
 * @param productsApplied - A set tracking products that have already been processed.
 * @param currentProduct - The product to check and apply the action to.
 * @param action - The novelty action to apply to the product.
 */
function handleProduct(productsApplied: Set<string>, currentProduct: any, action: (product: any) => NoveltyActionProps) {
    if (productsApplied.has(currentProduct.id)) {
        return;
    }

    const { product, status } = action(currentProduct);

    if (status !== 0) {
        Logger.infoFunction("NOVELTY", "handleProduct", `Product ${currentProduct.id} not applied (status: ${status})`);
        return;
    }

    productsApplied.add(currentProduct.id);
    Logger.infoFunction("NOVELTY", "handleProduct", `Product ${currentProduct.id} applied successfully.`);

    return product
}

/**
 * Applies valid novelties to a single product based on the given context.
 * It retrieves applicable novelties and processes the product accordingly.
 *
 * @param context - The context in which the novelties should be applied (e.g., category, seasonal event).
 * @param product - The product to which the novelties may be applied.
 * @returns A promise that resolves with the updated product after applying valid novelties.
 * @throws {Error} If an error occurs while retrieving or applying novelties.
 */
export async function applyNoveltyToProduct(context: string, product: any) {
    const productsApplied = new Set<string>();

    try {
        const novelties: NoveltyEntity[] = await getValidNovelties(context);

        for (const novelty of novelties) {
            handleNovelty(novelty, [product], productsApplied);
        }

    } catch (error) {
        Logger.errorFunction("NOVELTY", "applyNoveltyToProduct", { context, error });
        throw new Error("Failed to apply novelty to product");
    } finally {
        return product;
    }
}

/**
 * Retrieves the action associated with a specific novelty code from the noveltyCodeMap.
 * 
 * @param code - The novelty code to lookup in the noveltyCodeMap.
 * @returns A function that defines the action to apply to products, or null if no action is found.
 */
export function getNoveltyAction(code: string) {
    if (code in noveltyCodeMap) {
        return noveltyCodeMap[code as keyof typeof noveltyCodeMap];
    }

    return null;
}
