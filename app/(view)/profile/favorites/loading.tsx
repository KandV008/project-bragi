import { ProductContainerSkeleton } from "@/app/ui/components/products/productContainer/productContainer";

/**
 * Loading component for the product page.
 * Displays a skeleton placeholder while the product data is being fetched.
 * 
 * @returns {JSX.Element} A section containing the ProductContainerSkeleton.
 */
export default function Loading(): JSX.Element {
    return (
        <section>
            <ProductContainerSkeleton />
        </section>
    );
}
