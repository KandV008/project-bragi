import { useState } from "react";
import { useEffect } from "react";
import SectionHeader from "../../components/common/sectionHeader";
import ProductContainer, { SomeProductContainerSkeleton } from "../../components/common/productContainer";

export default function LatestNovelties() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`/api/getLatestNovelties`)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, []);

  if (isLoading) return <LatestNoveltiesSkeleton />;
  if (!data) return <p>No product data</p>; //TODO Add Message
  
  return (
    <section className="flex flex-col jusify-center sm:justify-start">
      <SectionHeader text="Últimas novedades" />
      <ProductContainer products={data} showMoreButton={false} />
    </section>
  );
}

const shimmer =
  "before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent";

export function LatestNoveltiesSkeleton() {
  return (
    <div className={`${shimmer} relative w-full overflow-hidden md:col-span-4`}>
      <SectionHeader text="Últimas novedades" />
      <SomeProductContainerSkeleton />
    </div>
  );
}
