import crypto from "crypto";

export async function POST(req: Request) {
  const { amount, order } = await req.json();

  // 1. Generación de la clave específica para la operación
  const secretKey = process.env.REDSYS_SECRET_KEY!;

  const preProcessedKey = secretKey.length >= 16
    ? secretKey.substring(0, 16)
    : secretKey.padEnd(16, '0');

  const orderFormatted = String(order).padStart(12, "0").slice(0, 12);

  // Paso 3: Vector de inicialización (16 bytes en cero)
  const iv = Buffer.alloc(16, 0);

  // Paso 4: Cifrado AES-CBC con relleno automático (PKCS#7)
  const cipher = crypto.createCipheriv(
    'aes-128-cbc',
    Buffer.from(preProcessedKey, 'utf-8'),
    iv
  );

  const encrypted = Buffer.concat([
    cipher.update(orderFormatted, 'utf-8'),
    cipher.final()
  ]);

  // Paso 5: Codificar en Base64
  const resultadoBase64 = encrypted.toString('base64');

  // 2. Cálculo del HMAC SHA-512 del parámetro a firmar
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
  }

  let jsonParams = JSON.stringify(dsMerchantParameters);
  jsonParams = jsonParams.replace(/\//g, "\\/");
  const base64Params = Buffer.from(jsonParams)
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const hmac = crypto
    .createHmac("sha512", resultadoBase64) // clave diversificada en binario
    .update(base64Params)
    .digest();

  const signatureBase64 = hmac
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  return new Response(
    JSON.stringify({
      Ds_SignatureVersion: "HMAC_SHA512_V2",
      Ds_MerchantParameters: base64Params,
      Ds_Signature: signatureBase64,
    }),
    { status: 200 }
  );
}
