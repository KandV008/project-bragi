import AdminNovelty from "@/app/ui/containers/admin/novelties/adminNovelty";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ver Novedad",
};

export default function Page() {
  return (
    <AdminNovelty />
  );
}
