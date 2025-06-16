import { UNIT_TEST_TAG } from "@/tests/testConstants"
import { ShoppingProductDTO } from "../../../shoppingProductDTO/ShoppingProductDTO"
import { codeAction2PER1 } from "./2per1Code"
import { beforeEach } from 'vitest'

describe("2per1Code Bargain", () => {
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

    it(`[${UNIT_TEST_TAG}] To a list with only one of a kind (only EARPHONES), should apply one discount to one pair of EARPHONE and it should be the cheaper one to value 0.`, () => {
        const { shoppingList, status } = codeAction2PER1(exampleProductsDTO)
        const cheaperIds = ["1", "3"]

        const firstEarphone = shoppingList.find((product) => product.id === cheaperIds[0])
        const secondEarphone = shoppingList.find((product) => product.id === cheaperIds[1])

        assert.equal(status, 0, "Status is different as expected")
        assert.lengthOf(shoppingList, exampleProductsDTO.length, "They don't have the same lenght")
        assert.equal(firstEarphone?.discountPrice, 0, "No update of the product price of the first element")
        assert.isNull(secondEarphone?.discountPrice, "Update of the product price of the second element")
    })

    it(`[${UNIT_TEST_TAG}] To a list with only one of a kind (both categories), should apply one discount to one pair of EARPHONE and it should be the cheaper one to value 0.`, () => {
        const newExampleProductsDTO = [
            ...exampleProductsDTO,
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

        const { shoppingList, status } = codeAction2PER1(newExampleProductsDTO)
        const cheaperIds = ["1", "3"]

        const firstEarphone = shoppingList.find((product) => product.id === cheaperIds[0])
        const secondEarphone = shoppingList.find((product) => product.id === cheaperIds[1])

        assert.equal(status, 0, "Status is different as expected")
        assert.lengthOf(shoppingList, newExampleProductsDTO.length, "They don't have the same lenght")
        assert.equal(firstEarphone?.discountPrice, 0, "No update of the product price of the first element")
        assert.isNull(secondEarphone?.discountPrice, "Update of the product price of the second element")
    })

    it(`[${UNIT_TEST_TAG}] To a list with only one of a kind (both categories), should not apply because there is no sufficient EARPHONES`, () => {
        const newExampleProductsDTO = [
            exampleProductsDTO[0],
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

        const { shoppingList, status } = codeAction2PER1(newExampleProductsDTO)

        assert.equal(status, 1, "Status is different as expected")
        assert.lengthOf(shoppingList, newExampleProductsDTO.length, "They don't have the same lenght")
        assert.isNull(newExampleProductsDTO[0].discountPrice, "Update of the product price of the second element")
    })

    it(`[${UNIT_TEST_TAG}] To an empty list, should not apply because there is no products`, () => {
        exampleProductsDTO[1].brand = "INTERTON"

        const { shoppingList, status } = codeAction2PER1([])

        assert.equal(status, 1, "Status is different as expected")
        assert.deepEqual(shoppingList, [])
    })

    it(`[${UNIT_TEST_TAG}] To a list with only one of a kind (both categories), should not apply because there is no compatible EARPHONES`, () => {
        const newExampleProductsDTO = [
            ...exampleProductsDTO,
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

        newExampleProductsDTO[1].earSide = "left"
        newExampleProductsDTO[2].earSide = "left"

        const { shoppingList, status } = codeAction2PER1(newExampleProductsDTO)

        assert.equal(status, 1, "Status is different as expected")
        assert.lengthOf(shoppingList, newExampleProductsDTO.length, "They don't have the same lenght")
        assert.isNull(newExampleProductsDTO[0].discountPrice, "Update of the product price of the second element")
    })

    it(`[${UNIT_TEST_TAG}] To a list with only one of a kind (only EARPHONES), should apply one discount to one pair of EARPHONE and it should be the cheaper one to value 0.`, () => {
        exampleProductsDTO[0].quantity = 2;

        const { shoppingList, status } = codeAction2PER1(exampleProductsDTO)

        assert.equal(status, 0, "Status is different as expected")

        const cheaperIds = ["1", "3"]

        const firstEarphoneWithDiscount = shoppingList.find((product) => product.id === cheaperIds[0] && product.discountPrice === 0)
        const firstEarphoneWithoudDiscount = shoppingList.find((product) => product.id === cheaperIds[0] && !product.discountPrice)
        const secondEarphone = shoppingList.find((product) => product.id === cheaperIds[1])

        assert.lengthOf(shoppingList, exampleProductsDTO.length + 1, "They don't have the same lenght")
        assert.equal(firstEarphoneWithDiscount?.discountPrice, 0, "No update of the product price of the first element")
        assert.equal(firstEarphoneWithDiscount?.quantity, 1, "The quantity is incorrect")
        assert.isNull(firstEarphoneWithoudDiscount?.discountPrice, "Update of the product price of the second element")
        assert.equal(firstEarphoneWithDiscount?.quantity, exampleProductsDTO[0].quantity, "The quantity is incorrect")
        assert.isNull(secondEarphone?.discountPrice, "Update of the product price of the second element")
    })
})


