import AdminNovelty from "@/app/ui/containers/admin/novelties/adminNovelty";
import { Metadata } from "next";

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Ver Novedad",
};

/**
 * Page component for viewing a novelty.
 * This component renders the `AdminNovelty` container.
 *
 * @returns {JSX.Element} The AdminNovelty page component.
 */
export default function Page(): JSX.Element {
  return <AdminNovelty />;
}
