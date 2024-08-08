import { ProductContainerSkeleton } from "@/app/ui/components/common/productContainer";

export default function Loading(){
    return (
        <section>
            <div className="md:size-fit lg:px-12">
                <ProductContainerSkeleton />
            </div>
        </section>
    );
}