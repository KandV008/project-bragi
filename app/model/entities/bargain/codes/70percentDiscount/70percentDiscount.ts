import { BargainActionProps } from "../../bargainCodes";
import { Category } from "../../../product/enums/Category";
import { ShoppingProductDTO } from "../../../shoppingProductDTO/ShoppingProductDTO";

export const DISCOUNT_70_PERCENT = "70PERC";
export const DISCOUNT_PER_UNIT = 0.7

/**
 * Applies a 70% discount to a product based on its earSide property.
 * @param {any} shoppingList - The product object to apply the discount to.
 * @returns {BargainActionProps} - The updated shopping list with status code.
- Status 1 if the discount is not applied.
- Status 0 if the discount is applied.
 */
export const codeAction70PERC = (shoppingList: ShoppingProductDTO[]): BargainActionProps => {
    if (!shoppingList) {
        return { shoppingList, status: 1 };
    }

    const invalidEarphones = shoppingList
        .filter((product) => product.category === Category.ACCESSORY || product.earSide === "both");

    const validEarphones = shoppingList
        .filter((product) => product.category === Category.EARPHONE && product.earSide !== "both");

    console.warn("VALID-EARPHONES:", validEarphones)

    if (validEarphones.length < 1) {
        return { shoppingList, status: 1 };
    }

    const orderedEarphones = validEarphones.toSorted((a, b) => a.price - b.price)

    console.warn("ORDERED-EARPHONES:", orderedEarphones)

    orderedEarphones[0].discountPrice = orderedEarphones[0].price * DISCOUNT_PER_UNIT

    console.warn("RESULT:", orderedEarphones)

    return { shoppingList: [...invalidEarphones, ...orderedEarphones], status: 0 };
};