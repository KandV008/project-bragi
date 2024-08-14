import { ProductEntity } from "../Product";

export enum Brand {
    PHONAK = "PHONAK",
    STARKEY = "STARKEY",
}

export interface BrandQuantity {
    PHONAK: BrandQuantityProps,
    STARKEY: BrandQuantityProps,
}

interface BrandQuantityProps {
    quantity: number;
    type: Brand
}

export function checkBrandType(products: ProductEntity[]): BrandQuantity {
    const counts: BrandQuantity = {
        PHONAK: { quantity: 0, type: Brand.PHONAK },
        STARKEY: { quantity: 0, type: Brand.STARKEY },
    };

    products.forEach((product) => {
        const type = product.brand;
        Object.values(counts).forEach((x) => {
            if (type === x.type) x.quantity += 1;
        });
    });

    return counts;
}