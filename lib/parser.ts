import { colorList } from "@/app/model/entities/enums/Color";
import { usesList } from "@/app/model/entities/product/enums/earphoneAttributes/Uses";
import { adaptationRangeName, brandName, categoryNameParam, degreeOfLossName, productDescriptionName, earLocationName, earSideName, guaranteeName, imageURLName, levelOfDiscretionName, nameName, priceName, productIdName, bargainCodeName, bargainTitleName, bargainDescriptionName, promotionalImageName, noveltyDescriptionName, noveltyTitleName, includeName, colorTextName, colorHexName } from "@/app/model/JSONnames";

export function parseString(value: string | null | undefined, attribute: string) {
    if (!value) {
        console.error("ERROR:", attribute, "is not valid");
        console.error(attribute, "VALUE:", value)
        throw new Error(`${attribute} is not valid. Value -> ${value}`)
    }

    return value
}

export function parseStringList(value: string | null | undefined, attribute: string) {
    if (!value) {
        console.warn("WARNING:", attribute, "is not valid");
        console.warn(attribute, "VALUE:", value)
        console.warn("USE DEFAULT VALUE -> [ ]")
        return []
    }

    return value.split(",")
}

export function parseNumber(value: string | null | undefined, attribute: string) {
    if (!value || isNaN(parseInt(value))) {
        console.error("ERROR:", attribute, "is not valid");
        console.error(attribute, "VALUE:", value)
        throw new Error(`${attribute} is not valid. Value -> ${value}`)
    }

    return parseInt(value)
}

export function parseStartAndEndIndex(start: string | null, end: string | null) {
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

export function parsePrice(price: string | null | undefined) {
    if (!price || isNaN(parseFloat(price))) {
        console.error("ERROR: PRICE is null or not valid number")
        console.error("PRICE VALUE:", price)
        throw new Error("Price is null or not valid number");
    }

    return parseFloat(price)
}

export function parseProductIds(productIds: string[] | null | undefined) {
    if (!productIds) {
        console.error("ERROR: PRODUCT_IDS are null or empty");
        console.error("PRODUCT_IDS VALUE:", productIds);
        throw new Error("Product_Ids are null or empty");
    }

    return productIds
}

export function parseNewProductToShoppingList(formData: FormData) {
    const productId = parseString(formData.get(productIdName)?.toString(), "PRODUCT_ID");
    const colorText = parseString(formData.get(colorTextName)?.toString(), "COLOR");
    const colorHex = parseString(formData.get(colorHexName)?.toString(), "COLOR");
    const earSide = parseString(formData.get(earSideName)?.toString(), "EAR_SIDE");
    const guarantee = parseString(formData.get(guaranteeName)?.toString(), "GUARANTEE");
    const name = parseString(formData.get(nameName)?.toString(), "NAME");
    const brand = parseString(formData.get(brandName)?.toString(), "BRAND");
    const price = parsePrice(formData.get(priceName)?.toString());
    const imageURL = parseString(formData.get(imageURLName)?.toString(), "IMAGE_URL")

    return { productId, colorText, colorHex, earSide, guarantee, name, brand, price, imageURL }
}

export function parseUpdateOfShoppingList(formData: FormData) {
    const productId = parseString(formData.get(productIdName)?.toString(), "PRODUCT_ID");
    const colorText = parseString(formData.get(colorTextName)?.toString(), "COLOR");
    const colorHex = parseString(formData.get(colorHexName)?.toString(), "COLOR");
    const earSide = parseString(formData.get(earSideName)?.toString(), "EAR_SIDE");
    const guarantee = parseString(formData.get(guaranteeName)?.toString(), "GUARANTEE");

    return { productId, colorText, colorHex, earSide, guarantee }
}

export function parseFilters(filters: string | null) {
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

const filterFunction = {
    adaptationRangeType: (value: string) => ({ adaptation_range: value }),
    waterDustResistanceType: (value: string) => ({ dust_water_resistance: "true" === value }),
    brandType: (value: string) => ({ brand: value }),
    earphoneShapeType: (value: string) => ({ earphone_shape: value }),
    degreeOfLossType: (value: string) => ({ degree_of_loss: value }),
};

function convertToObject(type: string, value: string) {

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

function getIncrementalValues(formData: FormData, counter: number, tag: string) {
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

export function parseInclude(formData: FormData) {
    const counter = parseNumber(formData.get(includeName)?.toString(), "INCLUDE_COUNTER")
    return getIncrementalValues(formData, counter, "INCLUDE")
}

export function parseWaterDustResistance(formData: FormData) {
    const resistanceElement = formData.get("YES")

    if (resistanceElement === null) {
        return false
    }

    const resistance = parseString(resistanceElement.toString(), "WATER DUST RESISTANCE")
    return resistance === "YES"
}

export function parseColors(formData: FormData) {
    const colors: any[] = []

    colorList.forEach((element) => {
        const counter = parseNumber(formData.get(element)?.toString(), element)
        const imageURLs = getIncrementalValues(formData, counter, element)
        
        if (imageURLs.length !== 0){
            colors.push({
                color: element,
                images: imageURLs
            })
        }
    })

    return colors
}

export function parseProductForm(formData: FormData){
    const newName = parseString(formData.get(nameName)?.toString(), "NAME")
    const newCategory = parseString(formData.get(categoryNameParam)?.toString(), "CATEGORY")
    const newBrand = parseString(formData.get(brandName)?.toString(), "BRAND")
    const newPrice = parsePrice(formData.get(priceName)?.toString())
    const newDescription = parseString(formData.get(productDescriptionName)?.toString(), "DESCRIPTION")
    const newColors = parseColors(formData)
    const newInclude = parseInclude(formData)
    const newAdaptationRange = parseString(formData.get(adaptationRangeName)?.toString(), "ADAPTATION_RANGE")
    const newWaterDustResistance = parseWaterDustResistance(formData)
    const newEarLocation = parseString(formData.get(earLocationName)?.toString(), "EAR_LOCATION")
    const newLevelOfDiscretion = parseString(formData.get(levelOfDiscretionName)?.toString(), "LEVEL_OF_DISCRETION")
    const newDegreeOfLoss = parseString(formData.get(degreeOfLossName)?.toString(), "DEGREE_OF_LOSS")
    const newUses = parseUses(formData)

    return {
        name: newName,
        category: newCategory,
        price: newPrice,
        description: newDescription,
        colors: newColors,
        include: newInclude,
        adaptation_range: newAdaptationRange,
        dust_water_resistance: newWaterDustResistance,
        brand: newBrand,
        location: newEarLocation,
        level_of_discretion: newLevelOfDiscretion,
        degree_of_loss: newDegreeOfLoss,
        uses: newUses
    }
}

export function parseBargainForm(formData: FormData){
    const newCode = parseString(formData.get(bargainCodeName)?.toString(), "CODE")
    const newTitle = parseString(formData.get(bargainTitleName)?.toString(), "TITLE")
    const newDescription = parseString(formData.get(bargainDescriptionName)?.toString(), "DESCRIPTION")
    
    return {
        code: newCode,
        title: newTitle,
        description: newDescription,
    }
}

export function parseNoveltyForm(formData: FormData){
    const newTitle = parseString(formData.get(noveltyTitleName)?.toString(), "TITLE")
    const newDescription = parseString(formData.get(noveltyDescriptionName)?.toString(), "DESCRIPTION")
    const newPromotionalImage = parseString(formData.get(promotionalImageName)?.toString(), "PROMOTIONAL_IMAGE")
    
    return {
        title: newTitle,
        description: newDescription,
        promotionalImage: newPromotionalImage,
    }
}
