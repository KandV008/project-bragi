import { sql } from "@/__mocks__/@vercel/postgres";
import { actionCreateBargain, actionDeleteBargain, actionUpdateBargain, getBargain, getBargains } from "./bargain"
import { randomUUID } from "crypto";
import { bargainCodeName, bargainTitleName, bargainDescriptionName, bargainIdName } from "@/app/config/JSONnames";

vi.mock("@vercel/postgres");

describe("getBargains", () => {
    it("should get 5 Bargains when the start index is 0 and end index is 4", async () => {
        const startIndex = "0"
        const endIndex = "4"

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: [
                    { id: randomUUID(), code: "EXA1", title: "Example Title 1", description: "Example Description 1", requirements: [] },
                    { id: randomUUID(), code: "EXA2", title: "Example Title 2", description: "Example Description 2", requirements: [] },
                    { id: randomUUID(), code: "EXA3", title: "Example Title 3", description: "Example Description 3", requirements: [] },
                    { id: randomUUID(), code: "EXA4", title: "Example Title 4", description: "Example Description 4", requirements: [] },
                    { id: randomUUID(), code: "EXA5", title: "Example Title 5", description: "Example Description 5", requirements: [] },
                ]
            }),
        });

        const result = await getBargains(startIndex, endIndex)

        assert.lengthOf(result, 5, "It is not the correct amount of Bargains")
    })

    it("should get 0 Bargains when there is no bargains", async () => {
        const startIndex = "0"
        const endIndex = "4"

        const result = await getBargains(startIndex, endIndex)

        assert.lengthOf(result, 0, "It is not the correct amount of Bargains")
    })

    it("throw an Error when the bargain are not correct", async () => {
        const startIndex = "0"
        const endIndex = "4"

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: [
                    { id: 1, code: "EXA1" },
                ]
            }),
        });

        await expect(getBargains(startIndex, endIndex)).rejects.toThrow(Error);
    })
})

describe("getBargain", () => {
    it("should get a Bargain with the id 1", async () => {
        const bargainId = "1"

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: [
                    { id: 1, code: "EXA1", title: "Example Title 1", description: "Example Description 1", requirements: [] },
                ]
            }),
        });

        const result = await getBargain(bargainId)

        assert.isObject(result, "It don't return an object")
        assert.equal(result.id, bargainId, "It is not the correct bargain")
    })

    it("should throw an Error when the bargain doesn't exist", async () => {
        const bargainId = "1"

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: [
                ]
            }),
        });

        await expect(getBargain(bargainId)).rejects.toThrow(Error);
    })
})

describe("actionCreateBargain", () => {
    const exampleBargainFormData = {
        [bargainCodeName]: "Example Code",
        [bargainTitleName]: "Example Title",
        [bargainDescriptionName]: "EXAMPLE",
    };

    const formData = new FormData();
    Object.entries(exampleBargainFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it("should create a new Bargain Entity", async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: [
                ]
            }),
        });

        const result = await actionCreateBargain(formData)

        assert.equal(result, 0, "Bargain have not been created")
    })

    it("should not create a new Bargain Entity", async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockRejectedValue(new Error("Database error")),
        });

        const result = await actionCreateBargain(formData)

        assert.equal(result, 1, "Bargain have been created")
    })

    it("should throw an Error when the formData is invalid", async () => {
        const invalidFormData = new FormData()

        await expect(actionCreateBargain(invalidFormData)).rejects.toThrow(Error)
    })
})

describe("actionUpdateBargain", () => {
    const exampleBargainFormData = {
        [bargainIdName]: "1",
        [bargainCodeName]: "Example Code",
        [bargainTitleName]: "Example Title",
        [bargainDescriptionName]: "EXAMPLE",
    };

    const formData = new FormData();
    Object.entries(exampleBargainFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it("should update a new Bargain Entity", async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: [
                ]
            }),
        });

        const result = await actionUpdateBargain(formData)

        assert.equal(result, 0, "Bargain have not been updated")
    })

    it("should not update a new Bargain Entity", async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockRejectedValue(new Error("Database error")),
        });

        const result = await actionUpdateBargain(formData)

        assert.equal(result, 1, "Bargain have been updated")
    })

    it("should throw an Error when the formData is invalid", async () => {
        const invalidFormData = new FormData()

        await expect(actionUpdateBargain(invalidFormData)).rejects.toThrow(Error)
    })
})

describe("actionDeleteBargain", () => {
    const bargainId = "1"

    it("should delete a new Bargain Entity", async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rowCount: 1
            }),
        });   
        
        const result = await actionDeleteBargain(bargainId)

        assert.equal(result, 0, "Bargain have not been deleted")
    })

    it("should not delete a new Bargain Entity", async () => {
        const result = await actionDeleteBargain(bargainId)

        assert.equal(result, 1, "Bargain have been deleted")
    })

    it("should throw an Error when the formData is invalid", () => {
        const testCases = [null, undefined]

        testCases.forEach(async (exampleValue) => {
            await expect(actionDeleteBargain(exampleValue)).rejects.toThrow(Error)
        })
    })
})