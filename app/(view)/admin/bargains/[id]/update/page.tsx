import AdminUpdateBargain from "@/app/ui/containers/admin/bargains/adminUpdateBargain";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualizar Oferta",
};

export default function Page() {
  return (
    <AdminUpdateBargain />
  );
}
