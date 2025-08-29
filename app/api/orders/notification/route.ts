// app/api/pago/notificacion/route.js
import crypto from "crypto";

function generaClaveOperacion(claveComercio: string, merchantOrder: string) {
  const cipher = crypto.createCipheriv(
    "des-ede3-cbc",
    claveComercio,
    Buffer.alloc(8, 0)
  );
  cipher.setAutoPadding(true);
  let claveOperacion = cipher.update(merchantOrder, "utf8");
  claveOperacion = Buffer.concat([claveOperacion, cipher.final()]);
  return claveOperacion;
}

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const Ds_SignatureVersion = formData.get("Ds_SignatureVersion");
    const Ds_MerchantParameters = formData.get("Ds_MerchantParameters");
    const Ds_Signature = formData.get("Ds_Signature");

    console.warn("📥 Formulario recibido:");
    console.log("Ds_SignatureVersion:", Ds_SignatureVersion);
    console.log("Ds_MerchantParameters:", Ds_MerchantParameters);
    console.log("Ds_Signature:", Ds_Signature);

    return new Response("✅ Datos recibidos correctamente", {
      status: 200,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  } catch (error) {
    console.error("❌ Error al procesar el formulario:", error);
    return new Response("Error interno del servidor", { status: 500 });
  }

  //// 1️⃣ Decodificar clave del comercio
  //const claveComercio = Buffer.from(process.env.REDSYS_SECRET_KEY, "base64");
//
  //// 2️⃣ Decodificar parámetros
  //const decodedParams = Buffer.from(Ds_MerchantParameters, "base64").toString("utf8");
  //const paramsJSON = JSON.parse(decodedParams);
//
  //// 3️⃣ Generar clave específica con el pedido recibido
  //const claveOperacion = generaClaveOperacion(
  //  claveComercio,
  //  paramsJSON.Ds_Order
  //);
//
  //// 4️⃣ Calcular firma para verificar
  //const hmac = crypto.createHmac("sha256", claveOperacion)
  //  .update(Ds_MerchantParameters)
  //  .digest();
//
  //const firmaCalculada = Buffer.from(hmac)
  //  .toString("base64")
  //  .replace(/\+/g, "-")
  //  .replace(/\//g, "_");
//
  //// 5️⃣ Validar firma
  //if (firmaCalculada !== Ds_Signature) {
  //  return new Response("Firma no válida", { status: 400 });
  //}
//
  //// 6️⃣ Comprobar si el pago fue aceptado
  //const codigoRespuesta = parseInt(paramsJSON.Ds_Response, 10);
  //const pagoOK = codigoRespuesta >= 0 && codigoRespuesta <= 99;
//
  //if (pagoOK) {
  //  // Actualizar estado del pedido en la DB
  //  await updateOrderStatus(paramsJSON.Ds_Order, "PAID");
  //  return new Response("OK", { status: 200 });
  //} else {
  //  await updateOrderStatus(paramsJSON.Ds_Order, "FAILED");
  //  return new Response("KO", { status: 200 });
  //}
}
