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

export const Uses = {
    CHAT: {
        text: "Conversación",
        icon: faComments
    },
    IN_GROUP: {
        text: "En grupo",
        icon: faUserGroup
    },
    LEISURE: {
        text: "Ocio",
        icon: faFutbol
    },
    TELEPHONE: {
        text: "Teléfono",
        icon: faMobileScreenButton
    },
    TV: {
        text: "Televisión",
        icon: faTv
    },
};

export type Uses = keyof typeof Uses;
