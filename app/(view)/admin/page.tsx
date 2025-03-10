import AdminDashboard from "@/app/ui/containers/admin/adminDashboard";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Panel de Control",
};

/**
 * Page component for the admin dashboard.
 * This component renders the `AdminDashboard` container.
 *
 * @returns {JSX.Element} The AdminDashboard page component.
 */
export default function Page(): JSX.Element {
  return (
    <>
      <AdminDashboard />
    </>
  );
}
