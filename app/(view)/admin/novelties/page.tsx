import AdminNoveltyList from "@/app/ui/containers/admin/novelties/adminNoveltyList";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administrar Novedades",
};

export default function Page() {
  return (
    <AdminNoveltyList />
  );
}
