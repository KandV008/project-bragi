import crypto from "crypto";

function generateOperationKey(keyCommerce: Buffer, merchantOrder: string) {
  const cipher = crypto.createCipheriv("des-ede3-cbc", keyCommerce, Buffer.alloc(8, 0));
  cipher.setAutoPadding(true);
  let result = cipher.update(merchantOrder, "utf8");
  result = Buffer.concat([result, cipher.final()]);
  return result;
}

export async function POST(req: Request) {
  const { amount, order } = await req.json();

  const keyCommerce = Buffer.from(process.env.REDSYS_SECRET_KEY!, "base64");

  const orderFormatted = String(order).padStart(12, "0").slice(0, 12);

  const dsMerchantParameters = {
    DS_MERCHANT_AMOUNT: String(Math.round(Number(amount) * 100)), // en céntimos
    DS_MERCHANT_ORDER: orderFormatted,
    DS_MERCHANT_MERCHANTCODE: process.env.REDSYS_MERCHANT_CODE!,
    DS_MERCHANT_CURRENCY: "978", // EUR
    DS_MERCHANT_TRANSACTIONTYPE: "0",
    DS_MERCHANT_TERMINAL: process.env.REDSYS_TERMINAL!,
    DS_MERCHANT_MERCHANTURL: process.env.REDSYS_MERCHANT_URL!,
    DS_MERCHANT_URLOK: process.env.REDSYS_URL_OK!,
    DS_MERCHANT_URLKO: process.env.REDSYS_URL_KO!
  };

  const jsonParams = JSON.stringify(dsMerchantParameters);
  const base64Params = Buffer.from(jsonParams).toString("base64");

  const keyOperation = generateOperationKey(keyCommerce, orderFormatted);

  const hmac = crypto
    .createHmac("sha256", keyOperation)
    .update(base64Params)
    .digest();

  const signatureBase64 = hmac
    .toString("base64")
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

    console.log("RESULT:", signatureBase64)

  return new Response(
    JSON.stringify({
      Ds_SignatureVersion: "HMAC_SHA256_V1",
      Ds_MerchantParameters: base64Params,
      Ds_Signature: signatureBase64,
    }),
    { status: 200 }
  );
}
