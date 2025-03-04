"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import ProductsWithFilter from "@/app/ui/containers/search/productsWithFilter";
import { getProductsByCategoryRoute } from "@/app/api/routes";

/**
 * Page component that retrieves the product category from the URL query string and
 * fetches products based on the category. It uses `ProductsWithFilter` to display 
 * the filtered products with their respective filters applied.
 * 
 * The component reacts to changes in the `category` query parameter and updates
 * the list of products accordingly.
 * 
 * @returns {JSX.Element} The page component that displays filtered products based on the category.
 */
export default function Page(): JSX.Element {
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
