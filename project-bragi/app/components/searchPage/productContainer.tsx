import Product from "./product";

export default function ProductContainer() {
  return (
    <section className="flex flex-wrap gap-4 lg:gap-8 justify-center lg:justify-start shrink-0 w-fit">
      <Product />
      <Product />
      <Product />
      <Product />
    </section>
  );
}
