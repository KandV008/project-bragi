import { AdminUpdateBargainSkeleton } from "@/app/ui/containers/admin/bargains/adminUpdateBargain";
import { Metadata } from "next";
import dynamic from "next/dynamic";

const AdminUpdateBargain = dynamic(
  () => import("@/app/ui/containers/admin/bargains/adminUpdateBargain"),
  { ssr: false, loading: () => <AdminUpdateBargainSkeleton /> }
);

/**
 * Metadata for the page, defining the title.
 */
export const metadata: Metadata = {
  title: "Actualizar Oferta",
};

/**
 * Page component for updating a bargain.
 * This component renders the `AdminUpdateBargain` container.
 *
 * @returns {JSX.Element} The AdminUpdateBargain page component.
 */
export default function Page(): JSX.Element {
  return <AdminUpdateBargain />;
}
