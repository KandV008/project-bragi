import { AdminProductListSkeleton } from "@/app/ui/containers/admin/products/adminProductList";
import { Metadata } from "next";
import dynamic from "next/dynamic";

/**
 * Metadata for the Admin Products Page
 * Defines the title of the page as "Administrar Productos".
 */
export const metadata: Metadata = {
  title: "Administrar Productos",
};

const AdminProductList = dynamic(
  () => import("@/app/ui/containers/admin/products/adminProductList"),
  {
    ssr: false,
    loading: () => <AdminProductListSkeleton />,
  }
);

/** 
 * This component renders the `AdminProductList`, which displays and manages the list of products.
 *
 * @returns {JSX.Element} A React component for managing products.
 */
export default function Page(): JSX.Element {
  return <AdminProductList />;
}
