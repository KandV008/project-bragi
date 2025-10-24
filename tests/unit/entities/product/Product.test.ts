import { mapDocumentToProduct, ProductEntity } from "@/app/model/entities/product/Product"
import { MAP_DOCUMENT_TO_PRODUCT_ERROR_MESSAGE } from "@/app/model/entities/product/ProductConfiguration"
import { UNIT_TEST_TAG } from "@/tests/testConstants"

describe("Product Entity", () => {
    const exampleProduct = { 
        _id: "123",
        name: "Earphone Product",
        price: 1234.5,
        image_URL: "/products/no-image.png",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent at
          facilisis ligula. Nulla facilisi. Suspendisse potenti. Nulla facilisi.
          Fusce nec ipsum at velit elementum elementum ut quis est. Duis sed
          placerat odio. Donec eu nunc arcu. Phasellus suscipit, dui vel gravida
          tincidunt, eros sapien sollicitudin lacus, a condimentum sapien tortor
          vitae eros.`,
        colors: [
          {
            name: "Black",
            hex: "#000000",
          },
        ],
        include: ["Include 1", "Include 2", "Inlcude 3"],
        dust_water_resistance: true,
        brand: "PHONAK",
        earphone_shape: "RIC",
        degree_of_loss: "MILD-SEVERE",
        uses: ["CHAT", "IN_GROUP", "LEISURE", "TELEPHONE", "TV"],
    }

    it(`[${UNIT_TEST_TAG}] should map correctly a Product with EARPHONE category`, () => {
        const exampleEarphoneProduct = {
            ...exampleProduct,
            category: "EARPHONE",
            related_products: ["123"]
        }

        const mappedProduct = mapDocumentToProduct(exampleEarphoneProduct)

        testProductAttributes(mappedProduct, exampleEarphoneProduct)
        testEarphoneAttributes(mappedProduct, exampleEarphoneProduct)
    })

    it(`[${UNIT_TEST_TAG}] should map correctly a Product with EARPHONE category without 'relatedProducts'`, () => {
        const exampleEarphoneProduct = {
            ...exampleProduct,
            category: "EARPHONE",
        }

        const mappedProduct = mapDocumentToProduct(exampleEarphoneProduct)

        testProductAttributes(mappedProduct, exampleEarphoneProduct)
        testEarphoneAttributes(mappedProduct, exampleEarphoneProduct)
    })

    it(`[${UNIT_TEST_TAG}] should map correctly a Product with ACCESSORY category`, () => {
        const exampleAccessoryProduct = {
            ...exampleProduct,
            category: "ACCESSORY",
            related_products: ["product 1", "product 2"]
        }

        const mappedProduct = mapDocumentToProduct(exampleAccessoryProduct)

        testProductAttributes(mappedProduct, exampleAccessoryProduct)
        assert.isNull(mappedProduct.earphoneAttributes, "Earphone Attibutes is not null")
    })

    it(`[${UNIT_TEST_TAG}] should map correctly a Product with ACCESSORY category without 'relatedProducts'`, () => {
        const exampleAccessoryProduct = {
            ...exampleProduct,
            category: "ACCESSORY",
        }

        const mappedProduct = mapDocumentToProduct(exampleAccessoryProduct)

        testProductAttributes(mappedProduct, exampleAccessoryProduct)
        assert.isNull(mappedProduct.earphoneAttributes, "Earphone Attibutes is not null")
    })

    it(`[${UNIT_TEST_TAG}] should not map a document that is not a Product`, () => {
        const exampleNotProduct = {
            name: "Not Product",
            description: "I AM NOT A PRODUCT",
        };
    
        assert.throws(() => mapDocumentToProduct(exampleNotProduct), MAP_DOCUMENT_TO_PRODUCT_ERROR_MESSAGE);
    });
})

/**
 * Test the EARPHONE attributes of Product
 * @param mappedProduct The result of the mapped product
 * @param exampleEarphoneProduct The example of a instance of EARPHONE product in the database
 */
function testEarphoneAttributes(mappedProduct: ProductEntity, exampleEarphoneProduct: any) {
    assert.lengthOf(mappedProduct.earphoneAttributes!.colors, exampleEarphoneProduct.colors.length, "Colors are different")
    assert.equal(mappedProduct.earphoneAttributes!.waterDustResistance, exampleEarphoneProduct.dust_water_resistance, "Water and Dust Resistances are different")
    assert.equal(mappedProduct.earphoneAttributes!.earphoneShape, exampleEarphoneProduct.earphone_shape, "Earphones are different")
    assert.equal(mappedProduct.earphoneAttributes!.degreeOfLoss, exampleEarphoneProduct.degree_of_loss, "Degrees of loss are different")
    assert.lengthOf(mappedProduct.earphoneAttributes!.uses, exampleEarphoneProduct.uses.length, "Uses are different")
}

/**
 * Test the common attributes of Product
 * @param mappedProduct The result of the mapped product
 * @param exampleProduct The example of a instance of product in the database
 */
function testProductAttributes(mappedProduct: ProductEntity, exampleProduct: any) {
    assert.deepEqual(mappedProduct.id, exampleProduct._id, "Ids are differents")
    assert.equal(mappedProduct.category, exampleProduct.category, "Categories are different")
    assert.deepEqual(mappedProduct.price, exampleProduct.price, "Prices are different")
    assert.deepEqual(mappedProduct.imageURL, exampleProduct.image_URL, "Image URLS are different")
    assert.deepEqual(mappedProduct.description, exampleProduct.description, "Descriptions are different")
    assert.equal(mappedProduct.brand, exampleProduct.brand, "Brands are different")
    assert.lengthOf(mappedProduct.include, exampleProduct.include.length, "Includes are different")
}
