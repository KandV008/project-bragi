import { AdminProductSkeleton } from "@/app/ui/containers/admin/products/adminProduct";
import { Metadata } from "next";
import dynamic from "next/dynamic";

/**
 * Metadata for the View Product Page
 * Sets the title of the page to "Ver Producto".
 */
export const metadata: Metadata = {
  title: "Ver Producto",
};

const AdminProduct = dynamic(
  () => import("@/app/ui/containers/admin/products/adminProduct"),
  { ssr: false, loading: () => <AdminProductSkeleton /> }
);

/**
 * This page displays detailed information about a specific product.
 *
 * @returns {JSX.Element} A React component that renders product details.
 */
export default function Page(): JSX.Element {
  return <AdminProduct />;
}
