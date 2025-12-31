import { Metadata } from "next";
import dynamic from "next/dynamic";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Panel de Control",
};

const AdminDashboard = dynamic(() => import("@/app/ui/containers/admin/adminDashboard"), {
  ssr: false, 
  loading: () => <></>,
});

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
