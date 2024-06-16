import Filter from "./filter";
import ProductContainer from "./productContainer";


export default function SearchPage(){
    return (
        <main className="flex flex-grow  justify-center space-x-2 py-5 sm:w-5/6 xl:w-4/6 place-self-center ">
            <Filter />
            <div className="md:size-fit lg:px-12">
                <ProductContainer />
            </div>
        </main>
    );
}