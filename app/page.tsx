
import CarouselWithAction from "./components/pages/main/carousel";
import Certifications from "./components/pages/main/certifications";
import LatestNovelties from "./components/pages/main/latestNovelties";
import PageReviews from "./components/pages/main/pageReviews";
import WorkingFlow from "./components/pages/main/workingFlow";
import SearchBar from "./components/inputs/searchBar";
import SmallButton from "./components/buttons/smallButton";

export default function Home() {
  return (
    <main className="flex flex-col flex-grow justify-center space-y-3 md:space-y-10 py-5 w-11/12 xl:w-4/6 place-self-center ">
      <CarouselWithAction />
      <section className="flex flex-col px-5 py-5 sm:px-10 md:px-20 gap-4 sm:py-8 lg:py-16">
        <SearchBar />
        <div className="flex flex-row justify-around sm:justify-center sm:space-x-14">
          <SmallButton text="Audífonos" href="/search" />
          <SmallButton text="Accesorios" href="/search" />
        </div>
      </section>
      <LatestNovelties />
      <WorkingFlow />
      <Certifications />
      <PageReviews />
    </main>
  );
}
