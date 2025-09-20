import { productIdName, nameName, categoryName, brandName, priceName, imageURLName, colorTextName, colorHexName, earSideName, earphoneShapeName, includeName, categoryNameParam, productDescriptionName, adaptationRangeName, degreeOfLossName, bargainCodeName, bargainTitleName, bargainDescriptionName, noveltyTitleName, noveltyDescriptionName, promotionalImageName, userIdName, userNameName, userFirstName, phoneNumberName, emailName, addressName, audiometryFileName, contactEmailName, contactSubjectName, contactBodyName, dustWaterResistanceName, hasDustWaterResistanceName, endDateName, noveltyContextName, noveltyTypeName, bargainRequirementsName, userDNIName } from "@/app/config/JSONnames";
import { EARPHONE_VALUE } from "@/app/model/entities/product/enums/Category";
import { usesList } from "@/app/model/entities/product/enums/earphoneAttributes/Uses";
import { COLOR_HEX_PREFIX_TAG, COLOR_TEXT_PREFIX_TAG, CONTEXT_CONVERT_TO_OBJECT, CONTEXT_PARSE_COLORS, CONTEXT_PARSE_DATE, CONTEXT_PARSE_FILE, CONTEXT_PARSE_NUMBER, CONTEXT_PARSE_PRICE, CONTEXT_PARSE_PRODUCT_IDS, CONTEXT_PARSE_START_AND_END_INDEX, CONTEXT_PARSE_STRING, CONTEXT_PARSE_STRING_LIST, CONTEXT_PARSE_STRING_OR_EMPTY, END_PREFIX_TAG, ERROR_TAG, INVALID_ATTRIBUTE_MESSAGE, INVALID_COLOR_COUNTERS_MESSAGE, INVALID_START_END_INDEXES_MESSAGE, START_PREFIX_TAG, USE_DEFAULT_VALUE_MESSAGE, VALUE_TAG, WARNING_TAG } from "./parserMessages";

/**
 * Logs an error message for an invalid value and throws an error.
 * @param {any} value - The invalid value that caused the error.
 * @param {string} attribute - The name of the attribute associated with the error.
 * @throws {Error} - Always throws an error indicating the invalid attribute and value.
 */
function handleInvalidValueError(value: any, attribute: string, context: string) {
    console.error(ERROR_TAG, attribute, INVALID_ATTRIBUTE_MESSAGE);
    console.error(attribute, VALUE_TAG, value)
    throw new Error(`[${context}] ${attribute} ${INVALID_ATTRIBUTE_MESSAGE}. ${VALUE_TAG} ${value}`)
}

/**
 * Logs an error message when invalid start and end index values are encountered and throws an error.
 * @param {any} start - The start index that caused the error.
 * @param {any} end - The end index that caused the error.
 * @param {string} context - The context or location where the error occurred.
 * @throws {Error} - Always throws an error indicating the invalid start and end indexes.
 */
function handleStartAndEndIndexValueError(start: any, end: any, context: string) {
    console.error(ERROR_TAG, INVALID_START_END_INDEXES_MESSAGE);
    console.error(START_PREFIX_TAG, VALUE_TAG, start)
    console.error(END_PREFIX_TAG, VALUE_TAG, end)
    throw new Error(`[${context}] ${INVALID_START_END_INDEXES_MESSAGE}. ${START_PREFIX_TAG} ${VALUE_TAG} ${start}; ${END_PREFIX_TAG} ${VALUE_TAG} ${end}`);
}

/**
 * Logs an error message when invalid color counter values are encountered and throws an error.
 * @param {number} counterText - The text color counter value that caused the error.
 * @param {number} counterHex - The hexadecimal color counter value that caused the error.
 * @param {string} context - The context or location where the error occurred.
 * @throws {Error} - Always throws an error indicating the invalid color counter values.
 */
function handleColorCountersValueError(counterText: number, counterHex: number, context: string) {
    console.error(ERROR_TAG, INVALID_COLOR_COUNTERS_MESSAGE);
    console.error(COLOR_TEXT_PREFIX_TAG, VALUE_TAG, counterText);
    console.error(COLOR_HEX_PREFIX_TAG, VALUE_TAG, counterHex);
    throw new Error(`[${context}] ${INVALID_COLOR_COUNTERS_MESSAGE}. 
            ${COLOR_TEXT_PREFIX_TAG} ${VALUE_TAG} ${counterText}
            ${COLOR_HEX_PREFIX_TAG} ${VALUE_TAG} ${counterHex}
        `);
}

/**
 * Logs a warning message when an invalid value is encountered and a default value is used.
 * @param {any} value - The invalid value that triggered the warning.
 * @param {string} attribute - The name of the attribute associated with the warning.
 * @param {string} defaultValue - The default value being used as a fallback.
 * @param {string} context - The context or location where the warning occurred.
 */
function handleDefaultValueWarning(value: any, attribute: string, defaultValue: string, context: string) {
    console.warn(WARNING_TAG, attribute, INVALID_ATTRIBUTE_MESSAGE);
    console.warn(attribute, VALUE_TAG, value)
    console.warn(`[${context}] ${USE_DEFAULT_VALUE_MESSAGE} ${defaultValue}`)
}

/**
 * Parses a string value and ensures it is valid.
 * @param {string | null | undefined} value - The value to parse.
 * @param {string} attribute - The attribute name for logging purposes.
 * @returns {string} - The validated string value.
 * @throws {Error} - Throws an error if the value is invalid.
 */
export function parseString(value: string | null | undefined, attribute: string): string {
    if (!value) {
        handleInvalidValueError(value, attribute, CONTEXT_PARSE_STRING)
        return ""
    }

    return value
}

/**
 * Parses a date value and ensures it is valid.
 * @param {string | null | undefined} value - The value to parse.
 * @param {string} attribute - The attribute name for logging purposes.
 * @returns {string} - The validated string value.
 * @throws {Error} - Throws an error if the value is invalid.
 */
export function parseDate(value: string | null | undefined, attribute: string): string {
    if (!value) {
        handleInvalidValueError(value, attribute, CONTEXT_PARSE_DATE)
        return ""
    }

    try {
        const splittedDate = value.split("-")
        const year = Number(splittedDate[0])
        const month = Number(splittedDate[1])
        const day = Number(splittedDate[2])

        return new Date(year, month - 1, day).toUTCString();
    } catch (error) {
        handleInvalidValueError(value, attribute, CONTEXT_PARSE_DATE)
        return ""
    }
}

/**
 * Parses a string value and ensures it is valid.
 * @param {string | null | undefined} value - The value to parse.
 * @param {string} attribute - The attribute name for logging purposes.
 * @returns {string} - The validated string value.
 */
function parseStringOrEmpty(value: string | null | undefined, attribute: string): string {
    if (!value) {
        handleDefaultValueWarning(value, attribute, "", CONTEXT_PARSE_STRING_OR_EMPTY)
        return ""
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
        handleDefaultValueWarning(value, attribute, "[ ]", CONTEXT_PARSE_STRING_LIST)
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
    const parsedValue = Number(value);

    if (!value || isNaN(parsedValue)) {
        handleInvalidValueError(value, attribute, CONTEXT_PARSE_NUMBER)
    }

    return parsedValue;
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
        handleDefaultValueWarning(start, "START INDEX", "0", CONTEXT_PARSE_START_AND_END_INDEX)
        startIndex = 0
        handleDefaultValueWarning(end, "END INDEX", "9", CONTEXT_PARSE_START_AND_END_INDEX)
        endIndex = 9
    } else {
        startIndex = Number(start);
        endIndex = Number(end);

        if (isNaN(startIndex) || isNaN(endIndex)) {
            handleStartAndEndIndexValueError(start, end, CONTEXT_PARSE_START_AND_END_INDEX)
        }
    }

    return { startIndex, endIndex }
} // TODO Check about the cardinality of the indexes

/**
 * Parses a price value from a string.
 * @param {string | null | undefined} price - The price as a string.
 * @returns {number} - The parsed price.
 * @throws {Error} - Throws an error if the price is invalid.
 */
export function parsePrice(price: string | null | undefined): number {
    if (!price || isNaN(parseFloat(price))) {
        handleInvalidValueError(price, "PRICE", CONTEXT_PARSE_PRICE)
        return -1
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
        handleInvalidValueError(value, attribute, CONTEXT_PARSE_FILE)
        return new File(["content"], "error.txt", { type: "text/plain" })
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
        handleInvalidValueError(productIds, "PRODUCT_IDS", CONTEXT_PARSE_PRODUCT_IDS)
        return []
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
    const colorText = parseStringOrEmpty(formData.get(colorTextName)?.toString(), "COLOR_TEXT");
    const colorHex = parseStringOrEmpty(formData.get(colorHexName)?.toString(), "COLOR_HEX");
    const earSide = parseStringOrEmpty(formData.get(earSideName)?.toString(), "EAR_SIDE");

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

    if (type === adaptationRangeName) {
        return filterFunction.adaptationRangeType(value);
    }

    if (type === dustWaterResistanceName) {
        return filterFunction.waterDustResistanceType(value);
    }

    if (type === brandName) {
        return filterFunction.brandType(value);
    }

    if (type === earphoneShapeName) {
        return filterFunction.earphoneShapeType(value);
    }

    if (type === degreeOfLossName) {
        return filterFunction.degreeOfLossType(value);
    }

    handleInvalidValueError(type, "FILTER", CONTEXT_CONVERT_TO_OBJECT)
    return {}
}

/**
 * Parses the selected uses from a FormData object.
 * 
 * @param {FormData} formData - The form data containing use attributes.
 * @returns {string[]} An array of selected uses.
 */
function parseUses(formData: FormData): string[] {
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
function parseInclude(formData: FormData): string[] {
    const counter = parseNumber(formData.get(includeName)?.toString(), "INCLUDE_COUNTER")
    return getIncrementalValues(formData, counter, "INCLUDE")
}

/**
 * Parses the "requirements" section from FormData.
 * 
 * @param {FormData} formData - The form data containing requirements details.
 * @returns {string[]} A list of requirements items.
 */
function parseRequirements(formData: FormData): string[] {
    const counter = parseNumber(formData.get(bargainRequirementsName)?.toString(), "REQUIREMENTS_COUNTER")
    return getIncrementalValues(formData, counter, "REQUIREMENTS")
}

/**
 * Parses the water and dust resistance field from FormData.
 * 
 * @param {FormData} formData - The form data containing the resistance value.
 * @returns {boolean} True if water and dust resistance is enabled, otherwise false.
 */
function parseWaterDustResistance(formData: FormData): boolean {
    const resistanceElement = formData.get(hasDustWaterResistanceName)

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
function parseColors(formData: FormData): Array<{ name: string; hex: string; }> {
    const counterText = parseNumber(formData.get(colorTextName)?.toString(), "COLOR_TEXT")
    const counterHex = parseNumber(formData.get(colorHexName)?.toString(), "COLOR_HEX")

    if (counterText !== counterHex) {
        handleColorCountersValueError(counterText, counterHex, CONTEXT_PARSE_COLORS);
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
 * @returns {any} The parsed bargain attributes.
 */
export function parseBargainForm(formData: FormData): any {
    const newCode = parseString(formData.get(bargainCodeName)?.toString(), "CODE")
    const newTitle = parseString(formData.get(bargainTitleName)?.toString(), "TITLE")
    const newDescription = parseString(formData.get(bargainDescriptionName)?.toString(), "DESCRIPTION")
    const newRequirements = parseRequirements(formData)

    return {
        code: newCode,
        title: newTitle,
        description: newDescription,
        requirements: newRequirements
    }
}

/**
 * Parses novelty form data from FormData.
 * 
 * @param {FormData} formData - The form data containing novelty details.
 * @returns {Object} The parsed novelty attributes.
 */
export function parseNoveltyForm(formData: FormData): any {
    const newTitle = parseString(formData.get(noveltyTitleName)?.toString(), "TITLE")
    const newDescription = parseString(formData.get(noveltyDescriptionName)?.toString(), "DESCRIPTION")
    const newPromotionalImage = parseString(formData.get(promotionalImageName)?.toString(), "PROMOTIONAL_IMAGE")
    const newType = parseString(formData.get(noveltyTypeName)?.toString(), "TITLE")
    const newContext = parseString(formData.get(noveltyContextName)?.toString(), "DESCRIPTION")
    const newEndDate = parseDate(formData.get(endDateName)?.toString(), "PROMOTIONAL_IMAGE")

    return {
        title: newTitle,
        description: newDescription,
        promotionalImage: newPromotionalImage,
        type: newType,
        context: newContext,
        endDate: newEndDate,
    }
}

/**
 * Parses Shopping form data from FormData.
 * 
 * @param {FormData} formData - The form data containing shopping details.
 * @returns {any} The parsed shopping form.
 */
export function parseShoppingForm(formData: FormData): any {
    const newUserId = parseString(formData.get(userIdName)?.toString(), "USER_ID")
    const newUserName = parseString(formData.get(userNameName)?.toString(), "USER_NAME")
    const newUserFirstName = parseString(formData.get(userFirstName)?.toString(), "USER_FIRST_NAME")
    const newUserDNI = parseString(formData.get(userDNIName)?.toString(), "USER_DNI")
    const newPhoneNumber = parseString(formData.get(phoneNumberName)?.toString(), "PHONE_NUMBER")
    const newEmail = parseString(formData.get(emailName)?.toString(), "EMAIL")
    const newAddress = parseString(formData.get(addressName)?.toString(), "ADDRESS")
    const newAudiometryFile = parseFile(formData.get(audiometryFileName), "AUDIOMETRY_FILE")

    return {
        userId: newUserId,
        userName: newUserName,
        userFirstName: newUserFirstName,
        userDNI: newUserDNI,
        phoneNumber: newPhoneNumber,
        email: newEmail,
        address: newAddress,
        audiometryFile: newAudiometryFile,
    };
}

/**
 * Parses Contact form data from FormData.
 * 
 * @param {FormData} formData - The form data containing contact details.
 * @returns {any} The parsed contact form.
 */
export function parseContactForm(formData: FormData): any {
    const newName = parseString(formData.get(userNameName)?.toString(), "CONTACT_NAME")
    const newEmail = parseString(formData.get(contactEmailName)?.toString(), "CONTACT_EMAIL")
    const newSubject = parseString(formData.get(contactSubjectName)?.toString(), "CONTACT_SUBJECT")
    const newBody = parseString(formData.get(contactBodyName)?.toString(), "CONTACT_BODY")

    return {
        name: newName,
        email: newEmail,
        subject: newSubject,
        body: newBody,
    };
}

/**
 * Parses Send Audiometry File form data from FormData.
 * 
 * @param {FormData} formData - The form data containing audiometry form details.
 * @returns {any} The parsed contact form.
 */
export function parseSendAudiometryFileForm(formData: FormData): any {
    const newName = parseString(formData.get(userNameName)?.toString(), "CONTACT_NAME")
    const newEmail = parseString(formData.get(contactEmailName)?.toString(), "CONTACT_EMAIL")
    const newBody = parseString(formData.get(contactBodyName)?.toString(), "CONTACT_BODY")
    const newAudiometryFile = parseFile(formData.get(audiometryFileName), "AUDIOMETRY_FILE")

    return {
        name: newName,
        email: newEmail,
        body: newBody,
        audiometryFile: newAudiometryFile,
    };
}

/**
 * Parses Appointment form data from FormData.
 * 
 * @param {FormData} formData - The form data containing appointment details.
 * @returns {any} The parsed appointment form.
 */
export function parseAppointmentForm(formData: FormData): any {
    const newUserName = parseString(formData.get(userNameName)?.toString(), "APPOINTMENT_USER_NAME")
    const newEmail = parseString(formData.get(contactEmailName)?.toString(), "APPOINTMENT_EMAIL")
    const newPhoneNumber = parseString(formData.get(phoneNumberName)?.toString(), "APPOINTMENT_PHONE_NUMBER")
    const newBody = formData.get(contactBodyName)?.toString()

    return {
        userName: newUserName,
        email: newEmail,
        phoneNumber: newPhoneNumber,
        body: newBody ? newBody : "",
    };
}
