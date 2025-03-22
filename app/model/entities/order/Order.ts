import { mapDocumentToShoppingProductDTO, ShoppingProductDTO } from "../shoppingProductDTO/ShoppingProductDTO";
import { MAP_DOCUMENT_TO_ORDER_ERROR_MESSAGE } from "./OrderConfiguration";

/**
 * Interface representing an order entity.
 */
export interface OrderEntity {
    /**
     * Unique identifier and number of the order
     */
    id: number;

    /**
     * Date of creation of the order
     */
    creationDate: Date;

    /**
     * Id of the user
     */
    userId: string;

    /**
     * Name of the user
     */
    userName: string;

    /**
     * First name of the user
     */
    firstName: string

    /**
     * Phone number of the user
     */
    phoneNumber: string

    /**
     * E-mail of the user
     */
    email: string

    /**
     * Address of the user
     */
    address: string

    /**
     * Products inside the order
     */
    products: ShoppingProductDTO[],

    /**
     * Total price of the order
     */
    totalPrice: number,
}

/**
 * Maps a raw document object to the structured OrderEntity interface.
 *
 * @param order - The raw document object containing product data.
 * @returns The mapped OrderEntity object.
 * @throws Error if the order object is invalid or mapping fails.
 */
export function mapDocumentToOrder(order: any): OrderEntity {
    try {
        const requiredFields = [
            "_id",
            "user_id",
            "user_name",
            "first_name",
            "phone_number",
            "email",
            "address",
            "products",
            "total_price",
            "creation_date",
        ];

        if (!order || requiredFields.some(field => !order[field])) {
            throw new Error(MAP_DOCUMENT_TO_ORDER_ERROR_MESSAGE);
        }

        const creationDate = new Date(order.creation_date);

        if (isNaN(creationDate.getTime())) {
            throw new Error('Invalid creationDate format');
        }

        const mappedProducts = order.products.map(mapDocumentToShoppingProductDTO)

        return {
            id: order._id,
            creationDate: creationDate,
            userId: order.user_id,
            userName: order.user_name,
            firstName: order.first_name,
            phoneNumber: order.phone_number,
            email: order.email,
            address: order.address,
            products: mappedProducts,
            totalPrice: order.total_price
        }
    } catch (error) {
        throw new Error(MAP_DOCUMENT_TO_ORDER_ERROR_MESSAGE)
    }
}