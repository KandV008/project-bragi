'use client';

import { ProductDTO } from "@/app/model/entities/DTOs/ProductDTO";
import MediumButtonWithIcon from "../../components/buttons/mediumButtonWithIcon";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { componentBackground, componentBorder, componentText } from "@/lib/tailwindClasses";
import ArticleHeader from "../../components/tags/articleHeader";
import SectionHeader from "../../components/tags/sectionHeader";

interface SummaryProps {
  products: ProductDTO[];
}

export default function Summary({ products }: SummaryProps) {
  const router = useRouter()

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <section
      className={`sticky top-32 flex flex-col w-full rounded justify-between p-6  
                ${componentBorder} ${componentBackground} ${componentText}`}
    >
      {/* Header */}
      <SectionHeader text={"Resumen"} />
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
        <div className={`w-full border-t my-3 ${componentBorder}`}></div>
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
            type={"default"}
            onClick={() => {router.push("/in-development")}}
          />{" "}
          {/* TODO Add speacial type */}
        </div>
      </article>
    </section>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function SummarySkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded bg-gray-100 shadow-sm `}
    >
      <section className="sticky top-32 flex flex-col w-full justify-between p-6 border-2 rounded">
        {/* Header */}
        <article>
          <div className="md:self-start h-10 w-32 rounded-md bg-gray-200 mb-1" />
          <div className="w-full border-2 border-t mb-3"></div>
        </article>
        {/* Body */}
        <article className="flex flex-col gap-3">
          {/* Header Table */}
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
          {/* Rows Table */}
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
        </article>
        {/* Footer */}
        <article className="flex flex-col gap-2 ">
          <div className="w-full border-2 border-t mb-3"></div>
          {/* Total */}
          <div className="flex flex-row justify-between gap-10">
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
          </div>
          {/* Shopping Button */}
          <div className="place-self-center">
            <div
              className="w-64 h-16 flex flex-row place-self-center md:place-self-start justify-center
                          border-2 rounded bg-gray-200"
            />
          </div>
        </article>
      </section>
    </div>
  );
}
