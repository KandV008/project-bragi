import { UNIT_TEST_TAG } from "@/tests/testConstants"
import { BargainEntity, mapDocumentToBargain } from "../../../../app/model/entities/bargain/Bargain"
import { MAP_DOCUMENT_TO_BARGAIN_ERROR_MESSAGE } from "../../../../app/model/entities/bargain/BargainConfiguration"

describe("Bargain Entity", () => {
    const exampleBargain = {
        id: "123",
        code: "EXAM",
        title: "Example Bargain",
        description: "IIt does something",
    }

    it(`[${UNIT_TEST_TAG}] should map correctly a Bargain`, () => {
        const bargainWithRequirements = {
            ...exampleBargain,
            requirements: ["Example 1", "Example 2", "Example 3"]
        }

        const mappedBargain = mapDocumentToBargain(bargainWithRequirements)

        testBargainAttributes(mappedBargain, bargainWithRequirements)
        assert.lengthOf(mappedBargain.requirements, bargainWithRequirements.requirements.length)
    })

    it(`[${UNIT_TEST_TAG}] should map correctly a Bargain without requirements`, () => {
        const mappedBargain = mapDocumentToBargain(exampleBargain)
        
        testBargainAttributes(mappedBargain, exampleBargain)
        assert.lengthOf(mappedBargain.requirements, 0)
    })

    it(`[${UNIT_TEST_TAG}] should not map a document that is not a Bargain`, () => {
        const exampleNotBargain = {
            name: "Not Bargain",
            description: "I AM NOT A BARGAIN",
        };
    
        assert.throws(() => mapDocumentToBargain(exampleNotBargain), MAP_DOCUMENT_TO_BARGAIN_ERROR_MESSAGE);

    })
})

/**
 * Test the common attributes of Bargain
 * @param mappedBargain The result of the mapped bargain
 * @param exampleBargain The example of a instance of bargain in the database
 */
function testBargainAttributes(mappedBargain: BargainEntity, exampleBargain: any) {
    assert.deepEqual(mappedBargain.id, exampleBargain.id)
    assert.deepEqual(mappedBargain.code, exampleBargain.code)
    assert.deepEqual(mappedBargain.title, exampleBargain.title)
    assert.deepEqual(mappedBargain.description, exampleBargain.description)
}
