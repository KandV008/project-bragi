import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";

interface ShoppingFormAdviceProps {
  products: ShoppingProductDTO[];
}

export default function ShoppingFormAdvice({
  products,
}: ShoppingFormAdviceProps) {
  const headText =
    "En la cesta de la compra se ha detectado la existencia de audífonos con forma CIC y/o BTE.";
  const bottomText =
    "Para encargar estos modelos es necesario realizar un molde personalizado, por lo que tendrás que concertar una cita con nosotros.";
  const adviceText =
    "Puedes continuar el proceso de pago con normalidad, solamente no se cobrarán esos productos. Contactaremos contigo para acordar la cita.";

  const invalidProducts = products.filter((product: ShoppingProductDTO) => checkInvalidEarphoneShape(product));

  if (!invalidProducts) return <></>;

  return (
    <div className="mt-3 p-4 mb-4 bg-pink-50 border-l-4 border-pink-500 text-pink-700 rounded-lg shadow-md max-w-4xl mx-auto">
      <p>{headText}</p>
      <div>
        <p>Audífonos no validos:</p>
        {invalidProducts.map((invalidProduct, index) => (
          <ul key={`invalid-product-${index}`}>- {invalidProduct.name}</ul>
        ))}
      </div>
      <p>{bottomText}</p>
      <p>{adviceText}</p>
    </div>
  );
}

/**
 * Checks if the product's earphone shape requires special handling.
 *
 * @param {ShoppingProductDTO} product - The product to check.
 * @returns {boolean} True if the earphone shape requires an appointment.
 */
export function checkInvalidEarphoneShape(product: ShoppingProductDTO): boolean {
  return product.earphoneShape === "BTE" || product.earphoneShape === "CIC";
}
