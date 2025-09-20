import { EARPHONE_VALUE } from "@/app/model/entities/product/enums/Category"
import { adaptationRangeName, addressName, audiometryFileName, bargainCodeName, bargainDescriptionName, bargainTitleName, brandName, categoryName, contactBodyName, contactEmailName, contactSubjectName, degreeOfLossName, earphoneShapeName, earSideName, emailName, imageURLName, nameName, noveltyDescriptionName, noveltyTitleName, phoneNumberName, priceName, productDescriptionName, promotionalImageName, userFirstName, userIdName, userNameName, usesName } from "@/app/config/JSONnames"
import { EMPTY_ADAPTATION_RANGE_INPUT_MESSAGE, EMPTY_BARGAIN_CODE_INPUT_MESSAGE, EMPTY_TITLE_INPUT_MESSAGE, EMPTY_BRAND_INPUT_MESSAGE, EMPTY_CATEGORY_INPUT_MESSAGE, EMPTY_DEGREE_OF_LOSS_INPUT_MESSAGE, EMPTY_DESCRIPTION_INPUT_MESSAGE, EMPTY_EARPHONE_SHAPE_INPUT_MESSAGE, EMPTY_IMAGE_URL_INPUT_MESSAGE, EMPTY_NAME_INPUT_MESSAGE, EMPTY_PRICE_INPUT_MESSAGE, EMPTY_USES_INPUT_MESSAGE, INVALID_BARGAIN_CODE_MESSAGE, NOT_SELECTED_EAR_SIDE_MESSAGE, EMPTY_USER_ID_INPUT_MESSAGE, EMPTY_USER_NAME_INPUT_MESSAGE, EMPTY_USER_FIRST_NAME_INPUT_MESSAGE, EMPTY_PHONE_NUMBER_INPUT_MESSAGE, EMPTY_EMAIL_INPUT_MESSAGE, EMPTY_ADDRESS_INPUT_MESSAGE, EMPTY_AUDIOMETRY_FILE_INPUT_MESSAGE, EMPTY_SUBJECT_INPUT_MESSAGE, EMPTY_BODY_INPUT_MESSAGE } from "./validationsMessages"

/**
 * List to store validation error messages.
 */
export let errorMessagesList: string[] = []

/**
 * Clears the error messages list.
 */
function clearErrorMessagesList() {
    errorMessagesList = []
}

/**
 * Checks if there are any error messages.
 * @returns {boolean} - Returns true if no errors exist, false otherwise.
 */
function checkErrorMessagesList(): boolean {
    return errorMessagesList.length === 0
}

/**
 * Validates if a form field is not empty.
 * @param {FormData} formData - The form data.
 * @param {string} field - The field name.
 * @param {string} message - The error message if the field is empty.
 */
function checkIfNotEmpty(formData: FormData, field: string, message: string) {
    const value = formData.get(field)?.toString()

    if (!value) {
        errorMessagesList.push(message)
    }
}

/**
 * Validates if the bargain code meets the required length constraints.
 * @param {FormData} formData - The form data.
 */
function checkIfValidBargainCode(formData: FormData) {
    const code = formData.get(bargainCodeName)?.toString()

    const MIN_SIZE = 4
    const MAX_SIZE = 6

    if (!code || code.length < MIN_SIZE || MAX_SIZE < code.length) {
        errorMessagesList.push(INVALID_BARGAIN_CODE_MESSAGE)
    }
}

/**
 * Validates the form for adding a product to the shopping cart.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the form is valid.
 */
export function validateAddShoppingCart(formData: FormData): boolean {
    clearErrorMessagesList()
    checkIfNotEmpty(formData, earSideName, NOT_SELECTED_EAR_SIDE_MESSAGE)
    return checkErrorMessagesList()
} // TODO Maybe I should use a library for form validation (?)

/**
 * Validates the form for creating or updating a product.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the form is valid.
 */
export function validateFormProduct(formData: FormData): boolean {
    clearErrorMessagesList()

    checkIfNotEmpty(formData, nameName, EMPTY_NAME_INPUT_MESSAGE)
    checkIfNotEmpty(formData, categoryName, EMPTY_CATEGORY_INPUT_MESSAGE)
    checkIfNotEmpty(formData, brandName, EMPTY_BRAND_INPUT_MESSAGE)
    checkIfNotEmpty(formData, priceName, EMPTY_PRICE_INPUT_MESSAGE)
    checkIfNotEmpty(formData, imageURLName, EMPTY_IMAGE_URL_INPUT_MESSAGE)
    checkIfNotEmpty(formData, productDescriptionName, EMPTY_DESCRIPTION_INPUT_MESSAGE)

    if (formData.get(categoryName) === EARPHONE_VALUE) {
        checkIfNotEmpty(formData, adaptationRangeName, EMPTY_ADAPTATION_RANGE_INPUT_MESSAGE)
        checkIfNotEmpty(formData, earphoneShapeName, EMPTY_EARPHONE_SHAPE_INPUT_MESSAGE)
        checkIfNotEmpty(formData, degreeOfLossName, EMPTY_DEGREE_OF_LOSS_INPUT_MESSAGE)
        checkIfNotEmpty(formData, usesName, EMPTY_USES_INPUT_MESSAGE)
    }

    return checkErrorMessagesList()
}

/**
 * Validates the form for creating a bargain.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the form is valid.
 */
export function validateFormBargain(formData: FormData): boolean {
    clearErrorMessagesList()

    checkIfNotEmpty(formData, bargainCodeName, EMPTY_BARGAIN_CODE_INPUT_MESSAGE)
    checkIfNotEmpty(formData, bargainTitleName, EMPTY_TITLE_INPUT_MESSAGE)
    checkIfNotEmpty(formData, bargainDescriptionName, EMPTY_DESCRIPTION_INPUT_MESSAGE)

    return checkErrorMessagesList()
}

/**
 * Validates the input for a bargain code.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the input is valid.
 */
export function validateBargainInput(formData: FormData): boolean {
    clearErrorMessagesList()

    checkIfNotEmpty(formData, bargainCodeName, EMPTY_BARGAIN_CODE_INPUT_MESSAGE)
    checkIfValidBargainCode(formData)

    return checkErrorMessagesList()
}

/**
 * Validates the form for creating a novelty.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the form is valid.
 */
export function validateFormNovelty(formData: FormData): boolean {
    clearErrorMessagesList()

    checkIfNotEmpty(formData, noveltyTitleName, EMPTY_TITLE_INPUT_MESSAGE)
    checkIfNotEmpty(formData, noveltyDescriptionName, EMPTY_DESCRIPTION_INPUT_MESSAGE)
    checkIfNotEmpty(formData, promotionalImageName, EMPTY_IMAGE_URL_INPUT_MESSAGE)

    return checkErrorMessagesList()
}

/**
 * Validates the form for creating an order.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the form is valid.
 */
export function validateFormShopping(formData: FormData): boolean {
    clearErrorMessagesList()

    checkIfNotEmpty(formData, userIdName, EMPTY_USER_ID_INPUT_MESSAGE)
    checkIfNotEmpty(formData, userNameName, EMPTY_USER_NAME_INPUT_MESSAGE)
    checkIfNotEmpty(formData, userFirstName, EMPTY_USER_FIRST_NAME_INPUT_MESSAGE)
    checkIfNotEmpty(formData, phoneNumberName, EMPTY_PHONE_NUMBER_INPUT_MESSAGE)
    checkIfNotEmpty(formData, emailName, EMPTY_EMAIL_INPUT_MESSAGE)
    checkIfNotEmpty(formData, addressName, EMPTY_ADDRESS_INPUT_MESSAGE)
    checkIfNotEmpty(formData, audiometryFileName, EMPTY_AUDIOMETRY_FILE_INPUT_MESSAGE)

    return checkErrorMessagesList()
}

/**
 * Validates the contact form by checking if required fields are not empty.
 * Displays error messages for missing fields.
 *
 * @param {FormData} formData - The form data containing input values.
 * @returns {boolean} - Returns true if the form is valid, otherwise false.
 */
export function validateContactForm(formData: FormData): boolean {
    clearErrorMessagesList()

    checkIfNotEmpty(formData, userNameName, EMPTY_USER_NAME_INPUT_MESSAGE)
    checkIfNotEmpty(formData, contactEmailName, EMPTY_EMAIL_INPUT_MESSAGE)
    checkIfNotEmpty(formData, contactSubjectName, EMPTY_SUBJECT_INPUT_MESSAGE)
    checkIfNotEmpty(formData, contactBodyName, EMPTY_BODY_INPUT_MESSAGE)

    return checkErrorMessagesList()
}

/**
 * Validates the send audiometry file form by checking if required fields are not empty.
 * Displays error messages for missing fields.
 *
 * @param {FormData} formData - The form data containing input values.
 * @returns {boolean} - Returns true if the form is valid, otherwise false.
 */
export function validateSendAudiometryFileForm(formData: FormData): boolean {
    clearErrorMessagesList()

    checkIfNotEmpty(formData, userNameName, EMPTY_USER_NAME_INPUT_MESSAGE)
    checkIfNotEmpty(formData, contactEmailName, EMPTY_EMAIL_INPUT_MESSAGE)
    checkIfNotEmpty(formData, contactBodyName, EMPTY_BODY_INPUT_MESSAGE)

    return checkErrorMessagesList()
}

/**
 * Validates the appointment form by ensuring required fields are not empty.
 * Displays error messages for missing fields.
 *
 * @param {FormData} formData - The form data containing input values.
 * @returns {boolean} - Returns true if the form is valid, otherwise false.
 */
export function validateAppointmentForm(formData: FormData): boolean {
    clearErrorMessagesList()

    checkIfNotEmpty(formData, userNameName, EMPTY_USER_NAME_INPUT_MESSAGE)
    checkIfNotEmpty(formData, contactEmailName, EMPTY_EMAIL_INPUT_MESSAGE)
    checkIfNotEmpty(formData, phoneNumberName, EMPTY_PHONE_NUMBER_INPUT_MESSAGE)

    return checkErrorMessagesList()
}