import { ProductDTO } from "../shoppingProductDTO/ShoppingProductDTO";
import { CODE_2PER1, codeAction2PER1 } from "./codes/2per1Code/2per1Code";

/**
 * Represents the result of applying a bargain action.
 */
export interface BargainActionProps {
    /** The updated shopping list after applying the bargain. */
    shoppingList: ProductDTO[];
    /** Status of the bargain application: `0` for applied, `1` for not applied. */
    status: 0 /* applied */ | 1 /* not applied */;
}

/**
 * A mapping of bargain codes to their respective action functions.
 * The action functions define how a specific discount code modifies the shopping list.
 */
export const bargainCodeMap = {
    [CODE_2PER1]: codeAction2PER1,
};
