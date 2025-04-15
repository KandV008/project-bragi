import ProductForm from "@/app/ui/containers/admin/products/productForm/productForm";
import { Metadata } from "next";

/**
 * Metadata for the Create Product Page
 * Sets the title of the page to "Crear Producto".
 */
export const metadata: Metadata = {
  title: "Crear Producto",
};

/**
 * This page renders a form for creating a new product.
 *
 * @returns {JSX.Element} A React component that displays the product creation form.
 */
export default function Page(): JSX.Element {
  return (
    <section>
      <ProductForm />
    </section>
  );
}
