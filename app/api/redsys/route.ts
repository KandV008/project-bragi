import crypto from "crypto";

/**
 * API Route Handler to generate a Redsys payment signature.
 *
 * Expects a JSON body with:
 * - `amount`: number or string with the transaction amount (e.g., 10.50)
 * - `order`: number or string with the order identifier
 *
 * Returns a JSON response with:
 * - `Ds_SignatureVersion`: signature version (HMAC_SHA512_V2)
 * - `Ds_MerchantParameters`: merchant parameters encoded in Base64 (URL-safe)
 * - `Ds_Signature`: generated signature in Base64 (URL-safe)
 *
 * @param req Incoming Request (Next.js / Fetch API)
 * @returns Response containing the signed parameters
 */
export async function POST(req: Request) {
  const { amount, order } = await req.json();

  const tpvURL = process.env.REDSYS_ORIGIN!;
  const secretKey = process.env.REDSYS_SECRET_KEY!;
  const orderFormatted = String(order).padStart(12, "0").slice(0, 12);

  const resultadoBase64 = getCipherKey(secretKey, orderFormatted);

  const base64Params = getMerchantParams(amount, orderFormatted);

  const signatureBase64 = getSignature(resultadoBase64, base64Params);

  return new Response(
    JSON.stringify({
      Ds_SignatureVersion: "HMAC_SHA512_V2",
      Ds_MerchantParameters: base64Params,
      Ds_Signature: signatureBase64,
      TPV_Origin: tpvURL,
    }),
    { status: 200 }
  );
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

/**
 * Builds the `Ds_MerchantParameters` object required by Redsys.
 *
 * Converts the required fields to JSON and encodes them
 * as a Base64 URL-safe string.
 *
 * @param amount Transaction amount in euros
 * @param orderFormatted Order number formatted to 12 characters
 * @returns Base64 URL-safe string with the Redsys merchant parameters
 */
function getMerchantParams(amount: any, orderFormatted: string) {
  const dsMerchantParameters = {
    "DS_MERCHANT_AMOUNT": String(Math.round(Number(amount) * 100)),
    "DS_MERCHANT_ORDER": orderFormatted,
    "DS_MERCHANT_MERCHANTCODE": process.env.REDSYS_MERCHANT_CODE!,
    "DS_MERCHANT_CURRENCY": "978",
    "DS_MERCHANT_TRANSACTIONTYPE": "0",
    "DS_MERCHANT_TERMINAL": process.env.REDSYS_TERMINAL!,
    "DS_MERCHANT_MERCHANTURL": process.env.REDSYS_MERCHANT_URL!,
    "DS_MERCHANT_URLOK": process.env.REDSYS_URL_OK!,
    "DS_MERCHANT_URLKO": process.env.REDSYS_URL_KO!
  };

  let jsonParams = JSON.stringify(dsMerchantParameters);
  jsonParams = jsonParams.replace(/\//g, "\\/");

  const base64Params = Buffer.from(jsonParams)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return base64Params;
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

