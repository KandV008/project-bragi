import { NoveltyActionProps } from "../../noveltyCodes";

export const DISCOUNT_70_PERCENT = "70PERC";
export const DISCOUNT_PER_UNIT = 0.7

/**
 * Applies a 70% discount to a product based on its earSide property.
 *
 * @param {any} product - The product object to apply the discount to.
 * @returns {NoveltyActionProps} - The updated product object and a status code.
 *    - Status 1 if the discount is not applied (earSide is 'both' or not present).
 *    - Status 0 if the discount is applied.
 */
export const discountAction70Percent = (product: any): NoveltyActionProps => {

    if (!product.earSide || product.earSide === "both") {
        return { product, status: 1 }
    }

    product.discountPrice = product.price * DISCOUNT_PER_UNIT

    return { product, status: 0 }
}
