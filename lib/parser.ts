import { EARPHONE_VALUE } from "@/app/model/entities/product/enums/Category";
import { usesList } from "@/app/model/entities/product/enums/earphoneAttributes/Uses";
import { adaptationRangeName, brandName, categoryNameParam, degreeOfLossName, productDescriptionName, earSideName, imageURLName, nameName, priceName, productIdName, bargainCodeName, bargainTitleName, bargainDescriptionName, promotionalImageName, noveltyDescriptionName, noveltyTitleName, includeName, colorTextName, colorHexName, earphoneShapeName, categoryName, userIdName, userNameName, userFirstName, phoneNumberName, emailName, addressName, audiometryFileName } from "@/app/model/JSONnames";

/**
 * Parses a string value and ensures it is valid.
 * @param {string | null | undefined} value - The value to parse.
 * @param {string} attribute - The attribute name for logging purposes.
 * @returns {string} - The validated string value.
 * @throws {Error} - Throws an error if the value is invalid.
 */
export function parseString(value: string | null | undefined, attribute: string): string {
    if (!value) {
        console.error("ERROR:", attribute, "is not valid");
        console.error(attribute, "VALUE:", value)
        throw new Error(`${attribute} is not valid. Value -> ${value}`)
    }

    return value
}

/**
 * Parses a string into a list by splitting on commas.
 * @param {string | null | undefined} value - The string value to parse.
 * @param {string} attribute - The attribute name for logging.
 * @returns {string[]} - An array of string values.
 */
export function parseStringList(value: string | null | undefined, attribute: string): string[] {
    if (!value) {
        console.warn("WARNING:", attribute, "is not valid");
        console.warn(attribute, "VALUE:", value)
        console.warn("USE DEFAULT VALUE -> [ ]")
        return []
    }

    return value.split(",")
}

/**
 * Parses a string into a number and ensures validity.
 * @param {string | null | undefined} value - The string to parse.
 * @param {string} attribute - The attribute name for logging.
 * @returns {number} - The parsed number.
 * @throws {Error} - Throws an error if the value is invalid.
 */
export function parseNumber(value: string | null | undefined, attribute: string): number {
    if (!value || isNaN(parseInt(value))) {
        console.error("ERROR:", attribute, "is not valid");
        console.error(attribute, "VALUE:", value)
        throw new Error(`${attribute} is not valid. Value -> ${value}`)
    }

    return parseInt(value)
}

/**
 * Parses start and end index values, providing defaults if invalid.
 * @param {string | null} start - The start index as a string.
 * @param {string | null} end - The end index as a string.
 * @returns {{startIndex: number, endIndex: number}} - An object containing valid start and end indices.
 */
export function parseStartAndEndIndex(start: string | null, end: string | null): { startIndex: number; endIndex: number; } {
    let startIndex, endIndex

    if (!start || !end) {
        console.warn("START INDEX:", start, "-> Use default value")
        startIndex = 0
        console.warn("END INDEX:", end, "-> Use default value")
        endIndex = 9
    } else {
        startIndex = Number(start);
        endIndex = Number(end);

        if (isNaN(startIndex) || isNaN(endIndex)) {
            console.error("ERROR: START or END is not a valid number");
            console.error("START VALUE:", start)
            console.error("END VALUE:", end)
            throw new Error("Start or End are not numbers");
        }
    }

    return { startIndex, endIndex }
}

/**
 * Parses a price value from a string.
 * @param {string | null | undefined} price - The price as a string.
 * @returns {number} - The parsed price.
 * @throws {Error} - Throws an error if the price is invalid.
 */
export function parsePrice(price: string | null | undefined): number {
    if (!price || isNaN(parseFloat(price))) {
        console.error("ERROR: PRICE is null or not valid number")
        console.error("PRICE VALUE:", price)
        throw new Error("Price is null or not valid number");
    }

    return parseFloat(price)
}

/**
 * Validates and returns a `File` object if it is valid.
 * 
 * @param {string | File | null | undefined} value - The input value, expected to be a `File`.
 * @param {string} attribute - The name of the attribute being validated (used for error messages).
 * @returns {File} - Returns the `File` object if valid.
 * @throws {Error} If the value is not a valid `File`.
 */
export function parseFile(value: string | File | null | undefined, attribute: string): File {
    if (!(value instanceof File)) {
        console.error(`ERROR: ${attribute} is not valid`);
        console.error(`${attribute} VALUE:`, value);
        throw new Error(`${attribute} is not valid. Value -> ${value}`);
    }

    return value;
}

/**
 * Parses a list of product IDs and ensures they are valid.
 * @param {string[] | null | undefined} productIds - The list of product IDs.
 * @returns {string[]} - The validated list of product IDs.
 * @throws {Error} - Throws an error if productIds is null or empty.
 */
export function parseProductIds(productIds: string[] | null | undefined): string[] {
    if (!productIds) {
        console.error("ERROR: PRODUCT_IDS are null or empty");
        console.error("PRODUCT_IDS VALUE:", productIds);
        throw new Error("Product_Ids are null or empty");
    }

    return productIds
}

/**
 * Parses product data from FormData for adding to a shopping list.
 * @param {FormData} formData - The form data object.
 * @returns {Object} - The parsed product data.
 */
export function parseNewProductToShoppingList(formData: FormData) {
    const productId = parseString(formData.get(productIdName)?.toString(), "PRODUCT_ID");
    const name = parseString(formData.get(nameName)?.toString(), "NAME");
    const category = parseString(formData.get(categoryName)?.toString(), "CATEGORY");
    const brand = parseString(formData.get(brandName)?.toString(), "BRAND");
    const price = parsePrice(formData.get(priceName)?.toString());
    const imageURL = parseString(formData.get(imageURLName)?.toString(), "IMAGE_URL")
    let earphoneShape = ""
    let colorText = ""
    let colorHex = ""
    let earSide = ""

    if (category !== "ACCESSORY") {
        colorText = parseString(formData.get(colorTextName)?.toString(), "COLOR");
        colorHex = parseString(formData.get(colorHexName)?.toString(), "COLOR");
        earSide = parseString(formData.get(earSideName)?.toString(), "EAR_SIDE");
        earphoneShape = parseString(formData.get(earphoneShapeName)?.toString(), "EARPHONE_SHAPE");
    }

    return { productId, colorText, colorHex, earSide, earphoneShape, name, category, brand, price, imageURL }
}

/**
 * Parses and extracts the updated product details from a FormData object.
 *
 * @param {FormData} formData - The form data containing the updated product details.
 * @returns {{
 *   productId: string;
 *   colorText: string;
 *   colorHex: string;
 *   earSide: string;
 *   guarantee: string;
 * }} An object containing the parsed product details.
 * @throws {Error} If any required attribute is missing or invalid.
 */
export function parseUpdateOfShoppingList(formData: FormData): {
    productId: string;
    colorText: string;
    colorHex: string;
    earSide: string;
} {
    const productId = parseString(formData.get(productIdName)?.toString(), "PRODUCT_ID");
    const colorText = parseString(formData.get(colorTextName)?.toString(), "COLOR");
    const colorHex = parseString(formData.get(colorHexName)?.toString(), "COLOR");
    const earSide = parseString(formData.get(earSideName)?.toString(), "EAR_SIDE");

    return { productId, colorText, colorHex, earSide }
}

/**
 * Parses a list of filters from a string.
 * @param {string | null} filters - The filters as a string.
 * @returns {Object} - An object containing parsed filters.
 */
export function parseFilters(filters: string | null): object {
    const filtersList = parseStringList(filters, "FILTERS")
    const convertedFilters = filtersList.map((filter: string) => {
        const component = filter.split(":")
        return convertToObject(component[0], component[1])
    })

    return convertedFilters.reduce((prev, current) => {
        return { ...prev, ...current };
    }, {});
}

// TODO Check to move this variables into another file
const adaptationRangeType = "adaptation_range";
const waterDustResistanceType = "dust_water_resistance";
const brandType = "brand";
const earphoneShapeType = "earphone_shape";
const degreeOfLossType = "degree_of_loss";

/**
 * Object containing functions that map filter types to their respective parsing logic.
 */
const filterFunction = {
    adaptationRangeType: (value: string) => ({ adaptation_range: value }),
    waterDustResistanceType: (value: string) => ({ dust_water_resistance: "true" === value }),
    brandType: (value: string) => ({ brand: value }),
    earphoneShapeType: (value: string) => ({ earphone_shape: value }),
    degreeOfLossType: (value: string) => ({ degree_of_loss: value }),
};

/**
 * Converts a given type-value pair into an object using predefined filter functions.
 * 
 * @param {string} type - The type of the filter.
 * @param {string} value - The value associated with the type.
 * @returns {Object} The mapped object for the given filter type.
 * @throws {Error} If the filter type is not valid.
 */
function convertToObject(type: string, value: string): object {

    if (type === adaptationRangeType) {
        return filterFunction.adaptationRangeType(value);
    }

    if (type === waterDustResistanceType) {
        return filterFunction.waterDustResistanceType(value);
    }

    if (type === brandType) {
        return filterFunction.brandType(value);
    }

    if (type === earphoneShapeType) {
        return filterFunction.earphoneShapeType(value);
    }

    if (type === degreeOfLossType) {
        return filterFunction.degreeOfLossType(value);
    }

    throw Error("FILTER not valid")
}

/**
 * Parses the selected uses from a FormData object.
 * 
 * @param {FormData} formData - The form data containing use attributes.
 * @returns {string[]} An array of selected uses.
 */
export function parseUses(formData: FormData): string[] {
    const parse: string[] = []
    usesList.forEach((element) => {
        if (formData.get(element) !== null) {
            const use = parseString(formData.get(element)?.toString(), element)
            parse.push(use)
        }
    })
    return parse
}

/**
 * Extracts a list of values from FormData using a counter-based tag system.
 * 
 * @param {FormData} formData - The form data containing multiple values.
 * @param {number} counter - The number of values to extract.
 * @param {string} tag - The base tag name used for indexing.
 * @returns {string[]} An array of extracted values.
 */
function getIncrementalValues(formData: FormData, counter: number, tag: string): string[] {
    const values: string[] = []

    for (let i = 1; i <= counter; i += 1) {
        const data = formData.get(`${tag}-${i}`)

        if (data === '') {
            continue
        }

        const element = parseString(data?.toString(), tag)
        values.push(element)
    }

    return values
}

/**
 * Parses the "include" section from FormData.
 * 
 * @param {FormData} formData - The form data containing inclusion details.
 * @returns {string[]} A list of included items.
 */
export function parseInclude(formData: FormData): string[] {
    const counter = parseNumber(formData.get(includeName)?.toString(), "INCLUDE_COUNTER")
    return getIncrementalValues(formData, counter, "INCLUDE")
}

/**
 * Parses the water and dust resistance field from FormData.
 * 
 * @param {FormData} formData - The form data containing the resistance value.
 * @returns {boolean} True if water and dust resistance is enabled, otherwise false.
 */
export function parseWaterDustResistance(formData: FormData): boolean {
    const resistanceElement = formData.get("YES")

    if (resistanceElement === null) {
        return false
    }

    const resistance = parseString(resistanceElement.toString(), "WATER DUST RESISTANCE")
    return resistance === "YES"
}

/**
 * Parses and validates color attributes from FormData.
 * 
 * @param {FormData} formData - The form data containing color details.
 * @returns {Array<{ name: string; hex: string }>} A list of colors with text and hex values.
 * @throws {Error} If the color text count and hex count do not match.
 */
export function parseColors(formData: FormData): Array<{ name: string; hex: string; }> {

    const counterText = parseNumber(formData.get(colorTextName)?.toString(), "COLOR_TEXT")
    const counterHex = parseNumber(formData.get(colorHexName)?.toString(), "COLOR_HEX")

    if (counterText !== counterHex) { // TODO Improve with a better validator/parser
        console.error("ERROR:", "Color is not valid");
        console.error("NUM COLOR TEXT: ", counterText, "NUM COLOR HEX:", counterHex)
        throw new Error(`Color is not valid.`)
    }

    const colorTexts = getIncrementalValues(formData, counterText, colorTextName)
    const colorHexs = getIncrementalValues(formData, counterHex, colorHexName)

    const colors = colorTexts.map((text, index) => {
        return {
            name: text,
            hex: "#" + colorHexs[index]
        }
    })

    return colors
}

/**
 * Parses product data from FormData.
 * 
 * @param {FormData} formData - The form data containing product details.
 * @returns {Object} The parsed product attributes.
 */
export function parseProductForm(formData: FormData): object {
    const newName = parseString(formData.get(nameName)?.toString(), "NAME")
    const newCategory = parseString(formData.get(categoryNameParam)?.toString(), "CATEGORY")
    const newBrand = parseString(formData.get(brandName)?.toString(), "BRAND")
    const newPrice = parsePrice(formData.get(priceName)?.toString())
    const newImageURL = parseString(formData.get(imageURLName)?.toString(), "IMAGE_URL")
    const newDescription = parseString(formData.get(productDescriptionName)?.toString(), "DESCRIPTION")
    const newInclude = parseInclude(formData)

    const productAttributes = {
        name: newName,
        category: newCategory,
        price: newPrice,
        image_URL: newImageURL,
        description: newDescription,
        include: newInclude,
        brand: newBrand,
    }

    if (newCategory === EARPHONE_VALUE) {
        const earphoneAttributes = parseEarphoneAttributes(formData);
        return {
            ...productAttributes,
            ...earphoneAttributes,
        }
    }

    return productAttributes
}


/**
 * Parses earphone-related attributes from a given form.
 * 
 * @param {FormData} formData - The form data containing earphone attributes.
 * @returns {object} An object containing parsed earphone attributes including colors, 
 * adaptation range, water/dust resistance, earphone shape, degree of loss, and usage types.
 */
function parseEarphoneAttributes(formData: FormData): object {
    const newColors = parseColors(formData);
    const newAdaptationRange = parseString(formData.get(adaptationRangeName)?.toString(), "ADAPTATION_RANGE");
    const newWaterDustResistance = parseWaterDustResistance(formData);
    const newEarphoneShape = parseString(formData.get(earphoneShapeName)?.toString(), "EARPHONE_SHAPE");
    const newDegreeOfLoss = parseString(formData.get(degreeOfLossName)?.toString(), "DEGREE_OF_LOSS");
    const newUses = parseUses(formData);

    return {
        colors: newColors,
        adaptation_range: newAdaptationRange,
        dust_water_resistance: newWaterDustResistance,
        earphone_shape: newEarphoneShape,
        degree_of_loss: newDegreeOfLoss,
        uses: newUses,
    };
}

/**
 * Parses bargain form data from FormData.
 * 
 * @param {FormData} formData - The form data containing bargain details.
 * @returns {Object} The parsed bargain attributes.
 */
export function parseBargainForm(formData: FormData) {
    const newCode = parseString(formData.get(bargainCodeName)?.toString(), "CODE")
    const newTitle = parseString(formData.get(bargainTitleName)?.toString(), "TITLE")
    const newDescription = parseString(formData.get(bargainDescriptionName)?.toString(), "DESCRIPTION")

    return {
        code: newCode,
        title: newTitle,
        description: newDescription,
    }
}

/**
 * Parses novelty form data from FormData.
 * 
 * @param {FormData} formData - The form data containing novelty details.
 * @returns {Object} The parsed novelty attributes.
 */
export function parseNoveltyForm(formData: FormData): object {
    const newTitle = parseString(formData.get(noveltyTitleName)?.toString(), "TITLE")
    const newDescription = parseString(formData.get(noveltyDescriptionName)?.toString(), "DESCRIPTION")
    const newPromotionalImage = parseString(formData.get(promotionalImageName)?.toString(), "PROMOTIONAL_IMAGE")

    return {
        title: newTitle,
        description: newDescription,
        promotionalImage: newPromotionalImage,
    }
}

/**
 * Parses Shopping form data from FormData.
 * 
 * @param {FormData} formData - The form data containing novelty details.
 * @returns {Object} The parsed shopping form.
 */
export function parseShoppingForm(formData: FormData): object {
    const newUserId = parseString(formData.get(userIdName)?.toString(), "USER_ID")
    const newUserName = parseString(formData.get(userNameName)?.toString(), "USER_NAME")
    const newUserFirstName = parseString(formData.get(userFirstName)?.toString(), "USER_FIRST_NAME")
    const newPhoneNumber = parseString(formData.get(phoneNumberName)?.toString(), "PHONE_NUMBER")
    const newEmail = parseString(formData.get(emailName)?.toString(), "EMAIL")
    const newAddress = parseString(formData.get(addressName)?.toString(), "ADDRESS")
    const newAudiometryFile = parseFile(formData.get(audiometryFileName), "AUDIOMETRY_FILE")

    return {
        userId: newUserId,
        userName: newUserName,
        userFirstName: newUserFirstName,
        phoneNumber: newPhoneNumber,
        email: newEmail,
        address: newAddress,
        audiometryFile: newAudiometryFile,
    };
}

