import AdminProductList from "@/app/ui/containers/admin/products/adminProductList/adminProductList";
import { Metadata } from "next";

/**
 * Metadata for the Admin Products Page
 * Defines the title of the page as "Administrar Productos".
 */
export const metadata: Metadata = {
  title: "Administrar Productos",
};

/** 
 * This component renders the `AdminProductList`, which displays and manages the list of products.
 *
 * @returns {JSX.Element} A React component for managing products.
 */
export default function Page(): JSX.Element {
  return <AdminProductList />;
}
