import SmallButton from "../ui/components/buttons/smallButton/smallButton";
import Certifications from "../ui/containers/main/certifications/certifications";
import { getLatestProductsRoute } from "../api/routes";
import SomeProductContainer from "../ui/components/products/someProductContainer/someProductContainer";
import SearchBar from "../ui/components/inputs/searchBar/searchBar";
import CarouselWithAction from "../ui/containers/main/carousel/carousel";
import WorkingFlow from "../ui/containers/main/workingflow/workingFlow";

/**
 * Home component represents the landing page of the website.
 * It includes a carousel, search bar, product categories buttons, and sections for novelties, working flow, and certifications.
 *
 * @returns {JSX.Element} The homepage layout with interactive elements and product sections.
 */
export default function Home(): JSX.Element {
  return (
    <>
      <CarouselWithAction />
      <section className="flex flex-col px-5 py-5 sm:px-10 md:px-20 gap-4 sm:py-8 lg:py-16">
        {/* Search bar with option to collapse */}
        <SearchBar isCompress={false} />
        <div className="flex flex-row justify-around sm:justify-center sm:space-x-14">
          {/* Buttons for product categories */}
          <SmallButton text="Audífonos" href="/search?category=EARPHONE" />
          <SmallButton text="Accesorios" href="/search?category=ACCESSORY" />
        </div>
      </section>
      {/* Container displaying the latest novelties */}
      <SomeProductContainer fetchUrl={`${getLatestProductsRoute}`} title={"Últimas novedades"} />
      {/* Working flow section */}
      <WorkingFlow />
      {/* Certifications section */}
      <Certifications />
    </>
  );
}
