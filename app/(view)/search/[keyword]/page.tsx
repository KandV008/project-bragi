"use client";

import { ProductEntity } from "@/app/model/entities/Product";
import ProductContainer from "@/app/ui/components/products/productContainer";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "../loading";
import Filter from "@/app/ui/containers/search/filter";
import Spinner from "@/app/ui/components/common/spinner";
import EmptyMessage from "@/app/ui/components/messages/emptyMessage";

export default function Page() {
  const pathname = usePathname();
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10

  const keyword = pathname.split("/").pop();
  const [filters, setFilters] = useState<string[]>([]);

  const [products, setProduct] = useState<ProductEntity[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [isSpinnerActive, setSpinnerActive] = useState(false);

  useEffect(() => {
    if (!isLoading) setSpinnerActive(true);
    const joinFilters = filters.join(",");
    
    if (keyword) {
      fetch(`/api/getProductsByKeyword?keyword=${keyword}&start=${startIndex}&end=${endIndex}&filters=${joinFilters}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct((prev) => prev.concat(data));
          setLoading(false);
          setSpinnerActive(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [endIndex, filters, isLoading, keyword, startIndex]);

  if (isLoading) return <Loading />;
  if (products.length === 0) return <EmptyMessage />

  const filterAction = (filter: string) => {
    setFilters((prev) => {
      const index = prev.findIndex((value) =>
        value.startsWith(filter.split(",")[0])
      );

      if (index === -1) {
        return [...prev, filter];
      } else if (prev[index] === filter) {
        const newFilters = [...prev];
        newFilters.splice(index, 1);
        return newFilters;
      } else {
        const newFilters = [...prev];
        newFilters[index] = filter;
        return newFilters;
      }
    });
    setStartIndex(0)
    setEndIndex(9)
  };

  const addMoreProducts = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  return (
    <div className="relative w-full">
      {isSpinnerActive ? (
        <div className="fixed top-36 right-0 xl:right-80 transform -translate-x-1/2 z-50">
          <Spinner />
        </div>
      ) : (
        <></>
      )}
      <div className="flex flex-row w-full justify-between">
        <div className="shrink-0">
          <Filter onChange={filterAction} products={products} />
        </div>
        <div className="md:size-fit lg:px-12">
          <ProductContainer
            products={products}
            moreProduct={addMoreProducts}
            showMoreButton={products.length === endIndex + 1}
          />
        </div>
      </div>
    </div>
  );
}
