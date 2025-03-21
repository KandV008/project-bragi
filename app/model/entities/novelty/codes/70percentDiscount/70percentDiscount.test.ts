import { discountAction70Percent } from "./70percentDiscount"

describe("70percentDiscount Novelty", () => {
    const exampleProduct = {
        name: "Ejemplo",
        price: 1000,
    }

    it("should apply the novelty to the ProductDTO that is only one side, and have a 30% discount", () => {
        const example1 = {
            ...exampleProduct,
            catetegory: "EARPHONE",
            earSide: "left"
        }

        const { product, status } = discountAction70Percent(example1)

        assert.deepEqual(status, 0, "Novelty not applied")
        assert.equal(product.price, exampleProduct.price * 0.7, "The price is not correct")
    })

    it("should not apply the novelty to the ACCESSORY product", () => {
        const example2 = {
            ...exampleProduct,
            catetegory: "EARPHONE",
        }

        const { product, status } = discountAction70Percent(example2)

        assert.deepEqual(status, 1, "Novelty applied")
        assert.equal(product.price, exampleProduct.price, "The price is not correct")
    })

    it("should not apply the novelty to the EARPHONE product", () => {
        const example3 = {
            ...exampleProduct,
            catetegory: "EARPHONE",
        }

        const { product, status } = discountAction70Percent(example3)

        assert.deepEqual(status, 1, "Novelty applied")
        assert.equal(product.price, exampleProduct.price, "The price is not correct")
    })
})