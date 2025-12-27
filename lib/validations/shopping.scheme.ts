import { z } from "zod";
import {
    addressName,
    audiometryFileName,
    bargainCodeName,
    contactEmailName,
    emailName,
    phoneNumberName,
    userDNIName,
    userFirstName,
    userIdName,
    userNameName,
} from "@/app/config/JSONnames";

export const shoppingSchema = z.object({
    [userIdName]: z
        .string()
        .min(1, "El nombre es obligatorio"),

    [bargainCodeName]: z
        .string()
        .optional(),

    [userNameName]: z
        .string()
        .min(1, "El nombre es obligatorio"),

    [userFirstName]: z
        .string()
        .min(1, "El apellido es obligatorio"),

    [userDNIName]: z
        .string()
        .min(1, "El DNI es obligatorio"),

    [phoneNumberName]: z
        .string()
        .min(1, "El teléfono de contacto es obligatorio"),

    [emailName]: z
        .email("El correo electrónico no es válido"),

    [addressName]: z
        .string()
        .min(1, "La dirección es obligatorio"),

    [audiometryFileName]: z
        .any()
        .refine((files) => files?.length === 1, "Debes subir un archivo")
        .refine(
            (files) => files?.[0]?.type === "application/pdf" || files?.[0]?.type.startsWith("image/"),
            "El archivo debe ser PDF o una imagen"
        )
});

export type ShoppingFormData = z.infer<typeof shoppingSchema>;
