import AdminNoveltyList from "@/app/ui/containers/admin/novelties/adminNoveltyList/adminNoveltyList";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Administrar Novedades",
};

/**
 * Page component for managing novelties.
 * This component renders the `AdminNoveltyList` container.
 *
 * @returns {JSX.Element} The AdminNoveltyList page component.
 */
export default function Page(): JSX.Element {
  return <AdminNoveltyList />;
}
