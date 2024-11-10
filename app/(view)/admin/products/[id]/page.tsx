import AdminProduct from "@/app/ui/containers/admin/products/adminProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ver Producto",
};

export default function Page() {
  return (
    <AdminProduct />
  );
}
