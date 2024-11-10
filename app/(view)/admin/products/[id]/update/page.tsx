import AdminUpdateProduct from "@/app/ui/containers/admin/products/adminUpdateProduct";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualizar Producto",
};

export default function Page() {
  return (
    <AdminUpdateProduct />
  );
}
