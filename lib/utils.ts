import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";

/**
 * Formats a given date input into a string of the format 'YYYY-MM-DD'.
 *
 * @param value - The input value to be converted into a date. Can be a Date object, timestamp, or date string.
 * @returns A formatted date string ('YYYY-MM-DD') or an empty string if the input is invalid.
 */
export const getDateValue = (value: any) => {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
        console.error("Invalid date input:", value);
        return "";
    }

    const pad = (n: number) => n.toString().padStart(2, "0");
    const year = date.getFullYear();
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());

    const result = `${year}-${month}-${day}`;
    console.log("DATE:", result);
    return result;
};

/**
 * Formats a given date input into a time string in 24-hour format, adjusted to the Europe/Madrid timezone.
 *
 * @param value - The input value to be converted into a date. Can be a Date object, timestamp, or date string.
 * @returns A formatted time string ('HH:MM:SS') in Spanish locale or an empty string if the input is invalid.
 */
export const getSpanishHourValue = (value: any) => {
    const date = new Date(value);
    if (isNaN(date.getTime())) {
        console.error("Invalid date input:", value);
        return "";
    }

    const options: Intl.DateTimeFormatOptions = {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
        timeZone: "Europe/Madrid",
    };

    const formatter = new Intl.DateTimeFormat("es-ES", options);
    const result = formatter.format(date);

    console.log("HORA (España):", result);
    return result;
};

export function checkAccessoryByPairs(
    products: ShoppingProductDTO[],
    productName: string,
    accessoryId: string
): boolean {
    const productList = products.filter(p => p.name === productName);
    if (productList.length <= 1) return false;

    const accessory = products.find(p => p.id === accessoryId && p.price === 0);
    const accessoryQuantity = accessory?.quantity ?? 0;

    const leftEarphones = productList.filter(p => p.earSide === "left");
    const rightEarphones = productList.filter(p => p.earSide === "right");

    const leftCount = leftEarphones.reduce((sum, p) => sum + (p.quantity ?? 0), 0);
    const rightCount = rightEarphones.reduce((sum, p) => sum + (p.quantity ?? 0), 0);

    const pairCount = Math.min(leftCount, rightCount);

    console.warn("Product pairs:", pairCount);
    console.warn("Accessory quantity:", accessoryQuantity);

    return pairCount > accessoryQuantity;
}

export function checkRemoveAccessoryByPairs(products: ShoppingProductDTO[],
    productName: string,
    accessoryId: string) {
    const accessory = products.find(
        (p) => p.id === accessoryId && p.price === 0
    );
    const accessoryQty = accessory?.quantity ?? 0;

    const sameName = products.filter((p) => p.name === productName);
    const leftQty = sameName
        .filter((p) => p.earSide === "left")
        .reduce((sum, p) => sum + p.quantity, 0);
    const rightQty = sameName
        .filter((p) => p.earSide === "right")
        .reduce((sum, p) => sum + p.quantity, 0);
    const pairs = Math.min(leftQty, rightQty);

    return pairs >= accessoryQty
}