import { EarphoneAttributes, mapDocumentToEarphoneAttributes } from "./EarphoneAttributes";
import { Brand } from "./enums/Brand";
import { Category } from "./enums/Category";
import { MAP_DOCUMENT_TO_PRODUCT_ERROR_MESSAGE } from "./ProductConfiguration";

/**
 * Interface representing a product entity.
 */
export interface ProductEntity {
    /**
     * Unique identifier for the product.
     */
    id: string;

    /**
     * Name of the product.
     */
    name: string;

    /**
     * Category of the product.
     */
    category: Category;

    /**
     * Price of the product.
     */
    price: number;

    /**
     * URL of the product image.
     */
    imageURL: string;

    /**
     * Description of the product.
     */
    description: string;

    /**
     * Brand of the product.
     */
    brand: Brand;

    /**
     * List of included accessories or components.
     */
    include: string[];

    /**
     * List of related product IDs.
     */
    relatedProducts: string[];

    /**
     * Earphone-specific attributes (null if not applicable).
     */
    earphoneAttributes: EarphoneAttributes | null;
}

/**
 * Maps a raw document object to the structured ProductEntity interface.
 *
 * @param product - The raw document object containing product data.
 * @returns The mapped ProductEntity object.
 * @throws Error if the product object is invalid or mapping fails.
 */
export function mapDocumentToProduct(product: any): ProductEntity {
    try {
        if (!product || !product._id || !product.name || !product.category || !product.price || !product.brand) {
            throw new Error(MAP_DOCUMENT_TO_PRODUCT_ERROR_MESSAGE);
        }

        const newProduct: Omit<ProductEntity, "earphoneAttributes"> = {
            id: product._id.toString(),
            name: product.name,
            category: Category[product.category as keyof typeof Category], 
            price: product.price,
            imageURL: product.image_URL,
            description: product.description,
            brand: Brand[product.brand as keyof typeof Brand],
            include: Array.isArray(product.include) ? product.include : [],
            relatedProducts: Array.isArray(product.related_products) ? product.related_products : [],
        };

        const newAttributes: EarphoneAttributes | null =
            product.category === (Category.ACCESSORY as string) ? null : mapDocumentToEarphoneAttributes(product);

        return {
            ...newProduct,
            earphoneAttributes: newAttributes,
        };
    } catch (error) {
        throw new Error(MAP_DOCUMENT_TO_PRODUCT_ERROR_MESSAGE);
    }
}