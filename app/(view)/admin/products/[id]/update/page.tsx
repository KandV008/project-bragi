import AdminUpdateProduct from "@/app/ui/containers/admin/products/adminUpdateProduct";
import { Metadata } from "next";

/**
 * Metadata for the Update Product Page

 * Sets the title of the page to "Actualizar Producto".
 */
export const metadata: Metadata = {
  title: "Actualizar Producto",
};

/**
 * This page allows for updating the details of an existing product.
 *
 * @returns {JSX.Element} A React component for updating a product's information.
 */
export default function Page(): JSX.Element {
  return <AdminUpdateProduct />;
}
