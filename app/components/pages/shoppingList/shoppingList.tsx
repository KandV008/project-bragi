import ProductInformation from "@/app/components/pages/shoppingList/productInformation";

export default function ShoppingList() {
  return (
    <section className="flex flex-col gap-5">
      <ProductInformation />
      <ProductInformation />
      <ProductInformation />
      <ProductInformation />
    </section>
  );
}
