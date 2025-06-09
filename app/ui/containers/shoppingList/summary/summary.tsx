"use client";

import { ShoppingProductDTO } from "@/app/model/entities/shoppingProductDTO/ShoppingProductDTO";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import {
  componentBorder,
  componentBackground,
  componentText,
  shimmer,
} from "../../../tailwindClasses";
import BargainInput from "../../../components/bargains/bargainInput/bargainInput";
import { useState } from "react";
import {
  BargainEntity,
  getCodeAction,
} from "@/app/model/entities/bargain/Bargain";
import MediumButtonWithIcon, {
  MediumButtonWithIconSkeleton,
} from "@/app/ui/components/buttons/mediumButtonWithIcon/mediumButtonWithIcon";
import SectionHeader, {
  SectionHeaderSkeleton,
} from "@/app/ui/components/tags/sectionHeader/sectionHeader";

/**
 * Props for the Summary component.
 */
interface SummaryProps {
  products: ShoppingProductDTO[];
}

/**
 * Summary component displaying the details of selected products, including name, color, quantity, and total cost.
 * Also includes a section for applying bargain discounts and a purchase button.
 *
 * @param {SummaryProps} props - Component properties containing the list of products.
 * @returns {JSX.Element} The summary component.
 */
export default function Summary({ products }: SummaryProps): JSX.Element {
  const router = useRouter();
  const [bargain, setBargain] = useState<BargainEntity | null>(null);
  const [currentProducts, setCurrentProducts] =
    useState<ShoppingProductDTO[]>(products);
  const [status, setStatus] = useState<0 | 1>(0);

  /**
   * Updates the current bargain applied to the purchase.
   * @param {BargainEntity | null} newBargain - The new bargain entity to apply.
   */
  const updateBargain = (newBargain: BargainEntity | null) => {
    if (!newBargain) {
      setBargain(null);
      return;
    }

    const bargainAction = getCodeAction(newBargain.code);

    if (!bargainAction) {
      setBargain(null);
      return; // TODO handle invalid bargain
    }

    setBargain(newBargain);
    const { shoppingList, status } = bargainAction(products);
    setCurrentProducts(shoppingList);
    setStatus(status);
  };

  const totalPrice = currentProducts.reduce(
    (total, product) => {
      if (product.discountPrice == null){
        return total + product.price * product.quantity
      }

      return total + product.discountPrice * product.quantity
    },
    0
  );

  return (
    <section
      className={`sticky top-32 z-0 flex flex-col w-full rounded justify-between p-6 ${componentBorder} ${componentBackground} ${componentText}`}
    >
      <SectionHeader text={"Resumen"} />
      <article className="flex flex-col gap-3">
        <div className="flex flex-row gap-1 justify-between">
          <span>Nombre</span>
          <span>Color</span>
          <span>Cantidad</span>
          <span>Coste</span>
        </div>
        {products.map((product, index) => (
          <div className="flex flex-row gap-1 justify-between" key={index}>
            <span>{product.name}</span>
            <span>{product.colorText}</span>
            <span>x{product.quantity}</span>
            {product.discountPrice != null ? (
              <>
                <span className="text-red-500">
                  {product.discountPrice * product.quantity}€
                </span>
              </>
            ) : (
              <>
                <span>{product.price * product.quantity}€</span>
              </>
            )}
          </div>
        ))}
      </article>
      <article className="flex flex-col gap-2">
        <div className={`w-full border-t my-3 ${componentBorder}`}></div>
        <BargainInput
          bargain={bargain}
          setBargain={updateBargain}
          status={status}
        />
        <div className={`w-full border-t my-3 ${componentBorder}`}></div>
        <div className="flex flex-row justify-between gap-10">
          <h2 className="text-2xl font-bold">Total</h2>
          <span className="text-2xl font-bold text-red-1">{totalPrice}€</span>
        </div>
        <div className="place-self-center">
          <MediumButtonWithIcon
            icon={faCartShopping}
            text={"Comprar"}
            subtext={"Empezar compra"}
            type={"default"}
            onClick={() =>
              router.push(
                `/profile/shoppingList/shopping?bargain=${bargain?.code}`
              )
            }
          />
        </div>
      </article>
    </section>
  );
}

/**
 * Skeleton loader for the Summary component, used while data is loading.
 * @returns {JSX.Element} A skeleton UI placeholder for the Summary component.
 */
export function SummarySkeleton(): JSX.Element {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded bg-gray-100 shadow-sm`}
    >
      <section className="sticky top-32 flex flex-col w-full justify-between p-6 border-2 rounded">
        <SectionHeaderSkeleton />
        <article className="flex flex-col gap-3">
          <div className="flex flex-row gap-1 justify-between">
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-full rounded-md bg-gray-200 mb-1" />
          </div>
        </article>
        <article className="flex flex-col gap-2">
          <div className="w-full border-2 border-t mb-3"></div>
          <div className="flex flex-col justify-between gap-10">
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
          </div>
          <div className="w-full border-2 border-t mb-3"></div>
          <div className="flex flex-row justify-between gap-10">
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
            <div className="md:self-start h-10 w-28 rounded-md bg-gray-200" />
          </div>
          <div className="place-self-center">
            <MediumButtonWithIconSkeleton />
          </div>
        </article>
      </section>
    </div>
  );
}
