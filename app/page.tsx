import SearchBar from "./ui/components/inputs/searchBar";
import SmallButton from "./ui/components/buttons/smallButton";
import CarouselWithAction from "./ui/containers/main/carousel";
import Certifications from "./ui/containers/main/certifications";
import WorkingFlow from "./ui/containers/main/workingFlow";
import SomeProductContainer from "./ui/components/products/someProductContainer";

export default function Home() {
  return (
    <>
      <CarouselWithAction />
      <section className="flex flex-col px-5 py-5 sm:px-10 md:px-20 gap-4 sm:py-8 lg:py-16">
        <SearchBar isCompress={false} />
        <div className="flex flex-row justify-around sm:justify-center sm:space-x-14">
          <SmallButton text="Audífonos" href="/search?category=EARPHONE" />
          <SmallButton text="Accesorios" href="/search?category=ACCESSORY" />
        </div>
      </section>
      <SomeProductContainer fetchUrl={`/api/getLatestNovelties`} title={"Últimas novedades"} />
      <WorkingFlow />
      <Certifications />
    </>
  );
}
