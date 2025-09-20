import * as NoveltyModule from "@/app/model/entities/novelty/Novelty";
import { MAP_DOCUMENT_TO_NOVELTY_ERROR_MESSAGE } from "@/app/model/entities/novelty/NoveltyConfiguration";
import { UNIT_TEST_TAG } from "@/tests/testConstants";

describe("Novelty Entity", async () => {

    afterEach(() => {
        vi.clearAllMocks();
    })

    it(`[${UNIT_TEST_TAG}] should map correctly a Novelty`, () => {
        const exampleNovelty = {
            id: "123",
            title: "Ejemplo",
            code: "50PER",
            description: "Descripción de ejemplo",
            promotional_image: "./no-image.png",
            type: "GENERAL",
            context: "SEARCH",
            end_date: new Date().toISOString()
        }

        const mappedNovelty = NoveltyModule.mapDocumentToNovelty(exampleNovelty)

        assert.deepEqual(mappedNovelty.id, exampleNovelty.id, "Ids are different")
        assert.deepEqual(mappedNovelty.title, exampleNovelty.title, "Titles are different")
        assert.deepEqual(mappedNovelty.code, exampleNovelty.code, "Codes are different")
        assert.deepEqual(mappedNovelty.description, exampleNovelty.description, "Descriptions are different")
        assert.deepEqual(mappedNovelty.promotionalImage, exampleNovelty.promotional_image, "Promotional images are different")
        assert.equal(mappedNovelty.type, exampleNovelty.type, "Types are different")
        assert.equal(mappedNovelty.context, exampleNovelty.context, "Contexts are different")
        assert.deepEqual(mappedNovelty.endDate.toISOString(), exampleNovelty.end_date, "End dates are different")
    })

    it(`[${UNIT_TEST_TAG}] should not map a document that is not a Novelty`, () => {
        const exampleNotNovelty = {
            name: "Not Novelty",
            description: "I AM NOT A NOVELTY",
        };

        assert.throws(() => NoveltyModule.mapDocumentToNovelty(exampleNotNovelty), MAP_DOCUMENT_TO_NOVELTY_ERROR_MESSAGE);
    })
})
