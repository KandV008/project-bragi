import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
    faComments,
    faUserGroup,
    faFutbol,
    faMobileScreenButton,
    faTv,
} from "@fortawesome/free-solid-svg-icons";

export interface UseDefinition {
    text: string;
    icon: IconDefinition;
}

const CHAT_VALUE = "Conversación"
const IN_GROUP_VALUE = "En grupo"
const LEISURE_VALUE = "Ocio"
const TELEPHONE_VALUE = "Teféfono"
const TV_VALUE = "Televisión"
const CHAT_NAME = "CHAT"
const IN_GROUP_NAME = "IN_GROUP"
const LEISURE_NAME = "LEISURE"
const TELEPHONE_NAME = "TELEPHONE"
const TV_NAME = "TV"

export const Uses = {
    CHAT: {
        text: CHAT_VALUE,
        icon: faComments
    },
    IN_GROUP: {
        text: IN_GROUP_VALUE,
        icon: faUserGroup
    },
    LEISURE: {
        text: LEISURE_VALUE,
        icon: faFutbol
    },
    TELEPHONE: {
        text: TELEPHONE_VALUE,
        icon: faMobileScreenButton
    },
    TV: {
        text: TV_VALUE,
        icon: faTv
    },
};

export const usesList = [
    CHAT_NAME,
    IN_GROUP_NAME,
    LEISURE_NAME,
    TELEPHONE_NAME,
    TV_NAME
]

export function valueOfUses(value: String){
    if (value === CHAT_VALUE){
        return CHAT_NAME
    }

    if (value === IN_GROUP_VALUE){
        return IN_GROUP_NAME
    }

    if (value === LEISURE_VALUE){
        return LEISURE_NAME
    }

    if (value === TELEPHONE_VALUE){
        return TELEPHONE_NAME
    }

    if (value === TV_VALUE){
        return TV_NAME
    }

    throw Error("Value not valid")
}

export type Uses = keyof typeof Uses;
