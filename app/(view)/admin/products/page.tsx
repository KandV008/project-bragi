import AdminProductList from "@/app/ui/containers/admin/products/adminProductList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administrar Productos",
};

export default function Page() {
  return (
    <AdminProductList />
  );
}
