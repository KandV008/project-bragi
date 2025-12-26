import { z } from "zod";
import {
  contactBodyName,
  contactEmailName,
  phoneNumberName,
  userNameName,
} from "@/app/config/JSONnames";

export const appointmentSchema = z.object({
  [userNameName]: z
    .string()
    .min(1, "El nombre es obligatorio"),

  [contactEmailName]: z
    .email("El correo electrónico no es válido"),

  [phoneNumberName]: z
    .string()
    .min(1, "El teléfono de contacto es obligatorio"),

  [contactBodyName]: z
    .string()
    .min(1, "El mensaje es obligatorio"),
});

export type AppointmentFormData = z.infer<typeof appointmentSchema>;
