import AdminBargain from "@/app/ui/containers/admin/bargains/adminBargain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ver Oferta",
};

export default function Page() {
  return (
    <AdminBargain />
  );
}
