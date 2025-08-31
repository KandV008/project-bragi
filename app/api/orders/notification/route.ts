import { updateOrderStatus } from "@/db/order/order";
import { sendReceiptEmail } from "@/lib/mail";
import crypto from "crypto";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const Ds_SignatureVersion = formData.get("Ds_SignatureVersion")?.toString();
    const Ds_MerchantParameters = formData.get("Ds_MerchantParameters")?.toString();
    const Ds_Signature = formData.get("Ds_Signature")?.toString();

    console.log("Ds_SignatureVersion:", Ds_SignatureVersion);

    const secretKey = process.env.REDSYS_SECRET_KEY!;

    const paramsJSON = decodeMerchantParameters(Ds_MerchantParameters!);
    const order = paramsJSON.Ds_Order
    const formattedOrder = Number(order)

    const resultadoBase64 = getCipherKey(secretKey, order);

    const signatureBase64 = getSignature(resultadoBase64, Ds_MerchantParameters!);

    if (signatureBase64 !== Ds_Signature) {
      return new Response("Signature not valid", { status: 400 });
    }

    const codigoRespuesta = parseInt(paramsJSON.Ds_Response, 10);
    const pagoOK = codigoRespuesta >= 0 && codigoRespuesta <= 99;
    let status = ""

    if (pagoOK) {
      const id = await updateOrderStatus(formattedOrder, "PAID");
      //await sendReceiptEmail(formData, id);
      status = "OK"
    } else {
      await updateOrderStatus(formattedOrder, "FAILED");
      status = "KO"
    };

    return new Response(status, {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("ERROR:", error);
    return new Response("Error interno del servidor", { status: 500 });
  }

}

/**
 * Generates the HMAC-SHA512 signature in Base64 URL-safe format
 * using the derived cipher key and the merchant parameters.
 *
 * @param resultadoBase64 Derived cipher key (Base64)
 * @param base64Params Merchant parameters encoded in Base64
 * @returns Signature in Base64 URL-safe format
 */
function getSignature(resultadoBase64: string, base64Params: string) {
  const hmac = crypto
    .createHmac("sha512", resultadoBase64)
    .update(base64Params)
    .digest();

  const signatureBase64 = hmac
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
  return signatureBase64;
}

function decodeMerchantParameters(Ds_MerchantParameters: string) {
  let base64 = Ds_MerchantParameters
    .replace(/-/g, "+")
    .replace(/_/g, "/");

  while (base64.length % 4 !== 0) {
    base64 += "=";
  }

  const decoded = Buffer.from(base64, "base64").toString("utf8");
  return JSON.parse(decoded);
}

/**
 * Derives the cipher key (`resultadoBase64`) from the merchant
 * secret key and the order number.
 *
 * Redsys requires AES-128-CBC with IV = 0 to generate a
 * temporary key linked to the order, which is then used
 * in the signature calculation.
 *
 * @param secretKey Merchant secret key (provided by Redsys)
 * @param orderFormatted Order number formatted to 12 characters
 * @returns Derived cipher key in Base64
 */
function getCipherKey(secretKey: string, orderFormatted: string) {
  const preProcessedKey = secretKey.length >= 16
    ? secretKey.substring(0, 16)
    : secretKey.padEnd(16, '0');

  const iv = Buffer.alloc(16, 0);

  const cipher = crypto.createCipheriv(
    'aes-128-cbc',
    Buffer.from(preProcessedKey, 'utf-8'),
    iv
  );

  const encrypted = Buffer.concat([
    cipher.update(orderFormatted, 'utf-8'),
    cipher.final()
  ]);

  const resultadoBase64 = encrypted.toString('base64');
  return resultadoBase64;
}
