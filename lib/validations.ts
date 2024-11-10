import { adaptationRangeName, bargainCodeName, bargainDescriptionName, bargainTitleName, brandName, categoryNameParam, degreeOfLossName, earLocationName, earSideName, levelOfDiscretionName, nameName, noveltyDescriptionName, noveltyTitleName, priceName, productDescriptionName, promotionalImageName, usesName } from "@/app/model/JSONnames"

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

export function validateAddShoppingCart(formData: FormData){
    clearErrorMessagesList()
    checkIfNotEmpty(formData, earSideName, "No se ha seleccionado ningún lado del audífono.")
    return checkErrorMessagesList()
}

export function validateFormProduct(formData: FormData){
    clearErrorMessagesList()
    
    checkIfNotEmpty(formData, nameName, "No se ha introducido ningún nombre.")
    checkIfNotEmpty(formData, categoryNameParam, "No se ha elegido ninguna categoría.")
    checkIfNotEmpty(formData, brandName, "No se ha elegido ninguna marca.")
    checkIfNotEmpty(formData, priceName, "No se ha introducido ningún precio.")
    checkIfNotEmpty(formData, productDescriptionName, "No se ha introducido ninguna descripción.")
    checkIfNotEmpty(formData, adaptationRangeName, "No se ha elegido ningún rango de adaptación.")
    checkIfNotEmpty(formData, earLocationName, "No se ha introducido ningún nombre.")
    checkIfNotEmpty(formData, levelOfDiscretionName, "No se ha elegido ningún nivel de discrección.")
    checkIfNotEmpty(formData, degreeOfLossName, "No se ha elegido ningún grado de pérdida.")
    checkIfNotEmpty(formData, usesName, "No se ha elegido ningún uso.")

    return checkErrorMessagesList()
}

export function validateFormBargain(formData: FormData){
    clearErrorMessagesList()
    
    checkIfNotEmpty(formData, bargainCodeName, "No se ha introducido ningún código.")
    checkIfNotEmpty(formData, bargainTitleName, "No se ha introducido ningún título.")
    checkIfNotEmpty(formData, bargainDescriptionName, "No se ha introducido ninguna descripción.")

    return checkErrorMessagesList()
}

export function validateFormNovelty(formData: FormData){
    clearErrorMessagesList()
    
    checkIfNotEmpty(formData, noveltyTitleName, "No se ha introducido ningún título.")
    checkIfNotEmpty(formData, noveltyDescriptionName, "No se ha introducido ninguna descripción.")
    checkIfNotEmpty(formData, promotionalImageName, "No se ha introducido ninguna URL.")

    return checkErrorMessagesList()
}

