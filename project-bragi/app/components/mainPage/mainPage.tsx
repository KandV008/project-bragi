import SearchBar from "../searchBar";
import SmallButton from "../smallButton";
import CarouselWithAction from "./carousel";
import Certifications from "./certifications";
import LatestNovelties from "./latestNovelties";
import PageReviews from "./pageReviews";
import WorkingFlow from "./workingFlow";


export default function MainPage(){
    return (
        <main className="flex flex-col flex-grow justify-center space-y-3 md:space-y-10 py-5 w-11/12 xl:w-4/6 place-self-center ">
            <CarouselWithAction />
            <section className="flex flex-col px-5 py-5 sm:px-10 md:px-20 gap-4 sm:py-8 lg:py-16">
                <SearchBar />
                <div className="flex flex-row justify-around sm:justify-center sm:space-x-14">
                <SmallButton text="Audífonos" />
                <SmallButton text="Accesorios" />
                </div>
            </section>
            <LatestNovelties />
            <WorkingFlow />
            <Certifications />
            <PageReviews />            
        </main>
    );
}