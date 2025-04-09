import { mockCollection, mockCursor } from "@/__mocks__/mongodb"
import { actionCreateOrder, getOrder, getOrders } from "./order"
import { ObjectId } from "mongodb"
import { addressName, audiometryFileName, emailName, phoneNumberName, userFirstName, userIdName, userNameName } from "@/app/config/JSONnames"
import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO"

const exampleUser = "user_2jjYF34Vt4fdqWEVYwVx8fQtNgz"

const createFakeOrders = (index: number) =>
    Array.from({ length: index }, (_, i) => (
        {
            _id: `${i}`,
            user_id: exampleUser,
            user_name: `User name ${i}`,
            user_first_name: `User name ${i}`,
            phone_number: "123123123",
            email: "example@email.com",
            address: "C/ Example Address",
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
            total_price: 0,
            creation_date: new Date().toISOString()
        }
    ))

vi.mock("mongodb")

describe("getOrders", () => {
    const startIndex = "0"
    const endIndex = "9"

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("should get 10 Orders when the start index is 0 and end index is 9", async () => {
        const numOrders = 10
        const fakeOrders = createFakeOrders(numOrders)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getOrders(startIndex, endIndex)

        expect(result).toHaveLength(numOrders)
    })

    it("should get 0 Orders when there is any order", async () => {
        const numOrders = 0
        const fakeOrders = createFakeOrders(numOrders)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getOrders(startIndex, endIndex)

        expect(result).toHaveLength(numOrders)
    })

    it("should throw an error when the orders are not correct", async () => {
        const invalidOrder = [{ text: "Not valid" }]

        mockCursor.toArray.mockResolvedValue(invalidOrder);

        await expect(getOrders(startIndex, endIndex)).rejects.toThrow(Error);
    })
})

describe("getOrder", () => {
    const fakeObjectId = new ObjectId().toString();
    const fakeOrder = {
        _id: fakeObjectId,
        user_id: "user_xxx",
        user_name: "Test User",
        user_first_name: "Test",
        phone_number: "123456789",
        email: "test@example.com",
        address: "123 Test St",
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
        total_price: 0,
        creation_date: new Date().toISOString(),
    };

    it("should get an Order", async () => {
        mockCollection.findOne.mockResolvedValue(fakeOrder)

        const result = await getOrder(fakeOrder._id)

        assert.isObject(result, "It doesn't return an object")
        assert.equal(result.id, fakeOrder._id, "It is not the correct order")
    })

    it("should throw an Error when the order doesn't exist", async () => {
        mockCollection.findOne.mockResolvedValue([]);

        await expect(getOrder(fakeOrder._id)).rejects.toThrow(Error);
    })
})

describe("actionCreateOrder", () => {
    const exampleFormData = {
        [userIdName]: "Example Title",
        [userNameName]: "Example Description",
        [userFirstName]: "/no-image.png",
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
            earSide: "left",
            earphoneShape: "CIC",
            colorText: "Blanco",
            colorHex: "#ffffff",
            imageURL: "./no-image.png",
            quantity: 1
        }
    ]

    it("should create a new Order Entity", async () => {
        mockCollection.insertOne.mockResolvedValue([])

        const result = await actionCreateOrder(formData, exampleProducts)

        assert.equal(result, 0, "Order have not been created")
    })

    it("should not create a new Order Entity", async () => {
        mockCollection.insertOne.mockRejectedValue(new Error("Database error"))

        const result = await actionCreateOrder(formData, exampleProducts)

        assert.equal(result, 1, "Order have been created")
    })

    it("should throw an Error when the formData is invalid", async () => {
        const invalidFormData = new FormData()

        await expect(actionCreateOrder(invalidFormData, exampleProducts)).rejects.toThrow(Error)
    })
})
