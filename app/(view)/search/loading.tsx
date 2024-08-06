import { ProductContainerSkeleton } from "@/app/ui/components/common/productContainer";
import { FilterSkeleton } from "@/app/ui/containers/search/filter";

export default function Loading(){
    return (
        <div className="flex flex-row w-full justify-between">
            <FilterSkeleton />
            <div className="md:size-fit lg:px-12">
                <ProductContainerSkeleton />
            </div>
        </div>
    );
}