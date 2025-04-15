import { sql } from "@/__mocks__/@vercel/postgres";
import { randomUUID } from "crypto";
import { actionCreateNovelty, actionDeleteNovelty, actionUpdateNovelty, getNovelties, getNovelty, getValidNovelties } from "./novelty";
import { noveltyDescriptionName, noveltyIdName, noveltyTitleName, promotionalImageName } from "@/app/config/JSONnames";
import { METHOD_ACTION_CREATE_NOVELTY, METHOD_ACTION_DELETE_NOVELTY, METHOD_ACTION_UPDATE_NOVELTY, METHOD_GET_NOVELTIES, METHOD_GET_NOVELTY, METHOD_GET_VALID_NOVELTIES } from "../dbConfig";
import { INTEGRATION_TEST_TAG } from "@/tests/testConstants";

vi.mock("@vercel/postgres");

const generateMockRow = (index: number) => ({
    id: randomUUID(),
    title: `Example Title ${index}`,
    code: `EXA${index}`,
    description: `Example Description ${index}`,
    promotional_image: "/no-image.png",
    type: "SPECIFIC",
    context: "SHOPPING-LIST",
    end_date: new Date().toISOString(),
});

describe(METHOD_GET_NOVELTIES, () => {
    it(`[${INTEGRATION_TEST_TAG}] should get 5 Novelties when the start index is 0 and end index is 4`, async () => {
        const startIndex = "0"
        const endIndex = "4"

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: Array.from({ length: 5 }, (_, i) => generateMockRow(i + 1)),
            }),
        });

        const result = await getNovelties(startIndex, endIndex)

        assert.lengthOf(result, 5, "It is not the correct amount of Novelties")
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 0 Novelties when there is no novelties`, async () => {
        const startIndex = "0"
        const endIndex = "4"

        const result = await getNovelties(startIndex, endIndex)

        assert.lengthOf(result, 0, "It is not the correct amount of Novelties")
    })

    it(`[${INTEGRATION_TEST_TAG}] throw an Error when the novelty are not correct`, async () => {
        const startIndex = "0"
        const endIndex = "4"

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: [
                    { id: 1, code: "EXA1" },
                ]
            }),
        });

        await expect(getNovelties(startIndex, endIndex)).rejects.toThrow(Error);
    })
})

describe(METHOD_GET_VALID_NOVELTIES, () => {
    const exampleContext = "SHOPPING-LIST"

    it(`[${INTEGRATION_TEST_TAG}] should get all valid novelties related to the context`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: Array.from({ length: 5 }, (_, i) => generateMockRow(i + 1)),
            }),
        });

        const result = await getValidNovelties(exampleContext)

        assert.lengthOf(result, 5, "It is not the correct amount of Novelties")
    })

    it(`[${INTEGRATION_TEST_TAG}] should get 0 valid novelties when there is no novelties`, async () => {
        const result = await getValidNovelties(exampleContext)

        assert.lengthOf(result, 0, "It is not the correct amount of Novelties")
    })

    it(`[${INTEGRATION_TEST_TAG}] throw an Error when the valid novelty is not correct`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: [
                    { id: 1, code: "EXA1" },
                ]
            }),
        });

        await expect(getValidNovelties(exampleContext)).rejects.toThrow(Error);
    })
})

describe(METHOD_GET_NOVELTY, () => {
    const noveltyId = "1"

    it(`[${INTEGRATION_TEST_TAG}] should get a Novelty with the id 1`, async () => {

        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: [
                    {
                        id: noveltyId,
                        title: `Example Title 1`,
                        code: `EXA1`,
                        description: `Example Description 1`,
                        promotional_image: "/no-image.png",
                        type: "SPECIFIC",
                        context: "SHOPPING-LIST",
                        end_date: new Date().toISOString(),
                }]
            }),
        });

        const result = await getNovelty(noveltyId)

        assert.isObject(result, "It don't return an object")
        assert.equal(result.id, noveltyId, "It is not the correct bargain")
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the novelty doesn't exist`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: []
            }),
        });

        await expect(getNovelty(noveltyId)).rejects.toThrow(Error);
    })
})

describe(METHOD_ACTION_CREATE_NOVELTY, () => {
    const exampleFormData = {
        [noveltyTitleName]: "Example Title",
        [noveltyDescriptionName]: "Example Description",
        [promotionalImageName]: "/no-image.png",
    };

    const formData = new FormData();
    Object.entries(exampleFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it(`[${INTEGRATION_TEST_TAG}] should create a new Novelty Entity`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: []
            }),
        });

        const result = await actionCreateNovelty(formData)

        assert.equal(result, 0, "Novelty have not been created")
    })

    it(`[${INTEGRATION_TEST_TAG}] should not create a new Novelty Entity`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockRejectedValue(new Error("Database error")),
        });

        const result = await actionCreateNovelty(formData)

        assert.equal(result, 1, "Novelty have been creted")
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the formData is invalid`, async () => {
        const invalidFormData = new FormData()

        await expect(actionCreateNovelty(invalidFormData)).rejects.toThrow(Error)
    })
})

describe(METHOD_ACTION_UPDATE_NOVELTY, () => {
    const exampleFormData = {
        [noveltyIdName]: "1",
        [noveltyTitleName]: "Example Title",
        [noveltyDescriptionName]: "Example Description",
        [promotionalImageName]: "/no-image.png",
    };

    const formData = new FormData();
    Object.entries(exampleFormData).forEach(([key, value]) => {
        formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
    });

    it(`[${INTEGRATION_TEST_TAG}] should update a Novelty Entity`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rows: []
            }),
        });

        const result = await actionUpdateNovelty(formData)

        assert.equal(result, 0, "Novelty have not been updated")
    })

    it(`[${INTEGRATION_TEST_TAG}] should not update a Novelty Entity`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockRejectedValue(new Error("Database error")),
        });

        const result = await actionUpdateNovelty(formData)

        assert.equal(result, 1, "Novelty have been updated")
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the formData is invalid`, async () => {
        const invalidFormData = new FormData()

        await expect(actionUpdateNovelty(invalidFormData)).rejects.toThrow(Error)
    })
})

describe(METHOD_ACTION_DELETE_NOVELTY, () => {
    const noveltyId = "1"

    it(`[${INTEGRATION_TEST_TAG}] should delete a new Bargain Entity`, async () => {
        vi.mocked(sql.connect).mockResolvedValueOnce({
            query: vi.fn().mockResolvedValue({
                rowCount: 1
            }),
        });

        const result = await actionDeleteNovelty(noveltyId)

        assert.equal(result, 0, "Bargain have not been deleted")
    })

    it(`[${INTEGRATION_TEST_TAG}] should not delete a new Bargain Entity`, async () => {
        const result = await actionDeleteNovelty(noveltyId)

        assert.equal(result, 1, "Bargain have been deleted")
    })

    it(`[${INTEGRATION_TEST_TAG}] should throw an Error when the formData is invalid`, () => {
        const testCases = [null, undefined]

        testCases.forEach(async (exampleValue) => {
            await expect(actionDeleteNovelty(exampleValue)).rejects.toThrow(Error)
        })
    })
})