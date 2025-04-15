"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "./loading";
import Guarantee from "@/app/ui/containers/search/about/guarantee";
import DisplayProductDetails from "@/app/ui/containers/search/about/displayProductDetails/displayProductDetails";
import DisplayProductAttributes from "@/app/ui/containers/search/about/displayProductAttributes/displayProductAttributes";
import {
  getOrderRoute,
  getProductRoute,
  getRelatedProductsRoute,
} from "@/app/api/routes";
import { ProductEntity } from "@/app/model/entities/product/Product";
import SomeProductContainer from "@/app/ui/components/products/someProductContainer/someProductContainer";
import { EarphoneShape } from "@/app/model/entities/product/enums/earphoneAttributes/EarphoneShape";
import DisplayOrder from "@/app/ui/containers/profile/orders/displayOrders/displayOrder";
import { OrderEntity } from "@/app/model/entities/order/Order";

/**
 * Page component that displays product details, attributes, related products, and a guarantee section.
 * It fetches product data based on the product ID from the URL and renders various components such as
 * product attributes, details, related products, and a guarantee message.
 *
 * @returns {JSX.Element} The Product Details page component.
 */
export default function Page(): JSX.Element {
  const pathname = usePathname();
  const orderId = pathname.split("/").pop();

  const [order, setOrder] = useState<OrderEntity | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (orderId) {
      fetch(`${getOrderRoute}?id=${orderId}`)
        .then((response) => response.json())
        .then((data) => {
          setOrder(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching order:", error));
    }
  }, [orderId]);

  if (isLoading) return <Loading />;
  if (!order) return <p>No order data</p>;

  return (
    <div className="flex flex-col gap-3">
      <DisplayOrder
        id={order.id}
        creationDate={order.creationDate}
        userName={order.userName}
        firstName={order.firstName}
        phoneNumber={order.phoneNumber}
        email={order.email}
        address={order.address}
        products={order.products}
        totalPrice={order.totalPrice}
      />
    </div>
  );
}
