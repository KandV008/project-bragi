import { codeAction70PERC } from "@/app/model/entities/bargain/codes/70percentDiscount/70percentDiscount"
import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO"
import { UNIT_TEST_TAG } from "@/tests/testConstants"

describe("70percentDiscount Novelty", () => {
    const exampleProductsDTO: ShoppingProductDTO[] = [
        {
            id: "1",
            name: "Audeo Ejemplo",
            category: "EARPHONE",
            brand: "PHONAK",
            price: 100,
            discountPrice: null,
            earphoneShape: "CIC",
            earSide: "left",
            colorText: "",
            colorHex: "",
            imageURL: "",
            quantity: 1
        },
        {
            id: "2",
            name: "Audeo Ejemplo",
            category: "EARPHONE",
            brand: "PHONAK",
            price: 400,
            discountPrice: null,
            earphoneShape: "CIC",
            earSide: "right",
            colorText: "",
            colorHex: "",
            imageURL: "",
            quantity: 1
        },
        {
            id: "3",
            name: "Audeo Ejemplo",
            category: "EARPHONE",
            brand: "PHONAK",
            price: 200,
            discountPrice: null,
            earphoneShape: "CIC",
            earSide: "right",
            colorText: "",
            colorHex: "",
            imageURL: "",
            quantity: 1
        },
        {
            id: "4",
            name: "Audeo Ejemplo",
            category: "EARPHONE",
            brand: "PHONAK",
            price: 300,
            discountPrice: null,
            earphoneShape: "CIC",
            earSide: "left",
            colorText: "",
            colorHex: "",
            imageURL: "",
            quantity: 1
        }
    ]

    function setDefaultExample() {
        exampleProductsDTO[0].discountPrice = null
        exampleProductsDTO[0].quantity = 1
        exampleProductsDTO[1].earSide = "right"
        exampleProductsDTO[2].earSide = "right"
    }

    beforeEach(() => {
        setDefaultExample()
    })

    it(`[${UNIT_TEST_TAG}] To a list with only one of a kind (only EARPHONES), should apply one discount to one EARPHONE and it should be the cheaper one.`, () => {
        const { shoppingList, status } = codeAction70PERC(exampleProductsDTO)
        const cheaperIds = ["1", "3"]

        const product = shoppingList.find((product) => product.id === cheaperIds[0])

        assert.equal(status, 0, "Status is different as expected")
        assert.lengthOf(shoppingList, exampleProductsDTO.length, "They don't have the same lenght")
        assert.equal(product?.discountPrice, product?.price! * 0.7, "The price is not correct")
    })

    it(`[${UNIT_TEST_TAG}] To a list with only one of a kind (only ACCESSORY), should not apply because there is no EARPHONES`, () => {
        const newExampleProductsDTO = [
            {
                id: "5",
                name: "Audeo Ejemplo",
                category: "ACCESSORY",
                brand: "PHONAK",
                price: 50,
                discountPrice: null,
                earphoneShape: "",
                earSide: "",
                colorText: "",
                colorHex: "",
                imageURL: "",
                quantity: 1
            }
        ]

        const { shoppingList, status } = codeAction70PERC(newExampleProductsDTO)

        assert.equal(status, 1, "Status is different as expected")
        assert.lengthOf(shoppingList, newExampleProductsDTO.length, "They don't have the same lenght")
        assert.isNull(newExampleProductsDTO[0].discountPrice, "Update of the product price of the second element")
    })

    it(`[${UNIT_TEST_TAG}] To an empty list, should not apply because there is no products`, () => {
        const { shoppingList, status } = codeAction70PERC([])

        assert.equal(status, 1, "Status is different as expected")
        assert.deepEqual(shoppingList, [])
    })
})
