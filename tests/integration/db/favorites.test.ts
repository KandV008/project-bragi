vi.mock("../product/product", () => ({
    getProductsByIds: vi.fn()
}));

import { sql } from "@/__mocks__/@vercel/postgres";
import { exampleUser } from "@/__mocks__/@clerk/nextjs/server";
import { randomUUID } from "crypto";
import { productIdName } from "@/app/config/JSONnames";
import { Logger } from "@/app/config/Logger";
import { INTEGRATION_TEST_TAG } from "@/tests/testConstants";
import { METHOD_GET_FAVORITES, METHOD_CHECK_FAVORITE, METHOD_CHECK_FAVORITE_LIST, METHOD_TOGGLE_FAVORITES, METHOD_DELETE_IN_FAVORITES } from "@/db/dbConfig";
import { getFavorites, checkFavorite, checkFavoriteList, toggleFavorites, deleteProductInFavorites } from "@/db/favorites/favorites";
import { getProductsByIds } from "@/db/product/product";

const exampleProduct = randomUUID()

vi.mock("@vercel/postgres");
vi.mock("@clerk/nextjs/server",);

describe.skip(METHOD_GET_FAVORITES, () => {

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it(`[${INTEGRATION_TEST_TAG}] should get 5 Products in favorites when the start index is 0 and end index is 4`, async () => {
        const startIndex = "0"
        const endIndex = "4"

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValueOnce({
                rows: Array.from({ length: 5 }, () => ({
                    product_id: randomUUID(),
                    user_id: exampleUser
                }))
            })
        });

        vi.mock("../product/product", async () => {
            return {
                getProductsByIds: vi.fn().mockResolvedValueOnce([
                    { id: "1" },
                    { id: "2" },
                    { id: "3" },
                    { id: "4" },
                    { id: "5" },
                ]),
            };
        });

        const result = await getFavorites(startIndex, endIndex)

        assert.lengthOf(result, 5, "It is not the correct amount of Products in Favorites")
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 0 Products in favorites when there is no favorites`, async () => {
        const startIndex = "0"
        const endIndex = "4"

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValueOnce({
                rows: []
            })
        });

        vi.mocked(getProductsByIds).mockResolvedValueOnce([]);

        const result = await getFavorites(startIndex, endIndex)

        assert.lengthOf(result, 0, "It is not the correct amount of Products in Favorites")
    })

    it(`[${INTEGRATION_TEST_TAG}] throw an Error when the Product are not correct`, async () => {
        const startIndex = "0"
        const endIndex = "4"

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockRejectedValue(new Error("Database error")),
        });

        await expect(getFavorites(startIndex, endIndex)).rejects.toThrow(Error);
    })
})

describe.skip(METHOD_CHECK_FAVORITE, () => {
    it(`[${INTEGRATION_TEST_TAG}] should get a true because it is a favorite product`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: [
                    { count: 1 },
                ]
            }),
        });

        const result = await checkFavorite(exampleUser, exampleProduct)

        assert.isTrue(result, "It is not a favorite product")
    })

    it(`[${INTEGRATION_TEST_TAG}] should get a false because it is not a favorite product`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: [
                    { count: 0 },
                ]
            }),
        });

        const result = await checkFavorite(exampleUser, exampleProduct)

        assert.isFalse(result, "It is a favorite product")
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the database doesn't work`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockRejectedValue(new Error("Database error")),
        });

        await expect(checkFavorite(exampleUser, exampleProduct)).rejects.toThrow(Error);
    })
})

describe.skip(METHOD_CHECK_FAVORITE_LIST, () => {
    it(`[${INTEGRATION_TEST_TAG}] should get a list of boolean with 3 trues and 2 falses`, async () => {
        const productIds = Array.from({ length: 5 }, () => randomUUID().toString())

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: productIds.map((id, index) => ({
                    product_id: id,
                    count: index < 3 ? 1 : 0,
                })),
            }),
        });

        const result = await checkFavoriteList(exampleUser, productIds)

        assert.lengthOf(result, 5, "The list doesn't have the correct length")

        const trueCount = result.filter(Boolean).length;
        const falseCount = result.filter(value => !value).length;

        assert.strictEqual(trueCount, 3, "Should have 3 true values");
        assert.strictEqual(falseCount, 2, "Should have 2 false values");
    })

    it(`[${INTEGRATION_TEST_TAG}] should get an empty list of boolean`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: []
            }),
        });

        const result = await checkFavoriteList(exampleUser, [])

        assert.lengthOf(result, 0, "The list doesn't have the correct length")

        const trueCount = result.filter(Boolean).length;
        const falseCount = result.filter(value => !value).length;

        assert.strictEqual(trueCount, 0, "Should have 0 true values");
        assert.strictEqual(falseCount, 0, "Should have 0 false values");
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the database doesn't work`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockRejectedValue(new Error("Database error")),
        });

        await expect(checkFavoriteList(exampleUser, [])).rejects.toThrow(Error);
    })
})

describe.skip(METHOD_TOGGLE_FAVORITES, () => {
    const exampleFormData = {
        [productIdName]: exampleProduct,
        [exampleUser]: exampleUser,
    };

    const formData = new FormData();
    Object.entries(exampleFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it(`[${INTEGRATION_TEST_TAG}] should removed the product from favorites`, async () => {
        const mockQuery = vi.fn()
            .mockResolvedValueOnce({ rows: [{ count: 1 }] })
            .mockResolvedValueOnce({ rows: [] });

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: mockQuery
        });

        await toggleFavorites(formData)

        expect(mockQuery).toHaveBeenCalledTimes(2);
    })

    it(`[${INTEGRATION_TEST_TAG}] should add the product to favorites`, async () => {
        const mockQuery = vi.fn()
            .mockResolvedValueOnce({ rows: [{ count: 1 }] })
            .mockResolvedValueOnce({ rows: [] });

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: mockQuery
        });

        await toggleFavorites(formData)

        expect(mockQuery).toHaveBeenCalledTimes(2);
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the formData is invalid`, async () => {
        const mockQuery = vi.fn().mockRejectedValue(new Error("Database error"))

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: mockQuery,
        });

        await expect(toggleFavorites(formData)).rejects.toThrow(Error);
        expect(mockQuery).toHaveBeenCalledTimes(1);
    })
})

describe.skip(METHOD_DELETE_IN_FAVORITES, () => {
    it(`[${INTEGRATION_TEST_TAG}]should delete a Product from favorites`, async () => {
        const endFunctionMock = vi.fn();
        Logger.endFunction = endFunctionMock;
    
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rowCount: 1,
                rows: []
            }),
        });

        await deleteProductInFavorites(exampleProduct)

        expect(endFunctionMock).toHaveBeenCalled();
    })

    it(`[${INTEGRATION_TEST_TAG}]should throw an Error when the database doesn't work`, async () => {
        const mockQuery = vi.fn().mockRejectedValue(new Error("Database error"))

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: mockQuery,
        });

        await expect(deleteProductInFavorites(exampleProduct)).rejects.toThrow(Error);
        expect(mockQuery).toHaveBeenCalledTimes(1);
    })
})