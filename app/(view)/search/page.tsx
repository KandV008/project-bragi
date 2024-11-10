"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductsWithFilter from "@/app/ui/containers/search/productsWithFilter";
import { getProductsByCategoryRoute } from "@/app/api/routes";

export default function Page() {
  const searchParams = useSearchParams();
  const [productCategory, setProductCategory] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const category = searchParams.get("category");
    if (category) {
      setProductCategory(category);
    }
  }, [searchParams]);

  return (
      <ProductsWithFilter fetchURL={`${getProductsByCategoryRoute}?category=${productCategory}`} />
  );
}
