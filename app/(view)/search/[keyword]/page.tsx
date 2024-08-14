"use client";

import { ProductEntity } from "@/app/model/entities/Product";
import ProductContainer from "@/app/ui/components/common/productContainer";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "../loading";
import Filter from "@/app/ui/containers/search/filter";

export default function Page() {
  const pathname = usePathname();
  const [startIndex, setStartIndex] = useState<number>(0);
  const [endIndex, setEndIndex] = useState<number>(9);
  const increment = 10
  const keyword = pathname.split("/").pop();
  const [products, setProduct] = useState<ProductEntity[]>([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (keyword) {
      fetch(`/api/getProductsByKeyword?keyword=${keyword}&start=${startIndex}&end=${endIndex}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct((prev) => prev.concat(data));
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [endIndex, keyword, startIndex]);

  if (isLoading) return <Loading />;
  if (!products) return <p>No product data</p>;

  const filterAction = (filter: (product: ProductEntity) => boolean) => {
    const filtered = products.filter(filter);
    setProduct(filtered);
  };

  const addMoreProducts = () => {
    setStartIndex((prevIndex) => prevIndex + increment);
    setEndIndex((prevIndex) => prevIndex + increment);
  };

  return (
    <div className="flex flex-row w-full justify-between">
      <Filter onChange={filterAction} />
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
