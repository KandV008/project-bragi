import { mapDocumentToOrder } from "./Order";
import { MAP_DOCUMENT_TO_ORDER_ERROR_MESSAGE } from "./OrderConfiguration";

describe("Order Entity", async () => {
    it.skip("should map correctly a Order", () => {
        // TODO End test
    })

    it.skip("Should not map a document that is not a Order", () => {
        const exampleNotOrder = {
            name: "Not Order",
            description: "I AM NOT A ORDER",
        };

        assert.throws(() => mapDocumentToOrder(exampleNotOrder), MAP_DOCUMENT_TO_ORDER_ERROR_MESSAGE);
    })
})