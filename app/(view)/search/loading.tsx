import { ProductContainerSkeleton } from "@/app/ui/components/products/productContainer";
import { FilterSkeleton } from "@/app/ui/containers/search/filter/filter";

/** 
 * This component renders skeleton placeholders for the product filter and product container
 * while the content is loading.
 * 
 * @component
 * @returns {JSX.Element} The loading skeleton component.
 */
export default function Loading(): JSX.Element{
    return (
        <div className="flex flex-row w-full justify-between">
            <FilterSkeleton />
            <div className="md:size-fit lg:px-12">
                <ProductContainerSkeleton />
            </div>
        </div>
    );
}