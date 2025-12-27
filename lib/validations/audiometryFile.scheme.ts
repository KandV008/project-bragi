import { z } from "zod";
import {
  audiometryFileName,
  contactBodyName,
  contactEmailName,
  userNameName,
} from "@/app/config/JSONnames";

export const sendAudiometryFileSchema = z.object({
  [userNameName]: z.string().min(1, "El nombre es obligatorio"),
  [contactEmailName]: z.string().email("El correo electrónico no es válido"),
  [contactBodyName]: z.string().min(1, "El mensaje es obligatorio"),
  [audiometryFileName]: z
    .any()
    .refine((files) => files?.length === 1, "Debes subir un archivo")
    .refine(
      (files) => files?.[0]?.type === "application/pdf" || files?.[0]?.type.startsWith("image/"),
      "El archivo debe ser PDF o una imagen"
    )
});

export type SendAudiometryFileFormData = z.infer<typeof sendAudiometryFileSchema>;
