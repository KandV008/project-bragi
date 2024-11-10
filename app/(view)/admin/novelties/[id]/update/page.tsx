import AdminUpdateNovelty from "@/app/ui/containers/admin/novelties/adminUpdateNovelty";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Actualizar Novedad",
};

export default function Page() {
  return (
    <AdminUpdateNovelty />
  );
}
