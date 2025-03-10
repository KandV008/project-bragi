import AdminBargainList from "@/app/ui/containers/admin/bargains/adminBargainList";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Administrar Ofertas",
};

/**
 * Page component for managing bargains.
 * This component renders the `AdminBargainList` container.
 *
 * @returns {JSX.Element} The AdminBargainList page component.
 */
export default function Page(): JSX.Element {
  return <AdminBargainList />;
}
