import { ProductEntity } from "../Product";

/**
 * Enum representing different earphone brands.
 */
export enum Brand {
    PHONAK = "PHONAK",
    STARKEY = "STARKEY",
    INTERTON = "INTERTON",
    SIGNIA = "SIGNIA"
}

/**
 * Interface representing the quantity of products for each brand.
 */
export interface BrandQuantity {
    /**
     * Quantity details for PHONAK brand.
     */
    PHONAK: BrandQuantityProps;

    /**
     * Quantity details for STARKEY brand.
     */
    STARKEY: BrandQuantityProps;

    /**
     * Quantity details for INTERTON brand.
     */
    INTERTON: BrandQuantityProps;

    /**
     * Quantity details for SIGNIA brand.
     */
    SIGNIA: BrandQuantityProps;
}

/**
 * Interface representing the structure of brand quantity properties.
 */
interface BrandQuantityProps {
    /**
     * The total count of products for a specific brand.
     */
    quantity: number;

    /**
     * The brand type associated with the count.
     */
    type: Brand;
}

/**
 * Counts the number of products belonging to each brand in a given product list.
 *
 * @param products - The array of products to analyze.
 * @returns An object containing the quantity of products for each brand.
 */
export function checkBrandType(products: ProductEntity[]): BrandQuantity {
    const counts: BrandQuantity = {
        PHONAK: { quantity: 0, type: Brand.PHONAK },
        STARKEY: { quantity: 0, type: Brand.STARKEY },
        INTERTON: { quantity: 0, type: Brand.PHONAK },
        SIGNIA: { quantity: 0, type: Brand.STARKEY },
    };

    products.forEach((product) => {
        const type = product.brand;
        Object.values(counts).forEach((x) => {
            if (type === x.type) x.quantity += 1;
        });
    });

    return counts;
}
