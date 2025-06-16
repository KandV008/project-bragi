import { sql } from "@/__mocks__/@vercel/postgres";
import { exampleUser } from "@/__mocks__/@clerk/nextjs/server";
import { randomUUID } from "crypto";
import { Logger } from "@/app/config/Logger";
import { addProductToShoppingList, decrementProductInShoppingList, deleteProductInShoppingList, getShoppingList, incrementProductInShoppingList } from "./shoppingList";
import { brandName, categoryName, imageURLName, nameName, priceName, productIdName } from "@/app/config/JSONnames";
import { METHOD_ADD_PRODUCT_TO_SHOPPING_LIST, METHOD_DECREMENT_PRODUCT_IN_SHOPPING_LIST, METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST, METHOD_GET_SHOPPING_LIST, METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST } from "../dbConfig";
import { INTEGRATION_TEST_TAG } from "@/tests/testConstants";

const exampleProduct = randomUUID()

vi.mock("@vercel/postgres");
vi.mock("@clerk/nextjs/server");

const generateMockRow = (index: number) => ({
    product_id: randomUUID(),
    user_id: exampleUser,
    color_text: "White Example",
    color_hex: "#c2b280",
    ear_side: "left",
    earphone_shape: "BTE",
    quantity: 1,
    name: `Example Title ${index}`,
    category: (index < 3) ? "EARPHONE" : "ACCESSORY",
    brand: "PHONAK",
    price: 1234,
    image_url: "/no-image.png",
});

describe.skip(METHOD_GET_SHOPPING_LIST, () => {

    it(`[${INTEGRATION_TEST_TAG}] should get all Products in shopping list`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValueOnce({
                rows: Array.from({ length: 5 }, (_, i) => generateMockRow(i))
            })
        });

        const result = await getShoppingList()

        assert.lengthOf(result, 5, "It is not the correct amount of Products in shopping list")
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 0 Products in shopping list`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValueOnce({
                rows: []
            })
        });

        const result = await getShoppingList()

        assert.lengthOf(result, 0, "It is not the correct amount of Products in Favorites")
    })

    it(`[${INTEGRATION_TEST_TAG}] throw an Error when the Product are not correct`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockRejectedValue(new Error("Database error")),
        });

        await expect(getShoppingList()).rejects.toThrow(Error);
    })
})

describe.skip(METHOD_DELETE_PRODUCT_IN_SHOPPING_LIST, () => {
    it(`[${INTEGRATION_TEST_TAG}] should delete a Product from all shopping list`, async () => {
        const endFunctionMock = vi.fn();
        Logger.endFunction = endFunctionMock;
    
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValueOnce({
                rowCount: 1,
                rows: [
                    { count: 1 },
                ]
            }),
        });

        await deleteProductInShoppingList(exampleProduct)

        expect(endFunctionMock).toHaveBeenCalled();
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the database doesn't work`, async () => {
        const mockQuery = vi.fn().mockRejectedValue(new Error("Database error"))

        vi.mocked(sql.connect).mockResolvedValue({
            query: mockQuery,
        }); 

        await expect(deleteProductInShoppingList(exampleProduct)).rejects.toThrow(Error);
    })
})

describe.skip(METHOD_ADD_PRODUCT_TO_SHOPPING_LIST, () => {
    const exampleFormData = {
        [productIdName]: exampleProduct,
        [nameName]: exampleUser,
        [categoryName]: "ACCESSORY",
        [brandName]: "PHONAK",
        [priceName]: "1234",
        [imageURLName]: "/no-image.png"
    };

    const formData = new FormData();
    Object.entries(exampleFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it(`[${INTEGRATION_TEST_TAG}] should add the product to shopping list`, async () => {

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValueOnce({
                rowCount: 1,
                rows: []
            }),
        });

        await expect(addProductToShoppingList(formData)).resolves.not.toThrow(Error);
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the database doesn't work`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockRejectedValue(new Error("Database error")),
        }); 

        await expect(addProductToShoppingList(formData)).rejects.toThrow(Error);
    })
})

describe.skip(METHOD_INCREMENT_PRODUCT_IN_SHOPPING_LIST, () => {
    const exampleFormData = {
        [productIdName]: exampleProduct,
        [exampleUser]: exampleUser,
    };

    const formData = new FormData();
    Object.entries(exampleFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it.skip(`[${INTEGRATION_TEST_TAG}] should increase in one the quantity of the product in the shopping list`, async () => {
        const endFunctionMock = vi.fn();
        Logger.endFunction = endFunctionMock;
    
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValueOnce({
                rowCount: 1,
                rows: []
            }),
        });

        await incrementProductInShoppingList(formData)

        expect(endFunctionMock).toHaveBeenCalledTimes(1);
    })

    it.skip(`[${INTEGRATION_TEST_TAG}] should throw an Error when the formData is invalid`, async () => {
        const mockQuery = vi.fn().mockRejectedValue(new Error("Database error"))

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: mockQuery,
        });

        await expect(incrementProductInShoppingList(formData)).rejects.toThrow(Error);
        expect(mockQuery).toHaveBeenCalledTimes(1);
    })
})

describe.skip(METHOD_DECREMENT_PRODUCT_IN_SHOPPING_LIST, () => {
    const exampleFormData = {
        [productIdName]: exampleProduct,
        [exampleUser]: exampleUser,
    };

    const formData = new FormData();
    Object.entries(exampleFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it.skip(`[${INTEGRATION_TEST_TAG}] should decrease in one the quantity of the product in the shopping list`, async () => {
        const endFunctionMock = vi.fn();
        Logger.endFunction = endFunctionMock;
    
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValueOnce({
                rowCount: 1,
                rows: []
            }),
        });

        await decrementProductInShoppingList(formData)

        expect(endFunctionMock).toHaveBeenCalledTimes(1);
    })

    it.skip(`[${INTEGRATION_TEST_TAG}] should throw an Error when the formData is invalid`, async () => {
        const mockQuery = vi.fn().mockRejectedValue(new Error("Database error"))

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: mockQuery,
        });

        await expect(decrementProductInShoppingList(formData)).rejects.toThrow(Error);
        expect(mockQuery).toHaveBeenCalledTimes(1);
    })
})