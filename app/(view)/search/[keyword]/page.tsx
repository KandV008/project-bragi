"use client";

import { usePathname } from "next/navigation";
import ProductsWithFilter from "@/app/ui/containers/search/productsWithFilter";
import { getProductsByKeywordRoute } from "@/app/api/routes";

export default function Page() {
  const pathname = usePathname();
  const keyword = pathname.split("/").pop();

  return (
    <ProductsWithFilter fetchURL={`${getProductsByKeywordRoute}?keyword=${keyword}`} />
  );
}
