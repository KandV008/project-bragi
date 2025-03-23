"use client";

import MediumButton from "../../buttons/mediumButton";
import { shimmer } from "../../../tailwindClasses";
import Order, { OrderSkeleton } from "../order/order";
import { OrderEntity } from "@/app/model/entities/order/Order";

/**
 * Props for the `OrderContainer` component.
 */
interface OrderContainerProps {
  /** Array of orders to display. */
  orders: OrderEntity[];
  /** Callback function triggered when "Ver más" is clicked. */
  moreOrders?: () => void;
  /** Determines if the "Ver más" button should be displayed. */
  showMoreButton: boolean;
}

/**
 * A container component for displaying a list of orders with an optional "Ver más" button.
 *
 * @param {OrderContainerProps} props - The props for the `OrderContainer` component.
 * @returns {JSX.Element} The `OrderContainer` component.
 */
export default function OrderContainer({
  orders,
  moreOrders,
  showMoreButton,
}: OrderContainerProps): JSX.Element {
  return (
    <section className="flex flex-col gap-10 w-full items-center">
      <article className="flex flex-col w-full p-3 md:w-2/3 lg:w-1/2 gap-3 items-center self-center">
        {orders.map((order) => (
          <Order
            key={order.id}
            id={order.id}
            address={order.address}
            totalPrice={order.totalPrice}
            creationDate={order.creationDate}
          />
        ))}
      </article>
      {showMoreButton ? (
        <article className="self-center">
          <MediumButton text="Ver más" onClick={moreOrders} />
        </article>
      ) : null}
    </section>
  );
}

/**
 * Skeleton loader for the `OrderContainer` component.
 *
 * This component is used to show placeholder content while the orders are being loaded.
 *
 * @returns {JSX.Element} The `OrderContainerSkeleton` component.
 */
export function OrderContainerSkeleton(): JSX.Element {
  return (
    <div
      className={`${shimmer} relative overflow-hidden rounded shadow-sm p-5`}
    >
      <section className="flex flex-col gap-4 lg:gap-8 justify-center lg:justify-start shrink-0 w-fit">
        <OrderSkeleton />
        <OrderSkeleton />
        <OrderSkeleton />
        <OrderSkeleton />
        <OrderSkeleton />
        <OrderSkeleton />
        <OrderSkeleton />
      </section>
    </div>
  );
}
