import { AboutProductSkeleton } from "@/app/ui/containers/search/about/aboutProduct";
import { RelatedProductsSkeleton } from "@/app/ui/containers/search/about/relatedProducts";

export default function Loading() {
  return (
    <main className="flex flex-col flex-grow justify-center space-y-3 md:space-y-10 py-5 w-11/12 xl:w-4/6 place-self-center ">
      <AboutProductSkeleton />
      <RelatedProductsSkeleton />
    </main>
  );
}