"use client";

import SearchBar from "./ui/components/inputs/searchBar";
import SmallButton from "./ui/components/buttons/smallButton";
import { useRouter } from "next/navigation";
import CarouselWithAction from "./ui/containers/main/carousel";
import Certifications from "./ui/containers/main/certifications";
import LatestNovelties from "./ui/containers/main/latestNovelties";
import PageReviews from "./ui/containers/main/pageReviews";
import WorkingFlow from "./ui/containers/main/workingFlow";

export default function Home() {
  const router = useRouter();

  const handleEarphoneClick = () => {
    router.push("/search?category=EARPHONE");
  };

  const handleAccessoriesClick = () => {
    router.push("/search?category=ACCESSORY");
  };

  return (
    <main className="flex flex-col flex-grow justify-center space-y-3 md:space-y-10 py-5 w-11/12 xl:w-4/6 place-self-center ">
      <CarouselWithAction />
      <section className="flex flex-col px-5 py-5 sm:px-10 md:px-20 gap-4 sm:py-8 lg:py-16">
        <SearchBar />
        <div className="flex flex-row justify-around sm:justify-center sm:space-x-14">
          <SmallButton text="Audífonos" onClick={handleEarphoneClick} />
          <SmallButton text="Accesorios" onClick={handleAccessoriesClick} />
        </div>
      </section>
      <LatestNovelties />
      <WorkingFlow />
      <Certifications />
      <PageReviews />
    </main>
  );
}
