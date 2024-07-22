import MediumButtonWithIcon from "../../buttons/mediumButtonWithIcon";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

export default function Summary() {
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
        <div className="flex flex-row gap-1 justify-between">
          <span className="">Audéo Lumity L-R</span>
          <span className="">Champán</span>
          <span className="">x1</span>
          <span className="">1599€</span>
        </div>
        <div className="flex flex-row gap-1 justify-between">
          <span className="">Audéo Lumity L-R</span>
          <span className="">Champán</span>
          <span className="">x1</span>
          <span className="">1599€</span>
        </div>
        <div className="flex flex-row gap-1 justify-between">
          <span className="">Audéo Lumity L-R</span>
          <span className="">Champán</span>
          <span className="">x1</span>
          <span className="">1599€</span>
        </div>
        <div className="flex flex-row gap-1 justify-between">
          <span className="">Audéo Lumity L-R</span>
          <span className="">Champán</span>
          <span className="">x1</span>
          <span className="">1599€</span>
        </div>
      </article>
      {/* Footer */}
      <article className="flex flex-col gap-2 ">
        <div className="w-full border-2 border-t mb-3 border-primary2 dark:border-secondary0"></div>
        {/* Total */}
        <div className="flex flex-row justify-between gap-10">
          <h2 className="text-2xl font-bold">Total</h2>
          <span className="text-2xl font-bold text-red-1">1599€</span>
        </div>
        {/* Shopping Button */}
        <div className="place-self-center">
          <MediumButtonWithIcon
            icon={faCartShopping}
            text={"Comprar"}
            subtext={"Empezar compra"}
            type={"warning"} 
          /> {/* TODO Add speacial type */}
        </div>
      </article>
    </section>
  );
}
