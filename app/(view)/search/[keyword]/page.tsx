"use client";

import { usePathname } from "next/navigation";
import ProductsWithFilter from "@/app/ui/containers/search/productsWithFilter";
import { getProductsByKeywordRoute } from "@/app/api/routes";

/**
 * This component fetches products based on a keyword extracted from the URL path.
 * It utilizes `ProductsWithFilter` to display the filtered products.
 *
 * @returns {JSX.Element} A React component that renders the filtered product list.
 */
export default function Page(): JSX.Element {
  const pathname = usePathname();
  const keyword = pathname.split("/").pop();

  return (
    <ProductsWithFilter fetchURL={`${getProductsByKeywordRoute}?keyword=${keyword}`} />
  );
}
