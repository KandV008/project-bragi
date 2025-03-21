import { DISCOUNT_70_PERCENT, discountAction70Percent } from "./codes/70percentDiscount/70percentDiscount";

/**
 * Represents the result of applying a novelty action.
 */
export interface NoveltyActionProps {
    /** The updated product after applying the novelty. */
    product: any;
    /** Status of the novelty application: `0` for applied, `1` for not applied. */
    status: 0 /* applied */ | 1 /* not applied */;
}


/**
 * A mapping of novelty codes to their respective action functions.
 * The action functions define how a specific discount code modifies the products.
 */
export const noveltyCodeMap = {
    [DISCOUNT_70_PERCENT]: discountAction70Percent,
};
