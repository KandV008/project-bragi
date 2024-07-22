import Image from "next/image";
import AmountButton from "./amountButton";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

export default function ProductInformation() {
  return (
    <section className="flex flex-row bg-primary0 text-primary2 gap-5 p-5 border-2 border-primary2 rounded rounded-tr-3xl">
      {/* Image */}
      <Image
        src="/placeholder-product.jpg"
        width={150}
        height={150}
        alt="Placeholder" // TODO Add the real Logo
        className="size-48  bg-white rounded"
      />
      {/* Information */}
      <article className="flex flex-row gap-10 rounded-md p-3">
        {/* Product */}
        <div className="flex flex-col gap-10">
          {/* Name */}
          <div className="flex flex-col">
            <span className="text-xl font-bold">Audéo Lumity L-R</span>
            {/* Brand */}
            <span className="text-lg font-bold">Phonak</span>
          </div>
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Precio total</span>
            <span className="text-2xl font-bold">1599€</span>
          </div>
        </div>
        {/* Choices */}
        <div className="flex flex-col self-center">
          {/* EarSide */}
          <div className="flex flex-col">
            <span className="font-bold">Lado del audífono</span>
            <span className="mx-2">Ambos</span>
          </div>
          {/* Guarantee */}
          <div className="flex flex-col">
            <span className="font-bold">Seguro de 1 año</span>
            <span className="mx-2">Sí</span>
          </div>
          {/* Color */}
          <div className="flex flex-col">
            <span className="font-bold">Color del producto</span>
            <span className="mx-2">Champán</span>
          </div>
        </div>
      </article>
      {/* Amount Button */}
      <article className="flex flex-col gap-4 self-center">
        <h1 className="text-2xl font-bold self-center">
            Cantidad
        </h1>
        <div className="flex flex-row gap-2">
          {/* Substract Button */}
          <AmountButton
            symbol={faMinus}
            productId={""}
            color={""}
            earSide={""}
            guarantee={false}
          />
          {/* Amount */}
          <span className="px-5 py-2 text-2xl font-bold">1</span>
          {/* Addition Button */}
          <AmountButton
            symbol={faPlus}
            productId={""}
            color={""}
            earSide={""}
            guarantee={false}
          />
        </div>
      </article>
    </section>
  );
}
