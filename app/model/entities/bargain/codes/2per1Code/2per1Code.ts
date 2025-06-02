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

    // Filtrar solo los audífonos
    const validProducts = shoppingList
        .map((product, index) => ({ product, index })) // Guardamos el índice original
        .filter(({ product }) => product.category === Category.EARPHONE);

    if (validProducts.length < 2) {
        return { shoppingList, status: 1 }; // No hay suficientes productos para aplicar la oferta
    }

    const usedIndices = new Set<number>();

    for (let i = 0; i < validProducts.length; i++) {
        const { product: p1, index: idx1 } = validProducts[i];

        if (usedIndices.has(idx1)) continue; // Ya fue usado

        for (let j = i + 1; j < validProducts.length; j++) {
            const { product: p2, index: idx2 } = validProducts[j];

            if (usedIndices.has(idx2)) continue;

            if (validSimilarProduct(p1, p2)) {
                // Aplicamos descuento al segundo producto de la pareja
                shoppingList[idx2].discountPrice = 0;

                // Marcamos ambos como usados
                usedIndices.add(idx1);
                usedIndices.add(idx2);

                break; // pasamos al siguiente p1
            }
        }
    }

    return { shoppingList, status: 0 };
};

