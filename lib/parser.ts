export function parseString(value: string | null | undefined, attribute: string) {
    if (!value) {
        console.log("ERROR:", attribute, "is not valid");
        console.log(attribute, "VALUE:", value)
        throw new Error(`${attribute} is not valid. Value -> ${value}`)
    }

    return value
}
export function parseStartAndEndIndex(start: string | null, end: string | null) {
    let startIndex, endIndex

    if (!start || !end) {
        console.log("START INDEX:", start, "-> Use default value")
        startIndex = 0
        console.log("END INDEX:", end, "-> Use default value")
        endIndex = 9
    } else {
        startIndex = Number(start);
        endIndex = Number(end);

        if (isNaN(startIndex) || isNaN(endIndex)) {
            console.log("ERROR: START or END is not a valid number");
            console.log("START VALUE:", start)
            console.log("END VALUE:", end)
            throw new Error("Start or End are not numbers");
        }
    }

    return { startIndex, endIndex }
}

export function parsePrice(price: string | null | undefined) {
    if (!price || !(isNaN(parseFloat(price)))) {
        console.log("ERROR: PRICE is null or not valid number")
        console.log("PRICE VALUE:", price)
        throw new Error("Price is null or not valid number");
    }

    return parseFloat(price)
}

export function parseProductIds(productIds: string[] | null | undefined) {
    if (!productIds) {
        console.log("ERROR: PRODUCT_IDS are null or empty");
        console.log("PRODUCT_IDS VALUE:", productIds);
        throw new Error("Product_Ids are null or empty");
    }

    return productIds
}

export function parseNewProductToShoppingList(formData: FormData) {
    const productId = parseString(formData.get("id")?.toString(), "PRODUCT_ID");
    const color = parseString(formData.get("color")?.toString(), "COLOR");
    const earSide = parseString(formData.get("earSide")?.toString(), "EAR_SIDE");
    const guarantee = parseString(formData.get("guarantee")?.toString(), "GUARANTEE");
    const name = parseString(formData.get("name")?.toString(), "NAME");
    const brand = parseString(formData.get("brand")?.toString(), "BRAND");
    const price = parsePrice(formData.get("price")?.toString());
    const imageURL = parseString(formData.get("imageURL")?.toString(), "IMAGE_URL")

    return { productId, color, earSide, guarantee, name, brand, price, imageURL }
}

export function parseUpdateOfShoppingList(formData: FormData) {
    const productId = parseString(formData.get("id")?.toString(), "PRODUCT_ID");
    const color = parseString(formData.get("color")?.toString(), "COLOR");
    const earSide = parseString(formData.get("earSide")?.toString(), "EAR_SIDE");
    const guarantee = parseString(formData.get("guarantee")?.toString(), "GUARANTEE");

    return { productId, color, earSide, guarantee }
}