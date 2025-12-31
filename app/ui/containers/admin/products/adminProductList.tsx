"use client";

import { useState, useEffect } from "react";
import { getAllProductsRoute } from "@/app/api/routes";
import { ProductEntity } from "@/app/model/entities/product/Product";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage/emptyMessage";
import { DeletingContext } from "@/app/ui/components/contexts/deletingContext";
import { deleteProductsByIds } from "@/db/product/product";
import dynamic from "next/dynamic";
import { ProductContainerSkeleton } from "@/app/ui/components/products/productContainer/productContainer";

const AdminPanel = dynamic(() => import("../adminPanel"));
const AdminDeletionPanel = dynamic(() => import("../adminDeletionPanel"));
const ProductContainer = dynamic(
  () => import("@/app/ui/components/products/productContainer/productContainer")
);

/**
 * This component displays a list of products for administrative purposes. It fetches
 * product data from the API and allows the admin to load more products incrementally.
 *
 * @returns {JSX.Element} A React component for managing product listings.
 */
export default function AdminProductList(): JSX.Element {
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;
  const [products, setProduct] = useState<ProductEntity[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [statusDeleteAction, setStatusDelecteAction] = useState(true);
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  /**
   * Fetches product data from the API when `startIndex` or `endIndex` changes.
   */
  useEffect(() => {
    fetch(`${getAllProductsRoute}?start=${startIndex}&end=${endIndex}`)
      .then((response) => response.json())
      .then((data) => {
        if (startIndex === 0) {
          setProduct(data);
        } else {
          setProduct((prev) => prev.concat(data));
        }
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [endIndex, startIndex]);

  if (isLoading) return <AdminProductListSkeleton />;
  if (!products) return <EmptyMessage />;

  /**
   * Loads more products by updating the start and end indices.
   */
  const addMoreProducts = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  return (
    <DeletingContext.Provider value={{ selectedValues, setSelectedValues }}>
      <section className="flex flex-col gap-5 w-full justify-between">
        {/* Actions */}
        <AdminPanel
          entity={"product"}
          context={"ALL"}
          extras={{
            url: "/admin",
          }}
        />
        {/* Delete products */}
        <AdminDeletionPanel
          status={statusDeleteAction}
          action={deleteProductsByIds}
          updateDeletionStatus={() => {
            setStatusDelecteAction((prev) => !prev);
          }}
        />
        {/* List */}
        <article className="md:size-fit lg:px-12">
          <ProductContainer
            products={products}
            moreProduct={addMoreProducts}
            showMoreButton={products.length === endIndex + 1}
            isPreview={true}
            isDeleting={statusDeleteAction}
          />
        </article>
      </section>
    </DeletingContext.Provider>
  );
}

/**
 * A skeleton loader for the AdminProductList component. Displays a loading state
 * while product data is being fetched.
 *
 * @returns {JSX.Element} A React component that renders a loading placeholder.
 */
export function AdminProductListSkeleton(): JSX.Element {
  return (
    <div className="flex flex-row w-full justify-center">
      <ProductContainerSkeleton />
    </div>
  );
}
