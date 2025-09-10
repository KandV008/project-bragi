import { mapDocumentToOrder } from "@/app/model/entities/order/Order";
import { MAP_DOCUMENT_TO_ORDER_ERROR_MESSAGE } from "@/app/model/entities/order/OrderConfiguration";
import { UNIT_TEST_TAG } from "@/tests/testConstants";

describe("Order Entity", async () => {
    it(`[${UNIT_TEST_TAG}] should map correctly a Order`, () => {
        const example = {
            _id: "123",
            order_number: "12345",
            status: "IN-PROCESS",
            creation_date: new Date().toISOString(),
            user_id: "456",
            user_name: "Pepo",
            user_first_name: "Pepez",
            phone_number: "123 456 789",
            email: "example@email.com",
            address: "C/ Example 1",
            audiometry_file: {
                buffer: Buffer.from([]),
                type: "image/png",
                name: "example-name"
            },
            user_dni: "123123123F",
            products: [
                {
                    product_id: "123",
                    name: "Ejemplo",
                    category: "EARPHONE",
                    brand: "PHONAK",
                    price: 1234,
                    ear_side: "left",
                    earphone_shape: "CIC",
                    color_text: "Blanco",
                    color_hex: "#ffffff",
                    image_url: "./no-image.png",
                    quantity: 1
                }
            ],
            bargain_applied: undefined,
            invalid_products: [],
            total_price: 0,
        }

        const result = mapDocumentToOrder(example)

        assert.deepEqual(result.id, example._id, "Ids are different")
        assert.deepEqual(result.creationDate.toISOString(), example.creation_date, "Dates are different")
        assert.deepEqual(result.userId, example.user_id, "User ids are different")
        assert.deepEqual(result.userName, example.user_name, "User names are different")
        assert.deepEqual(result.firstName, example.user_first_name, "First names are different")
        assert.deepEqual(result.phoneNumber, example.phone_number, "Phone numbers are different")
        assert.deepEqual(result.email, example.email, "Emails are different")
        assert.deepEqual(result.address, example.address, "Addresses are different")
        assert.lengthOf(result.products, example.products.length, "Products are different")
        assert.deepEqual(result.totalPrice, example.total_price, "Total prices are different")
    })

    it(`[${UNIT_TEST_TAG}] Should not map a document that is not a Order`, () => {
        const exampleNotOrder = {
            name: "Not Order",
            description: "I AM NOT A ORDER",
        };

        assert.throws(() => mapDocumentToOrder(exampleNotOrder), MAP_DOCUMENT_TO_ORDER_ERROR_MESSAGE);
    })
})