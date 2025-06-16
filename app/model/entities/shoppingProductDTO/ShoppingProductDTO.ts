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
    /** Price of the product with discount */
    discountPrice: number | null;
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

        checkDocument(shoppingProduct, requiredFields);

        return {
            id: shoppingProduct.product_id,
            name: shoppingProduct.name,
            category: shoppingProduct.category,
            brand: shoppingProduct.brand,
            price: shoppingProduct.price,
            discountPrice: shoppingProduct.discount_price,
            earSide: shoppingProduct.ear_side ? shoppingProduct.ear_side : "",
            earphoneShape: shoppingProduct.earphone_shape ? shoppingProduct.earphone_shape : "",
            colorText: shoppingProduct.color_text ? shoppingProduct.color_text : "",
            colorHex: shoppingProduct.color_hex ? shoppingProduct.color_hex : "",
            imageURL: shoppingProduct.image_url,
            quantity: shoppingProduct.quantity,
        };
    } catch (error) {
        throw new Error(MAP_DOCUMENT_TO_SHOPPING_PRODUCT_DTO_ERROR_MESSAGE)
    }
}

/**
 * Check if the document is correct to map
 * @param order Document of the entity
 * @param requiredFields List of fields that are required to have the entity
 */
function checkDocument(shoppingProduct: any, requiredFields: string[]) {
    if (!shoppingProduct) {
        throw new Error(MAP_DOCUMENT_TO_SHOPPING_PRODUCT_DTO_ERROR_MESSAGE + " -> The document is null.");
    }

    if (isNaN(shoppingProduct["price"])) {
        throw new Error(MAP_DOCUMENT_TO_SHOPPING_PRODUCT_DTO_ERROR_MESSAGE + " -> Price is not a number.");
    }

    if (shoppingProduct["discount_price"] && isNaN(shoppingProduct["discount_price"])) {
        throw new Error(MAP_DOCUMENT_TO_SHOPPING_PRODUCT_DTO_ERROR_MESSAGE + " -> Discount price is not a number.");
    }

    requiredFields.forEach(
        (field) => {
            if (!shoppingProduct[field]) {
                throw new Error(MAP_DOCUMENT_TO_SHOPPING_PRODUCT_DTO_ERROR_MESSAGE + ` -> The field ${field} is null.`
                );
            }
        }
    )
}

/**
 * Maps a `ShoppingProductDTO` object to a raw product document.
 * 
 * @param shoppingProduct - The `ShoppingProductDTO` object from the client.
 * @returns The mapped raw product object.
 */
export function mapShoppingProductToDocument(shoppingProduct: ShoppingProductDTO): { product_id: string; name: string; category: string; brand: string; price: number; discount_price: number | null; ear_side: string; earphone_shape: string; color_text: string; color_hex: string; image_url: string; quantity: number; } {
    return {
        product_id: shoppingProduct.id,
        name: shoppingProduct.name,
        category: shoppingProduct.category,
        brand: shoppingProduct.brand,
        price: shoppingProduct.price,
        discount_price: shoppingProduct.discountPrice,
        ear_side: shoppingProduct.earSide,
        earphone_shape: shoppingProduct.earphoneShape,
        color_text: shoppingProduct.colorText,
        color_hex: shoppingProduct.colorHex,
        image_url: shoppingProduct.imageURL,
        quantity: shoppingProduct.quantity,
    };
}