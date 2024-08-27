export const errorMessagesList: string[] = []

function clearErrorMessagesList(){
    errorMessagesList.filter((_) => false)
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
    checkIfNotEmpty(formData, "earSide", "No se ha seleccionado ningún lado del audífono.")
    return checkErrorMessagesList()
}

export function validateFormProduct(formData: FormData){
    clearErrorMessagesList()
    
    checkIfNotEmpty(formData, "name", "No se ha introducido ningún nombre.")
    checkIfNotEmpty(formData, "category", "No se ha elegido ninguna categoría.")
    checkIfNotEmpty(formData, "brand", "No se ha elegido ninguna marca.")
    checkIfNotEmpty(formData, "price", "No se ha introducido ningún precio.")
    checkIfNotEmpty(formData, "description", "No se ha introducido ninguna descripción.")
    checkIfNotEmpty(formData, "adaptation_range", "No se ha elegido ningún rango de adaptación.")
    checkIfNotEmpty(formData, "ear_location", "No se ha introducido ningún nombre.")
    checkIfNotEmpty(formData, "level_of_discretion", "No se ha elegido ningún nivel de discrección.")
    checkIfNotEmpty(formData, "degree_of_loss", "No se ha elegido ningún grado de pérdida.")
    checkIfNotEmpty(formData, "uses", "No se ha elegido ningún uso.")

    return checkErrorMessagesList()
}

