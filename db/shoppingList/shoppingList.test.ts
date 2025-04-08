import { sql } from "@/__mocks__/@vercel/postgres";
import { randomUUID } from "crypto";
import { Logger } from "@/app/config/Logger";
import { addProductToShoppingList, decrementProductInShoppingList, deleteProductInShoppingList, getShoppingList, incrementProductInShoppingList } from "./shoppingList";
import { brandName, categoryName, imageURLName, nameName, priceName, productIdName } from "@/app/config/JSONnames";

const exampleUser = "user_2jjYF34Vt4fdqWEVYwVx8fQtNgz"
const exampleProduct = randomUUID()

vi.mock("@vercel/postgres");

vi.mock("@clerk/nextjs/server", () => ({
    auth: () => ({ userId: exampleUser }),
}));

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

describe("getShoppingList", () => {

    it("should get all Products in shopping list", async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValueOnce({
                rows: Array.from({ length: 5 }, (_, i) => generateMockRow(i))
            })
        });

        const result = await getShoppingList()

        assert.lengthOf(result, 5, "It is not the correct amount of Products in shopping list")
    })

    it("should get 0 Products in shopping list", async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValueOnce({
                rows: []
            })
        });

        const result = await getShoppingList()

        assert.lengthOf(result, 0, "It is not the correct amount of Products in Favorites")
    })

    it("throw an Error when the Product are not correct", async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockRejectedValue(new Error("Database error")),
        });

        await expect(getShoppingList()).rejects.toThrow(Error);
    })
})

describe("deleteProductInShoppingList", () => {
    it("should delete a Product from all shopping list", async () => {
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

    it("should throw an Error when the database doesn't work", async () => {
        const mockQuery = vi.fn().mockRejectedValue(new Error("Database error"))

        vi.mocked(sql.connect).mockResolvedValue({
            query: mockQuery,
        }); 

        await expect(deleteProductInShoppingList(exampleProduct)).rejects.toThrow(Error);
    })
})

describe("addProductToShoppingList", () => {
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

    it("should add the product to shopping list", async () => {

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValueOnce({
                rowCount: 1,
                rows: []
            }),
        });

        await expect(addProductToShoppingList(formData)).resolves.not.toThrow(Error);
    })

    it("should throw an Error when the database doesn't work", async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockRejectedValue(new Error("Database error")),
        }); 

        await expect(addProductToShoppingList(formData)).rejects.toThrow(Error);
    })
})

describe("incrementProductInShoppingList", () => {
    const exampleFormData = {
        [productIdName]: exampleProduct,
        [exampleUser]: exampleUser,
    };

    const formData = new FormData();
    Object.entries(exampleFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it("should increase in one the quantity of the product in the shopping list", async () => {
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

    it("should throw an Error when the formData is invalid", async () => {
        const mockQuery = vi.fn().mockRejectedValue(new Error("Database error"))

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: mockQuery,
        });

        await expect(incrementProductInShoppingList(formData)).rejects.toThrow(Error);
        expect(mockQuery).toHaveBeenCalledTimes(1);
    })
})

describe("decrementProductInShoppingList", () => {
    const exampleFormData = {
        [productIdName]: exampleProduct,
        [exampleUser]: exampleUser,
    };

    const formData = new FormData();
    Object.entries(exampleFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it("should decrease in one the quantity of the product in the shopping list", async () => {
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

    it("should throw an Error when the formData is invalid", async () => {
        const mockQuery = vi.fn().mockRejectedValue(new Error("Database error"))

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: mockQuery,
        });

        await expect(decrementProductInShoppingList(formData)).rejects.toThrow(Error);
        expect(mockQuery).toHaveBeenCalledTimes(1);
    })
})