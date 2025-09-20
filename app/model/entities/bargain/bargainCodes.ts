import { ShoppingProductDTO } from "../shoppingProductDTO/ShoppingProductDTO";
import { codeAction70PERC, DISCOUNT_70_PERCENT } from "./codes/70percentDiscount/70percentDiscount";

/**
 * Represents the result of applying a bargain action.
 */
export interface BargainActionProps {
    /** The updated shopping list after applying the bargain. */
    shoppingList: ShoppingProductDTO[];
    /** Status of the bargain application: `0` for applied, `1` for not applied. */
    status: 0 /* applied */ | 1 /* not applied */;
}

/**
 * A mapping of bargain codes to their respective action functions.
 * The action functions define how a specific discount code modifies the shopping list.
 */
export const bargainCodeMap = {
    [DISCOUNT_70_PERCENT]: codeAction70PERC,
};
