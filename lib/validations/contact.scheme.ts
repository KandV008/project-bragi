import { z } from "zod";
import {
  contactBodyName,
  contactEmailName,
  contactSubjectName,
  userNameName,
} from "@/app/config/JSONnames";

export const contactSchema = z.object({
  [userNameName]: z
    .string()
    .min(1, "El nombre es obligatorio"),

  [contactEmailName]: z
    .email("El correo electrónico no es válido"),

  [contactSubjectName]: z
    .string()
    .min(1, "El asunto es obligatorio"),

  [contactBodyName]: z
    .string()
    .min(1, "El mensaje es obligatorio"),
});

export type ContactFormData = z.infer<typeof contactSchema>;
