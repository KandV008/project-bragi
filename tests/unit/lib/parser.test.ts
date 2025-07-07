import { productIdName, nameName, categoryName, brandName, priceName, imageURLName, earphoneShapeName, colorTextName, colorHexName, earSideName, adaptationRangeName, dustWaterResistanceName, degreeOfLossName, productDescriptionName, usesName, includeName, hasDustWaterResistanceName, bargainCodeName, bargainTitleName, bargainDescriptionName, noveltyTitleName, noveltyDescriptionName, promotionalImageName, userIdName, userNameName, userFirstName, phoneNumberName, emailName, addressName, audiometryFileName, contactEmailName, contactSubjectName, contactBodyName, noveltyTypeName, noveltyContextName, endDateName, bargainRequirementsName, userDNIName } from "@/app/config/JSONnames"
import { parseAppointmentForm, parseBargainForm, parseContactForm, parseFile, parseFilters, parseNewProductToShoppingList, parseNoveltyForm, parseNumber, parsePrice, parseProductForm, parseProductIds, parseShoppingForm, parseStartAndEndIndex, parseString, parseStringList, parseUpdateOfShoppingList } from "../../../lib/parser/parser"
import { APPOINTMENT_FORM_PARSER_NAME, BARGAIN_FORM_PARSER_NAME, CONTEXT_PARSE_APPOINTMENT_FORM, CONTEXT_PARSE_BARGAIN_FORM, CONTEXT_PARSE_CONTACT_FORM, CONTEXT_PARSE_FILE, CONTEXT_PARSE_FILTERS, CONTEXT_PARSE_NEW_PRODUCT_TO_SHOPPING_LIST, CONTEXT_PARSE_NOVELTY_FORM, CONTEXT_PARSE_NUMBER, CONTEXT_PARSE_PRICE, CONTEXT_PARSE_PRODUCT_FORM, CONTEXT_PARSE_PRODUCT_IDS, CONTEXT_PARSE_SHOPPING_FORM, CONTEXT_PARSE_START_AND_END_INDEX, CONTEXT_PARSE_STRING, CONTEXT_PARSE_STRING_LIST, CONTEXT_PARSE_UPDATE_PRODUCT_OF_SHOPPING_LIST, END_INDEX_PARSER_NAME, FILE_PARSER_NAME, FILTERS_PARSER_NAME, NEW_PRODUCT_TO_SHOPPING_LIST_PARSER_NAME, NOVELTY_FORM_PARSER_NAME, NUMBER_PARSER_NAME, ORDER_FORM_PARSER_NAME, PARSER_DOESNT_WORK_MESSAGE, PARSER_DOESNT_WORK_WITH_REASON_MESSAGE, PRICE_PARSER_NAME, PRODUCT_FORM_PARSER_NAME, PRODUCT_IDS_PARSER_NAME, START_INDEX_PARSER_NAME, STRING_LIST_PARSER_NAME, STRING_PARSER_NAME, UPDATE_PRODUCT_TO_SHOPPING_LIST_PARSER_NAME } from "../../../lib/parser/parserMessages"
import { UNIT_TEST_TAG } from "@/tests/testConstants"

const exampleAttribute = "TEST"

describe(CONTEXT_PARSE_STRING, () => {
    it(`[${UNIT_TEST_TAG}] should parse a text into string`, () => {
        const exampleValue = "example"

        const result = parseString(exampleValue, exampleAttribute)

        assert.isString(result, `${STRING_PARSER_NAME} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} string.`)
        assert.equal(result, exampleValue, `${STRING_PARSER_NAME} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} the correct string.`)
    })

    it(`[${UNIT_TEST_TAG}] should not parse a null or undefined into string and will throw an Error`, () => {
        const testCases = [null, undefined];

        testCases.forEach((exampleValue) => {
            const errorRegex = new RegExp(`${CONTEXT_PARSE_STRING}.*${exampleValue}`);

            assert.throws(
                () => parseString(exampleValue, exampleAttribute),
                Error,
                errorRegex,
            );
        });
    });
})

describe(CONTEXT_PARSE_STRING_LIST, () => {
    it(`[${UNIT_TEST_TAG}] should parse a text with comas into a list of strings`, () => {
        const exampleValue = "example1, example2, example3"

        const result = parseStringList(exampleValue, exampleAttribute)

        assert.lengthOf(result, exampleValue.split(",").length, `${STRING_LIST_PARSER_NAME} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} the correct length.`)
    })

    it(`[${UNIT_TEST_TAG}] should parse a null or undefined into an empty list of string`, () => {
        const testCases = [null, undefined];

        testCases.forEach((exampleValue) => {
            const result = parseStringList(exampleValue, exampleAttribute)

            assert.lengthOf(result, 0, `${STRING_LIST_PARSER_NAME} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} empty.`)
        });
    });
})

describe(CONTEXT_PARSE_NUMBER, () => {
    it(`[${UNIT_TEST_TAG}] should parse a text value into number`, () => {
        const exampleValue = "123"

        const result = parseNumber(exampleValue, exampleAttribute)

        checkNumber(result, exampleValue, NUMBER_PARSER_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should not parse a null, undefined or not a number into number and will throw an Error`, () => {
        const testCases = [null, undefined, "not a number"];

        testCases.forEach((exampleValue) => {
            const errorRegex = new RegExp(`${CONTEXT_PARSE_NUMBER}.*${exampleValue}`);

            assert.throws(
                () => parseNumber(exampleValue, exampleAttribute),
                Error,
                errorRegex
            );
        });
    });
})

describe(CONTEXT_PARSE_START_AND_END_INDEX, () => {
    it(`[${UNIT_TEST_TAG}] should parse texts values into indexes`, () => {
        const exampleValue = ["1", "2"]

        const { startIndex, endIndex } = parseStartAndEndIndex(exampleValue[0], exampleValue[1])

        checkNumber(startIndex, exampleValue[0], START_INDEX_PARSER_NAME)
        checkNumber(endIndex, exampleValue[1], END_INDEX_PARSER_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should parse a null into default indexes`, () => {
        const testCases = [null];

        testCases.forEach((exampleValue) => {
            const { startIndex, endIndex } = parseStartAndEndIndex(exampleValue, exampleValue)
            checkNumber(startIndex, "0", START_INDEX_PARSER_NAME)
            checkNumber(endIndex, "9", END_INDEX_PARSER_NAME)
        });
    });

    it(`[${UNIT_TEST_TAG}] should not parse a not a number into number and will throw an Error`, () => {
        const testCases = [["NAN", "NAN"], ["1", "NAN"], ["NAN", "2"]]

        testCases.forEach((exampleValue) => {
            const errorRegex = new RegExp(`${CONTEXT_PARSE_START_AND_END_INDEX}.*${exampleValue[0]}.*${exampleValue[1]}`);

            assert.throws(
                () => parseStartAndEndIndex(exampleValue[0], exampleValue[1]),
                Error,
                errorRegex
            );
        })
    });
})

describe(CONTEXT_PARSE_PRICE, () => {
    it(`[${UNIT_TEST_TAG}] should parse a text value into price`, () => {
        const exampleValue = "123"

        const result = parsePrice(exampleValue)

        checkNumber(result, exampleValue, PRICE_PARSER_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should not parse a null, undefined or not a number into price and will throw an Error`, () => {
        const testCases = [null, undefined, "not a number"];

        testCases.forEach((exampleValue) => {
            const errorRegex = new RegExp(`${CONTEXT_PARSE_PRICE}.*${exampleValue}`);

            assert.throws(
                () => parsePrice(exampleValue),
                Error,
                errorRegex
            );
        });
    });
})

describe(CONTEXT_PARSE_FILE, () => {
    it(`[${UNIT_TEST_TAG}] should parse a text into File Object`, () => {
        const exampleAttribute = "exampleFile";
        const exampleValue = new File(["content"], "example.txt", { type: "text/plain" });

        const result = parseFile(exampleValue, exampleAttribute);

        assert.equal(result, exampleValue, `${FILE_PARSER_NAME} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} the correct file`);
    })

    it(`[${UNIT_TEST_TAG}] should not parse a null, undefined or invalid file into file and will throw an Error`, () => {
        const testCases = [null, undefined, "not a file"];

        testCases.forEach((exampleValue) => {
            const errorRegex = new RegExp(`${CONTEXT_PARSE_FILE}.*${exampleValue}`);

            assert.throws(
                () => parseFile(exampleValue, exampleAttribute),
                Error,
                errorRegex
            );
        });
    });
})

describe(CONTEXT_PARSE_PRODUCT_IDS, () => {
    it(`[${UNIT_TEST_TAG}] should parse a list of text into a list of ids`, () => {
        const exampleValue = ["id1", "id2"]

        const result = parseProductIds(exampleValue)

        assert.isArray(result, `${PRODUCT_IDS_PARSER_NAME} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} a list of product ids.`)
        assert.lengthOf(result, exampleValue.length, `${PRODUCT_IDS_PARSER_NAME} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} the correct length.`)
        assert.deepEqual(result, exampleValue, `${PRODUCT_IDS_PARSER_NAME} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} the correct values.`)
    })

    it(`[${UNIT_TEST_TAG}] should not parse a null or undefined into a list of string and will throw an Error`, () => {
        const testCases = [null, undefined];

        testCases.forEach((exampleValue) => {
            const errorRegex = new RegExp(`${CONTEXT_PARSE_PRODUCT_IDS}.*${exampleValue}`);

            assert.throws(
                () => parseProductIds(exampleValue),
                Error,
                errorRegex
            );
        });
    });
})

describe(CONTEXT_PARSE_NEW_PRODUCT_TO_SHOPPING_LIST, () => {
    it(`[${UNIT_TEST_TAG}] should parse a form data into a EARPHONE Product`, () => {
        const exampleFormData = {
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
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseNewProductToShoppingList(formData)

        assert.isObject(result, `EARPHONE ${NEW_PRODUCT_TO_SHOPPING_LIST_PARSER_NAME} ${PARSER_DOESNT_WORK_MESSAGE}`)
    })

    it(`[${UNIT_TEST_TAG}] should parse a form data into a ACCESSORY Product`, () => {
        const exampleFormData = {
            [productIdName]: "2",
            [nameName]: "Example EARPHONE",
            [categoryName]: "ACCESSORY",
            [brandName]: "EXAMPLE",
            [priceName]: "1234",
            [imageURLName]: "./no-image",
        };

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseNewProductToShoppingList(formData)

        assert.isObject(result, `ACCESSORY ${NEW_PRODUCT_TO_SHOPPING_LIST_PARSER_NAME} ${PARSER_DOESNT_WORK_MESSAGE}`)
    })

    it(`[${UNIT_TEST_TAG}] should not parse an incorrect form data into a Product and throw an Error`, () => {
        const testCases = [null, undefined];

        testCases.forEach((exampleValue) => {
            assert.throws(
                () => parseString(exampleValue, exampleAttribute),
                Error,
            );
        });
    });
})

describe(CONTEXT_PARSE_UPDATE_PRODUCT_OF_SHOPPING_LIST, () => {
    it(`[${UNIT_TEST_TAG}] should parse a form data into an update of Shopping EARPHONE Product Object `, () => {
        const exampleFormData = {
            [productIdName]: "1",
            [colorTextName]: "Color Ejemplo",
            [colorHexName]: "#FFFFFF",
            [earSideName]: "left"
        };

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseUpdateOfShoppingList(formData)

        assert.isObject(result, `EARPHONE ${UPDATE_PRODUCT_TO_SHOPPING_LIST_PARSER_NAME} ${PARSER_DOESNT_WORK_MESSAGE}`)
    })

    it(`[${UNIT_TEST_TAG}] should parse a form data into an update of Shopping ACCESSORY Product Object `, () => {
        const exampleFormData = {
            [productIdName]: "1",
        };

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseUpdateOfShoppingList(formData)

        assert.isObject(result, `ACCESSORY ${UPDATE_PRODUCT_TO_SHOPPING_LIST_PARSER_NAME} ${PARSER_DOESNT_WORK_MESSAGE}`)
    })

    it(`[${UNIT_TEST_TAG}] should not parse an incorrect form data into an update of Shopping List Object and throw an Error`, () => {
        const exampleFormData = {
            [colorTextName]: "Color Ejemplo",
            [colorHexName]: "#FFFFFF",
            [earSideName]: "left"
        };

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseUpdateOfShoppingList(formData),
                Error
        })

    });
})

describe(CONTEXT_PARSE_FILTERS, () => {
    it(`[${UNIT_TEST_TAG}] should parse a text into an object of filters`, () => {
        const exampleValue = `${adaptationRangeName}:value1,${dustWaterResistanceName}:value2`

        const result = parseFilters(exampleValue)

        assert.isObject(result, `${FILTERS_PARSER_NAME} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} an object`)
    });

    it(`[${UNIT_TEST_TAG}] should parse a null into a default object of filters`, () => {
        const exampleValue = null;

        const result = parseFilters(exampleValue)

        assert.isObject(result, `${FILTERS_PARSER_NAME} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} an object`)
    });
})

describe(CONTEXT_PARSE_PRODUCT_FORM, () => {
    it(`[${UNIT_TEST_TAG}] should parse a form data into a new EARPHONE Product`, () => {
        const exampleFormData = {
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
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseProductForm(formData)

        assert.isObject(result, `EARPHONE ${PRODUCT_FORM_PARSER_NAME} ${PARSER_DOESNT_WORK_MESSAGE}`)
    })

    it(`[${UNIT_TEST_TAG}] should parse a form data into a new ACCESSORY Product`, () => {
        const exampleFormData = {
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
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseProductForm(formData)

        assert.isObject(result, `ACCESSORY ${PRODUCT_FORM_PARSER_NAME} ${PARSER_DOESNT_WORK_MESSAGE}`)
    })

    it(`[${UNIT_TEST_TAG}] should not parse an incorrect form data into a new EARPHONE Product and throw an Error`, () => {
        const exampleFormData = {
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
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseProductForm(formData),
                Error
        })
    });

    it(`[${UNIT_TEST_TAG}] should not parse an incorrect form data into a new ACCESSORY Product and throw an Error`, () => {
        const exampleFormData = {
            [nameName]: "Example EARPHONE",
            [categoryName]: "ACCESSORY",
            [brandName]: "EXAMPLE",
            [priceName]: "1234",
        }

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseProductForm(formData),
                Error
        })
    })
})

describe(CONTEXT_PARSE_BARGAIN_FORM, () => {
    it(`[${UNIT_TEST_TAG}] should parse a form data into a new Bargain`, () => {
        const exampleFormData = {
            [bargainCodeName]: "EXAMPLE",
            [bargainTitleName]: "Bargain Title",
            [bargainDescriptionName]: "Bargain Description",
            [bargainRequirementsName]: "1",
            [bargainRequirementsName + "-1"]: "RQ1",
        }

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseBargainForm(formData)

        assert.isObject(result, `${BARGAIN_FORM_PARSER_NAME} ${PARSER_DOESNT_WORK_MESSAGE}`)
    })

    it(`[${UNIT_TEST_TAG}] should not parse an incorrect form data into a new Bargain and throw an Error`, () => {
        const exampleFormData = {
            [bargainCodeName]: "EXAMPLE",
        }

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseBargainForm(formData),
                Error
        })
    });
})

describe(CONTEXT_PARSE_NOVELTY_FORM, () => {
    it(`[${UNIT_TEST_TAG}] should parse a form data into a new Novelty`, () => {
        const exampleFormData = {
            [noveltyTitleName]: "Novelty Title",
            [noveltyDescriptionName]: "Novelty Description",
            [promotionalImageName]: "./no-image",
            [noveltyTypeName]: "SPECIFIC",
            [noveltyContextName]: "SHOPPING-LIST",
            [endDateName]: "2025-10-14",
        }

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseNoveltyForm(formData)

        assert.isObject(result, `${NOVELTY_FORM_PARSER_NAME} ${PARSER_DOESNT_WORK_MESSAGE}`)
    })

    it(`[${UNIT_TEST_TAG}] should not parse an incorrect form data into a new Novelty and throw an Error`, () => {
        const exampleFormData = {
            [noveltyTitleName]: "Novelty Title",
        }

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseNoveltyForm(formData),
                Error
        })
    });
})

describe(CONTEXT_PARSE_SHOPPING_FORM, () => {
    it(`[${UNIT_TEST_TAG}] should parse a form data into a new Order`, () => {
        const exampleFormData = {
            [userIdName]: "Novelty Title",
            [userNameName]: "Novelty Description",
            [userFirstName]: "./no-image",
            [userDNIName]: "123123123F",
            [phoneNumberName]: "./no-image",
            [emailName]: "./no-image",
            [addressName]: "./no-image",
        }
        const exampleValue = new File(["content"], "example.txt", { type: "text/plain" });

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });
        formData.append(audiometryFileName, exampleValue);

        const result = parseShoppingForm(formData)

        assert.isObject(result, `${ORDER_FORM_PARSER_NAME} ${PARSER_DOESNT_WORK_MESSAGE}`)
    })

    it(`[${UNIT_TEST_TAG}] should not parse an incorrect form data into a new Order and throw an Error`, () => {
        const exampleFormData = {
            [userIdName]: "Novelty Title",
            [userNameName]: "Novelty Description",
        }

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseShoppingForm(formData),
                Error
        })
    });
})

describe(CONTEXT_PARSE_CONTACT_FORM, () => {
    it(`[${UNIT_TEST_TAG}] should parse a form data into a contact object`, () => {
        const exampleFormData = {
            [contactEmailName]: "example@email.com",
            [contactSubjectName]: "Example Subject",
            [contactBodyName]: "Lore ipsum...",
        }

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseContactForm(formData)

        assert.isObject(result, `${CONTEXT_PARSE_FILE} ${PARSER_DOESNT_WORK_MESSAGE}`)
    })

    it(`[${UNIT_TEST_TAG}] should not parse an incorrect form data into a contact object and throw an Error`, () => {
        const exampleFormData = {
            [contactEmailName]: "example@email.com",
        }

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        assert.throw(() => {
            parseContactForm(formData),
                Error
        })
    });
})

describe(CONTEXT_PARSE_APPOINTMENT_FORM, () => {
    it(`[${UNIT_TEST_TAG}] should parse a form data into a appointment object`, () => {
        const exampleFormData = {
            [userNameName]: "Pepo",
            [contactEmailName]: "example@email.com",
            [phoneNumberName]: "123 456 789",
            [contactBodyName]: "Lore ipsum...",
        }

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
            formData.append(key, value);
        });

        const result = parseAppointmentForm(formData)

        assert.isObject(result, `${APPOINTMENT_FORM_PARSER_NAME} ${PARSER_DOESNT_WORK_MESSAGE}`)
    })

    it(`[${UNIT_TEST_TAG}] should not parse an incorrect form data into a appointment object and throw an Error`, () => {
        const exampleFormData = {
            [userNameName]: "Pepo",
            [contactEmailName]: "example@email.com",
        }

        const formData = new FormData();
        Object.entries(exampleFormData).forEach(([key, value]) => {
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
    assert.isNumber(value, `${context} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} a number."`)
    assert.equal(value, parseInt(expected), `${context} ${PARSER_DOESNT_WORK_WITH_REASON_MESSAGE} the correct number.`)
}
