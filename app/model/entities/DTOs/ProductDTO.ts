/**
 * Data Transfer Object (DTO) representing a product.
 */
export interface ProductDTO {
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
    /** Indicates if the product comes with a guarantee */
    guarantee: boolean;
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
 * Maps a raw product document to a `ProductDTO` object.
 * 
 * @param product - The raw product object from the database or API response.
 * @returns The mapped `ProductDTO` object.
 */
export function mapDocumentToProductDTO(product: any): ProductDTO {
    return {
        id: product.product_id,
        name: product.name,
        category: product.category,
        brand: product.brand,
        price: product.price,
        earSide: product.ear_side,
        guarantee: product.guarantee,
        colorText: product.color_text,
        colorHex: product.color_hex,
        imageURL: product.image_url,
        quantity: product.quantity,
    };
}
