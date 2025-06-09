import { ShoppingProductDTO } from "../../../shoppingProductDTO/ShoppingProductDTO";
import { Category } from "../../../product/enums/Category";
import { BargainActionProps } from "../../bargainCodes";

export const CODE_2PER1 = "2POR1";

/**
 * Checks if the product name contains the substring "CROS".
 * @param {ShoppingProductDTO} product - The product to check.
 * @returns {boolean} - Returns true if the product name contains "CROS", otherwise false.
 */
function checkCROS(product: ShoppingProductDTO): boolean {
    return product.name.includes("CROS");
}

/**
 * Checks if the second product has the opposite ear side compared to the first product.
 * @param {ShoppingProductDTO} product1 - The first product.
 * @param {ShoppingProductDTO} product2 - The second product.
 * @returns {boolean} - Returns true if the second product's ear side matches the target ear side.
 */
function checkEarSide(product1: ShoppingProductDTO, product2: ShoppingProductDTO): boolean {
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
 * @param {ShoppingProductDTO} product1 - The first product.
 * @param {ShoppingProductDTO} product2 - The second product.
 * @returns {boolean} - Returns true if the products are valid similar products, otherwise false.
 */
function validSimilarProduct(product1: ShoppingProductDTO, product2: ShoppingProductDTO): boolean {
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
 * @param {ShoppingProductDTO[]} shoppingList - The list of products in the shopping cart.
 * @returns {BargainActionProps} - The updated shopping list with a status code (0 for success, 1 for failure).
 */
export const codeAction2PER1 = (shoppingList: ShoppingProductDTO[]): BargainActionProps => {
    if (!shoppingList) {
        return { shoppingList, status: 1 };
    }

    const invalidEarphones = shoppingList
        .filter((product) => product.category === Category.ACCESSORY || product.earSide === "both");


    const validEarphones = shoppingList
        .filter((product) => product.category === Category.EARPHONE && product.earSide !== "both");

    console.warn("VALID-EARPHONES:", validEarphones)

    if (validEarphones.length < 2) {
        return { shoppingList, status: 1 };
    }

    const orderedEarphones = validEarphones.toSorted((a, b) => a.price - b.price)

    console.warn("ORDERED-EARPHONES:", orderedEarphones)

    let isDone = false;

    for (let indexA = 0; indexA < orderedEarphones.length; indexA++) {
        let elementA = orderedEarphones[indexA]

        for (let indexB = indexA + 1; indexB < orderedEarphones.length; indexB++) {
            let elementB = orderedEarphones[indexB]

            if (validSimilarProduct(elementA, elementB)){

                if (elementA.quantity === 1){
                    elementA.discountPrice = 0;
                } else {
                    const newElementA = JSON.parse(JSON.stringify(elementA));
                    newElementA.discountPrice = 0;
                    newElementA.quantity = 1;
                    orderedEarphones.push(newElementA)
                    elementA.quantity -= 1
                }

                isDone = true;
                break;
            }
        }

        if (isDone){
            break;
        }        
    }

    console.warn("RESULT:", orderedEarphones)

    return { shoppingList: [...invalidEarphones, ...orderedEarphones], status: isDone ? 0 : 1 };
};

