vi.mock("../favorites/favorites", () => ({
    deleteProductInFavorites: vi.fn()
}));

vi.mock("../shoppingList/shoppingList", () => ({
    deleteProductInShoppingList: vi.fn()
}));

vi.mock("@vercel/postgres")

import { mockCollection, mockCursor } from "@/__mocks__/mongodb"
import { METHOD_ACTION_CREATE_PRODUCT, METHOD_ACTION_DELETE_PRODUCT, METHOD_ACTION_UPDATE_PRODUCT, METHOD_GET_ALL_PRODUCTS, METHOD_GET_FILTER_INFORMATION, METHOD_GET_LATEST_PRODUCTS, METHOD_GET_PRODUCT, METHOD_GET_PRODUCT_BY_CATEGORY, METHOD_GET_PRODUCTS_BY_IDS, METHOD_GET_RELATED_PRODUCTS, METHOD_SEARCH_PRODUCTS } from "../dbConfig"
import { actionCreateProduct, actionDeleteProduct, actionUpdateProduct, getAllProducts, getFilterInformation, getLatestProducts, getProduct, getProductsByCategory, getProductsByIds, getRelatedProducts, searchProducts } from "./product"
import { ObjectId } from "mongodb"
import { brandName, categoryName, imageURLName, includeName, nameName, priceName, productDescriptionName } from "@/app/config/JSONnames"
import { INTEGRATION_TEST_TAG } from "@/tests/testConstants";

const createFakeProducts = (index: number, category: string) =>
    Array.from({ length: index }, (_, i) => (
        {
            _id: `${i}`,
            name: `Example Product ${i}`,
            category: category,
            price: 1234,
            image_URL: "/no-image.png",
            description: "Lore ipsum...",
            colors: [
                {
                    name: "Example White",
                    hex: "#ffffff"
                },
            ],
            include: [
                "Example Include",
            ],
            adaptation_range: "MILD-SEVERE",
            dust_water_resitance: true,
            brand: "PHONAK",
            earphone_shape: "RIC",
            degree_of_loss: "MILD-SEVERE",
            uses: [
                "CHAT"
            ]
        }
    ))

vi.mock("mongodb")

describe(METHOD_GET_ALL_PRODUCTS, () => {
    const startIndex = "0"
    const endIndex = "9"
    const fakeCategory = "EARPHONE"

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it(`[${INTEGRATION_TEST_TAG}] should get 10 Products when the start index is 0 and end index is 9`, async () => {
        const numOrders = 10
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getAllProducts(startIndex, endIndex)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 0 Products when there is any product`, async () => {
        const numOrders = 0
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getAllProducts(startIndex, endIndex)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an error when the products are not correct`, async () => {
        const invalidOrder = [{ text: "Not valid" }]

        mockCursor.toArray.mockResolvedValue(invalidOrder);

        await expect(getAllProducts(startIndex, endIndex)).rejects.toThrow(Error);
    })
})

describe(METHOD_GET_PRODUCT_BY_CATEGORY, () => {
    const startIndex = "0"
    const endIndex = "9"
    const fakeCategory = "EARPHONE"

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it(`[${INTEGRATION_TEST_TAG}] should get 10 EARPHONE Products when the start index is 0 and end index is 9`, async () => {
        const numOrders = 10
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getProductsByCategory(fakeCategory, startIndex, endIndex, null)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 10 ACCESSORY Products when the start index is 0 and end index is 9`, async () => {
        const numOrders = 10
        const fakeCategory = "ACCESSORY"
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getProductsByCategory(fakeCategory, startIndex, endIndex, null)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 0 Products when there is any product with that category`, async () => {
        const numOrders = 0
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getProductsByCategory(fakeCategory, startIndex, endIndex, null)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an error when the products are not correct`, async () => {
        const invalidOrder = [{ text: "Not valid" }]

        mockCursor.toArray.mockResolvedValue(invalidOrder);

        await expect(getProductsByCategory(fakeCategory, startIndex, endIndex, null)).rejects.toThrow(Error);
    })
})

describe(METHOD_GET_LATEST_PRODUCTS, () => {
    const fakeCategory = "EARPHONE"

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it(`[${INTEGRATION_TEST_TAG}] should get the 4 last products`, async () => {
        const numOrders = 4
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getLatestProducts()

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 0 Products when there is any product`, async () => {
        const numOrders = 0
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getLatestProducts()

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an error when the products are not correct`, async () => {
        const invalidOrder = [{ text: "Not valid" }]

        mockCursor.toArray.mockResolvedValue(invalidOrder);

        await expect(getLatestProducts()).rejects.toThrow(Error);
    })
})

describe(METHOD_GET_RELATED_PRODUCTS, () => {
    const fakeCategory = "EARPHONE"
    const idToAvoid = new ObjectId().toString();
    const brandToCheck = "PHONAK"
    const price = "1234"

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it(`[${INTEGRATION_TEST_TAG}] should get 4 related products`, async () => {
        const numOrders = 4
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getRelatedProducts(idToAvoid, brandToCheck, price)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 0 related products when there is no product related`, async () => {
        const numOrders = 0
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getRelatedProducts(idToAvoid, brandToCheck, price)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an error when the products are not correct`, async () => {
        const invalidOrder = [{ text: "Not valid" }]

        mockCursor.toArray.mockResolvedValue(invalidOrder);

        await expect(getRelatedProducts(idToAvoid, brandToCheck, price)).rejects.toThrow(Error);
    })
})

describe(METHOD_GET_PRODUCTS_BY_IDS, () => {
    const numElements = 5
    const fakeCategory = "EARPHONE"
    const productIds = Array.from({ length: numElements }, (_, i) => (
        new ObjectId().toString()
    ))

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it(`[${INTEGRATION_TEST_TAG}] should get 5 products using only the ids`, async () => {
        const numOrders = 5
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getProductsByIds(productIds)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 0 related products when there is no product related`, async () => {
        const numOrders = 0
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)
        const productIds: string[] = []

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await getProductsByIds(productIds)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an error when the products are not correct`, async () => {
        const invalidOrder = [{ text: "Not valid" }]

        mockCursor.toArray.mockResolvedValue(invalidOrder);

        await expect(getProductsByIds(productIds)).rejects.toThrow(Error);
    })
})

describe(METHOD_SEARCH_PRODUCTS, () => {
    const startIndex = "0"
    const endIndex = "9"
    const fakeCategory = "EARPHONE"
    const keyword = "Example"

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it(`[${INTEGRATION_TEST_TAG}] should get 5 products using only the ids`, async () => {
        const numOrders = 5
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await searchProducts(keyword, startIndex, endIndex, null)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 0 related products when there is no product related`, async () => {
        const numOrders = 0
        const fakeOrders = createFakeProducts(numOrders, fakeCategory)

        mockCursor.toArray.mockResolvedValue(fakeOrders);

        const result = await searchProducts(keyword, startIndex, endIndex, null)

        expect(result).toHaveLength(numOrders)
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an error when the products are not correct`, async () => {
        const invalidOrder = [{ text: "Not valid" }]

        mockCursor.toArray.mockResolvedValue(invalidOrder);

        await expect(searchProducts(keyword, startIndex, endIndex, null)).rejects.toThrow(Error);
    })
})

describe(METHOD_GET_PRODUCT, () => {
    const fakeObjectId = new ObjectId().toString();
    const fakeCategory = "EARPHONE"
    const fakeProduct = {
        _id: fakeObjectId,
        name: "Example Product",
        category: fakeCategory,
        price: 1234,
        image_URL: "/no-image.png",
        description: "Lore ipsum...",
        colors: [
            {
                name: "Example White",
                hex: "#ffffff"
            },
        ],
        include: [
            "Example Include",
        ],
        adaptation_range: "MILD-SEVERE",
        dust_water_resitance: true,
        brand: "PHONAK",
        earphone_shape: "RIC",
        degree_of_loss: "MILD-SEVERE",
        uses: [
            "CHAT"
        ]
    };

    it(`[${INTEGRATION_TEST_TAG}] should get a Product`, async () => {
        mockCollection.findOne.mockResolvedValue(fakeProduct)

        const result = await getProduct(fakeProduct._id)

        assert.isObject(result, "It doesn't return an object")
        assert.equal(result?.id, fakeProduct._id, "It is not the correct product")
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the product doesn't exist`, async () => {
        mockCollection.findOne.mockResolvedValue([]);

        await expect(getProduct(fakeProduct._id)).rejects.toThrow(Error);
    })
})

describe(METHOD_GET_FILTER_INFORMATION, () => {
    const fakeCategory = "EARPHONE"
    const fakeElemetToFilter = "brand"
    const fakeAttribute = "PHONAK"
    const fakeCount = 3

    it(`[${INTEGRATION_TEST_TAG}] should get a Register of filter`, async () => {
        mockCursor.toArray.mockResolvedValue([{ _id: fakeAttribute, count: fakeCount }])

        const result = await getFilterInformation(fakeCategory, fakeElemetToFilter)

        expect(result).toEqual({
            brand: {
                [fakeAttribute]: fakeCount,
            },
        });
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the filter doesn't exist`, async () => {
        mockCollection.aggregate.mockResolvedValue([]);

        await expect(getFilterInformation(fakeCategory, fakeElemetToFilter)).rejects.toThrow(Error);
    })
})

describe(METHOD_ACTION_CREATE_PRODUCT, () => {
    const exampleFormData = {
        [nameName]: "Example Product",
        [categoryName]: "ACCESSORY",
        [brandName]: "EXAMPLE",
        [priceName]: "1234",
        [imageURLName]: "./no-image",
        [productDescriptionName]: "Lore ipsum...",
        [includeName]: "1",
        [includeName + "-1"]: "Example 1",
    };

    const formData = new FormData();
    Object.entries(exampleFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it(`[${INTEGRATION_TEST_TAG}] should create a new Product Entity`, async () => {
        mockCollection.insertOne.mockResolvedValue([])

        const result = await actionCreateProduct(formData)

        assert.equal(result, 0, "Product have not been created")
    })

    it(`[${INTEGRATION_TEST_TAG}] should not create a new Product Entity`, async () => {
        mockCollection.insertOne.mockRejectedValue(new Error("Database error"))

        const result = await actionCreateProduct(formData)

        assert.equal(result, 1, "Product have been created")
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the formData is invalid`, async () => {
        const invalidFormData = new FormData()

        await expect(actionCreateProduct(invalidFormData)).rejects.toThrow(Error)
    })
})

describe(METHOD_ACTION_UPDATE_PRODUCT, () => {
    const fakeObjectId = new ObjectId().toString();
    const exampleFormData = {
        id: fakeObjectId,
        [nameName]: "Example Product",
        [categoryName]: "ACCESSORY",
        [brandName]: "EXAMPLE",
        [priceName]: "1234",
        [imageURLName]: "./no-image",
        [productDescriptionName]: "Lore ipsum...",
        [includeName]: "1",
        [includeName + "-1"]: "Example 1",
    };

    const formData = new FormData();
    Object.entries(exampleFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it(`[${INTEGRATION_TEST_TAG}] should update a Product Entity`, async () => {
        mockCursor.matchedCount = 1

        const result = await actionUpdateProduct(formData)

        assert.equal(result, 0, "Product have not been updated")
    })

    it(`[${INTEGRATION_TEST_TAG}] should not updated a Product Entity`, async () => {
        mockCursor.matchedCount = 0

        const result = await actionUpdateProduct(formData)

        assert.equal(result, 1, "Product have been updated")
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the formData is invalid`, async () => {
        const invalidFormData = new FormData()

        await expect(actionUpdateProduct(invalidFormData)).rejects.toThrow(Error)
    })
})

describe.skip(METHOD_ACTION_DELETE_PRODUCT, () => {
    const fakeObjectId = new ObjectId().toString();

    it(`[${INTEGRATION_TEST_TAG}] should delete a Product Entity and all it apperances in shopping lists and favorites`, async () => {
        mockCursor.deletedCount = 1

        const result = await actionDeleteProduct(fakeObjectId)

        assert.equal(result, 0, "Product have not been deleted")
    })

    it(`[${INTEGRATION_TEST_TAG}] should not delete a Product Entity`, async () => {
        mockCursor.deletedCount = 0

        const result = await actionDeleteProduct(fakeObjectId)

        assert.equal(result, 1, "Product have been deleted")
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when some deletion fail`, async () => {
        await expect(actionDeleteProduct("")).rejects.toThrow(Error);
    })
})
