import AdminProduct from "@/app/ui/containers/admin/products/adminProduct/adminProduct";
import { Metadata } from "next";

/**
 * Metadata for the View Product Page
 * Sets the title of the page to "Ver Producto".
 */
export const metadata: Metadata = {
  title: "Ver Producto",
};

/**
 * This page displays detailed information about a specific product.
 *
 * @returns {JSX.Element} A React component that renders product details.
 */
export default function Page(): JSX.Element {
  return <AdminProduct />;
}
