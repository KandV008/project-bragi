"use client";

import Filter from "@/app/ui/containers/search/filter";
import { ProductEntity } from "@/app/model/entities/Product";
import ProductContainer from "@/app/ui/components/common/productContainer";
import Loading from "./loading";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10;
  const [productCategory, setProductCategory] = useState<string | undefined>(
    undefined
  );
  const [filters, setFilters] = useState<string[]>([]);
  const [products, setProduct] = useState<ProductEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setProductCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    const joinFilters = filters.join(",");
    if (productCategory) {
      fetch(
        `/api/getProductsByCategory?category=${productCategory}&start=${startIndex}&end=${endIndex}&filters=${joinFilters}`
      )
        .then((response) => response.json())
        .then((data) => {
          if(startIndex === 0){
            setProduct(data)
          } else {
            setProduct((prev) => prev.concat(data));
          }
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [endIndex, filters, productCategory, startIndex]);

  if (isLoading) return <Loading />;
  if (!products) return <p>No product data</p>; // TODO Add message

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
  );
}
