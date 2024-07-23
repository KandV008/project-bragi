import { ProductDTO } from "@/app/model/DTOs/ProductDTO";
import MediumButtonWithIcon from "../../buttons/mediumButtonWithIcon";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

interface SummaryProps {
  products: ProductDTO[];
}

export default function Summary({ products }: SummaryProps) {
  const totalPrice = products.reduce((total, product) => total + product.price * product.quantity, 0);
  
  return (
    <section className="sticky top-32 flex flex-col w-full justify-between p-6 border-2 bg-primary0 border-primary2 text-primary2 rounded">
      {/* Header */}
      <article>
        <h2 className="text-2xl font-bold">Resumen</h2>
        <div className="w-full border-2 border-t mb-3 border-primary2 dark:border-secondary0"></div>
      </article>
      {/* Body */}
      <article className="flex flex-col gap-3">
        {/* Header Table */}
        <div className="flex flex-row gap-1 justify-between">
          <span className="">Nombre</span>
          <span className="">Color</span>
          <span className="">Cantidad</span>
          <span className="">Coste</span>
        </div>
        {/* Rows Table */}
        {products.map((product, index) => (
          <div className="flex flex-row gap-1 justify-between" key={index}>
            <span className="">{product.name}</span>
            <span className="">{product.color}</span>
            <span className="">x{product.quantity}</span>
            <span className="">{product.price * product.quantity}€</span>
          </div>
        ))}
      </article>
      {/* Footer */}
      <article className="flex flex-col gap-2 ">
        <div className="w-full border-2 border-t mb-3 border-primary2 dark:border-secondary0"></div>
        {/* Total */}
        <div className="flex flex-row justify-between gap-10">
          <h2 className="text-2xl font-bold">Total</h2>
          <span className="text-2xl font-bold text-red-1">{totalPrice}€</span>
        </div>
        {/* Shopping Button */}
        <div className="place-self-center">
          <MediumButtonWithIcon
            icon={faCartShopping}
            text={"Comprar"}
            subtext={"Empezar compra"}
            type={"warning"}
          />{" "}
          {/* TODO Add speacial type */}
        </div>
      </article>
    </section>
  );
}
