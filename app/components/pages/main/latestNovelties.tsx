import { ProductEntity } from "@/app/model/Product";
import Product from "../search/product";
import { getLatestNovelties } from "@/app/lib/data";

export default async function LatestNovelties() {
  const lastProducts: ProductEntity[] = await getLatestNovelties();

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
        <Product
          id={lastProducts[0].id}
          image={lastProducts[0].colors[0].images[0]}
          name={lastProducts[0].name}
          brand={lastProducts[0].brand}
          price={lastProducts[0].price.toString()}
        />
        <Product
          id={lastProducts[1].id}
          image={lastProducts[1].colors[0].images[0]}
          name={lastProducts[1].name}
          brand={lastProducts[1].brand}
          price={lastProducts[1].price.toString()}
        />
        {lastProducts.length > 2 ? (
          <div className="hidden sm:block">
            <Product
              id={lastProducts[2].id}
              image={lastProducts[2].colors[0].images[0]}
              name={lastProducts[2].name}
              brand={lastProducts[2].brand}
              price={lastProducts[2].price.toString()}
            />{" "}
          </div>
        ) : (
          <></>
        )}
        {lastProducts.length > 3 ? (
          <div className="hidden lg:block xl:hidden 2xl:block">
            <Product
              id={lastProducts[3].id}
              image={lastProducts[3].colors[0].images[0]}
              name={lastProducts[3].name}
              brand={lastProducts[3].brand}
              price={lastProducts[3].price.toString()}
            />{" "}
          </div>
        ) : (
          <></>
        )}
      </article>
    </section>
  );
}
