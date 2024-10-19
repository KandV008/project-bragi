"use client";

import { ProductDTO } from "@/app/model/entities/DTOs/ProductDTO";
import MediumButtonWithIcon, { MediumButtonWithIconSkeleton } from "../../components/buttons/mediumButtonWithIcon";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "../../components/tags/sectionHeader";
import {
  componentBorder,
  componentBackground,
  componentText,
  shimmer,
} from "../../tailwindClasses";
import BargainInput from "../../components/bargains/bargainInput";
import { useState } from "react";
import { BargainEntity } from "@/app/model/entities/Bargain";

interface SummaryProps {
  products: ProductDTO[];
}

export default function Summary({ products }: SummaryProps) {
  const router = useRouter();
  const [bargain, setBargain] = useState<BargainEntity | null>(null)

  const updateBargain = (newBargain: BargainEntity | null) => {
    setBargain(newBargain)
  }

  const totalPrice = products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <section
      className={`sticky top-32 z-0 flex flex-col w-full rounded justify-between p-6  
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
        {/* Bargain */}
        <BargainInput bargain={bargain} updateBargain={updateBargain} />
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
            onClick={() => {
              router.push("/in-development");
            }}
          />{" "}
          {/* TODO Add speacial type */}
        </div>
      </article>
    </section>
  );
}

export function SummarySkeleton() {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded bg-gray-100 shadow-sm `}
    >
      <section className="sticky top-32 flex flex-col w-full justify-between p-6 border-2 rounded">
        {/* Header */}
        <SectionHeaderSkeleton />
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
          {/* Bargain */}
          <div className="flex flex-col justify-between gap-10">
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
          </div>
          <div className="w-full border-2 border-t mb-3"></div>
          {/* Total */}
          <div className="flex flex-row justify-between gap-10">
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
          </div>
          {/* Shopping Button */}
          <div className="place-self-center">
            <MediumButtonWithIconSkeleton />
          </div>
        </article>
      </section>
    </div>
  );
}
