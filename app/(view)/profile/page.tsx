import UserDashboard from "@/app/ui/containers/profile/userDashboard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Perfil",
};

export default function Page() {
  return (
    <>
      <UserDashboard />
    </>
  );
}
