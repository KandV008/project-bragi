import { ProductEntity } from "@/app/model/Product";
import ProductDetails from "./productDetails";
import ProductOptions from "./productOptions";

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
                adaptationRange={product.adaptation_range}
                dustWaterResistance={product.dust_water_resistance}
                location={product.location}
                levelOfDiscretion={product.level_of_discretion}
                degreeOfLoss={product.degree_of_loss}
                uses={product.uses}
            />
        </section>
    )
}