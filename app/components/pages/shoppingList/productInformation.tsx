import Image from "next/image";
import AmountButton from "./amountButton";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

interface ProductInformationProps{
  id: string,
  imageURL: string,
  name: string,
  brand: string,
  price: number,
  earSide: string,
  guarantee: boolean,
  color: string,
  quantity: number
}

export default function ProductInformation({ id, imageURL, name, brand, price, earSide, guarantee, color, quantity }: ProductInformationProps) {
  let showEarSide: string
  
  if (earSide === "right"){
    showEarSide = "Derecho"
  } else if (earSide === "left"){
    showEarSide = "Izquierda"
  } else {
    showEarSide = "Ambos"
  }
  
  return (
    <section className="flex flex-row bg-primary0 text-primary2 gap-5 p-5 border-2 border-primary2 rounded rounded-tr-3xl">
      {/* Image */}
      <Image
        src={imageURL}
        width={150}
        height={150}
        alt={"img-" + name}
        className="size-48  bg-white rounded"
      />
      {/* Information */}
      <article className="flex flex-row gap-10 rounded-md p-3">
        {/* Product */}
        <div className="flex flex-col gap-10">
          {/* Name */}
          <div className="flex flex-col">
            <span className="text-xl font-bold">{name}</span>
            {/* Brand */}
            <span className="text-lg font-bold">{brand}</span>
          </div>
          {/* Price */}
          <div className="flex flex-col">
            <span className="text-2xl font-bold">Precio total</span>
            <span className="text-2xl font-bold">{price * quantity}€</span>
          </div>
        </div>
        {/* Choices */}
        <div className="flex flex-col self-center">
          {/* EarSide */}
          <div className="flex flex-col">
            <span className="font-bold">Lado del audífono</span>
            <span className="mx-2">{showEarSide}</span>
          </div>
          {/* Guarantee */}
          <div className="flex flex-col">
            <span className="font-bold">Seguro de 1 año</span>
            <span className="mx-2">{guarantee ? "Sí" : "No"}</span>
          </div>
          {/* Color */}
          <div className="flex flex-col">
            <span className="font-bold">Color del producto</span>
            <span className="mx-2">{color}</span>
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
            productId={id}
            color={color}
            earSide={earSide}
            guarantee={guarantee}
          />
          {/* Amount */}
          <span className="px-5 py-2 text-2xl font-bold">{quantity}</span>
          {/* Addition Button */}
          <AmountButton
            symbol={faPlus}
            productId={id}
            color={color}
            earSide={earSide}
            guarantee={guarantee}
          />
        </div>
      </article>
    </section>
  );
}
