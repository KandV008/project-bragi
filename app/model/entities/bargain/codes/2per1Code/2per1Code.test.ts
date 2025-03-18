import { ProductDTO } from "../../../DTOs/ProductDTO"
import { codeAction2PER1 } from "./2per1Code"

describe("2per1Code Bargain", () => {
    const exampleProductsDTO: ProductDTO[] = [
        {
            id: "",
            name: "Audeo Ejemplo",
            category: "EARPHONE",
            brand: "PHONAK",
            price: 0,
            earSide: "left",
            guarantee: false,
            colorText: "",
            colorHex: "",
            imageURL: "",
            quantity: 0
        },
        {
            id: "",
            name: "Audeo Ejemplo",
            category: "EARPHONE",
            brand: "PHONAK",
            price: 0,
            earSide: "right",
            guarantee: false,
            colorText: "",
            colorHex: "",
            imageURL: "",
            quantity: 0
        }
    ]

    function setDefaultExample() {
        exampleProductsDTO[1].category = "EARPHONE"
        exampleProductsDTO[1].brand = "PHONAK"
        exampleProductsDTO[1].name = "Audeo Ejemplo"
        exampleProductsDTO[1].earSide = "right"
    }

    it("should apply the bargain at the second element and return the list modified with a status 0",() => {
        const { shoppingList, status} = codeAction2PER1(exampleProductsDTO)
        
        const modifiedProduct = shoppingList[1]

        assert.equal(status, 0, "Status is different as expected")
        assert.equal(modifiedProduct.price, 0, "No update of the product price")

    })

    it("should not apply the bargain because the category is not valid", () => {
        exampleProductsDTO[1].category = "ACCESSORY"

        const {shoppingList, status} = codeAction2PER1(exampleProductsDTO)

        assert.equal(status, 1, "Status is different as expected")
        assert.deepEqual(exampleProductsDTO, shoppingList)
        
        setDefaultExample()
    })

    it("should not apply the bargain because the products are not from the same brand", () => {
        exampleProductsDTO[1].brand = "INTERTON"

        const {shoppingList, status} = codeAction2PER1(exampleProductsDTO)

        assert.equal(status, 1, "Status is different as expected")
        assert.deepEqual(exampleProductsDTO, shoppingList)

        setDefaultExample()
    })

    it("should not apply the bargain because they are from diferent group", () => {
        exampleProductsDTO[1].name = "Audeo No Ejemplo"

        const {shoppingList, status} = codeAction2PER1(exampleProductsDTO)

        assert.equal(status, 1, "Status is different as expected")
        assert.deepEqual(exampleProductsDTO, shoppingList)

        setDefaultExample()
    })

    it("should not apply the bargain because the ear side is not compatible", () => {
        exampleProductsDTO[1].earSide = "left"

        const {shoppingList, status} = codeAction2PER1(exampleProductsDTO)

        assert.equal(status, 1, "Status is different as expected")
        assert.deepEqual(exampleProductsDTO, shoppingList)

        setDefaultExample()
    })

    it("should not apply the bargain because the list is empty", () => {
        const {shoppingList, status} = codeAction2PER1([])

        assert.equal(status, 1, "Status is different as expected")
        assert.deepEqual([], shoppingList)

    })

    it("should not apply the bargain because there is no earphone", () => {
        exampleProductsDTO[0].category = "ACCESSORY"
        exampleProductsDTO[1].category = "ACCESSORY"

        const {shoppingList, status} = codeAction2PER1(exampleProductsDTO)

        assert.equal(status, 1, "Status is different as expected")
        assert.deepEqual(exampleProductsDTO, shoppingList)

        setDefaultExample()
    })

})


