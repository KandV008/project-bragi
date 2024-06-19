import AboutProduct from "@/app/components/pages/about/aboutProduct";
import Guarantee from "@/app/components/pages/about/guarantee";
import RelatedProducts from "@/app/components/pages/about/relatedProducts";

export default function Page(){
    return (
        <main className="flex flex-col flex-grow justify-center space-y-3 md:space-y-10 py-5 w-11/12 xl:w-4/6 place-self-center ">
            <AboutProduct />
            <Guarantee />
            <RelatedProducts />
        </main>
    );
}