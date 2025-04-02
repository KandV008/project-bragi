import { mapDocumentToShoppingProductDTO } from "./ShoppingProductDTO";
import { MAP_DOCUMENT_TO_SHOPPING_PRODUCT_DTO_ERROR_MESSAGE } from "./ShoppingProductDTOConfiguration";

describe("Shopping Product DTO", () => {
    it("should map correctly a Shopping EARPHONE Product DTO", () => {
        const example = {
            product_id: "123",
            name: "Ejemplo",
            category: "EARPHONE",
            brand: "PHONAK",
            price: 1234,
            ear_side: "left",
            earphone_shape: "CIC",
            color_text: "Blanco",
            color_hex: "#ffffff",
            image_url: "./no-image.png",
            quantity: 1
        }

        const result = mapDocumentToShoppingProductDTO(example)

        assert.deepEqual(result.id, example.product_id, "Ids are different")
        assert.deepEqual(result.name, example.name, "Names are different")
        assert.deepEqual(result.category, example.category, "Categories are different")
        assert.deepEqual(result.brand, example.brand, "Brands are different")
        assert.deepEqual(result.earSide, example.ear_side, "Ear sides are different")
        assert.deepEqual(result.earphoneShape, example.earphone_shape, "Earphone Shapes are different")
        assert.deepEqual(result.colorText, example.color_text, "Color texts are different")
        assert.deepEqual(result.colorHex, example.color_hex, "Color hexs are different")
        assert.deepEqual(result.imageURL, example.image_url, "Image urls are different")
        assert.deepEqual(result.quantity, example.quantity, "Quantities are different")
    })

    it("should map correctly a Shopping EARPHONE Product DTO", () => {
        const example = {
            product_id: "123",
            name: "Ejemplo",
            category: "ACCESSORY",
            brand: "PHONAK",
            price: 1234,
            image_url: "./no-image.png",
            quantity: 1
        }

        const result = mapDocumentToShoppingProductDTO(example)

        assert.deepEqual(result.id, example.product_id, "Ids are different")
        assert.deepEqual(result.name, example.name, "Names are different")
        assert.deepEqual(result.category, example.category, "Categories are different")
        assert.deepEqual(result.brand, example.brand, "Brands are different")
        assert.deepEqual(result.imageURL, example.image_url, "Image urls are different")
        assert.deepEqual(result.quantity, example.quantity, "Quantities are different")
    })

    it("should not map a document that is not Shopping Product DTO", () => {
        const exampleNotShoppingProductDTO = {
            name: "Not Shopping Product DTO",
            description: "I AM NOT A SHOPPING PRODUCT DTO",
        };
    
        assert.throws(() => mapDocumentToShoppingProductDTO(exampleNotShoppingProductDTO), MAP_DOCUMENT_TO_SHOPPING_PRODUCT_DTO_ERROR_MESSAGE);
    })
})