import { ProductFormSkeleton } from "@/app/ui/containers/admin/products/productForm";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const ProductForm = dynamic(
  () => import("@/app/ui/containers/admin/products/productForm"),
  { ssr: false, loading: () => <ProductFormSkeleton /> }
);

const AdminPanel = dynamic(
  () => import("@/app/ui/containers/admin/adminPanel"),
  { ssr: false }
);

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
      <AdminPanel
        entity={"product"}
        context={"CREATE"}
        extras={{
          entityId: undefined,
          url: undefined,
        }}
      />
      <ProductForm />
    </section>
  );
}
