import SomeProductContainer from "../../common/someProductContainer";
import { useState } from "react";
import { useEffect } from "react";

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

  if (isLoading) return <p>Loading...</p> // TODO Loanding Screen

  console.log(data)

  if (!data) return <p>No product data</p>
  return (
    <section className="flex flex-col jusify-center sm:justify-start">
      <h1
        className="text-primary2 dark:text-secondary0
            text-xl md:text-2xl lg:text-3xl font-bold
            w-fit sm:w-48 md:w-60 lg:w-72"
      >
        Últimas novedades
        <div className="sm:w-48 md:w-60 lg:w-72 border-t mb-3 border-primary2 dark:border-secondary0"></div>
      </h1>
      <article className="flex flex-row flex-wrap justify-center gap-4 2xl:justify-around xl:gap-8">
        <SomeProductContainer listProducts={data} />
      </article>
    </section>
  );
}
