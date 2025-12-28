import { z } from "zod";
import {
    accessoriesName,
    brandName,
    categoryName,
    colorHexName,
    colorTextName,
    earphoneShapeName,
    earSideName,
    imageURLName,
    nameName,
    priceName,
    productIdName,
} from "@/app/config/JSONnames";
import { ACCESSORY_VALUE, EARPHONE_VALUE } from "@/app/model/entities/product/enums/Category";

const baseSchema = {
  [productIdName]: z.string().min(1),
  [nameName]: z.string().min(1),
  [categoryName]: z.string().min(1),
  [brandName]: z.string().min(1),
  [priceName]: z.string().min(1),
  [imageURLName]: z.string().min(1),
  [accessoriesName]: z.string().optional(),
};

const hearingAidSchema = z.object({
  ...baseSchema,
  [categoryName]: z.literal(EARPHONE_VALUE),
  [colorTextName]: z.string().min(1, "El color es obligatorio"),
  [colorHexName]: z.string().min(1, "El color es obligatorio"),
  [earSideName]: z.string().min(1, "El lado del audífono es obligatorio"),
  [earphoneShapeName]: z.string().min(1),
});

const accessorySchema = z.object({
  ...baseSchema,
  [categoryName]: z.literal(ACCESSORY_VALUE),
  [earphoneShapeName]: z.string().optional(),
});

export const addShoppingListSchema = z.discriminatedUnion(
  categoryName,
  [hearingAidSchema, accessorySchema]
);

export type AddShoppingListFormData = z.infer<typeof addShoppingListSchema>;
