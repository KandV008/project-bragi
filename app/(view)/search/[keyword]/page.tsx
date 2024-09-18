"use client";

import { usePathname } from "next/navigation";
import ProductsWithFilter from "@/app/ui/containers/search/productsWithFilter";

export default function Page() {
  const pathname = usePathname();
  const keyword = pathname.split("/").pop();

  return (
    <ProductsWithFilter fetchURL={`/api/getProductsByKeyword?keyword=${keyword}`} />
  );
}
