"use client";

import { useEffect, useState } from "react";
import Loading from "./loading";
import { getOrdersRoute } from "@/app/api/routes";
import OrderContainer from "@/app/ui/components/orders/orderContainer/orderContainer";
import { OrderEntity } from "@/app/model/entities/order/Order";
import Spinner from "@/app/ui/components/common/spinner/spinner";
import NoOrdersMessage from "@/app/ui/components/messages/noOrdersMessage/noOrdersMessage";

/**
 * Page component that displays a list of orders.
 * This component fetches bargain data and displays it using the `OrderContainer`.
 * It handles loading states, pagination, and displays a spinner while fetching additional data.
 *
 * @returns {JSX.Element} The Orders page component.
 */
export default function Page(): JSX.Element {
  const [orders, setOrders] = useState<OrderEntity[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isSpinnerActive, setSpinnerActive] = useState(false);

  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(4);
  const increment = 5;

  useEffect(() => {
    if (!isLoading) setSpinnerActive(true);

    fetch(`${getOrdersRoute}?start=${startIndex}&end=${endIndex}`)
      .then((response) => response.json())
      .then((data) => {
        if (startIndex === 0) {
          setOrders(data);
        } else {
          setOrders((prev) => prev.concat(data));
        }
        setLoading(false);
        setSpinnerActive(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [endIndex, isLoading, startIndex]);

  if (isLoading) return <Loading />;
  if (orders.length === 0) return <NoOrdersMessage />;

  /**
   * Function to load more orders by updating the start and end index.
   * It fetches the next set of orders from the API.
   */
  const addMoreOrders = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  return (
    <>
      {isSpinnerActive ? (
        <div className="fixed top-36 right-0 xl:right-80 transform -translate-x-1/2 z-50">
          <Spinner />
        </div>
      ) : (
        <></>
      )}
      <OrderContainer
        orders={orders}
        moreOrders={addMoreOrders}
        showMoreButton={orders.length === endIndex + 1}
      />
    </>
  );
}
