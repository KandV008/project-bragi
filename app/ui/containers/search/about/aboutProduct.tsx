import { ProductEntity } from "@/app/model/entities/Product";
import ProductDetails, { ProductDetailsSkeleton } from "./productDetails";
import ProductOptions, { ProductOptionsSkeleton } from "./productOptions";

interface AboutProductProps {
    product: ProductEntity
  }

export default function AboutProduct({ product }: AboutProductProps){
    return (
        <section className="flex flex-col gap-3">
            <ProductOptions 
                id={product.id}
                name={product.name}
                price={product.price.toString()}
                colors={product.colors}
                brand={product.brand}
                include={product.include}
            />
            <ProductDetails 
                description={product.description}
                adaptationRange={product.adaptationRange}
                dustWaterResistance={product.waterDustResistance}
                location={product.location}
                levelOfDiscretion={product.levelOfDiscretion}
                degreeOfLoss={product.degreeOfLoss}
                uses={product.uses}
            />
        </section>
    )
}

export function AboutProductSkeleton() {
    return (
      <section className="flex flex-col gap-3">
        <ProductOptionsSkeleton />
        <ProductDetailsSkeleton />
      </section>
    );
  }