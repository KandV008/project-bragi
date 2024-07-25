
export interface ProductDTO {
    id: string;
    name: string;
    brand: string;
    price: number;
    earSide: string;
    guarantee: boolean;
    color: string;
    imageURL: string;
    quantity: number;
}

export function mapDocumentToProductDTO(product: any): ProductDTO{
    return {
        id: product.product_id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        earSide: product.ear_side,
        guarantee: product.guarantee,
        color: product.color,
        imageURL: product.image_url,
        quantity: product.quantity,
    };
}