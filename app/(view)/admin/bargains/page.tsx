import AdminBargainList from "@/app/ui/containers/admin/bargains/adminBargainList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administrar Ofertas",
};

export default function Page() {
  return (
    <AdminBargainList />
  );
}
