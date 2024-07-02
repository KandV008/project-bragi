import { RelatedProductsSkeleton } from "../../common/skeletons";
import SomeProductContainer from "../../common/someProductContainer";
import { useState, useEffect } from "react";

interface RelatedProductsProps {
  id: string, // TODO Check that the product available doesn't have this id
  brand: string,
  price: number
}

export default function RelatedProducts({ brand, price}: RelatedProductsProps) {

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true)


  useEffect(() => {
    if (brand && price) {
      fetch(`/api/getRelatedProducts?brand=${brand}&price=${price.toString}`)
        .then((response) => response.json())
        .then((data) => {
            setData(data)
            setLoading(false)
        })
        .catch((error) => console.error("Error fetching product:", error));
    }
  }, [brand, price]);

  if (isLoading) return <RelatedProductsSkeleton /> // TODO Loanding Screen
  if (!data) return <p>No product data</p>

  return (
    <section className="flex flex-col jusify-center sm:justify-start">
      <h1
        className="text-primary2 dark:text-secondary0
            text-xl md:text-2xl lg:text-3xl font-bold
            w-fit"
      >
        Productos relacionados
        <div className="w-full border-t mb-3 border-primary2 dark:border-secondary0"></div>
      </h1>
      <article className="flex flex-row flex-wrap justify-center gap-4 2xl:justify-around xl:gap-8">
        <SomeProductContainer listProducts={data}/>
      </article>
    </section>
  );
}
