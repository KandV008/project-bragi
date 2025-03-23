import {
  componentBackground,
  componentBorder,
  componentText,
  shimmer,
} from "../../../tailwindClasses";
import SeeMoreButton from "../../buttons/seeMoreButton";

/**
 * Props for the `Order` component.
 */
interface OrderProps {
  /** Unique identifier for the order. */
  id: string;
  /** Address associated with the order. */
  address: string;
  /** Total price of the order. */
  totalPrice: number;
  /** Creation date of the order. */
  creationDate: any;
}

/**
 * A component to display an order.
 *
 * @param {OrderProps} props - The props for the `Order` component.
 * @returns {JSX.Element} The `Order` component.
 */
export default function Order({
  id,
  address,
  totalPrice,
  creationDate,
}: OrderProps): JSX.Element {
  return (
    <section
      className={`flex flex-col items-center p-3 gap-3
        ${componentBorder} rounded-xl
        ${componentText}
        ${componentBackground}`}
    >
      <div className="flex flex-col sm:flex-row justify-between p-3 sm:p-5 gap-3">
        <article className="text-center sm:text-justify">
          {/* Order ID */}
          <h1 className="font-extrabold text-xl sm:text-2xl">Pedido Nº {id}</h1>
          {/* Address */}
          <p role="contentinfo" className="font-semibold text-lg sm:text-xl">
            Dirección: {address}
          </p>
        </article>
        <article className="font-bold text-xl sm:text-2xl self-center text-center">
          {/* Date of the order */}
          <h1 className="font-extrabold text-xl sm:text-2xl">
            Fecha: {creationDate}
          </h1>
          {/* Address */}
          <p role="contentinfo" className="font-semibold text-lg sm:text-xl">
            Precio total: {totalPrice}
          </p>
        </article>
      </div>
      <SeeMoreButton link={`/profile/orders/${id}`} thing={"Pedido"} />
    </section>
  );
}

/**
 * Skeleton loader for the `Order` component.
 *
 * This component is used to show a placeholder while the actual `Order` data is being loaded.
 *
 * @returns {JSX.Element} The `OrderSkeleton` component.
 */
export function OrderSkeleton(): JSX.Element {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 shadow-sm`}
    >
      <div className="flex flex-col justify-between items-center gap-3 p-3 md:p-4 xl:p-5 h-fit">
        <div className="flex flex-col sm:flex-row justify-between p-3 sm:p-5 gap-3">
          <article className="text-center sm:text-justify">
            {/* Order ID */}
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-64 rounded-md bg-gray-200 mb-1" />
            {/* Address */}
            <div className="md:self-start h-4 w-64 rounded-md bg-gray-200 mb-1" />
          </article>
          <article className="font-bold text-xl sm:text-2xl self-center text-center">
            {/* Date of the order */}
            <div className="md:self-start h-4 sm:h-5 xl:h-6 w-64 rounded-md bg-gray-200 mb-1" />
            {/* Address */}
            <div className="md:self-start h-4 w-64 rounded-md bg-gray-200 mb-1" />
          </article>
        </div>
        <div>
          <div className="md:self-start h-12 w-64 rounded-md bg-gray-200 mb-1" />
        </div>
      </div>
    </div>
  );
}
