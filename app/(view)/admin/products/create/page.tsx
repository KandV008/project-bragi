import ProductForm from "@/app/ui/containers/admin/products/productForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Crear Producto",
};

export default function Page() {
  return (
    <section>
      <ProductForm />
    </section>
  );
}
