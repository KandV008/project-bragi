export interface ColorDefinition {
    name: string;
    hex: string;
}

const H0_TEXT = "Beige"
const H0_HEX = "#d5ba98"
const H0_NAME = "H0"

const P1_TEXT = "Beige Arena"
const P1_HEX = "#c2b280"
const P1_NAME = "P1"

const P3_TEXT = "Sándalo"
const P3_HEX = "#523703"
const P3_NAME = "P3"

const P4_TEXT = "Castaño"
const P4_HEX = "#3e2b06"
const P4_NAME = "P4"

const P5_TEXT = "Champán"
const P5_HEX = "#b0ae9f"
const P5_NAME = "P5"

const P6_TEXT = "Gris Plata"
const P6_HEX = "#bebebe"
const P6_NAME = "P6"

const P7_TEXT = "Grafito"
const P7_HEX = "#505050"
const P7_NAME = "P7"

const P8_TEXT = "Negro aterciopelado"
const P8_HEX = "#242324"
const P8_NAME = "P8"

const Q2_TEXT = "Verde eléctrico"
const Q2_HEX = "#4efb69"
const Q2_NAME = "Q2"

const Q3_TEXT = "Pirata del Caribe"
const Q3_HEX = "#3abb86"
const Q3_NAME = "Q3"

const T3_TEXT = "Rosa Precioso"
const T3_HEX = "#ff49f4"
const T3_NAME = "T3"

export const colorList = [
    H0_NAME,
    P1_NAME,
    P3_NAME,
    P4_NAME,
    P5_NAME,
    P6_NAME,
    P7_NAME,
    P8_NAME,
    Q2_NAME,
    Q3_NAME,
    T3_NAME,
]

export const Color = {
    H0: {
        name: H0_TEXT,
        hex: H0_HEX
    },
    P1: {
        name: P1_TEXT,
        hex: P1_HEX
    },
    P3: {
        name: P3_TEXT,
        hex: P3_HEX
    },
    P4: {
        name: P4_TEXT,
        hex: P4_HEX
    },
    P5: {
        name: P5_TEXT,
        hex: P5_HEX
    },
    P6: {
        name: P6_TEXT,
        hex: P6_HEX
    },
    P7: {
        name: P7_TEXT,
        hex: P7_HEX
    },
    P8: {
        name: P8_TEXT,
        hex: P8_HEX
    },
    Q2: {
        name: Q2_TEXT,
        hex: Q2_HEX
    },
    Q3: {
        name: Q3_TEXT,
        hex: Q3_HEX
    },
    T3: {
        name: T3_TEXT,
        hex: T3_HEX
    },
};

export type Color = keyof typeof Color;
