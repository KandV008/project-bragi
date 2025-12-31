import { AdminUpdateNoveltySkeleton } from "@/app/ui/containers/admin/novelties/adminUpdateNovelty";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AdminUpdateNovelty = dynamic(
  () => import("@/app/ui/containers/admin/novelties/adminUpdateNovelty"),
  { ssr: false, loading: () => <AdminUpdateNoveltySkeleton /> }
);

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Actualizar Novedad",
};

/**
 * Page component for updating a novelty.
 * This component renders the `AdminUpdateNovelty` container.
 *
 * @returns {JSX.Element} The AdminUpdateNovelty page component.
 */
export default function Page(): JSX.Element {
  return <AdminUpdateNovelty />;
}
