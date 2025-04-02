import { productIdName, nameName, categoryName, brandName, priceName, imageURLName, earphoneShapeName, colorTextName, colorHexName, earSideName, adaptationRangeName, dustWaterResistanceName, degreeOfLossName, productDescriptionName, usesName, includeName, hasDustWaterResistanceName, bargainCodeName, bargainTitleName, bargainDescriptionName, noveltyTitleName, noveltyDescriptionName, promotionalImageName, userIdName, userNameName, userFirstName, phoneNumberName, emailName, addressName, audiometryFileName, contactEmailName, contactSubjectName, contactBodyName } from "@/app/config/JSONnames"
import { parseAppointmentForm, parseBargainForm, parseContactForm, parseFile, parseFilters, parseNewProductToShoppingList, parseNoveltyForm, parseNumber, parsePrice, parseProductForm, parseProductIds, parseShoppingForm, parseStartAndEndIndex, parseString, parseStringList, parseUpdateOfShoppingList } from "./parser"
import { waterDustResistanceList } from "@/app/model/entities/product/enums/earphoneAttributes/WaterDustResistance"

describe("parser", () => {
    const exampleAttribute = "TEST"

    it("should parse a text into string", () => {
        const exampleValue = "example"

        const result = parseString(exampleValue, exampleAttribute)

        assert.isString(result, "String parser doesn't work. It is not a string.")
        assert.equal(result, exampleValue, "String parser doesn't work. It is not the correct string.")
    })

    it("should not parse a null or undefined into string and will throw an Error", () => {
        const testCases = [null, undefined];
    
        testCases.forEach((exampleValue) => {
            assert.throws(
                () => parseString(exampleValue, exampleAttribute),
                Error,
                `${exampleAttribute} is not valid. Value -> ${exampleValue}`
            );
        });
    });

    it("should parse a text with comas  into a list of strings", () => {
        const exampleValue = "example1, example2, example3"

        const result = parseStringList(exampleValue, exampleAttribute)

        assert.lengthOf(result, exampleValue.split(",").length, "String List parser doesn't work")
    })

    it("should not parse a null or undefined into a list of string", () => {
        const testCases = [null, undefined];
    
        testCases.forEach((exampleValue) => {
            const result = parseStringList(exampleValue, exampleAttribute)

            assert.lengthOf(result, 0, "String List parse doesn't work")            
        });
    });
    
    it("should parse a text value into number", () => {
        const exampleValue = "123"

        const result = parseNumber(exampleValue, exampleAttribute)

        checkNumber(result, exampleValue, "Number parser doesn't work")
    })

    it("should not parse a null, undefined or not a number into number and will throw an Error", () => {
        const testCases = [null, undefined, "not a number"];
    
        testCases.forEach((exampleValue) => {
            assert.throws(
                () => parseNumber(exampleValue, exampleAttribute),
                Error,
                `${exampleAttribute} is not valid. Value -> ${exampleValue}`
            );
        });
    });

    it("should parse texts values into indexes", () => {
        const exampleValue = ["1", "2"]

        const {startIndex, endIndex} = parseStartAndEndIndex(exampleValue[0], exampleValue[1])
        
        checkNumber(startIndex, exampleValue[0], "Start Index parser doesn't work")
        checkNumber(endIndex, exampleValue[1], "End Index parser doesn't work")
    })

    it("should parse a null into default indexes", () => {
        const testCases = [null];
    
        testCases.forEach((exampleValue) => {
            const {startIndex, endIndex} = parseStartAndEndIndex(exampleValue, exampleValue)
            checkNumber(startIndex, "0", "Start Index parser doesn't work")
            checkNumber(endIndex, "9", "End Index parser doesn't work")    
        });
    });

    it("should not parse a not a number into number and will throw an Error", () => {
        const exampleValue = "not a number";
    
        assert.throws(
            () => parseStartAndEndIndex(exampleValue, exampleAttribute),
            Error,
            "Start or End are not numbers"
        );
    });

    it("should parse a text value into price", () => {
        const exampleValue = "123"

        const result = parsePrice(exampleValue)

        checkNumber(result, exampleValue, "Price parser doesn't work")
    })

    it("should not parse a null, undefined or not a number into price and will throw an Error", () => {
        const testCases = [null, undefined, "not a number"];
    
        testCases.forEach((exampleValue) => {
            assert.throws(
                () => parsePrice(exampleValue),
                Error,
                "Price is null or not valid number"
            );
        });
    });

    it("should parse a text into File Object", () => {
        const exampleAttribute = "exampleFile";
        const exampleValue = new File(["content"], "example.txt", { type: "text/plain" });

        const result = parseFile(exampleValue, exampleAttribute);

        assert.equal(result, exampleValue, "File parser doesn't work.");
    })

    it("should not parse a null, undefined or invalid file into file and will throw an Error", () => {
        const testCases = [null, undefined, "not a file"];
    
        testCases.forEach((exampleValue) => {
            assert.throws(
                () => parseFile(exampleValue, exampleAttribute),
                Error,
                `${exampleAttribute} is not valid. Value -> ${exampleValue}`
            );
        });
    });

    it("should parse a list of text into a list of ids", () => {
        const exampleValue = ["id1", "id2"]

        const result = parseProductIds(exampleValue)

        assert.isArray(result, "Product Ids parser doesn't work. It is not a lilst of ids.")
        assert.lengthOf(result, exampleValue.length, "Product Ids parser doesn't work. It is not the correct length.")
        assert.deepEqual(result, exampleValue, "Product Ids parser doesn't work. It is not the correct values.")
    })

    it("should not parse a null or undefined into a list of string and will throw an Error", () => {
        const testCases = [null, undefined];
    
        testCases.forEach((exampleValue) => {
            assert.throws(
                () => parseProductIds(exampleValue),
                Error,
                "Product_Ids are null or empty"
            );
        });
    });

    it("should parse a form data into a EARPHONE Product", () => {
        const exampleShoppingCartFormData = {
            [productIdName]: "1",
            [nameName]: "Example EARPHONE",
            [categoryName]: "EARPHONE",
            [brandName]: "EXAMPLE",
            [priceName]: "1234",
            [imageURLName]: "./no-image",
            [earphoneShapeName]: "EXA",
            [colorTextName]: "Color Ejemplo",
            [colorHexName]: "#FFFFFF",
            [earSideName]: "left"
        };
    
        const formData = new FormData();
        Object.entries(exampleShoppingCartFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseNewProductToShoppingList(formData)

        assert.isObject(result, "New EARPHONE Product to Shopping List parser doesn't work")
    })

    it("should parse a form data into a ACCESSORY Product", () => {
        const exampleShoppingCartFormData = {
            [productIdName]: "2",
            [nameName]: "Example EARPHONE",
            [categoryName]: "ACCESSORY",
            [brandName]: "EXAMPLE",
            [priceName]: "1234",
            [imageURLName]: "./no-image",
        };
    
        const formData = new FormData();
        Object.entries(exampleShoppingCartFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseNewProductToShoppingList(formData)

        assert.isObject(result, "New ACCESSORY Product to Shopping List parser doesn't work")
    })

    it("should not parse an incorrect form data into a Product and throw an Error", () => {
        const testCases = [null, undefined];
    
        testCases.forEach((exampleValue) => {
            assert.throws(
                () => parseString(exampleValue, exampleAttribute),
                Error,
            );
        });
    });

    it("should parse a form data into an update of Shopping EARPHONE Product Object ", () => {
        const exampleShoppingCartFormData = {
            [productIdName]: "1",
            [colorTextName]: "Color Ejemplo",
            [colorHexName]: "#FFFFFF",
            [earSideName]: "left"
        };
    
        const formData = new FormData();
        Object.entries(exampleShoppingCartFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseUpdateOfShoppingList(formData)

        assert.isObject(result, "Update EARPHONE Product to Shopping List parser doesn't work")
    })

    it("should parse a form data into an update of Shopping ACCESSORY Product Object ", () => {
        const exampleShoppingCartFormData = {
            [productIdName]: "1",
        };
    
        const formData = new FormData();
        Object.entries(exampleShoppingCartFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseUpdateOfShoppingList(formData)

        assert.isObject(result, "Update ACCESSORY Product to Shopping List parser doesn't work")
    })

    it("should not parse an incorrect form data into an update of Shopping List Object and throw an Error", () => {
        const exampleShoppingCartFormData = {
            [colorTextName]: "Color Ejemplo",
            [colorHexName]: "#FFFFFF",
            [earSideName]: "left"
        };
    
        const formData = new FormData();
        Object.entries(exampleShoppingCartFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseUpdateOfShoppingList(formData),
            Error
        })

    });

    it("should parse a text into an object of filters", () => {
        const exampleValue = `${adaptationRangeName}:value1,${dustWaterResistanceName}:value2`

        const result = parseFilters(exampleValue)

        assert.isObject(result, "Filters parser doesn't work. It is not an object.")
    })

    it("should parse a null into a default object of filters", () => {
        const exampleValue = null;
    
        const result = parseFilters(exampleValue)

        assert.isObject(result, "Filters parser doesn't work. It is not an object.")
    });

    it("should parse a form data into a new EARPHONE Product", () => {
        const exampleEarphoneProductFormData = {
            [nameName]: "Example EARPHONE",
            [categoryName]: "EARPHONE",
            [brandName]: "EXAMPLE",
            [priceName]: "1234",
            [imageURLName]: "./no-image",
            [productDescriptionName]: "Lore ipsum...",
            [includeName]: "1",
            [includeName + "-1"]: "Example 1",
            [colorTextName]: "1",
            [colorTextName + "-1"]: "Blanco Ejemplo",
            [colorHexName]: "1",
            [colorHexName + "-1"]: "#FFFFFF",
            [adaptationRangeName]: "MILD-SEVERE",
            [hasDustWaterResistanceName]: "YES",
            [earphoneShapeName]: "EXA",
            [degreeOfLossName]: "MILD-SEVERE",
            [usesName]: "1",
            [usesName + "-1"]: "TV"
        };
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseProductForm(formData)

        assert.isObject(result, "New EARPHONE Product parser doesn't work")
    })

    it("should parse a form data into a new ACCESSORY Product", () => {
        const exampleEarphoneProductFormData = {
            [nameName]: "Example EARPHONE",
            [categoryName]: "ACCESSORY",
            [brandName]: "EXAMPLE",
            [priceName]: "1234",
            [imageURLName]: "./no-image",
            [productDescriptionName]: "Lore ipsum...",
            [includeName]: "1",
            [includeName + "-1"]: "Example 1",
        };
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseProductForm(formData)

        assert.isObject(result, "New ACCESSORY Product parser doesn't work")
    })

    it("should not parse an incorrect form data into a new EARPHONE Product and throw an Error", () => {
        const exampleEarphoneProductFormData = {
            [nameName]: "Example EARPHONE",
            [categoryName]: "EARPHONE",
            [brandName]: "EXAMPLE",
            [priceName]: "1234",
            [imageURLName]: "./no-image",
            [productDescriptionName]: "Lore ipsum...",
            [includeName]: "1",
            [includeName + "-1"]: "Example 1",
        }
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseProductForm(formData),
            Error
        })
    });

    it("should not parse an incorrect form data into a new ACCESSORY Product and throw an Error", () => {
        const exampleEarphoneProductFormData = {
            [nameName]: "Example EARPHONE",
            [categoryName]: "ACCESSORY",
            [brandName]: "EXAMPLE",
            [priceName]: "1234",
        }
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseProductForm(formData),
            Error
        })
    })

    it("should parse a form data into a new Bargain", () => {
        const exampleEarphoneProductFormData = {
            [bargainCodeName]: "EXAMPLE",
            [bargainTitleName]: "Bargain Title",
            [bargainDescriptionName]: "Bargain Description",
        }
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseBargainForm(formData)

        assert.isObject(result, "New Bargain parser doesn't work")
    })

    it("should not parse an incorrect form data into a new Bargain and throw an Error", () => {
        const exampleEarphoneProductFormData = {
            [bargainCodeName]: "EXAMPLE",
        }
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseBargainForm(formData),
            Error
        })    
    });

    it("should parse a form data into a new Novelty", () => {
        const exampleEarphoneProductFormData = {
            [noveltyTitleName]: "Novelty Title",
            [noveltyDescriptionName]: "Novelty Description",
            [promotionalImageName]: "./no-image",
        }
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseNoveltyForm(formData)

        assert.isObject(result, "New Novelty parser doesn't work")
    })

    it("should not parse an incorrect form data into a new Novelty and throw an Error", () => {
        const exampleEarphoneProductFormData = {
            [noveltyTitleName]: "Novelty Title",
        }
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseNoveltyForm(formData),
            Error
        })    
    });

    it("should parse a form data into a new Order", () => {
        const exampleEarphoneProductFormData = {
            [userIdName]: "Novelty Title",
            [userNameName]: "Novelty Description",
            [userFirstName]: "./no-image",
            [phoneNumberName]: "./no-image",
            [emailName]: "./no-image",
            [addressName]: "./no-image",
        }
        const exampleValue = new File(["content"], "example.txt", { type: "text/plain" });
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append(audiometryFileName, exampleValue);

        const result = parseShoppingForm(formData)

        assert.isObject(result, "New Order parser doesn't work")
    })

    it("should not parse an incorrect form data into a new Order and throw an Error", () => {
        const exampleEarphoneProductFormData = {
            [userIdName]: "Novelty Title",
            [userNameName]: "Novelty Description",
        }
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseShoppingForm(formData),
            Error
        })    
    });

    it("should parse a form data into a contact object", () => {
        const exampleEarphoneProductFormData = {
            [contactEmailName]: "example@email.com",
            [contactSubjectName]: "Example Subject",
            [contactBodyName]: "Lore ipsum...",
        }
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseContactForm(formData)

        assert.isObject(result, "Contact Object parser doesn't work")
    })

    it("should not parse an incorrect form data into a contact object and throw an Error", () => {
        const exampleEarphoneProductFormData = {
            [contactEmailName]: "example@email.com",
        }
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseContactForm(formData),
            Error
        })  
    });

    it("should parse a form data into a appointment object", () => {
        const exampleEarphoneProductFormData = {
            [userNameName]: "Pepo",
            [contactEmailName]: "example@email.com",
            [phoneNumberName]: "123 456 789",
            [contactBodyName]: "Lore ipsum...",
        }
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseAppointmentForm(formData)

        assert.isObject(result, "Appointment Object parser doesn't work")
    })

    it("should not parse an incorrect form data into a appointment object and throw an Error", () => {
        const exampleEarphoneProductFormData = {
            [userNameName]: "Pepo",
            [contactEmailName]: "example@email.com",
        }
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseAppointmentForm(formData),
            Error
        })  
    });

})

/**
 * Check if the value is a valid and correct number
 * @param value Value to check
 * @param expected Value expeted to be
 * @param context The reason why is checking the value
 */
function checkNumber(value: number | null | undefined, expected: string, context: string) {
    assert.isNumber(value, `${context}. It is not a number."`)
    assert.equal(value, parseInt(expected), `${context}. It is not correct number.`)
}
