"use client";

import AboutProduct from "@/app/components/pages/about/aboutProduct";
import Guarantee from "@/app/components/pages/about/guarantee";
import RelatedProducts from "@/app/components/pages/about/relatedProducts";
import { ProductEntity } from "@/app/model/Product";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
  const pathname = usePathname();
  const productId = pathname.split("/").pop();

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    if (productId) {
      fetch(`/api/getProduct?id=${productId}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [productId]);

  if (isLoading) return <p>Loading...</p> // TODO Loanding Screen

  console.log(data)

  if (!data) return <p>No product data</p>

  return (
    <main className="flex flex-col flex-grow justify-center space-y-3 md:space-y-10 py-5 w-11/12 xl:w-4/6 place-self-center ">
      <AboutProduct product={data} />
      <Guarantee />
      <RelatedProducts brand={(data as ProductEntity).brand} price={(data as ProductEntity).price}/>
    </main>
  );
}
