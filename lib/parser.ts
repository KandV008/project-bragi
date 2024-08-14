'use server';

export function parseProductCategory(category: string | null): string {
    if (!category) {
        console.log("ERROR: CATEGORY is null or empty")
        console.log("CATEGORY VALUE:", category)
        throw new Error("Category is null or empty");
    }

    return category
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

export function parseBrand(brand: string | null) {
    if (!brand) {
        console.log("ERROR: BRAND is null or empty")
        console.log("BRAND VALUE:", brand)
        throw new Error("Brand is null or empty");
    }

    return brand
}

export function parsePrice(price: string | null) {
    if (!price || !(isNaN(parseFloat(price)))) {
        console.log("ERROR: PRICE is null or not valid number")
        console.log("PRICE VALUE:", price)
        throw new Error("Price is null or not valid number");
    }

    return parseFloat(price)
}

export function parseProductId(id: string | null) {
    if (!id) {
        console.log("ERROR: ID is null or empty")
        console.log("ID VALUE:", id)
        throw new Error("Id is null or empty");
    }

    return id
}

export function parseKeyword(keyword: string | null){
    if (!keyword) {
        console.log("ERROR: KEYWORD is null or empty");
        console.log("KEYWORD VALUE:", keyword);
        throw new Error("Keyword is null or empty");
      }

      return keyword
}