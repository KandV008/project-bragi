import { useState } from "react";
import { useEffect } from "react";
import SomeProductContainer, { SomeProductContainerSkeleton } from "../../components/common/someProductContainer";
import SectionHeader from "../../components/common/sectionHeader";

export default function LatestNovelties() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
      fetch(`/api/getLatestNovelties`)
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
        .catch((error) => console.error("Error fetching product:", error));
    
  }, []);

  if (isLoading) return (<LatestNoveltiesSkeleton />)

  console.log(data)

  if (!data) return <p>No product data</p>
  return (
    <section className="flex flex-col jusify-center sm:justify-start">
      <SectionHeader text="Últimas novedades" />
      <article className="flex flex-row flex-wrap justify-center gap-4 2xl:justify-around xl:gap-8">
        <SomeProductContainer listProducts={data} />
      </article>
    </section>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function LatestNoveltiesSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <h1
        className="text-primary2 dark:text-secondary0
            text-xl md:text-2xl lg:text-3xl font-bold
            w-fit sm:w-48 md:w-60 lg:w-72"
      >
        Últimas novedades
        <div className="sm:w-48 md:w-60 lg:w-72 border-t mb-3 border-primary2 dark:border-secondary0"></div>
      </h1>
      <article className="flex flex-row flex-wrap justify-center gap-4 2xl:justify-around xl:gap-8">
        <SomeProductContainerSkeleton />
      </article>
    </div>
  );
}
