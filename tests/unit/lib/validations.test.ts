import { adaptationRangeName, addressName, audiometryFileName, bargainCodeName, bargainDescriptionName, bargainTitleName, brandName, categoryName, colorHexName, colorTextName, contactBodyName, contactEmailName, contactSubjectName, degreeOfLossName, earphoneShapeName, earSideName, emailName, imageURLName, nameName, noveltyDescriptionName, noveltyTitleName, phoneNumberName, priceName, productDescriptionName, productIdName, promotionalImageName, userFirstName, userIdName, userNameName, usesName } from "@/app/config/JSONnames"
import { UNIT_TEST_TAG } from "@/tests/testConstants";
import { validateAddShoppingCart, validateFormProduct, validateFormBargain, validateBargainInput, validateFormNovelty, validateFormShopping, validateContactForm, validateAppointmentForm } from "@/lib/validations/validations";
import { METHOD_VALIDATE_ADD_SHOPPING_CART_NAME, INVALID_FORM_DATA_TEST_MESSAGE, VALID_FORM_DATA_TEST_MESSAGE, METHOD_VALIDATE_FORM_PRODUCT_NAME, METHOD_VALIDATE_FORM_BARGAIN_NAME, METHOD_VALIDATE_BARGAIN_INPUT_NAME, METHOD_VALIDATE_FORM_NOVELTY_NAME, METHOD_VALIDATE_FORM_SHOPPING_NAME, METHOD_VALIDATE_CONTACT_FORM_NAME, METHOD_VALIDATE_APPOINTMENT_FORM_NAME } from "@/lib/validations/validationsMessages";

describe(METHOD_VALIDATE_ADD_SHOPPING_CART_NAME, () => {
    it(`[${UNIT_TEST_TAG}] should validate Add Shopping Cart form when you introduce the correct form data for EARPHONE Product`, () => {
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
    
        const result = validateAddShoppingCart(formData);

        assert.isTrue(result, INVALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_ADD_SHOPPING_CART_NAME)
    });

    it(`[${UNIT_TEST_TAG}] should not validate Add Shopping Cart form and show a message about the error when you introduce the incorect form data`, () => {
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
    
        const result = validateAddShoppingCart(formData);

        assert.isFalse(result, VALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_ADD_SHOPPING_CART_NAME)
    })

})

describe(METHOD_VALIDATE_FORM_PRODUCT_NAME, () => {
    it(`[${UNIT_TEST_TAG}] should validate EARPHONE Product form when you introduce the correct form data`, () => {
        const exampleEarphoneProductFormData = {
            [nameName]: "Example EARPHONE",
            [categoryName]: "EARPHONE",
            [brandName]: "EXAMPLE",
            [priceName]: "1234",
            [imageURLName]: "./no-image",
            [productDescriptionName]: "Lore ipsum...",
            [adaptationRangeName]: "MILD-SEVERE",
            [earphoneShapeName]: "EXA",
            [degreeOfLossName]: "MILD-SEVERE",
            [usesName]: ["TV", "CHAT"]
        };
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateFormProduct(formData);

        assert.isTrue(result, INVALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_FORM_PRODUCT_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should validate ACCESSORY Product form when you introduce the correct form data`, () => {
        const exampleAccessoryProductFormData = {
            [nameName]: "Example EARPHONE",
            [categoryName]: "ACCESSORY",
            [brandName]: "EXAMPLE",
            [priceName]: "1234",
            [imageURLName]: "./no-image",
            [productDescriptionName]: "Lore ipsum...",
        };
        
        const formData = new FormData();
        Object.entries(exampleAccessoryProductFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateFormProduct(formData);

        assert.isTrue(result, INVALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_FORM_PRODUCT_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should not validate EARPHONE Product form and show a message about the error when you introduce the incorect form data`, () => {
        const exampleEarphoneProductFormData = {
            [nameName]: "Example EARPHONE",
            [categoryName]: "EARPHONE",
            [brandName]: "EXAMPLE",
            [priceName]: "1234",
            [imageURLName]: "./no-image",
            [productDescriptionName]: "Lore ipsum...",
            [adaptationRangeName]: "MILD-SEVERE",
        };
        
        const formData = new FormData();
        Object.entries(exampleEarphoneProductFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateFormProduct(formData);

        assert.isFalse(result, VALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_FORM_PRODUCT_NAME)

    })

    it(`[${UNIT_TEST_TAG}] should not validate ACCESSORY Product form and show a message about the error when you introduce the incorect form data`, () => {
        const exampleAccessoryProductFormData = {
            [nameName]: "Example EARPHONE",
            [categoryName]: "ACCESSORY",
        };
        
        const formData = new FormData();
        Object.entries(exampleAccessoryProductFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateFormProduct(formData);

        assert.isFalse(result, VALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_FORM_PRODUCT_NAME)
    })
})

describe(METHOD_VALIDATE_FORM_BARGAIN_NAME, () => {
    it(`[${UNIT_TEST_TAG}] should validate Bargain form when you introduce the correct form data`, () => {
        const exampleBargainFormData = {
            [bargainCodeName]: "Example Code",
            [bargainTitleName]: "Example Title",
            [bargainDescriptionName]: "EXAMPLE",
        };
        
        const formData = new FormData();
        Object.entries(exampleBargainFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateFormBargain(formData);

        assert.isTrue(result, INVALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_FORM_BARGAIN_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should not validate Bargain form and show a message about the error when you introduce the incorect form data`, () => {
        const exampleBargainFormData = {
            [bargainCodeName]: "Example Code",
        };
        
        const formData = new FormData();
        Object.entries(exampleBargainFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateFormBargain(formData);

        assert.isFalse(result, VALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_FORM_BARGAIN_NAME)    
    })
})

describe(METHOD_VALIDATE_BARGAIN_INPUT_NAME, () => {
    it(`[${UNIT_TEST_TAG}] should validate Bargain Input when you introduce the correct form data`, () => {
        const exampleBargainInputFormData = {
            [bargainCodeName]: "CODE",
        };
        
        const formData = new FormData();
        Object.entries(exampleBargainInputFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateBargainInput(formData);

        assert.isTrue(result, INVALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_BARGAIN_INPUT_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should not validate Bargain Input and show a message about the error when you introduce a large bargain code`, () => {
        const exampleBargainInputFormData = {
            [bargainCodeName]: "EXTRACODE",
        };
        
        const formData = new FormData();
        Object.entries(exampleBargainInputFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateBargainInput(formData);

        assert.isFalse(result, VALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_BARGAIN_INPUT_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should not validate Bargain Input and show a message about the error when you introduce a short bargain code`, () => {
        const exampleBargainFormData = {
            [bargainCodeName]: "COD",
        };
        
        const formData = new FormData();
        Object.entries(exampleBargainFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateBargainInput(formData);

        assert.isFalse(result, VALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_BARGAIN_INPUT_NAME)    
    })
})

describe(METHOD_VALIDATE_FORM_NOVELTY_NAME, () => {
    it(`[${UNIT_TEST_TAG}] should validate Novelty form when you introduce the correct form data`, () => {
        const exampleNoveltyFormData = {
            [noveltyTitleName]: "Example Title",
            [noveltyDescriptionName]: "Lore ipsum...",
            [promotionalImageName]: "./no-image.png",
        };
        
        const formData = new FormData();
        Object.entries(exampleNoveltyFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateFormNovelty(formData);

        assert.isTrue(result, INVALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_FORM_NOVELTY_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should not validate Novelty form and show a message about the error when you introduce the incorect form data`, () => {
        const exampleNoveltyFormData = {
            [noveltyTitleName]: "Example Title",
        };
        
        const formData = new FormData();
        Object.entries(exampleNoveltyFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateFormNovelty(formData);

        assert.isFalse(result, VALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_FORM_NOVELTY_NAME)
    })
})

describe(METHOD_VALIDATE_FORM_SHOPPING_NAME, () => {
    it(`[${UNIT_TEST_TAG}] should validate Shopping form when you introduce the correct form data`, () => {
        const exampleShoppingFormData = {
            [userIdName]: "Example User Id",
            [userNameName]: "Example User Name",
            [userFirstName]: "Example First name",
            [phoneNumberName]: "Example Phone Number",
            [emailName]: "Example Email",
            [addressName]: "Example Address",
            [audiometryFileName]: "Example Audiometry File",
        };
        
        const formData = new FormData();
        Object.entries(exampleShoppingFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateFormShopping(formData);

        assert.isTrue(result, INVALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_FORM_SHOPPING_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should not validate Shopping form and show a message about the error when you introduce the incorect form data`, () => {
        const exampleShoppingFormData = {
            [userIdName]: "Example User Id",
        };
        
        const formData = new FormData();
        Object.entries(exampleShoppingFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateFormShopping(formData);

        assert.isFalse(result, VALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_FORM_SHOPPING_NAME)
    })
})

describe(METHOD_VALIDATE_CONTACT_FORM_NAME, () => {
    it(`[${UNIT_TEST_TAG}] should validate Contact form when you introduce the correct form data`, () => {
        const exampleContactFormData = {
            [userNameName]: "Example name",
            [contactEmailName]: "Example email",
            [contactSubjectName]: "Example subject",
            [contactBodyName]: "Example body",
        };
        
        const formData = new FormData();
        Object.entries(exampleContactFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateContactForm(formData);

        assert.isTrue(result, INVALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_CONTACT_FORM_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should not validate Contact form and show a message about the error when you introduce the incorect form data`, () => {
        const exampleContactFormData = {
            [contactEmailName]: "Example email",
        };
        
        const formData = new FormData();
        Object.entries(exampleContactFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateContactForm(formData);

        assert.isFalse(result, VALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_CONTACT_FORM_NAME)
    })
})

describe(METHOD_VALIDATE_APPOINTMENT_FORM_NAME, () => {
    it(`[${UNIT_TEST_TAG}] should validate Appointment form when you introduce the correct form data`, () => {
        const exampleAppointmentFormData = {
            [userNameName]: "Example user name",
            [contactEmailName]: "Example email",
            [phoneNumberName]: "Example phone number",
        };
        
        const formData = new FormData();
        Object.entries(exampleAppointmentFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateAppointmentForm(formData);

        assert.isTrue(result, INVALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_APPOINTMENT_FORM_NAME)
    })

    it(`[${UNIT_TEST_TAG}] should not validate Appointment form and show a message about the error when you introduce the incorect form data`, () => {
        const exampleAppointmentFormData = {
            [userNameName]: "Example user name",
        };
        
        const formData = new FormData();
        Object.entries(exampleAppointmentFormData).forEach(([key, value]) => {
            formData.append(key, Array.isArray(value) ? JSON.stringify(value) : value);
        });
    
        const result = validateAppointmentForm(formData);

        assert.isFalse(result, VALID_FORM_DATA_TEST_MESSAGE + METHOD_VALIDATE_APPOINTMENT_FORM_NAME)
    })
})
