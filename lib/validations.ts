import { EARPHONE_VALUE } from "@/app/model/entities/product/enums/Category"
import { adaptationRangeName, bargainCodeName, bargainDescriptionName, bargainTitleName, brandName, categoryName, categoryNameParam, colorTextName, degreeOfLossName, earLocationName, earphoneShapeName, earSideName, imageURLName, levelOfDiscretionName, nameName, noveltyDescriptionName, noveltyTitleName, priceName, productDescriptionName, promotionalImageName, usesName } from "@/app/model/JSONnames"

export let errorMessagesList: string[] = []

function clearErrorMessagesList(){
    errorMessagesList = []
}

function checkErrorMessagesList(){
    return errorMessagesList.length === 0
}

function checkIfNotEmpty(formData: FormData, field: string, message: string){
    const value = formData.get(field)?.toString()

    if (!value){
        errorMessagesList.push(message)
    }
}

function checkIfValidBargainCode(formData: FormData){
    const code = formData.get(bargainCodeName)?.toString()
    console.log(code?.length)
    const MIN_SIZE = 4
    const MAX_SIZE = 6

    if (!code || code.length < MIN_SIZE || MAX_SIZE < code.length){
        errorMessagesList.push("Código Inválido.")
    }
}

export function validateAddShoppingCart(formData: FormData){
    clearErrorMessagesList()
    checkIfNotEmpty(formData, earSideName, "No se ha seleccionado ningún lado del audífono.")
    return checkErrorMessagesList()
}

export function validateFormProduct(formData: FormData){
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

export function validateFormBargain(formData: FormData){
    clearErrorMessagesList()
    
    checkIfNotEmpty(formData, bargainCodeName, "No se ha introducido ningún código.")
    checkIfNotEmpty(formData, bargainTitleName, "No se ha introducido ningún título.")
    checkIfNotEmpty(formData, bargainDescriptionName, "No se ha introducido ninguna descripción.")

    return checkErrorMessagesList()
}

export function validateBargainInput(formData: FormData){
    clearErrorMessagesList()

    checkIfNotEmpty(formData, bargainCodeName, "No se ha introducido ningún código.")
    checkIfValidBargainCode(formData)

    return checkErrorMessagesList()
}

export function validateFormNovelty(formData: FormData){
    clearErrorMessagesList()
    
    checkIfNotEmpty(formData, noveltyTitleName, "No se ha introducido ningún título.")
    checkIfNotEmpty(formData, noveltyDescriptionName, "No se ha introducido ninguna descripción.")
    checkIfNotEmpty(formData, promotionalImageName, "No se ha introducido ninguna URL.")

    return checkErrorMessagesList()
}

