import { colorList } from "@/app/model/entities/enums/Color";
import { usesList } from "@/app/model/entities/enums/Uses";

export function parseString(value: string | null | undefined, attribute: string) {
    if (!value) {
        console.log("ERROR:", attribute, "is not valid");
        console.log(attribute, "VALUE:", value)
        throw new Error(`${attribute} is not valid. Value -> ${value}`)
    }

    return value
}

export function parseStringList(value: string | null | undefined, attribute: string) {
    if (!value) {
        console.log("WARNING:", attribute, "is not valid");
        console.log(attribute, "VALUE:", value)
        console.log("USE DEFAULT VALUE -> [ ]")
        return []
    }

    return value.split(",")
}

export function parseNumber(value: string | null | undefined, attribute: string) {
    if (!value || isNaN(parseInt(value))) {
        console.log("ERROR:", attribute, "is not valid");
        console.log(attribute, "VALUE:", value)
        throw new Error(`${attribute} is not valid. Value -> ${value}`)
    }

    return parseInt(value)
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
    if (!price || isNaN(parseFloat(price))) {
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

const adaptationRangeType = "adaptation_range";
const waterDustResistanceType = "dust_water_resistance";
const brandType = "brand";
const earLocationType = "location";
const levelOfDiscretionType = "level_of_discretion";
const degreeOfLossType = "degree_of_loss";

const filterFunction = {
    adaptationRangeType: (value: string) => ({ adaptation_range: value }),
    waterDustResistanceType: (value: string) => ({ dust_water_resistance: "true" === value }),
    brandType: (value: string) => ({ brand: value }),
    earLocationType: (value: string) => ({ location: value }),
    levelOfDiscretionType: (value: string) => ({ level_of_discretion: value }),
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

    if (type === earLocationType) {
        return filterFunction.earLocationType(value);
    }

    if (type === levelOfDiscretionType) {
        return filterFunction.levelOfDiscretionType(value);
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
    const counter = parseNumber(formData.get("INCLUDE")?.toString(), "INCLUDE_COUNTER")
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
    const newName = parseString(formData.get("name")?.toString(), "NAME")
    const newCategory = parseString(formData.get("category")?.toString(), "CATEGORY")
    const newBrand = parseString(formData.get("brand")?.toString(), "BRAND")
    const newPrice = parsePrice(formData.get("price")?.toString())
    const newDescription = parseString(formData.get("description")?.toString(), "DESCRIPTION")
    const newColors = parseColors(formData)
    const newInclude = parseInclude(formData)
    const newAdaptationRange = parseString(formData.get("adaptation_range")?.toString(), "ADAPTATION_RANGE")
    const newWaterDustResistance = parseWaterDustResistance(formData)
    const newEarLocation = parseString(formData.get("ear_location")?.toString(), "EAR_LOCATION")
    const newLevelOfDiscretion = parseString(formData.get("level_of_discretion")?.toString(), "LEVEL_OF_DISCRETION")
    const newDegreeOfLoss = parseString(formData.get("degree_of_loss")?.toString(), "DEGREE_OF_LOSS")
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

