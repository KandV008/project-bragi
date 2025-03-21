import { ProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";

interface ShoppingFormAdviceProps{
  products: ProductDTO[]
}

export default function ShoppingFormAdvice({products}: ShoppingFormAdviceProps) {

  const text = "En la cesta de la compra se ha detectado la existencia de audífonos con forma CIC y/o ITC."

  const unvalidProducts = products.filter((product: ProductDTO) => {
    return product.name
  })


  return (
    <div className="mt-3 p-4 mb-4 bg-pink-50 border-l-4 border-pink-500 text-pink-700 rounded-lg shadow-md max-w-4xl mx-auto">
      <p>{text}</p>
    </div>
  );
}
