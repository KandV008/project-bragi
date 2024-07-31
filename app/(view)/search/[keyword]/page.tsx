'use client';

import { ProductEntity } from "@/app/model/entities/Product";
import ProductContainer from "@/app/ui/components/common/productContainer";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import Loading from "../loading";

export default function Page(){
    const pathname = usePathname();
    const keyword = pathname.split("/").pop();
    const [products, setProduct] = useState<ProductEntity[] | null>(null);
    const [isLoading, setLoading] = useState(true);
  
    useEffect(() => {
      if (keyword) {
        fetch(`/api/getProductsByKeyword?keyword=${keyword}`)
          .then((response) => response.json())
          .then((data) => {
            setProduct(data);
            setLoading(false);
          })
          .catch((error) => console.error("Error fetching product:", error));
      }
    }, [keyword]);
  
    if (isLoading) return <Loading />;
    if (!products) return <p>No product data</p>;

    return (
        <main className="flex flex-grow  justify-center space-x-2 py-5 sm:w-5/6 xl:w-4/6 place-self-center ">
          <ProductContainer products={products} />
        </main>
    );
}