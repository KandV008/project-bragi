export interface ColorDefinition {
    name: string;
    hex: string;
}

export const Color = {
    H0: {
        name: "Beige",
        hex: "#d5ba98"
    },
    P1: {
        name: "Beige Arena",
        hex: "#c2b280"
    },
    P3: {
        name: "Sándalo",
        hex: "#523703"
    },
    P4: {
        name: "Castaño",
        hex: "#3e2b06"
    },
    P5: {
        name: "Champán",
        hex: "#b0ae9f"
    },
    P6: {
        name: "Gris Plata",
        hex: "#bebebe"
    },
    P7: {
        name: "Grafito",
        hex: "#505050"
    },
    P8: {
        name: "Negro aterciopelado",
        hex: "#242324"
    },
    Q2: {
        name: "Verde eléctrico",
        hex: "#4efb69"
    },
    Q3: {
        name: "Pirata del Caribe",
        hex: "#3abb86"
    },
    T3: {
        name: "Rosa Precioso",
        hex: "#ff49f4"
    },
};

export type Color = keyof typeof Color;
