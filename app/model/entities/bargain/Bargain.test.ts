import { BargainEntity, mapDocumentToBargain } from "./Bargain"
import { MAP_DOCUMENT_TO_BARGAIN_ERROR_MESSAGE } from "./BargainConfiguration"

describe("Bargain Entity", () => {
    const exampleBargain = {
        id: "123",
        code: "EXAM",
        title: "Example Bargain",
        description: "IIt does something",
    }

    it("should map correctly a Bargain", () => {
        const bargainWithRequirements = {
            ...exampleBargain,
            requirements: ["Example 1", "Example 2", "Example 3"]
        }

        const mappedBargain = mapDocumentToBargain(bargainWithRequirements)

        testBargainAttributes(mappedBargain, bargainWithRequirements)
        assert.lengthOf(mappedBargain.requirements, bargainWithRequirements.requirements.length)
    })

    it("should map correctly a Bargain without requirements", () => {
        const mappedBargain = mapDocumentToBargain(exampleBargain)
        
        testBargainAttributes(mappedBargain, exampleBargain)
        assert.lengthOf(mappedBargain.requirements, 0)
    })

    it("should not map a document that is not a Bargain", () => {
        const exampleNotBargain = {
            name: "Not Bargain",
            description: "I AM NOT A BARGAIN",
        };
    
        assert.throws(() => mapDocumentToBargain(exampleNotBargain), MAP_DOCUMENT_TO_BARGAIN_ERROR_MESSAGE);

    })
})

function testBargainAttributes(mappedBargain: BargainEntity, exampleBargain: any) {
    assert.deepEqual(mappedBargain.id, exampleBargain.id)
    assert.deepEqual(mappedBargain.code, exampleBargain.code)
    assert.deepEqual(mappedBargain.title, exampleBargain.title)
    assert.deepEqual(mappedBargain.description, exampleBargain.description)
}
