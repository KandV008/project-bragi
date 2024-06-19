import ProductDetails from "./productDetails";
import ProductOptions from "./productOptions";


export default function AboutProduct(){
    return (
        <section className="flex flex-col gap-3">
            <ProductOptions />
            <ProductDetails />
        </section>
    )
}