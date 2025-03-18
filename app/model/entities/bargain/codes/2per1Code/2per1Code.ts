import { ProductDTO } from "../../../DTOs/ProductDTO";
import { Category } from "../../../product/enums/Category";
import { BargainActionProps } from "../../bargainCodes";

export const CODE_2PER1 = "2POR1";

/**
 * Checks if the product name contains the substring "CROS".
 * @param {ProductDTO} product - The product to check.
 * @returns {boolean} - Returns true if the product name contains "CROS", otherwise false.
 */
function checkCROS(product: ProductDTO): boolean {
    return product.name.includes("CROS");
}

/**
 * Checks if the second product has the opposite ear side compared to the first product.
 * @param {ProductDTO} product1 - The first product.
 * @param {ProductDTO} product2 - The second product.
 * @returns {boolean} - Returns true if the second product's ear side matches the target ear side.
 */
function checkEarSide(product1: ProductDTO, product2: ProductDTO): boolean {
    let earSideTarget: string;

    if (product1.earSide === "left") {
        earSideTarget = "right";
    } else if (product1.earSide === "right") {
        earSideTarget = "left";
    } else {
        earSideTarget = "both";
    }

    return product2.earSide === earSideTarget;
}

/**
 * Determines if two products are similar and valid for a bargain action.
 * @param {ProductDTO} product1 - The first product.
 * @param {ProductDTO} product2 - The second product.
 * @returns {boolean} - Returns true if the products are valid similar products, otherwise false.
 */
function validSimilarProduct(product1: ProductDTO, product2: ProductDTO): boolean {
    if (product2.category === Category.ACCESSORY) {
        return false;
    }

    if (product1.brand !== product2.brand) {
        return false;
    }

    if (!checkCROS(product1) && !checkCROS(product2) && product1.name !== product2.name) {
        return false;
    }

    if (!checkEarSide(product1, product2)) {
        return false;
    }

    return true;
}

/**
 * Applies the "2 for 1" bargain action on a shopping list.
 * @param {ProductDTO[]} shoppingList - The list of products in the shopping cart.
 * @returns {BargainActionProps} - The updated shopping list with a status code (0 for success, 1 for failure).
 */
export const codeAction2PER1 = (shoppingList: ProductDTO[]): BargainActionProps => {
    if (!shoppingList) {
        return { shoppingList, status: 1 };
    }

    const product1: ProductDTO | undefined = shoppingList.find((e) => e.category === Category.EARPHONE);

    if (!product1) {
        return { shoppingList, status: 1 };
    }

    const indexProduct = shoppingList.findIndex((product2, index) => {
        if (validSimilarProduct(product1, product2)) {
            return index;
        }
    });

    if (indexProduct === -1) {
        return { shoppingList, status: 1 };
    }

    shoppingList[indexProduct].price = 0;

    return { shoppingList, status: 0 };
};
