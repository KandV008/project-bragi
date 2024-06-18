import Product from "../searchPage/product";

export default function RelatedProducts() {
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
        <Product />
        <Product />
        <div className="hidden sm:block">
          <Product />
        </div>
        <div className="hidden lg:block xl:hidden 2xl:block">
          <Product />
        </div>
      </article>
    </section>
  );
}
