import { EARPHONE_VALUE } from "@/app/model/entities/product/enums/Category"
import { adaptationRangeName, addressName, audiometryFileName, bargainCodeName, bargainDescriptionName, bargainTitleName, brandName, categoryName, contactBodyName, contactEmailName, contactSubjectName, degreeOfLossName, earphoneShapeName, earSideName, emailName, imageURLName, nameName, noveltyDescriptionName, noveltyTitleName, phoneNumberName, priceName, productDescriptionName, promotionalImageName, userFirstName, userIdName, userNameName, usesName } from "@/app/model/JSONnames"

/**
 * List to store validation error messages.
 */
export let errorMessagesList: string[] = []

/**
 * Clears the error messages list.
 */
function clearErrorMessagesList(){
    errorMessagesList = []
}

/**
 * Checks if there are any error messages.
 * @returns {boolean} - Returns true if no errors exist, false otherwise.
 */
function checkErrorMessagesList(): boolean{
    return errorMessagesList.length === 0
}

/**
 * Validates if a form field is not empty.
 * @param {FormData} formData - The form data.
 * @param {string} field - The field name.
 * @param {string} message - The error message if the field is empty.
 */
function checkIfNotEmpty(formData: FormData, field: string, message: string){
    const value = formData.get(field)?.toString()

    if (!value){
        errorMessagesList.push(message)
    }
}

/**
 * Validates if the bargain code meets the required length constraints.
 * @param {FormData} formData - The form data.
 */
function checkIfValidBargainCode(formData: FormData){
    const code = formData.get(bargainCodeName)?.toString()

    const MIN_SIZE = 4
    const MAX_SIZE = 6

    if (!code || code.length < MIN_SIZE || MAX_SIZE < code.length){
        errorMessagesList.push("Código Inválido.")
    }
}

/**
 * Validates the form for adding a product to the shopping cart.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the form is valid.
 */
export function validateAddShoppingCart(formData: FormData): boolean{
    clearErrorMessagesList()
    checkIfNotEmpty(formData, earSideName, "No se ha seleccionado ningún lado del audífono.")
    return checkErrorMessagesList()
}

/**
 * Validates the form for creating or updating a product.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the form is valid.
 */
export function validateFormProduct(formData: FormData): boolean{
    clearErrorMessagesList()
    
    checkIfNotEmpty(formData, nameName, "No se ha introducido ningún nombre.")
    checkIfNotEmpty(formData, categoryName, "No se ha elegido ninguna categoría.")
    checkIfNotEmpty(formData, brandName, "No se ha elegido ninguna marca.")
    checkIfNotEmpty(formData, priceName, "No se ha introducido ningún precio.")
    checkIfNotEmpty(formData, imageURLName, "No se ha introducido ninguna URL para la imagen.")
    checkIfNotEmpty(formData, productDescriptionName, "No se ha introducido ninguna descripción.")

    if (formData.get(categoryName) === EARPHONE_VALUE){
        checkIfNotEmpty(formData, adaptationRangeName, "No se ha elegido ningún rango de adaptación.")
        checkIfNotEmpty(formData, earphoneShapeName, "No se ha introducido ninguna forma de audífono.")
        checkIfNotEmpty(formData, degreeOfLossName, "No se ha elegido ningún grado de pérdida.")
        checkIfNotEmpty(formData, usesName, "No se ha elegido ningún uso.")    
    }
    
    return checkErrorMessagesList()
}

/**
 * Validates the form for creating a bargain.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the form is valid.
 */
export function validateFormBargain(formData: FormData): boolean{
    clearErrorMessagesList()
    
    checkIfNotEmpty(formData, bargainCodeName, "No se ha introducido ningún código.")
    checkIfNotEmpty(formData, bargainTitleName, "No se ha introducido ningún título.")
    checkIfNotEmpty(formData, bargainDescriptionName, "No se ha introducido ninguna descripción.")

    return checkErrorMessagesList()
}

/**
 * Validates the input for a bargain code.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the input is valid.
 */
export function validateBargainInput(formData: FormData): boolean{
    clearErrorMessagesList()

    checkIfNotEmpty(formData, bargainCodeName, "No se ha introducido ningún código.")
    checkIfValidBargainCode(formData)

    return checkErrorMessagesList()
}

/**
 * Validates the form for creating a novelty.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the form is valid.
 */
export function validateFormNovelty(formData: FormData): boolean{
    clearErrorMessagesList()
    
    checkIfNotEmpty(formData, noveltyTitleName, "No se ha introducido ningún título.")
    checkIfNotEmpty(formData, noveltyDescriptionName, "No se ha introducido ninguna descripción.")
    checkIfNotEmpty(formData, promotionalImageName, "No se ha introducido ninguna URL.")

    return checkErrorMessagesList()
}

/**
 * Validates the form for creating an order.
 * @param {FormData} formData - The form data.
 * @returns {boolean} - Returns true if the form is valid.
 */
export function validateFormShopping(formData: FormData): boolean{
    clearErrorMessagesList()
    
    checkIfNotEmpty(formData, userIdName, "No se ha introducido ningún nombre.")
    checkIfNotEmpty(formData, userNameName, "No se ha elegido ninguna categoría.")
    checkIfNotEmpty(formData, userFirstName, "No se ha elegido ninguna marca.")
    checkIfNotEmpty(formData, phoneNumberName, "No se ha introducido ningún precio.")
    checkIfNotEmpty(formData, emailName, "No se ha introducido ninguna URL para la imagen.")
    checkIfNotEmpty(formData, addressName, "No se ha introducido ninguna descripción.")
    checkIfNotEmpty(formData, audiometryFileName, "No se ha introducido ninguna descripción.")

    return checkErrorMessagesList()
}

export function validateContactForm(formData: FormData): boolean{
    clearErrorMessagesList()

    checkIfNotEmpty(formData, contactEmailName, "No se ha introducido ningún correo electrónico.")
    checkIfNotEmpty(formData, contactSubjectName, "No se ha escrito ningún asunto.")
    checkIfNotEmpty(formData, contactBodyName, "No se ha escrito ningún mensaje en el cuerpo.")

    return checkErrorMessagesList()
}