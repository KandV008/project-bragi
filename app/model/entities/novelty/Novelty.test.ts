import { NoveltyContext } from "./enums/NoveltyContext";
import { NoveltyType } from "./enums/NoveltyType";
import * as NoveltyModule from "@/app/model/entities/novelty/Novelty";
import { MAP_DOCUMENT_TO_NOVELTY_ERROR_MESSAGE } from "./NoveltyConfiguration"
import { UNIT_TEST_TAG } from "@/tests/testConstants";

describe("Novelty Entity", async () => {

    let exampleMultiplier: number
    let exampleProducts: any[]

    beforeEach(() => {
        const examplePrice = [100, 200]

        exampleMultiplier = 0.7
        exampleProducts = [
            {
                id: "1",
                price: examplePrice[0],
                earSide: "left"
            },
            {
                id: "2",
                price: examplePrice[1],
                earSide: "left"
            },
        ]

        vi.spyOn(NoveltyModule, "getNoveltyAction").mockReturnValue((product: any) => { // TODO Resolve this mock that dont work
            product.price = product.price * 0.5;
            console.log("AAAAAAAAAAAAAAAAAAAAAAA")
            return { product, status: 0 };
        });
    });

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

    it(`[${UNIT_TEST_TAG}] should apply a Novelty to a list of product from a SHOPPING-LIST context, all of them should have 50% of discount`, async () => {
        const productPrices = [100, 200]

        const getValidNoveltiesMock = vi.spyOn(await import("@/db/novelty/novelty"), "getValidNovelties")
            .mockResolvedValue([
                {
                    id: "123",
                    title: "Ejemplo",
                    code: "70PERC",
                    description: "Descripción de ejemplo",
                    promotionalImage: "./no-image.png",
                    type: NoveltyType.GENERAL,
                    context: NoveltyContext["SHOPPING-LIST"],
                    endDate: new Date(),
                },
            ]);


        const result = await NoveltyModule.applyNoveltyToList("SHOPPING-LIST", exampleProducts);

        assert.equal(productPrices[0] * exampleMultiplier, result[0].price, "Novelties not applied in product 1");
        assert.equal(productPrices[1] * exampleMultiplier, result[1].price, "Novelties not applied in product 2");

        expect(getValidNoveltiesMock).toHaveBeenCalledWith("SHOPPING-LIST");

        getValidNoveltiesMock.mockRestore();
    });

    it(`[${UNIT_TEST_TAG}] should apply a Novelty to a list of product from a SEARCH context, all of them should have 50% of discount`, async () => {
        const productPrices = [100, 200]

        const getValidNoveltiesMock = vi.spyOn(await import("@/db/novelty/novelty"), "getValidNovelties")
            .mockResolvedValue([
                {
                    id: "123",
                    title: "Ejemplo",
                    code: "70PERC",
                    description: "Descripción de ejemplo",
                    promotionalImage: "./no-image.png",
                    type: NoveltyType.GENERAL,
                    context: NoveltyContext.SEARCH,
                    endDate: new Date(),
                },
            ]);

        const result = await NoveltyModule.applyNoveltyToList("SEARCH", exampleProducts);

        assert.equal(productPrices[0] * exampleMultiplier, result[0].price, "Novelties not applied in product 1");
        assert.equal(productPrices[1] * exampleMultiplier, result[1].price, "Novelties not applied in product 2");

        expect(getValidNoveltiesMock).toHaveBeenCalledWith("SEARCH");

        getValidNoveltiesMock.mockRestore();
    })

    it(`[${UNIT_TEST_TAG}] should apply a Novelty to a product from a SEARCH context, with a 50% of discount`, async () => {
        const productPrices = 100

        const getValidNoveltiesMock = vi.spyOn(await import("@/db/novelty/novelty"), "getValidNovelties")
            .mockResolvedValue([
                {
                    id: "123",
                    title: "Ejemplo",
                    code: "70PERC",
                    description: "Descripción de ejemplo",
                    promotionalImage: "./no-image.png",
                    type: NoveltyType.GENERAL,
                    context: NoveltyContext["SHOPPING-LIST"],
                    endDate: new Date(),
                },
            ]);


        const result = await NoveltyModule.applyNoveltyToProduct ("SHOPPING-LIST", exampleProducts[0]);

        assert.equal(productPrices * exampleMultiplier, result.price, "Novelties not applied in product");

        expect(getValidNoveltiesMock).toHaveBeenCalledWith("SHOPPING-LIST");

        getValidNoveltiesMock.mockRestore();
    })

    it(`[${UNIT_TEST_TAG}] should not apply a Novelty to a product from a SHOPPING-LIST context, with a 50% of discount`, async () => {
        const productPrices = 100

        const getValidNoveltiesMock = vi.spyOn(await import("@/db/novelty/novelty"), "getValidNovelties")
            .mockResolvedValue([
                {
                    id: "123",
                    title: "Ejemplo",
                    code: "70PERC",
                    description: "Descripción de ejemplo",
                    promotionalImage: "./no-image.png",
                    type: NoveltyType.GENERAL,
                    context: NoveltyContext.SEARCH,
                    endDate: new Date(),
                },
            ]);


        const result = await NoveltyModule.applyNoveltyToProduct ("SHOPPING-LIST", exampleProducts[0]);

        assert.equal(productPrices * exampleMultiplier, result.price, "Novelties not applied in product");

        expect(getValidNoveltiesMock).toHaveBeenCalledWith("SHOPPING-LIST");

        getValidNoveltiesMock.mockRestore();
    })
})