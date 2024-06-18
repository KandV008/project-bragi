import AboutProduct from "./aboutProduct";
import Guarantee from "./guarantee";
import RelatedProducts from "./relatedProducts";

export default function AboutProductPage(){
    return (
        <main className="flex flex-col flex-grow justify-center space-y-3 md:space-y-10 py-5 w-11/12 xl:w-4/6 place-self-center ">
            <AboutProduct />
            <Guarantee />
            <RelatedProducts />
        </main>
    );
}