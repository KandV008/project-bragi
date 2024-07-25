import { ProductContainerSkeleton } from "@/app/ui/components/common/productContainer";
import { FilterSkeleton } from "@/app/ui/containers/search/filter";

export default function Loading(){
    return (
        <main className="flex flex-grow  justify-center space-x-2 py-5 sm:w-5/6 xl:w-4/6 place-self-center ">
            <FilterSkeleton />
            <div className="md:size-fit lg:px-12">
                <ProductContainerSkeleton />
            </div>
        </main>
    );
}