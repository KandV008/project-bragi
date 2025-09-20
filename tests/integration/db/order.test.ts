import { mockCollection, mockCursor } from "@/__mocks__/mongodb"
import { ObjectId } from "mongodb"
import { addressName, audiometryFileName, emailName, phoneNumberName, userDNIName, userFirstName, userIdName, userNameName } from "@/app/config/JSONnames"
import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO"
import { exampleUser } from "@/__mocks__/@clerk/nextjs/server"
import { INTEGRATION_TEST_TAG } from "@/tests/testConstants"
import { METHOD_GET_ORDERS, METHOD_GET_ORDER, METHOD_ACTION_CREATE_ORDER } from "@/db/dbConfig"
import { getOrders, getOrder, actionCreateOrder } from "@/db/order/order"

const createFakeOrders = (index: number) =>
    Array.from({ length: index }, (_, i) => (
        {
            _id: `${i}`,
            order_number: `${i}`,
            status: "IN-PROCESS",
            user_id: exampleUser,
            user_name: `User name ${i}`,
            user_first_name: `User name ${i}`,
            user_dni: "123123123F",
            phone_number: "123123123",
            email: "example@email.com",
            address: "C/ Example Address",
            audiometry_file: {
                buffer: Buffer.from([]),
                type: "image/png",
                name: `example-name-${i}`
            },
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
            creation_date: new Date().toISOString()
        }
    ))

vi.mock("@clerk/nextjs/server",);
vi.mock("mongodb")

describe(METHOD_GET_ORDERS, () => {
    const startIndex = "0"
    const endIndex = "9"

    beforeEach(() => {
        vi.clearAllMocks();
    });

    vi.mock("@clerk/nextjs/server", async () => {
        const actual = await vi.importActual<any>("@clerk/nextjs/server");
        return {
            ...actual,
            auth: () => ({ userId: exampleUser }),
        };
    });

    it(`[${INTEGRATION_TEST_TAG}] should get 10 Orders when the start index is 0 and end index is 9`, async () => {
        const numOrders = 10
        const fakeOrders = createFakeOrders(numOrders)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getOrders(startIndex, endIndex)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 0 Orders when there is any order`, async () => {
        const numOrders = 0
        const fakeOrders = createFakeOrders(numOrders)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getOrders(startIndex, endIndex)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an error when the orders are not correct`, async () => {
        const invalidOrder = [{ text: "Not valid" }]

        mockCursor.toArray.mockResolvedValue(invalidOrder);

        await expect(getOrders(startIndex, endIndex)).rejects.toThrow(Error);
    })
})

describe(METHOD_GET_ORDER, () => {
    const fakeObjectId = new ObjectId().toString();
    const fakeOrder = {
        _id: fakeObjectId,
        order_number: "12345",
        status: "IN-PROCESS",
        user_id: "user_xxx",
        user_name: "Test User",
        user_first_name: "Test",
        user_dni: "123123123F",
        phone_number: "123456789",
        email: "test@example.com",
        address: "123 Test St",
        audiometry_file: {
            buffer: Buffer.from([]),
            type: "image/png",
            name: "example-name"
        },
        products: [{
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
        }],
        bargain_applied: undefined,
        invalid_products: [],
        total_price: 0,
        creation_date: new Date().toISOString(),
    };

    it(`[${INTEGRATION_TEST_TAG}] should get an Order`, async () => {
        mockCollection.findOne.mockResolvedValue(fakeOrder)

        const result = await getOrder(fakeOrder._id)

        assert.isObject(result, "It doesn't return an object")
        assert.equal(result.id, fakeOrder._id, "It is not the correct order")
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the order doesn't exist`, async () => {
        mockCollection.findOne.mockResolvedValue([]);

        await expect(getOrder(fakeOrder._id)).rejects.toThrow(Error);
    })
})

describe.skip(METHOD_ACTION_CREATE_ORDER, () => {
    const exampleFormData = {
        [userIdName]: "Example Title",
        [userNameName]: "Example Description",
        [userFirstName]: "/no-image.png",
        [userDNIName]: "123123123F",
        [phoneNumberName]: "/no-image.png",
        [emailName]: "/no-image.png",
        [addressName]: "/no-image.png",
    };

    const exampleValue = new File(["content"], "example.txt", { type: "text/plain" });

    const formData = new FormData();
    Object.entries(exampleFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });
    formData.append(audiometryFileName, exampleValue);

    const exampleProducts: ShoppingProductDTO[] = [
        {
            id: "123",
            name: "Ejemplo",
            category: "EARPHONE",
            brand: "PHONAK",
            price: 1234,
            discountPrice: 0,
            earSide: "left",
            earphoneShape: "CIC",
            colorText: "Blanco",
            colorHex: "#ffffff",
            imageURL: "./no-image.png",
            quantity: 1
        }
    ]

    it(`[${INTEGRATION_TEST_TAG}] should create a new Order Entity`, async () => {
        mockCollection.insertOne.mockResolvedValue({
            insertedId: {
                toString: () => "asdasdasd"
            }
        })

        const { status, id, orderNumber } = await actionCreateOrder(formData, exampleProducts)

        assert.equal(status, 0, "Order have not been created")
        assert.isNotNull(id, "Invalid id associated to order")
    })

    it(`[${INTEGRATION_TEST_TAG}] should not create a new Order Entity`, async () => {
        mockCollection.insertOne.mockRejectedValue(new Error("Database error"))

        const result = await actionCreateOrder(formData, exampleProducts)

        assert.equal(result.status, 1, "Order have been created")
        assert.isNull(result.id, "Valid id associated to order")
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the formData is invalid`, async () => {
        const invalidFormData = new FormData()

        await expect(actionCreateOrder(invalidFormData, exampleProducts)).rejects.toThrow(Error)
    })
})
