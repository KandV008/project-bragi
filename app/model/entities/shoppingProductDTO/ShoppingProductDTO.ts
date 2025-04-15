import { MAP_DOCUMENT_TO_SHOPPING_PRODUCT_DTO_ERROR_MESSAGE } from "./ShoppingProductDTOConfiguration";

/**
 * Data Transfer Object (DTO) representing a product.
 */
export interface ShoppingProductDTO {
    /** Unique identifier of the product */
    id: string;
    /** Name of the product */
    name: string;
    /** Category of the product */
    category: string;
    /** Brand of the product */
    brand: string;
    /** Price of the product */
    price: number;
    /** Ear side specification (e.g., left, right, both) */
    earSide: string;
    /** Earphone Shape of the product */
    earphoneShape: string;
    /** Color description as a text */
    colorText: string;
    /** Color represented as a hexadecimal code */
    colorHex: string;
    /** URL of the product image */
    imageURL: string;
    /** Available quantity of the product */
    quantity: number;
}

/**
 * Maps a raw product document to a `ShoppingProductDTO` object.
 * 
 * @param shoppingProduct - The raw product object from the database or API response.
 * @returns The mapped `ShoppingProductDTO` object.
 */
export function mapDocumentToShoppingProductDTO(shoppingProduct: any): ShoppingProductDTO {
    try {
        const requiredFields = [
            "product_id", 
            "name", 
            "category", 
            "brand", 
            "image_url",
            "quantity",
        ]

        if (!shoppingProduct || isNaN(shoppingProduct["price"]) || requiredFields.some(field => !shoppingProduct[field])) {
            throw new Error(MAP_DOCUMENT_TO_SHOPPING_PRODUCT_DTO_ERROR_MESSAGE);
        }

        return {
            id: shoppingProduct.product_id,
            name: shoppingProduct.name,
            category: shoppingProduct.category,
            brand: shoppingProduct.brand,
            price: shoppingProduct.price,
            earSide: shoppingProduct.ear_side ? shoppingProduct.ear_side : "",
            earphoneShape: shoppingProduct.earphone_shape ? shoppingProduct.earphone_shape : "",
            colorText: shoppingProduct.color_text ? shoppingProduct.color_text : "",
            colorHex: shoppingProduct.color_hex ? shoppingProduct.color_hex : "",
            imageURL: shoppingProduct.image_url,
            quantity: shoppingProduct.quantity,
        };
    } catch(error) {
        throw new Error(MAP_DOCUMENT_TO_SHOPPING_PRODUCT_DTO_ERROR_MESSAGE)
    }
}
