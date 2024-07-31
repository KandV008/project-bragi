'use client';

import Filter from "@/app/ui/containers/search/filter";
import { ProductEntity } from "@/app/model/entities/Product";
import ProductContainer from "@/app/ui/components/common/productContainer";
import Loading from "./loading";
import { useState, useEffect } from "react";
import { useSearchParams } from 'next/navigation';

export default function Page() {
  const searchParams = useSearchParams();
  const [productCategory, setProductCategory] = useState<string | undefined>(undefined);
  const [products, setProduct] = useState<ProductEntity[] | null>(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const category = searchParams.get('category');
    if (category) {
      setProductCategory(category);
    }
  }, [searchParams]);

  useEffect(() => {
    if (productCategory) {
      fetch(`/api/getProductsByCategory?category=${productCategory}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
          setLoading(false);
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [productCategory]);

  if (isLoading) return <Loading />;
  if (!products) return <p>No product data</p>;

  const filterAction = (filter: (product: ProductEntity) => boolean) => {
    const filtered = products.filter(filter)
    setProduct(filtered)
  }

  return (
    <main className="flex flex-grow  justify-center space-x-2 py-5 sm:w-5/6 xl:w-4/6 place-self-center ">
      <Filter onChange={filterAction}/>
      <div className="md:size-fit lg:px-12">
        <ProductContainer products={products} />
      </div>
    </main>
  );
}
