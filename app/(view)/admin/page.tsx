import AdminDashboard from "@/app/ui/containers/admin/adminDashboard";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Panel de Control",
};

export default function Page() {
  return (
    <>
      <AdminDashboard />
    </>
  );
}
